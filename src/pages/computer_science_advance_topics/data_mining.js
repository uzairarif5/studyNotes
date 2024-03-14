
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import SubList from "../../articleRelatedStuff/SubList";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

/* 
	Incomplete:
	Complete Data Preprocessing slides (Case Reduction Methods, ChiMerge)
*/

export const title = "Data Mining notes";
export const sourcesColor = {37: null};
export const content = <>
	<h1>Data Mining notes</h1>
	<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	{getSourcesOL(sourcesColor)}

	<h2 id="tane">TANE: Functional Dependency Discovery</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
			<ul>
				<li>The <b>functional dependency</b>, \(X↦Y\), states that, for any two tuples that might appear in table \(R\) that have the same values for their attributes / columns in set \(X\), then they must also have the same values for their attributes / columns in set \(Y\).</li>
				<li>FDs play a vital role in relational schema design:<SubList>
					<li>A <a href="https://www.softcover.io/read/1da5fc08/database_book/03_the_relational_model"><b>relation schema:</b></a></li>
					<li><ImgComp src={require("./data_mining_pics/50.PNG")} style={{width:"95%"}}/></li>
					<li>The <a href="https://www.softcover.io/read/1da5fc08/database_book/03_the_relational_model"><b>relation instance:</b></a></li>
					<li><ImgComp src={require("./data_mining_pics/51.PNG")} style={{width:"95%"}}/></li>
					<li>Let \(R\) be all the columns of a table. An FD of the form \(X↦R\) (where \(X⊆R\)) is a <b>super-key dependency</b>.</li>
					<li>If, for all \(Y⊂X\), \(Y/↦R\), then \(X↦R\) is a <b>key dependency</b>.</li>
				</SubList></li>
				<li><b>Prescribed</b> vs <b>Follows</b>:<SubList>
					<li>We <b>prescribe</b> what FDs - well, keys, usually - apply to our table; then the database system enforces they are never violated by the data in the table.</li>
					<li>But given data - let <b>r</b> be an instance of table <b>R</b>, a set of tuples - we could ask whether an FD statement, say, X &#8614; Y, <b>follows</b> from <b>r</b>.</li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
			<ul>
				<li>Type of FDs:<SubList>
					<li><b>Trivial:</b> Set of attributes on RHS are a subset of attributes on LHS. E.g., Street, City &#8614; City</li>
					<li><b>Non-trivial:</b> At least one attribute on RHS does not appear on LHS.</li>
					<li><b>Completely Non-trivial:</b> LHS & RHS sets of attributes are disjoint.</li>
					<li><b>Minimal FD:</b> RHS does not depend on any proper subset of LHS.</li>
				</SubList></li>
				<li>FD Axiomatization:<SubList>
					<li><ImgComp src={require("./data_mining_pics/52.PNG")} style={{width:"100%"}}/></li>
				</SubList></li>
				<li>Canonical FDs:<SubList>
					<li>From decomposition and union, we can see that finding just the FDs of the form "{"X↦{A}"}" — (with the RHS just a singleton set, one attribute) would suffice.</li>
					<li><b>FD admissible:</b> canonical, minimal, completely non-trivial FDs.</li>
				</SubList></li>
				<li>FD Discovery (TANE Algorithm):<SubList>
					<li>Discovery Strategy:<SubList>
						<li style={{width:"calc(50% - 42px)", float:"left"}}>"bottom up" traversal through the lattice</li>
						<li style={{float:"right",margin:"0px 2px",width:"calc(50% - 4px)"}}>
							<ImgComp src={require("./data_mining_pics/53.png")} style={{width:"100%"}}/>
						</li>
						<li style={{clear:"both"}}>guarantees finding only minimal FDs and will allow for pruning based on what was discovered from previous level.</li>
					</SubList></li>
					<li><ImgComp src={require("./data_mining_pics/54.png")}/></li>
					<li>Each level \(L\) contains the corresponding nodes of the lattice.</li>
					<li>The columns in the <b>target set</b> are those that may still be functionally determined (RHS) by the columns in the <b>candidate set</b> (LHS).</li>
					<li><ImgComp src={require("./data_mining_pics/55.png")}/></li>
					<li><b>prefixGroups:</b> disjoint sets from Lk with common "prefix" of size \(k-1\).</li>
					<li><b>Line 5:</b> All subsets of the new set must appear in the lower level! (apriori)</li>
					<li><ImgComp src={require("./data_mining_pics/56.png")} style={{width:"70%"}}/></li>
					<li><b>Line 2:</b> each column must appear in all targets of smaller size</li>
					<li><b>Line 4:</b> only need to look at columns in target for RHS!</li>
					<li><b>Line 5:</b> validation step!</li>
					<li><b>Line 7:</b> reduce X's target</li>
					<li><b>Line 8:</b> any target column outside of X could not be minimal!</li>
					<li><ImgComp src={require("./data_mining_pics/57.png")} style={{width:"70%"}}/></li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="intro">Data Preprocessing</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
			<ul>
				<li>Process of Data Mining and KDD:<SubList>
					<li><ImgComp src={require("./data_mining_pics/1.jpg")} style={{width: "90%", marginLeft: "5%"}}/></li>
				</SubList></li>
				<li>Why Data Preprocessing?<SubList>
						<li><b>Heterogeneous data</b> - data integration</li>
						<li><b>Dirty data (missing data, incorrect data, discrepancies in codes or names)</b> - data cleaning</li>
						<li><b>Data not in the right format</b> - data transformation</li>
						<li><b>A huge amount of data</b> - data reduction</li>
				</SubList></li>
				<li><b>Data integration:</b> combines data from multiple sources into a coherent store.</li>
				<li><b>Schema integration:</b><SubList>
					<li>Integrate metadata from different sources.</li>
					<li><b>Entity identification problem:</b> identify real world entities from multiple data sources.</li>
				</SubList></li>
				<li>How to Handle Missing Values?<SubList>
					<li>Fill in the missing value manually: tedious + infeasible?</li>
					<li>Fill it in with a value "unknown"</li>
					<li>Ignore the tuple containing missing values</li>
					<li>Global estimation<SubList>
						<li>The attribute mean/median for numeric attributes</li>
						<li>The most probable value for symbolic (i.e. categorical) attributes</li>
					</SubList></li>
					<li>Local estimation: smarter<SubList>
						<li>The attribute mean/median for all the tuples belonging to the same class (for numeric attributes)</li>
						<li>The most probable value within the same class (for symbolic attributes)</li>
					</SubList></li>
					<li>Use inference-based prediction techniques, such as nearest-neighbor estimator, decision tree, regression, neural network, etc.</li>
				</SubList></li>
				<li><b>Noise:</b> random error or variance in a measured variable, may be due to faulty data collection instruments, data entry problems or data transmission problems.</li>
				<li>How to Handle Noisy Data?<SubList>
					<li><b>Clustering:</b> detect and remove outliers (An outlier is a value that does not follow the general pattern of the rest).</li>
					<li><b>Regression:</b> smooth by fitting the data into regression functions</li>
					<li><b>Binning method:</b> First sort data and partition into <b>bins</b>, then one can <b>smooth by bin means</b>, <b>smooth by bin median</b>, <b>smooth by bin boundaries</b>, etc (more on that below).</li>
					<li><b>Moving average:</b> Use the arithmetic mean of neighborhood examples</li>
					<li><b>Combined computer and human inspection:</b> detect suspicious values and check by human (e.g., deal with possible outliers)</li>
				</SubList></li>
				<li><b>Binning:</b><SubList>
					<li>As an example, let's use a sorted data for price (in dollars): 5, 8, 9, 15, 21, 21, 24, 25, 26, 28, 29, 34.</li>
					<li><b>Equal-depth (frequency) partitioning:</b> It divides the range into \(N\) intervals, each containing approximately the same number of values.</li>
					<TableLI><tbody>
						<tr><th> Partition into 3 bins</th></tr>
						<tr><td>
						<b>Bin 1:</b> 5, 8, 9, 15<br/>
						<b>Bin 2:</b> 21, 21, 24, 25<br/>
						<b>Bin 3:</b> 26, 28, 29, 34
						</td></tr>
						<tr><th>Smoothing by bin means:</th></tr>
						<tr><td>
						<b>Bin 1:</b> 9, 9, 9, 9<br/>
						<b>Bin 2:</b> 23, 23, 23, 23<br/>
						<b>Bin 3:</b> 29, 29, 29, 29
						</td></tr>
						<tr><th>Smoothing by bin boundaries:</th></tr>
						<tr><td>
						<b>Bin 1:</b> 5, 5, 5, 15<br/>
						<b>Bin 2:</b> 21, 21, 25, 25<br/>
						<b>Bin 3:</b> 26, 26, 26, 34
						</td></tr>
					</tbody></TableLI>
					<li><b>Equal-width (distance) partitioning:</b> It divides the range of an attribute into \(N\) intervals, and the width of each interval would be: \(W = (max - min)/N\). <span className="ownExplanation">For our example data, if we want 3 intervals, \(W\) would be \((34-5)/3 = 9.6\ldots\). The range of each interval would be [minValInInterval, minValInInterval+W].</span></li>
					<TableLI><tbody>
						<tr><th> Partition into 3 bins</th></tr>
						<tr><td>
						<b>Bin 1:</b> 5, 8, 9<br/>
						<b>Bin 2:</b> 15, 21, 21, 24<br/>
						<b>Bin 3:</b> 25, 26, 28, 29, 34
						</td></tr>
						<tr><th>Smoothing by bin means:</th></tr>
						<tr><td>
						<b>Bin 1:</b> 7, 7, 7<br/>
						<b>Bin 2:</b> 20, 20, 20, 20<br/>
						<b>Bin 3:</b> 28, 28, 28, 28, 28
						</td></tr>
						<tr><th>Smoothing by bin boundaries:</th></tr>
						<tr><td>
						<b>Bin 1:</b> 5, 9, 9<br/>
						<b>Bin 2:</b> 15, 24, 24, 24<br/>
						<b>Bin 3:</b> 25, 25, 25, 25, 34
						</td></tr>
					</tbody></TableLI>
				</SubList></li>
				<li><b>Normalization:</b> scale attribute values to fall within a small, specified range:<SubList>
						<li>Min-max normalization, specifically, for range <b>[0, 1]</b>:</li>
						<li><ImgComp src={require("./data_mining_pics/2.jpg")} style={{marginLeft:"10%",width:"80%"}}/></li>
						<li>Min-max normalization, generally, for range <b>[cus_min</b> (or custom_min)<b>, cus_max]</b>:</li>
						<li><ImgComp src={require("./data_mining_pics/3.jpg")} style={{width: "100%"}}/></li>
						<li>Z-score normalization:</li>
						<li><ImgComp src={require("./data_mining_pics/4.jpg")} style={{marginLeft:"15%",width:"70%"}}/></li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
			<h3>Data Reduction</h3>
			<ul>
				<li>Data reduction operations:<SubList>
					<TableLI style={{width: "90%"}}><tbody>
						<tr><th>Case/Example</th><th>Feature 1</th><th>Feature 2</th><th>Feature 3</th><th>Class</th></tr>
						<tr><td>E1</td><td>V11</td><td>V12</td><td>V13</td><td>C1</td></tr>
						<tr><td>E2</td><td>V21</td><td>V22</td><td>V23</td><td>C2</td></tr>
						<tr><td>E3</td><td>V31</td><td>V32</td><td>V33</td><td>C3</td></tr>
					</tbody></TableLI>
					<li>Feature reduction (reduce the number of columns)</li>
					<li>Case reduction (reduce the number of rows)</li>
					<li>Value reduction (reduce the number of distinct values in a column)</li>
				</SubList></li>
				<li>Feature Selection:<SubList>
						<li><u>Objective:</u> Find a subset of features with predictive performance comparable to the full set of features.</li>
						<li>A practical objective is to remove clearly
								extraneous features - leaving the table reduced
								to manageable dimensions - not necessarily to
								select the optimal subset.</li>
						<li>Feature Selection Methods:<SubList>
							<li><b>Merger Methods:</b> merge features, resulting in a new set of fewer columns with new values.</li>
							<li><b>Wrapper Methods:</b> feature selection is being "wrapper around" a learning algorithm. <a href="https://www.analyticsvidhya.com/blog/2016/12/introduction-to-feature-selection-methods-with-an-example-or-how-to-select-the-right-variables/#:~:text=In%20wrapper%20methods,computationally%20very%20expensive.">In wrapper methods, we try to use a subset of features and train a model using them. Based on the inferences that we draw from the previous model, we decide to add or remove from the subset. These methods are usually computationally very expensive.</a></li>
							<li><b>Filter Methods:</b> select a subset of original features<SubList style={{paddingRight:"0px"}}>
								<li>Feature Selection from <b>Means and Variances</b> (for continuous features only):<SubList style={{paddingRight:"0px"}}>
									<li>Compute the means of a feature for each class, normalized by the variances;</li>
									<li>If the means are far apart, interest in a feature increases (the feature has potential in terms of distinguishing between classes);</li>
									<li>If the means are indistinguishable, interest wanes in that feature.</li>
									<li>Two intuitive methods<SubList style={{paddingRight:"0px"}}>
										<li><b>Independent feature analysis:</b> Assuming the features are independent. Features are examined individually.<SubList style={{paddingRight:"0px"}}>
											<li>Significance test (t-test):</li>
											<li><ImgComp src={require("./data_mining_pics/5.jpg")} style={{width: "100%"}}/></li>
											<li>\(sig = 2\) for the 95% confidence level.</li>
											<li>If the comparison fails the test, the feature can be deleted.</li>
											<li>A feature is retained if it is significant for at least one of the pairwise comparisons.</li>
										</SubList></li>
										<li><b>Distance-based feature selection</b></li>
									</SubList></li>
								</SubList></li>
								<li>Feature Selection by <b>Mutual Information</b>:<SubList>
									<li><u>Objective:</u> Select features according to the mutual information between a feature and the class variable.</li>
									<li>The <b>mutual information</b> (also called <b>information gain</b>) between the class variable y and a discrete feature x:</li>
									<li><ImgComp src={require("./data_mining_pics/6.jpg")} style={{width: "100%"}}/></li>
									<li>MI measures the degree to which x and y are not independent. The bigger the value, the more dependent y is on x.</li>
								</SubList></li>
								<li>Feature Selection by <b>Decision Trees</b>.</li>
							</SubList></li>
						</SubList></li>
				</SubList></li>
				<li>Case Reduction:<SubList>
					<li><b>Simple Random Sampling:</b><SubList>
						<li><b>Single Simple Random Sample:</b> Choose \(n\) objects randomly from \(N\) objects \((n \lt N)\) so that each object has the same probability of being chosen.</li>
						<li><b>Incremental Sampling:</b> Spot trends in error and complexity by learning with incrementally larger random subsets of the data to help produce a single solution.</li>
						<li><ImgComp src={require("./data_mining_pics/49.png")} style={{width:"90%"}}/></li>
						<li><b>Average Sampling:</b> Select \(k\) random samples of \(n\) cases, then solutions from different samples are combined in the prediction phase.</li>
					</SubList></li>
					<li><b>Sampling by Adjusting Prevalence:</b> Directly adjust the prevalence of cases over the classes.</li>
					<li><b>Stratified Sampling:</b> Partition data set \(D\) into mutually disjoint subsets, called <b>strata</b>.Then randomly sample data from each stratum.</li>
				</SubList></li>
				<li>Value Reduction:<SubList>
						<li>For nominal attributes: Generalization</li>
						<li>For Integer or real-valued attributes: Rounding, Binning, Discretization</li>
				</SubList></li>
			</ul>
			<h3>Discretization</h3>
			<ul>
				<li><b>K-mean Clustering:</b> Distribute the values in the bins to minimize the average distance of a value from its bin mean:<SubList numbered>
					<li>Sort the input values and keep the unique values</li>
					<li>Create k bins using equal-depth binning</li>
					<li>Compute bin means (mean<sub>1</sub>, mean<sub>2</sub>, ..., mean<sub>k</sub>)</li>
					<li>Compute global distance: \({"D_{new} = \\sum_i \\sum_j {(v_{ij}-mean_i)}^{2}"}\) where mean<sub>i</sub> is the mean in bin<sub>i</sub> and v<sub>ij</sub> is the jth value in bin<sub>i</sub></li>
					<li>Repeat:</li>
					<li><ImgComp src={require("./data_mining_pics/8.jpg")} style={{width:"90%",marginLeft: "5%"}}/></li>
					<li>Until D<sub>new</sub> is not less than D<sub>old</sub>.</li>
				</SubList></li>
				<li><b>Entropy-Based Discretization:</b><SubList>
					<li>Sort the examples in a set \(S\) by increasing values of the attribute \(A: {"{v_1, v_2, \\ldots, v_n}"}\).</li>
					<li>Suppose a cut-point \(T\) partitions \(S\) into \(S_1\) and \(S_2\). Entropy (with respect to the class attribute) after the partition induced by cutpoint \(T\):</li>
					<li><ImgComp src={require("./data_mining_pics/7.jpg")} style={{width: "80%",marginLeft: "10%"}}/></li>
					<li>Select \(T_A\) for which \(Ent(T_A , S)\) is minimal to split the range into two subranges.</li>
					<li>The process is recursively applied to partitions obtained until some stopping criterion is met.</li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="fpaarm">Frequent Pattern & Association Rule Mining</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
				<h3>Mining Association Rules</h3>
				<ul>
						<li><b>Objective:</b> Finding interesting co-occurring items (or objects, events) in a given data set.</li>
						<li><ImgComp src={require("./4412pics/14.PNG")} style={{width:"70%"}}/></li>
						<li><b>Transactional database TDB:</b><SubList>
								<li><ImgComp src={require("./4412pics/13.PNG")} style={{width:"90%",marginLeft: "5%"}}/></li>
						</SubList></li>
						<li><b>Relational database (RDB):</b><SubList>
								<li><ImgComp src={require("./4412pics/15.PNG")} style={{width:"90%",marginLeft: "5%"}}/></li>
						</SubList></li>
						<li><ImgComp src={require("./4412pics/16.PNG")} style={{width:"70%",marginLeft:"15%"}}/></li>
						<li>A <b>rule</b> associates one set of items (or attribute-value pairs) with
								another set of items (or attribute-value pairs).</li>
						<li><u>Problem statement:</u> Given a minimum support (min_sup), also called
								<b>support threshold</b>, and a minimum confidence
								(min_conf), also called <b>confidence threshold</b>,
								find all association rules that satisfy both
								min_sup and min_conf from a data set D.</li>
						<li><b>Basic Concepts:</b><SubList>
								<li><b>Strong rules:</b>
								An association rule is strong if it satisfies both min_sup and
								min_conf.</li>
								<li><b>k-itemset:</b> an itemset that contains k items.</li>
								<li><b>Support count</b> of an itemset in data set D: number of
								transactions in D that contain the itemset.</li>
								<li><b>Minimum support count:</b> min_sup X total number of
								transactions in a data set.</li>
								<li><b>Frequent itemset</b> in a data set D: itemset whose
								support count in D is at least the minimum support
								count.</li>
						</SubList></li>
				</ul>
				<h3>Apriori</h3>
				<ul>
					<li><ImgComp src={require("./4412pics/18.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/19.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/97.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/20.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/21.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/22.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/23.PNG")} style={{width:"70%"}}/></li>
					<li><a href="https://chih-ling-hsu.github.io/2017/03/25/generate-a-candidate-hash-tree">Generate a Candidate Hash Tree:</a><SubList>
						<li>The insertion of an itemset X is shown as below:<SubList>
							<li>Let k be the current layer of the hash tree (initially k=1 )</li>
							<li>Perform Hash function on the k<sup>th</sup> item in the itemset X and get n.</li>
							<li>Traverse to the nth node of the current layer.</li>
							<li>If the n<sup>th</sup> node of the current layer is a leaf node, insert the itemset X to this leaf node; If not, increment the value of k and jump back to step 1.</li>
							<li>Determine if this leaf node is full. If not, the insertion is completed; Else, split the node with the same rule as above.</li>
						</SubList></li>
						<li>For example, given: Hash function: n = hash(X[k]) = X[k] mod 3:<SubList>
							<li>Hash(1,4,7) &rarr; 1 (left subtree)</li>
							<li>Hash(2,5,8) &rarr; 2 (middle subtree)</li>
							<li>Hash(3,6,9) &rarr; 3 (right subtree)</li>
							<li>Max leaf size : 3</li>
						</SubList></li>
					</SubList></li>
					<li><ImgComp src={require("./4412pics/24.PNG")} style={{width:"90%",marginLeft: "5%"}}/></li>
					<li>Subset Function:<SubList>
							<li><strong>Functionality:</strong> Given C<sub>k</sub> (in a hash tree) and a transaction t, find all the candidates in C<sub>k</sub> contained in t and increase the count of these candidates: Subset (C<sub>k</sub>, t): candidate itemsets contained in t.</li>
							<li><strong>Method:</strong> At root, hash on every item in t (until the kth item from the end) . At an interior node reached by hashing on item i, hash on each item that comes after i in t (until the (k-d+1)th item from the end, where d is the level of the node in the tree), recursively apply to the nodes in the corresponding bucket At a leaf, find itemsets contained in t.</li>
							<li><strong>Benefit:</strong> Don&apos;t have to match each candidate with each transaction.</li>
							<li><ImgComp src={require("./4412pics/25.PNG")} style={{width:"80%",marginLeft:"10%"}}/></li>
							<li><ImgComp src={require("./4412pics/26.PNG")} style={{width:"80%",marginLeft:"10%"}}/></li>
					</SubList></li>
					<li><ImgComp src={require("./4412pics/27.PNG")} style={{width:"70%"}}/></li>
					<li>Improving Apriori:<SubList>
							<li>Shrink the number of candidates (Hash-based technique):<SubList>
									<li><ImgComp src={require("./4412pics/30.PNG")} style={{width:"80%",marginLeft:"10%"}}/></li>
									<li><ImgComp src={require("./4412pics/31.PNG")} style={{width:"80%",marginLeft:"10%"}}/></li>
							</SubList></li>
							<li>Reduce the number of database scans on disk (Partitioning data):<SubList>
									<li><ImgComp src={require("./4412pics/32.PNG")} style={{width:"80%",marginLeft:"10%"}}/></li>
							</SubList></li>
							<li>Avoid candidate generation (FP-growth)</li>
					</SubList></li>
				</ul>
				<h3>FP-Growth</h3>
				<ul>
						<li><ImgComp src={require("./4412pics/33.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/34.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/35.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/36.PNG")} style={{width:"70%"}}/></li>
						<li>Major Steps to Mine FP-tree:<SubList>
								<li><ImgComp src={require("./4412pics/37.PNG")} style={{width:"70%"}}/></li>
								<li><ImgComp src={require("./4412pics/38.PNG")} style={{width:"70%"}}/></li>
								<li><ImgComp src={require("./4412pics/39.PNG")} style={{width:"70%"}}/></li>
								<li><ImgComp src={require("./4412pics/40.PNG")} style={{width:"70%"}}/></li>
								<li><ImgComp src={require("./4412pics/41.PNG")} style={{width:"70%"}}/></li>
						</SubList></li>
						<li><ImgComp src={require("./4412pics/42.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
						<li><ImgComp src={require("./4412pics/43.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
						<li><ImgComp src={require("./4412pics/44.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
				</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
				<h3>Problems with Association Rule Mining</h3>
				<ul>
					<li><b>Quantity problem:</b> Too many rules can be generated. Given a dataset, the number of rules generated depends on the support and confidence thresholds. If the support threshold is high, a small number of rules are generated. But some interesting rules are missed. If the support threshold is low, a huge number of rules are generated.</li>
					<li><b>Quality problem:</b> Not all the generated rules are interesting.</li>
					<li>Solutions to the Problems:<SubList>
							<li>Finding only maximum or closed frequent patterns:
							Other frequent patterns can be generated from them
							Constraint-based data mining.</li>
							<li>Applying constraints in the mining process so the search can
							be more focused.</li>
							<li>Using interestingness measures to remove or rank rules<SubList>
									<li>Remove misleading associations and find correlation rules</li>
									<li>Prune patterns using other interestingness measures.</li>
							</SubList></li>
							<li>Using rule structures:<SubList>
									<li>Eliminate structurally and semantically redundant rules.</li>
									<li>Group or summarize related rules.</li>
							</SubList></li>
					</SubList></li>
					<li><ImgComp src={require("./4412pics/47.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/48.PNG")} style={{width:"70%"}}/></li>
					<li><b>Maximal frequent patterns</b> are a <i>lossy</i> compression of frequent
							patterns: Given the set of all maximal frequent patterns and their
							supports in a data set D, we can generate all the frequent
							patterns, but not their supports.</li>
					<li><b>Closed frequent itemsets</b> are a <i>lossless</i> compression of frequent
							patterns: Given the set of all closed frequent patterns and their supports
							in a data set D, the user can generate all the frequent patterns
							and their supports.</li>
					<li><ImgComp src={require("./4412pics/49.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
					<li><ImgComp src={require("./4412pics/50.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
					<li><ImgComp src={require("./4412pics/51.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
					<li>Association &NotEqual; Correlation</li>
					<li><ImgComp src={require("./4412pics/52.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
					<li><ImgComp src={require("./4412pics/53.PNG")} style={{width:"60%",marginLeft:"20%"}}/></li>
				</ul>
				<h3>Sequential Pattern Mining</h3>
				<ul>
					<li><ImgComp src={require("./4412pics/54.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/55.PNG")} style={{width:"70%"}}/></li>
					<li><b>Sequential pattern mining:</b> Given a sequence database, find the set of frequent
							sequences that satisfy a minimum support (min_sup).
							</li>
					<li>The <b>Apriori property</b> in sequential patterns: Any nonempty subsequence of a frequent
							sequence must be frequent. If a sequence is infrequent, then none of its
							super-sequences is frequent</li>
					<li><b>GSP:</b> Generalized Sequential Pattern Mining<SubList>
						<li><ImgComp src={require("./4412pics/56.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/57.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/58.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/59.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/60.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/61.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/62.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/63.PNG")} style={{width:"70%"}}/></li>
					</SubList></li>
					<li><b>PrefixSpan:</b> Generate all frequent sequences without candidate generation and testing<SubList>
						<li><ImgComp src={require("./4412pics/64.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/65.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/66.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/67.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/68.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/69.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./4412pics/70.PNG")} style={{width:"70%"}}/></li>
					</SubList></li>
					<li>Problem of Sequential Pattern Mining: A long frequent sequence contains a
							combinatorial number of frequent subsequences.</li>
					<li><ImgComp src={require("./4412pics/71.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/72.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/73.PNG")} style={{width:"70%"}}/></li>
					<li><ImgComp src={require("./4412pics/74.PNG")} style={{width:"70%"}}/></li>
				</ul>
		</div>
	</div>

	<h2 id="dtm">Decision Tree Mining</h2>
	<div className="content ">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
				<ul>
					<li><b>Classification</b> is the problem of identifying to which of a set of categories (sub-populations) a new observation belongs, on the basis of a training set of data containing observations (or instances) whose category membership is known.<SubList>
					<li><ImgComp style={{width:"60%",marginLeft:"20%"}} src={require("./4412pics/95.PNG")}/></li>
					<li><ImgComp style={{width:"60%",marginLeft:"20%"}} src={require("./4412pics/96.PNG")}/></li>
					</SubList></li>
					<li>What can go wrong in classification?<SubList>
						<li>Choice of outcome in classification</li>
						<li>Choice of attributes used by the algorithm</li>
						<li>Choice of the training data</li>
					</SubList></li>
					<li><ImgComp src={require("./4412pics/76.PNG")} style={{width:"70%"}}/></li>
					<li><b>A decision tree:</b> representation of classification knowledge:<SubList>
						<li>Each non-leaf (internal) node tests an attribute
						(Outlook, Humidity, Wind)</li>
						<li>Each branch corresponds to an
						attribute value</li>
						<li>Each leaf node assigns a
						classification</li>
						<li><ImgComp src={require("./4412pics/78.PNG")} style={{width:"70%"}}/></li>
					</SubList></li>
				</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
				<h3>How to select an attribute for a node</h3>
				<ul>
						<li><b>Information Gain:</b><SubList>
								<li>Given a set \(S\) of examples and k classes \((C1, \ldots , Ck)\), the entropy of \(S\) with respect to the \(k\) classes is defined as:</li>
								<MathStuff>$$Entropy(S) = - \Sigma^k_{"{i=1}"} P(C_i) \text{"{log}"}_2 (P(C_i))$$</MathStuff>
								<li>The bigger \(Entropy(S)\) is, the more impure \(S\) is. In the example, the entropy of the "Play Tennis" attribute is around 0.940.</li>
								<li>\(Gain(S, A)\): expected reduction in entropy due to partitioning \(S\) on attribute \(A\).</li>
								<MathStuff>$$\begin{"{gathered}"}  Using\ A,\ data\ set\ S\ is\ split\ into\ S_1,\ \ldots,\ S_m \\  Gain(S, A)=Ent(S) - \Sigma^m_{"{i=1}"} \frac{"{|S_i|}{|S|}"} Ent(S_i)\end{"{gathered}"}$$</MathStuff>
								<li><ImgComp src={require("./data_mining_pics/46.JPG")} style={{width:"70%"}}/></li>
								<li><ImgComp src={require("./data_mining_pics/47.JPG")} style={{width:"70%"}}/></li>
						</SubList></li>
						<li><u>Bias in the Information Gain Measure:</u> Favor unfairly attributes with large numbers of distinct values at the expense of those with few. E.g., attribute Date: poor predictor, but has the highest gain because it alone perfectly predicts the target attribute over the training data.</li>
						<li><b>Gain Ratio:</b><SubList>
								<li>penalizes attributes with many distinct values by
										dividing information gain by attribute information
										(entropy of data with respect to the values of attribute):</li>
								<MathStuff>$$ SplitInfo(S, A) = - \Sigma_{"{v_i \\in val(A)}"} P(v_i) log_2(P(v_i))$$</MathStuff>
								<MathStuff>$$ GainRatio(S, A) = \frac{"{Gain(S,A)}{SplitInfo(S, A)}"}$$</MathStuff>
						</SubList></li>
						<li><b>Gini diversity index:</b><SubList>
								<MathStuff>$$ i(S) = 1 - \Sigma^n_{"{j=1}"} P(C_j)^2 $$</MathStuff>
								<li>Selection of attribute using Gini index selects an attribute A
										that most reduces the impurity due to partitioning on A:</li>
								<MathStuff>$$ \delta i(S, A)=i(S) - \Sigma_{"{v_i \\in values(A)}"} \frac{"{|S_{v_i}|}{|S|} i(S_{v_i})"}$$</MathStuff>
						</SubList></li>
				</ul>
				<h3>Prevent Overfitting</h3>
				<ul>
						<li><b>Pre-pruning:</b> stop growing the tree when data split is
								not statistically significant</li>
						<li><b>Post-pruning:</b> grow full tree, allow it to overfit the data, and then remove some subtrees:<SubList>
								<li><b>Reduced-Error Pruning:</b><SubList>
										<li>Split training data into <i>growing sets</i> and <i>pruning sets</i></li>
										<li>Generate an overfitted decision tree using the growing set</li>
										<li>Consider each of the internal non-root nodes in the tree to be candidates
										for pruning</li>
										<li>Prune a node by removing subtree rooted at this node, making it a leaf node,
										and assigning it the most common classification of the training examples
										affiliated with this node</li>
										<li>Evaluate impact of pruning this node on the pruning set by
										calculating the classification error rate of the pruned tree on the pruning
										set and comparing it with the error rate of the unpruned tree.</li>
										<li>Greedily remove the one whose removal most reduces the error on
										pruning set.</li>
								</SubList></li>
								<li><b>Error-Complexity Pruning:</b><SubList>
										<li><ImgComp src={require("./4412pics/88.PNG")} style={{width:"80%"}}/></li>
								</SubList></li>
								<li><b>Pessimistic-Error Pruning:</b><SubList>
										<li><ImgComp src={require("./4412pics/89.PNG")} style={{width:"80%"}}/></li>
								</SubList></li>
						</SubList></li>
				</ul>
				<h3>How to deal with continuous attributes</h3>
				<ul>
						<li>Discretization before learning decision tree</li>
						<li><b>Dynamic discretization:</b> Dynamically split the value range into two subranges during the tree learning process</li>
				</ul>
		</div>
	</div>

	<h2 id="bayesian_classification">Bayesian Classification</h2>
	<div className="content">
			<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
					<ul>
					<li>Goal: Determine the most probable hypothesis (class)</li>
					<li><b>Incremental learning:</b> Each training example can incrementally increase/decrease
							the probability that a hypothesis is correct.</li>
					<li>Bayes Theorem:</li>
					<li><ImgComp src={require("./data_mining_pics/9.jpg")} style={{width: "80%",marginLeft: "10%"}}/></li>
					<li>Finding <b>Maximum a posteriori</b> hypothesis<SubList>
							<li>Goal: Find the most probable hypothesis h from a set H of
									candidate hypotheses, given an example x.</li>
							<li>The most probable hypothesis is called maximum a posteriori
									(MAP) hypothesis hypothesis:</li>
							<li><ImgComp src={require("./data_mining_pics/10.jpg")} style={{width:"70%"}}/></li>
							<li>Simplify:</li>
							<li><ImgComp src={require("./data_mining_pics/11.jpg")} style={{width: "80%",marginLeft: "10%"}}/></li>
					</SubList></li>
					<li>Suppose instance x is described by attributes values
							&lt;x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>&gt; and there is a set C of classes: c<sub>1</sub>, c<sub>2</sub>, ..., c<sub>m</sub>:</li>
					<li><ImgComp src={require("./data_mining_pics/12.jpg")} style={{width:"70%"}}/></li>
					<li>Advantages: Easy to implement; Good results obtained in most of the cases.</li>
					<li>Disadvantage: Assumption: class conditional independence of attributes, therefore loss of accuracy.</li>
					</ul>
					<h3>Na&iuml;ve Bayes Classifier</h3>
					<ul>
							<li>Na&iuml;ve assumption: values of attributes are conditionally independent given a class.</li>
							<li><ImgComp src={require("./data_mining_pics/13.jpg")} style={{width: "80%",marginLeft: "10%"}}/></li>
							<li>Example:<SubList>
									<li><ImgComp src={require("./data_mining_pics/14.PNG")} style={{width: "100%"}}/></li>
									<li><ImgComp src={require("./data_mining_pics/15.PNG")} style={{width: "80%",marginLeft: "10%"}}/></li>
									<li><ImgComp src={require("./data_mining_pics/16.PNG")} style={{width: "90%", marginLeft: "5%"}}/></li>
									<li>P(x|buys_computer="yes") * P(buys_computer="yes")=0.028
									</li>
									<li>P(x|buys_computer="no") * P(buys_computer="no")=0.007</li>
									<li>&therefore; x belongs to class "buys_computer=yes"</li>
							</SubList></li>
							<li>If attribute A is continuous, assume normal distribution.</li>
					</ul>
			</div>
			<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
					<h3>Bayesian Belief Networks</h3>
					<ul>
						<li>Allows dependencies among attributes but assumes conditional independence among subsets of attributes.</li>
						<li>A graphical model of causal relationships. Two components:<SubList>
							<li>A <b>directed acyclic graph (DAG)</b>: represents dependency among variables (attributes) where links are dependencies (Storm affects Campfire (see pic below)).</li>
							<li>A <b>conditional probability table (CPT)</b> for each variable X.</li>
						</SubList></li>
						<li><ImgComp src={require("./data_mining_pics/17.PNG")} style={{width: "80%",marginLeft: "10%"}}/></li>
						<li><ImgComp src={require("./data_mining_pics/18.PNG")} style={{width:"70%"}}/></li>
						<li><ImgComp src={require("./data_mining_pics/19.jpg")} style={{width:"60%",marginLeft:"20%"}}/></li>
						<li><ImgComp src={require("./data_mining_pics/20.PNG")} style={{width: "80%",marginLeft: "10%"}}/></li>
						<li><b>If structure known and observe all variables:</b> Learn only CPTs (estimate the conditional probabilities from training data)</li>
						<li><b>Suppose structure known, variables partially observable:</b> Similar to training neural network with hidden units. In fact, can learn network conditional probability tables using gradient ascent method!</li>
						<li className="research"><b>When structure unknown:</b><SubList>
							<li>Use heuristic search or constraint-based technique to search through potential structures.</li>
							<li>K2 algorithm</li>
						</SubList></li>
					</ul>
			</div>
	</div>

	<h2 id="nn">Neural Network</h2>
	<div className="content">
			<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
					<ul>
							<li>Unlike bayes Classifier, <a href='https://www.cs.toronto.edu/~urtasun/courses/CSC411_Fall16/08_generative.pdf'>discriminative classifiers try to either: learn mappings directly from the space of inputs X to class labels, or try to learn p(y|x) directly,</a> where x is the inputs and y is the class labels.</li>
							<li><ImgComp src={require("./data_mining_pics/34.jpg")} style={{width:"80%"}}/></li>
							<li>Types of Neural Networks:<SubList>
									<li><ImgComp src={require("./data_mining_pics/35.jpg")} style={{width:"70%"}}/></li>
							</SubList></li>
							<li>What Happens inside a Neuron?<SubList>
									<li><ImgComp src={require("./data_mining_pics/36.jpg")} style={{width:"90%"}}/></li>
							</SubList></li>
							<li>Examples of Activation Functions:<SubList>
									<li><ImgComp src={require("./data_mining_pics/37.jpg")} style={{width:"70%"}}/></li>
							</SubList></li>
					</ul>
			</div>
			<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
					<h3>Backpropagation algorithm</h3>
					<ul>
							<li>Objective: searches for weight values that minimize
									a loss function, e.g., the total error of the network
									over the set of training examples (training set):
									</li>
							<MathStuff>$${"\\begin{gathered} \
							E = \\frac{1}{2} \\Sigma^N_{n-1} \\Sigma^K_{k-1} (t_k^n-o_k^n)^2  \\\\ \\begin{aligned} \
							& \\textbf{N} \\text{ is the number of training examples} \\\\ \
							& \\textbf{K} \\text{ is the number of output units} \\\\ \
							& \\textbf{t} \\text{ is the true output} \\\\ \
							& \\textbf{o} \\text{ is the computed output} \\end{aligned} \\end{gathered}"}$$</MathStuff>
							<li>The algorithm first initializes the weights with small
									random values
									</li>
							<li>Then backpropagation consists of the repeated
									application of the following two passes:<SubList>
									<li>Forward pass: in this step the network is activated on
									one example and the output of the network is computed.</li>
									<li>Backward pass: in this step, starting at the output layer,
									the error of the output layer is computed and is
									propagated backwards through the network, layer by
									layer, and weights are updated.</li>
							</SubList></li>
							<li><b>Case updating:</b> weights are updated after presentation of
	each training example (as in our description)</li>
	<li><b>Epoch updating:</b> weight increments are accumulated and
	are updated after all the training examples have been
	presented</li>
	<li><b>Mini-batch updating:</b> present a randomly-selected subset
	of examples; weight increments are accumulated, and
	weights are updated after all the selected examples have
	been presented - Stochastic Gradient Descent (SGD)</li>
					</ul>
					<br/>
					<ul>
							<li>Prevent Overfitting:<SubList>
									<li><b>Regularization</b></li>
									<li><b>Dropout:</b> Randomly drop units (along with their connections)
	during training</li>
	<li><b>Early stopping:</b> Use validation error to decide when to stop training or stop when monitored quantity has not improved after subsequent epochs</li>
							</SubList></li>
					</ul>
			</div>
	</div>

	<h2 id="tc">Text Classification</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
			<h3>Text Representation (Traditional)</h3>
			<ul>
				<li>How to represent a document using a vector of attribute values?<SubList numbered>
					<li>Use 0 or 1 as attribute value to indicate whether the word appears in the document.</li>
					<li>Use the absolute or relative frequency of each word in the document as the attribute value.</li>
					<li><ImgComp src={require("./data_mining_pics/38.JPG")} style={{width:"80%"}}/></li>
					<li>Assign a weight to a word in a document using TFIDF and use the weight as the attribute value</li>
					<li><ImgComp src={require("./data_mining_pics/39.JPG")} style={{width:"80%"}}/></li>
					<li><ImgComp src={require("./data_mining_pics/48.jpg")} style={{width:"80%"}}/></li>
				</SubList></li>
			</ul>
			<h3>Text Processing</h3>
			<ul className="Opened">
				<li>Many of the most frequently used words in English are worthless in text mining - these words are called <b>stop words</b> (the, of, and, to, a).</li>
				<li><b>Stemming:</b> A technique used to find the root/stem of a
				word. For example:
				discussed,
				discusses,
				discussing, discuss; Stem: discuss</li>
				<li>Feature Selection:<SubList>
						<li>Class independent methods (Unsupervised)<SubList>
								<li><b>Document frequency</b> of a word w: DF (w) = number of documents containing w</li>
								<li><b>Term Strength (TS)</b></li>
						</SubList></li>
						<li>Class-dependent methods (Supervised)<SubList>
								<li><b>Information Gain (IG)</b></li>
								<li><ImgComp src={require("./data_mining_pics/40.JPG")} style={{width:"90%"}}/></li>
								<li><b>Mutual Information (MI)</b></li>
								<li><b>c2 statistic (CHI)</b></li>
						</SubList></li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
			<h3>Word Embedding</h3>
			<ul>
				<li><b>Word Embedding:</b> A type of word representation using vectors; embed words into a vector space; the vector of a word is called its <b>embedding</b>.</li>
				<li>In an embedding space, semantically similar words are close to each other<SubList>
					<li><ImgComp src={require("./data_mining_pics/41.JPG")} style={{width:"60%"}}/></li>
				</SubList></li>
				<li>Word embeddings is better than one-hot encoding:<SubList>
					<li><ImgComp src={require("./data_mining_pics/42.JPG")} style={{width:"60%"}}/></li>
				</SubList></li>
				<li><b>Word2Vec:</b><SubList>
					<li><ImgComp src={require("./data_mining_pics/43.JPG")} style={{width:"90%"}}/></li>
					<li><ImgComp src={require("./data_mining_pics/44.jpg")} style={{width:"90%"}}/></li>
				</SubList></li>
			</ul>
		</div>

	</div>

	<h2 id="svm">Support Vector Machine</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
				<ul>
						<li><ImgComp src={require("./data_mining_pics/21.jpg")} style={{width:"90%"}}/></li>
						<li><b>Support Vector Machines:</b><SubList>
								<li>It uses a nonlinear mapping to transform the original
								training data into a higher dimension.</li>
								<li>With the new dimension, it searches for the linear optimal
								<b>separating hyperplane</b> (i.e., "decision boundary").</li>
								<li>With an appropriate nonlinear mapping to a sufficiently
								high dimension, data from two classes can always be
								separated by a hyperplane.</li>
								<li>SVM finds this hyperplane using <b>support vectors</b>
								("essential" training tuples) and <b>margins</b> (defined by the
								support vectors).</li>
						</SubList></li>
						<li>A separating hyperplane can be written as
								\(W \cdot X + b = 0\) where \({"W={w1, w2, \\ldots , wn}"}\) is a weight vector and \(b\) a scalar (bias)</li>
						<li>For 2-D, the hyperplane defining the sides of the margin:</li>
						<MathStuff>$$\begin{"{aligned}"} &H_1: w_{0} + w_{1} x_{1} + w_{2} x_{2} \ge 1 & \text{"{ for }"}y_i = +1 \\&H_2: w_{0} + w_{1} x_{1} + w_{2} x_{2} \le - 1 & \text{"{ for }"}y_i = -1 \end{"{aligned}"}$$</MathStuff>
						<li>The <b>complexity</b> of trained classifier is characterized by the # of
								support vectors rather than the dimensionality of the data.</li>
						<li>Classification Margin:<SubList>
								<li>Examples closest to the hyperplane are <b>support vectors</b>.</li>
								<li>Margin &rho; of the separator is the distance between support vectors.</li>
								<li><ImgComp src={require("./data_mining_pics/27.jpg")} style={{width:"90%"}}/></li>
						</SubList></li>
						<li>Slack variables &xi;<sub>i</sub> can be added to allow misclassification
								of difficult or noisy examples, resulting margin called <b>soft</b>.</li>
				</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
			<h3>Non-linear SVMs</h3>
			<ul>
				<li>The original feature space can always be
						mapped to some higher-dimensional feature space where
						the training set is separable:</li>
				<li><ImgComp src={require("./data_mining_pics/28.jpg")} style={{width:"90%"}}/></li>
				<li>The linear classifier relies on inner product between vectors \(K(x_i,x_j)=x_i^Tx_j\)</li>
				<li>A <b>kernel function</b> is a function that is equivalent to an inner product in
				some feature space.</li>
				<li>If every datapoint is mapped into high-dimensional space via some
						transformation \(\Phi : x \rightarrow  \phi(x)\), the inner product becomes:\(K(x_i,x_j)=\phi(x_i)^T \phi(x_j)\)</li>
				<li><ImgComp src={require("./data_mining_pics/26.jpg")} style={{width:"90%"}}/></li>
			</ul>
		</div>
	</div>

	<h2 id="knn">K Nearest Neighbour Classifier</h2>
	<div className="content">
			<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
					<ul className="Opened">
							<li>To determine the class of a new example E:<SubList>
									<li>Calculate the distance between E and all examples in the
									training set</li>
									<li>Select k nearest examples to E in the training set</li>
									<li>Assign E to the most common class among its k-nearest
									neighbors</li>
							</SubList></li>
							<li>"Closeness" can be defined in terms of the Euclidean distance
									between two examples.</li>
					</ul>
			</div>
			<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
					<ul>
							<li>Important to normalize features, distance between examples could be dominated by some
									attributes with relatively large numbers.</li>
							<li>What if we have nominal attributes?<SubList numbered>
									<li>Convert nominal attributes to numerical
									attributes</li>
									<li>Let \(m\) be the number of attributes:</li>
							<li><ImgComp src={require("./data_mining_pics/25.jpg")} style={{width:"80%"}}/></li>
							</SubList></li>
							<li>Strengths:<SubList>
									<li>Simple to implement and use</li>
									<li>Comprehensible: easy to explain prediction</li>
									<li>Robust to noisy data by averaging k-nearest neighbors.</li>
									<li>Can learn complex target functions</li>
							</SubList></li>
							<li>Weaknesses:<SubList>
									<li>Need a lot of space to store all examples.</li>
									<li>Takes more time to classify a new example than with a model
									(need to calculate and compare distance from new example
									to all other examples).</li>
							</SubList></li>
					</ul>
			</div>
	</div>

	<h2 id="clustering">Clustering</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
			<ul>
				<li>What Is <b>Clustering</b>? Group data into clusters so that the points in one group are similar to each other and are as different as possible from the points in other groups</li>
				<li>Let \({"i = (x_{i1}, x_{i2}, \\ldots, x_{ip})"}\) and \({"j = (x_{j1}, x_{j2}, \\ldots, x_{jp})"}\) be two p-dimensional data objects:</li>
				<li><ImgComp src={require("./data_mining_pics/29.jpg")} style={{width:"70%"}}/></li>
			</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
			<ul>
				<li><b>K-means:</b><SubList>
					<li>Arbitrarily choose k objects as the initial cluster centers</li>
					<li>Until no change, do<SubList>
							<li>(Re)assign each object to the cluster to which
							the object is the most similar, based on the
							mean value of the objects in the cluster</li>
							<li>Update the cluster means, i.e., calculate the
							mean value of the objects for each cluster</li>
					</SubList></li>
				</SubList></li>
				<li>k-Means Method (problems):<SubList>
					<li>The k-means algorithm is sensitive to outliers.</li>
					<li>Often terminates at a local optimum.</li>
				</SubList></li>
				<li><b>PAM: Partitioning Around Medoids</b><SubList>
					<li>Arbitrarily choose k objects as the initial medoids</li>
					<li>Until no change, do<SubList>
						<li>(Re)assign each object to the cluster whose medoid is
						the nearest</li>
						<li>For each pair of a non-medoid object <i>o'</i> and a medoid <i>o</i>, compute the total cost, S, of swapping medoid <i>o</i> with <i>o'</i></li>
						<li>If the lowest cost S<sub>lowest</sub> &lt; 0 then swap <i>o</i> with <i>o<sub>lowest</sub>'</i>&nbsp; to form the new set of k medoids.</li>
					</SubList></li>
				</SubList></li>
				<li>PAM is more robust than k-means in the presence of noise and outliers (Medoids are less influenced by outliers)</li>
				<li>PAM is efficient for small data sets but does
				not scale well for large data sets</li>
				<li><b>Hierarchical Clustering:</b><SubList>
					<li>Iteratively merge or split clusters to form a tree of clusters</li>
					<li><b>Agglomerative (bottom-up):</b> merge clusters iteratively</li>
					<li><b>Divisive (top-down):</b> split a cluster iteratively</li>
					<li>Decompose data objects into a several levels of nested
							partitioning (tree of clusters), called a <b>dendrogram</b>. A clustering of the data objects is obtained by cutting the
							dendrogram at the desired level, then each connected
							component forms a cluster.</li>
				</SubList></li>
				<li><b>Density-based Clustering:</b><SubList>
						<li>A cluster is a dense region of points, which is
						separated by low-density regions, from other
						regions of high density.</li>
						<li>Used when the clusters are irregular or intertwined,
						and when noise and outliers are present.</li>
						<li><a href='https://stats.stackexchange.com/questions/225655/what-is-the-interpretation-of-eps-parameter-in-dbscan-clustering'>The neighbourhood of a point \(p\), denoted by \(N_\epsilon (p)\) , is defined as the {"\\(N_\\epsilon(p)=\\{q \\in D|dist(p,q)\\le \\epsilon\\}\\)"} . Here \(D\) is a database of \(n\) objects (points) and \( \epsilon \)  is what would be constitute a reasonable radius.</a></li>
						<li>Density of \(N_\epsilon (p)\) is the number of points in \(N_\epsilon (p)\).</li>
						<li>A point is a <b>core point</b> if there are at least
							<i>MinPts</i> number of points in its Eps-neighborhood. A <b>border point</b> has fewer than <i>MinPts</i> points in
							its Eps-neighborhood, but is in the Eps- neighborhood of a core point. A <b>noise point</b> is any point that is not a core
							point or a border point.</li>
						<li><ImgComp src={require("./data_mining_pics/30.png")} style={{width: "70%",backgroundColor:"white"}}/></li>
						<li><a href='https://en.wikipedia.org/w/index.php?title=DBSCAN&oldid=1119563882#:~:text=In%20this%20diagram,nor%20directly%2Dreachable.'>In this diagram, minPts = 4. Point A and the other red points are core points. Because they are all reachable from one another, they form a single cluster. Points B and C are not core points, but are reachable from A (via other core points) and thus belong to the cluster as well. Point N is a noise point that is neither a core point nor directly-reachable.</a></li>
						<li>A point \(p\) is <b>directly density-reachable</b> from a point \(q\) if \(p\) belongs to \(N_\epsilon(q)\) and \(q\) is a core point.</li>
						<li>A point \(p\) is <b>density-reachable</b> from a point \(q\) if there is a chain of
								points \(p_1\), \(p_2\), ..., \(p_n\), where \(p_1 = q\), \(p_n = p\) and
								\(p_{"{i+1}"}\) is directly density-reachable from \(p_i\).</li>
						<li>A point \(p\) is <b>density-connected</b> to a point \(q\) if there is a point \(o\) such
								that both \(p\) and \(q\) are density-reachable from \(o\). <span className="research">Unlike in density-reachable, both points p and q themselves may not be core points.</span></li>
						<li>A <b>cluster</b> is defined
								as a maximal set of density-connected points. Core points in other clusters are not density-connected to
								any core points in this cluster (<b>Maximality</b>).</li>
				</SubList></li>
				<li>Measures of Clustering Quality:<SubList>
					<li><b>External Index:</b> Used to measure the extent to which cluster labels match externally supplied class labels.<SubList>
						<li><ImgComp src={require("./data_mining_pics/32.jpg")} style={{width: "60%",backgroundColor: "white"}}/></li>
					</SubList></li>
					<li><b>Internal Index:</b> Used to measure the goodness of a clustering structure without external information.<SubList>
						<li><ImgComp src={require("./data_mining_pics/33.jpg")} style={{width: "60%",backgroundColor: "white"}}/></li>
						<li>Davies-Bouldin index:<SubList>
							<li><a href='https://en.wikipedia.org/w/index.php?title=Davies%E2%80%93Bouldin_index&oldid=1105990757#:~:text=Let%20Ri,properties%20are%20conserved%3A'>Let \({"R_{i,j}"}\) be a measure of how good the clustering scheme is. This measure, by definition has to account for \({"M_{i,j}"}\) the separation between the ith and the jth cluster, which ideally has to be as large as possible, and \(S_i\), the within cluster scatter for cluster i, which has to be as low as possible:</a></li>
							<li><ImgComp src={require("./data_mining_pics/31.JPG")} style={{width:"50%",backgroundColor: "white"}}/></li>
						</SubList></li>
					</SubList></li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="dw">Data Warehousing</h2>
	<div className="content">
		<div style={{width:"48%",float:"left",marginLeft:"1%",marginRight:"1%"}}>
			<ul>
				<li>What is a Data Warehouse:<SubList>
						<li><i>A data warehouse is a subject-oriented, integrated, time-variant,
								and nonvolatile collection of data in support of management's
								decision-making process.</i> - W. H. Inmon</li>
						<li><b>Operational Database Management Systems</b> also called as OLTP (Online Transactions Processing Databases), are used to manage dynamic data in real-time.</li>
						<li>Data Warehouse and the OLTP database are both relational databases. However, the goals of both these databases are different:<SubList>
							<TableLI><tbody>
								<tr>
								<th>Operational Database</th>
								<th>Data Warehouse</th>
								</tr>
								<tr>
								<td>Operational systems are designed to support high-volume transaction processing.</td>
								<td>Data warehousing systems are typically designed to support high-volume analytical processing (i.e., OLAP).</td>
								</tr>
								<tr>
								<td>Operational systems are usually concerned with current data.</td>
								<td>Data warehousing systems are usually concerned with historical data.</td>
								</tr>
								<tr>
								<td>Data within operational systems are mainly updated regularly according to need.</td>
								<td>Non-volatile, new data may be added regularly. Once Added rarely changed.</td>
								</tr>
								<tr>
								<td>It is designed for real-time business dealing and processes.</td>
								<td>It is designed for analysis of business measures by subject area, categories, and attributes.</td>
								</tr>
								<tr>
								<td>It is optimized for a simple set of transactions, generally adding or retrieving a single row at a time per table.</td>
								<td>It is optimized for extent loads and high, complex, unpredictable queries that access many rows per table.</td>
								</tr>
								<tr>
								<td>It is optimized for validation of incoming information during transactions, uses validation data tables.</td>
								<td>Loaded with consistent, valid information, requires no real-time validation.</td>
								</tr>
								<tr>
								<td>It supports thousands of concurrent clients.</td>
								<td>It supports a few concurrent clients relative to OLTP.</td>
								</tr>
								<tr>
								<td>Operational systems are widely process-oriented. </td>
								<td>Data warehousing systems are widely subject-oriented</td>
								</tr>
								<tr>
								<td>Operational systems are usually optimized to perform fast inserts and updates of associatively small volumes of data.</td>
								<td>Data warehousing systems are usually optimized to perform fast retrievals of relatively high volumes of data.</td>
								</tr>
								<tr>
								<td>Data In</td>
								<td>Data Out</td>
								</tr>
								<tr>
								<td>Less Number of data accessed.</td>
								<td>Large Number of data accessed.</td>
								</tr>
								<tr>
								<td>Relational databases are created for on-line transactional Processing (OLTP)</td>
								<td>Data Warehouse designed for on-line Analytical Processing (OLAP)</td>
								</tr>
							</tbody></TableLI>
						</SubList></li>
						<li><b>Subject-Oriented:</b> Organized around major subjects, such as customer,
								product, sales; focusing on the modeling and analysis of data for
								decision makers, not on daily operations or transaction
								processing; provide a simple and concise view around particular
								subject issues by excluding data that are not useful in
								the decision support process.</li>
						<li><b>Integrated:</b> Constructed by integrating multiple, heterogeneous data
								sources (relational databases, flat files, on-line transaction
								records); data cleaning and data integration techniques are
								applied; ensure consistency in naming conventions, encoding
								structures, attribute measures, etc. among different
								data sources.</li>
						<li><b>Time Variant:</b> The time horizon for the data warehouse is significantly
								longer than that of operational systems; every key structure in the data warehouse contains an element of time, explicitly or implicitly but the key of operational data may or may not
								contain "time element".</li>
						<li><b>Nonvolatile:</b> Operational update of data does not occur in the data
								warehouse environment; does not require transaction processing, recovery,
								and concurrency control mechanisms.</li>
				</SubList></li>
				<li>Three Data Warehouse Models:<SubList>
						<li>
								<b>Enterprise warehouse:</b> collects all of the information about subjects spanning
								the entire organization
								</li>
						<li><b>Data Mart:</b> a subset of corporate-wide data that is of value to a
								specific groups of users; its scope is confined to
								specific, selected groups, such as marketing data mart.
								</li>
						<li><b>Virtual warehouse:</b> A set of views over operational databases; only some of the possible summary views may be
								materialized.</li>
				</SubList></li>
				<li><a href='https://www.tutorialspoint.com/difference-between-views-and-materialized-views-in-sql#:~:text=the%20View%20of%20a%20table%20is%20a%20logical%20virtual%20copy%20of%20the%20table%20created%20by%20the%20%22select%20query%22%2C%20but%20the%20result%20is%20not%20stored%20anywhere%20in%20the%20disk.'>The View of a table is a logical virtual copy of the table created by the "select query", but the result is not stored anywhere in the disk. <b>Materialized views</b> are also the logical virtual copy of data - driven by the "select query", but the result of the query will get stored in the table or disk.</a></li>
				<li><b>Metadata</b> is the data defining warehouse objects. It stores:<SubList>
						<li>Description of the <b>structure</b> of the data warehouse</li>
					<li><b>Operational meta-data:</b> data lineage (history of migrated data and transformation path),
						currency of data (active, archived, or purged), monitoring
						information (warehouse usage statistics, error reports, audit trails).</li>
					<li>The <b>algorithms</b> used for summarization</li>
					<li>The <b>mapping</b> from operational environment to the data warehouse</li>
					<li>Data related to <b>system performance</b>: warehouse schema, view and derived data definitions</li>
					<li><b>Business data:</b> business terms and definitions, ownership of data, charging policies</li>
				</SubList></li>
				<li><ImgComp style={{width:"70%"}} src={require("./data_mining_pics/22.gif")}/></li>
				<li><a href='https://365datascience.com/trending/data-cube/#:~:text=a%20data%20cube%20refers,as%20the%20name%20suggests.'><b>Data cube:</b> refers to a multi-dimensional data structure. That is, data within the data cube is explained by specific dimensional values. Albeit being called a cube, it doesn't necessarily live in 3 dimensions, nor does it have equal sides as the name suggests.</a></li>
				<li>In data warehousing literature, an n-D base cube is called a <b>base
						cuboid</b>. The top most 0-D cuboid, which holds the highest-level of
						summarization, is called the <b>apex cuboid</b>. The lattice of cuboids
						forms a data cube. A data cube, allows data to be modeled and viewed in
						multiple dimensions.</li>
				<li><ImgComp style={{width:"80%"}} src={require("./data_mining_pics/24.gif")}/></li>
				<li><b>Fact table</b> contains measures and keys
						to each of the related dimension tables.</li>
				<li><ImgComp style={{width:"60%",marginLeft:"20%"}} src={require("./data_mining_pics/23.JPG")}/></li>
				<li><b>Star schema:</b> A fact table in the middle connected to a
				set of dimension tables.</li>
				<li><b>Snowflake schema:</b> A refinement of star schema
				where some dimensional hierarchy is normalized into a
				set of smaller dimension tables, forming a shape
				similar to snowflake.</li>
				<li><b>Fact constellations:</b> Multiple fact tables share
				dimension tables.</li>
				<li>Typical OLAP Operations:<SubList>
						<li><b>Roll up (drill-up):</b> summarize data by climbing up hierarchy or by dimension reduction</li>
						<li><b>Drill down (roll down):</b> reverse of roll-up from higher level summary to lower level summary or detailed data, or introducing new dimensions</li>
						<li><b>Slice and dice</b></li>
						<li><b>Pivot (rotate)</b></li>
						<li><b>drill across:</b> involving (across) more than one fact table</li>
						<li><b>drill through:</b> through the bottom level of the cube to its
						back-end relational tables (using SQL)</li>
				</SubList></li>
				<li>In data warehouses, <i>join index</i> relates the values
						of the dimensions of a start schema to rows in
						the fact table. E.g. fact table: Sales and two dimensions city
						and product, a join index on city maintains for each
						distinct city a list of R-IDs of the tuples
						recording the Sales in the city.</li>
				<li>OLAP Server Architectures:<SubList>
						<li><b>Relational OLAP (ROLAP):</b> Use relational or extended-relational DBMS to store and manage warehouse data and OLAP middle ware</li>
						<li><b>Multidimensional OLAP (MOLAP):</b> Sparse array-based multidimensional storage engine; fast indexing to pre-computed summarized data</li>
						<li><b>Hybrid OLAP (HOLAP):</b> Flexibility, e.g., low level: relational, high-level: array</li>
						<li><b>Specialized SQL servers:</b> Specialized support for SQL queries over star/snowflake schemas</li>
				</SubList></li>
				<li>Data Generalization by Attribute-Oriented Induction:<SubList>
						<li>Collect the task-relevant data (initial relation) using a relational database query</li>
						<li>Perform generalization by attribute removal or
						attribute generalization</li>
						<li>Apply aggregation by merging identical, generalized
						tuples and accumulating their respective counts</li>
						<li>Interaction with users for knowledge presentation</li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width:"48%",float:"right",marginLeft:"1%",marginRight:"1%"}}>
				<ul>
						<li><b>Iceberg Cube:</b> Computing only the cuboid cells whose measure satisfies the
								iceberg condition.</li>
						<li>Data Cube Computation Methods:<SubList>
								<li>Multi-Way Array Aggregation:<SubList>
										<li>Array-based "bottom-up" algorithm</li>
										<li>Using multi-dimensional chunks
										No direct tuple comparisons</li>
										<li>Simultaneous aggregation on multiple
										dimensions</li>
										<li>Intermediate aggregate values are re-used
										for computing ancestor cuboids</li>
										<li>Cannot do Apriori pruning: No iceberg
										optimization</li>
								</SubList></li>
								<li>Bottom-Up Computation:<SubList>
										<li>Divides dimensions into partitions
										and facilitates iceberg pruning:<SubList>
												<li>If a partition does not satisfy
												min_sup, its descendants can be
												pruned</li>
												<li>If minsup = 1 &Implies; compute full
												CUBE!</li>
										</SubList></li>
										<li>No simultaneous aggregation</li>
								</SubList></li>
								<li>Star-Cubing</li>
								<li>High-Dimensional OLAP</li>
						</SubList></li>
				</ul>
		</div>
	</div>
</>