import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Precalculus Notes";

export const sourcesColor = {36: "rgb(80, 130, 160)"};
export const content = <>

	<h1>Precalculus Notes</h1>
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

</>