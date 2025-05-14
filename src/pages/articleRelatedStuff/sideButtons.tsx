import $ from 'jquery';
import { CLOSING_LIST_PROCESS } from "../../reduxStuff/actions";
import { useSelector } from "react-redux";
import type { MouseEventHandler } from 'react';
import type { StateType } from '../../reduxStuff/reducer';

//@ts-ignore
import store from "../../reduxStuff/store";

type SideBPropsType = {
	name: string,
	clickFunc: MouseEventHandler<HTMLDivElement>,
	imageSrc: string,
	title: string
}

export function SideB(props: SideBPropsType){
	return <div id={props.name} onClick={props.clickFunc}>
		<img src={props.imageSrc} alt='' title={props.title}/>
	</div>;
}

export function showSideB(name: string){
	$(name).fadeIn(200);
}

export function hideSideB(name: string){
	$(name).fadeOut(200);
}

export function CloseListsButton(){
	const currentlyClosing = useSelector((state: StateType) => state.currentlyClosingLists); 

	return <div id={"listsUpButton"}
		onClick={() => {
			if(!currentlyClosing){
				store.dispatch({
					type: CLOSING_LIST_PROCESS,
					payload: true
				});
				window.setTimeout(()=>{
					store.dispatch({
						type: CLOSING_LIST_PROCESS,
						payload: false
					});
				});
			}
		}}>
		<img src={'/articlePics/arrows-up-to-line-solid.svg'} alt='' title="Close all sublists"/>
	</div>;
}