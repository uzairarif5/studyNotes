import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import './Article.scss';
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactComp } from "../Contact.js";
import { fadeLoadingToInsv , changeLoadingText, showLoadingScreen} from "../loadingScreen.js";
import { Link } from 'react-router-dom';
import { sideB, showSideB, hideSideB } from './sideButtons.js';
import { ImgView } from './ImgView';
import styles from "../variables.module.scss";
import { useNavigate } from "react-router-dom";
import store from "../store";
import { FORM_COUNTER } from "../actions";
import { sourceList } from './sourceList.js';
import { onlyText } from 'react-children-utilities';

class Article extends React.Component {
	static lastSavedScrollY = 0;

	constructor(props) {
		super(props);
		store.dispatch({
			type: FORM_COUNTER,
			payload: 0
		});
		showLoadingScreen();
		this.sourcesColor = [];
		this.mainEl = document.getElementById("main");
		this.pathnameToUse = window.location.pathname;
		this.wholeContent = null;
	}

	getReferenceEl(h2s){
		return <><h4>Contents:</h4><ol id='reference'>{h2s.map((el, index)=>
			<li key={index}><a href={"#" + el.props.id}>{el.props.children}</a></li>
		)}</ol></>;
	}

	getFooterEl(){
		let footerEl = null;
		try {
			if(window.screen.width <= parseInt(styles.maxWidthForMobile))
				throw new Error("worksheet not available in mobile");
			require("../pages"+this.pathnameToUse+"_worksheet");
			footerEl = <footer style={{gridTemplateColumns:"33% 33% 33%"}}>
				<Link to="/" onClick={showLoadingScreen}>Home Page</Link>
				<Link to={"worksheet?topic=" + this.pathnameToUse.slice(1)}>Worksheet</Link>
				<button onClick={()=>{store.dispatch({
					type: FORM_COUNTER,
					payload: -1
				})}}>Contact Us</button>
			</footer>
		}
		catch (err) {footerEl = <footer>
			<Link to="/studyNotes">Home Page</Link>
			<button onClick={()=>{store.dispatch({
				type: FORM_COUNTER,
				payload: -1
			})}}>Contact Us</button>
		</footer>}
		return footerEl;
	}

	scrollFunc(el){
		if(Article.lastSavedScrollY !== el.target.scrollTop){
			if(el.target.scrollTop > 1000) showSideB("#upButton");
			else hideSideB("#upButton");
			if(el.target.scrollTop > el.target.scrollHeight-1000) hideSideB("#downButton");
			else showSideB("#downButton");
			Article.lastSavedScrollY = el.target.scrollTop;
		}
	}

	render() {
		//get whole content, 404 if page doesn't exists
		try{
			this.wholeContent = require("../pages"+this.pathnameToUse+".js");
		}
		catch{this.wholeContent = null;}
		if(this.wholeContent){
			//get content parts
			let mainContent = this.wholeContent.content.props.children;
			let subChildren = mainContent.slice(2);
			let h2s = subChildren.reduce(function(arr, curEl) {
				if (curEl.type === "h2") arr.push(curEl);
				else {
					let checkIfFragmentAndHasH2 = (curEl.props.children[0] !== undefined) && curEl.props.children[0].type === "h2";
					if (checkIfFragmentAndHasH2) arr.push(curEl.props.children[0]);
				}
				return arr;
			},[]);
			this.sourcesColor = this.wholeContent.sourcesColor;
			let additionalResourcesHeader = 
			(subChildren[1].props.id === "additionalResources") ? <h4>Additional Resources:</h4> : null;
			//finalize return value
			return <HelmetProvider>
				<Helmet>
					<title>{this.wholeContent.title}</title>
				</Helmet>
				<Suspense>
					<div id='article'>
						{<div id="notFooter">
							{mainContent[0]}
							{mainContent[1]}
							{this.getReferenceEl(h2s) /*will be set after mount*/}
							{subChildren[0]}
							{additionalResourcesHeader}
							{subChildren.slice(1) /* may or may not include #additionalResources */}
						</div>}
						{this.getFooterEl()}
						<ImgView/>
						{sideB(
							"upButton",
							() => {this.mainEl.scrollTo(0,0);},
							process.env.PUBLIC_URL+'/webPics/caret-up-solid.svg'
						)}
						{sideB(
							"downButton",
							()=>{this.mainEl.scrollTo(0, this.mainEl.scrollHeight);},
							process.env.PUBLIC_URL+'/webPics/caret-down-solid.svg'
						)}
					</div>
					<ContactComp/>
				</Suspense>
			</HelmetProvider>;
		}
		else return null;
	}

	componentDidMount() {
		window.setTimeout(()=>{ document.fonts.ready.then(()=>{
			if(this.wholeContent) {
				//change Loading Text
				changeLoadingText("Gathering Notes"); 
				//set body background color
				document.documentElement.style.backgroundColor = "#832";
				//Add hide function to headings
				$('h2').on("click",(el)=>{$(el.target).next().slideToggle();});
				$('h3').on("click",(el)=>{$(el.target).nextUntil('h3, br').slideToggle();});
				$("h3+ul").each(function(){this.previousElementSibling.style.backgroundColor= "rgba(0,0,0,0.05)";});
				//add target="_blank" at all anchors (except in footer)
				$(".content a, #sources a").attr("target","_blank");
				//Add scroll functionality
				this.mainEl.addEventListener("scroll",this.scrollFunc);
				//colorSources
				let sc = this.sourcesColor;
				$('[data-source]').each(function(){
					let curList = $(this);
					let num = parseInt(curList.attr("data-source"));
					curList.css("background-color", sc[num]);
					curList.attr("title","Source: " + onlyText(sourceList[num]));
				});
				//Format MathJax
				window.MathJax.typesetPromise();
				//final settings
				window.setTimeout(()=>{
					//Remove loading
					fadeLoadingToInsv();
					//incase of hash
					if(window.location.hash) window.location.href = window.location;
				}, 1);
			}
			else{
				//go to home page
				alert("Article not found");
				changeLoadingText("Going To Home Page");
				this.props.changeAR(false);
			}
		})}, 1);
	}

	componentWillUnmount() {
		this.mainEl.removeEventListener("scroll",this.scrollFunc);
	}
}

function ArticleWrapper(){
	const [allowRender, changeAR] = useState(true);
	const navigate = useNavigate();

	useEffect(()=>{
		if(!allowRender) navigate("/");
	});

	if(allowRender) return <Article changeAR={changeAR}/>;
	else return null;
}

export default ArticleWrapper;