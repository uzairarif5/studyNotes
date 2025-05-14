import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { analogSignalProcessing } from "./analog_signal_processing";
import { fourierAnalysis } from "./fourier_analysis";
import SubList from "../../articleRelatedStuff/SubList";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export const title = "Signal And Systems Notes";
export const sourcesColor = {2:"#4f94ac", 1:null,3:null, 4:null};
export const additionalResources = [77];
export const content = <>
	<h1>Signal And Systems Notes</h1>

	<h2 id="introduction">Introduction</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<h3>Signal</h3>
			<ul>
				<li><u>Definitions:</u><SubList>
					<li>A <b>signal</b> is a physical quantity that varies with time, space, or any other independent variable by which information can be conveyed.</li>
					<li>In electronics and telecommunications, signal refers to any time-varying voltage, current, or electromagnetic wave that carries information.</li>
					<li>In signal processing, signals are analog and digital representations of analog physical quantities. The IEEE Transactions on Signal Processing includes audio, video, speech, image, sonar, and radar as examples of signals.</li>
					<li data-source={2}>Stated in mathematical terms, a signal is merely a function. <b>Analog signals</b> are continuous valued; <b>digital signals</b> are discrete-valued.</li>
					<li data-source={2}>The basic idea of communication engineering is to use a signal's parameters to represent either real numbers or other signals. The technical term is to <b>modulate</b> the <b>carrier signal's</b> parameters to transmit information from one place to another.</li>
				</SubList></li>
				<li>Signal Classifications:<SubList>
					<li>A <b>continuous-time signal</b> will contain a value for all real numbers along the time axis. In contrast to this, a <b>discrete-time signal</b> will only have values at equally spaced intervals along the time axis.</li>
					<li><b>Analog</b> corresponds to a continuous set of possible function values, while <b>digital</b> corresponds to a discrete set of possible function values.</li>
					<li><b>Periodic signals</b> repeat with some period \(T\), while <b>aperiodic signals</b> do not. A mathematical expression with a period: \([ f(t) = f(t + T) ]\). The <b>Fundamental period</b> of our function, \(f(t)\), is the smallest value of \(T\) that still allows the equation to be true.</li>
					<li><b>Causal signals</b> are zero for all negative time, while <b>anticausal signals</b> are zero for all positive time.</li>
					<li><b>Noncausal signals</b> have nonzero values in both positive and negative time.</li>
					<li>An <b>even signal</b> is any signal \(f\) such that  \(f(t)=f(-t)\) (they are symmetric around the vertical axis).</li>
					<li>An <b>odd signal</b>, on the other hand, is a signal \(f\) such that  \(f(t)=-f(-t)\).</li>
					<li>A <b>deterministic signal</b> is a signal in which each value of the signal is fixed, being determined by a mathematical expression, rule, or table.</li>
					<li>The values of a <b>random signal</b> are not strictly defined, but are subject to some amount of variability.</li>
				</SubList></li>
				<li>Signal Operations:<SubList>
					<li><b>Time Shifting:</b> This is done by adding or subtracting a quantity of the shift to the time variable in the function: \(f(t-T)\) moves (delays) \(f\) to the right by \(T\).</li>
					<li><b>Time Scaling:</b> Time scaling compresses or dilates a signal by multiplying the time variable by some quantity: \(f(at)\) compresses \(f\) by \(a\).</li>
					<li><b>Time Reversal:</b> This operation is the reversal of the time axis, or flipping the signal over the y-axis.</li>
				</SubList></li>
				<li>Common Continuous Time Signals:<SubList>
					<li><b>Sinusoids:</b> \(A \cos(\omega t + \phi)\) where  \(A\) is the amplitude, \(\omega\) is the frequency, and \(\phi\) is the phase. Also, the period \(T\) is \({"\\frac{2\\pi}{\\omega}"}\).</li>
					<li><b>Unit Step:</b> \(u(t) = 0\) if \(t&lt;0\), otherwise \(u(t) = 1\).</li>
					<li>The <b>unit impulse function</b>, also known as the <b>Dirac delta function</b>, is a signal that has infinite height and infinitesimal width. The value is zero everywhere except at zero, and the integral over the entire real line is equal to one. <u>Properties:</u><SubList>
						<li>\(\delta(\alpha t)={"\\frac{\\delta(t)}{|\\alpha|}"}\), explained <a href='https://math.stackexchange.com/questions/3814228/scaling-property-of-dirac-delta-function-is-not-intuitive'>here</a></li>
						<li>\(f(t)\delta(t)=f(0)\delta(t)\)</li>
						<li>\(\int^\infty_{"{-\\infty}"} f(t) \delta(t-T) dt = f(T)\)</li>
						<li>\(\delta(t)={"\\frac{d}{dt}"}u(t)\), where \(u(t)\) is the unit step.</li>
					</SubList></li>
					<li><b>Complex Exponentials:</b> \(Ae^{"{st}"}\) where \(s = \sigma + j \omega\) is a complex number. \(σ\) is the attenuation constant, and \(ω\) is the angular frequency. In polar form, \(A=|A|e^{"{j\\Theta}"}\).</li>
					<li>The <b>Rect</b> Function is a function which produces a rectangular-shaped pulse with a width of 1 centered at t = 0. A Rect function can be written in the form: \(Rect \left( \frac{"{t-X}{Y}"} \right)\) where the pulse is centered at \(X\) and has width \(Y\).</li>
					<li>The <b>sinc</b> function: \({"sinc(x) = \\frac{\\sin \\pi x}{\\pi x}"}\) if (\(x=0\)).</li>
				</SubList></li>
				<li>Continous signal properties:<SubList>
					<li>Any signal can be written as a combination of an even and odd signal:</li>
					<MathStuff>{"\
						$$f(t)=\\frac{1}{2}f(t)+\\frac{1}{2}f(t)+\\frac{1}{2}f(-t)-\\frac{1}{2}f(-t)$$\
						$$\\therefore f(t)=\\frac{1}{2}(f(t)+f(-t))+\\frac{1}{2}(f(t)-f(-t))$$\
						$$\\begin{align}\
							g(t)=g(-t) &\\implies 2g(t)=g(-t)+g(t)\\\\\
							h(t)=-h(-t) &\\implies 2h(t) = -h(-t) + h(t)\\\\\
						\\end{align}$$\
						$$\\begin{align}\
							&\\text{The } \\left[ f(t)+f(-t) \\right] \\text{ part is even}\\\\\
							&\\text{The } \\left[ f(t)-f(-t) \\right] \\text{ part is odd}\
						\\end{align}$$\
					"}</MathStuff>
					<li className="research">Let \(x_1\) and \(x_2\) be (continuous) periodic functions with periods \(T_1\) and \(T_2\), respectively, where \(T_1\) and \(T_2\) are real numbers. Then, \(x\) is periodic with period \(T = lcm(T_1,T_2)\), and \(x\) can only be periodic if \(\frac{"{T_1}"}{"{T_2}"}\) is rational (so \(\frac{"{T_1}"}{"{T_2}"} = \frac{"{r}"}{"{q}"}\) where \(r\) and \(q\) are integers).</li>
					<li><b>Energy signals:</b> When the signal's energy is a finite positive value, but the average powers are 0:</li>
					<MathStuff>$$E=\int^{"{\\infty}"}_{"{-\\infty}"} |x(t)^2| dt$$</MathStuff>
					<li><b>Power signal:</b> When the signal's average power are equal to a finite positive value, but their energy are infinite:</li>
					<MathStuff>$$P=\lim_{"{T \\to \\infty} \\frac{1}{T}"}\int^{"\\frac{T}{2}"}_{"{-\\frac{T}{2}}"} |x(t)^2| dt$$</MathStuff>
				</SubList></li>
				<li>Common Discrete Time Signals:<SubList>
					<li><b>Sinusoids:</b> \(A \cos(\omega n + \phi)\) where  \(A\) is the amplitude, \(\omega\) is the frequency, and \(\phi\) is the phase. Because \(n\) only takes integer values, the resulting function is only periodic if \({"\\frac{2\\pi}{\\omega}"}\) is a rational number.</li>
					<li>The <b>unit sample function</b>, often referred to as the <b>unit impulse function</b>, defines the idea of a unit impulse in discrete time. \(\delta[n] = 1\) when \(n=0\), otherwise \(\delta[n]=0\). <u>Properties:</u><SubList>
						<li>\(\delta[n]=\delta[-n]\)</li>
						<li>\(\delta[n]=u[n]-u[n-1]\)</li>
						<li>\(x[n]\delta[n]=x[0]\delta[n]\)</li>
						<li>\({"\\sum^\\infty_{-\\infty} x[n]\\delta[n] = \\sum^\\infty_{-\\infty} x[0]\\delta[n] = x[0] \\sum^\\infty_{-\\infty} \\delta[n] = x[0]"}\)</li>
					</SubList></li>
					<li><b>Unit Step:</b> \(u[n] = 0\) if \(n&lt;0\), otherwise \(u[n] = 1\).</li>
					<li><b>Complex Exponentials:</b> \(z^n\) where \(z\) is a complex number:<SubList>
						<li>\(z=|z|e^{"{jω}"}\)</li>
						<li>\(z^n=|z|^ne^{"{jωn}"}\)</li>
						<li>\(\text{"{Re}"}{"\\{z^n\\}"}=(|z|)^n \cos(ωn)\)</li>
						<li>\(\text{"{Im}"}{"\\{z^n\\}"}=(|z|)^n \sin(ωn)\)</li>
					</SubList></li>
				</SubList></li>
			</ul>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<h3>System</h3>
			<ul>
				<li>A <b>System</b> is any physical set of components that takes a signal, and produces a signal.</li>
				<li>Classification of Systems:<SubList>
					<li>A system in which the input signal and output signal both have continuous domains is said to be a <b>continuous system</b>, while one in which the input signal and output signal both have discrete domains is said to be a <b>discrete system</b>. It is possible to conceive of signals that belong to neither category.</li>
					<li><b>Linear Systems:</b><SubList>
						<li>Consider a system for which an input of \(x_i(t)\) results in an output of \(y_i(t)\)respectively for \(i = 1, 2\).</li>
						<li>A system is said to be <b>additive</b> if a sum of inputs results in a sum of outputs.</li>
						<li>A system is <b>homogeneous</b> if a scaled input (multiplied by a constant) results in a scaled output.</li>
						<li>Being linear is also known in the literature as "satisfying the principle of superposition". <b>Superposition</b> is a fancy term for saying that the system is additive and homogeneous.</li>
					</SubList></li>
					<li>A system is said to have <b>memory</b> if the output from the system is dependent on past inputs (or future inputs) to the system. A system is called <b>memoryless</b> if the output is only dependent on the current input.</li>
					<li>Given a system with a time-dependent output function \(y(t)\), and a time-dependent input function \(x(t)\), the system will be considered <b>time-invariant</b> if a time-delay on the input \(x(t + \delta)\) directly equates to a time-delay of the output \(y(t + \delta)\) function.</li>
					<li><b>Time variant</b> systems respond differently to the same input at different times.</li>
					<li>A <b>causal system</b> is one in which the output depends only on current or past inputs, but not future inputs. All "realtime" systems must be causal, since they can not have future inputs available to them.</li>
					<li>An <b>anticausal system</b> is one in which the output depends only on current or future inputs, but not past inputs.</li>
					<li>A <b>noncausal system</b> is one in which the output depends on both past and future inputs.</li>
					<li>If we wanted to do image processing, the dependent variable might represent pixel positions to the left and right (the "future") of the current position on the image, and we would not necessarily have a causal system.</li>
					<li>A <b>BIBO stable system</b> is one in which the output is bounded if the input is also bounded. If a system is BIBO stable, then the output will be bounded for every input to the system that is bounded.</li>
				</SubList></li>
			</ul>
			<ul data-source={2}>
				<li>Structure of Communication Systems:<SubList>
					<li><ImgComp src={"/articlePics/signals_and_systems_pics/1.PNG"} style={{width:"80%"}}/></li>
					<li>In the communications model, the <b>source</b> produces a signal that will be absorbed by the <b>sink</b>. The source is a system having no input but producing an output; a sink has an input and no output.</li>
					<li>Information sources produce signals. In physical systems, each signal corresponds to an electrical voltage or current.</li>
					<li><b>Messages</b> — signals produced by sources — must be recast for transmission. The message \(s(t)\) passing through a <b>transmitter</b> that produces the signal \(x(t)\). In a case of a radio transmitter, it accepts an input audio signal and produces a signal that physically is an electromagnetic wave radiated by an antenna</li>
					<li>The transmitter should not operate in such a way that the message \(s(t)\) cannot be recovered from \(x(t)\). In the mathematical sense, the inverse system must exist, else the communication system cannot be considered reliable. It is ridiculous to transmit a signal in such a way that no one can recover the original. </li>
					<li>In a <b>channel</b>, the signal can become corrupted by noise, distorted, and attenuated among many possibilities.</li>
					<li>The <b>receiver</b> must do its best to produce a received message \(\hat s(t)\) that resembles \(s(t)\) as much as possible.</li>
				</SubList></li>
				<li>Interconnection of Systems:<SubList>
					<li><b>Cascade</b>: When one system's output is connected only to another's input.</li>
					<li><ImgComp src={"/articlePics/signals_and_systems_pics/2.png"} style={{width:"70%"}}/></li>
					<li><b>Parallel:</b> A signal \(x(t)\) is routed to two (or more) systems, with this signal appearing as the input to all systems simultaneously and with equal strength.</li>
					<li><ImgComp src={"/articlePics/signals_and_systems_pics/3.png"} style={{width:"70%"}}/></li>
					<li><b>Feedback:</b></li>
					<li><ImgComp src={"/articlePics/signals_and_systems_pics/4.png"} style={{width:"70%"}}/></li>
				</SubList></li>
				<li>Simple Systems:<SubList>
					<li><b>Sources</b> produce signals without having input. We like to think of these as having controllable parameters, like amplitude and frequency.</li>
					<li>An <b>amplifier</b> multiplies its input by a constant known as the <b>amplifier gain</b> (if less than one, the amplifier <b>attenuates</b>).</li>
					<li>A system serves as a <b>time delay</b> when the output signal equals the input signal at an earlier time.</li>
				</SubList></li>

			</ul>
		</div>
	</div>

	{analogSignalProcessing()}

	<h2 id="timeDomainAnalysis">Time Domain Analysis</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<h3>Discrete System</h3>
			<ul>
				<li>Impulse Responses:<SubList>
					<li>The function \(δ_k [n]=δ[n-k]\) peaks up where \(n=k\).</li>
					<li>By the sifting property of impulses, any signal can be decomposed in terms of an infinite sum of shifted, scaled impulses: \(x[n] = \sum^\infty_{"{k=-\\infty}"} x[k] δ_k[n]\).</li>
				</SubList></li>
				<li>Convolution:<SubList>
					<li><b>Discrete time convolution</b> is an operation on two discrete time signals:</li>
					<MathStuff>$$(f*g)[n]=\sum^\infty_{"{k=-\\infty}"} f[k]g[n-k] $$</MathStuff>
					<li>for all signals \(f\), \(g\) defined on \(\mathbb Z\).</li>
					<li>Properties:<SubList>
						<li><b>Associativity:</b> \(f_1∗(f_2∗f_3)=(f_1∗f_2)∗f_3\).</li>
						<li><b>Commutativity:</b> \(f_1∗f_2=f_2∗f_1\)</li>
						<li><b>Distribitivity:</b> \(f_1∗(f_2+f_3)=(f_1∗f_2)+(f_1∗f_3)\)</li>
						<li><b>Multilinearity:</b> \(a(f_1∗f_2)=(af_1)∗f_2=f_1∗(af_2)\)</li>
					</SubList></li>
					<li><b>Discrete time circular convolution</b> is an operation on two finite length or periodic discrete time signals defined by the sum:</li>
					<MathStuff>$$(f \circledast g)[n]=\sum^{"{N-1}"}_{"{k=0}"} \hat f[k] \hat g[n-k] $$</MathStuff>
				</SubList></li>
				<li>Eigenfunction:<SubList>
					<li>An <b>eigenfunction</b> of a system is a signal \(f(t)\) that, when input into the system, produces a response \(y(t) = λf(t)\), where \(λ\) is a complex scalar <b>eigenvalue</b>.</li>
					<li>Consider a linear time invariant system \(H\) with impulse response \(h\) operating on some space of infinite length discrete time signals:</li>
					<MathStuff>$$H(x[n])=\sum^\infty_{"{k=-\\infty}"} h[k]x[n-k] $$</MathStuff>
					<li>Now consider the input \(x(n)=e^{"{sn}"}\) where \(s\in \mathbb C\):</li>
					<MathStuff>
						$${"\\begin{align}\
						H(e^{sn})&=\\sum^\\infty_{k=-\\infty} h[k]e^{s(n-k)}\\\\\
						&=\\sum^\\infty_{k=-\\infty} h[k]e^{sn}e^{-sk}\\\\\
						&=e^{sn} \\sum^\\infty_{k=-\\infty} h[k]e^{-sk}\
						\\end{align}"}$$
						$${"\\therefore H(e^{sn}) = \\lambda_s e^{sn}"}$$
					</MathStuff>
				</SubList></li>
			</ul>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<h3>Continous System</h3>
			<ul>
				<li>Time Impulse Response:<SubList>
					<li><b>Impulse response</b> tells us how a system reacts when we hit it with an impulse signal.</li>
					<li><b>Zero state response</b> means steady state or forced response. This is the system response to an input when the system is in zero state; that is, when all initial conditions are zero.</li>
					<li>By the sifting property of impulses, any signal can be decomposed in terms of an integral of shifted, scaled impulses: \(f(t) = \int^\infty_{"{-\\infty}"} f(\tau) \delta(t-\tau) d\tau \)</li>  
					<li>For an LTI system, the impulse response completely determines the output of the system given any arbitrary input.</li>  
				</SubList></li> 
				<li>Convolution:<SubList>
					<li><b>Continuous time convolution</b> is an operation on two continuous time signals defined by the integral:</li>
					<MathStuff>$$ (f*g)(t) =\int^\infty_{"{-\\infty}"} f(\tau)g(t-\tau) d\tau $$</MathStuff>
					<li>for all signals \(f\), \(g\) defined on \(\mathbb R\).</li>
					<li>Properties:<SubList>
						<li><b>Commutativity:</b> \(f * g\)</li>
						<li><b>Associativity:</b> \((f * g) * h = f * (g * h)\)</li>
						<li><b>Distributivity:</b> \(f * (g + h) = (f * g) + (f*h)\)</li>
						<li><b>Differentiation Rule:</b> \((f * g)' = f' * g = f * g'\)</li>
					</SubList></li>
					<li>More explanation <a href='https://www.youtube.com/watch?v=KuXjwB4LzSA'>here</a>.</li>
					<li><b>Continuous time circular convolution</b> is an operation on two finite length or periodic continuous time signals defined by the integral:</li>
					<MathStuff>$$ (f*g)(t)=\int^T_0 \hat f (\tau)\hat g (t-\tau) d\tau $$</MathStuff>
					<li>for all signals \(f\), \(g\) defined on \( \mathbb R[0,T]\) where \(\hat f\), \(\hat g\) are periodic extensions of \(f\) and \(g\).</li>
				</SubList></li>
				<li>Correlation:<SubList>
					<li>The <b>correlation</b> of two functions, \(g(t)\) and \(h(t)\) is defined as such:</li>
					<MathStuff>$$ R_{"{gh}"}(t)=\int^\infty_{"{-\\infty}"} g(\tau)h(t+\tau) d\tau $$</MathStuff>
					<li>We can define correlation in terms of convolution</li>
					<MathStuff>$$ R_{"{gh}"}(t)=g(t) * h(-t) $$</MathStuff>
					<li><b>Autocorrelation:</b> R_{"{xx}"}(t)=x(t) * x(-t).</li>
				</SubList></li>
				<li>Eigenfunction:<SubList>
					<li>An <b>eigenfunction</b> of a system is a signal \(f(t)\) that, when input into the system, produces a response \(y(t) = λf(t)\), where \(λ\) is a complex scalar <b>eigenvalue</b>.</li>
					<li>Consider a linear time invariant system \(H\) with impulse response \(h\) operating on some space of infinite length continuous time signals:</li>
					<MathStuff>$$ H(x(t))=\int^\infty_{"{-\\infty}"} h(\tau)x(t-\tau) d\tau $$</MathStuff>
					<li>Now consider the input \(x(t)=e^{"{st}"}\) where \(s \in \mathbb C\). Computing the output for this input:</li>
					<MathStuff>
						$${"\\begin{align}\
						H(e^{st})&=\\int^\\infty_{-\\infty} h(\\tau)e^{s(t-\\tau)} d\\tau\\\\\
						&=\\int^\\infty_{-\\infty} h(\\tau)e^{st}e^{-s\\tau} d\\tau\\\\\
						&=e^{st} \\int^\\infty_{-\\infty} h(\\tau)e^{-s\\tau} d\\tau\
						\\end{align}"}$$
						$${"\\therefore H(e^{st}) = \\lambda_s e^{st}"}$$
					</MathStuff>
				</SubList></li>
			</ul>
		</div>
	</div>
	
	{fourierAnalysis()}

</>;