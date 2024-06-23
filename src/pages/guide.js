import SubList from "../articleRelatedStuff/SubList";
import { TableLI } from "../articleRelatedStuff/tableManager";
import { MathStuff } from "../articleRelatedStuff/MathStuff"; 
import { getSourcesOL } from "../articleRelatedStuff/sourcesManager";
import { CodePre } from "../articleRelatedStuff/Code";
import { drawLine, drawBar, drawHis } from "../articleRelatedStuff/drawCharts";
import { Questions } from "../articleRelatedStuff/Questions";

export const title = "My Study Notes: Guide";
export const sourcesColor = {50:null, 51: "#3a3", 52:"#c45645"};

export const content = <>
	<h1><u>My Study Notes:</u> About Page</h1>
  {getSourcesOL(sourcesColor)}
	<ol id="additionalResources">
		<li>Additional Resource 1</li>
		<li>Additional Resource 2</li>
	</ol>

	<h2 id="bla">Chapter here</h2>
	<div className="content">
		<div style={{float: "left",width: "48%",marginRight: "1%",marginLeft: "1%"}} data-source={50}>
		<h3>source 1 title example</h3>
		<ul>
			<li>Texts are normally written like this. Text here would be from source 1.</li>
			<li><a href='./'>Text that are in red are not from the main source, they are a hyperlink to the actual source.</a></li>
			<li className="research">Translucent text contains content that need more research.</li>
			<MathStuff>$${"\\begin{align} \\text{Equations and images} \\\\ \\text{will be shown like this}\\end{align}"}$$</MathStuff>
			<li>You can click on images and equations to expand them.</li>
		</ul>
		</div>
		<div style={{float: "right",width: "48%",marginRight: "1%",marginLeft: "1%"}}>
			<div style={{backgroundColor: "#3a3"}} data-source={51}>
				<h3>Subheading A</h3>
				<ul>
					<li>This bullet point would be from source 2.</li>
					<li>Sometimes you can hover on a section to see the source, but this only works if the code mentions the source of the section.</li>
					<li>Sometimes if I don't fully understand a point, I might add extra questions to the end of the bullet point, like this:<Questions>
						<li>Example Question 1</li>
						<li>Example Question 2</li>
					</Questions></li>
				</ul>
			</div>
			<div style={{backgroundColor: "#c45645"}} data-source={52}>
				<h3>Subheading B</h3>
				<ul>
					<li>This would be from source 3.<SubList>
						<li>Subpoints would be slightly darker.</li>
						<TableLI style={{width: "70%",marginLeft: "15%"}}>
							<thead><tr><th colSpan="2">Example table</th></tr></thead>
							<tbody>
							<tr><td colSpan="2">Row 1</td></tr>
							<tr><td>Row 2 column 1</td><td>Row 2 column2</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li className="ownExplanation">Any points written inside a dashed border are my own explanation.</li>
					<li>Examples involving code:<SubList>
						<li>Sometimes some points would have inline code like this: <code>a = 5</code>, or like this:</li>
            <li><CodePre language="python">{`
if (showExample):
	print("Here you go")
            `}</CodePre></li>
					</SubList></li>
					<li>Examples of graph:<SubList>
						<li>You can click on them to expand them.</li>
						<li>Line graph:</li>
						{drawLine({
							data:[
								{yVal: 2},
								{yVal: 5},
								{yVal: 8},
								{yVal: 14},
								{yVal: 7},
								{yVal: 4}
							], 
							h: 250, 
							xLabel:"Number of times", 
							yLabel:"Frequency"
						})}
						<li>Bar graph:</li>
						{drawBar({
							data:[
								{name: "Children",val: 19},
								{name: "Working-age adults",val: 43},
								{name: "Retirees",val: 38}
							],
							h: 300,
							xLabel: "Groups",
							yLabel: "Proportion"
						})}
						<li>Histrogram:</li>
						{drawHis({
						data:[
							{name: 59.95, val: 0.05},
							{name: 61.95, val: 0.03},
							{name: 63.95, val: 0.15},
							{name: 65.95, val: 0.4},
							{name: 67.95, val: 0.17},
							{name: 69.95, val: 0.12},
							{name: 71.95, val: 0.07},
							{name: 73.95, val: 0.01}
						],
						h: 350,
						xLabel: "Heights",
						yLabel: "Relative Frequency"
					})}
					</SubList></li>
				</ul>
			</div>
		</div>
	</div>
</>
