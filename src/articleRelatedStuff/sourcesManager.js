import { sourceList } from "./sourceList";

function SourcesLI(props){
	if(props.c == null) return <li>{props.children}</li>;
	else return <li><span style={{backgroundColor: props.c}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{props.children}</li>;
}

export function getSourcesOL(sourcesColor, sourcesOrder = null){

	function getSourceInner(sourcesColor, i){
			if(sourceList[i].props.className === "emailed"){
				return <SourcesLI key={i.toString()} c={sourcesColor[i]}>
					{sourceList[i].props.children}
					&nbsp;
					<img className="emailedSymbol" src="/webPics/star-solid.svg" alt=""/>
				</SourcesLI>;
			}
			return <SourcesLI key={i.toString()} c={sourcesColor[i]}>{sourceList[i]}</SourcesLI>;
	}

	if (sourcesOrder == null){ return <><h4>Main Sources:</h4><ol id="sources">{
		Object.keys(sourcesColor).map((i) => {return getSourceInner(sourcesColor, i)})
	}</ol></>;}
	else{ return <><h4>Main Sources:</h4><ol id="sources">{
		sourcesOrder.map((i) => {return getSourceInner(sourcesColor, i)})
	}</ol></>; }
}