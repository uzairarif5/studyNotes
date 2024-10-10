import React from 'react';
import { Suspense } from 'react';
import $ from 'jquery';
import iconDown from '../fontsAndPics/chevron-circle-down.svg';
import iconRight from '../fontsAndPics/chevron-circle-right.svg';
import iconLeft from '../fontsAndPics/chevron-circle-left.svg';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { CLOSING_LIST_PROCESS } from '../actions';
import store from "../store";

class SubListInner extends React.Component {
	static globalNum = 0;
	static globalCounter = 0;

	constructor(props) {
		super(props);
		SubListInner.globalNum += 1;
		this.curNum = SubListInner.globalNum;
		this.prevImage = "down";
		this.parentDir = "ltr";
	}

	imgFunc(ci, el){
		let selectedEl = $(el).next();
		switch(ci){
			case "right":
				el.src = iconDown;
				selectedEl.slideDown("fast",
					()=>document.getElementById("main").scrollBy(0, 1) //to make down button visible again
				);
				break;
			case "left":
				el.src = iconDown;
				selectedEl.slideDown("fast",
					()=>document.getElementById("main").scrollBy(0, 1) //to make down button visible again
				);
				break;
			default:
				if(this.parentDir === "ltr") el.src = iconRight;
				else el.src = iconLeft;
				selectedEl.slideUp();
		}
	}

	render(){
		if(this.props.opened){
			this.prevImage = (this.parentDir === "ltr") ? "right" : "left";
			return <>
				&nbsp;
				<img alt="" className='icon' src={iconDown} id={"icon"+this.curNum} onClick={(el)=>{
					let curImage = (this.prevImage === "down") ? 
					((this.parentDir === "ltr") ? "right" : "left") : "down";
					this.imgFunc(curImage, el.target);
					this.prevImage = curImage;
				}} />{
					(this.props.numbered) ?
					<ol dir={this.props.dir} className={this.props.className}>{this.props.children}</ol> :
					<ul dir={this.props.dir} className={this.props.className}>{this.props.children}</ul>
				}
			</>;
		}
		else {
			return <Suspense fallback={<></>}>
				&nbsp;
				<img
					alt=""
					className='icon'
					src={(this.parentDir === "ltr") ? iconRight : iconLeft}
					id={"icon"+this.curNum}
					onClick={(el)=>{
						let curImage = (this.prevImage === "down") ? 
						((this.parentDir === "ltr") ? "right" : "left") : "down";
						this.imgFunc(curImage, el.target);
						this.prevImage = curImage;
					}}
				/>
				{
					(this.props.numbered) ?
					<ol style={{display:"none"}} dir={this.props.dir} className={this.props.className}>{this.props.children}</ol> : 
					<ul style={{display:"none"}} dir={this.props.dir} className={this.props.className}>{this.props.children}</ul>
				}
			</Suspense>
		};
	}

	componentDidMount(){
		let curEl = document.getElementById("icon"+this.curNum);
		if (curEl.closest("ul").getAttribute("dir") === "rtl") this.parentDir="rtl";
		this.forceUpdate();
	}

	componentDidUpdate(){
		if(this.props.closingState && (this.prevImage !== "down")){
			let curImage = "down";
			this.imgFunc(curImage, document.getElementById("icon"+this.curNum));
			this.prevImage = curImage;
		}
		SubListInner.globalCounter += 1;
		if (SubListInner.globalCounter === SubListInner.globalNum){
			window.setTimeout(()=>{
				store.dispatch({
					type: CLOSING_LIST_PROCESS,
					payload: false
				});
				SubListInner.globalCounter = 0;
			});
		}
	}
}

SubListInner.propTypes = {
	opened: PropTypes.bool,
	dir: PropTypes.string,
	numbered: PropTypes.bool
}

function SubList(props){
	const closingState = useSelector(state => state.currentlyClosingLists); 

	return <SubListInner
		opened = {props.opened || false}
		dir = {props.dir || "ltr"}
		numbered = {props.numbered || false}
		className = {props.className || ""}
		closingState = {closingState}
	>{props.children}</SubListInner>;
}

export default SubList;