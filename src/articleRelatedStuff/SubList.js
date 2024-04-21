import React from 'react';
import { Suspense } from 'react';
import $ from 'jquery';
import iconDown from '../fontsAndPics/chevron-circle-down.svg';
import iconRight from '../fontsAndPics/chevron-circle-right.svg';
import iconLeft from '../fontsAndPics/chevron-circle-left.svg';
import PropTypes from 'prop-types';

class SubList extends React.Component {
	static globalNum = 0;

	constructor(props) {
		super(props);
		SubList.globalNum += 1;
		this.curNum = SubList.globalNum;
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
			this.prevImage = (this.parentDir === "ltr") ? "right" : "left";
			return <>
				&nbsp;
				<img alt="" className='icon' src={iconDown} id={"icon"+this.curNum} onClick={(el)=>{
					this.imgFunc(this.prevImage, el);
					this.prevImage = (this.prevImage === "down") ? 
					((this.parentDir === "ltr") ? "right" : "left") :
					"down";
				}} />{
					(this.props.numbered) ?
					<ol dir={this.props.dir}>{this.props.children}</ol> :
					<ul dir={this.props.dir}>{this.props.children}</ul>
				}
			</>;
		}
		else {
			this.prevImage = "down";
			return <Suspense fallback={<></>}>
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
				{
					(this.props.numbered) ?
					<ol style={{display:"none"}} dir={this.props.dir}>{this.props.children}</ol> : 
					<ul style={{display:"none"}} dir={this.props.dir}>{this.props.children}</ul>
				}
			</Suspense>
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

SubList.propTypes = {
	opened: PropTypes.bool,
	dir: PropTypes.string,
	numbered: PropTypes.bool
}
SubList.defaultProps = { opened: false, dir: "ltr", numbered:false };

export default SubList;