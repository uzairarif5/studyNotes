import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Calculus Notes";

export const sourcesColor = {36: "rgb(80, 130, 160)"};
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
					<li>\({"\\lim_{\\theta \\to 0} \\frac{sin(\\theta))}{\\theta} = 1"}\)</li>
					<li>\({"\\lim_{\\theta \\to 0} \\frac{1-cos(\\theta))}{\\theta} = 0"}\)</li>
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
			</ul>
		</div>
		<div data-source={36} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Chain Rule:<SubList>
					<li>Let \(f\) and \(g\) be functions. For all \(x\) in the domain of \(g\) for which \(g\) is differentiable at \(x\) and \(f\) is differentiable at \(g(x)\), the derivative of the composite function \(h(x)=(f∘g)(x)=f(g(x))\) is given by:</li>
					<li class={"mathStuff"}>$$h'(x)=f'(g(x))g'(x)$$</li>
					<li>Alternatively, if \(y\) is a function of \(u\), and \(u\) is a function of \(x\), then:</li>
					<li class={"mathStuff"}>$$ {"\\frac{dy}{dx} = \\frac{dy}{du} \\frac{du}{dx}"} $$</li>
				</SubList></li>
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
					<li>the line \(y=x+1\) is tangent to the graph of \(E(x)=e^x\) at \(x=0\). Also, \(E'(x) = e^x\).</li>
					<li><a href="https://www.deriveit.net/calculus/using_euler's_number/bx">Derivative of \(b^x\) is \((b^x) * ln(b)\)</a>.</li>
					<li>If \(y= \log_b x\), then \(b^y = x\).</li>
					<MathStuff>\[ {"\\frac{dy}{dx} = \\frac{1}{x \\ln b}"} \]</MathStuff>
					<li></li>
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
					<li></li>
					<li></li>
					<li></li>
				</SubList></li>
			</ul>
		</div>  
	</div>

</>