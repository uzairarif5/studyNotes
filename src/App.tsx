import { BrowserRouter, Routes, Route } from "react-router";
import { useSelector } from "react-redux";
import Home from './pages/Home';
import Article from "./pages/articleRelatedStuff/Article";
import Worksheet from './pages/Worksheet';
import type { StateType } from "./reduxStuff/reducer";

export default function App(){
	let thisStyle = useSelector((state: StateType) => state.appBC);
	
	return <div id="appID" style={{backgroundColor: thisStyle}}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Article />} />
				<Route path="/worksheet" element={<Worksheet />} />
			</Routes>
  	</BrowserRouter>
	</div>;
}