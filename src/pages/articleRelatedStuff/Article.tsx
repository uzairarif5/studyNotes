import React, { useEffect, useState } from 'react';
import './Article.scss';
import $ from 'jquery';
import ContactComp from "../ContactComp";
import { fadeLoadingToInsv , changeLoadingText, showLoadingScreen} from "../../loadingFuncs.js";
import { Link } from 'react-router';
import { useNavigate } from "react-router";
import { FORM_COUNTER, Q_COUNTER, CLOSING_LIST_PROCESS } from "../../reduxStuff/actions";
import SourcesSection from './SourcesSection.js';
import { SideB, showSideB, hideSideB, CloseListsButton } from './sideButtons';
import { QuestionsBox } from './Questions';
import { ImgView } from './ImgView';

//@ts-ignore
import store from "../../reduxStuff/store.js";

const modules = import.meta.glob(['../articlePages/*/*.tsx','../articlePages/guide.tsx','../privatePages/*/*.tsx']);
const ERROR_NO_ARTICLE = "ERROR_NO_ARTICLE";
export const OFFLINE_MODE = false;
export const GET_SOURCES_LIST_LINK = 1 ? //Change this to 0 if you want to use other link
  "https://django-apps-dncy.onrender.com/study_notes_backend/getList":
  "http://127.0.0.1:8000/study_notes_backend/getList";

type ContentType = {
  title: string | null,
  sourcesOrder: any,
  sourcesColor: any,
  additionalResources: any,
  content: any
} 

type ArticleState = {
  wholeContent: ContentType | string | null,
  footerEl: null,
}

type ArticlePropsType = {
  changeAR: React.Dispatch<React.SetStateAction<boolean>>
}

class Article extends React.Component<ArticlePropsType> {
  rootEl: HTMLElement | null = null;
  pathnameToUse: string = "";
  allowCleanUp: boolean = true;
  state: ArticleState = {wholeContent: null, footerEl: null};

  constructor(props: ArticlePropsType) {
    super(props);
    showLoadingScreen();
    store.dispatch({
      type: FORM_COUNTER,
      payload: 0
    });
    store.dispatch({
      type: Q_COUNTER,
      payload: 0
    });
    store.dispatch({
      type: CLOSING_LIST_PROCESS,
      payload: false
    });
    this.rootEl = document.getElementById("root");
    this.pathnameToUse = window.location.pathname;
  }

  setWholeContent(){
    const evalRes = (val: any) => {
      console.log("Module found!");
      this.setState({
        wholeContent: {
          "title": val.title,
          "content": val.content,
          "sourcesColor": val.sourcesColor,
          "sourcesOrder": val.sourcesOrder,
          "additionalResources": val.additionalResources
        }
      });
    };

    const evalErr = (err: any) => {
      console.error(err);
      this.setState({wholeContent: ERROR_NO_ARTICLE});
    }

    let pathName = `../articlePages${this.pathnameToUse}.tsx`;
    let pathName2 = `../privatePages${this.pathnameToUse}.tsx`;

    if (modules[pathName]){
      modules[pathName]()
      .then(evalRes)
      .catch(evalErr);
    }
    else if (modules[pathName2]){
      modules[pathName2]()
      .then(evalRes)
      .catch(evalErr);
    }
    else this.setState({wholeContent: ERROR_NO_ARTICLE});
  }

  renderMainContent(){
    let references = <section>
      <h4>Contents:</h4>
      <ol id='reference'></ol>
    </section>;

    let content = this.state.wholeContent as ContentType;    
    let mainContent = content["content"].props.children;
    let heading = mainContent[0];
    let sourcesSection = content["sourcesColor"] ? 
      <SourcesSection 
        sourcesColor={content["sourcesColor"]} 
        sourcesOrder={content["sourcesOrder"]} 
        additionalResources={content["additionalResources"]}
      /> : null;
    let main = <main>{mainContent.slice(1)}</main>;
    
    return <div>
      <title>{content["title"]}</title>
      <div id='article'>
        <div id="notFooter">
          {heading}
          {references}
          {sourcesSection}
          {main}
        </div>
        {this.state.footerEl}
        <ImgView/>
        <QuestionsBox/>
        <CloseListsButton/>
        <SideB
          name={"upButton"}
          clickFunc={() => {this.rootEl!.scrollTo(0,0);}}
          imageSrc={'/articlePics/caret-up-solid.svg'}
          title={"Go Up"}
        />
        <SideB
          name={"downButton"}
          clickFunc={()=>{this.rootEl!.scrollTo(0, this.rootEl!.scrollHeight);}}
          imageSrc={'/articlePics/caret-down-solid.svg'}
          title={"Go Down"}
        />
      </div>
      <ContactComp/>
    </div>;
  }

