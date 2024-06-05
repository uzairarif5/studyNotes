import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import store from "./store";
import { CHANGE_APP_BC } from "./actions.js";
import "./Worksheet.scss";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fadeLoadingToInsv, showLoadingScreen, changeLoadingText } from "./loadingScreen.js";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import $ from 'jquery';
import { defaultBC } from "./reducer.js";

function TitlePage(props){
	return(<>
		<div id="userInfo">
			<p>First Name:</p>
			<p>Last Name:</p>
			<p>ID:</p>
			<p>Date: ___/___/___</p>
		</div>
		<h1>{props.topic.slice(props.topic.indexOf("/")+1).replace(/_/g," ")}</h1>
	</>);
}

function Worksheet () {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [worksheetJsContent, setWSJSC] = useState(null);
	const topicsArr = worksheetJsContent ?
	[<TitlePage topic={searchParams.get("topic")}/>, ...worksheetJsContent.content] : null;
	const [curLoc,changeLoc] = useState({scroll:0,topic:0});
	const stateChanged = useRef(false);
	const [allowNextScroll,changeAllowNextScroll] = useState(false);
	const [optionsContainerDisplay, changeOptionsConDis] = useState(false);
	const optionsSelectedText = useRef("Title Page");

	useEffect(()=>{
		if(stateChanged.current){
			stateChanged.current = false;
			document.getElementById("main").scrollTo(0,0);
			document.getElementById("workSheetInner").scrollTo(0,curLoc.scroll);
			window.MathJax.typesetPromise();
			//Format the Page
			if(curLoc.topic) {
				//set overflowing content height
				{
					let totalHeight = -curLoc.scroll;
					let selectedEl;
					let pageH = document.getElementById("workSheetInner").clientHeight - 45;
					let nextScrollPossible = false
					$("#workSheetInner").children().each(function(){
						let curH = totalHeight+$(this).outerHeight(true);
						if(curH > pageH){
							if(this.tagName === "OL"|| this.tagName === "UL") {
								$(this).children().each(function(){
									let curLiH = totalHeight + $(this).outerHeight(true);
									if(curLiH > pageH) {
										selectedEl = this;
										return false;
									}
									else totalHeight = curLiH;
								})
							}
							else selectedEl = this;
							nextScrollPossible = true;
							return false;
						}
						else totalHeight = curH;
					});
					changeAllowNextScroll(nextScrollPossible);
					$(selectedEl).css("margin-top", (pageH - totalHeight + 60)+"px");
				}

				//set all tables
				$("table").each(function(index,el){
					let thisEl = $(el);
					let selectedTD;
					if(el.getAttribute("ans-col")) for(let col of el.getAttribute("ans-col").split(" ")){
						selectedTD = thisEl.find("td:nth-child("+col+")");
						selectedTD.attr("ansType","true");
					}
				})

				//set answers
				reformatAns();
			}
		}
		else if(worksheetJsContent){
			//do first render
			document.fonts.ready.then(()=>{
				changeLoadingText("Creating Worksheet");
				store.dispatch({
					type: CHANGE_APP_BC,
					payload: "rgb(70, 30, 10)"
				});
				window.setTimeout(fadeLoadingToInsv,1);
			});
		}
		return ()=>{
			if(stateChanged.current === false) store.dispatch({
				type: CHANGE_APP_BC,
				payload: defaultBC
			});
		};
	},[curLoc, navigate, worksheetJsContent]);

	function toggleAns(){
		let tickImg = document.querySelector("#ansCheckBox img");
		if(tickImg.style.display === "block"){
			tickImg.style.display = "none";
		}
		else{
			tickImg.style.display = "block";
		}
		reformatAns();
	}

	function reformatAns(){
		if(document.querySelector("#ansCheckBox img").style.display === "none"){
			$(".fillInTheBlank, .fullWidthBlank").css({
				"color":"#deb887",
				"user-select": "none"
			});
			$("td[ansType=\"true\"]").css({
				"color":"#ddaa77",
				"user-select": "none"
			});
			$(".boxAnswer").css({
				"color":"#f0d4a0",
				"user-select": "none"
			});
			$(".boxAnswer img").css({
				"visibility":"hidden"
			});
		}
		else {
			$(".fillInTheBlank, td[ansType=\"true\"], .boxAnswer, .fullWidthBlank").css({
				"color":"black",
				"user-select": "auto"
			});
			$(".boxAnswer img").css({
				"visibility":"visible"
			});
		}
	}

	function topicSelected(el){
			optionsSelectedText.current =  el.target.textContent;
			changeOptionsConDis(val => !val);
			changeAllowNextScroll(false);
			stateChanged.current = true;
			changeLoc({scroll:0,topic: parseInt(el.target.getAttribute("value"))});
	}

	function goNextPage(){
		if(allowNextScroll){
			stateChanged.current = true;
			changeLoc({scroll: curLoc.scroll + 1143, topic:curLoc.topic});
		}
	}

	function goPrevPage(){
		if(curLoc.scroll > 0){
			stateChanged.current = true;
			changeLoc({scroll: curLoc.scroll - 1143, topic:curLoc.topic});
		}
	}

	let tdStyle1 = {
		backgroundImage: "linear-gradient(to left, rgb(100, 50, 30), rgba(100, 50, 30, 0.5))",
		borderRight: "3px rgb(80, 40, 20) solid",
		borderLeftStyle: "none",
		textAlign:"right",
		display: "block"
	};
	let tdStyle2 = {
		backgroundImage: "linear-gradient(to right, rgb(100, 50, 30), rgba(100, 50, 30, 0.5))",
		borderLeft: "3px rgb(80, 40, 20) solid",
		borderRightStyle: "none",
		textAlign:"left",
		display: "block"
	};

	if(worksheetJsContent){
		return <HelmetProvider>
			<Helmet>
				<title>Worksheet</title>
			</Helmet>
			<Suspense>
				<div id="worksheetWrap">
					<div id='settings'>
							<label>Topic:</label>
							<div id="optionSelected" onClick={()=>{changeOptionsConDis(val => !val)}}>
									<span>{optionsSelectedText.current}</span>
									<img src={process.env.PUBLIC_URL+'/webPics/caret-down-solid-worksheet.svg'} alt=''/>
							</div>
							<div id="optionsContainer" style={
									(optionsContainerDisplay) ? {display: "block"} : {display:"none"}
							}>
									<div key={0} value={0} onClick={topicSelected}>Title Page</div>
									{worksheetJsContent.titles.map((t, index)=>{return <div key={index+1} value={index+1} onClick={topicSelected}>{t}</div>})}
							</div>
							<label>Show Ans:</label>
							<div id="ansCheckBox" onClick={toggleAns}>
									<img src={process.env.PUBLIC_URL+'/webPics/check-solid.svg'} alt='' style={{"display":"block"}}/>
							</div>
					</div>

					<div id="sideButtons">
						<div id="bookButton">
							<Link to={{pathname: "/" + searchParams.get("topic")}}>
								<img src={process.env.PUBLIC_URL+"/webPics/book-solid.svg"} alt="back to notes pages"/>
							</Link>
						</div>
						<div id="homeButton">
							<Link to={{pathname:"/"}}>
								<img src={process.env.PUBLIC_URL+"/webPics/house-solid.svg"} alt="back to home page"/>
							</Link>
						</div>
					</div>

					<div id="pageButtons">
							<div id="goLeft" onClick={goPrevPage} style={
									curLoc.scroll ? {display: "block"} : {display: "none"}
							}><img src={process.env.PUBLIC_URL+'/webPics/chevron-left-solid.svg'} alt=''/></div>
							<div id="goRight" onClick={goNextPage} style={
									allowNextScroll ? {display: "block"} : {display: "none"}
							}><img src={process.env.PUBLIC_URL+'/webPics/chevron-right-solid.svg'} alt=''/></div>
					</div>

					<div id="workSheet">
							<div id="topicDiv" style={
									curLoc.topic ?
									((curLoc.scroll/1143)%2 ? tdStyle1 : tdStyle2) :
									{display: "none"}
							}>{
									curLoc.topic ? (
											((curLoc.scroll/1143) % 2) ?
											<><span>{optionsSelectedText.current}</span> | {(curLoc.scroll/1143)+1}</>:
											<>{(curLoc.scroll/1143)+1} | <span>{optionsSelectedText.current}</span></>
									) : null
							}</div>
							<div id="workSheetInner" style={
									curLoc.topic ?
									(
											(curLoc.scroll/1143)%2 ?
											{
													height: "1149px",
													borderTopStyle:"solid",
													borderLeftStyle:"none",
													borderRightStyle:"solid"
											} :
											{
													height: "1149px",
													borderTopStyle:"solid",
													borderLeftStyle:"solid",
													borderRightStyle:"none"
											}
									) :
									{height: "1202px"}
							}>{topicsArr[curLoc.topic]}</div>
					</div>
				</div>
			</Suspense>
		</HelmetProvider>;
	}
	else{
		showLoadingScreen();
		window.setTimeout(async ()=>{
			try{
				await import("./pages/"+searchParams.get("topic")+"_worksheet.js").then(res => setWSJSC(res));
			}
			catch{
				alert("worksheet not found");
				changeLoadingText("Going To Home Page");
				navigate("/");
			}
		}, 1);
		return null;
	}
}
export default Worksheet;

//worksheet components
export function getFullWidthBlankLI(q,a){
	return <ol>{q.map((val, i)=>{
		return <li key={i}>
			<span className="questionForFullWidthBlank">{val}</span>
			<span className="fullWidthBlank">{a[i]}</span>
		</li>
	})}</ol>;
}

export function GraphBox(props){
	if (Object.hasOwn(props,"style")) return <div className="boxAnswer">
		<img src={props.src} alt="" style={props.style}/>
	</div>
	else return <div className="boxAnswer"><img src={props.src} alt=""/></div>
}