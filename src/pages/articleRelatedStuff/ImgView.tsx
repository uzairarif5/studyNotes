import { useEffect, type ReactElement } from "react";
import { useSelector } from "react-redux";
import { SHOW_IMGVIEWER, HIDE_IMGVIEWER } from "../../reduxStuff/actions.js";
import { showSideB, hideSideB } from './sideButtons.js';
import type { StateType } from "../../reduxStuff/reducer.js";

//@ts-ignore
import store from "../../reduxStuff/store.js";

var curContent: ReactElement<any, any> | null = null;
var changeType: string | null = null;

function removeViewer(){
	changeType = "closed";
	curContent = null;
	store.dispatch( {type: HIDE_IMGVIEWER, payload: {width:"0%",height:"0%", paddingBottom:"0px", paddingTop:"0px"}});
	window.scrollBy(0,1);
	showSideB("#upButton");
	showSideB("#downButton");
	showSideB("#listsUpButton");
}

export function viewImg(el: any, type: string, textCon: string = ""){
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
	hideSideB("#listsUpButton");
	store.dispatch({
		type: SHOW_IMGVIEWER,
		payload: {width:"100%",height:"100%", paddingBottom:"20px", paddingTop:"20px"}
	});
}

export function ImgView(){
	const thisStyle = useSelector((state: StateType) => state.ImgViewerStyle);

	useEffect(()=>{
		if((changeType!)==="mathStuff") {
			//@ts-ignore
			window.MathJax.typesetPromise([document.getElementById("imgViewer")]);
		}
	})

	return <div id='imgViewer' onClick={removeViewer} style={thisStyle}>{curContent}</div>;

}