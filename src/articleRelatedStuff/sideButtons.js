import $ from 'jquery';
import { CLOSING_LIST_PROCESS } from "../actions";
import { useSelector } from "react-redux";
import store from "../store";

export function SideB(props){
	return <div id={props.name} onClick={props.clickFunc}>
		<img src={props.imageSrc} alt='' title={props.title}/>
	</div>;
}

export function showSideB(name){
	$(name).fadeIn(200);
}

export function hideSideB(name){
	$(name).fadeOut(200);
}

export function CloseListsButton(){
	const currentlyClosing = useSelector(state => state.currentlyClosingLists); 

	return <div id={"listsUpButton"}
		onClick={() => {
			if(!currentlyClosing){
				store.dispatch({
					type: CLOSING_LIST_PROCESS,
					payload: true
				});
			}
		}}>
		<img src={process.env.PUBLIC_URL+'/webPics/arrows-up-to-line-solid.svg'} alt='' title="Close all sublists"/>
	</div>;
}