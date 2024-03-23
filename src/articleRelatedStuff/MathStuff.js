import { viewImg } from './ImgView';

export function MathStuff(props){
	let innerContent = props.children;
	if(Object.hasOwn(props,"data-source"))
		return <li data-source={props["data-source"]} style={{listStyleType:"none"}}>
			<div className="mathStuff" onClick={(el)=>viewImg(el,"mathStuff", innerContent)}>{innerContent}</div>
		</li>
	else
		return <li className="mathStuff" onClick={(el)=>viewImg(el,"mathStuff", innerContent)}>{innerContent}</li>
}