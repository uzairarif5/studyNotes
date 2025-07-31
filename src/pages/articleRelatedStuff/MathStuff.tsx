import { viewImg } from './ImgView';

export function MathStuff(props: any){
	var innerContent = props.children;

	if (Array.isArray(innerContent) && innerContent[0]) {
		let firstString = innerContent[0].trim();
		if (!firstString.startsWith("$$") && !firstString.startsWith("\\[")) innerContent = <>\[ {innerContent} \]</>;
	}
	else if (typeof(innerContent) === "string") {
		innerContent = innerContent.trim();
		if (!innerContent.startsWith("$$") && !innerContent.startsWith("\\[")) innerContent = <>\[ {innerContent} \]</>;
	}
	else return <li className="mathStuff" onClick={(el)=>viewImg(el,"mathStuff", innerContent)}>{"\\[\\begin{gather} \\text{There was a problem rendering this.} \\\\ \\text{Please report!} \\end{gather}\\]"}</li>

	if(Object.hasOwn(props,"data-source"))
		return <li
			data-source={props["data-source"]}
			className="mathStuff"
			onClick={(el)=>viewImg(el,"mathStuff", innerContent)}
		>{innerContent}</li>
	else
		return <li className="mathStuff" onClick={(el)=>viewImg(el,"mathStuff", innerContent)}>{innerContent}</li>
}