import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI, TableDiv } from "../../articleRelatedStuff/tableManager";

export const title = "Calculus Notes";

export const sourcesColor = {36: "rgb(80, 130, 160)"};
export const content = <>

	<h1>Calculus Notes</h1>
  <div id="date"><b>Last Edit:</b> {document.lastModified}</div>
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
				<li>Chain Rule:<SubList>
					<li>Let \(f\) and \(g\) be functions. For all \(x\) in the domain of \(g\) for which \(g\) is differentiable at \(x\) and \(f\) is differentiable at \(g(x)\), the derivative of the composite function \(h(x)=(f∘g)(x)=f(g(x))\) is given by:</li>
					<li class={"mathStuff"}>$$h'(x)=f'(g(x))g'(x)$$</li>
					<li>Alternatively, if \(y\) is a function of \(u\), and \(u\) is a function of \(x\), then:</li>
					<li class={"mathStuff"}>$$ {"\\frac{dy}{dx} = \\frac{dy}{du} \\frac{du}{dx}"} $$</li>
				</SubList></li>
			</ul>
		</div>
	</div>

</>