import { useEffect, useState, type Dispatch, type JSX, type SetStateAction } from "react";
import { FORM_COUNTER } from "../reduxStuff/actions";
import { fadeLoadingToInsv, showLoadingScreen } from "../loadingFuncs";
import { Link } from "react-router";
import './Home.scss';
import { defaultBC } from "../reduxStuff/reducer";
import ContactComp from "./ContactComp.tsx";

//@ts-ignore
import store from "../reduxStuff/store";

export default function Home(){
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

  return <div id="homeWrapper">
		<title>Uzair's Study Notes</title>
		<HomeMain/>
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
  </div>;
}

type StateType = JSX.Element | null;
const HomeMain = ()=>{
  const [privatePages, changePP]: [StateType, Dispatch<SetStateAction<StateType>>] = useState<StateType>(null);
  const [phoneHeader, changePH]: [StateType, Dispatch<SetStateAction<StateType>>] = useState<StateType>(null);

  useEffect(()=> {
		if(import.meta.env.DEV){
      //@ts-ignore
			import("../privateFuncs/private_links")
      .then((res)=>{changePP(res.default());})
    }

    let isMobile: boolean = window.screen.width <= parseInt(getComputedStyle(document.documentElement).getPropertyValue("--maxWidthForMobile"));
    if(isMobile)
      changePH(<div id='svgContainer'><svg height="30px" width="100%" viewBox="0 0 100 100"  preserveAspectRatio="none">
        <path d="M0,0 L0,50 Q25,100 50,50 75,0 100,50 L 100,0" vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#913213" fill="#913213" />
        <path d="M0,50 Q25,100 50,50 75,0 100,50 " vectorEffect="non-scaling-stroke" strokeWidth="3" stroke="#692112" fill="none"/>
      </svg></div>);
	},[]);

  return <div id="home">
    <h1>My Study Notes</h1>
    {phoneHeader}
    <h2>Language Learning</h2>
    <Link to="language_learning/semantics">Semantics</Link>
    <Link to="language_learning/madinah_arabic_book_2">Madinah Arabic Book 2</Link>
    <Link to="language_learning/madinah_arabic_book_3">Madinah Arabic Book 3</Link>
    <Link to="language_learning/korean">Korean</Link>
    <Link to="language_learning/japanese">Japanese</Link>
    <h2>Mathematics</h2>
    <Link to="mathematics/precalculus">Precalculus</Link>
    <Link to="mathematics/number_theory">Number Theory</Link>
    <Link to="mathematics/calculus">Calculus</Link>
    <Link to="mathematics/probability_and_statistics">Probability And Statistics</Link>
    <Link to="mathematics/calculus_advanced">Calculus (advanced)</Link>
    <h2>Natural Sciences</h2>
    <Link to="natural_sciences/philosophy_of_science">Philosophy Of Science</Link>
    <Link to="natural_sciences/physics_1">Physics (part 1)</Link>
    <Link to="natural_sciences/chemistry">Chemistry</Link>
    <Link to="natural_sciences/meteorology">Meteorology</Link>
    <Link to="natural_sciences/geology">Geology</Link>
    <h2>Computer Science Fundamentals</h2>
    <Link to="computer_science_fundamentals/c_and_cpp_programming_language">C/C++ programming language</Link>
    <Link to="computer_science_fundamentals/data_structures_and_algorithms">Data Structures And Algorithms</Link>
    <Link to="computer_science_fundamentals/useful_information_for_algorithms">Useful Information For Algorithms</Link>
    <Link to="computer_science_fundamentals/information_and_entropy">Information And Entropy</Link>
    <Link to="computer_science_fundamentals/operating_systems">Operating Systems</Link>
    <Link to="computer_science_fundamentals/networking">Networking</Link>
    <h2>Electrical Engineering</h2>
    <Link to="electrical_engineering/electricity_magnetism_and_circuits">Electricity, Magnetism And Circuits</Link>
    <Link to="electrical_engineering/signals_and_systems">Signal And Systems</Link>
    <h2>Computer Science (Advanced Topics)</h2>
    <Link to="computer_science_advanced_topics/cryptography">Cryptography</Link>
    <Link to="computer_science_advanced_topics/deep_learning">Deep Learning</Link>
    <h2>Tutorials/Guides</h2>
    <Link to="tutorials/basics_of_r">Basics Of R</Link>
    <Link to="tutorials/manim">Manim Basics</Link>
    <h2>Blog</h2>
    <Link to="blog/tree_blog">Tree Blog</Link>
    <Link to="blog/saved_resources">Saved Resources</Link>
    {privatePages}
  </div>
};

function LicenseComp(props: {dis: string, setFunc: React.Dispatch<React.SetStateAction<string>>}){
  return <div className="licenseComp" style={{display: props.dis}}>
    <p {...{"xmlns:cc":"http://creativecommons.org/ns#", "xmlns:dct":"http://purl.org/dc/terms/"}} style={{backgroundColor: defaultBC}}>
      <button style={{color:"black"}} onClick={()=>{props.setFunc("none")}}>X</button>
      <span>
        The <b>text content</b> of<br/><a property="dct:title" rel="cc:attributionURL" href="/">My Study Notes</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/uzair0845/">Uzair Arif</a><br/>is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:"inline-block"}}>CC BY-NC-SA 4.0</a>
      </span>
      <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:"flex", justifyContent:"center"}} title="check website">
        <img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""/>
        <img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""/>
        <img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""/>
        <img style={{height:"40px",verticalAlign:"text-bottom"}} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""/>
      </a>
    </p>
  </div>;
}