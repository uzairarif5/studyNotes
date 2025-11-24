import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Precalculus Notes";

export const sourcesColor = {36: "rgb(80, 130, 160)"};
export const content = <>
	<h1>Precalculus Notes</h1>

	<h2 id="functionsAndModels">Functions Review</h2>
  <div className="content">
		<div data-source={36} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li><u>Function Definition:</u><SubList>
					<li>A <b>function</b> \(f\) consists of a set of inputs, a set of outputs, and a rule for assigning each input to exactly one output. The set of inputs is called the domain of the function. The set of outputs is called the range of the function.</li>
					<li>For a general function \(f\) with domain \(D\), we often use \(x\) to denote the input and \(y\) to denote the output associated with \(x\). When doing so, we refer to \(x\) as the independent variable and \(y\) as the dependent variable, because it depends on \(x\). Using function notation, we write \(y = f (x)\).</li>
					<li><figure>
							<ImgComp src={"/articlePics/precalculus_pics/1.jpg"} width="75%" />
							<figcaption>1) It's helpful to think of a function as a machine; when \(x\) enters the machine, it's accepted as an input and the machine produces an output \(f(x)\). 2) Another way to picture a function is by an arrow diagram; Each arrow connects an element of \(D\) to an element of \(E\).</figcaption>
					</figure></li>
				</SubList></li>
				<li><b>The Vertical Line Test:</b><SubList>
					<li>Since a function has exactly one output for each input, the graph of a function can have, at most, one y -intercept.</li>
					<li>Given a function \(f\), every vertical line that may be drawn intersects the graph of \(f\) no more than once. If any vertical line intersects a set of points more than once, the set of points does not represent a function.</li>
					<li><ImgComp src={"/articlePics/precalculus_pics/2.jpg"} width="50%"/></li>
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
					<ImgComp src={"/articlePics/precalculus_pics/4.jpg"} width="50%"/>
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
					<li>A <b>rational function</b> \(f\) is a ratio of two polynomials: \(f(x) = \frac{"{3x-1}{5x+2}"}\).</li>
					<li>If \(a = \frac{"1"}{"n"}\) where \(n\) is a positive integer, then \(f(x) = x^\frac{"1"}{"x"} = \sqrt[n]x\) is a <b>root function</b>. If \(a = -1\), then \(f(x) = x^{"{-1}"} = \frac{"1"}{"x"}\) is a <b>reciprocal function</b>.</li>
					<li>An <b>algebraic functions</b> is a larger class of functions that involves addition, subtraction, multiplication, division, rational powers, and roots.</li>
				</SubList></li>
				<li><b>Mathematical model:</b><SubList>
					<li>A <b>mathematical model</b> is a method of simulating real-life situations with mathematical equations.</li>
					<li>Physicists, engineers, economists, and other researchers develop models by combining observation with quantitative data to develop equations, functions, graphs, and other mathematical tools to describe the behavior of various systems accurately. It is not an accurate representation of a physical situation.</li>
				</SubList></li>
				<li><b>Transcendental functions:</b><SubList>
					<li>Some functions, however, cannot be described by basic algebraic operations. These functions are known as <b>transcendental functions</b>.</li>
					<li><b>Trigonometric functions:</b><SubList>
						<li style={{float: "right", width: "50%",listStyleType: "none"}}><ImgComp style={{width: "90%"}} src={"/articlePics/precalculus_pics/5.jpg"}/></li>
						<li style={{width: "40%"}}>\(\sin \theta = \frac{"{y}{r}"}\)</li>
						<li style={{width: "40%"}}>\(\cos \theta = \frac{"{x}{r}"}\)</li>
						<li style={{width: "40%"}}>\(\sec \theta = \frac{"{r}{x}"}\)</li>
						<li style={{width: "40%"}}>\(\csc \theta = \frac{"{r}{y}"}\)</li>
						<li style={{width: "40%"}}>\(\tan \theta = \frac{"{y}{x}"}\)</li>
						<li style={{width: "40%"}}>\(\cot \theta = \frac{"{x}{y}"}\)</li>
						<li>In calculus, the convention is that radian measure is always used.</li>
						<li>The trigonometric functions are periodic functions. The period of a function \(f\) is defined to be the smallest positive value \(p\) such that \(f(x + p) = f (x)\) for all values \(x\) in the domain of \(f\).</li>
					</SubList></li>
					<li><b>Exponential functions</b> are of the form \(f(x) = b^x\) where \(b\) is a positive constant.</li>
					<li>The <b>logarithmic functions</b> is of the form \(f(x) = log_bx\), where base \(b\) is a positive constant. Properties (<a href='https://www.deriveit.net/algebra'>proof here</a>):<SubList>
							<li>\(\log(xy) = \log(x) + \log(y)\)</li>
							<li>\(\log(\frac{"{x}{y}"}) = \log(x) - \log(y)\)</li>
							<li>\(\log(x^r) = r \log(x)\)</li>
							<li>\(\log_b(x)=\frac{"{\\log_a x}{\\log_a b}"}\)</li>
					</SubList></li>
				</SubList></li>
				<li><figure>
						<ImgComp src={"/articlePics/precalculus_pics/3.jpg"} width="80%"/>
						<figcaption>Functions defined by different formulas in different parts of their domains are called <b>piecewise defined functions</b>.</figcaption>
				</figure></li>
				<li>Transformations of Functions:<SubList>
					<li>Translating a graph:<SubList>
							<li>\(y=f(x)+c\) shifts the graph of \(y=f(x)\) a distance \(c\) units upwards.</li>
							<li>\(y=f(x+c)\) shifts the graph of \(y=f(x)\) a distance \(c\) units to the left.</li>
							<li><ImgComp src={"/articlePics/precalculus_pics/6.jpg"} style={{width: "80%"}}/></li>
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
						<li><ImgComp src={"/articlePics/precalculus_pics/7.jpg"} width="70%"/></li>
					</SubList></li>
				</SubList></li>
				<li><b>Inverse functions:</b><SubList>
					<li>A function is <b>one-to-one</b> if it never takes the same value twice, so that means \(f(x_1) \ne f(x_2) \) whenever \(x_1 \ne x_2\).</li>
					<li><figure>
							<ImgComp src={"/articlePics/precalculus_pics/8.jpg"} style={{width: "80%"}}/>
							<figcaption><b>The Horizontal Line Test:</b> A function is one-to-one if and only if no horizontal line can intersect its graph more than once.</figcaption>
					</figure></li>
					<li>Let \(f\) be a one-to-one function with domain \(A\) and range \(B\), then its <b>inverse function</b> \(f^{"{-1}"}\) has domain \(B\) and range \(A\).</li>
					<MathStuff>$$f^{"{-1}"}(y) = x \Leftrightarrow f(x) = y$$</MathStuff>
					<li>The graph of \(f^{"{-1}"}\) is a reflection of \(f\) about the line \(y = x\).</li>
					<li>Trigonometric functions are not one-to-one, they don't have an inverse function. This difficulty is overcome by restricting the domain.</li>
					<li><figure>
							<ImgComp src={"/articlePics/precalculus_pics/9.jpg"} style={{width: "80%"}}/>
							<figcaption>The \(f(x) = sin(x)\) is not one-to-one, but the function \(g(x) = sin x\), \(-\pi/2 \le x \le \pi/2\) is one-to-one.</figcaption>
					</figure></li>
				</SubList></li>
				<li><b>Hyperbolic functions:</b><SubList>
					<li><a href='https://en.wikipedia.org/wiki/Hyperbolic_functions'>Hyperbolic functions are analogues of the ordinary trigonometric functions, but defined using the hyperbola rather than the circle. Just as the points \((\cos t, \sin t)\) form a circle with a unit radius, the points \((\cosh t, \sinh t)\) form the right half of the unit hyperbola.</a></li>
					<li><b>Hyperbolic sine:</b> \(\sinh x = \frac{"{e^x - e^{-x}}{2}"}\)</li>
					<li><b>Hyperbolic cosine:</b> \(\cosh x = \frac{"{e^x + e^{-x}}{2}"}\)</li>
					<li><b>Hyperbolic tangent:</b> \(\tanh x = \frac{"{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}"}\)</li>
					<li><b>Hyperbolic cotangent:</b> \(\coth x = \frac{"{\\cosh x}{\\sinh x} = \\frac{e^x + e^{-x}}{e^x - e^{-x}}"}\)</li>
					<li><b>Hyperbolic secant:</b> \(\operatorname{"{sech}"} x = \frac{"{1}{\\cosh x} = \\frac{2}{e^x + e^{-x}}"}\)</li>
					<li><b>Hyperbolic cosecant:</b> \(\operatorname{"{csch}"} x = \frac{"{1}{\\sinh x} = \\frac{2}{e^x - e^{-x}}"}\)</li>
				</SubList></li>
			</ul>
		</div>
  </div>

	<h2>Defining Exponents</h2>
  <div className="content">
		<ul className="ownExplanation" style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>Basic definition:<SubList>
				<li>Let \(n\) be an integer greater than or equal to 1, and let \(b\) be any number. Then \(b^n\) is the result of nultiplying \(b\) \(n\) times:</li>
				<MathStuff>\[b^n = \overbrace{"{b \\times b \\times \\cdots \\times b}^{n}"}\]</MathStuff>
				<li><u>Example:</u> \(5^2 = 25\), \(3^3 = 27\), and \(2^1 = 2\).</li>
				<li>In the notation \(b^n\), \(b\) is called the <b>base</b> and \(n\) is called the <b>exponent</b>. This is read as "\(b\) to the power of \(n\)".</li>
				<li>1 to the power of any integer is still 1.</li>
				<li>If our base was a fraction, for example \({"\\left( \\frac{x}{y} \\right)^n"}\), then by we multiply this fraction \(n\) times and we get \({"\\frac{x^n}{y^n}"}\).</li>
			</SubList></li>
			<li>Some properties of exponents:<SubList>
				<li><u>Product Rule:</u> \(b^{"{n+m}"} = b^n \times b^m\).</li>
				<li><u>Quotient Rule:</u> \({"\\frac{b^n}{b^m}"} = b^{"{n-m}"}\) (assume \(n \ge m\) for now).</li>
				<li><u>Power of power Rule:</u> \((b^n)^m = b^{"{nm}"}\).</li>
				<li><u>Power of product:</u> \((bc)^n = b^n \times c^n\).</li>
			</SubList></li>
			<li>Extending the definition to include zero:<SubList>
				<li>We need to define \(b^0\) such that the above properties still hold.</li>
				<li>If \(b^{"{0+m}"} = b^m\) and \(b^{"{0+m}"} = b^0 \times b^m\) (product rule), then it would make sense to define \(b^0\) as 1.</li>
				<li>If \({"\\frac{b^n}{b^0}"} = b^n\) (quotient rule), then again, it would make sense to define \(b^0\) as 1.</li>
				<li>If \((b^0)^m = b^0\) (power of power rule), then by defining \(b^0\) as 1, we get \(1^m = 1\), which is true.</li>
				<li>Defining \(b^0\) as 1 doesn't break the power of product rule.</li>
				<li>It seems like \(b^0 = 1\) is a good definition.</li>
				<li>There is a problem however, when \(b=0\). Consider \({"\\frac{0^1}{0^1} = 0^0"}\) (the qoutient rule). Since \(0^1 =0\), then we are essentially divding by 0, and this is undefined.</li>
				<li>Let's refine our definition: \(b^0 = 1\) as long as \(b \ne 0\), in which case it's undefined.</li>
			</SubList></li>
			<li>Extending the definition to include negative integers:<SubList>
				<li>We need to define \(b^{"{-n}"}\) such that the above properties still hold.</li>
				<li>If \(b^{"{n+(-n)}"} = b^n \times b^{"{-n}"}\) (product rule) and \(b^{"{n+(-n)}"} = b^0 = 1\), then \(1 = b^n \times b^{"{-n}"}\). It would make sense to define \(b^{"{-n}"}\) as \(\frac{"{1}{b^n}"}\).</li>
				<li>Let's remove the condition from the quotient rule that \(n \ge m\). Then, according to the quotient rule \({"\\frac{b^0}{b^{-n}}"} = b^{"{-n}"} = {"\\frac{1}{b^n}"}\), which is consistent with our previous point.</li>
				<li>Also, if \({"\\frac{b^n}{b^m}"} = b^{"{n-m}"}\), then according to the product rule \(b^{"{n-m}"} = b^n \times b^{"{-m}"}\). It would make sense to define \(b^{"{-m}"}\) as \({"\\frac{1}{b^{-m}}"}\) so \(b^{"{n-m}"} = {"\\frac{b^n}{b^m}"}\).</li>
				<li>If \((b^{"{-n}"})^n = b^{"{-n \\times n}"}\) and \((b^n)^{"{-n}"} = b^{"{-n \\times n}"}\) (power of power rule), then defining \(b^{"{-n}"}\) as \({"\\frac{1}{b^n}"}\) won't cause any issues.</li>
				<li>According to the power of product rule \({"(bc)^{-n} = b^{-n} \\times c^{-n}"}\). If we define \({"b^{-n}"}\) as \({"\\frac{1}{b^n}"}\) and \({"c^{-n}"}\) as \({"\\frac{1}{c^n}"}\), then the property doesn't break.</li>
			</SubList></li>
		</ul>
		<ul className="ownExplanation" style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li>Extending the definition to include unit fractions:<SubList>
				<li>According to the power of power rule, \((b^{"\\frac{1}{m}"})^m = b^{"{\\frac{1}{m} \\times m}"} = b^1 = b\). This implies that \(b^{"{1/m}"}\) is an inverse operation of \(b^m\). In other words, \(b^{"{1/m}"} = \sqrt[m] b\).</li>
				<li>According to the power of product rule, \((bc)^{"{1/n}"} = b^{"{1/n}"} \times c^{"{1/n}"}\). If \(x^{"{1/n}"} = \sqrt[n] x\), then \(\sqrt[n] {"{bc}"} = \sqrt[n] {"{b}"} \times \sqrt[n]{"{c}"}\), which is true. This means the power of product rule holds.</li>
				<li>Since we are dealing with a base that can be any real number, how would unit fraction exponents work when the base is negative? We know that it is true that \({"{(\\sqrt{5})^2} = 5"}\), but what about \({"{(\\sqrt{-5})^2}"}\)? We don't have any real number that is \({"\\sqrt{-5}"}\).</li>
				<li>For now, let our definition of \(b^{"{1/m}"}\) be \({"\\sqrt[m] b"}\) only when \({"\\sqrt[m] b"}\) is well defined.</li>
			</SubList></li>
			<li>Extending the definition to include all rational numbers:<SubList>
				<li>According to the power of power rule \((b^n)^{"{1/m}"} = b^{"{n/m}"}\), but since \(b^{"{1/m}"} = \sqrt[m]b\), then \((b^n)^{"{1/m}"} = \sqrt[m]{"{b^n}"}\). This implies that \(b^{"{n/m}"} = {"\\sqrt[m]{b^n}"}\). In the last section we said that taking the square root may cause issues for some bases.</li>
				<li>Also, according to the power of power rule \((b^{"{1/m}"})^n = b^{"{n/m}"}\), but since \(b^{"{1/m}"} = \sqrt[m]b\), then \((b^{"{1/m}"})^n = ({"\\sqrt[m]{b}"})^n\). This implies that \(b^{"{n/m}"} = ({"\\sqrt[m]{b}"})^n\).</li>
				<li>We will define \(b^{"{n/m}"}\) as both \(({"\\sqrt[m]{b}"})^n\) and \({"\\sqrt[m]{b^n}"}\), as long as both of them are well defined and equal.</li>
				<li>Does the power of product rule hold?</li>
				<MathStuff>\[{"\\begin{align} (bc)^{n/m} &= ({\\sqrt[m]{bc}})^n \\\\ &= ({\\sqrt[m]{b} \\times \\sqrt[m]{c}})^n \\\\ &= \\sqrt[m]{b}^n \\times \\sqrt[m]{c}^n \\quad \\text{(power of product with integer exponents)} \\\\ &= b^{n/m} \\times c^{n/m}\\end{align}"}\]</MathStuff>
			</SubList></li>
			<li>Extending the definition to include irrational numbers:<SubList>
				<li>What is \(2^\pi\)? We haven't defined \(2^\pi\) yet, but we have defined \({"2^{3.14}"}\) and \({"2^{3.142}"}\), since 3.14 and 3.142 are rational numbers (\({"3.14 = \\frac{314}{100}"}\) and \({"3.142 = \\frac{3142}{1000}"}\)).</li>
				<li>Since \(3.14 \lt \pi \lt 3.142\), then \(2^{"3.14"} \lt 2^\pi \lt 2^{"3.142"}\). We may not know \(2^\pi\), but we can find it's lower and upper bounds.</li>
				<li>Similarly, we can find \({"2^{3.1415926535}"}\) and \({"2^{3.1415926536}"}\), and since \(2^\pi\) is sandwiched between these two. This means we have an even closer lower and upper bound for \(2^\pi\).</li>
				<li>Let \(x\) be a rational number below \(\pi\), and \(y\) be a rational number above \(\pi\), then we can bring \(x\) and \(y\) infinitely close to \(\pi\) while still keeping them rational. Whatever value \(2^x\) and \(2^y\) converge to will be defined as \(2^\pi\).</li>
				<li>A similar argument can be for other bases and other irrational exponents. Of course, sometimes the value may be undefined when the base is negative.</li>
			</SubList></li>
		</ul>
	</div>


	<h2>Trigonometric Identities</h2>
  <div className="content">
		<div className="ownExplanation" style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li>Pythagorean identities:<SubList>
					<li>\(\sin^2(x) + \cos^2(x) = 1\)</li>
					<li>\(\sec^2(x) = 1 + \tan^2(x)\)</li>
					<li>\(\csc^2(x) = 1 + \cot^2(x)\)</li>
				</SubList></li>
				<li>Sum/difference identites:<SubList>
					<li>\(\sin(x+y) = \sin(x) \cos(y) + \cos(x) \sin(y)\)</li>
					<li>\(\sin(x-y) = \sin(x) \cos(y) - \cos(x) \sin(y)\)</li>
					<li>\(\cos(x+y) = \cos(x) \cos(y) - \sin(x) \sin(y)\)</li>
					<li>\(\cos(x-y) = \cos(x) \cos(y) + \sin(x) \sin(y)\)</li>
					<li>\(\tan(x+y) = \frac{"{\\tan(x) + \\tan(y)}{1 - \\tan(x) \\tan(y)}"}\)</li>
					<li>\(\tan(x-y) = \frac{"{\\tan(x) - \\tan(y)}{1 + \\tan(x) \\tan(y)}"}\)</li>
				</SubList></li>
				<li>Double angle identities:<SubList>
					<li>\(\sin(2x) = 2 \sin(x) \cos(x)\)</li>
					<li>\(\cos(2x) = \cos^2(x) - \sin^2(x)\)</li>
					<li>\(\cos(2x) = 2 \cos^2(x) - 1\)</li>
					<li>\(\cos(2x) = 1 - 2 \sin^2(x)\)</li>
					<li>\(\tan(2x) = \frac{"{2 \\tan(x)}{1 - \\tan^2(x)}"}\)</li>
				</SubList></li>
			</ul>
		</div>
		<div className="ownExplanation" style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Half angle identities:<SubList>
					<li>\(\sin^2(x/2) = \frac{"{1 - \\cos(x)}{2}"}\)</li>
					<li>\(\cos^2(x/2) = \frac{"{1 + \\cos(x)}{2}"}\)</li>
					<li>\(\tan^2(x/2) = \frac{"{1- \\cos(x)}{1 + \\cos(x)}"}\)</li>
				</SubList></li>
				<li>Product to sum identities:<SubList>
					<li>\(\sin(x) \sin(y) = (\cos(x-y) - \cos(x+y))/2\)</li>
					<li>\(\cos(x) \cos(y) = (\cos(x-y) + \cos(x+y))/2\)</li>
					<li>\(\sin(x) \cos(y) = (\sin(x+y) + \sin(x-y))/2\)</li>
				</SubList></li>
				<li>Sum to product identities:<SubList>
					<li>\(\sin(x) + \sin(y) = 2 \sin(\frac{"{x+y}{2}"}) \cos(\frac{"{x-y}{2}"})\)</li>
					<li>\(\sin(x) - \sin(y) = 2 \cos(\frac{"{x+y}{2}"}) \sin(\frac{"{x-y}{2}"})\)</li>
					<li>\(\cos(x) + \cos(y) = 2 \cos(\frac{"{x+y}{2}"}) \cos(\frac{"{x-y}{2}"})\)</li>
					<li>\(\cos(x) - \cos(y) = -2 \sin(\frac{"{x+y}{2}"}) \sin(\frac{"{x-y}{2}"})\)</li>
				</SubList></li>
			</ul>
		</div>
	</div>
</>