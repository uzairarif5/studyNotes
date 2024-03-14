import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";
import { drawLine, drawBar, drawHis } from "../../articleRelatedStuff/drawCharts";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Probability And Statistics Notes" ;
export const sourcesColor = {7: null};
export const content = <>
	<h1>Probability And Statistics Notes</h1>
	<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	{getSourcesOL(sourcesColor)}

	<h2>Sampling and Data</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li><u>Definitions:</u><SubList>
					<li>The science of <b>statistics</b> deals with the collection, analysis, interpretation, and presentation of data. We see and use data in our everyday lives.</li>
					<li>Organizing and summarizing data is called <b>descriptive statistics</b>.</li>
					<li><b>Statistical inference</b> uses probability to determine how confident we can be that our conclusions are correct.</li>
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
					<li>A type of sampling that is non-random is convenience sampling. <b>Convenience sampling</b> involves using results that are readily available. For example, a computer software store conducts a marketing study by interviewing potential customers who happen to be in the store browsing through the available software. The results of convenience sampling may be very good in some cases and highly biased (favor certain outcomes) in others.</li>
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
					<li>Does aspirin reduce the risk of heart attacks? Is one brand of fertilizer more effective at growing roses than another? When one variable causes change in another, we call the first variable the <b>explanatory variable</b>. The affected variable is called the <b>response variable</b>.</li>
					<li><b>Experimental design</b> means planning a set of procedures to investigate a relationship between variables.</li>
					<li>In a <b>randomized experiment</b>, the researcher manipulates values of the explanatory variable and measures the resulting changes in the response variable. The different values of the explanatory variable are called <b>treatments</b>.</li>
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

	<h2>Descriptive Statistics</h2>
	<div className="content">
		<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>There are numerical and graphical ways to describe and display your data. This area of statistics is called <b>descriptive statistics</b>.</li>
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
				<li>An <b>outlier</b> is an observation of data that does not fit the rest of the data. It is sometimes called an <b>extreme value</b>. When you graph an outlier, it will appear not to fit the pattern of the graph.</li>
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
			</SubList></li>
			<li>A <b>histrogram</b> is a graphical representation in \(x\)-\(y\) form of the distribution of data in a data set; \(x\) represents the data and \(y\) represents the frequency, or relative frequency. The graph consists of contiguous rectangles:<SubList>
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
			</SubList></li>
			<li><a href="https://www.cuemath.com/questions/what-is-the-difference-between-a-bar-graph-and-a-histogram/">A <b>bar graph</b> is the graphical representation of categorical data using rectangular bars where the length of each bar is proportional to the value they represent.</a></li>
			<li><a href="https://www.cuemath.com/questions/what-is-the-difference-between-a-bar-graph-and-a-histogram/">A <b>histogram</b> is the graphical representation of data where data is grouped into continuous number ranges and each range corresponds to a vertical bar.</a></li>
		</ul>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li><b>Frequency polygons:</b><SubList>
				<li>A frequency polygon constructed from the frequency table below:</li>
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
				<li></li>
				<li></li>
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
				<TableLI><tbody><tr><td>
					For the following 13 real estate prices, calculate the \(IQR\) and determine if any prices are potential outliers:
					<br/>
					389,950; 230,500; 158,000; 479,000; 639,000; 114,950; 5,500,000; 387,000; 659,000; 529,000; 575,000; 488,800; 1,095,000
					<br/>
					<b>Solution:</b>
					<br/>
					Order the data from smallest to largest:
					<br/>
					114,950; 158,000; 230,500; 387,000; 389,950; 479,000; 488,800; 529,000; 575,000; 639,000; 659,000; 1,095,000; 5,500,000
					<br/>
					\(M = 488,800\)
					<br/>
					\(Q1 = \frac{"{230,500 + 387,000}{2}"} = 308,750\)
					<br/>
					\(Q3 = \frac{"{639,000 + 659,000}{2}"} = 649,000\)
					<br/>
					\(IQR = 649,000 - 308,750 = 340,250\)
					<br/>
					\(Q1 - (1.5)(IQR) = 308,750 - 510,375 = -201,625\)
					<br/>
					\(Q3 + (1.5)(IQR) = 649,000 + 510,375 = 1,159,375\)
					<br/>
					Therefore, 5,500,000 is a potential outlier.
				</td></tr></tbody></TableLI>
				<li>A percentile indicates the relative standing of a data value when data are sorted into numerical order from smallest to largest. Percentages of data values are less than or equal to the pth percentile. For example, 15% of data values are less than or equal to the 15th percentile.</li>
			</SubList></li>
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
				<li>Order the data from smallest to largest:</li>
				<MathStuff>
					$$\frac{"{x + 0.5y}{n}"} (100) \text{"{ then round to the nearest integer}"}$$
				</MathStuff>
				<li>\(x\) is the number of data values counting from the bottom of the data list up to but not including the data value for which you want to find the percentile.</li>
				<li>\(y\) is the number of data values equal to the data value for which you want to find the percentile.</li>
				<li> n is the total number of data.</li>
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
				<li></li>
			</SubList></li>
			<li>The Law of Large Numbers and the Mean:<SubList>
				<li>The <b>Law of Large Numbers</b> says that if you take samples of larger and larger size from any population, then the mean \(\bar{"{x}"}\) of the sample is very likely to get closer and closer to the population mean, \(μ\).</li>
				<li>When only grouped data is available, you do not know the individual data values (we only know intervals and interval frequencies); therefore, you cannot compute an exact mean for the data set. What we must do is estimate the actual mean by calculating the mean of a frequency table.</li>
				<li>To calculate the mean from a grouped frequency table, we need to modify the definition of mean \(\left( \frac{"{\\text{data sum}}{\\text{number of data values}}"} \right)\) to fit within the restrictions of a frequency table.</li>
				<li>Since we do not know the individual data values we can instead find the midpoint of each interval and modify the mean definition to be:</li>
				<MathStuff>
					$$ \text{"{Mean of Frequency Table}"}  = \frac{"{\\Sigma fm}{\\Sigma f}"}$$
					$${`\\begin{align}
					f &= \\text{ the frequency of the interval} \\\\
					m &= \\text{ the midpoint of the interval}
					\\end{align}`}$$
				</MathStuff>
			</SubList></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</>;