  goBackToHomePageBecauseError(error: string){
    if (error === ERROR_NO_ARTICLE) alert("Article not found");
    else alert("Unknown error! Please report this in the feedback form.");
    changeLoadingText("Going To Home Page");
    this.props.changeAR(false);
  }

  render() {
    if (this.state.wholeContent && (this.state.wholeContent!) !== ERROR_NO_ARTICLE) return this.renderMainContent();
    return null;
  }

  componentDidMount(){
    // check mobile
    let isMobile: boolean = window.screen.width <= parseInt(getComputedStyle(document.documentElement).getPropertyValue("--maxWidthForMobile"));

    const footer = <footer>
      <Link to="/" onClick={showLoadingScreen}>Home Page</Link>
      {
        ((!isMobile) && (`../articlePages${this.pathnameToUse}_worksheet.tsx` in modules)) ? 
        <Link to={"/worksheet?topic=" + this.pathnameToUse.slice(1)}>Worksheet</Link> : 
        null
      }
      <button onClick={ () => store.dispatch({
        type: FORM_COUNTER,
        payload: -1
      })}>Contact Us</button>
    </footer>;

    this.setState({footerEl: footer});
  }

  componentDidUpdate() {
    if (!this.state.wholeContent) this.setWholeContent();
    else if (this.state.wholeContent === ERROR_NO_ARTICLE) this.goBackToHomePageBecauseError(ERROR_NO_ARTICLE);
    else if (this.allowCleanUp) {
      this.allowCleanUp = false;
      document.fonts.ready.then(()=>this.cleanUp());
    }
  }

  cleanUp(){
    changeLoadingText("Formatting Notes"); 
    this.addDateEl();
    this.setReferenceEl();
    document.documentElement.style.backgroundColor = "#832";
    this.addTogglesToH();
    $(".content a").attr("target","_blank");
    this.rootEl!.addEventListener("scroll", this.scrollFunc);
    this.addColors();
    this.addKeyBinds();
    //@ts-ignore
    if (!OFFLINE_MODE) window.MathJax.typesetPromise();
    window.setTimeout(fadeLoadingToInsv, 1);
  }

  addDateEl(){
    fetch(`https://api.github.com/repos/uzairarif5/studyNotes/commits?path=src/pages${this.pathnameToUse}.js`)
    .then(res => res.json())
    .then(res => {
      let dateText = res[0]["commit"]["committer"]["date"];
      if (dateText) {
        let dateStr = new Date(dateText).toString();
        let formatedDate = dateStr.substring(0, dateStr.indexOf(" ("));
        let dateEl = document.createElement("div");
        dateEl.innerHTML = `<small><b>Last Commit:</b> ${formatedDate}</small>`;
        dateEl.id = "date";
        document.querySelector("h1")!.after(dateEl);	
      }
    })
    .catch(err => {
      console.log("Adding the date element gave this error: ", err);
    });
  }

  setReferenceEl(){
    let h2s = document.getElementsByTagName("H2");
    let referenceHTML = "";
    for(let el of h2s){
      if(!el.id) el.id = el.textContent!.replaceAll(" ","_");
      referenceHTML += "<li><a href=\"#" + el.id + "\">" + el.textContent + "</a></li>";
    }
    document.getElementById("reference")!.innerHTML = referenceHTML;
  }
  
  addTogglesToH(){
    $('h2').on("click",(el)=> $(el.target).next().slideToggle());
    $('h3').on("click",(el)=> $(el.target).nextUntil('h3, br').slideToggle());
  }

  //@ts-ignore
  scrollFunc(el){
    if(el.target.scrollTop > 100) showSideB("#upButton");
    else hideSideB("#upButton");
    if(el.target.scrollTop > el.target.scrollHeight-800) hideSideB("#downButton");
    else showSideB("#downButton");
  }

  addColors(){
    let sc = (this.state.wholeContent as ContentType).sourcesColor;
    $('[data-source]').each(function(){
      let curList = $(this);
      let num = parseInt(curList.attr("data-source")!);
      curList.css("background-color", sc[num]);
    });
  }

  addKeyBinds(){
    document.onkeyup = (e) => {
      if (e.key === "s"){
        $('[data-source]').each(function() {
          if (this.hasAttribute("title")) this.removeAttribute("title");
          else{
            let sourceNum = this.getAttribute("data-source");
            let text = document.querySelector(`#sources li[data-num="${sourceNum}"]`)!.textContent;
            this.setAttribute("title","Source: " + text);
          }
        })
      }
    }
  }

  componentWillUnmount() {
    this.rootEl!.removeEventListener("scroll",this.scrollFunc);
  }
}

function ArticleWrapper(){
  const [allowRender, changeAR] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!allowRender) navigate("/");
  });

  if(allowRender) return <Article changeAR={changeAR}/>;
  else return null;
}

export default ArticleWrapper;


