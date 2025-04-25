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
import { QuestionsBox } from './Questions.js';

const ERROR_VAL = "ERROR";
const NO_SOURCES = "RENDER_WITHOUT_SOURCES";
const OFFLINE_MODE = false;
const DEV_MODE = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

class Article extends React.Component {

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
		this.mainEl = document.getElementById("main");
		this.pathnameToUse = window.location.pathname;
		this.allowCleanUp = false;
		this.state = {sourcesList: null, wholeContent: null, footerEl: null};
	}

	setWholeContent(){
		import("../pages"+this.pathnameToUse+".js")
		.then(res => this.setState({
			wholeContent: {
				"title": res.title,
				"content": res.content,
				"sourcesColor": res.sourcesColor,
				"sourcesOrder": res.sourcesOrder,
				"additionalResources": res.additionalResources
			}
		}))
		.catch(()=>{
			if (DEV_MODE) {
				import("../private_stuff"+this.pathnameToUse+".js")
				.then(res => this.setState({
					wholeContent: {
						"title": res.title,
						"content": res.content,
						"sourcesColor": res.sourcesColor,
						"sourcesOrder": res.sourcesOrder,
						"additionalResources": res.additionalResources
					}
				}))
				.catch(()=>{this.setState({wholeContent: ERROR_VAL})});
			}
			else this.setState({wholeContent: ERROR_VAL})
		});
	}

	setSourcesList(){
		if (OFFLINE_MODE) this.setState({sourcesList: NO_SOURCES});
		else {
			let inputObj = {
				"sourcesColor": this.state.wholeContent["sourcesColor"],
				"sourcesOrder": this.state.wholeContent["sourcesOrder"],
				"additionalResources": this.state.wholeContent["additionalResources"]
			};
			if (!inputObj["sourcesColor"]) this.setState({sourcesList: NO_SOURCES});
			else {
				let strInput;
				if (DEV_MODE)
					strInput = require("../private_stuff/private_json_input.js").default(inputObj);
				else strInput = JSON.stringify(inputObj);
				//fetch("http://127.0.0.1:8000/study_notes_backend/getList", {
				fetch("https://django-apps-38uv.onrender.com/study_notes_backend/getList", {
					method:"post", 
					body: strInput
				})
				.then(res=>res.text())
				.then(res=>this.setState({sourcesList: res}))
				.catch(()=>this.setState({sourcesList: ERROR_VAL}));
			}
		}
	}

	renderMainContent(){

		let references = <section>
			<h4>Contents:</h4>
			<ol id='reference'></ol>
		</section>;

		let SourcesSection = null;
		if(this.state.sourcesList !== NO_SOURCES){
			SourcesSection = <section dangerouslySetInnerHTML={{__html:
				this.state.sourcesList
			}}></section>;
		}
		
		let mainContent = this.state.wholeContent["content"].props.children;
		let heading = mainContent[0];
		let main = <main>{mainContent.slice(1)}</main>;
		
		return <HelmetProvider>
			<Helmet>
				<title>{this.state.wholeContent["title"]}</title>
			</Helmet>
			<div id='article'>
				<div id="notFooter">
					{heading}
					{references}
					{SourcesSection}
					{main}
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
		let wholeContentValid = this.state.wholeContent && this.state.wholeContent !== ERROR_VAL;
		let sourcesValid = this.state.sourcesList && this.state.sourcesList !== ERROR_VAL;
		if (wholeContentValid && sourcesValid){
			this.allowCleanUp = true;
			return this.renderMainContent();
		}
		return null;
	}

	//set footer first
	componentDidMount(){
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

	componentDidUpdate() {
		if (!this.state.wholeContent) this.setWholeContent();
		else if (!this.state.sourcesList) this.setSourcesList();
		else if(this.state.wholeContent === ERROR_VAL || this.state.sourcesList === ERROR_VAL){
			alert("Article not found");
			changeLoadingText("Going To Home Page");
			this.props.changeAR(false);
		}
		else if(this.allowCleanUp){
			this.allowCleanUp = false;
			document.fonts.ready.then(()=>this.cleanUp());
		}
	}

	cleanUp(){
		changeLoadingText("Formatting Notes"); 
		this.addDateEl();
		this.setReferenceEl();
		document.documentElement.style.backgroundColor = "#832";
		this.addTogglesToH()
		$(".content a, #sources a").attr("target","_blank");
		this.mainEl.addEventListener("scroll", this.scrollFunc);
		this.addColors();
		this.addKeyBinds();
		if (!OFFLINE_MODE) window.MathJax.typesetPromise();
		window.setTimeout(fadeLoadingToInsv, 1);
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

	setReferenceEl(){
		let h2s = document.getElementsByTagName("H2");
		let referenceHTML = "";
		for(let el of h2s){
			if(!el.id) el.id = el.textContent.replaceAll(" ","_");
			referenceHTML += "<li><a href=\"#" + el.id + "\">" + el.textContent + "</a></li>";
		}
		document.getElementById("reference").innerHTML = referenceHTML;
	}
	
	addTogglesToH(){
		$('h2').on("click",(el)=> $(el.target).next().slideToggle());
		$('h3').on("click",(el)=> $(el.target).nextUntil('h3, br').slideToggle());
	}

	scrollFunc(el){
		if(el.target.scrollTop > 100) showSideB("#upButton");
		else hideSideB("#upButton");
		if(el.target.scrollTop > el.target.scrollHeight-800) hideSideB("#downButton");
		else showSideB("#downButton");
	}

	addColors(){
		let sc = this.state.wholeContent.sourcesColor;
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
					if (this.hasAttribute("title")) this.removeAttribute("title");
					else{
						let sourceNum = this.getAttribute("data-source");
						let text = document.querySelector(`#sources li[data-num="${sourceNum}"]`).textContent
						this.setAttribute("title","Source: " + text);
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