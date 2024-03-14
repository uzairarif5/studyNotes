import { viewImg } from './ImgView';

export function MathStuff(props){
    let innerContent = props.children;
    return <li className="mathStuff" onClick={(el)=>viewImg(el,"mathStuff", innerContent)}>{innerContent}</li>
}