import $ from "jquery";
import { useEffect } from 'react';
import {Prism} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { kimbieLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

var counter = 0;

export function CodePre(props){
	let mainContent;
	let thisCounter;

	useEffect(()=>{
		let thisEl = $("#preLabelNum"+thisCounter);
		let nextEl = thisEl.next().children();
		let nextElC = nextEl.css("color");
		let nextElBC = nextEl.css("background-color");
		thisEl.css({"background-color":nextElBC, "color":nextElC, "border-color":nextElC});
	})

	if(props.language === undefined){
		return <pre style={{
			backgroundColor:"black",
			color:"white",
			fontSize:"12px",
			lineHeight:"12px",
			padding:"5px",
			width:"80%",
			overflowX:"auto"
		}}>{props.children}</pre>;
	}
	else{
		switch(props.language){
			case "armasm":
				mainContent = <SyntaxHighlighter language={"armasm"} style={atelierCaveDark} showLineNumbers={true} startingLineNumber={props.startingLineNumber || 1} customStyle={{"padding":"0px","fontSize":"14px","lineHeight":"18px","marginTop":"0px","paddingTop":"5px"}}>{props.children.trim()}</SyntaxHighlighter>
				break;
			case "plaintext":
				mainContent = <SyntaxHighlighter language={"plaintext"} style={kimbieLight} showLineNumbers={true} startingLineNumber={props.startingLineNumber || 1} customStyle={{"padding":"0px","fontSize":"14px","lineHeight":"18px","marginTop":"0px","paddingTop":"5px"}}>{props.children.trim()}</SyntaxHighlighter>
				break;
			case "cpp":
			case "c":
				mainContent = <Prism language={props.language} style={oneDark} showLineNumbers={true} startingLineNumber={props.startingLineNumber || 1} customStyle={{"padding":"0px","fontSize":"15px","lineHeight":"18px","marginTop":"0px","paddingTop":"5px","borderRadius":"0"}}>{props.children.trim()}</Prism>
				break;
			default:
				mainContent = <Prism language={props.language} style={vscDarkPlus} showLineNumbers={true} startingLineNumber={props.startingLineNumber || 1} customStyle={{"padding":"0px","fontSize":"15px","lineHeight":"18px","marginTop":"0px","paddingTop":"5px"}}>{props.children.trim()}</Prism>
		}

		counter += 1;
		thisCounter = counter;
		return <>
			<div className='preLabel' id={"preLabelNum" + counter}>{"language: " + props.language}</div>
			<pre>{mainContent}</pre>
		</>;
	}
};