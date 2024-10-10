import $ from "jquery";
import { useEffect } from "react";
import { viewImg } from './ImgView';

var counter = 0;
export function ImgComp(props = { alt:"", width: -1 }){

	useEffect(()=>{
		let thisEl = $("#imgComp"+curcount)[0];
		let parentEl = thisEl.parentElement;
		if(parentEl.tagName==="FIGURE"){
			parentEl.style.width = (props.width===-1)?props.style.width : props.width;
			thisEl.style.width = "100%";
			thisEl.style.marginBottom = "0";
			thisEl.style.borderBottomStyle = "none";
		}
	// eslint-disable-next-line
	}, []);

	let curcount = counter;
	counter += 1;
	if(props.width === -1) return <img onClick={viewImg}
		id={"imgComp" + curcount}
		className="contentImg"
		alt={props.alt}
		src={props.src}
		style={props.style}
	/>;
	else return <img onClick={viewImg}
		id={"imgComp" + curcount}
		className="contentImg"
		alt={props.alt}
		src={props.src}
		style={{width: props.width, ...props.style}}
	/>;
}
