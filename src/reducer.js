import { SHOW_IMGVIEWER, HIDE_IMGVIEWER, CHANGE_APP_BC, FORM_COUNTER } from "./actions";

export const defaultBC = "#deb887";

const initialState = {
	ImgViewerStyle: {width:"0%",height:"0%", paddingBottom:"0px", paddingTop:"0px"},
	appBC: defaultBC,
	formCounter: 0
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
		default:
			return state;
	}
}