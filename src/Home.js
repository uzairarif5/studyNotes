import { useEffect, Suspense, useState, memo } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import './home.scss';
import { fadeLoadingToInsv, showLoadingScreen } from "./loadingScreen.js";
import { ContactComp } from "./Contact.js";
import styles from "./variables.module.scss";
import store from "./store";
import { FORM_COUNTER } from "./actions";
import { defaultBC } from './reducer';

const Home = () => {
	const [licenseCompDisVal, setLCD] = useState('none');

	useEffect(()=>{
		showLoadingScreen();
		document.fonts.ready.then(fadeLoadingToInsv);
		document.documentElement.style.backgroundColor = "#913213";
		store.dispatch({
			type: FORM_COUNTER,
			payload: 0
		});
	},[]);

	return (<HelmetProvider>
		<Helmet>
			<title>Uzair's Study Notes</title>
		</Helmet>
		<Suspense><div id="homeWrapper">
			<HomeCompMemo/>
			<footer>
				<Link to="guide">Website Guide</Link>
				<button onClick={()=>{store.dispatch({
					type: FORM_COUNTER,
					payload: -1
				})}}>Contact Us</button>
				<button onClick={()=>{
					licenseCompDisVal === "none"? setLCD("flex") : setLCD("none")
				}}>License</button>
			</footer>
			<ContactComp/>
			<LicenseComp dis={licenseCompDisVal} setFunc={setLCD}/>
		</div></Suspense>
	</HelmetProvider>);
};

const HomeCompMemo = memo(()=>{

	function getSVG(){
		if(window.screen.width <= parseInt(styles.maxWidthForMobile)){ return (
			<div id='svgContainer'><svg height="30px" width="100%" viewBox="0 0 100 100"  preserveAspectRatio="none">
				<path d="M0,0 L0,50 Q25,100 50,50 75,0 100,50 L 100,0" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#913213" fill="#913213" />
				<path d="M0,50 Q25,100 50,50 75,0 100,50 " vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#692112" fill="none"/>
			</svg></div>
		);}
		else{return null;}
	}

	return <div id="home">
		<h1>My Study Notes</h1>
		{getSVG()}
		<h2>Language Learning</h2>
		<Link to="language_learning/semantics">Semantics</Link>
		<Link to="language_learning/madinah_arabic_book_2">Madinah Arabic Book 2</Link>
		<Link to="language_learning/madinah_arabic_book_3">Madinah Arabic Book 3</Link>
		<Link to="language_learning/french">French</Link>
		<Link to="language_learning/korean">Korean</Link>
		<Link to="language_learning/japanese">Japanese</Link>
		<h2>Mathematics</h2>
		<Link to="mathematics/precalculus">Precalculus</Link>
		<Link to="mathematics/number_theory">Number Theory</Link>
		<Link to="mathematics/probability_and_statistics">Probability And Statistics</Link>
		<Link to="mathematics/calculus">Calculus</Link>
		<h2>Natural Sciences</h2>
		<Link to="natural_sciences/history_and_philosophy_of_science">History And Philosophy Of Science</Link>
		<Link to="natural_sciences/chemistry">Chemistry</Link>
		<Link to="natural_sciences/physics">Physics</Link>
		<Link to="natural_sciences/meteorology">Meteorology</Link>
		<Link to="natural_sciences/geology">Geology</Link>
		<h2>Computer Science Fundamentals</h2>
		<Link to="computer_science_fundamentals/data_structures_and_algorithms">Data Structures And Algorithms</Link>
		<Link to="computer_science_fundamentals/useful_information_for_algorithms">Useful Information For Algorithms</Link>
		<Link to="computer_science_fundamentals/information_and_entropy">Information And Entropy</Link>
		<Link to="computer_science_fundamentals/networking">Networking</Link>
		<h2>Electrical Engineering</h2>
		<Link to="electrical_engineering/electricity_magnetism_and_circuits">Electricity, Magnetism And Circuits</Link>
		<Link to="electrical_engineering/signals_and_systems">Signal And Systems</Link>
		<h2>Computer Science (Advance Topics)</h2>
		<Link to="computer_science_advance_topics/cryptography">Cryptography</Link>
		<Link to="computer_science_advance_topics/deep_learning">Deep Learning</Link>
		<h2>Tutorials</h2>
		<Link to="tutorials/basics_of_r">Basics Of R</Link>
    <Link to="tutorials/manim">Manim Basics</Link>
		<h2>Blog</h2>
		<Link to="blog/tree_blog">Tree Blog</Link>
		{
			(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
			require("./private_links.js").default()
			: null
		}
	</div>
})

function LicenseComp(props){
	
	return <div className="licenseComp" style={{display: props.dis}}>
		<p {...{"xmlns:cc":"http://creativecommons.org/ns#", "xmlns:dct":"http://purl.org/dc/terms/"}} style={{backgroundColor: defaultBC}}>
			<button onClick={()=>{props.setFunc("none")}}>X</button>
			<span style={{margin:"20px 10px 10px 10px", fontSize:"18px", display:"block", textAlign:"center"}}>
				The <b>text content</b> of<br/><a property="dct:title" rel="cc:attributionURL" href="/">My Study Notes</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/uzair0845/">Uzair Arif</a><br/>is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:"inline-block"}}>CC BY-NC-SA 4.0</a>
			</span>
			<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:"flex", justifyContent:"center"}}>
				<img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""/>
				<img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""/>
				<img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""/>
				<img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""/>
			</a>
		</p>
	</div>;
}

export default Home;