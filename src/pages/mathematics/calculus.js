import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";

export const title = "Calculus Notes";

export const sourcesColor = {36: "rgb(80, 130, 160)"};
export const content = <>

	<h1>Calculus Notes</h1>
  <div id="date"><b>Last Edit:</b> {document.lastModified}</div>
  {getSourcesOL(sourcesColor)}

	<h2 id="functionsAndModels">Functions Review</h2>
  <div className="content">
		<div data-source={36} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li><u>Function Definition:</u><SubList>
					<li>A <b>function</b> \(f\) consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the domain of the function. The set of outputs is called the range of the function.</li>
					<li>For a general function \(f\) with domain \(D\), we often use \(x\) to denote the input and \(y\) to denote the output associated with \(x\). When doing so, we refer to \(x\) as the independent variable and \(y\) as the dependent variable, because it depends on \(x\). Using function notation, we write \(y = f (x)\).</li>
					<li><figure>
							<ImgComp src={require("./calculus_pics/1.jpg")} width="75%" />
							<figcaption>1) It's helpful to think of a function as a machine; when \(x\) enters the machine, it's accepted as an input and the machine produces an output \(f(x)\). 2) Another way to picture a function is by an arrow diagram; Each arrow connects an element of \(D\) to an element of \(E\).</figcaption>
					</figure></li>
				</SubList></li>
				<li><b>The Vertical Line Test:</b><SubList>
					<li>Since a function has exactly one output for each input, the graph of a function can have, at most, one y -intercept.</li>
					<li>Given a function \(f\), every vertical line that may be drawn intersects the graph of \(f\) no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.</li>
					<li><ImgComp src={require("./calculus_pics/2.jpg")} width="50%"/></li>
				</SubList></li>
				<li>Typically, a function can be represented by a <b>table</b>, <b>graph</b>, or <b>formula</b>.</li>
				<li>A funciton \(f\) is called <b>increasing</b> on an interval \(I\) if \(f(x_1) \le f(x_2)\) whenever \(x_1 \lt x_2\) in \(I\) and <b>decreasing</b> if \(f(x_1) \ge f(x_2)\) whenever \(x_1 \lt x_2\) in \(I\).</li>
				<li>A funciton \(f\) is called <b>strictly increasing</b> on an interval \(I\) if \(f(x_1) \lt f(x_2)\) whenever \(x_1 \lt x_2\) in \(I\) and <b>strictly decreasing</b> if \(f(x_1) \gt f(x_2)\) whenever \(x_1 \lt x_2\) in \(I\).</li>
				<li>Combinations of function:<SubList>
						<li>\((f + g)(x) = f(x)+g(x)\)</li>
						<li>\((f - g)(x) = f(x)-g(x)\)</li>
						<li>\((fg)(x) = f(x)g(x)\)</li>
						<li>\((\frac{" fg"})(x) = \frac{"{f(x)}{g(x)}"}\) if \(g(x) \ne 0\).</li>
						<li><b>Composite function:</b> \((f \circ g)(x) = f(g(x))\)</li>
				</SubList></li>
				<li>Symmetry of a function:<SubList>
					<li>Consider the function \(f(x) = x^4 - 2x^2 - 3\). If we take the part of the curve that lies to the right of the y-axis and flip it over the y-axis, it lays exactly on top of the curve to the left of the y-axis. In this case, we say the function has <b>symmetry about the y-axis</b>.</li>
					<li>On the other hand, consider the function \(f(x) = x3 - 4x\). If we take the graph and rotate it \(180°\) about the origin, the new graph will look exactly the same. In this case, we say the function has <b>symmetry about the origin</b>.</li>
					<li>If a function \(f\) satisfies \(f(-x)=f(x)\) for every number \(x\) in its domain, then \(f\) is called an <b>even function</b>. If \(f\) satisfies \(f(-x)=f(x)\) for every number \(x\) in its domain, then \(f\) is called an <b>odd function</b>.</li>
				</SubList></li>
				<li><figure>
					<ImgComp src={require("./calculus_pics/4.jpg")} width="50%"/>
					<figcaption><b>Absolute value function</b>, also written as |x|.</figcaption>
				</figure></li>
			</ul>
		</div>
		<div data-source={36} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<ul style={{paddingBottom: "1px"}}>
				<li><b>Algebraic function:</b><SubList>
					<li>A function \(P\) is called a <b>polynomial</b> if:</li>
					<MathStuff>{"\
							$$f(x) = a_nx^n + a_{n-1}x^{n-1} + ... + \\ a_2x^2 + a_1x + a_0$$\
							$$a_0, a_1, a_2, ... \\text{are coefficients}$$\
					"}</MathStuff>
					<li>A polynomial of degree 1 [\(P(x) = mx + b\)] is a <b>linear function</b>.</li>
					<li>A polynomial of degree 2 [\(P(x) = ax^2 + bx + c\)] is a <b>quadratic function</b>.</li>
					<li>A polynomial of degree 3 [\(P(x) = ax^3 + bx^2 + cx + d\)] is a <b>cubic function</b>.</li>
					<li>A function of the form \(f(x) = x^a\) where \(a\) is a constant is called a <b>power function</b>.</li>
					<li>An <b>algebraic function</b> is a larger class of function that involves addition, subtraction, multiplication, division, rational powers, and roots.</li>
					<li>A <b>rational function</b> \(f\) is a ratio of two polynomials: \(f(x) = \frac{"{3x-1}{5x+2}"}\).</li>
					<li>If \(a = \frac{"1"}{"n"}\) where \(n\) is a positive integer, then \(f(x) = x^\frac{"1"}{"x"} = \sqrt[n]x\) is a <b>root function</b>. If \(a = -1\), then \(f(x) = x^{"{-1}"} = \frac{"1"}{"x"}\) is a <b>reciprocal function</b>.</li>
				</SubList></li>
				<li><b>Mathematical model:</b><SubList>
					<li>A <b>mathematical model</b> is a method of simulating real-life situations with mathematical equations.</li>
					<li>Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately. It is not an accurate representation of a physical situation.</li>
				</SubList></li>
				<li><b>Transcendental functions:</b><SubList>
					<li>Some functions, however, cannot be described by basic algebraic operations. These functions are known as <b>transcendental functions</b>.</li>
					<li><b>Trigonometric functions:</b><SubList>
						<li style={{float: "right", width: "50%",listStyleType: "none"}}><ImgComp style={{width: "90%"}} src={require("./calculus_pics/5.jpg")}/></li>
						<li style={{width: "40%"}}>\(sin \theta = \frac{" y"}{"r"}\)</li>
						<li style={{width: "40%"}}>\(cos \theta = \frac{" x"}{"r"}\)</li>
						<li style={{width: "40%"}}>\(sec \theta = \frac{" r"}{"x"}\)</li>
						<li style={{width: "40%"}}>\(cosec \theta = \frac{" r"}{"y"}\)</li>
						<li style={{width: "40%"}}>\(tan \theta = \frac{" y"}{"x"}\)</li>
						<li style={{width: "40%"}}>\(cotan \theta = \frac{" x"}{"y"}\)</li>
						<li>In calculus, the convention is that radian measure is always used.</li>
						<li>The trigonometric functions are periodic functions. The period of a function \(f\) is defined to be the smallest positive value \(p\) such that \(f(x + p) = f (x)\) for all values \(x\) in the domain of \(f\).</li>
					</SubList></li>
					<li><b>Exponential functions</b> are of the form \(f(x) = b^x\) where \(b\) is a positive constant.</li>
					<li>The <b>logarithmic functions</b> is of the form \(f(x) = log_bx\), where base \(b\) is a positive constant. Properties (<a href='https://www.deriveit.net/algebra'>proof here</a>):<SubList>
							<li>\(log(xy) = log(x) + log(y)\)</li>
							<li>\(log(\frac{" x"}{"y"}) = log(x) - log(y)\)</li>
							<li>\(log(x^r) = rlog(x)\)</li>
							<li>\(log_b(x)=\frac{"{log_a x}{log_a b}"}\)</li>
					</SubList></li>
				</SubList></li>
				<li><figure>
						<ImgComp src={require("./calculus_pics/3.jpg")} width="80%"/>
						<figcaption>Functions defined by different formulas in different parts of their domains are called <b>piecewise defined functions</b>.</figcaption>
				</figure></li>
				<li>Transformations of Functions:<SubList>
					<li>Translating a graph:<SubList>
							<li>\(y=f(x)+c\) shifts the graph of \(y=f(x)\) a distance \(c\) units upwards.</li>
							<li>\(y=f(x+c)\) shifts the graph of \(y=f(x)\) a distance \(c\) units to the left.</li>
							<li><ImgComp src={require("./calculus_pics/6.jpg")} style={{width: "80%"}}/></li>
					</SubList></li>
					<li>Stretching and reflecting a graph:<SubList>
						<TableLI>
								<caption>How \(y=f(x)\) can be stretched and reflected (suppose c &gt; 1)</caption>
								<tbody>
										<tr><td>\(y=cf(x)\)</td><td>Stretch vertically by a factor of \(c\)</td></tr>
										<tr><td>\(y=(1/c)f(x)\)</td><td>Shrink vertically by a factor of \(c\)</td></tr>
										<tr><td>\(y=f(cx)\)</td><td>Shrink horizontally by a factor of \(c\)</td></tr>
										<tr><td>\(y=f(x/c)\)</td><td>Stretch horizontally by a factor of \(c\)</td></tr>
										<tr><td>\(y=-f(x)\)</td><td>reflect about the x-axis</td></tr>
										<tr><td>\(y=f(-x)\)</td><td>reflect about the y-axis</td></tr>
								</tbody>
						</TableLI>
						<li><ImgComp src={require("./calculus_pics/7.jpg")} width="70%"/></li>
					</SubList></li>
				</SubList></li>
				<li><b>Inverse functions:</b><SubList>
					<li>A function is <b>one-to-one</b> if it never takes the same value twice, so that means \(f(x_1) \ne f(x_2) \) whenever \(x_1 \ne x_2\).</li>
					<li><figure>
							<ImgComp src={require("./calculus_pics/8.jpg")} style={{width: "80%"}}/>
							<figcaption><b>The Horizontal Line Test:</b> A function is one-to-one if and only if no horizontal line can intersect its graph more than once.</figcaption>
					</figure></li>
					<li>Let \(f\) be a one-to-one function with domain \(A\) and range \(B\), then its <b>inverse function</b> \(f^{"{-1}"}\) has domain \(B\) and range \(A\).</li>
					<MathStuff>$$f^{"{-1}"}(y) = x \Leftrightarrow f(x) = y$$</MathStuff>
					<li>The graph of \(f^{"{-1}"}\) is a reflection of \(f\) about the line \(y = x\).</li>
					<li>Trigonometric functions are not one-to-one, they don't have an inverse function. This difficulty is overcome by restricting the domain.</li>
					<li><figure>
							<ImgComp src={require("./calculus_pics/9.jpg")} style={{width: "80%"}}/>
							<figcaption>The \(f(x) = sin(x)\) is not one-to-one, but the function \(g(x) = sin x\), \(-\pi/2 \le x \le \pi/2\) is one-to-one.</figcaption>
					</figure></li>
				</SubList></li>
				<li><b>Hyperbolic functions:</b><SubList>
					<li><a href='https://en.wikipedia.org/wiki/Hyperbolic_functions'>Hyperbolic functions are analogues of the ordinary trigonometric functions, but defined using the hyperbola rather than the circle. Just as the points \((\cos t, \sin t)\) form a circle with a unit radius, the points \((\cosh t, \sinh t)\) form the right half of the unit hyperbola.</a></li>
					<li><b>Hyperbolic cosine:</b> \(\cosh x = \frac{"{e^x + e^{-x}}{2}"}\)</li>
					<li><b>Hyperbolic sine:</b> \(\sinh x = \frac{"{e^x - e^{-x}}{2}"}\)</li>
					<li><b>Hyperbolic tangent:</b> \(\tanh x = {"\\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}"}\)</li>
					<li><b>Hyperbolic cosecant:</b> \(\operatorname{"{csch}"} x = \frac{"{1}{\\sinh x} = \\frac{2}{e^x - e^{-x}}"}\)</li>
					<li><b>Hyperbolic secant:</b> \(\operatorname{"{sech}"} x = \frac{"{1}{\\cosh x} = \\frac{2}{e^x + e^{-x}}"}\)</li>
					<li><b>Hyperbolic cotangent:</b> \(\coth x = \frac{"{\\cosh x}{\\sinh x} = \\frac{ex + e-x}{e^x - e^{-x}}"}\)</li>
				</SubList></li>
			</ul>
		</div>
  </div>

	<h2 id="limits">Limits</h2>
	<div className="content">
			<div data-source={36} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
				<ul>
					<li><u>Definition:</u><SubList>
						<TableLI>
						<caption>Definition of a Limit</caption>
						<tbody>
							<tr><td>
								Let \(f(x)\) be a function defined at all values in an open interval containing \(a\), with the possible exception of a itself, and let \(L\) be a real number. If \(f(x)\) approaches the real number \(L\) as \(x\) approaches the number \(a\), then we say that the limit of \(f(x)\) as \(x\) approaches \(a\) is \(L\). Symbolically, we express this idea as \({"\\lim_{x \\to a} f(x) = L"}\).
							</td></tr>
						</tbody>
						</TableLI>
						<li>Let's try to evaluate the limit of \({"\\frac{\\sin x}{x}"}\) as \(x\) approaches \(0\):</li>
						<li style={{listStyleType: "none"}}>
							<TableDiv style={{float:"left",width:"50%"}}>
								<thead><tr><th>\(x\)</th><th>\({"\\frac{\\sin x}{x}"}\)</th></tr></thead>
								<tbody>
									<tr><td>-0.1</td><td>0.998334166468</td></tr>
									<tr><td>-0.01</td><td>0.999983333417</td></tr>
									<tr><td>-0.001</td><td>0.999999833333</td></tr>
									<tr><td>-0.0001</td><td>0.999999998333</td></tr>
								</tbody>
							</TableDiv>
							<TableDiv style={{float:"right",width:"50%"}}>
								<thead><tr><th>\(x\)</th><th>\({"\\frac{\\sin x}{x}"}\)</th></tr></thead>
								<tbody>
									<tr><td>0.1</td><td>0.998334166468</td></tr>
									<tr><td>0.01</td><td>0.999983333417</td></tr>
									<tr><td>0.001</td><td>0.999999833333</td></tr>
									<tr><td>0.0001</td><td>0.999999998333</td></tr>
								</tbody>
							</TableDiv>
							<div style={{width:"100%", clear:"both"}}></div>
						</li>
						<li>The values in each column appear to be approaching one. Thus, it is fairly reasonable to conclude that \({"lim_{x → 0} \\frac{sin x}{x} = 1"}\).</li>
						<TableLI>
							<caption>Definition of One-Sided Limit</caption>
							<tbody>
									<tr><td>
											We write \[{"\\lim_{x \\to a^-} f(x) = L"}\] to express that if the values of the function \(f(x)\) approach the real number \(L\) as the values of \(x\) (where \(x \lt a\)) approach the number \(a\), then we say that \(L\) is the limit of \(f(x)\) as \(x\) approaches \(a\) from the left.
											<br/>
											Similarly, if we require that \({"x"}\) be greater than \({"a"}\), we write \[{"\\lim_{x \\to a^+} f(x) = L"}\] and say "the values of the function \(f(x)\) approach the real number \(L\) as the values of \(x\) (where \(x \gt a\)) approach the number \(a\), then we say that \(L\) is the limit of \(f(x)\) as \(x\) approaches \(a\) from the right".
									</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>\({"\\lim_{x \\to a} f(x) = L"}\) if and only if \({"\\lim_{x \\to a^-} f(x) = L"}\) and \({"\\lim_{x \\to a^+} f(x) = L"}\).</li>
					<li>Infinite Limits<SubList>
						<TableLI>
							<caption>Intuitive Definition of an Infinite Limit</caption>
							<tbody>
								<tr><td>
									We write \[{"\\lim_{x \\to a} f(x) = \\infty "}\] to mean if the values of \(f(x)\) increase without bound as the values of \(x\) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) is positive infinity.
									<br/>
									Similarly, \[{"\\lim_{x \\to a} f(x) = -\\infty "}\] means that if the values of \(f(x)\) decrease without bound as the values of \(x\) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) is negative infinity.
								</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>Limit Laws (<a href='https://www.deriveit.net/calculus/limits/product'>proof here</a>):<SubList>
							<li>\({"\\lim_{x \\to a} [f(x)+g(x)] = \\lim_{x \\to a}f(x) + \\lim_{x \\to a}g(x)"}\)</li>
							<li>\({"\\lim_{x \\to a} [f(x)g(x)] = \\lim_{x \\to a}f(x) \\cdot \\lim_{x \\to a}g(x)"}\)</li>
							<li>\({"\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a}f(x)}{\\lim_{x \\to a}g(x)} \\text{ if } \\lim_{x \\to a}g(x) \\ne 0"}\)</li>
							<li>\({"\\lim_{x \\to a} c = c"}\)</li>
							<li>\({"\\lim_{x \\to a} x = a"}\)</li>
							<li>\({"\\lim_{x \\to a} [f(x)]^n = [\\lim_{x \\to a} f(x)]^n"}\)</li>
							<li>\({"\\lim_{x \\to a}\\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}"}\)</li>
							<li>\({"\\lim_{x \\to a} f(g(x)) = f(\\lim_{x \\to a} g(x))"}\) if \(f\) is continous there.</li>
					</SubList></li>
					<TableLI>
							<caption>Squeeze Theorem</caption>
							<tbody><tr><td>If \({"f(x) \\le g(x) \\le h(x)"}\) when \({"x"}\) is near \({"a"}\) (except possibly at \({"a"}\)) and \[{"\\lim_{x \\to a} f(x) = \\lim_{x \\to a} h(x) = L"}\]then \({"\\lim_{x \\to a} g(x) = L"}\).</td></tr></tbody>
					</TableLI>
				</ul>
			</div>
			<div data-source={36} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
				<ul>
					<li><b>Continuity:</b><SubList>
							<li>A function \({"f"}\) is <b>continuous</b> at \({"a"}\) if \({"\\lim_{x \\to a} f(x) = f(a)"}\).</li>
							<li>A function \({"f"}\) is <b>continuous on an interval</b> if it is continuous at every number in the interval.</li>
							<li>A function \({"f"}\) is <b>continuous from the right</b> at \({"a"}\) if \({"\\lim_{x \\to a^+} f(x) = f(a)"}\).</li>
							<li>A function \({"f"}\) is <b>continuous from the left</b> at \({"a"}\) if \({"\\lim_{x \\to a^-} f(x) = f(a)"}\).</li>
							<li><b>Intermediate Value Theorem:</b> Suppose that \({"f"}\) is continuous on the close interval \({"[a, b]"}\) and let \({"N"}\) be any number between \({"f(a)"}\) and \({"f(b)"}\), where \({"f(a) \\ne f(b)"}\). Then there exists a number \({"c"}\) in \({"(a, b)"}\) such that \({"f(c)=N"}\).</li>
					</SubList></li>
					<li>Types of Discontinuities:<SubList>
						<li>\(f\) has a <b>removable discontinuity</b> at \(a\) if \(\lim_{"{x→a}"} f(x)\) exists.</li>
						<li>\(f\) has a <b>jump discontinuity</b> at \(a\) if \(\lim_{"{x → a^-}"} f(x)\) and \(\lim_{"{x → a^+}"} f(x)\) both exist, but \(\lim_{"{x → a^-}"} f(x) \ne \lim_{"{x → a^+}"} f(x)\). (Note: When we state that the one sided limit exists, we mean that it's real-valued and not infinity.)</li>
						<li>\(f\) has an <b>infinite discontinuity</b> at \(a\) if \(\lim_{"x → a^-"} f(x) = ±∞\) or \(\lim_{"x → a^+"} f(x) = ±∞\).</li>
					</SubList></li>
					<li>The line \(x = a\) is a <b>vertical asymptote</b> of \(f(x)\) if \({"\\lim_{x \\to a^-} f(x) = ±∞"}\), \({"\\lim_{x \\to a^+} f(x) = ±∞"}\) or \({"\\lim_{x \\to a} f(x) =±∞"}\).</li>
					<li>Precise definition of a limit:<SubList>
							<TableLI>
							<caption>Precise Definition Of A Limit</caption>
							<tbody>
									<tr><td>
									Let \(f(x)\) be defined for all \(x ≠ a\) over an open interval containing \(a\). Let \(L\) be a real number. Then \[{"\\lim_{x \\to a} f(x) = L"}\] if, for every \(ε \gt 0\), there exists a \(δ \gt 0\), such that if \(0 \lt |x - a| \lt δ\), then \(|f(x) - L| \lt ε\).
									</td></tr>
							</tbody>
							</TableLI>
							<TableLI>
							<caption>Definition Of A Left-Hand Limit</caption>
							<tbody>
									<tr><td>
											\[{"\\lim_{x \\to a^-} f(x) = L"}\] if for every number \({"\\epsilon \\gt 0"}\) there is a number \({"\\delta \\gt 0"}\) such that if \(0 \lt x-a \lt \delta \) then \(|f(x)-L|\lt \epsilon\).
									</td></tr>
							</tbody>
							</TableLI>
							<TableLI>
							<caption>Definition Of A Right-Hand Limit</caption>
							<tbody>
									<tr><td>
											\[{"\\lim_{x \\to a^+} f(x) = L"}\] if for every number \({"\\epsilon \\gt 0"}\) there is a number \({"\\delta \\gt 0"}\) such that if \(-\delta \lt x-a \lt 0\) then \(|f(x)-L|\lt \epsilon\).
									</td></tr>
							</tbody>
							</TableLI>
							<TableLI>
							<caption>Precise Definition Of An Infinite Limit</caption>
							<tbody>
									<tr><td>
											Let \({"f"}\) be a function defined on some open interval that contains the number \({"a"}\), except possibly \({"a"}\) at itself. Then \[{"\\lim_{x \\to a} f(x) = \\infty "}\] means that for every positive number \({"M"}\) there is a positive number \({"\\delta"}\) such that if \(0 \lt|x-a|\lt \delta\) then \(f(x)\gt M\). Also \[{"\\lim_{x \\to a} f(x) = -\\infty "}\] means that for every positive number \({"M"}\) there is a positive number \({"\\delta"}\) such that if \(0 \lt|x-a|\lt \delta\) then \(f(x) \lt -M\).
									</td></tr>
							</tbody>
							</TableLI>
					</SubList></li>
					<li>The line \({"y = L"}\) is called a <b>horizontal asymptote</b> of the curve \({"y=f(x)"}\) if either \({"\\lim_{x \\to \\infty} f(x) = L"}\) or \({"\\lim_{x \\to -\\infty} f(x) = L"}\).</li>
				</ul>
			</div>
	</div>

	<h2>Derivatives</h2>
	<div className="content">
		<div data-source={36} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li>Tangent Line:<SubList>
					<li>Let \(f(x)\) be a function defined in an open interval containing \(a\). The <b>tangent line</b> to \(f(x)\) at \(a\) is the line passing through the point \((a, f (a))\) having slope:</li>
					<MathStuff>\[{"m_{tan} = \\lim_{x→a} \\frac{f(x) - f(a)}{x - a}"}\]</MathStuff>
					<li>We can also use this as our definition:</li>
					<MathStuff>\[{"m_{tan} = \\lim_{h→0} \\frac{f(a+h)-f(a)}{h}"}\]</MathStuff>
					<li>The type of limit we compute in order to find the slope of the line tangent to a function at a point occurs so frequently that we give this value a special name: the <b>derivative</b>. The process of finding a derivative is called <b>differentiation</b>.</li>
					<MathStuff>\[{"f'(a) = \\lim_{x→a} \\frac{f(x) - f(a)}{x - a}"}\]</MathStuff>
				</SubList></li>
				<li>The <b>instantaneous rate of change</b> of a function \(f(x)\) at a value \(a\) is its derivative \(f'(a)\).</li>
				<li>Function \(f(x)\) is said to be <b>differentiable</b> at a if \(f'(a)\) exists. More generally, a function is said to be differentiable on \(S\) if it is <b>differentiable</b> at every point in an open set \(S\).</li>
				<li><b><u>Notation:</u></b><SubList>
					<li>For the function \(y = f (x)\), the following notation can be used to represent the \(derivative\):</li>
					<MathStuff>\[{"f'(x), \\frac{dy}{dx}, y', \\frac{d}{dx}f(x)"}\]</MathStuff>
					<li>In place of \(f'(a)\) we may also use:</li>
					<MathStuff>\[{"\\left. \\frac{dy}{dx} \\right|_{x=a}"}\]</MathStuff>
				</SubList></li>
				<li>If \(f(x)\) is differentiable at \(a\), then \(f\) is continuous at \(a\).</li>
				<li><b>Higher-Order Derivatives:</b><SubList>
					<li>The derivative of a position function is the velocity. The derivative of velocity is the acceleration. The new function obtained by differentiating the derivative is called the <b>second derivative</b>. We can continue to take derivatives to obtain the third derivative, fourth derivative, and so on.</li>
					<li>The notation for the higher-order derivatives of \(y = f (x)\) can be expressed in any of the following forms:</li>
					<MathStuff>\[{"f''(x),f'''(x),f^{(4)}(x), \\ldots, f^{(n)}(x)"}\]\[{"\\frac{d^2y}{(dx)^2},\\frac{d^3y}{(dx)^3},\\ldots, \\frac{d^ny}{(dx)^n}"}\]</MathStuff>
					<li>The notation for \({"\\frac{d^2y}{(dx)^2}"}\) may be viewed as an attempt to express \({"\\frac{d}{dx} \\left( \\frac{dy}{dx}  \\right)"}\) more compactly.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={36} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Derivative Rules:<SubList>
					<li><b>Constant Rule:</b> \({"\\frac{d}{dx}c = 0"}\) if \(c\) is constant.</li>
					<li><b>Power Rule:</b> \({"\\frac{d}{dx} x^n = nx^{n-1}"}\)</li>
					<li><b>Sum Rule:</b> \({"\\frac{d}{dx} (f(x) + g(x)) = \\frac{d}{dx} f(x) + \\frac{d}{dx} g(x)"}\)</li>
					<li><b>Product Rule:</b> \({"\\frac{d}{dx} (f(x) * g(x)) = \\left( \\left( \\frac{d}{dx} f(x) \\right) g(x) \\right) + f(x)\\frac{d}{dx}g(x)"}\)</li>
					<li><b>Quotient Rule:</b></li>
					<MathStuff>\[{"\\frac{d}{dx} \\frac{f(x)}{g(x)} = \\frac{g(x) \\frac{d}{dx} f(x) - f(x)\\frac{d}{dx}g(x)}{g(x)^2}"}\]</MathStuff>
					<li><b>Chain Rule:</b></li>
					<MathStuff>\[{"\\frac{d}{dx} f(g(x)) = \\frac{d(f(x))}{d(g(x))} * \\frac{d(g(x))}{dx}"}\]</MathStuff>
					<li><b>Inverse Function Theorem:</b> If \(g(x)\) be the inverse of \(f(x)\), then:</li>
					<MathStuff>\[{"g'(x) = \\frac{1}{f'(g(x))}"}\]</MathStuff>
				</SubList></li>
				<li>Derivative of trigonometric functions:<SubList>
					<li>\({"\\frac{d\\sin x}{dx} = \\cos x"}\)</li>
					<li>\({"\\frac{d\\cos x}{dx} = -\\sin x"}\)</li>
					<li>\({"\\frac{d\\tan x}{dx} = \\sec^2 x"}\)</li>
					<li>\({"\\frac{d\\cot x}{dx} = -\\csc^2 x"}\)</li>
					<li>\({"\\frac{d\\sec x}{dx} = \\sec x \\tan x"}\)</li>
					<li>\({"\\frac{d\\csc x}{dx} = -\\csc x \\cot x"}\)</li>
				</SubList></li>
			</ul>
		</div>
	</div>

</>