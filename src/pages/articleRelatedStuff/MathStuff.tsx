import { viewImg } from './ImgView';

export function MathStuff(props: any){
	let innerContent = props.children;
	if(Object.hasOwn(props,"data-source"))
		return <li
			data-source={props["data-source"]}
			className="mathStuff"
			onClick={(el)=>viewImg(el,"mathStuff", innerContent)}
		>
			{innerContent}
		</li>
	else
		return <li className="mathStuff" onClick={(el)=>viewImg(el,"mathStuff", innerContent)}>{innerContent}</li>
}