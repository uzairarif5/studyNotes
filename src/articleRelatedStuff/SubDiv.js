import React from 'react';
import { Suspense } from 'react';
import $ from 'jquery';
import iconDown from '../fontsAndPics/chevron-circle-down.svg';
import iconRight from '../fontsAndPics/chevron-circle-right.svg';
import iconLeft from '../fontsAndPics/chevron-circle-left.svg';
import PropTypes from 'prop-types';

//All children of this class will be OL or UL
class SubDiv extends React.Component {
    static globalNum = 0;

    constructor(props) {
        super(props);
        SubDiv.globalNum += 1;
        this.curNum = SubDiv.globalNum;
        this.prevImage = "";
        this.parentDir = "ltr";
    }

    imgFunc(pi, el){
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
                <div className='subDiv' dir={this.props.dir}>{this.props.children}</div>
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
                    <div className='subDiv' style={{display:"none"}} dir={this.props.dir}>{this.props.children}</div>
                }</Suspense>
            </>;
        };
    }

    componentDidMount(){
        try{
            if (document.getElementById("icon"+this.curNum).closest("ul").getAttribute("dir") === "rtl")
            {this.parentDir="rtl";}
            this.forceUpdate();
        }
        catch{}
    }
}

SubDiv.propTypes = {
    opened: PropTypes.bool,
    dir: PropTypes.string
}
SubDiv.defaultProps = { opened: false, dir: "ltr" };

export default SubDiv;