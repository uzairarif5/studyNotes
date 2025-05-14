import React,{ Suspense, type ReactNode } from 'react';
import $ from 'jquery';

const iconDown = '/articlePics/chevron-circle-down.svg';
const iconRight = '/articlePics/chevron-circle-right.svg';
const iconLeft = '/articlePics/chevron-circle-left.svg';

type SubDivInnerPropsType = {
	opened?: boolean,
	dir?: string,
	children: ReactNode
}

//All children of this class will be OL or UL
class SubDiv extends React.Component<SubDivInnerPropsType> {
  static globalNum = 0;
	curNum: number;
	prevImage: string;
	parentDir: string;

  constructor(props: SubDivInnerPropsType) {
    super(props);
    SubDiv.globalNum += 1;
    this.curNum = SubDiv.globalNum;
    this.prevImage = "";
    this.parentDir = "ltr";
  }

  imgFunc(pi: string, el: any){
    let selectedEl = $(el.target).next();
    switch(pi){
      case "right":
      el.target.src = iconRight;
      selectedEl.slideUp();
      break;
      case "left":
      el.target.src = iconLeft;
      selectedEl.slideUp();
      break;
      default:
      el.target.src = iconDown;
      selectedEl.slideDown();
    }
  }

  render(){
    let curDir: string = this.props.dir || "ltr";
    if(this.props.opened){
      this.prevImage = (this.parentDir === "ltr") ? "left" : "right";
      return <>
        &nbsp;
        <img alt="" className='icon' src={iconDown} id={"icon"+this.curNum} onClick={(el)=>{
          this.imgFunc(this.prevImage, el);
          this.prevImage = (this.prevImage === "down") ? 
          ((this.parentDir === "ltr") ? "right" : "left") :
          "down";
        }} />
        <div className='subDiv' dir={curDir}>{this.props.children}</div>
      </>;
    }
    else {
      this.prevImage = "down";
      return <>
        &nbsp;
        <img
          alt=""
          className='icon'
          src={(this.parentDir === "ltr") ? iconRight : iconLeft}
          id={"icon"+this.curNum}
          onClick={(el)=>{
            this.imgFunc(this.prevImage, el);
            this.prevImage = (this.prevImage === "down") ? 
            ((this.parentDir === "ltr") ? "right" : "left") : "down";
          }}
        />
        <Suspense>{
          <div className='subDiv' style={{display:"none"}} dir={curDir}>{this.props.children}</div>
        }</Suspense>
      </>;
    };
  }

  componentDidMount(){
    try{
      if (document.getElementById("icon"+this.curNum)!.closest("ul")!.getAttribute("dir") === "rtl")
      {this.parentDir="rtl";}
      this.forceUpdate();
    }
    catch{}
  }
}

export default SubDiv;