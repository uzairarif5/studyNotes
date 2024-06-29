import { SHOW_IMGVIEWER, HIDE_IMGVIEWER, CHANGE_APP_BC, FORM_COUNTER, Q_COUNTER, CLOSING_LIST_PROCESS } from "./actions";

export const defaultBC = "#deb887";

const initialState = {
	ImgViewerStyle: {width:"0%",height:"0%", paddingBottom:"0px", paddingTop:"0px"},
	QViewerStyle: {width:"0%",height:"0%", paddingBottom:"0px", paddingTop:"0px"},
	appBC: defaultBC,
	formCounter: 0,
	qCounter: 0,
	currentlyClosingLists: false
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_IMGVIEWER:
			return  {...state, ImgViewerStyle: action.payload};
		case HIDE_IMGVIEWER:
			return  {...state, ImgViewerStyle: action.payload};
		case CHANGE_APP_BC:
			return {...state, appBC: action.payload}
		case FORM_COUNTER:
			return {...state, formCounter: action.payload<0?state.formCounter+1:0}
		case Q_COUNTER:
			return {...state, qCounter: action.payload}
		case CLOSING_LIST_PROCESS:
			return {...state, currentlyClosingLists: action.payload}
		default:
			return state;
	}
}