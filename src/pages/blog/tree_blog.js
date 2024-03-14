import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Tree Blog";
export const content = <>
	<h1>Tree Blog</h1>
	<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	<h2 id="toronto">Toronto</h2>
	<div className="content">
		<div style={{width: "24%", marginLeft: "0.5%", marginRight: "0.5%", float: "left"}}>
			<figure>
				<ImgComp src={require("./blogImages/1.jpg")} style={{width: "90%"}}/>
				<figcaption></figcaption>
			</figure>
			<figure>
				<ImgComp src={require("./blogImages/4.jpg")} style={{width: "90%"}}/>
				<figcaption></figcaption>
			</figure>
		</div>    
		<div style={{width: "24%", marginLeft: "0.5%", marginRight: "0.5%", float: "left"}}>
			<figure>
				<ImgComp src={require("./blogImages/3.jpg")} style={{width: "90%"}}/>
				<figcaption></figcaption>
			</figure>
		</div>    
		<div style={{width: "24%", marginLeft: "0.5%", marginRight: "0.5%", float: "left"}}>
			<figure>
				<ImgComp src={require("./blogImages/5.jpg")} style={{width: "90%"}}/>
				<figcaption></figcaption>
			</figure>
		</div>   
		<div style={{width: "24%", marginLeft: "0.5%", marginRight: "0.5%", float: "left"}}>
			<figure>
				<ImgComp src={require("./blogImages/2.jpg")} style={{width: "90%"}}/>
				<figcaption></figcaption>
			</figure>
		</div>  
	</div>
</>
