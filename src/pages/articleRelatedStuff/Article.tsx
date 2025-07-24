import React, { useEffect, useState } from 'react';
import './Article.scss';
import $ from 'jquery';
import ContactComp from "../ContactComp";
import { fadeLoadingToInsv , changeLoadingText, showLoadingScreen} from "../../loadingFuncs.js";
import { Link } from 'react-router';
import { useNavigate } from "react-router";
import { FORM_COUNTER, Q_COUNTER, CLOSING_LIST_PROCESS } from "../../reduxStuff/actions";
import { SideB, showSideB, hideSideB, CloseListsButton } from './sideButtons';
import { QuestionsBox } from './Questions';
import { ImgView } from './ImgView';

//@ts-ignore
import store from "../../reduxStuff/store.js";

const modules = import.meta.glob(['../articlePages/*/*.tsx','../articlePages/guide.tsx','../privatePages/*/*.tsx']);
const ERROR_NO_ARTICLE = "ERROR_NO_ARTICLE";
const ERROR_NO_SOURCES = "ERROR_NO_SOURCES";
const NO_SOURCES = "RENDER_WITHOUT_SOURCES";
const OFFLINE_MODE = false;
const GET_SOURCES_LIST_LINK = 1 ? //Change this to 0 if you want to use other link
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
  sourcesList: string | null,
  wholeContent: ContentType | string | null,
  footerEl: null,
}

type PropsType = {
  changeAR: React.Dispatch<React.SetStateAction<boolean>>
}

class Article extends React.Component<PropsType> {
  rootEl: HTMLElement | null = null;
  pathnameToUse: string = "";
  allowCleanUp: boolean = false;
  state: ArticleState = {sourcesList: null, wholeContent: null, footerEl: null};

  constructor(props: PropsType) {
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

  setSourcesList(){
    const setSourcesListInner = (strInput: string) => {
      fetch(GET_SOURCES_LIST_LINK, {
        method:"post", 
        body: strInput
      })
      .then(res=>res.text())
      .then(res=> this.setState({sourcesList: res}))
      .catch((err)=> {
        console.log("There was an error getting the sources:");
        console.error(err);
        this.setState({sourcesList: ERROR_NO_SOURCES});
      });
    }

    if (OFFLINE_MODE) this.setState({sourcesList: NO_SOURCES});
    else {
      let content = this.state.wholeContent as ContentType;
      let inputObj = {
        "sourcesColor": content["sourcesColor"],
        "sourcesOrder": content["sourcesOrder"],
        "additionalResources": content["additionalResources"]
      };
      if (!inputObj["sourcesColor"]) this.setState({sourcesList: NO_SOURCES});
      else {
        if (import.meta.env.DEV)
          //@ts-ignore
          import("../../privateFuncs/private_json_input.ts")
          .then(res => setSourcesListInner(res.default(inputObj)));
        else {
          let strInput = JSON.stringify(inputObj);
          setSourcesListInner(strInput);
        }
      }
    }
  }

  renderMainContent(){
    let references = <section>
      <h4>Contents:</h4>
      <ol id='reference'></ol>
    </section>;

    let SourcesSection = null;
    if(this.state.sourcesList !== NO_SOURCES){
      SourcesSection = <section dangerouslySetInnerHTML={{__html:
        this.state.sourcesList!
      }}></section>;
    }
    
    let content = this.state.wholeContent as ContentType;
    let mainContent = content["content"].props.children;
    let heading = mainContent[0];
    let main = <main>{mainContent.slice(1)}</main>;
    
    return <div>
      <title>{content["title"]}</title>
      <div id='article'>
        <div id="notFooter">
          {heading}
          {references}
          {SourcesSection}
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

  goBackToHomePageCauseError(error: string){
    if (error === ERROR_NO_ARTICLE) alert("Article not found");
    else if (error === ERROR_NO_SOURCES) alert("Sources not found");
    else alert("Unknown error! Please report this in the feedback form.");
    changeLoadingText("Going To Home Page");
    this.props.changeAR(false);
  }

  render() {
    let wholeContentValid = this.state.wholeContent && (this.state.wholeContent!) !== ERROR_NO_ARTICLE;
    let sourcesValid = this.state.sourcesList && this.state.sourcesList !== ERROR_NO_SOURCES;
    if (wholeContentValid && sourcesValid){
      this.allowCleanUp = true;
      return this.renderMainContent();
    }
    return null;
  }

  componentDidMount(){
    //set footer first
    const noWSFooter = <footer>
      <Link to="/">Home Page</Link>
      <button onClick={ () => store.dispatch({
        type: FORM_COUNTER,
        payload: -1
      })}>Contact Us</button>
    </footer>;

    let isMobile: boolean = window.screen.width <= parseInt(getComputedStyle(document.documentElement).getPropertyValue("--maxWidthForMobile"));
    if(isMobile) this.setState({footerEl: noWSFooter});
    else {
      const WSFooter = <footer style={{gridTemplateColumns:"33% 33% 33%"}}>
        <Link to="/" onClick={showLoadingScreen}>Home Page</Link>
        <Link to={"/worksheet?topic=" + this.pathnameToUse.slice(1)}>Worksheet</Link>
        <button onClick={ () => store.dispatch({
          type: FORM_COUNTER,
          payload: -1
        })}>Contact Us</button>
      </footer>;

    let isMobile: boolean = window.screen.width <= parseInt(getComputedStyle(document.documentElement).getPropertyValue("--maxWidthForMobile"));
    if(isMobile)
      this.setState({footerEl: noWSFooter});
    else{
      /* @vite-ignore */
      let pathName = `../articlePages${this.pathnameToUse}_worksheet.tsx`;
      if (pathName in modules) this.setState({footerEl: WSFooter})
      else this.setState({footerEl: noWSFooter});
    }
  }

  componentDidUpdate() {
    if (!this.state.wholeContent) this.setWholeContent();
    else if(this.state.wholeContent === ERROR_NO_ARTICLE) this.goBackToHomePageCauseError(ERROR_NO_ARTICLE);
    else if (!this.state.sourcesList) this.setSourcesList();
    else if(this.state.sourcesList === ERROR_NO_SOURCES) this.goBackToHomePageCauseError(ERROR_NO_SOURCES);
    else if(this.allowCleanUp) document.fonts.ready.then(()=>this.cleanUp());
  }

  cleanUp(){
    this.allowCleanUp = false;
    changeLoadingText("Formatting Notes"); 
    this.addDateEl();
    this.setReferenceEl();
    document.documentElement.style.backgroundColor = "#832";
    this.addTogglesToH();
    $(".content a, #sources a").attr("target","_blank");
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
            let text = document.querySelector(`#sources li[data-num="${sourceNum}"]`)!.textContent
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