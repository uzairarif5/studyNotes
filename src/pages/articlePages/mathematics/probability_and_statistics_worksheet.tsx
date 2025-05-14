import { getFullWidthBlankLI, GraphBox } from "../../Worksheet";

export const titles = ["Sampling and Data", "Descriptive Statistics", "Probability"]

export const content = [
	<>
		<h2>Determine the key terms</h2>
		<p className="question">We want to know the average (mean) amount of money first year college students spend at ABC College on school supplies that do not include books. We randomly surveyed 100 first year students at the college. Three of those students spent $150, $200, and $225, respectively.</p>
		{getFullWidthBlankLI([
			"Population: ",
			"Sample: ",
			"Parameter: ",
			"Statistic: ",
			"Variable: ",
			"Data: "
		],[
			"All first year students attending ABC College this term.",
			"All students enrolled in one section of a beginning statistics course at ABC College (although this sample may not represent the entire population).",
			"The average (mean) amount of money spent (excluding books) by first year college students at ABC College this term.",
			"The average (mean) amount of money spent (excluding books) by first year college students in the sample.",
			"The variable could be the amount of money spent (excluding books) by one first year student. Let X = the amount of money spent (excluding books) by one first year student attending ABC College.",
			"The dollar amounts spent by the first year students. Examples of the data are $150, $200, and $225."
		])}
		<p className="question">An insurance company would like to determine the proportion of all medical doctors who have been involved in one or more malpractice lawsuits. The company selects 500 doctors at random from a professional directory and determines the number in the sample who have been involved in a malpractice lawsuit.</p>
		{getFullWidthBlankLI([
			"Population: ",
			"Parameter: ",
			"Sample: ",
			"Statistic: ",
			"Variable: ",
			"Data: "
		],[
			"All medical doctors listed in the professional directory.",
			"The proportion of medical doctors who have been involved in one or more malpractice suits in the population.",
			"The 500 doctors selected at random from the professional directory.",
			"The proportion of medical doctors who have been involved in one or more malpractice suits in the sample.",
			"The variable X = the number of medical doctors who have been involved in one or more malpractice suits.",
			"Either: yes (was involved in one or more malpractice lawsuits) or no."
		])}
		<p className="question">Determine the correct data type (quantitative or qualitative). Indicate whether quantitative data are continuous or discrete:</p>
		<ol type="a">
			<li>the number of pairs of shoes you own</li>
			<li>the type of car you drive</li>
			<li>the distance it is from your home to the nearest grocery store</li>
			<li>the number of classes you take per school year</li>
			<li>the type of calculator you use</li>
			<li>weights of sumo wrestlers</li>
			<li>number of correct answers on a quiz</li>
			<li>IQ scores</li>
		</ol>
		<p className="boxAnswer">Items a, d, and g are quantitative discrete.<br/>Items c, f, and h are quantitative continuous.<br/>Items b and e are qualitative, or categorical.</p>
		<p className="question">A study is done to determine the average tuition that San Jose State undergraduate students pay per semester. Each student in the following samples is asked how much tuition he or she paid for the Fall semester. What is the type of sampling in each case?</p>
		<ol type="a">
			<li>A sample of 100 undergraduate San Jose State students is taken by organizing the student's names by classification (freshman, sophomore, junior, or senior), and then selecting 25 students from each.</li>
			<li>A random number generator is used to select a student from the alphabetical listing of all undergraduate students in the Fall semester. Starting with that student, every 50th student is chosen until 75 students are included in the sample.</li>
			<li>A completely random method is used to select 75 students. Each undergraduate student in the fall semester has the same probability of being chosen at any stage of the sampling process.</li>
			<li>The freshman, sophomore, junior, and senior years are numbered one, two, three, and four, respectively.</li>
			<li>An administrative assistant is asked to stand in front of the library one Wednesday and to ask the first 100 undergraduate.</li>
		</ol>
		<p className="boxAnswer">a. stratified; b. systematic; c. simple random; d. cluster; e. convenience</p>

		<h2>Answer The Questions</h2>
		<p className="question">The Smell & Taste Treatment and Research Foundation conducted a study to investigate whether smell can affect learning. Subjects completed mazes multiple times while wearing masks.<br/>They completed the pencil and paper mazes three times wearing floral-scented masks, and three times with unscented masks.<br/>Participants were assigned at random to wear the floral mask during the first three trials or during the last three trials. For each trial, researchers recorded the time it took to complete the maze and the subject's impression of the mask's scent: positive, negative, or neutral.</p>
		<ol type="a">
			<li>Describe the explanatory and response variables in this study.</li>
			<li>What are the treatments?</li>
			<li>Identify any lurking variables that could interfere with this study.</li>
			<li>Is it possible to use blinding in this study?</li>
		</ol>
		<p className="boxAnswer">
		The explanatory variable is scent, and the response variable is the time it takes to complete the maze.<br/>
		There are two treatments: a floral-scented mask and an unscented mask.<br/>
		All subjects experienced both treatments. The order of treatments was randomly assigned so there were no differences between the treatment groups. Random assignment eliminates the problem of lurking variables.<br/>
		Subjects will clearly know whether they can smell flowers or not, so subjects cannot be blinded in this study. Researchers timing the mazes can be blinded, though.
		</p>
	</>,
	<>
		<h2>Stem And Leaf</h2>
		<p className="question">Create a stemplot using the data: 1.1; 1.5; 2.3; 2.5; 2.7; 3.2; 3.3; 3.3; 3.5; 3.8; 4.0; 4.2; 4.5; 4.5; 4.7; 4.8; 5.5; 5.6; 6.5; 6.7; 10.3. Note that the leaves are to the right of the decimals.</p>
		<table ans-col="2" style={{width:"30%"}}>
			<tbody>
				<tr><th>1</th><td>1 5</td></tr>
				<tr><th>2</th><td>3 5 7</td></tr>
				<tr><th>3</th><td>2 3 3 5 8</td></tr>
				<tr><th>4</th><td>0 2 5 5 7 8</td></tr>
				<tr><th>5</th><td>5 6</td></tr>
				<tr><th>6</th><td>5 7</td></tr>
				<tr><th>7</th><td></td></tr>
				<tr><th>8</th><td></td></tr>
				<tr><th>9</th><td></td></tr>
				<tr><th>10</th><td>3</td></tr>
			</tbody>
		</table>
		<p className="question">Are there any possible outliers? <span className="fillInTheBlank">Yes (12.3)</span></p>
		<h2>Graphs</h2>
		<p className="question">40 parents were asked how many times per week a teenager must be reminded to do their chores. Plot a line graph using the table below.</p>
		<table>
			<thead><tr><th>Number of times teenager is reminded</th><th>Frequency</th></tr></thead>
			<tbody>
				<tr><td>0</td><td>2</td></tr>
				<tr><td>1</td><td>5</td></tr>
				<tr><td>2</td><td>8</td></tr>
				<tr><td>3</td><td>14</td></tr>
				<tr><td>4</td><td>7</td></tr>
				<tr><td>5</td><td>4</td></tr>
			</tbody>
		</table>
		<GraphBox src={"/worksheetPics/probability_and_statistics_worksheet_pics/1.png"}/>
		<p className="question">The percentage of U.S.-based TikTok users by age is shown below. Construct a bar graph using this data.</p>
		<table>
			<thead><tr><th>Age groups</th><th>Proportion (%) of users</th></tr></thead>
			<tbody>
			<tr><td>10-19</td><td>32.5%</td></tr>
			<tr><td>20-29</td><td>29.5%</td></tr>
			<tr><td>30-39</td><td>16.4%</td></tr>
			<tr><td>40-49</td><td>13.9%</td></tr>
			<tr><td>50+</td><td>7.1%</td></tr>
			</tbody>
		</table>
		<GraphBox src={"./worksheetPics/probability_and_statistics_worksheet_pics/2.png"}/>
		<p className="question">Using the data set below, construct a histogram with 5 intervals. Use 0 as the starting point and 25 as the ending point.</p>
		<table style={{width:"70%"}}>
			<caption>Number of Hours Spent Playing Video Games on Weekends</caption>
			<tbody>
				<tr>
				<td>9.95</td>
				<td>10</td>
				<td>2.25</td>
				<td>16.75</td>
				<td>0</td>
				</tr>
				<tr>
				<td>19.5</td>
				<td>22.5</td>
				<td>7.5</td>
				<td>15</td>
				<td>12.75</td>
				</tr>
				<tr>
				<td>5.5</td>
				<td>11</td>
				<td>10</td>
				<td>20.75</td>
				<td>17.5</td>
				</tr>
				<tr>
				<td>23</td>
				<td>21.9</td>
				<td>24</td>
				<td>23.75</td>
				<td>18</td>
				</tr>
				<tr>
				<td>20</td>
				<td>15</td>
				<td>22.9</td>
				<td>18.8</td>
				<td>20.5</td>
				</tr>
				</tbody>
		</table>
		<GraphBox src={"./worksheetPics/probability_and_statistics_worksheet_pics/3.png"}/>
		<p className="question">Construct a frequency polygon from the frequency distribution for the 50 highest ranked countries for depth of hunger.</p>
		<table>
			<thead><tr><th>Depth of Hunger</th><th>Frequency</th></tr></thead>
			<tbody>
				<tr><td>230-259</td><td>21</td></tr>
				<tr><td>260-289</td><td>13</td></tr>
				<tr><td>290-319</td><td>5</td></tr>
				<tr><td>320-349</td><td>7</td></tr>
				<tr><td>350-379</td><td>1</td></tr>
				<tr><td>380-409</td><td>1</td></tr>
				<tr><td>410-439</td><td>1</td></tr>
			</tbody>
		</table>
		<GraphBox src={"./worksheetPics/probability_and_statistics_worksheet_pics/5.png"} style={{height:"200px"}}/>
		<p className="question">Test scores for a college statistics class are: 98; 78; 68; 83; 81; 89; 88; 76; 65; 45; 98; 90; 80; 84.5; 85; 79; 78; 98; 90; 79; 81; 25.5. Create a box plot.</p>
		<p className="boxAnswer">
			Min = 32, Q<sub>1</sub> = 56, M = 74.5, Q<sub>3</sub> = 82.5, Max = 99
			<img src={"./worksheetPics/probability_and_statistics_worksheet_pics/4.png"} alt="" style={{height:"80px"}}/>
		</p>
		<h2>Calculations</h2>
		<p className="question">Calculate the relative frequency:</p>
		<table ans-col={3}>
			<thead><tr><th>Amount($)</th><th>Frequency</th><th>Relative Frequency</th></tr></thead>
			<tbody>
				<tr><td>51-100</td><td>5</td><td>0.08</td></tr>
				<tr><td>101-150</td><td>10</td><td>0.17</td></tr>
				<tr><td>151-200</td><td>15</td><td>0.25</td></tr>
				<tr><td>201-250</td><td>15</td><td>0.25</td></tr>
				<tr><td>251-300</td><td>10</td><td>0.17</td></tr>
				<tr><td>301-350</td><td>5</td><td>0.08</td></tr>
			</tbody>
		</table>
		<p className="question">Test scores for a college statistics class are: 98; 78; 68; 83; 81; 89; 88; 76; 65; 45; 98; 90; 80; 84.5; 85; 79; 78; 98; 90; 79; 81; 25.5. Find the interquartile range and any outliers.</p>
		<p className="boxAnswer">
			Minimum: 32, Q<sub>1</sub>: 78, Q<sub>3</sub>: 89, Maximum: 99<br/>
			Q<sub>3</sub> - Q<sub>1</sub> = 89 - 78 = 11<br/>
			Q1 - IQR (1.5) = 78 - 11(1.5) = 61.5<br/>
			Q3 + IQR(1.5) = 89 + 11(1.5) = 105.5<br/>
			45 and 25.5 are outliers, but there is no upper end outlier.
		</p>
		<p className="question">Listed are 29 ages for best actors in order from smallest to largest: 18; 21; 22; 25; 26; 27; 29; 30; 31; 33; 36; 37; 41; 42; 47; 52; 55; 57; 58; 62; 64; 67; 69; 71; 72; 73; 74; 76; 77. Calculate the following percentiles:</p>
		<ul>
			<li>40th percentile: <span className="fillInTheBlank">37&nbsp;</span></li>
			<li>78th percentile: <span className="fillInTheBlank">70&nbsp;</span></li>
		</ul>
		<p className="question">Jesse was ranked 37th in his graduating class of 180 students. At what percentile is Jesse's ranking?</p>
		<p className="boxAnswer">
		There are 180 - 37 = 143 students ranked below Jesse. There is one rank of 37.<br/>
		x = 143 and y = 1<br/>
		\({"\\frac{x+0.5y}{n}(100)"}\) = \({"\\frac{143+0.5(1)}{180}(100)"}\) = 79.72<br/>
		Jesse's rank of 37 puts him at the 80th percentile.
		</p>
		<p  className="question">This table gives the percent of children under five considered to be underweight. What is the best estimate for the mean percentage of underweight children? <span className="fillInTheBlank">26.75</span></p>
		<table>
			<thead><tr><th>Percent of Underweight Children</th><th>Number of Countries</th></tr></thead>
			<tbody>
				<tr><td>16-21.45</td><td>23</td></tr>
				<tr><td>21.45-26.9</td><td>4</td></tr>
				<tr><td>26.9-32.35</td><td>9</td></tr>
				<tr><td>32.35-37.8</td><td>7</td></tr>
				<tr><td>37.8-43.25</td><td>6</td></tr>
				<tr><td>43.25-48.7</td><td>1</td></tr>
			</tbody>
		</table>
		<p className="question">Here is data sorted from smallest to largest: 3; 4; 8; 8; 10; 11; 12; 13; 14; 15; 15; 16; 16; 17; 17; 18; 21; 22; 22; 24; 24; 25; 26; 26; 27; 27; 29; 29; 31; 32; 33; 33; 34; 34; 35; 37; 40; 44; 44; 47. Calculate the mean and median:</p>
		<ul>
			<li>Mean: <span className="fillInTheBlank">23.6</span></li>
			<li>Median: <span className="fillInTheBlank">24&nbsp;&nbsp;</span></li>
		</ul>
		<p className="question">Calculate the standard deviation of the following data: 29; 37; 38; 40; 58; 67; 68; 69; 76; 86; 87; 95; 96; 96; 99; 106; 112; 127; 145; 150: <span className="fillInTheBlank">34.5</span></p>
	</>,
	<>
		<h2>Basics</h2>
		<p className="question">Write the symbols for the probabilities of the events for parts 1 through 5:</p>
		<ul>
			<li>Let \(W\) be the event that a student is a woman.</li>
			<li>Let \(M\) be the event that a student is a man.</li>
			<li>Let \(S\) be the event that a student has short hair.</li>
			<li>Let \(L\) be the event that a student has long hair.</li>
		</ul>
		<br/>
		<ol>
			<li>The probability that a student does not have long hair: <span className="fillInTheBlank">P(L') or P(S)</span></li>
			<li>The probability that a student is a man or has short hair: <span className="fillInTheBlank">P(M OR S)</span></li>
			<li>The probability that a student is a woman and has long hair: <span className="fillInTheBlank">P(W AND L)</span></li>
			<li>The probability that a student is a man, given that the student has long hair: <span className="fillInTheBlank">P(M|L)&nbsp;</span></li>
			<li>Of all the women students, the probability that a student has short hair: <span className="fillInTheBlank">P(S|W)&nbsp;</span></li>
		</ol>
		<p className="question">You are rolling a fair, six-sided number cube. Let \(E\) = the event that it lands on an even number. Let \(M\) = the event that it lands on a multiple of three.</p>
		{getFullWidthBlankLI(["What does P(E OR M) mean in words?"],["The probability of landing on an even number or a multiple of three."])}
		<p className="question">\(J\) and \(K\) are independent events. \(P(J|K) = 0.3\). Find \(P(J)\): <span className="fillInTheBlank">P(J) = 0.3</span></p>
		<div className="question">
			<p>A local restaurant knows that the probability that a customer will order a pizza is 87% and the probability that a customer will order a salad is 32%. Of the customers who order pizzas, 55% of them also order a salad. Let:</p>
			<ul>
				<li>Z = event that a customer orders a pizza</li>
				<li>S = event that a customer orders a salad</li>
			</ul>
			<p>Suppose that one customer is randomly selected.</p>
			<ol>
			<li>Find P(Z): <span className="fillInTheBlank">0.87</span></li>
			<li>Find P(S|Z): <span className="fillInTheBlank">0.55</span></li>
			<li>Find P(Z AND S): <span className="fillInTheBlank">0.4785</span></li>
			<li>Are P and S independent events?: <span className="fillInTheBlank">No</span></li>
			<li>Find P(Z OR S): <span className="fillInTheBlank">0.7115</span></li>
			<li>Are Z and S mutually exclusive events?: <span className="fillInTheBlank">No</span></li>
			</ol>
		</div>
		<h2>Contingency Tables</h2>
		<p className="question">The table below gives the number of participants in the recent National Health Interview Survey who had been treated for cancer in the previous 12 months. The results are sorted by age, race (Black or White), and sex.</p>
		<table ans-col={5} style={{width:"70%"}}>
			<thead>
				<tr>
				<th scope="col">Race and sex</th>
				<th scope="col">1-14</th>
				<th scope="col">15-24</th>
				<th scope="col">25-64</th>
				<th scope="col">Over 64</th>
				<th scope="col">TOTALS</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td>White, male</td>
				<td>1,165</td>
				<td>2,036</td>
				<td>3,703</td>
				<td>1,491</td>
				<td>8,395</td>
				</tr>
				<tr>
				<td>White, female</td>
				<td>1,076</td>
				<td>2,242</td>
				<td>4,060</td>
				<td>1,751</td>
				<td>9,129</td>
				</tr>
				<tr>
				<td>Black, male</td>
				<td>142</td>
				<td>194</td>
				<td>384</td>
				<td>104</td>
				<td>824</td>
				</tr>
				<tr>
				<td>Black, female</td>
				<td>131</td>
				<td>290</td>
				<td>486</td>
				<td>154</td>
				<td>1,061</td>
				</tr>
				<tr>
				<td>All others</td>
				<td>278</td>
				<td>517</td>
				<td>721</td>
				<td>156</td>
				<td>1672</td>
				</tr>
				<tr>
				<td>TOTALS</td>
				<td>2,792</td>
				<td>5,279</td>
				<td>9,354</td>
				<td>3,656</td>
				<td>21,081</td>
				</tr>
			</tbody>
		</table>
		<ol>
			<li>Fill the "over 65" column.</li>
			<li>Find the probability that a randomly selected individual was a White male: <span className="fillInTheBlank">0.3982</span></li>
			<li>Find the probability that a randomly selected individual was a Black female: <span className="fillInTheBlank">0.0503</span></li>
			<li>Find the probability that a randomly selected individual was Black: <span className="fillInTheBlank">0.0894</span></li>
		</ol>
	</>
]