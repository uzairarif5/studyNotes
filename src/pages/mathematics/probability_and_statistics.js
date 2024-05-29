import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";
import { drawLine, drawBar, drawHis } from "../../articleRelatedStuff/drawCharts";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Probability And Statistics Notes" ;
export const sourcesColor = {7: null, 41: "#c45645"};
export const content = <>
	<h1>Probability And Statistics Notes</h1>
	<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	{getSourcesOL(sourcesColor)}

	<h2 id="sampling_and_data">Sampling and Data</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li><u>Definitions:</u><SubList>
					<li>The science of <b>statistics</b> deals with the collection, analysis, interpretation, and presentation of data. We see and use data in our everyday lives.</li>
					<li>Organizing and summarizing data is called <b>descriptive statistics</b>.</li>
					<li>After you have studied probability and probability distributions, you will use formal methods for drawing conclusions from "good" data. The formal methods are called <b>inferential statistics</b>.</li>
					<li><b>Probability</b> is a mathematical tool used to study randomness. It deals with the chance (the likelihood) of an event occurring.</li>
					<li>In statistics, we generally want to study a <b>population</b>. You can think of a population as a collection of persons, things, or objects under study.</li>
					<li>To study the population, we select a <b>sample</b>. The idea of sampling is to select a portion (or subset) of the larger population and study that portion (the sample) to gain information about the population.</li>
					<li>A <b>statistic</b> is a number that represents a property of the sample.</li>
					<li>A <b>parameter</b> is a numerical characteristic of the whole population that can be estimated by a statistic.</li>
					<li>The accuracy really depends on how well the sample represents the population. The sample must contain the characteristics of the population in order to be a <b>representative sample</b>.</li>
					<li>A <b>variable</b> is a characteristic or measurement that can be determined for each member of a population.</li>
					<li><b>Data</b> are the actual values of the variable. <b>Datum</b> is a single value.</li>
					<li><b>Qualitative data</b> are the result of categorizing or describing attributes of a population.</li>
					<li><b>Quantitative data</b> are always numbers. Quantitative data are the result of counting or measuring attributes of a population, and may be either <b>discrete</b> or <b>continuous</b>.</li>
				</SubList></li>
				<li>Sampling:<SubList>
					<li>A sample should have the same characteristics as the population it is representing.</li>
					<li>In <b>random sampling</b>, each member of a population initially has an equal chance of being selected for the sample:<SubList>
						<li><b>Simple Random Sampling:</b> Any group of \(n\) individuals is equally likely to be chosen as any other group of \(n\) individuals.</li>
						<li>To choose a <b>stratified sample</b>, divide the population into groups called <b>strata</b> and then take a proportionate number from each stratum.</li>
						<li>To choose a <b>cluster sample</b>, divide the population into clusters (groups) and then randomly select some of the clusters. All the members from these clusters are in the cluster sample.</li>
						<li>To choose a <b>systematic sample</b>, randomly select a starting point and take every \(n\)th piece of data from a listing of the population.</li>
						<li>True random sampling is done with replacement. That is, once a member is picked, that member goes back into the population and thus may be chosen more than once. However for practical reasons, in most populations, simple random sampling is done without replacement.</li>
						<li>Most samples are taken from large populations and the sample tends to be small in comparison to the population. Since this is the case, sampling without replacement is approximately the same as sampling with replacement.</li>
					</SubList></li>
					<li>A type of sampling that is non-random is convenience sampling. <b>Convenience sampling</b> involves using results that are readily available. For example, a computer software store conducts a marketing study by interviewing potential customers who happen to be in the store browsing through the available software.</li>
					<li>The actual process of sampling causes <b>sampling errors</b>. For example, the sample may not be large enough. Factors not related to the sampling process cause <b>nonsampling errors</b>. A defective counting device can cause a nonsampling error.</li>
					<li>A sample will never be exactly representative of the population so there will always be some sampling error. As a rule, the larger the sample, the smaller the sampling error.</li>
					<li>In statistics, a <b>sampling bias</b> is created when a sample is collected from a population and some members of the population are not as likely to be chosen as others.</li>
				</SubList></li>
				<li>The way a set of data is measured is called its <b>level of measurement</b>. Data can be classified into four levels of measurement:<SubList>
					<li>Data that is measured using a <b>nominal scale</b> is qualitative (categorical). Nominal scale data are not ordered.</li>
					<li>Data that is measured using an <b>ordinal scale</b> is similar to nominal scale data but ordinal scale data can be ordered.</li>
					<li>Data that is measured using the <b>interval scale</b> is similar to ordinal level data because it has a definite ordering but differences between interval scale data can be measured though the data does not have a starting point. Temperature scales like Celsius (C) and Fahrenheit (F) are measured by using the interval scale.</li>
					<li><b>Ratio scale data</b> is like interval scale data, but it has a 0 point and ratios can be calculated.</li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Frequency:<SubList>
					<li>A <b>frequency</b> is the number of times a value of the data occurs.</li>
					<li>A <b>relative frequency</b> is the ratio (fraction or proportion) of the number of times a value of the data occurs in the set of all outcomes to the total number of outcomes.</li>
					<li><b>Cumulative relative frequency</b> is the accumulation of the previous relative frequencies.</li>
					<TableLI>
						<caption>Twenty students were asked how many hours they worked per day. Their responses, in hours, are as follows: 5; 6; 3; 3; 2; 4; 7; 5; 2; 3; 5; 6; 5; 4; 4; 3; 5; 2; 5; 3</caption>
						<thead><tr><th>Data Value</th><th>Frequency</th><th>Relative Frequency</th><th>Cumulative Relative Frequency</th></tr></thead>
						<tbody>
							<tr><td>2</td><td>3</td><td>\(\frac{"{3}{20}"}= 0.15\)</td><td>0.15</td></tr>
							<tr><td>3</td><td>5</td><td>\(\frac{"{5}{20}"}= 0.25\)</td><td>0.15 + 0.25 = 0.40</td></tr>
							<tr><td>4</td><td>3</td><td>\(\frac{"{3}{20}"}= 0.15\)</td><td>0.40 + 0.15 = 0.55</td></tr>
							<tr><td>5</td><td>6</td><td>\(\frac{"{6}{20}"}= 0.30\)</td><td>0.55 + 0.30 = 0.85</td></tr>
							<tr><td>6</td><td>2</td><td>\(\frac{"{2}{20}"}= 0.10\)</td><td>0.85 + 0.10 = 0.95</td></tr>
							<tr><td>7</td><td>1</td><td>\(\frac{"{1}{20}"}= 0.05\)</td><td>0.95 + 0.05 = 1.00</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Experimental Design:<SubList>
					<li data-source={41}>An <b>observational study</b> is when the investigator collects data by observing, measuring, counting, watching or asking questions. The investigator does not change anything. There are different time-periods for data collection to consider for observational studies:<SubList>
						<li><b>Cross-sectional study:</b> observational data collected at a single point in time.</li> 
						<li><b>Retrospective study:</b> observational data collected from the past using records, interviews, and other similar 
						artifacts. </li>
						<li><b>Prospective (or longitudinal or cohort) study:</b> Subjects are measured from a starting point over time for 
						the occurrence of the condition of interest.</li>
					</SubList></li>
					<li data-source={41}>An <b>experiment</b> is when the investigator changes a variable or imposes a treatment to determine its effect. In an experiment, there are different options to assign treatments:<SubList>
						<li><b>Completely Randomized Experiment:</b> In this experiment, the individuals are randomly placed into two or more groups. One group gets either no treatment or a <b>placebo</b> (a fake treatment); this group is called the <b>control group</b>. The groups getting the treatment are called the <b>treatment groups</b></li>
						<li><b>Randomized Block Design:</b> A block is a group of subjects that are considered similar or the same subject measured multiple times, but the blocks differ from each other.</li>
						<li><b>Matched Pairs Design:</b> This is a subset of the randomized block design where the treatments are given to two groups that can be matched up with each other in some way.</li>
						<li><b>Factorial Design:</b> This design has two or more independent categorical variables called <b>factors</b>. Each factor has two or more different treatment levels. The factorial design allows the researcher to test the effect of the different factors simultaneously on the dependent variable.</li>
					</SubList></li>
					<li>When one variable causes change in another, we call the first variable the <b>explanatory variable</b>. The affected variable is called the <b>response variable</b>.</li>
					<li><b>Experimental design</b> means planning a set of procedures to investigate a relationship between variables.</li>
					<li>In a randomized experiment, the researcher manipulates values of the explanatory variable and measures the resulting changes in the response variable. The different values of the explanatory variable are called <b>treatments</b>.</li>
					<li>An <b>experimental unit</b> is a single object or individual to be measured.</li>
					<li>Additional variables that can cloud a study are called <b>lurking variables</b>. In order to prove that the explanatory variable is causing a change in the response variable, it is necessary to isolate the explanatory variable.</li>
					<li>The power of suggestion can have an important influence on the outcome of an experiment. In one study of performance-enhancing drugs, researchers noted: <i>Results showed that believing one had taken the substance resulted in [performance] times almost as fast as those associated with consuming the drug itself. In contrast, taking the drug without knowledge yielded no significant performance increment</i>.</li>
					<li>When participation in a study prompts a physical response from a participant, it is difficult to isolate the effects of the explanatory variable. To counter the power of suggestion, researchers set aside one treatment group as a <b>control group</b>. This group is given a <b>placebo</b> treatment: a treatment that cannot influence the response variable.</li>
					<li>The control group helps researchers balance the effects of being in an experiment with the effects of the active treatments.</li>
					<li><b>Blinding</b> in a randomized experiment preserves the power of suggestion. When a person involved in a research study is blinded, he does not know who is receiving the active treatment(s) and who is receiving the placebo treatment. A <b>double-blind</b> experiment is one in which both the subjects and the researchers involved with the subjects are blinded.</li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="descriptive_statistics">Descriptive Statistics</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li>There are numerical and graphical ways to describe and display your data. This area of statistics is called <b>descriptive statistics</b>.</li>
				<li>An <b>outlier</b> is an observation of data that does not fit the rest of the data.</li>
				<li><b>Stem-and-leaf</b> graph (or <b>stemplot</b>):<SubList>
					<li>To create the plot, divide each observation of data into a stem and a leaf. The leaf consists of a final significant digit.</li>
					<li>The number 5,432 has stem 543 and leaf 2. The decimal 9.3 has stem 9 and leaf 3.</li>
					<li><u>Example:</u><SubList>
						<li>Scores for an exam were as follows (smallest to largest): 33; 42; 49; 49; 53; 55; 55; 61; 63; 67; 68; 68; 69; 69; 72; 73; 74; 78; 80; 83; 88; 88; 88; 90; 92; 94; 94; 94; 94; 96; 100:</li>
						<TableLI>
							<thead><tr><th>Stem</th><th>Leaf</th></tr></thead>
							<tbody>
								<tr><td>3</td><td>3</td></tr>
								<tr><td>4</td><td>2 9 9</td></tr>
								<tr><td>5</td><td>3 5 5</td></tr>
								<tr><td>6</td><td>1 3 7 8 8 9 9</td></tr>
								<tr><td>7</td><td>2 3 4 8</td></tr>
								<tr><td>8</td><td>0 3 8 8 8</td></tr>
								<tr><td>9</td><td>0 2 4 4 4 4 6</td></tr>
								<tr><td>10</td><td>0</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li data-source={41}>Back-to-back stem-and-leaf plots let us compare two data sets on the same number line:<SubList>
						<li>The following back-to-back stem-and-leaf plot compares pulse rates before and after exercise.</li>
						<TableLI>
							<thead><tr><td>Before</td><td>Pulse Rates</td><td>After</td></tr></thead>
							<tbody>
								<tr><td style={{textAlign:"right"}}>9 8 8 7 6 5 2</td><td>6</td><td></td></tr>
								<tr><td style={{textAlign:"right"}}>9 8 8 8 6 5 5 5 1 1 0 0</td><td>7</td><td></td></tr>
								<tr><td style={{textAlign:"right"}}>8 8 7 5 4 2</td><td>8</td><td>5 6 6 7 8 9</td></tr>
								<tr><td style={{textAlign:"right"}}>4 0</td><td>9</td><td>0 1 1 2 3 4 5 5 6 8</td></tr>
								<tr><td style={{textAlign:"right"}}>4</td><td>10</td><td>0 1 4 6 7</td></tr>
								<tr><td></td><td>11</td><td>6 7</td></tr>
								<tr><td></td><td>12</td><td>4 5 8</td></tr>
							</tbody>
						</TableLI>
						<li>The first row has pulse rates of 62, 65, 66, 67, 68, 68 and 69. The last row of pulse rates are 124, 125, and 128.</li>
					</SubList></li>
				</SubList></li>
				<li>Another type of graph is a <b>line graph</b>. <u>Example:</u><SubList>
					<li>In the particular line graph below, the x-axis (horizontal axis) consists of data values and the y-axis (vertical axis) consists of frequency points. The requency points are connected using line segments.</li>
					<li>In a survey, 40 mothers were asked how many times per week a teenager must be reminded to do his or her chores:</li>
					<TableLI>
						<thead><tr><th>Number of times</th><th>Frequency</th></tr></thead>
						<tbody>
							<tr><td>0</td><td>2</td></tr>
							<tr><td>1</td><td>5</td></tr>
							<tr><td>2</td><td>8</td></tr>
							<tr><td>3</td><td>14</td></tr>
							<tr><td>4</td><td>7</td></tr>
							<tr><td>5</td><td>4</td></tr>
						</tbody>
					</TableLI>
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
					<li data-source={41}>The line graph for the cumulative or cumulative relative frequency is called an <b>ogive</b>.</li>
				</SubList></li>
				<li><b>Bar graphs</b> consist of bars that are separated from each other. <u>Example:</u><SubList>
					<TableLI>
						<caption>Population of a city</caption>
						<thead><tr><th>Age groups</th><th>Proportion</th></tr></thead>
						<tbody>
							<tr><td>Children</td><td>19%</td></tr>
							<tr><td>Working-age adults</td><td>43%</td></tr>
							<tr><td>Retirees</td><td>38%</td></tr>
						</tbody>
					</TableLI>
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
					<li data-source={41}>A <b>Pareto chart</b> is a bar graph that starts from the most frequent class to the least frequent class.</li>
				</SubList></li>
			</ul>
			<ul data-source={41}>
				<li>The bar graph for quantitative data called a <b>histogram</b> looks similar to a bar graph for qualitative data.</li>
			</ul>
			<ul>
				<li>A histrogram consists of contiguous (adjoining) boxes The horizontal axis is labeled with what the data represents. The vertical axis is labeled either frequency or relative frequency:<SubList>
					<li>To construct a histogram, the number of bars needs to be chosen.</li>
					<li>A convenient starting point is a lower value carried out to one more decimal place than the value with the most decimal places. <u>Examples:</u><SubList>
						<li>If the value with the most decimal places is 2.23 and the lowest value is 1.5, a convenient starting point is 1.495 (1.5 - 0.005 = 1.495).</li>
						<li>If the value with the most decimal places is 3.234 and the lowest value is 1.0, a convenient starting point is 0.9995 (1.0 – 0.0005 = 0.9995).</li>
						</SubList></li>
					<li>The following data are the heights (in inches to the nearest half inch) of 100 male semiprofessional soccer players:</li>
					<TableLI>
						<tbody><tr>
							<td>
								60; 60.5; 61; 61; 61.5<br/>
								63.5; 63.5; 63.5<br/>
								64; 64; 64; 64; 64; 64; 64; 64.5; 64.5; 64.5; 64.5; 64.5; 64.5; 64.5; 64.5<br/>
								66; 66; 66; 66; 66; 66; 66; 66; 66; 66; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5<br/>
								67; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67.5; 67.5; 67.5; 67.5; 67.5; 67.5; 67.5<br/>
								68; 68; 69; 69; 69; 69; 69; 69; 69; 69; 69; 69; 69.5; 69.5; 69.5; 69.5; 69.5<br/>
								70; 70; 70; 70; 70; 70; 70.5; 70.5; 70.5; 71; 71; 71<br/>
								72; 72; 72; 72.5; 72.5; 73; 73.5<br/>
								74
							</td>
						</tr></tbody>
					</TableLI>
					<li>The heights are continuous data.</li>
					<li>The smallest data value is 60. Since the data has at most one decimal place, the starting point is, then, 60 - 0.05 = 59.95.</li>
					<li>The largest value is 74, so 74 + 0.05 = 74.05 is the ending value.</li>
					<li>Next, calculate the width of each bar or class interval. To calculate this width, subtract the starting point from the ending value and divide by the number of bars (you must choose the number of bars you desire). Suppose you choose eight bars:</li>
					<MathStuff>$${`\\frac{74.05 - 59.95}{8} = 1.76`}$$</MathStuff>
					<li>We will round up to two and make each bar or class interval two units wide. Rounding up to two is one way to prevent a value from falling on a boundary. Therefore, the boundaries are:<SubList>
						<li>59.95</li>
						<li>59.95 + 2 = 61.95</li>
						<li>61.95 + 2 = 63.95</li>
						<li>63.95 + 2 = 65.95</li>
						<li>65.95 + 2 = 67.95</li>
						<li>67.95 + 2 = 69.95</li>
						<li>69.95 + 2 = 71.95</li>
						<li>71.95 + 2 = 73.95</li>
						<li>73.95 + 2 = 75.95</li>
					</SubList></li>
					<li>The following histogram displays the heights on the x-axis and relative frequency on the y-axis:</li>
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
					<li>Some values in this data set fall on boundaries for the class intervals. A value is counted in a class interval if it falls on the left boundary, but not if it falls on the right boundary.</li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<ul data-source={41}>
				<li><b>Pie chart:</b><SubList>
					<li>A <b>pie chart</b> takes a circle and divides the circle into pie shaped wedges that are proportional to the size of the relative frequency.</li>
					<li><ImgComp src={require("./probability_and_statistics_pics/9.png")} width="50%"/></li>
				</SubList></li>
				<li><b>Scatter Plot:</b><SubList>
					<li>Sometimes you have two quantitative variables and you want to see if they are related in any way. A scatter plot helps you to see what the relationship may look like.</li>
					<li>A <b>scatter plot</b> is just a plotting of the ordered pairs.</li>
					<li>When you see the dots increasing from left to right then there is a positive relationship between the two quantitative variables. </li>
					<li>If the dots are decreasing from left to right then there is a negative relationship.</li>
					<li>If there is no apparent pattern going up or down, then we say there is no relationship between the two variables.</li>
					<li><u>Example:</u><SubList>
						<TableLI><tbody>
							<tr><th>Elevation (in feet)</th><td>7000 4000 6000 3000 7000 4500 5000</td></tr>
							<tr><th>Temperature (°F)</th><td>50 60 48 70 55 55 60</td></tr>
						</tbody></TableLI>
						<li><ImgComp src={require("./probability_and_statistics_pics/8.png")} width="70%"/></li>
						<li>It also appears to be a negative relationship.</li>
					</SubList></li>
				</SubList></li>
			</ul>
			<ul>
				<li><b>Frequency polygons:</b><SubList>
					<li><a href='https://www.sciencedirect.com/topics/mathematics/frequency-polygon#:~:text=A%20frequency%20polygon%20is%20a,3.3.).'>A <b>frequency polygon</b> is a line graph of class frequency plotted against class midpoint.</a></li>
					<TableLI>
						<caption>Frequency Distribution for Calculus Final Test Scores</caption>
						<thead><tr><th>Lower Bound</th><th>Upper Bound</th><th>Frequency</th><th>Cumulative Frequency</th></tr></thead>
						<tbody>
							<tr><td>49.5</td><td>59.5</td><td>5</td><td>5</td></tr>
							<tr><td>59.5</td><td>69.5</td><td>10</td><td>15</td></tr>
							<tr><td>69.5</td><td>79.5</td><td>30</td><td>45</td></tr>
							<tr><td>79.5</td><td>89.5</td><td>40</td><td>85</td></tr>
							<tr><td>89.5</td><td>99.5</td><td>15</td><td>100</td></tr>
						</tbody>
					</TableLI>
					{drawLine({
						data:[
							{xVal: 44.5, yVal: 0},
							{xVal: 54.5, yVal: 5},
							{xVal: 64.5, yVal: 10},
							{xVal: 74.5, yVal: 30},
							{xVal: 84.5, yVal: 40},
							{xVal: 94.5, yVal: 15},
							{xVal: 104.5, yVal: 0}
						], 
						h: 250, 
						xLabel:"Scores", 
						yLabel:"Frequency",
						allowLabels: true
					})}
				</SubList></li>
				<li><b>Time series graph:</b><SubList>
					<li><a href='https://thirdspacelearning.com/gcse-maths/statistics/time-series-graph/'>A <b>time series graph</b> is a line graph that shows data such as measurements, sales or frequencies over a given time period.</a></li>
					<li>Time series graphs are important tools in various applications of statistics. When recording values of the same variable over an extended period of time, sometimes it is difficult to discern any trend or pattern. However, once the same data points are displayed graphically, some features jump out.</li>
				</SubList></li>
				<li>Measures of the Location of the Data:<SubList>
					<li><b>Quartiles</b> divide ordered data into quarters, while <b>percentiles</b> divide ordered data into hundredths.</li>
					<li>To calculate quartiles and percentiles, the data must be ordered from smallest to largest.</li>
					<li>Quartiles are special percentiles. The first quartile, \(Q1\), is the same as the 25th percentile, and the third quartile, \(Q3\), is the same as the 75th percentile.</li>
					<li>The <b>median</b>, \(M\), is called both the second quartile and the 50th percentile.</li>
					<li>The <b>interquartile range</b>, \(IQR\), is the difference between the third quartile (\(Q3\)) and the first quartile (\(Q1\)).</li>
					<li>The IQR can help to determine potential <b>outliers</b>. A value is suspected to be a potential outlier if it is less than \((1.5)(IQR)\) below the first quartile or more than \((1.5)(IQR)\) above the third quartile.</li>
					<li>A formula for finding the \(k\)th percentile:<SubList>
						<li>Order the data from smallest to largest, and then:</li>
						<MathStuff>
							$$i = \frac{"{k}{100}"} (n+1)$$
							$${`\\begin{align}
								k &= \\text{the }k\\text{th percentile}\\\\
								i &= \\text{the index}\\\\
								n &= \\text{the total number of data}
							\\end{align}`}$$
						</MathStuff>
						<li>If \(i\) is not an integer, then round i up and round i down to the nearest integers. Average the two data values in these two positions.</li>
						<TableLI><tbody><tr><td>
							Listed are 29 ages for best actors in order from smallest to largest:<br/>
							18; 21; 22; 25; 26; 27; 29; 30; 31; 33; 36; 37; 41; 42; 47; 52; 55; 57; 58; 62; 64; 67; 69; 71; 72; 73; 74; 76; 77<br/>
							The 70th percentile:
							\[i = \frac{"{k}{100}"} (n + 1) = \frac{"{70}{100}"} (29 + 1) = 21\]
							The data value in the 21st position in the ordered data set is 64.<br/>
							The 83th percentile:<br/>
							\[i = \frac{"{83}{100}"}(29 + 1) = 24.9\]
							The age in the 24th position is 71 and in the 25th position is 72. Average of 71 and 72: 71.5 years.
						</td></tr></tbody></TableLI>
					</SubList></li>
					<li>A formula for finding the percentile of a value in a data set:<SubList>
						<li>Order the data from smallest to largest, then:</li>
						<MathStuff>
							$$\frac{"{x + 0.5y}{n}"} (100) \text{"{ then round to the nearest integer}"}$$
						</MathStuff>
						<li>\(x\) is the number of data values counting from the bottom of the data list up to but not including the data value for which you want to find the percentile.</li>
						<li>\(y\) is the number of data values equal to the data value for which you want to find the percentile.</li>
						<li>\(n\) is the total number of data.</li>
						<TableLI><tbody><tr><td>
							Listed are 29 ages for best actors in order from smallest to largest:<br/>
							18; 21; 22; 25; 26; 27; 29; 30; 31; 33; 36; 37; 41; 42; 47; 52; 55; 57; 58; 62; 64; 67; 69; 71; 72; 73; 74; 76; 77<br/>
							<b>Find the percentile for 58:</b><br/>
							Counting from the bottom of the list, there are 18 data values less than 58, and there is one value of 58.<br/>
							\[\frac{"{18 + 0.5(1)}{29}"} (100) = 63.80\]<br/>
							58 is the 64th percentile.<br/>
							<b>Find the percentile for 25:</b><br/>
							Counting from the bottom of the list, there are 3 data values less than 25, and there is one value of 25.<br/>
							\[\frac{"{3 + 0.5(1)}{29}"} (100) = 12.07\]<br/>
							25 is the 12th percentile.<br/>
						</td></tr></tbody></TableLI>
					</SubList></li>
				</SubList></li>
				<li><b>Box Plots:</b><SubList>
					<li>The following data are the heights of 40 students:</li>
					<TableLI><tbody><tr><td>
						59; 60; 61; 62; 62; 63; 63; 64; 64; 64; 65; 65; 65; 65; 65; 65; 65; 65; 65; 66; 66; 67; 67; 68; 68; 69; 70; 70; 70; 70; 70; 71; 71; 72; 72; 73; 74; 74; 75; 77
					</td></tr></tbody></TableLI>
					<li>Some properties to construct a box plot:<SubList>
						<li>Minimum value = 59</li>
						<li>Maximum value = 77</li>
						<li>Q1: First quartile = 64.5</li>
						<li>Q2: Second quartile or median= 66</li>
						<li>Q3: Third quartile = 70</li>
					</SubList></li>
					<li><ImgComp src={require("./probability_and_statistics_pics/1.webp")} width="80%"/></li>
				</SubList></li>
				<li>Measures of the center of the data:<SubList>
					<li>The "center" of a data set is also a way of describing location. The two most widely used measures of the "center" of the data are the <b>mean</b> (average) and the <b>median</b>.</li>
					<li>To calculate the <b>mean</b> weight of 50 people, add the 50 weights together and divide by 50.</li>
					<li>To find the <b>median</b> weight of the 50 people, order the data and find the number that splits the data into two equal parts.</li>
					<li>You can quickly find the location of the median by using the expression \(\frac{"{n + 1}{2}"}\).</li>
					<li>If \(n\) is an even number, the median is equal to the two middle values added together and divided by 2 after the data has been ordered.</li>
					<li>The median is generally a better measure of the center when there are extreme values or outliers because it is not affected by the precise numerical values of the outliers.</li>
					<TableLI><tbody><tr><td>
					3; 4; 8; 8; 10; 11; 12; 13; 14; 15; 15; 16; 16; 17; 17; 18; 21; 22; 22; 24; 24; 25; 26; 26; 27; 27; 29; 29; 31; 32; 33; 33; 34; 34; 35; 37; 40; 44; 44; 47;<br/>
					The calculation for the <b>mean</b> is: \[\bar{"{x}"} = \frac{"{[3 + 4 + (8)(2) + ... + (44)(2) + 47]}{10}"} = 23.6\]
					To find the <b>median</b>, \(M\), first find the location is: \[\frac{"{40+1}{2}"} = 20.5\]
					Starting at the smallest value, the median is located between the 20th and 21st values (the two 24s), so \(M\) is 24.
					</td></tr></tbody></TableLI>
					<li>The <b>mode</b> is the most frequent value. There can be more than one mode in a data set as long as those values have the same frequency and that frequency is the highest.</li>
					<li>A data set with two modes is called <b>bimodal</b>.</li>
				</SubList></li>
				<li>The Law of Large Numbers and the Mean:<SubList>
					<li>The <b>Law of Large Numbers</b> says that if you take samples of larger and larger size from any population, then the mean \(\bar{"{x}"}\) of the sample is very likely to get closer and closer to the population mean, \(μ\).</li>
					<li>When only grouped data is available, you do not know the individual data values (we only know intervals and interval frequencies); therefore, you cannot compute an exact mean for the data set. What we must do is estimate the actual mean by calculating the mean of a frequency table.</li>
					<li>To calculate the mean from a grouped frequency table, we need to modify the definition of mean \(\left( \frac{"{\\text{data sum}}{\\text{number of data values}}"} \right)\) to fit within the restrictions of a frequency table.</li>
					<li>Since we do not know the individual data values we can instead find the midpoint of each interval and modify the mean definition to be:</li>
					<MathStuff>
						$$ \text{"{Mean of Frequency Table}"} = \frac{"{\\Sigma fm}{\\Sigma f}"}$$
						$${`\\begin{align}
						f &= \\text{ the frequency of the interval} \\\\
						m &= \\text{ the midpoint of the interval}
						\\end{align}`}$$
					</MathStuff>
				</SubList></li>
				<li>Skewness:<SubList>
					<li>A distribution is <b>symmetrical</b> if a vertical line can be drawn at some point in the histogram such that the shape to the left and the right of the vertical line are mirror images of each other. In a perfectly symmetrical distribution, the mean and the median are the same.</li>
					<li>In a symmetrical distribution that has two modes (bimodal), the two modes would be different from the mean and median.</li>
					<li>The distribution below is <b>skewed to the left</b>. The mean is less than the median, and they are both less than the mode.</li>
					<li><figure>
						<ImgComp src={require("./probability_and_statistics_pics/2.png")} width="60%"/>
						<figcaption>The histogram for the data: 4; 5; 6; 6; 6; 7; 7; 7; 7; 8</figcaption>
					</figure></li>
					<li>The distribution below is <b>skewed to the right</b>. The mean is the largest, while the mode is the smallest.</li>
					<li><figure>
						<ImgComp src={require("./probability_and_statistics_pics/3.png")} width="60%"/>
						<figcaption>The histogram for the data: 6; 7; 7; 7; 7; 8; 8; 8; 9; 10</figcaption>
					</figure></li>
				</SubList></li>
				<li>Standard deviation:<SubList>
					<li>The <b>standard deviation</b> is a number that measures how far data values are from their mean.</li>
					<li>The <b>variance</b> is the average of the squares of the deviations (the \(x - \overline{"{x}"}\) values for a sample, or the \(x - μ\) values for a population).</li>
					<li>The symbol \(σ^2\) represents the population variance; the population standard deviation \(σ\) is the square root of the population variance.</li>
					<li>The symbol \(s^2\) represents the sample variance; the sample standard deviation \(s\) is the square root of the sample variance.</li>
					<MathStuff>{`$$
					σ=\\sqrt{\\frac{\\sum (x-μ)^2}{N}}, \\
					s=\\sqrt{\\frac{\\sum (x-\\overline{x})^2}{n-1}}
					$$`}</MathStuff>
					<li>\(N\) is the number of items in the population, and \(n-1\) is the number of items in the sample.</li>
					<li>The variance is a squared measure and does not have the same units as the data. Taking the square root solves the problem.</li>
					<li><a href='https://en.wikipedia.org/wiki/Bessel%27s_correction'>The use of \(n-1\) instead of \(n\) in the formula for the sample variance and sample standard deviation is called <b>Bessel's correction</b>.</a></li>
					<li>For grouped data we do not know individual data values, so we cannot describe the typical value of the data with precision. In other words, we cannot find the exact mean, median, or mode. We can, however, determine the best estimate of the measures of center by finding the mean of the grouped data with the formula:</li>
					<MathStuff>
						$$ \text{"{Mean of Frequency Table}"} = \frac{"{\\Sigma fm}{\\Sigma f}"}$$
						$${`\\begin{align}
						f &= \\text{ the frequency of the interval} \\\\
						m &= \\text{ the midpoint of the interval}
						\\end{align}`}$$
					</MathStuff>
					<li>Just as we could not find the exact mean, neither can we find the exact standard deviation.</li>
					<li>If the data sets have different means and standard deviations, then comparing the data values directly can be misleading. For each data value, calculate how many standard deviations away from its mean the value is:<SubList>
						<li>Use the formula: value = mean + (#ofSTDEVs)(standard deviation), then solve for #ofSTDEVs, then compare the results of this calculation.</li>
						<li>#ofSTDEVs is often called a "z-score"; we can use the symbol \(z\):</li>
						<TableLI>
							<tbody>
								<tr><th>Sample</th><td>\(x=\overline x+zs\)</td></tr>
								<tr><th>Population</th><td>\(x = μ + zσ\)</td></tr>
							</tbody>
						</TableLI>
						<li data-source={41}><ImgComp src={require("./probability_and_statistics_pics/10.png")} width="60%"/></li>
					</SubList></li>
					<li data-source={41}>The <b>coefficient of variation</b>, denoted by CVar or CV, is the standard deviation divided by the mean. The units on the numerator and denominator cancel with one another and the result is usually expressed as a percentage.</li>
					<li data-source={41}><b>Chebyshev's Inequality:</b><SubList>
						<li>The proportion (percent or fraction) of values from a data set that will fall within \(z\) standard deviations of the mean will be at least:</li>
						<MathStuff>$${"\\left( 1-\\frac{1}{z^2} * 100\\right) \\%"}$$</MathStuff>
						<li>where \(z\) is a real number that has an absolute value greater than 1.</li>
						<li><u>Example:</u><SubList>
							<li>The average number of acres for farms in a certain country is 443 with a standard deviation of 42 acres. At least what percent of farms will have between 338 and 548 acres?</li>
							<MathStuff>
								$${"z = \\frac{338-443}{42} = -2.5 \\text{ and } z = \\frac{548-443}{42} = 2.5"}$$
								$${"\\left( 1-\\frac{1}{2.5^2} * 100\\right) = 84"}$$
							</MathStuff>
							<li>At least 84% of the farms will have between 338 and 548 acres.</li>
						</SubList></li>
					</SubList></li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="probability">Probability</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li><u>Terminology:</u><SubList>
					<li>An <b>experiment</b> is a planned operation carried out under controlled conditions. If the result is not predetermined, then the experiment is said to be a <b>chance experiment</b>.</li>
					<li>A result of an experiment is called an <b>outcome</b>. The <b>sample space</b> of an experiment is the set of all possible outcomes.</li>
					<li>The uppercase letter \(S\) is used to denote the sample space. For example, if you flip one fair coin, \(S = {"\\{H, T\\}"}\) where \(H\) = heads and \(T\) = tails are the outcomes.</li>
					<li>An <b>event</b> is any combination of outcomes. For example, if the experiment is to flip one fair coin, event \(A\) might be getting at most one head. The probability of an event \(A\) is written \(P(A)\), <span className="ownExplanation">while the probability of an event \(A\) not occuring is written \(P(A')\)</span></li>
					<li>The <b>probability</b> of any outcome is the long-term relative frequency of that outcome. Probabilities are between zero and one. \(P(A) = 0\) means the event A can never happen. \(P(A) = 1\) means the event A always happens.</li>
					<li>This important characteristic of probability experiments is known as the <b>law of large numbers</b> which states that as the number of repetitions of an experiment is increased, the relative frequency obtained in the experiment tends to become closer and closer to the theoretical probability.</li>
					<li>An outcome is in the event \(A \text{"{ OR }"} B\) if the outcome is in \(A\) or is in \(B\) or is in both \(A\) and \(B\). This event can also be written as \(A\) Union \(B\), with notation as follows: \(A∪B\)</li>
					<li>An outcome is in the event \(A \text{"{ AND }"} B\) if the outcome is in both \(A\) and \(B\) at the same time. This event can also be written as \(A\) Intersection \(B\), with notation as follows: \(A∩B\).</li>
					<li>The <b>conditional probability</b> of \(A\) given \(B\) is written \(P(A|B)\). A conditional reduces the sample space. We calculate the probability of A from the reduced sample space B. The formula to calculate \(P(A|B)\) is \(P(A|B)\) = \(\frac{"{P(A \\text{ AND } B)}{P(B)}"}\) where \(P(B)\) is greater than zero.</li>
				</SubList></li>
				<li>Sampling may be done with <b>replacement</b> or <b>without replacement</b>:<SubList>
					<li><b>With replacement:</b> If each member of a population is replaced after it is picked, then that member has the possibility of being chosen more than once.</li>
					<li><b>Without replacement:</b> When sampling is done without replacement, each member of a population may be chosen only once. In this case, the probabilities for the second pick are affected by the result of the first pick.</li>
				</SubList></li>
				<li>Independent Events:<SubList>
					<li>Two events are independent if the following are true:<SubList opened>
						<li>\(P(A|B) = P(A)\)</li>
						<li>\(P(B|A) = P(B)\)</li>
						<li>\(P(A \text{"{ AND }"} B) = P(A)P(B)\)</li>
					</SubList></li>
					<li>If it is not known whether \(A\) and \(B\) are independent or dependent, assume they are dependent until you can show otherwise.</li>
				</SubList></li>
				<li>Mutually Exclusive Events:<SubList>
					<li>A and B are <b>mutually exclusive</b> events if they cannot occur at the same time.</li>
					<li>If it is not known whether A and B are mutually exclusive, assume they are not until you can show otherwise.</li>
				</SubList></li>
				<li>Two Basic Rules of Probability:<SubList>
					<li>If A and B are two events defined on a sample space, then: \(P(A \text{"{ AND }"} B) = P(B)P(A|B)\).</li>
					<li>If A and B are defined on a sample space, then: \(P(A \text{"{ OR }"} B) = P(A) + P(B) - P(A AND B)\).</li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<ul data-source={41}>
				<li>Three types of probability:<SubList>
					<li><b>Classical Approach to Probability</b> (Theoretical Probability):</li>
					<MathStuff>$${"P(A) = \\frac{\\text{Number of ways A can occur}}{\\text{Number of different outcomes in S}}"}$$</MathStuff>
					<li><b>Empirical Probability</b> (Experimental or Relative Frequency Probability):</li>
					<MathStuff>$${"P(A) = \\frac{\\text{Number of times A occurred}}{\\text{Number of times the experiment was repeated}}"}$$</MathStuff>
					<li><b>Subjective Probability:</b> The probability of event A is estimated using previous knowledge and is someone's opinion.</li>
				</SubList></li>
				<li>Counting Rules:<SubList>
					<li><b>Fundamental Counting Rule:</b> If task 1 can be done \(m1\) ways, task 2 can be done \(m2\) ways, and so forth to task \(n\) being done mn ways. Then the number of ways to do task \(1, 2, \ldots, n\) together would be to multiply the number of ways for each task \(m_1*m_2* \cdots * m_n\).</li>
					<li><b>Factorial Rule:</b> The number of different ways to arrange \(n\) objects is \(n!\), where repetitions are not allowed.</li>
					<MathStuff>$${"n! = n*(n - 1)*(n - 2) \\cdots 3*2*1"}$$</MathStuff>
					<li>Zero factorial is defined to be \(0! = 1\).</li>
					<li><b>Permutation Rule:</b> The number of different ways of picking \(r\) objects from \(n\) total objects when repeats are not allowed and order matters:</li>
					<MathStuff>$${"nPr = \\frac{n!}{(n-r)!}"}$$</MathStuff>
					<li><b>Combination Rule:</b> The number of ways to select \(r\) objects from \(n\) total objects when repeats are not allowed and order does not matter:</li>
					<MathStuff>$${"nCr = \\frac{n!}{(r!(n-r)!)}"}$$</MathStuff>
				</SubList></li>
			</ul>
			<ul>
				<li><b>Contingency Tables:</b><SubList>
					<li>A <b>contingency table</b> provides a way of portraying data that can facilitate calculating probabilities.</li>
					<li>Suppose a study of speeding violations and drivers who use cell phones produced the following fictional data:</li>
					<TableLI>
						<thead><tr><th></th><th>Speeding violation in the last year</th><th>No speeding violation in the last year</th><th>Total</th></tr></thead>
						<tbody>
							<tr><th>Uses cell phone while driving</th><td>25</td><td>280</td><td>305</td></tr>
							<tr><th>Does not use cell phone while driving</th><td>45</td><td>405</td><td>450</td></tr>
							<tr><th>Total</th><td>70</td><td>685</td><td>755</td></tr>
						</tbody>
					</TableLI>
					<li>\(P\)(Driver is a cell phone user) \(=\frac{"{305}{755}"}\)</li>
					<li>\(P\)(Driver is a cell phone user OR driver had no violation in the last year) \(=\frac{"{25 + 280 + 405}{755}"} = \frac{"{710}{755}"}\)</li>
					<li>\(P\)(Driver had no violation last year GIVEN driver was not a cell phone user) \(= \frac{"{405}{450}"}\)</li>
				</SubList></li>
				<li>Tree Diagrams:<SubList>
					<li>A <b>tree diagram</b> is a special type of graph used to determine the outcomes of an experiment.</li>
					<li>In an urn, there are 11 balls. Three balls are red (R) and eight balls are blue (B). Draw two balls, one at a time, with replacement. The tree diagram using frequencies that show all the possible outcomes follows.</li>
					<li><ImgComp src={require("./probability_and_statistics_pics/4.png")} width="60%"/></li>
					<li>There are a total of 11 balls in the urn. If you draw two balls, one at a time, with replacement, then there will be \(11(11) = 121\) outcomes, the size of the sample space. Also, form the tree: \(64 + 24 + 24 + 9 = 121\).</li>
				</SubList></li>
				<li>Venn Diagram:<SubList>
					<li>A <b>Venn diagram</b> is a picture that represents the outcomes of an experiment. It generally consists of a box that represents the sample space S together with circles or ovals.</li>
					<li>Suppose an experiment has the outcomes 1, 2, 3, ... , 12 where each outcome has an equal chance of occurring. Let event \(A = {"{1, 2, 3, 4, 5, 6}"}\), event \(B = {"{6, 7, 8, 9}"}\) and \({"A \\text{ AND } B = {6}"}\). The Venn diagram is as follows:</li>
					<li><ImgComp src={require("./probability_and_statistics_pics/5.png")} width="60%"/></li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="random_variables">Random Variables</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul data-source={41}>
				<li>Random variables:<SubList>
					<li>A <b>random variable</b> (usually X) is a numeric description of an event. The possible outcomes of \(X\) are labeled with a corresponding lower-case letter \(x\) and subscripts like \(x_1\), \(x_2\), etc.</li>
					<li>For instance, if we roll two 6-sided dice the sample space is \({"S = {(1,1), (1,2), \\ldots, (6,6)}"}\) and the event \(E\) the sum of the two rolls is five, then \({"E = {(1,4), (2,3), (3,2), (4,1)}"}\). Now, we could define the random variable \(X\) to denote the sum of the two rolls, then \({"X = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}"}\) and event \(E\) corresponds to \(x = 5\).</li>
				</SubList></li>
				<li>Discrete Probability Distributions:<SubList>
					<li> A <b>probability distribution</b> is an assignment of probabilities to all the possible values of the random variable.</li>
					<li>A <b>discrete probability distribution function</b> has two characteristics:<SubList opened>
						<li>Each probability is between zero and one, inclusive.</li>
						<li>The sum of the probabilities is one.</li>
					</SubList></li>
					<li>The mean, \(μ\), of a discrete probability function is also referred to as the expected value (denoted \(E[X]\)):</li>
					<MathStuff>{`$$μ=\\sum (x \\cdot P(x))$$`}</MathStuff>
					<li>The standard deviation, \(σ\), of the PDF is the square root of the variance:</li>
					<MathStuff>{`$$σ=\\sqrt{\\sum [(x-μ)^2 \\cdot P(x)]}$$`}</MathStuff>
				</SubList></li>
			</ul>
			<ul>
				<li><b>Binomial Distribution:</b><SubList>
					<li>There are three characteristics of a binomial experiment:<SubList>
						<li>There are a fixed number of trials (denoted by \(n\)).</li>
						<li>There are only two possible outcomes, called "success" and "failure," for each trial. The letter \(p\) denotes the probability of a success on one trial, and \(q\) denotes the probability of a failure on one trial. \(p + q = 1\).</li>
						<li>The \(n\) trials are independent and are repeated using identical conditions. For each individual trial, the probability, \(p\), of a success and probability, \(q\), of a failure remain the same.</li>
					</SubList></li>
					<li>The outcomes of a binomial experiment fit a <b>binomial probability distribution</b>.</li>
					<li data-source={41}>The binomial distribution is \({"P(X = x) = {}_n \\mathrm{ C }_x·p^x·q^{(n-x)}"}\).</li>
					<li>The random variable \(X\) = the number of successes obtained in the \(n\) independent trials.</li>
					<li>Any experiment that has characteristics two and three and where \(n = 1\) is called a <b>Bernoulli Trial</b>.</li>
					<li>The mean, \(μ\), and variance, \(σ^2\), for the binomial probability distribution are \(μ = np\) and \(σ^2 = npq\). The standard deviation, \(σ\), is then \(σ = \sqrt{"{npq}"}\).</li>
					<li>\(X \sim B(n, p)\): Read this as "\(X\) is a random variable with a binomial distribution".</li>
				</SubList></li>
				<li><b>Geometric Distribution:</b><SubList>
					<li>There are four main characteristics of a geometric experiment:<SubList>
						<li>A trial is repeated until a success occurs.</li>
						<li>The repeated trials are independent of each other.</li>
						<li>The probability, \(p\), of a success and the probability, \(q\), of a failure is the same for each trial.</li>
						<li>The random variable \(X\) represents the number of the trial in which the first success occurs.</li>
					</SubList></li>
					<li>\(X \sim G(p)\): Read this as "\(X\) is a random variable with a geometric distribution".</li>
					<li>The probability that the \(x\)th trial (out of \(x\) trials) is the first success is: \(P(X=x)=(1-p)^{"{x-1}"}p\)</li>
					<li>The expected value of \(X\) is  \(μ=\frac{"{1}{p}"}\).</li>
					<li>The formula for the variance is:</li>
					<MathStuff>$${"σ^2=\\left( \\frac{1}{p} \\right) \\left( \\frac{1}{p}-1 \\right)"}$$</MathStuff>
				</SubList></li>
				<li><b>Hypergeometric Distribution:</b><SubList>
					<li>You take samples without replacement from two groups, and you are interested in one group, called the <b>first group</b>.</li>
					<li>The outcomes of a hypergeometric experiment fit a <b>hypergeometric probability distribution</b>. The random variable \(X\) = the number of items from the group of interest.</li>
					<li>\(X \sim H(r, b, n)\): Read this as "X is a random variable with a hypergeometric distribution."</li>
					<TableLI>
						<tbody>
							<tr><td>\(X\) = the number of items from the group of interest</td></tr>
							<tr><td>\(r\) = the size of the group of interest (first group)</td></tr>
							<tr><td>\(b\) = the size of the second group</td></tr>
							<tr><td>\(n\) = the size of the chosen sample</td></tr>
						</tbody>
					</TableLI>
					<li data-source={41}>The hypergeometric distribution is:</li>
					<MathStuff data-source={41}>$${"\\frac{{{}_a \\mathrm{ C }_x} \\cdot {{}_b \\mathrm{ C }_{n-x}}}{{{}_N \\mathrm{ C }_n}}"}$$</MathStuff>
				</SubList></li>
				<li><b>Poisson Distribution:</b><SubList>
					<li>The <b>Poisson probability distribution</b> gives the probability of a number of events occurring in a fixed interval of time or space if these events happen with a known average rate and independently of the time since the last event.</li>
					<li>\(X \sim P(μ)\): Read this as "X is a random variable with a Poisson distribution." The parameter \(μ\) (or \(λ\)) is the mean for the interval of interest. The random variable \(X\) = the number of occurrences in the interval of interest.</li>
					<li>The formula for the Poisson distribution:</li>
					<MathStuff>$${"P(X = x) = \\frac{e^{−𝜇}𝜇^x}{x!}"}$$</MathStuff>
					<li>The \(\mu \) is the mean and variance.</li>
				</SubList></li>
			</ul>
		</div>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li>The graph of a <b>continuous probability distribution</b> is a curve. Probability is represented by area under the curve. The curve is called the <b>probability density function</b> (abbreviated as pdf).</li>
			<li><b>Uniform Distribution:</b><SubList>
				<li>The <b>uniform distribution</b> is a continuous probability distribution and is concerned with events that are equally likely to occur.</li>
				<li>When working out problems that have a uniform distribution, be careful to note if the data is inclusive or exclusive of endpoints.</li>
				<li>The notation for the uniform distribution is where \(X \sim U(a, b)\) where \(a\) = the lowest value of x and \(b\) = the highest value. The probability density function is \(\frac{"{1}{b-a}"}\) for \({"a ≤ x ≤ b"}\).</li>
				<li>Formulas for the theoretical mean and standard deviation are:</li>
				<MathStuff>$${"μ=\\frac{a+b}{2}, σ=\\sqrt{ \\frac{(b-a)^2}{12} }"}$$</MathStuff>
				<li>Example:<SubList>
					<li>The amount of time, in minutes, that a person must wait for a bus is uniformly distributed between zero and 15 minutes, inclusive.</li>
					<MathStuff>$${"\\begin{align} P(x<12.5)=(base)(height) &= (12.5-0)(115) \\\\ &=0.8333 \\end{align}"}$$</MathStuff>
					<ImgComp src={require("./probability_and_statistics_pics/11.png")} width="80%"/>
					<li>The mean here is \(7.5\) and standard deviation \(4.3\).</li>
				</SubList></li>
			</SubList></li>
			<li><b>Exponential distribution:</b><SubList>
				<li>The <b>exponential distribution</b> is often concerned with the amount of time until some specific event occurs.</li>
				<li><b>Memoryless property:</b><SubList>
					<li>Let \(X\) = amount of time (in minutes) a postal clerk spends with their customer, with the average amount of time equal to 4 minutes.</li>
					<li>Suppose that five minutes have elapsed since the last customer arrived. Since an unusually long amount of time has now elapsed, it would seem to be more likely for a customer to arrive within the next minute.</li>
					<li>With the exponential distribution, this is not the case - the additional time spent waiting for the next customer does not depend on how much time has already elapsed since the last customer. This is referred to as the <b>memoryless property</b>.</li>
					<MathStuff>$${"P(X > r + t | X > r) = P(X > t)"}$$</MathStuff>
				</SubList></li>
				<li>The distribution notation is \(X \sim Exp(m)\), where \(m = (\mu)^{"{-1}"}\) is the <b>decay parameter</b>. The probability density function is:</li>
				<MathStuff>$${"f(x) = me^{-mx}"}$$</MathStuff>
				<li><a href='https://youtu.be/N8O6zd6vTZ8?t=9m46s'>If \(X\) is a positive continuous random variable with a memoryless property, then \(X \sim Exp(m)\) for some \(m\).</a></li>
				<li>The standard deviation, \(σ\), is the same as the mean.</li>
			</SubList></li>
			<li><b>Normal Distribution:</b><SubList>
				<li>In \(X \sim N(μ, σ)\), \(μ\) is the mean and \(σ\) is the standard deviation.</li>
				<li>The probability density function is a rather complicated mathematical function:</li>
				<MathStuff>$${"f(x) = \\frac{1}{σ\\sqrt{2π}} e^{-\\frac{1}{2}(\\frac{x-μ}{σ})^2}"}$$</MathStuff>
			</SubList></li>
			<li><b>Central limit theorem:</b><SubList>
				<li>There are two alternative forms of the theorem:<SubList opened>
					<li>If we collect samples of size \(n\) with a "large enough n," calculate each sample's mean, and create a histogram of those means, then the resulting histogram will tend to have an approximate normal bell shape.</li>
					<li>If we again collect samples of size n that are "large enough," calculate the sum of each sample and create a histogram, then the resulting histogram will again tend to have a normal bell-shape.</li>
				</SubList></li>
				<li>Sampling is done with replacement.</li>
				<li>Suppose \(X\) is a random variable with a distribution that may be known or unknown (it can be any distribution). Let \(μ_X\) be the mean of \(X\) and let \(σ_X\) be the standard deviation of \(X\). If you draw random samples of size \(n\), then as \(n\) increases, the random variable \(\overline x\) which consists of sample means, tends to be normally distributed, like this:</li>
				<MathStuff>$${"\\overline{x} \\sim N \\left( μ_X, \\frac{σ_X}{\\sqrt{n}} \\right)"}$$</MathStuff>
			</SubList></li>
		</ul>
	</div>

	<h2 id="confidence_intervals_and_hypothesis_testing">Confidence Intervals And Hypothesis Testing</h2>
	<div className="content">
		<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li><u>Basic definitions:</u><SubList>
				<li>A <b>confidence interval</b> is an interval of numbers which provides a range of reasonable values in which we expect the population parameter to fall.</li>
				<li>The <b>Empirical Rule</b>, which applies to bell-shaped distributions, says that in approximately 95% of the samples, the sample mean, \(\overline x\), will be within two standard deviations of the population mean \(μ\).</li>
				<li>A <b>hypothesis test</b> involves collecting data from a sample and evaluating the data. Then, the statistician makes a decision as to whether or not there is sufficient evidence, based upon analyses of the data, to reject the null hypothesis.</li>
			</SubList></li>
			<li>Null and Alternative Hypotheses:<SubList>
				<li>A hypothesis test begins by considering two hypotheses. They are called the null hypothesis and the alternative hypothesis. These hypotheses contain opposing viewpoints.</li>
				<li><b>\(H_0\) (The null hypothesis):</b> It is a statement of no difference between the variables - they are not related. This can often be considered the status quo and as a result if you cannot accept the null it requires some action.</li>
				<li><b>\(H_a\) (The alternative hypothesis):</b> It is a claim about the population that is contradictory to \(H_0\) and what we conclude when we reject \(H_0\). This is usually what the researcher is trying to prove.</li>
				<li>When you perform a hypothesis test, there are four possible outcomes depending on the actual truth (or falseness) of the null hypothesis \(H_0\) and the decision to reject or not. The outcomes are summarized in the following table:</li>
				<TableLI>
					<thead><tr><th></th><th>\(H_0\) is actually true</th><th>\(H_a\) is actually false</th></tr></thead>
					<tbody>
						<tr><th>Do not reject \(H_0\)</th><td>Correct Outcome</td><td>Type II Error</td></tr>
						<tr><th>Reject \(H_0\)</th><td>Type I Error</td><td>Correct Outcome</td></tr>
					</tbody>
				</TableLI>
				<li>The <b>Power of the Test</b> is \(1 - P(Type II error)\), and also the probability of rejecting \(H_0\) when \(H_0\) is false.</li>
			</SubList></li>
		</ul>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li></li>
		</ul>
	</div>

	<h2 id="Linear_regression_and_correlation">Linear Regression and Correlation</h2>
	<div className="content">
		<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>Linear Equations:<SubList>
				<li>A <b>linear equation</b> with one independent variable has the form:</li>
				<MathStuff>$${"y=a+bx"}$$</MathStuff>
				<li>The variable \(x\) is the independent variable and \(y\) is the dependent variable.</li>
				<li>\(a\) and \(b\) are constants, where \(a\) is the y-intercept, and \(b\) is the gradient.</li>
				<li><figure>
					<ImgComp src={require("./probability_and_statistics_pics/6.png")} width="100%"/>
					<figcaption>Three possible graphs of \(y = a + bx\). (a) If \(b \gt 0\), the line slopes upward to the right. (b) If \(b = 0\), the line is horizontal. (c) If \(b \lt 0\), the line slopes downward to the right.</figcaption>
				</figure></li>
			</SubList></li>
			<li>Scatter plot:<SubList>
				<li>We need to examine a way to display the relation between two variables \(x\) and \(y\). The most common and easiest way is a <b>scatter plot</b>.</li>
				<li>A scatter plot shows the direction of a relationship between the variables. A clear direction happens when there is either:<SubList opened>
					<li>High values of one variable occurring with high values of the other variable or low values of one variable occurring with low values of the other variable.</li>
					<li>High values of one variable occurring with low values of the other variable.</li>
				</SubList></li>
				<li>You can determine the <i>strength</i> of the relationship by looking at the scatter plot and seeing how close the points are to a line, a power function, an exponential function, or to some other type of function.</li>
				<li>Linear patterns are quite common. The linear relationship is strong if the points are close to a straight line, except in the case of a horizontal line where there is no relationship.</li>
			</SubList></li>
			<li>Linear regression:<SubList>
				<li><ImgComp src={require("./probability_and_statistics_pics/7.png")} width="70%"/></li>
				<li>Each point of data is of the the form \((x, y)\) and each point of the line of best fit has the form \((x, ŷ)\).</li>
				<li>The \(ŷ\) is read "y hat" and is the estimated value of \(y\). It is the value of \(y\) obtained using the regression line. It is not generally equal to \(y\) from data.</li>
				<li>The term \(y_0 - ŷ_0 = ε_0\) is called the "error" or <b>residual</b>. It is not an error in the sense of a mistake. If you square each \(ε\) and add, you get</li>
				<MathStuff>$${"(ε_1)^2+(ε_2)^2+ \\ldots +(ε_n)^2 = \\sum_{i=1}^n ε^2"}$$</MathStuff>
				<li>This is called the <b>Sum of Squared Errors (SSE)</b>. Using calculus, you can determine the values of \(a\) and \(b\) that make the SSE a minimum. It turns out that for the line of best fit:</li>
				<MathStuff>$${"b = \\frac{\\sum(x- \\overline x)(y- \\overline y)}{\\sum(x- \\overline x)^2}"}$$</MathStuff>
				<li>The process of fitting the best-fit line is called <b>linear regression</b>.</li>
			</SubList></li>
			<li>The <b>Correlation Coefficient</b>:<SubList>
				<li>The correlation coefficient, \(r\), is numerical and provides a measure of strength and direction of the linear association between the independent variable \(x\) and the dependent variable \(y\).</li>
				<MathStuff>$${"r = \\frac{n\\sum(xy) - (\\sum x)(\\sum y)}{\\sqrt{[n \\sum x^2- (\\sum x)^2][n \\sum y^2- (\\sum y)^2]}}"}$$</MathStuff>
				<li>The value of \(r\) is always between -1 and +1.</li>
				<li>If \(r = 1\), there is perfect positive correlation, if \(r = -1\), there is perfect negative correlation and if \(r = 0\) there is likely no linear correlation.</li>
				<li>The variable \(r^2\) is called the coefficient of determination and is the square of the correlation coefficient, but is usually stated as a percent.</li>
			</SubList></li>
		</ul>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li>Identifying Outliers:<SubList>
				<li>As a rough rule of thumb, we can flag any point that is located further than two standard deviations above or below the best-fit line as an outlier.</li>
				<li>The standard deviation of the residuals is calculated from the SSE as:</li>
				<MathStuff>$${"s=\\sqrt{\\frac{SSE}{n-2}}"}$$</MathStuff>
			</SubList></li>
		</ul>
	</div>

	<h2 id="ANOVA">Analysis of Variance</h2>
	<div className="content">
		<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>For hypothesis tests comparing averages between more than two groups, statisticians have developed a method called <b>Analysis of Variance</b> (abbreviated <b>ANOVA</b>).</li>
			<li>One-Way ANOVA:<SubList>
				<li>The purpose of a <b>one-way ANOVA</b> test is to determine the existence of a statistically significant difference among several group means. The test actually uses variances to help determine if the means are equal or not.</li>
				<li>In order to perform a one-way ANOVA test, there are five basic assumptions to be fulfilled:<SubList opened>
					<li>Each population from which a sample is taken is assumed to be normal.</li>
					<li>All samples are randomly selected and independent.</li>
					<li>The populations are assumed to have equal standard deviations (or variances).</li>
					<li>The factor is a categorical variable.</li>
					<li>The response is a numerical variable.</li>
				</SubList></li>
			</SubList></li>
		</ul>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
		</ul>
	</div>
</>;

