import $ from "jquery";
import { useEffect, type MouseEventHandler } from "react";
import { viewImg } from './ImgView';

var counter = 0;
type PropsType = {
	alt?: string,
	width?: string | null,
	src: string,
	style?: React.CSSProperties
}
export function ImgComp({ alt="", width=null, src="", style={}}: PropsType){

	useEffect(()=>{
		let thisEl = $("#imgComp"+curcount)[0];
		let parentEl = thisEl.parentElement;
		if(parentEl!.tagName==="FIGURE"){
			parentEl!.style.width = width ? width : (style!.width ? style!.width.toString() : "100%");
			thisEl.style.width = "100%";
			thisEl.style.marginBottom = "0";
			thisEl.style.borderBottomStyle = "none";
		}
	// eslint-disable-next-line
	}, []);

	let curcount = counter;
	counter += 1;
	if (width) return <img onClick={viewImg as  MouseEventHandler<HTMLImageElement>}
		id={"imgComp" + curcount}
		className="contentImg"
		alt={alt}
		src={src}
		style={{...style, width: width}}
	/>;
	else return <img onClick={viewImg as  MouseEventHandler<HTMLImageElement>}
		id={"imgComp" + curcount}
		className="contentImg"
		alt={alt}
		src={src}
		style={style}
	/>;
}
