import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Calculus Notes";

export const sourcesColor = {36: "rgb(80, 130, 160)", 65: "rgb(110, 110, 140)"};
export const content = <>

	<h1>Calculus Notes</h1>
  {getSourcesOL(sourcesColor)}

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
				<li>Infinite Limits:<SubList>
					<TableLI>
						<caption>Intuitive Definition of an Infinite Limit</caption>
						<tbody>
							<tr><th colSpan={2} scope={"col"}>From The Left Side</th></tr>
							<tr><td>
								We write \[{"\\lim_{x \\to a^-} f(x) = \\infty "}\] to mean if the values of \(f(x)\) increase without bound as the values of \(x\) (where \(x \lt a\)) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) from the left is positive infinity.
								<br/>
								Similarly, \[{"\\lim_{x \\to a^-} f(x) = -\\infty "}\] means that if the values of \(f(x)\) decrease without bound as the values of \(x\) (where \(x \lt a\)) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) from the left is negative infinity.
							</td></tr>
							<tr><th colSpan={2} scope={"col"}>From The Right Side</th></tr>
							<tr><td>
								We write \[{"\\lim_{x \\to a^+} f(x) = \\infty "}\] to mean if the values of \(f(x)\) increase without bound as the values of \(x\) (where \(x \gt a\)) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) from the right is positive infinity.
								<br/>
								Similarly, \[{"\\lim_{x \\to a^+} f(x) = -\\infty "}\] means that if the values of \(f(x)\) decrease without bound as the values of \(x\) (where \(x \gt a\)) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) from the right is negative infinity.
							</td></tr>
							<tr><th colSpan={2} scope={"col"}>Two-Sided Limits</th></tr>
							<tr><td>
								We write \[{"\\lim_{x \\to a} f(x) = \\infty "}\] to mean if the values of \(f(x)\) increase without bound as the values of \(x\) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) is positive infinity.
								<br/>
								Similarly, \[{"\\lim_{x \\to a} f(x) = -\\infty "}\] means that if the values of \(f(x)\) decrease without bound as the values of \(x\) approach the number \(a\), then we say that the limit as \(x\) approaches \(a\) is negative infinity.
							</td></tr>
						</tbody>
					</TableLI>
					<li>The line \(x = a\) is a <b>vertical asymptote</b> of \(f(x)\) if \({"\\lim_{x \\to a^-} f(x) = ±∞"}\), \({"\\lim_{x \\to a^+} f(x) = ±∞"}\) or \({"\\lim_{x \\to a} f(x) =±∞"}\).</li>
					<li>The line \({"y = L"}\) is called a <b>horizontal asymptote</b> of the curve \({"y=f(x)"}\) if either \({"\\lim_{x \\to \\infty} f(x) = L"}\) or \({"\\lim_{x \\to -\\infty} f(x) = L"}\).</li>
				</SubList></li>
				<li>Limit Laws (<a href='https://www.deriveit.net/calculus/limits/product'>proof here</a>):<SubList>
						<li>\({"\\lim_{x \\to a} [f(x)+g(x)] = \\lim_{x \\to a}f(x) + \\lim_{x \\to a}g(x)"}\)</li>
						<li>\({"\\lim_{x \\to a} [f(x)g(x)] = \\lim_{x \\to a}f(x) \\cdot \\lim_{x \\to a}g(x)"}\)</li>
						<li>\({"\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a}f(x)}{\\lim_{x \\to a}g(x)} \\text{ if } \\lim_{x \\to a}g(x) \\ne 0"}\)</li>
						<li>\({"\\lim_{x \\to a} c = c"}\)</li>
						<li>\({"\\lim_{x \\to a} x = a"}\)</li>
						<li>\({"\\lim_{x \\to a} [f(x)]^n = [\\lim_{x \\to a} f(x)]^n"}\)</li>
						<li>\({"\\lim_{x \\to a} f(g(x)) = f(\\lim_{x \\to a} g(x))"}\) if \(f\) is continous there.</li>
						<li>\({"\\lim_{x \\to a}\\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}"}\):<SubList>
							<li>Let \({"\\lim_{x \\to a} f(x) = L"}\).</li>
							<li>\({"\\lim_{x \\to a}\\sqrt[n]{f(x)} = \\sqrt[n]{L}"}\) for all \(L\) if \(n\) is odd.</li>
							<li>\({"\\lim_{x \\to a}\\sqrt[n]{f(x)} = \\sqrt[n]{L}"}\) for \(L≥0\) if \(n\) is even.</li>
						</SubList></li>
				</SubList></li>
				<TableLI>
					<caption>Squeeze Theorem</caption>
					<tbody><tr><td>If \({"f(x) \\le g(x) \\le h(x)"}\) when \({"x"}\) is near \({"a"}\) (except possibly at \({"a"}\)) and \[{"\\lim_{x \\to a} f(x) = \\lim_{x \\to a} h(x) = L"}\]then \({"\\lim_{x \\to a} g(x) = L"}\).</td></tr></tbody>
				</TableLI>
			</ul>
		</div>
		<div data-source={36} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>\({"\\lim_{\\theta \\to 0} \\frac{\\sin(\\theta))}{\\theta} = 1"}\)</li>
				<li>\({"\\lim_{\\theta \\to 0} \\frac{1-\\cos(\\theta))}{\\theta} = 0"}\)</li>
				<li><b>Continuity:</b><SubList>
						<li>A function \({"f"}\) is <b>continuous</b> at \({"a"}\) if \({"\\lim_{x \\to a} f(x)"}\) exists, \(f(a)\) is defined and \({"\\lim_{x \\to a} f(x) = f(a)"}\).</li>
						<li>A function \({"f"}\) is <b>continuous on an interval</b> if it is continuous at every number in the interval.</li>
						<li>A function \({"f"}\) is <b>continuous from the right</b> at \({"a"}\) if \({"\\lim_{x \\to a^+} f(x) = f(a)"}\).</li>
						<li>A function \({"f"}\) is <b>continuous from the left</b> at \({"a"}\) if \({"\\lim_{x \\to a^-} f(x) = f(a)"}\).</li>
						<li><b>Intermediate Value Theorem:</b> Suppose that \({"f"}\) is continuous on the close interval \({"[a, b]"}\) and let \({"N"}\) be any number between \({"f(a)"}\) and \({"f(b)"}\), where \({"f(a) \\ne f(b)"}\). Then there exists a number \({"c"}\) in \({"(a, b)"}\) such that \({"f(c)=N"}\).</li>
				</SubList></li>
				<li>Types of Discontinuities:<SubList>
					<li>\(f\) has a <b>removable discontinuity</b> at \(a\) if \(\lim_{"{x→a}"} f(x)\) exists.</li>
					<li>\(f\) has a <b>jump discontinuity</b> at \(a\) if \(\lim_{"{x → a^-}"} f(x)\) and \(\lim_{"{x → a^+}"} f(x)\) both exist, but \(\lim_{"{x → a^-}"} f(x) \ne \lim_{"{x → a^+}"} f(x)\). (Note: When we state that the one sided limit exists, we mean that it's real-valued and not infinity.)</li>
					<li>\(f\) has an <b>infinite discontinuity</b> at \(a\) if \(\lim_{"{x → a^-}"} f(x) = ±∞\) or \(\lim_{"{x → a^+}"} f(x) = ±∞\).</li>
				</SubList></li>
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
						<caption>Definition Of A Right-Hand Limit</caption>
						<tbody>
								<tr><td>
										\[{"\\lim_{x \\to a^+} f(x) = L"}\] if for every number \({"\\epsilon \\gt 0"}\) there is a number \({"\\delta \\gt 0"}\) such that if \(0 \lt x-a \lt \delta \) then \(|f(x)-L|\lt \epsilon\).
								</td></tr>
						</tbody>
						</TableLI>
						<TableLI>
						<caption>Definition Of A Left-Hand Limit</caption>
						<tbody>
							<tr><td>
								\[{"\\lim_{x \\to a^-} f(x) = L"}\] if for every number \({"\\epsilon \\gt 0"}\) there is a number \({"\\delta \\gt 0"}\) such that if \(-\delta \lt x-a \lt 0\) then \(|f(x)-L|\lt \epsilon\).
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
				<li><b>Chain Rule:</b><SubList>
					<li>Let \(f\) and \(g\) be functions. For all \(x\) in the domain of \(g\) for which \(g\) is differentiable at \(x\) and \(f\) is differentiable at \(g(x)\), the derivative of the composite function \(h(x)=(f∘g)(x)=f(g(x))\) is given by:</li>
					<li class={"mathStuff"}>$$h'(x)=f'(g(x))g'(x)$$</li>
					<li>Alternatively, if \(y\) is a function of \(u\), and \(u\) is a function of \(x\), then:</li>
					<li class={"mathStuff"}>$$ {"\\frac{dy}{dx} = \\frac{dy}{du} \\frac{du}{dx}"} $$</li>
				</SubList></li>
			</ul>
			<ul className="ownExplanation">
				<li>Derivatives of inverse functions:<SubList>
					<li>If \(f(x)\) is both invertible and differentiable. Let \(g\) be the inverse of \(f\):</li>
					<MathStuff>\[ g'(x) = \frac{"{1}{f'(g(x))}"} \]</MathStuff>
					<li>\(\frac{"{d}{dx} \\arcsin(x) = \\frac{1}{| \\sqrt{1-x^2}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\arccos(x) = - \\frac{1}{| \\sqrt{1-x^2}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arcsec}(x) = \\frac{1}{|x| |\\sqrt{x^2-1}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arccosec}(x) = - \\frac{1}{|x| |\\sqrt{x^2-1}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\arctan(x) = \\frac{1}{x^2+1}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arccot}(x)= -\\frac{1}{x^2+1}"}\)</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={36} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Implicit Differentiation:<SubList>
					<li>In most discussions of math, if the dependent variable \(y\) is a function of the independent variable \(x\), we express \(y\) in terms of \(x\).</li>
					<li><b>Implicit differentiation</b> allows us to find slopes of tangents to curves that are clearly not functions (they fail the vertical line test).</li>
					<li>An equation may define many different functions implicitly. For example:</li>
					<MathStuff>$$y={`\\begin{cases} \\sqrt{25 - x^2} \\\\ -\\sqrt{25 - x^2} \\end{cases}`}$$</MathStuff>
					<li>To perform implicit differentiation on an equation that defines a function \(y\) implicitly in terms of a variable \(x\), use the following steps:<SubList numbered>
						<li>Take the derivative of both sides of the equation.</li>
						<li>Rewrite the equation so that all terms containing \({"\\frac{dy}{dx}"}\) are on the left and all terms that do not contain \({"\\frac{dy}{dx}"}\) are on the right.</li>
						<li>Factor out \({"\\frac{dy}{dx}"}\) on the left.</li>
						<li>Solve for \({"\\frac{dy}{dx}"}\) by dividing both sides of the equation by an appropriate algebraic expression.</li>
					</SubList></li>
				</SubList></li>
				<li>Derivatives of Exponential and Logarithmic Functions:<SubList>
					<li>The function \(E(x) = e^x\) is called the <b>natural exponential function</b>. Its inverse, \(L(x)= \log_e (x) = \ln x\) is called the <b>natural logarithmic function</b>.</li>
					<li>The line \(y=x+1\) is tangent to the graph of \(E(x)=e^x\) at \(x=0\). Also, \(E'(x) = e^x\).</li>
					<li>Derivative of \(b^x\) is \(b^x \ln(b)\).</li>
					<li>If \(y= \log_b x\), then:</li>
					<MathStuff>\[ {"\\frac{dy}{dx} = \\frac{1}{x \\ln b}"} \]</MathStuff>
				</SubList></li>
				<li>Related-Rates Problems:<SubList>
					<li>In many real-world applications, related quantities are changing with respect to time.</li>
					<TableLI>
						<caption>Example</caption>
						<tbody>
							<tr><td>
								<b><u>Question:</u></b>
								<br/>
								A spherical balloon is being filled with air at the constant rate of  2 cm<sup>3</sup>/sec How fast is the radius increasing when the radius is 3cm?
								<br/>
								<b><u>Answer:</u></b>
								<br/>
								The volume of a sphere of radius \(r\) centimeters at time \(t\) is:
								\[V(t) = {"\\frac{4}{3} \\pi [r(t)^3]"}\]
								The volume of a sphere of radius \(r\) centimeters is gives:
								\[V'(t) = {"4 \\pi [r(t)^2] r'(t) "}\]
								The balloon is being filled with air at the constant rate of 2 cm<sup>3</sup>/sec:
								\[2 = {"4 \\pi [r(t)^2] r'(t) "}\]
								which implies:
								\[{"r'(t) = \\frac{1}{2 \\pi [r(t)^2]}"}\]
								When the radius \(r=3\)cm:
								\[{"r'(t) = \\frac{1}{18 \\pi} \\text{ cm/sec}"}\]
							</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Linear Approximation of a Function at a Point:<SubList>
					<li>Consider a function \(f\) that is differentiable at a point \(x=a\). Recall that the tangent line to the graph of \(f\) at \(a\) is given by the equation:</li>
					<MathStuff>$$ y = f(a) + f'(a)(x-a) $$</MathStuff>
					<li>For a differentiable function \(f\), the equation of the tangent line to \(f\) at \(x=a\) can be used to approximate \(f(x)\) for \(x\) near \(a\).</li>
					<MathStuff>$$ f(x) \approx f(a) + f'(a)(x-a) {"\\text{ for } x \\text{ near } a "} $$</MathStuff>
					<li>We call the linear function, \(L(x) = f(a) + f'(a)(x-a)\), the <b>linear approximation</b>, or <b>tangent line approximation</b>, of \(f\) at \(x=a\).</li>
					<li><b>Differentials</b> provide us with a way of estimating the amount a function changes as a result of a small change in input values.</li>
					<li>Suppose \(y=f(x)\) is a differentiable function. Let \(dx\) be an independent variable that can be assigned any nonzero real number, and define the dependent variable \(dy\) by \(dy=f'(x)dx\).</li>
					<li>It is important to notice that \(dy\) is a function of both \(x\) and \(dx\). The expressions \(dy\) and \(dx\) are called <b>differentials</b>.</li>
					<TableLI>
						<caption>Example</caption>
						<tbody>
							<tr><td>
								<b><u>Question:</u></b>
								<br/>
								For each of the following functions, find \(dy\) and evaluate when \(x=3\) and \(dx=0.1\).
								<br/>
								<b><u>Answer:</u></b>
								<br/>
								\[{"\\displaylines{f(x) = x^2 + 2x \\\\ f'(x) = 2x+2 \\\\ dy = (2x+2)dx }"}\]
								When \(x=3\) and \(dx=0.1\),
								\[dy=(2⋅3+2)(0.1)=0.8\]
							</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>Propagated error:<SubList>
					<li>Consider a function \(f\) that is differentiable at point \(a\). Suppose the input \(x\) changes by a small amount. We are interested in how much the output \(y\) changes. If \(x\) changes from \(a\) to \(a+dx\), then the change in \(x\) is \(dx\), and the change in \(y\) is given by:</li>
					<MathStuff>$$ \Delta y=f(a+dx) - f(a) $$</MathStuff>
					<li>Instead of calculating the exact change in \(y\), however, it is often easier to approximate the change in \(y\) by using a linear approximation.</li>
					<MathStuff>$$ {"\\displaylines{f(a+dx) ≈ L(a+dx) = f(a)+f'(a)(a+dx-a) \\\\ f(a+dx)-f(a) ≈ L(a+dx)-f(a)=f'(a)dx \\\\ f(a+dx)-f(a) ≈ f'(a)dx}"} $$</MathStuff>
					<li>Consider a function \(f\) with an input that is a measured quantity. Suppose the exact value of the measured quantity is \(a\), but the measured value is \(a+dx\). We say the measurement error is \(dx\). As a result, an error occurs in the calculated quantity \(f(x)\). This type of error is known as a <b>propagated error</b> and is given by:</li>
					<MathStuff>$$ \Delta y=f(a+dx) - f(a)$$</MathStuff>
					<li>Since all measurements are prone to some degree of error, we do not know the exact value of a measured quantity, so we cannot calculate the propagated error exactly. However, given an estimate of the accuracy of a measurement, we can use differentials to approximate the propagated error:</li>
					<MathStuff>$$ \Delta y ≈ dy = f'(a)dx $$</MathStuff>
					<li>Unfortunately, we do not know the exact value \(a\). However, we can use the measured value \(a+dx\):</li>
					<MathStuff>$$ \Delta y ≈ dy ≈ f'(a+dx)dx $$</MathStuff>
					<TableLI>
						<caption>Example</caption>
						<tbody>
							<tr><td>
								<b><u>Question:</u></b>
								<br/>
								Suppose the side length of a cube is measured to be 5 cm with an accuracy of 0.1 cm.
								<ul>
									<li>Use differentials to estimate the error in the computed volume of the cube.</li>
									<li>Compare the estimated error with the actual potential error.</li>
								</ul>
								<br/>
								<b><u>Answer:</u></b>
								<br/>
								The measurement of the side length is accurate to within ±0.1 cm. Therefore:
								\[-0.1 ≤ dx ≤0.1\]
								The volume of a cube is given by \(V=x^3\), which leads to:
								\[dV=3x^2 dx\]
								Using the measured side length of 5 cm, we can estimate that:
								\[{"\\displaylines{-3(5)2(0.1)≤ dV ≤3(5)2(0.1) \\\\ -7.5≤dV≤7.5}"}\]
								If the side length is actually 4.9 cm, then the volume of the cube is 117.649 cm<sup>3</sup>. If the side length is actually 5.1 cm, then the volume of the cube is 132.651 cm<sup>3</sup>.
								<br/>
								The error in the computed volume is:
								\[{"\\displaylines{117.649- 5^3 ≤ \\Delta V ≤132.651- 5^3 \\\\ -7.351≤ \\Delta V≤7.651}"}\]
								We see the estimated error \(dV\) is relatively close to the actual potential error in the computed volume.
							</td></tr>
						</tbody>
					</TableLI>
					<li>Given an absolute error \(\Delta q\) for a particular quantity, we define the relative error as  \({"\\frac{\\Delta q}{q}"}\), where \(q\) is the actual value of the quantity.</li>
				</SubList></li>
				<li>Maxima and Minima:<SubList>
					<li>Let \(f\) be a function defined over an interval \(I\) and let \(c∈I\). We say \(f\) has an <b>absolute maximum</b> on \(I\) at \(c\) if \(f(c)≥f(x)\) for all \(x∈I\).</li>
					<li>We say \(f\) has an <b>absolute minimum</b> on \(I\) at \(c\) if \(f(c)≤f(x)\) for all \(x∈I\).</li>
					<li>If \(f\) has an absolute maximum or an absolute minimum on \(I\) at \(c\), we say \(f\) has an absolute extremum on \(I\) at \(c\).</li>
					<li><b><u>Extreme Value Theorem:</u></b> If \(f\) is a continuous function over the closed, bounded interval \([a,b]\), then there is a point in \([a,b]\) at which \(f\) has an absolute maximum over \([a,b]\) and there is a point in \([a,b]\) at which \(f\) has an absolute minimum over \([a,b]\).</li>
					<li>A function \(f\) has a <b>local maximum</b> at \(c\) if there exists an open interval \(I\) containing \(c\) such that \(I\) is contained in the domain of \(f\) and \(f(c)≥f(x)\) for all \(x∈I\).</li>
					<li>A function \(f\) has a <b>local minimum</b> at \(c\) if there exists an open interval \(I\) containing \(c\) such that \(I\) is contained in the domain of \(f\) and \(f(c)≤f(x)\) for all \(x∈I\).</li>
					<li><figure>
						<ImgComp src={require("./calculus_pics/1.png")} width="60%" />
						<figcaption>There is a local minimum at \(x=1\) and a local maximum at \(x=0\) and \(x=2\). The local maximum at \(x=2\) is also the absolute maximum.</figcaption>
					</figure></li>
					<li>A function \(f\) has a <b>local extremum</b> at \(c\) if \(f\) has a local maximum or a local minimum at \(c\).</li>
					<li>Let \(c\) be an interior point in the domain of \(f\). We say that \(c\) is a critical number of \(f\) if \(f'(c)=0\) or \(f'(c)\) is undefined.</li>
					<li><b>Fermat's Theorem:</b> If \(f\) has a local extremum at a point \(c\) and \(f\) is differentiable at \(c\) then \(f'(c)=0\).</li>
				</SubList></li>
				<li><b>The Mean Value Theorem:</b><SubList>
					<li><b>Rolle's Theorem:</b> Let \(f\) be a continuous function over the closed interval \([a,b]\) and differentiable over the open interval \((a,b)\) such that \(f(a)=f(b)\). There then exists at least one \(c∈(a,b)\) such that \(f'(c)=0\).</li>
					<li><b>Mean Value Theorem:</b> Let \(f\) be continuous over the closed interval \([a,b]\) and differentiable over the open interval \((a,b)\). Then, there exists at least one point \(c∈(a,b)\) such that:</li>
					<MathStuff>$${" f'(c) = \\frac{f(b) - f(a)}{b-a} "}$$</MathStuff>
					<li><ImgComp src={require("./calculus_pics/2.jfif")} width="70%" /></li>
					<li><u>Corollary 1:</u> Let \(f\) be differentiable over an interval \(I\). If \(f'(x)=0\) for all \(x∈I\), then \(f(x)= \text{"{ some constant }"}\) for all \(x∈I\).</li>
					<li><u>Corollary 2:</u> If \(f\) and \(g\) are differentiable over an interval \(I\) and \(f'(x)=g'(x)\) for all \(x∈I\), then \(f(x)=g(x)+C\) for some constant \(C\).</li>
					<li><u>Corollary 3:</u> Let \(f\) be continuous over the closed interval \([a,b]\) and differentiable over the open interval \((a,b)\):<SubList opened>
						<li>If \(f'(x) \gt 0\) for all \(x∈(a,b)\), then \(f\) is an increasing function over \([a,b]\).</li>
						<li>If \(f′(x) \gt 0\) for all \(x∈(a,b)\), then \(f\) is a decreasing function over \([a,b]\).</li>
					</SubList></li>
				</SubList></li>
				<li>Derivative Tests:<SubList>
					<li><ImgComp src={require("./calculus_pics/3.jfif")} width="90%" /></li>
					<li><b><u>First Derivative Test:</u></b> If \(f\) is differentiable over \(I\), except possibly at point \(c\), then \(f(c)\) satisfies one of the following descriptions:<SubList opened>
						<li>If \(f'\) changes sign from positive when \(x \lt c\) to negative when \(x \gt c\), then \(f(c)\) is a local maximum of \(f\).</li>
						<li>If \(f'\) changes sign from negative when \(x \lt c\) to positive when\(x \gt c\), then \(f(c)\) is a local minimum of \(f\).</li>
						<li>If \(f'\) has the same sign for \(x \lt c\) and \(x \gt c\), then \(f(c)\) is neither a local maximum nor a local minimum of \(f\).</li>
					</SubList></li>
					<li>Let \(f\) be a function that is differentiable over an open interval \(I\). If \(f'\) is increasing over \(I\), we say \(f\) is <b>concave up</b> over \(I\). If \(f'\) is decreasing over \(I\), we say \(f\) is <b>concave down</b> over \(I\).</li>
					<li><ImgComp src={require("./calculus_pics/4.jfif")} width="80%" /></li>
					<li><b>Test for Concavity</b> Let \(f\) be a function that is twice differentiable over an interval \(I\):<SubList opened>
						<li>If \(f''(x) \gt 0\) for all \(x∈I\), then \(f\) is concave up over \(I\).</li>
						<li>If \(f''(x)\lt 0\) for all \(x∈I\), then \(f\) is concave down over \(I\).</li>
					</SubList></li>					
					<li>If \(f\) is continuous at \(a\) and \(f\) changes concavity at \(a\), the point \((a,f(a))\) is an inflection point of \(f\).</li>
					<li><ImgComp src={require("./calculus_pics/5.jfif")} width="80%" /></li>
					<li><b><u>Second Derivative Test:</u></b> Suppose \(f'(c)=0\) and \(f''\) is continuous over an interval containing \(c\):<SubList opened>
						<li>If \(f''(c) \gt 0\), then \(f\) has a local minimum at \(c\).</li>
						<li>If \(f''(c) \lt 0\), then \(f\) has a local maximum at \(c\).</li>
						<li>If \(f''(c)=0\), then the test is inconclusive.</li>
					</SubList></li>
				</SubList></li>
				<li>Limits at Infinity and Asymptotes:<SubList>
					<li>If \(\lim_{"{x \\to \\infty} f(x) = L"}\) or \(\lim_{"{x \\to -\\infty} f(x) = L"}\), then the line \(y=L\) is a horizontal asymptote of \(f\).</li>
					<TableLI>
						<caption>Definition of limit at infinity</caption>
						<tbody>
							<tr><td>
								We say a function \(f\) has a limit at infinity, if there exists a real number \(L\) such that for all \(ε \gt 0\), there exists \(N \gt 0\) such that \[|f(x) - L | = ε\] for all \(x \gt N\).<br/>
								We say a function \(f\) has a limit at negative infinity, if there exists a real number \(L\) such that for all \(ε \gt 0\), there exists \(N \lt 0\) such that \[|f(x) - L | = ε\] for all \(x \lt N\).
							</td></tr>
						</tbody>
					</TableLI>
					<TableLI>
						<caption>Definition of an infinite limit at infinity</caption>
						<tbody>
							<tr><td>
								We say a function \(f\) has an infinite limit at infinity, if for all \(M \gt 0\), there exists \(N \gt 0\) such that \[f(x) \gt M\] for all \(x \gt N\).<br/>
								We say a function \(f\) has a negative infinite limit at infinity, if for all \(M \lt 0\), there exists \(N \gt 0\) such that \[f(x) \lt M\] for all \(x \gt N\).
							</td></tr>
						</tbody>
					</TableLI>
					<li>The behavior of a function as  \(x→±∞\) is called the function's <b>end behavior</b>:<SubList>
						<li>The function \(f(x)\) approaches a horizontal asymptote \(y=L\).</li>
						<li>The function \(f(x)→∞\) or \(f(x)→−∞\).</li>
						<li>The function does not approach a finite limit, nor does it approach \(∞\) or \(−∞\). In this case, the function may have some oscillatory behavior.</li>
					</SubList></li>
					<li>End behavior for polynomial functions:<SubList>
						<li>Consider a polynomial function:</li>
						<MathStuff>$$f(x)= a_n x^n+ a_{"{n-1}"} x^{"{n-1}"} + \ldots + a_1 x + a_0 $$</MathStuff>
						<li>of degree \(n≥1\) so that \(a_n ≠0\). Factoring, we see that:</li>
						<MathStuff>$$f(x)= a_n x^n \left( 1 + \frac{"{a_{n-1}}{a_n x}"} + \ldots + \frac{"{a_1}{a_n x^{n-1}}"} + \frac{"{a_0}{a_n x^n}"} \right) $$</MathStuff>
						<li>As \(x→±∞\), all the terms inside the parentheses approach zero except the first term. We conclude that:</li>
						<MathStuff>$$\lim_{"{x \\to ±\\infty}"} f(x) = \lim_{"{x \\to ±\\infty}"} a_n x^n$$</MathStuff>
					</SubList></li>
					<li>End behavior for rational functions:<SubList>
						<li>To evaluate the limits at infinity for a rational function, we need to determine which term in the overall expression dominates the behavior of the function at large values of \(x\).</li>
						<li>Consider a rational function:</li>
						<MathStuff>$$f(x) = \frac{"{a_n x^n + a_{n-1} x^{n-1} + \\ldots a_1x + a_0}{b_m x^m + b_{m-1} x^{m-1} + \\ldots b_1x + b_0}"}$$</MathStuff>
						<TableLI>
							<caption>Rules</caption>
							<tbody>
								<tr><td>If the degree of the numerator is the same as the degree of the denominator \((n=m)\), then there is a horizontal asymptote of \(y= \frac{"{a_n}{b_m}"}\).<br/><u>Ex:</u> If \(f(x) = \frac{"{3x-1}{2x+5}"}\), then \(\lim_{"{x \\to ±\\infty}"} f(x) = \frac{"{3}{2}"}\).</td></tr>
								<tr><td>If the degree of the numerator is less then the degree of the denominator, then there is a horizontal asymptote of \(y=0\).<br/><u>Ex:</u> If \(f(x) = \frac{"{3x^2+2x}{4x^3-5x+7}"}\), then \(\lim_{"{x \\to ±\\infty}"} f(x) = 0\), since the largest power of \(x\) is \(x^3\) in the denominator.</td></tr>
								<tr><td>If the degree of the numerator is greater then the degree of the denominator, then the limits at infinity are either positive or negative infinity, depending on the signs of the leading terms.<br/><u>Ex:</u> If \(f(x) = \frac{"{3x^2+4x}{x+2}"}\), then \(\lim_{"{x \\to ±\\infty}"} f(x) = {"\\infty"}\).<br/>In addition, using long division, the function can be rewritten as: \[f(x) = \frac{"{p(x)}{q(x)}"} = g(x) + \frac{"{r(x)}{q(x)}"} \] Since the degree of \(r(x)\) is less than the degree of \(q(x)\), \[\lim_{"{x→±∞}"} \frac{"{r(x)}{q(x)}"}=0\] Therefore, the values of \([f(x) - g(x)]\) approach zero as \(x→±∞\). If \(g(x)\) is linear then, it would be an asymptote (not horizontal but it would be called <b>oblique asymptote</b>). \(g(x)\) would be linear if the degree of \(p(x)\) is exactly one more than the degree of \(q(x)\).</td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
				</SubList></li>
				<li><b>L'Hôpital's Rule:</b><SubList>
					<li>Suppose \(f\) and \(g\) are differentiable functions over an open interval containing \(a\), except possibly at \(a\). If \(\lim_{"{x→a}"}f(x)=0\) and \(\lim_{"{x→a}"}g(x)=0\), then:</li>
					<MathStuff>$$ \lim_{"{x→a}"} \frac{"{f(x)}{g(x)}"} = \lim_{"{x→a}"} \frac{"{f'(x)}{g'(x)}"} $$</MathStuff>
					<li>Assuming the limit on the right exists or is ∞ or −∞.</li>
					<li>The result also holds if we are considering one-sided limits, or if \(a=∞\) and \(-∞\).</li>
					<li>If \(\lim_{"{x→a}"}f(x)=0\) and \(\lim_{"{x→a}"}g(x)=0\), then \(\lim_{"{x→a}"}\frac{"{f(x)}{g(x)}"}\) is one of the <b>indeterminate forms</b>, of type \(\frac{"{0}{0}"}\).</li>
					<li>It's is considered an indeterminate form because we cannot determine the exact behavior of \(\frac{"{f(x)}{g(x)}"}\) as \(x→a\) without further analysis.</li>
					<li>Other indeterminate forms:<SubList opened>
						<li>\(\frac{"{\\infty}{\\infty}"}\)</li>
						<li>\(0 \cdot \infty \)</li>
						<li>\(\infty - \infty \)</li>
						<li>\(1^\infty \)</li>
						<li>\(0^0\)</li>
						<li>\(\infty ^0\)</li>
					</SubList></li>
					<li>Suppose \(f\) and \(g\) are differentiable functions over an open interval containing \(a\), except possibly at \(a\). If \(\lim_{"{x→a}"}f(x)= \infty \) (or -\(\infty\)) and \(\lim_{"{x→a}"}g(x)= \infty\) (or -\(\infty\)), then:</li>
					<MathStuff>$$ \lim_{"{x→a}"} \frac{"{f(x)}{g(x)}"} = \lim_{"{x→a}"} \frac{"{f'(x)}{g'(x)}"} $$</MathStuff>
					<li>Assuming the limit on the right exists or is ∞ or −∞.</li>
					<li>The result also holds if the limit is infinite, if \(a=∞\) or \(−∞\), or the limit is one-sided.</li>
					<TableLI>
						<caption>Indeterminate Form of Type \(0⋅∞\)</caption>
						<tbody>
							<tr><td>
								<u><b>Task:</b></u> Evaluate \(\lim_{"{x→0^+}"}x \ln x\).<br/>
								<b><u>Solution:</u></b> Rewrite the function \(x \ln x\) as a quotient:
								\[ x \ln x = \frac{"{\\ln x}{1/x}"} \]
								We can apply L'Hôpital's rule:
								\[ \lim_{"{x→0^+}"} \frac{"{\\ln x}{1/x}"} = \lim_{"{x→0^+}"} \frac{"{1/x}{-1/x^2}"} = \lim_{"{x→0^+}"} -x = 0 \]
							</td></tr>
						</tbody>
					</TableLI>
					<TableLI>
						<caption>Indeterminate Form of Type \(∞ - ∞\)</caption>
						<tbody>
							<tr><td>
								<u><b>Task:</b></u> Evaluate \[ \lim_{"{x→0^+}"} \left( \frac{"{1}{x^2}"} - \frac{"{1}{\\tan x}"} \right) \]
								<b><u>Solution:</u></b> Rewrite the function as a quotient:
								\[ \frac{"{1}{x^2}"} - \frac{"{1}{\\tan x}"} = \frac{"{(\\tan x) - x^2}{x^2 \\tan x}"}\]
								We can apply L'Hôpital's rule:
								\[ \lim_{"{x→0^+}"} \frac{"{(\\tan x) - x^2}{x^2 \\tan x}"} = \lim_{"{x→0^+}"} \frac{"{(\\sec ^2 x) - 2x}{x^2 \\sec ^2 x + 2x \\tan x}"} \]
								As \(x→0^+\), \((\sec^2 x)-2x → 1\) and \(x^2 \sec^2 x + 2x \tan x→0\). Therefore:
								\[ \lim_{"{x→0^+}"} \frac{"{(\\sec ^2 x) - 2x}{x^2 \\sec ^2 x + 2x \\tan x}"} = \infty \]
							</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li>L'Hôpital's Rule with exponents:<SubList>
					<li>Since L'Hôpital's rule applies to quotients, we use the natural logarithm function and its properties to reduce a problem involving exponents to a problem involving a quotient.</li>
					<li>If \(y = f(x)^{"{g(x)}"}\), then:</li>
					<MathStuff> $$ \begin{"{align}"}
						\ln y &= \ln \left( f(x)^{"{g(x)}"} \right) = g(x) \ln \left( f(x) \right) \\
						\lim_{"{x→a}"} \left[ \ln y \right] &= \lim_{"{x→a}"} \left[ \ln \left( f(x)^{"{g(x)}"} \right) = g(x) \ln \left( f(x) \right) \right]
					\end{"{align}"} $$</MathStuff>
					<li>Suppose \(\lim_{"{x→a}"} g(x) \ln(f(x))=L\):</li>
					<MathStuff>$$ \begin{"{align}"}
						\lim_{"{x→a}"} \left[ \ln y \right] &= L \\
						\ln \left( \lim_{"{x→a}"} y \right) &= L \\
						\lim_{"{x→a}"} y &= e^L 
					\end{"{align}"} $$</MathStuff>
				</SubList></li>
				<li>Newton's method:<SubList>
					<li><b>Newton's method</b> is a way to approximate the solutions of \(f(x)=0\).</li>
					<li>Let's start by sketching a graph of \(f\) and make a guess of the \(x\) value where \(f(x)=0\), we will call this \(x_0\).</li>
					<li>We then draw a tangent line to \(f\) at \(x_0\).</li>
					<li>If \(f'(x_0)≠0\), this tangent line intersects the x-axis at some point \((x_1,0)\).</li>
					<li>Now let \(x_1\) be the next approximation to the actual root. Typically, \(x_1\) is closer than \(x_0\) to an actual root.</li>
					<li>Next we draw the tangent line to \(f\) at \(x_1\). If \(f'(x_1)≠0\), this tangent line also intersects the x-axis, producing another approximation, \(x_2\).</li>
					<li>We continue in this way, deriving a list of approximations: \(x0,x1,x2, \ldots\). Typically, the numbers \(x0,x1,x2, \ldots\) quickly approach an actual root \(x*\).</li>
					<li><ImgComp src={require("./calculus_pics/6.jfif")} style={{width:"80%"}}/></li>
					<li>The equation of this tangent line at \(x_0\) is given by:</li>
					<MathStuff>$$ y=f(x_0) + f'(x_0)(x-x_0) $$</MathStuff>
					<li>Therefore, \(x_1\) must satisfy:</li>
					<MathStuff>$$ f(x_0) + f'(x_0)(x_1 - x_0) =0 $$</MathStuff>
					<li>We conclude that:</li>
					<MathStuff>$$ x_1 = x_0 - \frac{"{f(x_0)}{f'(x_0)}"} $$</MathStuff>
					<li>Similarly, \(x_2\) satisfies:</li>
					<MathStuff>$$ x_2 = x_1 - \frac{"{f(x_1)}{f'(x_1)}"} $$</MathStuff>
					<li>Failures of Newton's Method:<SubList numbered>
						<li>At one of the approximations \(x_n\), the derivative \(f'\) is zero at \(x_n\), but \(f(x_n)≠0\).</li>
						<li>The approximations \(x_0,x_1,x_2,\ldots\) may approach a different root. If the function \(f\) has more than one root, it is possible that our approximations do not approach the one for which we are looking, but approach a different root.</li>
						<li>The approximations may fail to approach a root entirely. There may be a function and an initial guess \(x_0\) such that the successive approximations never approach a root because the successive approximations continue to alternate back and forth between two values.</li>
					</SubList></li>
				</SubList></li>
			</ul>
		</div>  
	</div>

	<h2>Integration</h2>
	<div className="content">
		<div data-source={65} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
			<ul >
				<li>Approximating Areas:<SubList>
					<li>Let \(f(x)\) be a continuous, nonnegative function defined on the closed interval \([a,b]\). We want to approximate the area \(A\) bounded by \(f(x)\) above, the x-axis below, the line \(x=a\) on the left, and the line \(x=b\) on the right.</li>
					<li><ImgComp src={require("./calculus_pics/7.jfif")}/></li>
					<li>We begin by dividing the interval \([a,b]\) into \(n\) subintervals of equal width, \({"\\frac{b-a}{n} = \\Delta x"}\). We do this by selecting equaly spaced points \(x_0 , x_1 , x_2, \ldots , x_n\) with \(x_0 =a\) and \(x_n=b\), so:</li>
					<MathStuff>$$ x_i - x_{"{i-1}"} = \frac{"{b-a}{n}"} $$</MathStuff>
					<li><b>Left-endpoint approximation:</b><SubList>
						<li>On each subinterval \({"[x_{i-1},x_i]"}\) (for \(i=1,2,3, \ldots, n\)), construct a rectangle with width \(\Delta x\) and height equal to \(f(x_{"{i-1}"})\), which is the function value at the left endpoint of the subinterval.</li>
						<li>The area of this rectangle is \(f(x_{"{i-1}"})\Delta x\). Adding the areas of all these rectangles, we get an approximate value for \(A\).</li>
						<li>Left-endpoint approximation (denoted as \(L_n\)) of \(A\) using \(n\) subintervals:</li>
						<MathStuff>$$\begin{"{align}"} A \approx &L_n = f(x_0) \Delta x + f(x_1) \Delta x + \ldots + f(x_{"{n-1}"}) \Delta x \\ & L_n= \sum_{"{i=1}"}^n f(x_{"{i-1}"}) \Delta x \end{"{align}"}$$</MathStuff>
						<li><ImgComp src={require("./calculus_pics/8.jfif")}/></li>
					</SubList></li>
					<li><b>Right-endpoint approximation:</b><SubList>
						<li>On each subinterval \({"[x_{i-1},x_i]"}\) (for \(i=1,2,3, \ldots, n\)), construct a rectangle with width \(\Delta x\) and height equal to \(f(x_i)\), which is the function value at the right endpoint of the subinterval.</li>
						<li>The area of this rectangle is \(f(x_i)\Delta x\). Adding the areas of all these rectangles, we get an approximate value for \(A\).</li>
						<li>Right-endpoint approximation (denoted as \(L_n\)) of \(A\) using \(n\) subintervals:</li>
						<MathStuff>$$\begin{"{align}"} A \approx & R_n = f(x_1) \Delta x + \ldots + f(x_{"{n-1}"}) \Delta x + f(x_n) \Delta x + \\ & R_n= \sum_{"{i=1}"}^n f(x_i) \Delta x \end{"{align}"}$$</MathStuff>
						<li><ImgComp src={require("./calculus_pics/9.jfif")}/></li>
					</SubList></li>
					<li>We could evaluate the function at any point \(x^*_i\) in the subinterval \([x_{"{i-1}"},x_i]\), and use \(f(x^*_i)\) as the height of our rectangle. This gives us an estimate for the area of the form:</li>
					<MathStuff>$$ A \approx \sum^n_{"{i=1}"} f(x_i^*) \Delta x $$</MathStuff>
					<li>A sum of this form is called a <b>Riemann sum</b>.</li>
				</SubList></li>
				<li>The definite integral:<SubList>
					<li>If \(f(x)\) is a function defined on an interval \([a,b]\), the definite integral of \(f\) from \(a\) to \(b\) is given by:</li>
					<MathStuff>$$ {"\\int_a^b f(x) dx = \\lim_{n \\to \\infty} \\sum^n_{i=1} f(x_i^*) \\Delta x"} $$</MathStuff>
					<li>If this limit exists, the function \(f(x)\) is said to be integrable on \([a,b]\), or is an <b>integrable function</b>.</li>
					<li>The numbers \(a\) and \(b\) are x-values and are called the <b>limits of integration</b>. The function \(f(x)\) the <b>integrand</b>, and the \(dx\) indicates that \(f(x)\) is a function with respect to \(x\), called the variable of <b>integration</b>.</li>
					<li>If \(f(x)\) is continuous on \([a,b]\), then \(f\) is integrable on \([a,b]\).</li>
					<li>Functions that are not continuous on \([a,b]\) may still be integrable, depending on the nature of the discontinuities.</li>
					<li>Properties of a definite integral:<SubList>
						<MathStuff>$$ {"\\int_a^a f(x) dx = 0"} $$</MathStuff>
						<MathStuff>$$ {"\\int_a^b f(x) dx = - \\int_b^a f(x) dx"} $$</MathStuff>
						<MathStuff>$$ {"\\int_a^b f(x) + g(x) dx = \\int_a^b f(x) dx + \\int_a^b g(x) dx"} $$</MathStuff>
						<MathStuff>$$ {"\\int_a^b c f(x) dx = c \\int_a^b f(x) dx"} $$</MathStuff>
					</SubList></li>
				</SubList></li>
				<li>Net Signed Area:<SubList>
					<li>Consider, the function \(f(x)=2-2x^2\) on the interval \([0,2]\). Use \(n=8\) and choose \({"{x^*_i}"}\) as the left endpoint of each interval. Construct a rectangle on each subinterval of height \(f(x^*_i)\) and width \(\Delta x\). When \(f(x^*_i)\) is positive, the product \(f(x^*_i) \Delta x\) represents the area of the rectangle, as before. When \(f(x^*_i)\) is negative, however, the product \(f(x^*_i) \Delta x\) represents the negative of the area of the rectangle.</li>
					<li><ImgComp src={require("./calculus_pics/10.jfif")}/></li>
					<li>The Riemann sum then becomes = [(Area of rectangles above the x-axis) - (Area of rectangles below the x-axis)]</li>
					<li><ImgComp src={require("./calculus_pics/11.jfif")}/></li>
					<li>The quantity \(A_1-A_2\) is called the <b>net signed area</b>.</li>
					<MathStuff>$$\begin{"{align}"} \int ^2_0 f(x) dx &= \lim _{"{n \\to \\infty}"} \sum ^n_{"{i=1}"} f(c_i) \Delta x \\ &= A_1 - A_2 \end{"{align}"}$$</MathStuff>
					<li>The <b>total area</b> between \(f(x)\) and the x-axis is given by:</li>
					<MathStuff>$$\int ^b_a | f(x) | dx = A_1 + A_2 $$</MathStuff>
				</SubList></li>
				<li><b>Integration by substitution:</b><SubList>
					<li>Example:</li>
					<TableLI>
						<tbody>
							<tr><td>
								Evaluate the integral:
								\[ \int^1_0 xe^{"{4x^2 +3}"} dx\]
								<b><u>Answer:</u></b><br/>
								Let \(u = 4x^2 +3\):
								\[ \frac{"{du}{dx}"} = 8x \]
								\[ \frac{"{du}{8}"} = x dx\]
								If \(x=1\), then \(u=7\) and if \(x=0\), then \(u=3\)<br/>
								This means:
								\[ \int^1_0 e^{"{4x^2 +3}"} xdx = \int^7_3 \frac{"{e^u}{8}"} du \]
								\[ \frac{"{1}{8}"}[ e^u ]^7_3 = \frac{"{e^7 - e^3}{8}"} \approx 134.568 \]
							</td></tr>
						</tbody>
					</TableLI>
					<li>The method is called substitution because we substitute part of the integrand with the variable \(u\) and part of the integrand with \(du\).</li>
					<li>It is also referred to as <b>change of variables</b> because we are changing variables to obtain an expression that is easier to work with for applying the integration rules.</li>
					<li>We are looking for an integrand of the form  \(f[g(x)]g'(x)dx\).</li>
				</SubList></li>
				<li>Integrals involving exponential and logarithmic functions:<SubList>
					<li>Integral of \(b^x\):</li>
					<MathStuff>\[ \int b^x \ dx = \frac{"{b^x}{\\ln(b)}"} + C \]</MathStuff>
					<li>Logarithmic integrals:</li>
					<MathStuff>\[\begin{"{align}"} \int x^{"{-1}"} \ dx &= \ln|x| +C \\ \int \log_b x \ dx &= \frac{"{x}{\\ln b}"} (\ln x -1) +C\end{"{align}"}\]</MathStuff>
				</SubList></li>
			</ul>
			<ul className="ownExplanation">
				<li>Integral of inverse trigonometric functions:<SubList>
					<li>\(\int \arcsin(x) \ dx = x (\arcsin(x)) + \sqrt{"{1-x^2}"} + C\)</li>
					<li>\(\int \arccos(x) \ dx = x (\arcsin(x)) - \sqrt{"{1-x^2}"} + C\)</li>
					<li>\(\int \arctan(x) \ dx = x (\arctan(x)) - (1/2 \ \ln (x^2 +1)) + C\)</li>
					<li>\(\int \operatorname{"{arccot}"}(x) \ dx = x (\operatorname{"{arccot}"}(x)) + (1/2 \ \ln (x^2 +1)) + C\)</li>
					<li>\(\int \operatorname{"{arcsec}"}(x) \ dx = x (\operatorname{"{arcsec}"}(x)) - \ln (|x|+|\sqrt{"{x^2-1}"}|) + C\)</li>
					<li>\(\int \operatorname{"{arccosec}"}(x) \ dx = x (\operatorname{"{arccosec}"}(x)) + \ln (|x|+|\sqrt{"{x^2-1}"}|) + C\)</li>
				</SubList></li>
			</ul>
			<h3>Volume Stuff</h3>
			<ul>
				<li><b>The slicing method:</b><SubList>
					<li>We can use a definite integral to calculate the volume of the solid. We do this by slicing the solid into pieces, estimating the volume of each slice, and then adding those estimated volumes together.</li>
					<li>Consider the solid \(S\), extending along the x-axis.</li>
					<li><ImgComp src={require("./calculus_pics/15.jfif")}/></li>
					<li>We want to divide \(S\) into slices perpendicular to the x-axis.</li>
					<li>Because the cross-sectional area is not constant, we let \(A(x)\) represent the area of the cross-section at point \(x\). Now let \({"P={x_0,x_1,…,X_n}"}\) be a regular partition of \([a,b]\), and for \(i=1,2,…n\), let \(S_i\) represent the slice of \(S\) stretching from x_{"{i-1}"} to \(x_i\). The following figure shows the sliced solid with \(n=3\).</li>
					<li><ImgComp src={require("./calculus_pics/16.jfif")}/></li>
					<li>For \(i=1,2,…,n\), let \(x*_i\) be an arbitrary point in \({"[x_{i-1}, x_i]"}\). Then the volume of slice \(S_i\) can be estimated by \(V(S_i)≈A(x*_i)Δx\). Adding these approximations together, we see the volume of the entire solid \(S\) can be approximated by:</li>
					<MathStuff>\[V(S)≈ \sum_{"{i=1}"}^n A(x*_i)Δx\]</MathStuff>
					<li>By now, we can recognize this as a Riemann sum, and our next step is to take the limit as \(n→∞\). Then we have:</li>
					<MathStuff>\[V(S) \ \lim_{"{n \\to \\infty}"} \sum_{"{i=1}"}^n A(x*_i)Δx= \int^b_a A(x) \ dx\]</MathStuff>
				</SubList></li>
				<li><b>The disk method:</b><SubList>
					<li>Define \(R\) as the region bounded above by the graph of \(f(x)\), below by the x-axis, on the left by the line \(x=a\), and on the right by the line \(x=b\).</li>
					<li>The volume of the solid of revolution formed by revolving \(R\) around the x-axis is given by:</li>
					<MathStuff>\[ V = \int^b_a \pi [f(x)]^2 \ dx \]</MathStuff>
					<li><ImgComp src={require("./calculus_pics/13.jfif")} style={{width:"90%"}}/></li>
				</SubList></li>
				<li><b>The washer method:</b><SubList>
					<li>Suppose \(f(x)\) and \(g(x)\) are continuous, nonnegative functions such that \(f(x)≥g(x)\) over \([a,b]\).</li>
					<li>Let \(R\) denote the region bounded above by the graph of \(f(x)\), below by the graph of \(g(x)\), on the left by the line \(x=a\), and on the right by the line \(x=b\).</li>
					<li>The volume of the solid of revolution formed by revolving \(R\) around the x-axis is given by:</li>
					<MathStuff>\[ V = \int^b_a \pi [f(x)^2 - g(x)^2] \ dx \]</MathStuff>
					<li><ImgComp src={require("./calculus_pics/12.jfif")} style={{width:"90%"}}/></li>
				</SubList></li>
				<li><b>The method of Cylindrical Shells</b>:<SubList>
					<li>Let \(f(x)\) be continuous and nonnegative.</li>
					<li>Define \(R\) as the region bounded above by the graph of \(f(x)\), below by the x-axis, on the left by the line \(x=a\), and on the right by the line \(x=b\).</li>
					<li>The volume of the solid of revolution formed by revolving \(R\) around the y-axis is given by:</li>
					<MathStuff>\[ V = \int^b_a (2 \pi x f(x)) \ dx \]</MathStuff>
					<li><ImgComp src={require("./calculus_pics/14.jfif")} style={{width:"90%"}}/></li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={65} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Arc Length of a Curve:<SubList>
					<li>Let \(f(x)\) be a smooth function over the interval \([a,b]\).</li>
					<li>The arc length of the portion of the graph of \(f(x)\) from the point \((a,f(a))\) to the point \((b,f(b))\) is given by:</li>
					<MathStuff>\[ \int^b_a \sqrt{"{1+[f'(x)]^2}"} \ dx \]</MathStuff>
				</SubList></li>
				<li>Surface Area of a Surface of Revolution:<SubList>
					<li>Let \(f(x)\) be a nonnegative smooth function over the interval \([a,b]\).</li>
					<li>The surface area of the surface of revolution formed by revolving the graph of \(f(x)\)
					around the x-axis is given by:</li>
					<MathStuff>\[ \int^b_a (2 \pi f(x) \sqrt{"{1+f'(x)^2}"}) \ dx \]</MathStuff>
				</SubList></li>
				<li>Exponential growth and decay:<SubList>
					<li>Systems that exhibit <b>exponential growth</b> increase according to the mathematical model:</li>
					<MathStuff>\[ y=y_0e^{"{kt}"} \]</MathStuff>
					<li>where \(y_0\) represents the <b>initial state</b> and \(k\) is a positive constant called the <b>growth constant</b>.</li>
					<MathStuff>\[ \frac{"{d}{dt}"}y=y_0e^{"{kt}"} (k) = ky\]</MathStuff>
					<li>Systems that exhibit <b>exponential decay</b> behave according to the model:</li>
					<MathStuff>\[ y=y_0e^{"{-kt}"} \]</MathStuff>
					<li>where \(y_0\) represents the <b>initial state</b> and \(k\) is a positive constant called the <b>decay constant</b>.</li>
					<li>If a quantity decays exponentially, the <b>half-life</b> is the amount of time it takes the quantity to be reduced by half:</li>
					<MathStuff>\[ t_{"{1/2}"} = \frac{"{\\ln(2)}{k}"} \]</MathStuff>
				</SubList></li>
			</ul>
		</div>
	</div>

</>