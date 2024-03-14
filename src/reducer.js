import { SHOW_IMGVIEWER, HIDE_IMGVIEWER, CHANGE_APP_BC } from "./actions";

const initialState = {
    ImgViewerStyle: {width:"0%",height:"0%", paddingBottom:"0px", paddingTop:"0px"},
    appBC: "#deb887"
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_IMGVIEWER:
            return  {...state, ImgViewerStyle: action.payload};
        case HIDE_IMGVIEWER:
            return  {...state, ImgViewerStyle: action.payload};
        case CHANGE_APP_BC:
            return {...state, appBC: action.payload}
        default:
            return state;
    }
}