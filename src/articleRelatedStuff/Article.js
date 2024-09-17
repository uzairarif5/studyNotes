import React, { useEffect, useState } from 'react';
import './Article.scss';
import $ from 'jquery';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactComp } from "../Contact.js";
import { fadeLoadingToInsv , changeLoadingText, showLoadingScreen} from "../loadingScreen.js";
import { Link } from 'react-router-dom';
import { SideB, showSideB, hideSideB, CloseListsButton } from './sideButtons.js';
import { ImgView } from './ImgView';
import styles from "../variables.module.scss";
import { useNavigate } from "react-router-dom";
import store from "../store";
import { FORM_COUNTER, Q_COUNTER, CLOSING_LIST_PROCESS } from "../actions";
import { sourceList } from './sourceList.js';
import { onlyText } from 'react-children-utilities';
import { QuestionsBox } from './Questions.js';

const ERROR_VAL = "ERROR";

class Article extends React.Component {
	static lastSavedScrollY = 0;

	constructor(props) {
		super(props);
		showLoadingScreen();
		store.dispatch({
			type: FORM_COUNTER,
			payload: 0
		});
		store.dispatch({
			type: Q_COUNTER,
			payload: 0
		});
		store.dispatch({
			type: CLOSING_LIST_PROCESS,
			payload: false
		});
		this.sourcesColor = [];
		this.mainEl = document.getElementById("main");
		this.pathnameToUse = window.location.pathname;
		this.state = {wholeContent: null, footerEl: null};
	}

	getReferenceEl(h2s){
		return <><h4>Contents:</h4><ol id='reference'>{h2s.map((el, index)=>
			<li key={index}><a href={"#" + el.props.id}>{el.props.children}</a></li>
		)}</ol></>;
	}

	setFooterEl(){
		const noWSFooter = <footer>
			<Link to="/">Home Page</Link>
			<button onClick={ () => store.dispatch({
				type: FORM_COUNTER,
				payload: -1
			})}>Contact Us</button>
		</footer>;

		const WSFooter = <footer style={{gridTemplateColumns:"33% 33% 33%"}}>
			<Link to="/" onClick={showLoadingScreen}>Home Page</Link>
			<Link to={"worksheet?topic=" + this.pathnameToUse.slice(1)}>Worksheet</Link>
			<button onClick={ () => store.dispatch({
				type: FORM_COUNTER,
				payload: -1
			})}>Contact Us</button>
		</footer>;

		if(window.screen.width <= parseInt(styles.maxWidthForMobile))
			//no worksheet for mobile
			this.setState({footerEl: noWSFooter});
		else{
			//for code splitting and checking if worksheet exists
			//there's probably a better way of doing this
			import("../pages"+this.pathnameToUse+"_worksheet")
			.then(()=>this.setState({footerEl: WSFooter}))
			.catch(()=>this.setState({footerEl: noWSFooter}));
		}
	}

	setWholeContent(){
		import("../pages"+this.pathnameToUse+".js")
		.then(res => {this.setState({wholeContent: {
			"title": res.title,
			"content": res.content,
			"sc": res.sourcesColor
		}})})
		.catch(()=>this.setState({wholeContent: ERROR_VAL}));
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

	getElementToRender(){
		let mainContent = this.state.wholeContent["content"].props.children;
		let h2s = mainContent.reduce(function(arr, curEl) {
			if (curEl.type === "h2") arr.push(curEl);
			return arr;
		},[]);
		this.sourcesColor = this.state.wholeContent["sc"];
		let additionalResourcesHeader = 
		(mainContent[2].props.id === "additionalResources") ? <h4>Additional Resources:</h4> : null;
		return <HelmetProvider>
			<Helmet>
				<title>{this.state.wholeContent["title"]}</title>
			</Helmet>
			<div id='article'>
				<div id="notFooter">
					{mainContent[0]}
					{this.getReferenceEl(h2s)}
					{mainContent[1]}
					{additionalResourcesHeader}
					{mainContent.slice(2)}
				</div>
				{this.state.footerEl}
				<ImgView/>
				<QuestionsBox/>
				<CloseListsButton/>
				<SideB
					name={"upButton"}
					clickFunc={() => {this.mainEl.scrollTo(0,0);}}
					imageSrc={process.env.PUBLIC_URL+'/webPics/caret-up-solid.svg'}
					title={"Go Up"}
				/>
				<SideB
					name={"downButton"}
					clickFunc={()=>{this.mainEl.scrollTo(0, this.mainEl.scrollHeight);}}
					imageSrc={process.env.PUBLIC_URL+'/webPics/caret-down-solid.svg'}
					title={"Go Down"}
				/>
			</div>
			<ContactComp/>
		</HelmetProvider>;
	}

	render() {
		if (!this.state.footerEl) this.setFooterEl();
		else if (!this.state.wholeContent) this.setWholeContent();
		else if (this.state.wholeContent !== ERROR_VAL) return this.getElementToRender();
		return null;
	}

	componentDidUpdate() {
		if(this.state.wholeContent)
			document.fonts.ready.then(()=>this.cleanUp());
	}

	cleanUp(){
		if(this.state.wholeContent === ERROR_VAL){
			alert("Article not found");
			changeLoadingText("Going To Home Page");
			this.props.changeAR(false);
		}
		else {
			changeLoadingText("Gathering Notes"); 
			this.addDateEl();
			document.documentElement.style.backgroundColor = "#832";
			this.addTogglesToH()
			$(".content a, #sources a").attr("target","_blank");
			this.mainEl.addEventListener("scroll", this.scrollFunc);
			this.addColors();
			window.MathJax.typesetPromise();
			this.addKeyBinds();
			window.setTimeout(fadeLoadingToInsv, 1);
		}
	}

	addDateEl(){
		fetch(`https://api.github.com/repos/uzairarif5/studyNotes/commits?path=src/pages${this.pathnameToUse}.js`)
		.then(res => res.json())
		.then(res => {
			let dateText = res[0]["commit"]["committer"]["date"];
			if (dateText) {
				let dateStr = new Date(dateText).toString();
				let formatedDate = dateStr.substring(0, dateStr.indexOf(" ("));
				let dateEl = document.createElement("div");
				dateEl.innerHTML = `<small><b>Last Commit:</b> ${formatedDate}</small>`;
				dateEl.id = "date";
				document.querySelector("h1").after(dateEl);	
			}
		})
		.catch(err => {
			console.log("Adding the date element gave this error: ", err);
		});
	}
	
	addTogglesToH(){
		$('h2').on("click",(el)=> $(el.target).next().slideToggle());
		$('h3').on("click",(el)=> $(el.target).nextUntil('h3, br').slideToggle());
	}

	addColors(){
		let sc = this.sourcesColor;
		$('[data-source]').each(function(){
			let curList = $(this);
			let num = parseInt(curList.attr("data-source"));
			curList.css("background-color", sc[num]);
		});
	}

	addKeyBinds(){
		document.onkeyup = (e) => {
			if (e.key === "s"){
				$('[data-source]').each(function() {
					if (this.hasAttribute("title"))
						this.removeAttribute("title");
					else{
						let sourceNum = this.getAttribute("data-source");
						this.setAttribute("title","Source: " + onlyText(sourceList[sourceNum]));
					}
				})
			}
		}
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