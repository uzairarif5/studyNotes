import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";
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
				<li>Limit Laws:<SubList>
						<li>\({"\\lim_{x \\to a} [f(x)+g(x)] = \\lim_{x \\to a}f(x) + \\lim_{x \\to a}g(x)"}\)</li>
						<li>\({"\\lim_{x \\to a} [f(x)g(x)] = \\lim_{x \\to a}f(x) \\cdot \\lim_{x \\to a}g(x)"}\)</li>
						<li>\({"\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a}f(x)}{\\lim_{x \\to a}g(x)} \\text{ if } \\lim_{x \\to a}g(x) \\ne 0"}\)</li>
						<li>\({"\\lim_{x \\to a} c = c"}\)</li>
						<li>\({"\\lim_{x \\to a} x = a"}\)</li>
						<li>\({"\\lim_{x \\to a} [f(x)]^n = [\\lim_{x \\to a} f(x)]^n"}\)</li>
						<li>\({"\\lim_{x \\to a} f(g(x)) = f(\\lim_{x \\to a} g(x))"}\) if \(f\) is continuous there.</li>
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
				<li className="ownExplanation">My understanding of the precise definition of a limit:<SubList>
					<li>Let \(f\) be a strictly increasing function continuous at all values of \(x\) except 5. If \(x\) were to approach 5, then \(f(x)\) would approach 2.005. Let's see the values of \(f\) when \(x\) approaches 5.</li>
					<TableLI>
						<thead>
							<tr><th>x</th><th>f(x)</th><th>x</th><th>f(x)</th></tr>
						</thead>
						<tbody>
							<tr><td>3</td><td>1.6</td><td>7</td><td>2.3</td></tr>
							<tr><td>4</td><td>1.716</td><td>6</td><td>2.21</td></tr>
							<tr><td>4.5</td><td>1.87</td><td>5.9</td><td>2.15</td></tr>
							<tr><td>4.6</td><td>1.988</td><td>5.8</td><td>2.11</td></tr>
							<tr><td>4.9</td><td>1.99997</td><td>5.1</td><td>2.101</td></tr>
						</tbody>
					</TableLI>
					<li>The function seems to be approaching 2. However, if we continue:</li>
					<TableLI>
						<thead>
							<tr><th>x</th><th>f(x)</th><th>x</th><th>f(x)</th></tr>
						</thead>
						<tbody>
							<tr><td>4.99</td><td>2.004</td><td>5.01</td><td>2.006</td></tr>
							<tr><td>4.999</td><td>2.0049</td><td>5.001</td><td>2.0051</td></tr>
						</tbody>
					</TableLI>
					<li>Intuitively, it would make sense to define the <b>limit</b>, \(\lim_{"{x \\to a} f(x) = L"}\), as a number such that every time there is a difference between \(x\) and \(a\), then a difference in \(f(x)\) and \(L\) would also exist. 2 is not a valid limit because as \(x\) approaches 5, after a certain point \(f(x)\) goes past 2, which means there was a point where \(f(x)=2\) while \(x\) was still approaching 5. Meanwhile, 2.005 is a valid limit because no matter how close \(x\) is to 5 (whether from the left side or the right), \(f(x)\) will never go past 2.005 or be equal to it.</li>
					<TableLI>
					<caption>Possible Definition Of A Limit</caption>
					<tbody>
						<tr><td>
						For every \(δ \gt 0\), there exists \(ε \gt 0\) such that for all \(x\) in the domain of \(f(x)\):<br/>
						If \(0 \lt |x - a| \lt δ\), then \(|f(x) - L| \lt ε\).
						</td></tr>
					</tbody>
					</TableLI>
					<li>The above definition says: "For all \(x\) in the range \((a-δ, a) ∪ (a, a+δ)\), where you choose the value of δ, there will always be some range \((L-ε, L+ε)\), where the values of \(f(x)\) lies, and this is true no matter how small δ is".</li>
					<li>Earlier we stated \(f(x)\) approaches 2.005, and not 2, when \(x\) approaches 5. This should match with our definition. According to our definition, for every \(δ \gt 0\), there exists \(ε \gt 0\) such that for all \(x\) in the domain of \(f(x)\), if \(0 \lt |x - 5| \lt δ\), then \(|f(x) - 2.005| \lt ε\). This is true.</li>
					<li>However, it is also true that if \(0 \lt |x - 5| \lt δ\), then \(|f(x) - 2| \lt ε\). This is because you would be able to find a range \((5-δ, 5) ∪ (5, 5+δ)\) such that for all \(x\) in that range, you would be able to find another range \((2-ε, 2+ε)\) where all the \(f(x)\) values would fit in.</li>
					<ImgComp src={require("./calculus_pics/21.jpg")} width="70%" />
					<li>What if instead of having a choice on \(δ \gt 0\), we have a choice on \(ε \gt 0\)? This would make sense since we can now shorten the range for \(f(x)\) as small as possible.</li>
					<TableLI>
					<caption>Possible Definition Of A Limit</caption>
					<tbody>
						<tr><td>
						For every \(ε \gt 0\), there exists \(δ \gt 0\) such that for all \(x\) in the domain of \(f(x)\):<br/>
						If \(0 \lt |x - a| \lt δ\), then \(|f(x) - L| \lt ε\).
						</td></tr>
					</tbody>
					</TableLI>
					<li>The above definition says: "For any range \((L-ε, L+ε)\) you can think of, there will always be another range \((a-δ, a) ∪ (a, a+δ)\) such that for all \(x\) in \((a-δ, a) ∪ (a, a+δ)\), the value for \(f(x)\) will be in \((L-ε, L+ε)\)".</li>
					<ImgComp src={require("./calculus_pics/20.jpg")} width="70%" />
					<li>Earlier we stated \(f(x)\) approaches 2.005, and not 2, when \(x\) approaches 5. This should match with our definition. According to our definition, for every \(δ \gt 0\), there exists \(ε \gt 0\) such that for all \(x\) in the domain of \(f(x)\), if \(0 \lt |x - 5| \lt δ\), then \(|f(x) - 2.005| \lt ε\). This is true.</li>
					<li>Also, it is not true that if \(0 \lt |x - 5| \lt δ\), then \(|f(x) - 2| \lt ε\). This is because if you choose \(ε\) that is very small, like 0.0001, then there is no possible value for \(δ\) such that for all \(x\), if \(x\) is in \((5-δ, 5) ∪ (5, 5+δ)\), then \(f(x)\) would be in \((1.999, 2.001)\).</li>
					<ImgComp src={require("./calculus_pics/22.jpg")} width="70%" />
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
				<li><b>Chain Rule:</b><SubList>
					<li>Let \(f\) and \(g\) be functions. For all \(x\) in the domain of \(g\) for which \(g\) is differentiable at \(x\) and \(f\) is differentiable at \(g(x)\), the derivative of the composite function \(h(x)=(f∘g)(x)=f(g(x))\) is given by:</li>
					<li class={"mathStuff"}>$$h'(x)=f'(g(x))g'(x)$$</li>
					<li>Alternatively, if \(y\) is a function of \(u\), and \(u\) is a function of \(x\), then:</li>
					<li class={"mathStuff"}>$$ {"\\frac{dy}{dx} = \\frac{dy}{du} \\frac{du}{dx}"} $$</li>
				</SubList></li>
				<li>If \(f(x)\) is both invertible and differentiable. Let \(g\) be the inverse of \(f\):</li>
				<MathStuff>\[ g'(x) = \frac{"{1}{f'(g(x))}"} \]</MathStuff>
			</ul>
		</div>
		<div data-source={36} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li>Derivative of trigonometric functions:<SubList>
					<li>\({"\\frac{d}{dx} \\sin x = \\cos x"}\)</li>
					<li>\({"\\frac{d}{dx} \\cos x = -\\sin x"}\)</li>
					<li>\({"\\frac{d}{dx} \\tan x = \\sec^2 x"}\)</li>
					<li>\({"\\frac{d}{dx} \\cot x = -\\csc^2 x"}\)</li>
					<li>\({"\\frac{d}{dx} \\sec x = \\sec x \\tan x"}\)</li>
					<li>\({"\\frac{d}{dx} \\csc x = -\\csc x \\cot x"}\)</li>
				</SubList></li>
			</ul>
			<ul className="ownExplanation">
				<li>Derivatives of inverse trigonometric functions:<SubList>
					<li>\(\frac{"{d}{dx} \\arcsin(x) = \\frac{1}{| \\sqrt{1-x^2}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\arccos(x) = - \\frac{1}{| \\sqrt{1-x^2}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\arctan(x) = \\frac{1}{x^2+1}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arccot}(x)= -\\frac{1}{x^2+1}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arcsec}(x) = \\frac{1}{|x| |\\sqrt{x^2-1}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arccosec}(x) = - \\frac{1}{|x| |\\sqrt{x^2-1}|}"}\)</li>
				</SubList></li>
			</ul>
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
				<li>Linear Approximation of a function at a point:<SubList>
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
						<li>If \(f'(x) \lt 0\) for all \(x∈(a,b)\), then \(f\) is a decreasing function over \([a,b]\).</li>
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
				<li>Derivative of hyperbolic functions:<SubList>
					<li>\({"\\frac{d}{dx} \\sinh x = \\cosh x"}\)</li>
					<li>\({"\\frac{d}{dx} \\cosh x = \\sinh x"}\)</li>
					<li>\({"\\frac{d}{dx} \\tanh x = \\operatorname{sech}^2 x"}\)</li>
					<li>\({"\\frac{d}{dx} \\coth x = -\\operatorname{csch}^2 x"}\)</li>
					<li>\({"\\frac{d}{dx} \\operatorname{sech} x = -\\operatorname{sech} x \\tanh x"}\)</li>
					<li>\({"\\frac{d}{dx} \\operatorname{csch} x = -\\operatorname{csch} x \\coth x"}\)</li>
				</SubList></li>
				<li>Derivative of inverse hyperbolic functions:<SubList>
					<li>\(\frac{"{d}{dx} \\operatorname{arsinh}(x) = \\frac{1}{|\\sqrt{x^2 + 1}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arcosh}(x) = \\frac{1}{|\\sqrt{x^2 - 1}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{artanh}(x) = \\frac{1}{1-x^2}"}\) where \(|x| \lt 1\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arcoth}(x) = \\frac{1}{1-x^2}"}\) where \(|x| \gt 1\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arsech}(x) = \\frac{-1}{x|\\sqrt{1-x^2}|}"}\)</li>
					<li>\(\frac{"{d}{dx} \\operatorname{arcsch}(x) = \\frac{-1}{|x| |\\sqrt{1+x^2}|}"}\)</li>
				</SubList></li>
			</ul>
		</div>  
	</div>

	<h2>Integration</h2>
	<div className="content">
		<div data-source={65} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
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
					<li>If we choose \(x^*_i\) such that for \(i=1,2,3,…,n\), \(f(x^*_i) ≥ f(x)\) for all \(x∈[x_{"{i-1}"},x_i]\), then the Riemann sum is called an <b>upper sum</b>. This sum is an overestimate.</li>
					<li>If we choose \(x^*_i\) so that for \(i=1,2,3,…,n\), \(f(x^*_i) \le f(x)\) for all \([x_{"{i-1}"},x_i]\), then the Riemann sum is called a <b>lower sum</b>. This sum is an underestimate.</li>
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
				<li>Integration by substitution:<SubList>
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
				<li>Integral of trigonometric functions:<SubList>
					<li>\(\int \sin(x) \ dx = -\cos(x) + C\)</li>
					<li>\(\int \cos(x) \ dx = \sin(x) + C\)</li>
					<li>\(\int \sec(x) \ dx = \ln| \sec(x) + \tan(x)| + C\)</li>
					<li>\(\int \csc(x) \ dx = \ln| \csc(x) + \cot(x)| + C\)</li>
					<li>\(\int \tan(x) \ dx = \ln| \sec(x) | + C\)</li>
					<li>\(\int \cot(x) \ dx = \ln| \sin(x) | + C\)</li>
				</SubList></li>
				<li>Integral of inverse trigonometric functions:<SubList>
					<li>\(\int \arcsin(x) \ dx = x (\arcsin(x)) + \sqrt{"{1-x^2}"} + C\)</li>
					<li>\(\int \arccos(x) \ dx = x (\arcsin(x)) - \sqrt{"{1-x^2}"} + C\)</li>
					<li>\(\int \arctan(x) \ dx = x (\arctan(x)) - (1/2 \ \ln (x^2 +1)) + C\)</li>
					<li>\(\int \operatorname{"{arccot}"}(x) \ dx = x (\operatorname{"{arccot}"}(x)) + (1/2 \ \ln (x^2 +1)) + C\)</li>
					<li>\(\int \operatorname{"{arcsec}"}(x) \ dx = x (\operatorname{"{arcsec}"}(x)) - \ln (|x|+|\sqrt{"{x^2-1}"}|) + C\)</li>
					<li>\(\int \operatorname{"{arccosec}"}(x) \ dx = x (\operatorname{"{arccosec}"}(x)) + \ln (|x|+|\sqrt{"{x^2-1}"}|) + C\)</li>
				</SubList></li>
				<li>Integral of hyperbolic functions:<SubList>
					<li>\(\int \sinh(x) \ dx = \cosh(x) + C\)</li>
					<li>\(\int \cosh(x) \ dx = \sinh(x) + C\)</li>
					<li>\(\int \tanh(x) \ dx = \ln| \cosh(x) | + C\)</li>
					<li>\(\int \coth(x) \ dx = \ln| \sinh(x) | + C\)</li>
					<li>\(\int \operatorname{"{sech}"}(x) \ dx = 2 \arctan(e^x) + C\)</li>
					<li>If \(x \lt 0\), then \(\int \operatorname{"{csch}"}(x) \ dx = 2 \operatorname{"{artanh}"}(e^x) + C\)</li>
					<li>If \(x \gt 0\), then \(\int \operatorname{"{csch}"}(x) \ dx = 2 \operatorname{"{arcoth}"}(e^x) + C\)</li>
				</SubList></li>
				<li>Integral of inverse hyperbolic functions:<SubList>
					<li>\({"\\int \\operatorname{arsinh}(x) \\ dx = x \\operatorname{arsinh}(x) - |\\sqrt{x^2+1}| + C"}\)</li>
					<li>\({"\\int \\operatorname{arcosh}(x) \\ dx = x \\operatorname{arcosh}(x) - |\\sqrt{x^2-1}| + C"}\)</li>
					<li>\({"\\int \\operatorname{artanh}(x) \\ dx = x \\operatorname{artanh}(x) + \\frac{1}{2} \\ln |\\sqrt{1-x^2}| + C"}\) where \(|x| \lt 1\)</li>
					<li>\({"\\int \\operatorname{arcoth}(x) \\ dx = x \\operatorname{arcoth}(x) + \\frac{1}{2} \\ln |\\sqrt{1-x^2}| + C"}\) where \(|x| \gt 1\)</li>
					<li>\({"\\int \\operatorname{arsech}(x) \\ dx = x \\operatorname{arsech}(x) + \\operatorname{arsinh}(x) + C"}\)</li>
					<li>\({"\\int \\operatorname{arcsch}(x) \\ dx = x \\operatorname{arcsch}(x) + |\\operatorname{arsinh}(x)| + C"}\)</li>
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
				<li>Integration by parts:<SubList>
					<MathStuff>\[ \int u dv = uv - \int v du\]</MathStuff>
				</SubList></li>
				<li>Integrating \(\cos^j x \sin^k x \ dx\):<SubList numbered>
					<li>If \(k\) is odd, rewrite \(\sin^k x = \sin^{"{k-1}"}x \sin x\) and use the identity \(\sin^2 x= 1- \cos^2 x\) to rewrite \(\sin^{"{k-1}"} x\) in terms of \(\cos x\). Integrate using the substitution \(u= \cos x\). This substitution makes \(du = - \sin x \ dx\).</li>
					<li>If \(j\) is odd, rewrite \(\cos^j x = \cos^{"{j-1}"} x \cos x\) and use the identity \(\cos^2 x= 1- \sin^2 x\) to rewrite \(\cos^{"{j-1}"} x\) in terms of \(\sin x\). Integrate using the substitution \(u=\sin x\). This substitution makes \(du= \cos x \ dx\).</li>
					<li>If both \(j\) and \(k\) are odd, either strategy 1 or strategy 2 may be used.</li>
					<li>If both \(j\) and \(k\) are even, use \(\sin^2 x = (1 - \cos (2x))/2\) and \(\cos^2 x = (1+ \cos(2x))/2\).</li>
				</SubList></li>
				<li>Integrating \(\tan^k x \sec^j x \ dx\):<SubList numbered>
					<li>If only \(j\) is even and \(j≥2\), rewrite \(\sec^j x= \sec^{"{j-2}"} x \sec^2 x\) and use \(\sec^2 x = \tan^2 x+1\) to rewrite \(\sec^{"{j-2}"} x\) in terms of \(\tan x\). Let \(u=\tan x\) and \(du=\sec^2 x \ dx\).</li>
					<li>If only \(k\) is odd and \(j≥1\), rewrite \(\tan^k x \sec^j x = \tan^{"{k-1}"} x \sec^{"{j-1}"} x \sec x \tan x\) and use \(\tan^2 x = \sec^2x - 1\) to rewrite \(\tan^{"{k-1}"} x\) in terms of \(\sec x\). Let \(u=\sec x\) and \(du= \sec x \tan x \ dx\).</li>
					<li>If \(j\) is even and \(k\) is odd, then either strategy 1 or strategy 2 may be used.</li>
					<li>If \(k\) is odd where \(k≥3\) and \(j=0\), rewrite \(\tan^k x = \tan^{"{k-2}"} x \sec^2 x- \tan^{"{k-2}"} x\). It may be necessary to repeat this process on the \(\tan^{"{k-2}"}x\) term.</li>
					<li>If \(k\) is even and \(j\) is odd, then use \(\tan^2 x = \sec^2 x - 1\) to express \(\tan^k x\)in terms of \(\sec x\). Use integration by parts to integrate odd powers of \(\sec x\).</li>
				</SubList></li>
				<li>Reduction formulas:<SubList>
					<MathStuff>\[ \int \sec^n \ dx = \frac{"{\\sec^{n-2}x \\tan x}{n-1}"} + \frac{"{n-2}{n-1}"} \int \sec^{"{n-2}"}x \ dx \]</MathStuff>
					<MathStuff>\[ \int \tan^n \ dx = \frac{"{\\tan^{n-1} x}{n-1}"} - \int \tan^{"{n-2}"}x \ dx \]</MathStuff>
				</SubList></li>
				<li>Integrating expressions involving \(\sqrt{"{a^2 - x^2}"}\):<SubList>
					<li>Make the substitution \(x = a \sin \theta\) and \(dx = a \cos \theta \ d \theta\). This will yield \(\sqrt{"{a^2 - x^2}"} = a \cos \theta\).</li>
					<li>Since \(x^2\) would have to be less than or equal to \(a^2\) for \(\sqrt{"{a^2 - x^2}"}\) to exist, then \(-\frac{"{\\pi}{2}"}\le \theta \le \frac{"{\\pi}{2}"}\).</li>
				</SubList></li>
				<li>Integrating expressions involving \(\sqrt{"{a^2 + x^2}"}\):<SubList>
					<li>Make the substitution \(x = a \tan \theta\) and \(dx = a \sec^2 \theta \ d \theta\). This will yield \(\sqrt{"{a^2 + x^2}"} = |a \sec \theta|\).</li>
					<li>We are only considering \(\theta\) where \(-\frac{"{\\pi}{2}"}\le \theta \le \frac{"{\\pi}{2}"}\). Therefore, \(\sqrt{"{a^2 + x^2}"} = a \sec \theta \).</li>
				</SubList></li>
				<li>Integrating expressions involving \(\sqrt{"{x^2 - a^2}"}\):<SubList>
					<li>Make the substitution \(x = a \sec \theta\) and \(dx = a \sec \theta \tan \theta \ d \theta\). This will yield \(\sqrt{"{a^2 + x^2}"} = |a \tan \theta|\).</li>
					<li>For \(x \ge a\), \(|a \tan \theta| = a \tan \theta\).</li>
					<li>For \(x \le -a\), \(|a \tan \theta| = - a \tan \theta\).</li>
				</SubList></li>
				<li>To decompose the rational function \(P(x)/Q(x)\):<SubList>
					<li>Make sure that \(\text{"{deg}"}(P(x)) \le \text{"{deg}"}(Q(x))\). If not, perform long division of polynomials.</li>
					<li>Factor \(Q(x)\) into the product of linear and irreducible quadratic factors. An <b>irreducible quadratic</b> is a quadratic that has no real zeros.</li>
					<li>Assuming that \(\text{"{deg}"}(P(x)) \le \text{"{deg}"}(Q(x))\), the factors of \(Q(x)\) determine the form of the decomposition of \(P(x)/Q(x)\):<SubList>
						<li>If \(Q(x)\) can be factored as \((a_1 x +b_1)(a_2 x +b_2) \ldots (a_n x + b_n)\), where each linear factor is distinct, then it is possible to find constants \(A_1, A_2, \ldots, A_n\) satisfying:</li>
						<MathStuff>\[ \frac{"{P(x)}{Q(x)}"} = \frac{"{A_1}{a_1 x +b_1}"} + \frac{"{A_2}{a_2 x +b_2}"} + \ldots + \frac{"{A_n}{a_n x +b_n}"} \]</MathStuff>
						<li>If \(Q(x)\) contains the repeated linear factor \((ax+b)^n\), then the decomposition must contain:</li>
						<MathStuff>\[ \frac{"{A_1}{(a x+ b)}"} + \frac{"{A_2}{(ax+b)^2}"} + \ldots + \frac{"{A_n}{(ax+b)^n}"}\]</MathStuff>
						<li>For each irreducible quadratic factor \(ax^2+bx+c\) that \(Q(x)\) contains, the decomposition must include:</li>
						<MathStuff>\[\frac{"{Ax+B}{ax^2+bx+c}"}\]</MathStuff>
						<li>For each repeated irreducible quadratic factor \((ax^2+bx+c)^n\), the decomposition must include:</li>
						<MathStuff>\[\frac{"{A_1 x + B_1}{ax^2+bx+c}"}+\frac{"{A_2 x + B_2}{(ax^2+bx+c)^2}"}+ \ldots + \frac{"{A_n x + B_n}{(ax^2+bx+c)^n}"}\]</MathStuff>
						<li>After the appropriate decomposition is determined, solve for the constants.</li>
					</SubList></li>
				</SubList></li>
				<li>Numerical Integration:<SubList>
					<li><b><u>The Midpoint Rule:</u></b> Assume that \(f(x)\) is continuous on \([a,b]\). Let \(n\) be a positive integer and  \(\Delta x= \frac{"{b-a}{n}"}\). If \([a,b]\) is divided into \(n\) subintervals, each of length \(\Delta x\), and \(m_i\) is the midpoint of the \(i\)th subinterval, set:</li>
					<MathStuff>\[M_n = \sum^n_{"{i=1}"} f(x_i) \Delta x\]</MathStuff>
					<li>Then, \(\lim_{"{n \\to \\infty}"}M_n = \int^b_a f(x) \ dx\).</li>
					<li><b><u>The Trapezoidal Rule:</u></b> Assume that \(f(x)\) is continuous over \([a,b]\). Let \(n\) be a positive integer and \(\Delta x= \frac{"{b-a}{n}"}\). Let \([a,b]\) be divided into \(n\) subintervals, each of length \(\Delta x\). Set:</li>
					<MathStuff>\[ T_n = \frac{"{\\Delta x}{2}"} (f(x_0) + 2(f(x_1) + \ldots + f(x_{"{n-1}"})) + f(x_n)) \]</MathStuff>
					<li>Then, \(\lim_{"{n \\to \\infty}"} T_n = \int^b_a f(x) \ dx\).</li>
					<li>The trapezoidal rule tends to overestimate the value of a definite integral systematically over intervals where the function is concave up and to underestimate the value of a definite integral systematically over intervals where the function is concave down.</li>
					<li>On the other hand, the midpoint rule tends to average out these errors somewhat by partially overestimating and partially underestimating the value of the definite integral. This leads us to hypothesize that, in general, the midpoint rule tends to be more accurate than the trapezoidal rule.</li>
					<li><b><u>Simpson's Rule:</u></b> Assume that \(f(x)\) is continuous over \([a,b]\). Let \(n\) be a positive even integer and  \(\Delta x= \frac{"{b-a}{n}"}\). Let \([a,b]\) be divided into \(n\) subintervals, each of length \(\Delta x\). Set:</li>
					<MathStuff>\[S_n={"\\frac{\\Delta x}{3}(f(x_0)+4f(x_1)+2f(x_2)+4f(x_3)+2f(x_4)+\\ldots+2f(x_{n-2})+4f(x_{n-1})+f(x_n)"}\]</MathStuff>
					<li>Then, \(\lim_{"{n \\to \\infty}"} S_n \int^b_a f(x) \ dx\).</li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2>Differential Equations</h2>
	<div className="content">
		<div data-source={65} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li>A <b>differential equation</b> is an equation involving an unknown function \(y=f(x)\) and one or more of its derivatives.</li>
				<li>Solution to a differential equation:<SubList>
					<li>A solution to a differential equation is a function \(y=f(x)\) that satisfies the differential equation when \(f\) and its derivatives are substituted into the equation.</li>
					<li>The function \(y=2e^{"{-2t}"}+e^t\) is a solution to the differential equation \(y'+2y=3e^t\).</li>
					<li>Any solution of the differential equation \(y'=2x\) must be of the form \(y=x^2+C\). This is an example of a <b>general solution</b> to a differential equation. \(y=x^2-3\) is a member of the family of solutions to this differential equation. This is called a <b>particular solution</b> to the differential equation.</li>
				</SubList></li>
				<li>The <b>order of a differential equation</b> is the highest order of any derivative of the unknown function that appears in the equation.</li>
				<li>Initial-Value Problems:<SubList>
					<li>Usually a given differential equation has an infinite number of solutions, so it is natural to ask which one we want to use. Some specific information that can be useful is an <b>initial value</b>, which is an ordered pair that is used to find a particular solution.</li>
					<li>A differential equation together with one or more initial values is called an <b>initial-value problem</b>.</li>
					<TableLI>
						<caption>Example</caption>
						<tbody>
							<tr><td>
								Solve the following initial-value problem:
								\[y'=3 e^x + x^2 -4, y(0)=5\]
								<br/>
								<b><u>Solution:</u></b>
								To do this, we find an antiderivative of both sides of the differential equation:
								\[y=3 e^x + \frac{"{x^3}{3}"} -4x + C\]
								Now let's substitute x and y:
								\[\begin{"{align}"}5 &= 3 e^0 + \frac{"{0^3}{3}"} -4(0) + C \\ 5 &= 3 + C \end{"{align}"}\]
								Therefore, C = 2. This means:
								\[y=3 e^x + \frac{"{x^3}{3}"} -4x + 2\]
							</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>Direction Fields:</b><SubList>
					<li>A <b>direction field</b> (or <b>slope field</b>) is a mathematical object used to graphically represent solutions to a first-order differential equation. In particular, we consider a first-order differential equation of the form \(y'=f(x,y)\).</li>
					<li>At each point in a direction field, a line segment appears whose slope is equal to the slope of a solution to the differential equation passing through that point.</li>
					<li>Consider \(y'=3x+2y-4\), if we choose \(x=1\) and \(y=2\), then \(y'=3\). To start creating the direction field, we put a short line segment at the point \((1,2)\) having slope \(3\). We can do this for any point in the domain of the function  \(f(x,y)=3x+2y-4\), which consists of all ordered pairs \((x,y)\) in \(\mathbb{"{R}"}^2\).</li>
					<li><figure>
						<ImgComp src={require("./calculus_pics/17.jfif")} width="70%" />
						<figcaption>Direction field for the differential equation \(y'=3x+2y-4\).</figcaption>
					</figure></li>
					<li>If a solution to the differential equation passes through the point \((0,1)\), then the slope of the solution passing through that point is given by \(y'=3(0)+2(1)-4=-2\). The curve is called a <b>solution curve</b> passing through the point \((0,1)\).
					</li>
					<li><figure>
						<ImgComp src={require("./calculus_pics/18.jfif")} width="70%" />
						<figcaption>Direction field for the differential equation \(y'=3x+2y-4\) with the solution passing through the point \((0,1)\).</figcaption>
					</figure></li>
				</SubList></li>
				<li>An <b>equilibrium solution</b> is any solution to the differential equation of the form \(y=c\), where \(c\) is a constant:<SubList>
					<li>An equilibrium solution of the differential equation is any function of the form \(y=k\) such that \(f(x,k)=0\) for all values of \(x\) in the domain of \(f\).</li>
					<li>An important characteristic of equilibrium solutions concerns whether or not they approach the line \(y=k\) as an asymptote for large values of \(x\).</li>
					<li>\(y=k\) is an <b>asymptotically stable solution</b> to the differential equation if there exists \(ε \gt 0\) such that for any value \(c∈(k-ε,k+ε)\) the solution to the initial-value problem \(y'=f(x,y), y(x_0)=c\) approaches \(k\) as \(x\) approaches infinity.</li>
					<li>\(y=k\) is an <b>asymptotically unstable solution</b> to the differential equation if there exists \(ε \gt 0\) such that for any value \(c∈(k-ε,k+ε)\) the solution to the initial-value problem \(y'=f(x,y), y(x_0)=c\) never approaches \(k\) as \(x\) approaches infinity.</li>
					<li>\(y=k\) is an <b>asymptotically semi-stable solution</b> to the differential equation if it is neither asymptotically stable nor asymptotically unstable.</li>
					<li>For the differential equation \(y'=(y-3)^2 (y^2+y-2)\), The equilibrium solutions are \(y=-2\), \(y=1\) and \(y=3\).</li>
					<li>At \(y=-2\) the arrows directly below this solution point up, and the arrows directly above the solution point down. Therefore all initial conditions close to \(y=-2\) approach \(y=-2\), and the solution is stable.</li>
					<li>For the solution \(y=1\), all initial conditions above and below \(y=1\) are repelled (pushed away) from \(y=1\), so this solution is unstable.</li>
					<li>The solution \(y=3\) is semi-stable, because for initial conditions slightly greater than 3, the solution approaches infinity, and for initial conditions slightly less than 3, the solution approaches \(y=3\).</li>
				</SubList></li>
				<li><b>Euler's method:</b><SubList>
					<li>Consider the initial-value problem \(y'=f(x,y)\), \(y(x0)=y0\).</li>
					<li>To approximate a solution to this problem using Euler's method, define:</li>
					<MathStuff>$$x_n=x_0 + n h$$$$y_n=y_{"{n-1}"}+h f(x_{"{n-1}"},y_{"{n-1}"})$$</MathStuff>
					<li>Here \(h \gt 0\) represents the step size and \(n\) is an integer, starting with 1. The number of steps taken is counted by the variable \(n\).</li>
					<li>\(h\) is typically very small, like 0.05.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={65} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li><b>Autonomous differential equation:</b> when \(y'\) is a function of \(y\) alone.</li>
				<li><b>Separable differential equations:</b><SubList>
					<li>A <b>separable differential equation</b> is any equation that can be written in the form: \(y'=f(x)g(x)\).</li>
					<li>Five-step method of separation of variables:<SubList numbered>
						<li>Check for any values of \(y\) that make \(g(y)=0\). These correspond to constant solutions.</li>
						<li>Rewrite the differential equation in the form \(\frac{"{dy}{g(y)}"}=f(x) dx\).</li>
						<li>Integrate both sides of the equation.</li>
						<li>Solve the resulting equation for \(y\) if possible.</li>
						<li>If an initial condition exists, substitute the appropriate values for \(x\) and \(y\) into the equation and solve for the constant.</li>
					</SubList></li>
					<TableLI>
						<caption>Example</caption>
						<tbody>
							<tr><td>
								Find a general solution to the differential equation \(y'=(x^2 -4)(3y+2)\) using the method of separation of variables.
								<br/>
								<b><u>Solution:</u></b>
								Let \(f(x)=x^2 - 4\) and \(g(y)=3y+2\). Setting \(g(y)=0\) gives \(y=-\frac{"{2}{3}"}\) as a constant solution.<br/>
								Rewrite the differential equation in the form \[\frac{"{dy}{3y+2}"}= (x^2 - 4) \ dx \]
								Integrate both sides of the equation:
								\[\int \frac{"{dy}{3y+2}"}=\int (x^2 - 4) \ dx \]
								\[\frac{"{1}{3}"} \ln|3y+2| = \frac{"{1}{3}"}x^3 -4x + C\]
								Solve for \(y\):
								\[y=-2\frac{"{±Ce^{x^3-12x}}{3}"}\]
								Since the constant can have either sign:
								\[y=-2\frac{"{Ce^{x^3-12x}}{3}"}\]
								Since initial condition is imposed, then we are finished.
							</td></tr>
						</tbody>
					</TableLI>
				</SubList></li>
				<li><b>The logistic equation:</b><SubList>
					<li>One problem with the exponential growth function is its prediction that as time goes on, the population grows without bound. This is unrealistic in a real-world setting.</li>
					<li>The <b>carrying capacity</b> of an organism in a given environment is defined to be the maximum population of that organism that the environment can sustain indefinitely.</li>
					<li>Let \(K\) represent the carrying capacity for a particular organism in a given environment, and let \(r\) be a real number that represents the growth rate. The function \(P(t)\) represents the population of this organism as a function of time \(t\). Then the <b>logistic differential equation</b> is:</li>
					<MathStuff>$$\frac{"{dP}{dt}"} = rP \left( 1 - \frac{"{P}{K}"} \right)$$</MathStuff>
					<li>Consider the logistic differential equation subject to an initial population of \(P_0\). The solution to the corresponding initial-value problem is given by:</li>
					<MathStuff>$$ P(t) = \frac{"{P_0 K e^{rt}}{(K-P_0) + P_0 e^{rt}}"} $$</MathStuff>
					<li>Value of \(t\) for the point of inflection:<SubList>
						<li>In the logistic graph, the point of inflection can be seen as the point where the graph changes from concave up to concave down:</li>
						<MathStuff>$$ t = \frac{"{1}{r}"} \ln \frac{"{K-P_0}{P_0}"} $$</MathStuff>
						<li>Notice that if \(P_0 \gt K\), then this quantity is undefined, and the graph does not have a point of inflection.</li>
					</SubList></li>
				</SubList></li>
				<li><b>First-order linear equations:</b><SubList>
					<li>A <b>first-order differential equation</b> is linear if it can be written in the form \(a(x)y'+b(x)y=c(x)\) where \(a(x)\), \(b(x)\) and \(c(x)\) are arbitrary functions of \(x\).</li>
					<li>It is useful to have the coefficient of \(y'\) be equal to 1. This is called the <b>standard form of the differential equation</b>:</li>
					<MathStuff>$$ y'+ \frac{"{b(x)}{a(x)}"}y= \frac{"{c(x)}{a(x)}"} $$</MathStuff>
					<li>We can define \(p(x)= \frac{"{b(x)}{a(x)}"}\) and \(q(x)= \frac{"{c(x)}{a(x)}"}\).</li>
					<MathStuff>$$ y'+ p(x) y= q(x) $$</MathStuff>
					<li>Solution to this type of differential equation is:</li>
					<MathStuff>$$ y= \frac{"{1}{u(x)}"} \left[ \int u(x)q(x) \ dx + C \right] $$</MathStuff>
					<li>Where:</li>
					<MathStuff>$$ u(x) = e^{"{\\int p(x) \\ dx}"} $$</MathStuff>
				</SubList></li>
			</ul>
		</div>
	</div>
	
	<h2>Sequences And Series</h2>
	<div className="content">
		<div data-source={65} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li>Terminology of sequences:<SubList>
					<li>An infinite sequence (denoted as \({"\\{ a_n \\}"}\) or \({"\\{ a_n \\}^\\infty_{n=1}"}\)) is an ordered list of numbers of the form:</li>
					<MathStuff>$$a_1,a_2, \ldots , a_n, \ldots $$</MathStuff>
					<li>The subscript \(n\) is called the <b>index variable</b> of the sequence. Each number \(a_n\) is a term of the sequence.</li>
					<li>Sometimes sequences are defined by <b>explicit formulas</b>, in which case \(a_n=f(n)\) for some function \(f(n)\) defined over the positive integers.</li>
					<li>In a <b>recurrence relation</b>, one term (or more) of the sequence is given explicitly, and subsequent terms are defined in terms of earlier terms in the sequence.</li>
					<li>Note that the index does not have to start at \(n=1\) but could start with other integers. For example:</li>
					<MathStuff>$$a_0, a_1,a_2, \ldots $$</MathStuff>
					<li>Consider the ordered list \((2,4,8,16,32, \ldots)\). We can write the \(n\)th term by an explicit formula: \(a_n = 2^n\) or by the recurrence relation: \(a_n = 2 a_{"{n-1}"}\). We can write the sequence like this: \({"\\{ 2^n \\}_{n=1}^\\infty"}\).</li>
				</SubList></li>
				<li><b>Arithmetic sequence:</b><SubList>
					<li>In an <b>arithmetic sequence</b>, the difference between every pair of consecutive terms is the same.</li>
					<li>Consider the sequence \((3,7,11,15,19, \ldots)\). The terms can be described by the recurrence relation:</li>
					<MathStuff>$$a_n = {"{\\begin{cases} a_1 = 3 \\\\ a_n = a_{n-1} + 4 \\end{cases}}"}$$</MathStuff>
					<li>The terms can be described by the explicit formula \(a_n = 4n-1\).</li>
					<li className="ownExplanation">The general explicit formula is: \(a_n = a_0 + (n-1)d\) where \(d\) is the difference.</li>
				</SubList></li>
				<li><b>Geometric sequence:</b><SubList>
					<li>In a geometric sequence, the ratio of every pair of consecutive terms is the same. For example, consider the sequence:</li>
					<MathStuff>$$ 2, -\frac{"{2}{3}"},  \frac{"{2}{9}"}, \frac{"{2}{27}"}, - \frac{"{2}{81}"}, \ldots $$</MathStuff>
					<li>We see that the ratio of any term to the preceding term is \(-\frac{"{1}{3}"}\). Assuming this pattern continues, this sequence is a geometric sequence. It can be defined recursively as:</li>
					<MathStuff>$$ a_n = {"{\\begin{cases} a_1 = 2 \\\\ a_n = - \\frac{a_{n-1}}{3} \\end{cases}}"} $$</MathStuff>
					<li>We can also use the explicit formula:</li>
					<MathStuff>$$ a_n = 2 \left( -\frac{"{1}{3}"} \right)^{"{n-1}"} $$</MathStuff>
					<li className="ownExplanation">The general explicit formula is: \(a_n = a_0 r^{"{n-1}"}\) where \(r\) is the ratio.</li>
				</SubList></li>
				<li>Limit of a sequence:<SubList>
					<li>Given a sequence \({"\\{a_n\\}"}\), if the terms \(a_n\) become arbitrarily close to a finite number \(L\) as \(n\) becomes sufficiently large, we say \({"\\{a_n\\}"}\) is a <b>convergent sequence</b> and \(L\) is the limit of the sequence. In this case, we write: \(\lim_{"{n \\to \\infty}"} a_n = L\)</li>
					<li>If a sequence \({"\\{a_n\\}"}\) is not convergent, we say it is a <b>divergent sequence</b>.</li>
					<TableLI>
						<caption>Definition</caption>
						<tbody>
							<tr><td>A sequence \({"\\{a_n\\}"}\) converges to a real number \(L\) if for all \(ε \gt 0\), there exists an integer \(N\) such that \(|a_n-L| \lt ε\) if \(n≥N\). The number \(L\) is the limit of the sequence and we write: \[\lim_{"{n \\to \\infty}"} a_n = L\]</td></tr>
						</tbody>
					</TableLI>
					<li>Consider a sequence \({"\\{a_n\\}"}\) and suppose there exists a real number \(L\) such that the sequence \({"\\{a_n\\}"}\) converges to \(L\). Suppose \(f\) is a continuous function at \(L\). The sequence \({"\\{f(a_n) \\}"}\) converges to \(f(L)\). If \({"\\{ f(a_n) \\}"}\) is not defined for all \(a_n\), there should exist an integer \(N\) such that \(f\) is defined at all values \(a_n\) for \(n≥N\).</li>
					<TableLI>
						<caption>Squeeze theorem for sequences</caption>
						<tbody>
							<tr><td>
								Consider sequences \({"\\{a_n\\}"}\), \({"\\{b_n \\}"}\), and \({"\\{ c_n \\}"}\). Suppose there exists an integer \(N\) such that:
								\[a_n≤b_n≤c_n \text{"{ for all }"} n≥N\]
								If there exists a real number \(L\) such that:
								\[ \lim_{"{n \\to \\infty}"} a_n =L= \lim_{"{n \\to \\infty}"} c_n\]
								then \({"\\{ b_n \\}"}\) converges and \(\lim_{"{n \\to \\infty}"} b_n=L\).
							</td></tr>
						</tbody>
					</TableLI>
					<li>A sequence \({" \\{a_n \\}"}\) is bounded above if there exists a real number \(M\) such that \(a_n \le M \) for all positive integers \(n\).</li>
					<li>A sequence \({" \\{a_n \\}"}\) is bounded below if there exists a real number \(M\) such that \(a_n \ge M \) for all positive integers \(n\).</li>
					<li>A sequence \({" \\{a_n \\}"}\) is a <b>bounded sequence</b> if it is bounded above and bounded below. Otherwise it is an <b>unbounded sequence</b>.</li>
					<li>A sequence \({" \\{a_n \\}"}\) is increasing for all \(n≥n_0\) if \({"a_{n+1} \\ge a_n"}\) for all \(n≥n_0\).</li>
					<li>A sequence \({" \\{a_n \\}"}\) is decreasing for all \(n≥n_0\) if \({"a_{n+1} \\le a_n"}\) for all \(n≥n_0\).</li>
					<li>A sequence \({" \\{a_n \\}"}\) is a <b>monotone sequence</b> for all \(n≥n_0\) if it is increasing for all \(n≥n_0\) or decreasing for all \(n≥n_0\).</li>
					<li><u><b>Monotone convergence theorem:</b></u> If \({" \\{a_n \\}"}\) is a bounded sequence and there exists a positive integer \(n_0\) such that \({" \\{a_n \\}"}\) is monotone for all \(n≥n_0\), then \({" \\{a_n \\}"}\) converges.</li>
				</SubList></li>
				<li>Sums and series:<SubList>
					<li>We have seen that a sequence is an ordered set of terms. If you add these terms together, you get a <b>series</b>.</li>
					<li>An <b>infinite series</b> is a sum of infinitely many terms and is written in the form:</li>
					<MathStuff>$$ \sum^\infty_{"{n=1}"} a_n = a_1 + a_2 + a_3 + \dots $$</MathStuff>
					<li>A \(k\)th <b>partial sum</b> of an infinite series is a finite sum of the form:</li>
					<MathStuff>$$ \sum^k_{"{n=1}"} a_n = a_1 + a_2 + a_3 + \dots + a_k $$</MathStuff>
					<li>Let \(S_k\) be the \(k\)th partial sum, and let \({"\\{S_k\\}"}\) be sequence of partial sums. If \({"\\{S_k\\}"}\) converges (i.e. \(S_k\) approaches a real number when \(k\) goes to infinity), then the infinite series converges.</li>
					<li>If \({"\\{S_k\\}"}\) diverges, then the infinite series diverges.</li>
					<li className="ownExplanation">An <b>arithmetic series</b> is the sum of an arithmetic sequence. A general formula for it is \(S_k = \frac{"{k}{2}(2 a_0 + (k-1)d)"}\).</li>
				</SubList></li>
				<li>Algebraic properties of convergent series:<SubList>
					<li>Let \(\sum^\infty_{"{n=1}"} a_n\) and \(\sum^\infty_{"{n=1}"} b_n\) be convergent series.</li>
					<li>\(\sum^\infty_{"{n=1}"} a_n + b_n\) = \(\sum^\infty_{"{n=1}"} a_n\) + \(\sum^\infty_{"{n=1}"} b_n\)</li>
					<li>\(\sum^\infty_{"{n=1}"} a_n - b_n\) = \(\sum^\infty_{"{n=1}"} a_n\) - \(\sum^\infty_{"{n=1}"} b_n\)</li>
					<li>c\(\sum^\infty_{"{n=1}"} a_n\) = \(\sum^\infty_{"{n=1}"} ca_n\)</li>
				</SubList></li>
				<li><b>Geometric series:</b><SubList>
					<li>A <b>geometric series</b> is any series that we can write in the form:</li>
					<MathStuff>$$ a + ar + ar^2 + ar^3 + \ldots = \sum^\infty_{"{n=1}"} ar^{"{n-1}"} $$</MathStuff>
					<li>The sum for a partial series is:</li>
					<MathStuff>$$ S_k = \frac{"{a(1-r^k)}{1-r}"} $$</MathStuff>
					<li>If \(|r| \lt 1\), \(S_k → a/(1-r)\) (i.e. the series converges), and if \(|r| \ge 1\), \(S_k\) diverges.</li>
				</SubList></li>
				<li>Telescoping series:<SubList>
					<li>A <b>telescoping series</b> is a series in which most of the terms cancel in each of the partial sums, leaving only some of the first terms and some of the last terms.</li>
					<li>For example, any series of the form:</li>
					<MathStuff>$$\begin{"{aligned}"} \sum^k_{"{n=1}"} [b_n - b_{"{n+1}"}] &= b_1 - b_2 + b_2 - b_3 + \dots + b_k - b_{"{k+1}"} \\ &= b_1 - b_{"{k+1}"} \end{"{aligned}"}$$</MathStuff>
					<li>If \(b_n\) converegs to \(B\) when \(n \to \infty\):</li>
					<MathStuff>$$ \sum^\infty_{"{n=1}"} [b_n - b_{"{n+1}"}] = b_1 - B $$</MathStuff>
					</SubList></li>
			</ul>
			<ul className={"ownExplanation"}>
				<li><b>Divergence test:</b><SubList>
					<li>If \(\lim_{"{n \\to \\infty}"} a_n = L\) where \(L\) is a non-zero constant or if \(\lim_{"{n \\to \\infty}"} a_n \) does not exist, then \(\sum^∞_{"{n=1}"} a_n\) diverges.</li>
					<li>If \(\lim_{"{n \\to \\infty}"} a_n = 0\), then \(\sum^∞_{"{n=1}"} a_n\) may or may not converge.</li>
					<li>A <b>harmonic series</b> \(\left( 1 + {"\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}"} + \ldots \right)\) does not converge.</li>
				</SubList></li>
				<li><b>Integral test:</b><SubList>
					<li>Consider a series \(\sum_{"{n=1}"}^∞ a_n\) with only positive terms.</li>
					<li>Let there be an integer \(N\) and a monotone decreasing function \(f\), such that \(f\) is defined on \([N, ∞)\) and \(f(n) = a_n\) for \(n \ge N\), then both the integral and the series below either converge or they both diverge:</li>
					<MathStuff>$$ \sum_{"{n=1}"}^\infty a_n \quad \int_N^\infty f(x) dx $$</MathStuff>
					<li>We can find an approximation of \(\sum_{"{n=N}"}^∞ a_n\) using this:</li>
					<MathStuff>$$ \int^\infty_N f(x) dx \le \sum_{"{n=N}"}^\infty a_n \le a_N + \int_N^\infty f(x) dx $$</MathStuff>
				</SubList></li>
			</ul>
		</div>
		<div style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
			<ul data-source={65}>
				<li><b>The p-Series:</b><SubList>
					<li>For any real number \(p\), the series \(\sum^\infty_{"{n=1}"}\frac{"{1}{n^p}"}\) is called a <b>p-series</b>.</li>
					<li>The p-series diverges if \(p \le 1\).</li>
					<li>If \(p \gt 1\), then \(\sum^\infty_{"{n=1}"}\frac{"{1}{n^p}"}\) converges because\(\int^\infty_1 \frac{"{1}{x^p}"} dx\) converges.</li>
					<MathStuff>$$ \int^\infty_1 \frac{"{1}{x^p}"} dx = \frac{"{1}{p-1}"} \text{"{ if }"} p \gt 1$$</MathStuff>
				</SubList></li>
				<li>Remainder estimate for the integral test:<SubList>
					<li>Suppose \(\sum_{"{n=1}"}^∞ a_n\) is a convergent series with positive terms.</li>
					<li>Let \(S_N\) be the \(N\)th partial sum of \(\sum_{"{n=1}"}^∞ a_n\).</li>
					<li>Let \(R_N\) be defined as:</li>
					<MathStuff>$$ R_N = \sum_{"{n=N}"}^∞ a_n - S_N = \sum_{"{n=N+1}"}^∞ a_n$$</MathStuff>
					<li>This means:</li>
					<li>The <b>remainder estimate</b>.</li>
				</SubList></li>
				<li><b>Comparison Test:</b><SubList>
					<li>Suppose there exists an integer \(N\) such that \(0≤ a_n ≤ b_n\) for all \(n≥N\). If \(\sum^∞_{"{n=1}"} b_n\) converges, then \(\sum^∞_{"{n=1}"} a_n\) converges.</li>
					<li>Suppose there exists an integer \(N\) such that \(a_n \ge b_n \ge 0\) for all \(n≥N\). If \( \sum^∞_{"{n=1}"} b_n \) diverges, then \(\sum^∞_{"{n=1}"} a_n\) diverges.</li>
				</SubList></li>
				<li><b>Limit Comparison Test:</b><SubList>
					<li>Let \(a_n, b_n≥ 0\) for all \(n≥1\):<SubList opened>
						<li>If \(\lim_{"{n→∞}"} \frac{"{a_n}{b_n}"} = L ≠ 0\), then \(\sum^∞_{"{n=1}"} a_n\) and \(\sum^∞_{"{n=1}"} b_n\) both converge or both diverge.</li>
						<li>If \(\lim_{"{n→∞}"} \frac{"{a_n}{b_n}"} = 0\) and \(\sum^∞_{"{n=1}"} b_n\) converges, then \(\sum^∞_{"{n=1}"} a_n\) converges.</li>
						<li>If \(\lim_{"{n→∞}"} \frac{"{a_n}{b_n}"} = \infty\) and \(\sum^∞_{"{n=1}"} b_n\) diverges, then \(\sum^∞_{"{n=1}"} a_n\) diverges.</li>
					</SubList></li>
				</SubList></li>
				<li><b>Alternating Series:</b><SubList>
					<li>Any series whose terms alternate between positive and negative values is called an <b>alternating series</b>. An alternating series can be written in one of these forms:</li>
					<MathStuff>$$\begin{"{gather}"} \sum^{"{\\infty}"}_{"{n=1}"} (-1)^{"{n+1}"} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \cdots \\ \sum^{"{\\infty}"}_{"{n=1}"} (-1)^n b_n = - b_1 + b_2 - b_3 + b_4 - b_5 + \cdots \end{"{gather}"}$$</MathStuff>
					<li>Where \(b_n \gt 0\).</li>
					<li>If there exists \(N\) such that \(0 \lt b_{"{n+1}"} \le b_n\) for all \(n \ge N\) and if \(\lim_{"{n \\to \\infty}"} b_n = 0\), then it converges. This is known as the <b>alternating series test</b>.</li>
				</SubList></li>
				<li>Absolute convergence and conditional convergence:<SubList>
					<li>A series \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) exhibits <b>absolute convergence</b> if \(\sum^{"{\\infty}"}_{"{n=1}"} |a_n|\) converges. A series \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) exhibits <b>conditional convergence</b> if \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges but \(\sum^{"{\\infty}"}_{"{n=1}"} |a_n|\) diverges.</li>
					<li><u>Absolute Convergence Implies Convergence:</u> If \(\sum^{"{\\infty}"}_{"{n=1}"} |a_n|\) converges, then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges.</li>
				</SubList></li>
				<li><b>Ratio test:</b><SubList>
					<li>Let \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) be a series with nonzero terms, and let \(p = \lim_{"{n \\to \\infty}"} | \frac{"{a_{n+1}}{a_n}"} |\).</li>
					<li>If \(p \lt 1\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges absolutely.</li>
					<li>If \(p \gt 1\) or \(p=\infty\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) diverges.</li>
					<li>If \(p=1\), the test does not provide any information.</li>
				</SubList></li>
				<li><b>Root test:</b><SubList>
					<li>Let \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) be a series with nonzero terms, and let \(p = \sqrt[n]{"{|a_n|}"}\).</li>
					<li>If \(p \lt 1\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges absolutely.</li>
					<li>If \(p \gt 1\) or \(p=\infty\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) diverges.</li>
					<li>If \(p=1\), the test does not provide any information.</li>
				</SubList></li>
				<li><b>Power series:</b><SubList>
					<li>A series of the form:</li>
					<MathStuff>$$ \sum^{"{\\infty}_{n=0}"} c_n (x-a)^n = c_0 + c_1 (x-a) + c_2(x-a)^2 + c_3 (x-a)^3 + c_4 (x-a)^4 + \cdots $$</MathStuff>
					<li>is a <b>power series</b> centered at \(x=a\).</li>
					<li>The set of values \(x\) for which the series converges is known as the <b>interval of convergence</b>. The value \(R\) is called the <b>radius of convergence</b>.</li>
				</SubList></li>
				<li>Properties of a power series:<SubList>
					<li>Suppose that the two power series \(\sum_{"{n=0}"}^{"{\\infty}"} c_n x^n\) and \(\sum_{"{n=0}"}^{"{\\infty}"} d_n x^n\) converge to the functions \(f\) and \(g\), respectively, on a common interval \(I\).</li>
					<li>The power series \(\sum_{"{n=0}"}^{"{\\infty}"} (c_n x^n ± d_nx^n)\) converges to \(f±g\) on \(I\).</li>
					<li>Let \(m \ge 0\) be an integer and \(b\) be a real number:<SubList opened>
						<li>The series \(\sum_{"{n=0}"}^{"{\\infty}"} b x^m c_n x^n\) converges to \(b x^m f(x)\) on \(I\).</li>
						<li>The series \(\sum_{"{n=0}"}^{"{\\infty}"} c_n (bx^m)^n\) converges to \(f(bx^m)\) for all x such that \(bx^m\) is in \(I\).</li>
					</SubList></li>
					<li>Let \(e^n\) be defined as:</li>
					<MathStuff>$${"\\begin{align} e_n &= c_0 d^n + c_1d^{n-1} + c_2 d^{n-2} + \\cdots +c_{n-1}d^1 + c_n d^0 \\\\ &= \\sum_{k=0}^n c_k d^{n-k} \\end{align}"}$$</MathStuff>
					<li>Then:</li>
					<MathStuff>$${" \\left( \\sum_{n=0}^{\\infty} c_n x^n \\right) \\left( \\sum_{n=0}^{\\infty} d_n x^n \\right) = \\sum_{n=0}^{\\infty} e_n x^n "}$$</MathStuff>
					<li>Where \(\sum{"_{n=0}^{\\infty}"} e_n x^n\) is known as the <b>Cauchy product</b> and it converges to \(f(x) * g(x)\) on \(I\).</li>
				</SubList></li>
				<li><b>Taylor/Maclaurin Series:</b><SubList>
					<li>If \(f\) has derivatives of all orders at \(x=a\), then the <b>Taylor series</b> for the function \(f\) at \(a\) is:</li>
					<MathStuff>$${" f(x) = \\sum^{\\infty}_{n=0} \\frac{f^{(n)}(a)}{n!}(x-a)^n "}$$</MathStuff>
					<li>The Taylor series for \(f\) at 0 is known as the <b>Maclaurin series</b> for \(f\).</li>
					<li>The \(n\)th partial sum is known as the \(n\)th <b>Taylor polynomials</b>. If \(a=0\), then they are known as <b>Maclaurin polynomials</b>.</li>
					<li><a href='https://en.wikipedia.org/wiki/Taylor_series'>A function is <b>analytic</b> at a point \(a\) if it is equal to the sum of its Taylor series in some open interval containing \(a\). A function may differ from the sum of its Taylor series, even if its Taylor series is convergent.</a></li>
					<li><b>Taylor's Theorem with Remainder:</b><SubList>
						<li>Let \(f\) be a function that can be differentiated \(n+1\) times on an interval \(I\) containing the real number \(a\). Let \(p_n\) be the \(n\)th Taylor polynomial of \(f\) at \(a\) and let \(R_n (x)\) be the \(n\)th remainder:</li>
						<MathStuff>$${" R_n(x) = f(x) - p_n(x) "}$$</MathStuff>
						<li>then for each \(x\) in the interval \(I\), there exists a real number \(c\) between \(a\) and \(x\) such that:</li>
						<MathStuff>$${" R_n(x) = \\frac{f^{(n+1)} (c)}{(n+1)!} (x-a)^{n+1} "}$$</MathStuff>
						<li>If there exists a real number \(M\) such that \(| f^{"{(n+1)}"}(x) | \le M\) for all \(x∈I\), then:</li>
						<MathStuff>$${" | R_n(x) | \\le \\frac{M }{(n+1)!} |x-a|^{n+1} "}$$</MathStuff>
						<li>for all \(x∈I\).</li>
					</SubList></li>
					<li>Convergence of Taylor Series:<SubList>
						<li>Suppose that \(f\) has derivatives of all orders on an interval \(I\) containing \(a\). Then the Taylor series:</li>
						<MathStuff>$${" \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n "}$$</MathStuff>
						<li>converges to \(f(x)\) for all \(x\) in \(I\) if and only if \(\lim_{"{n→\\infty}"} R_n (x)=0\) for all \(x\) in \(I\).</li>
					</SubList></li>
					<ImgComp src={require("./calculus_pics/29.png")} width="90%" />
				</SubList></li>
			</ul>
		</div>
	</div>
</>