import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Home from './Home.js';
import Article from './articleRelatedStuff/Article.js';
import Worksheet from './Worksheet.js';

export default function App(){
	let thisStyle = useSelector(state => state.appBC);
	
	useEffect(()=>{
		document.getElementById("loadingText").style.display = "flex";
	},[]);
	
	return <div id="appID" style={{backgroundColor: thisStyle}}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Article />} />
				<Route path="/worksheet" element={<Worksheet />} />
			</Routes>
		</BrowserRouter>
		<Outlet/>
	</div>;
}