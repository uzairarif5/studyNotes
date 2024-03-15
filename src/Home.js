import { useEffect, Suspense } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import './home.scss';
import { fadeLoadingToInsv, showLoadingScreen } from "./loadingScreen.js";
import { ContactComp } from "./Contact.js";
import styles from "./variables.module.scss";
import store from "./store";
import { FORM_COUNTER } from "./actions";

const Home = () => {
	
	useEffect(()=>{
		showLoadingScreen();
		document.fonts.ready.then(fadeLoadingToInsv);
		document.documentElement.style.backgroundColor = "#913213";
		store.dispatch({
			type: FORM_COUNTER,
			payload: 0
		});
	},[]);

	function getSVG(){
		if(window.screen.width <= parseInt(styles.maxWidthForMobile)){ return (
			<div id='svgContainer'><svg height="30px" width="100%" viewBox="0 0 100 100"  preserveAspectRatio="none">
				<path d="M0,0 L0,50 Q25,100 50,50 75,0 100,50 L 100,0" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#913213" fill="#913213" />
				<path d="M0,50 Q25,100 50,50 75,0 100,50 " vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#692112" fill="none"/>
			</svg></div>
		);}
		else{return null;}
	}

	return (<HelmetProvider>
		<Helmet>
			<title>Uzair's Study Notes</title>
		</Helmet>
		<Suspense>
			<div id="home">
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
				<Link to="mathematics/number_theory">Number Theory</Link>
				<Link to="mathematics/probability_and_statistics">Probability And Statistics</Link>
				<Link to="mathematics/calculus">Calculus</Link>
				<Link to="mathematics/information_and_entropy">Information And Entropy</Link>
				<h2>Natural Sciences</h2>
				<Link to="natural_sciences/history_and_philosophy_of_science">History And Philosophy Of Science</Link>
				<Link to="natural_sciences/physics">Physics</Link>
				<Link to="natural_sciences/meteorology">Meteorology</Link>
				<Link to="natural_sciences/geology">Geology</Link>
				<h2>Computer Science Fundamentals</h2>
				<Link to="computer_science_fundamentals/data_structures_and_algorithms">Data Structures And Algorithms</Link>
				<Link to="computer_science_fundamentals/useful_information_for_algorithms">Useful Information For Algorithms</Link>
				<Link to="computer_science_fundamentals/computer_organization_and_architecture">Computer Organization And Architecture</Link>
				<Link to="computer_science_fundamentals/cryptography">Cryptography</Link>
				<h2>Electrical Engineering</h2>
				<Link to="electrical_engineering/electricity_magnetism_and_circuits">Electricity, Magnetism And Circuits</Link>
				<Link to="electrical_engineering/signals_and_systems">Signal And Systems</Link>
				<h2>Computer Science (Advance Topics)</h2>
				<Link to="computer_science_advance_topics/deep_learning">Deep Learning</Link>
				<Link to="computer_science_advance_topics/data_mining">Data Mining</Link>
				<h2>Tutorials</h2>
				<Link to="tutorials/basics_of_r">Basics Of R</Link>
				<h2>Blog</h2>
				<Link to="blog/tree_blog">Tree Blog</Link>
				<footer>
					<Link to="guide">Website Guide</Link>
					<button onClick={()=>{store.dispatch({
						type: FORM_COUNTER,
						payload: -1
					})}}>Contact Us</button>
				</footer>
			</div>
			<ContactComp/>
		</Suspense>
	</HelmetProvider>)
};

export default Home;