import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../store";
import { SHOW_IMGVIEWER, HIDE_IMGVIEWER } from "../actions";
import { showSideB, hideSideB } from './sideButtons.js';

var curContent = null;
var changeType = null
function removeViewer(){
	changeType = "closed";
	curContent = null;
	store.dispatch( {type: HIDE_IMGVIEWER, payload: {width:"0%",height:"0%", paddingBottom:"0px", paddingTop:"0px"}});
	window.scrollBy(0,1);
	showSideB("#upButton");
	showSideB("#downButton");
}

export function viewImg(el, type, textCon){
	if(type === "charts") curContent = el;
	else{
		if(type === "mathStuff"){
			changeType = "mathStuff";
			curContent = <div className="mathStuff">{textCon}</div>;
		}
		else{ //assuming IMG
			curContent = <img src={el.target.src} className={el.target.className} alt=""/>;
		}
	}
	hideSideB("#upButton");
	hideSideB("#downButton");
	store.dispatch({
		type: SHOW_IMGVIEWER,
		payload: {width:"100%",height:"100%", paddingBottom:"20px", paddingTop:"20px"}
	});
}

export function ImgView(){
	const thisStyle = useSelector(state => state.ImgViewerStyle);

	useEffect(()=>{
		if(changeType==="mathStuff") {
			window.MathJax.typesetPromise([document.getElementById("imgViewer")]);
		}
	})

	return <div id='imgViewer' onClick={removeViewer} style={thisStyle}>{curContent}</div>;

}