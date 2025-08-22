import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import Vectors from "../mathematics/Vectors";

export const title = "Physics Notes (Part 1)";
export const sourcesColor = {28: null, 6: null, 45: "rgb(110, 110, 140)"};
export const sourcesOrder = [28, 45, 6];
export const content = <>
<h1>Physics Notes</h1>

<h2>Units And Measurements</h2>
<div className="content" data-source={28}>
<ul style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
	<li><b>Model:</b><SubList>
		<li>A model is a representation of something that is often too difficult (or impossible) to display directly.</li>
		<li>An example is the Bohr model of single-electron atoms, in which the electron is pictured as orbiting the nucleus, analogous to the way planets orbit the Sun.</li>
	</SubList></li>
	<li><b>Theories</b> and <b>laws</b>:<SubList>
		<li>To a scientist, a <b>theory</b> is a testable explanation for patterns in nature supported by scientific evidence and verified multiple times by various groups of researchers.</li>
		<li>Any experimentally testable implication of a theory should be verified. If an experiment ever shows an implication of a theory to be false, then the theory is either thrown out or modified suitably.</li>
		<li>A <b>law</b> uses concise language to describe a generalized pattern in nature supported by scientific evidence and repeated experiments. Often, a law can be expressed in the form of a single mathematical equation.</li>
		<li>The designation law is usually reserved for a concise and very general statement that describes phenomena in nature, such as the law that energy is conserved during any process, or Newton's second law of motion.</li>
		<li>A theory, in contrast, is a less concise statement of observed behavior. For example, the theory of evolution and the theory of relativity cannot be expressed concisely enough to be considered laws.</li>
		<li>Less broadly applicable statements are usually called <b>principles</b> (such as Pascal's principle, which is applicable only in fluids), but the distinction between laws and principles often is not made carefully.</li>
	</SubList></li>
	<li>Physical quantities and units:<SubList>
		<li>We define a <b>physical quantity</b> either by specifying how it is measured or by stating how it is calculated from other measurements.</li>
		<li>For example, we might define distance and time by specifying methods for measuring them, such as using a meter stick and a stopwatch. Then, we could define average speed by stating that it is calculated as the total distance traveled divided by time of travel.</li>
		<li>Measurements of physical quantities are expressed in terms of <b>units</b>, which are standardized values.</li>
		<li>For example, the length of a race, which is a physical quantity, can be expressed in units of meters or kilometers.</li>
		<li>In any system of units, the units for some physical quantities must be defined through a measurement process. These are called the <b>base quantities</b> for that system and their units are the system's <b>base units</b>.</li>
		<li>All other physical quantities can then be expressed as algebraic combinations of the base quantities. Each of these physical quantities is then known as a <b>derived quantity</b> and each unit is called a <b>derived unit</b>.</li>
		<TableLI>
			<thead>
			<tr>
			<th scope="col">ISQ Base Quantity</th>
			<th scope="col">SI Base Unit</th>
			</tr>
			</thead><tbody>
			<tr>
			<td>Length</td>
			<td>meter (m)</td>
			</tr>
			<tr>
			<td>Mass</td>
			<td>kilogram (kg)</td>
			</tr>
			<tr>
			<td>Time</td>
			<td>second (s)</td>
			</tr>
			<tr>
			<td>Electrical current</td>
			<td>ampere (A)</td>
			</tr>
			<tr>
			<td>Thermodynamic temperature</td>
			<td>kelvin (K)</td>
			</tr>
			<tr>
			<td>Amount of substance</td>
			<td>mole (mol)</td>
			</tr>
			<tr>
			<td>Luminous intensity</td>
			<td>candela (cd)</td>
			</tr>
			</tbody>
		</TableLI>
		<li><u>Definition of a second:</u> Cesium atoms can be made to vibrate in a very steady way, and these vibrations can be readily observed and counted. In 1967, the second was redefined as the time required for 9,192,631,770 of these vibrations to occur</li>
		<li><u>Definition of a meter:</u> In 1983, the meter was given its definition as the distance light travels in a vacuum in 1/299,792,458 of a second.</li>
	</SubList></li>
	<li>Metric prefixes:<SubList>
<TableLI><thead>
<tr>
<th scope="col">Prefix</th>
<th scope="col">Symbol</th>
<th scope="col">Meaning</th>
<th scope="col">Prefix</th>
<th scope="col">Symbol</th>
<th scope="col">Meaning</th>
</tr>
</thead><tbody>
<tr>
<td>yotta-</td>
<td>Y</td>
<td>10<sup>24</sup></td>
<td>yocto-</td>
<td>y</td>
<td>10<sup>-24</sup></td>
</tr>
<tr>
<td>zetta-</td>
<td>Z</td>
<td>10<sup>21</sup></td>
<td>zepto-</td>
<td>z</td>
<td>10<sup>-21</sup></td>
</tr>
<tr>
<td>exa-</td>
<td>E</td>
<td>10<sup>18</sup></td>
<td>atto-</td>
<td>a</td>
<td>10<sup>-18</sup></td>
</tr>
<tr>
<td>peta-</td>
<td>P</td>
<td>10<sup>15</sup></td>
<td>femto-</td>
<td>f</td>
<td>10<sup>-15</sup></td>
</tr>
<tr>
<td>tera-</td>
<td>T</td>
<td>10<sup>12</sup></td>
<td>pico-</td>
<td>p</td>
<td>10<sup>-12</sup></td>
</tr>
<tr>
<td>giga-</td>
<td>G</td>
<td>10<sup>9</sup></td>
<td>nano-</td>
<td>n</td>
<td>10<sup>-9</sup></td>
</tr>
<tr>
<td>mega-</td>
<td>M</td>
<td>10<sup>6</sup></td>
<td>micro-</td>
<td>μ</td>
<td>10<sup>-6</sup></td>
</tr>
<tr>
<td>kilo-</td>
<td>k</td>
<td>10<sup>3</sup></td>
<td>milli-</td>
<td>m</td>
<td>10<sup>-3</sup></td>
</tr>
<tr>
<td>hecto-</td>
<td>h</td>
<td>10<sup>2</sup></td>
<td>centi-</td>
<td>c</td>
<td>10<sup>-2</sup></td>
</tr>
<tr>
<td>deka-</td>
<td>da</td>
<td>10<sup>1</sup></td>
<td>deci-</td>
<td>d</td>
<td>10<sup>-1</sup></td>
</tr>
</tbody>
</TableLI>
	</SubList></li>
</ul>
<ul style={{width: "49%", marginRight: "0.5%", float: "right"}}>
	<li>Dimensional analysis:<SubList>	
	<li>The <b>dimension</b> of any physical quantity expresses its dependence on the base quantities as a product of symbols (or powers of symbols) representing the base quantities.</li>
	<li>A measurement of length is said to have dimension \(L\) or \(L^1\).</li>
	<li>Area is the product of two lengths and so has dimension \(L^2\).</li>
	<li>A measurement of mass has dimension \(M\) or \(M^1\).</li>
	<li>A measurement of time has dimension \(T\) or \(T^1\)</li>
	<li>Speed has dimension length over time, \(L/T\) or \(LT^{"{-1}"}\).</li>
	<TableLI>
	<thead>
	<tr>
	<th scope="col"><strong>Base Quantity</strong></th>
	<th scope="col"><strong>Symbol for Dimension</strong></th>
	</tr>
	</thead><tbody>
	<tr>
	<td>Length</td>
	<td>L</td>
	</tr>
	<tr>
	<td>Mass</td>
	<td>M</td>
	</tr>
	<tr>
	<td>Time</td>
	<td>T</td>
	</tr>
	<tr>
	<td>Current</td>
	<td>I</td>
	</tr>
	<tr>
	<td>Thermodynamic temperature</td>
	<td>Θ</td>
	</tr>
	<tr>
	<td>Amount of substance</td>
	<td>N</td>
	</tr>
	<tr>
	<td>Luminous intensity</td>
	<td>J</td>
	</tr>
	</tbody>
	</TableLI>
	<li>Physicists often use square brackets around the symbol for a physical quantity to represent the dimensions of that quantity. For example, if \(r\) is the radius of a cylinder and \(h\) is its height, then we write \([r]=L\) and \([h]=L\).</li>
	<li>The expressions on each side of the equality in an equation must have the same dimensions.</li>
	<li>Every term in an expression must have the same dimensions; it does not make sense to add or subtract quantities of differing dimension.</li>
	</SubList></li>
	<li>Accuracy and precision of a measurement:<SubList>
		<li><b>Accuracy</b> is how close a measurement is to the accepted reference value for that measurement.</li>
		<li>The <b>precision</b> of measurements refers to how close the agreement is between repeated independent measurements.</li>
		<li><ImgComp src={"/articlePics/physics_1_pics/1.webp"} style={{width:"80%"}}/></li>
		<li>The precision of a measuring system is related to the <b>uncertainty</b> in the measurements whereas the accuracy is related to the <b>discrepancy</b> from the accepted reference value.</li>
		<li>The uncertainty in a measurement, \(A\), is often denoted as \(\Delta A\) (read "delta \(A\)"), so the measurement result would be recorded as \(A ± \Delta A\).</li>
		<li>Suppose we measure paper length; we obtained measurements of 11.1 in., 11.2 in., and 10.9 in., and the accepted value was 11.0 in. Our discrepancy is 0.1 in.</li>
		<li>We might calculate the uncertainty in our best guess by using half of the range of our measured values: 0.15 in.</li>
		<li>The measured length of the paper could be expressed as 11.1 ± 0.15 in.</li>
	</SubList></li>
	<li>Percent uncertainty:<SubList>
		<li>Another method of expressing uncertainty is as a percent of the measured value:</li>
		<MathStuff>\[ {"\\text{Percent uncertainty } = \\frac{\\delta A}{A} \\times 100%"} \]</MathStuff>
		<li>If the measurements going into the calculation have small uncertainties (a few percent or less), then the percent uncertainty in a quantity calculated by multiplication or division is the sum of the percent uncertainties in the items used to make the calculation.</li>
	</SubList></li>
	<li>Significant Figures:<SubList>
		<li>A person measuring the length of a stick with a ruler notices the stick length seems to be somewhere in between 36.6 cm and 36.7 cm, and he or she must estimate the value of the last digit.</li>
		<li><u>Method of <b>significant figures</b>:</u> the last digit written down in a measurement is the first digit with some uncertainty.</li>
		<li>The measured value 36.7 cm has three significant figures.</li>
		<li>Special consideration is given to zeros when counting significant figures:<SubList>
			<li>The zeros in 0.053 are not significant because they are placeholders that locate the decimal point. There are two significant figures in 0.053.</li>
			<li>The zeros in 10.053 are not placeholders; they are significant. This number has five significant figures.</li>
			<li>The zeros in 1300 may or may not be significant, depending on the style of writing numbers.</li>
			<li>To avoid this ambiguity, we should write 1300 in scientific notation as \(1.3 \times 10^3\), \(1.30 \times 10^3\), or \(1.300 \times 10^3\), depending on whether it has two, three, or four significant figures.</li>
		</SubList></li>
		<li>When combining measurements with different degrees of precision with the mathematical operations of addition, subtraction, multiplication, or division, then the number of significant digits in the final answer can be no greater than the number of significant digits in the least-precise measured value.</li>
		<li>For multiplication and division, the result should have the same number of significant figures as the quantity with the least number of significant figures entering into the calculation.</li>
		<li>For addition and subtraction, the answer can contain no more decimal places than the least-precise measurement.</li>
	</SubList></li>
</ul>
</div>

<Vectors/>

<h2>Motion Basics</h2>
<div className="content" data-source={28}>
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<h3>Along A Straight Line</h3>
		<ul>
		<li><b>Position</b> and <b>speed</b>:<SubList>
			<li>To describe the motion of an object, you must first be able to describe its <b>position</b> (\(x\)): where it is at any particular time.</li>
			<li><b>Displacement</b> \(\Delta x\) is the change in position of an object:</li>
			<MathStuff>\[ \Delta x = x_f - x_0 \]</MathStuff>
			<li>where \(\Delta x\) is displacement, \(x_f\) is the final position, and \(x_0\) is the initial position.</li>
			<li>Displacement indicates direction, it is a vector and can be either positive or negative, depending on the choice of positive direction.</li>
			<li>Objects in motion can also have a series of displacements.</li>
			<li>We define <b>total displacement</b>, as the sum of the individual displacements.</li>
			<li>If \(x_1\) and \(x_2\) are the positions of an object at times \(t_1\) and \(t_2\), respectively, then:</li>
			<MathStuff>\[{"\\text{Average velocity} = \\overline{v} = \\frac{x_2 - x_1}{t_2-t_1}"}\]</MathStuff>
			<li>Average velocity is a vector.</li>
			<li>We can calculate the <b>average speed</b> by finding the total distance traveled divided by the elapsed time:</li>
			<MathStuff>\[{"\\text{Average velocity} = \\overline{s} = \\frac{\\text{Total distance}}{\\text{Elapsed time}}"}\]</MathStuff>
			<li>Average speed is not necessarily the same as the magnitude of the average velocity.</li>
			<li>For example, if a trip starts and ends at the same location, the total displacement is zero, and therefore the average velocity is zero. The average speed, however, is not zero.</li>
		</SubList></li>
		<li><b>Velocity:</b><SubList>
			<li>The quantity that tells us how fast an object is moving anywhere along its path is the <b>instantaneous velocity</b>, usually called simply <b>velocity</b>.</li>
			<MathStuff>\[ v(t) = \frac{"{d}{dt} x(t)"} \]</MathStuff>
			<li>Like average velocity, instantaneous velocity is a vector with dimension of length per time.</li>
			<li>We can calculate the <b>instantaneous speed</b> from the magnitude of the instantaneous velocity:</li>
			<MathStuff>\[{"\\text{Instantaneous speed = |v(t)|}"}\]</MathStuff>
		</SubList></li>
		<li>Acceleration:<SubList>
			<li>Average acceleration (\({"\\overline{a}"}\)) is the rate at which velocity changes:</li>
			<MathStuff>\[ {"\\overline{a}= \\frac{v_f - v_0}{t_f - t_0}"} \]</MathStuff>
			<li>Acceleration is a vector in the same direction as the change in velocity, \(\Delta v\).</li>
			<li>The term <b>deceleration</b> can cause confusion in our analysis because it is not a vector and it does not point to a specific direction with respect to a coordinate system (instead say "acceleration in the opposite direction").</li>
			<li><b>Instantaneous acceleration:</b></li>
			<MathStuff>\[a(t) = \frac{"{d}{dt} v(t)"}\]</MathStuff>
		</SubList></li>
		<li className="ownExplanation">Motion with constant acceleration:<SubList>
			<li>Consider these variables:</li>
			<TableLI>
				<tbody>
					<tr><td>\(\textbf{"{s}"}\)</td><td>Displacement</td></tr>
					<tr><td>\(\textbf{"{u}"}\)</td><td>Velocity (initial)</td></tr>
					<tr><td>\(\textbf{"{v}"}\)</td><td>Velocity (final)</td></tr>
					<tr><td>\({"\\overline{\\textbf{v}}"}\)</td><td>Velocity (average)</td></tr>
					<tr><td>\(\textbf{"{t}"}\)</td><td>Time between \({"\\text{v}_f - \\text{v}_0"}\)</td></tr>
					<tr><td>\(\textbf{"{a}"}\)</td><td>Acceleration (constant)</td></tr>
				</tbody>
			</TableLI>
			<li>We start with these equations:</li>
			<MathStuff>\[{"\\begin{gather} \\textbf{a} = \\frac{\\textbf{v} - \\textbf{u}}{t} \\\\ \\overline{\\textbf{v}} = \\frac{\\textbf{v} - \\textbf{u}}{2} \\\\ \\overline{\\textbf{v}} = \\frac{ \\textbf{s} }{t} \\end{gather}"}\]</MathStuff>
			<li>From these we can derive these equations:</li>
			<MathStuff>\[{"\\begin{gather} \\textbf{v} = \\textbf{u} + t \\textbf{a} \\\\ \\textbf{s} = \\frac{(\\textbf{v} - \\textbf{u})t}{2} \\\\ \\textbf{s} = \\textbf{u} t + \\frac{1}{2} \\textbf{a}\\textbf{t}^2 \\\\ \\textbf{s} = \\textbf{v} t - \\frac{1}{2} \\textbf{a}\\textbf{t}^2 \\\\ \\textbf{v}^2 = \\textbf{u}^2 + 2 \\textbf{a} \\textbf{s} \\end{gather}"}\]</MathStuff>
		</SubList></li>
		<li>Free fall:<SubList>
			<li><b>Free fall</b> describes the motion of an object falling in a gravitational field.</li>
			<li>Acceleration due to gravity, \(g\), has the average value of 9.81 m/s<sup>2</sup> varies from 9.78 m/s<sup>2</sup> to 9.83 m/s<sup>2</sup>, depending on latitude, altitude, underlying geological formations, and local topography.</li>
		</SubList></li>
		<li>Displacement Vector:<SubList>
			<li>We generally use the coordinates \(x\), \(y\), and \(z\) to locate a particle at point \(P(x, y, z)\) in three dimensions.</li>
			<li>The position vector from the origin of the coordinate system to point \(P\) is \({"\\vec{\\textbf{r}}(t)"}\). In unit vector notation:</li>
			<MathStuff>\[{"\\vec{\\textbf{r}}(t) = x(t)\\hat{\\textbf{i}} + y(t)\\hat{\\textbf{j}} +z(t)\\hat{\\textbf{k}}"}\]</MathStuff>
			<li>The <b>displacement vector</b> \(\Delta {"\\vec{\\textbf{r}}"}\) is found by subtracting \({"\\vec{\\textbf{r}}(t_1)"}\) from  \({"\\vec{\\textbf{r}}(t_2)"}\).</li>
			<li><ImgComp src={"/articlePics/physics_1_pics/2.webp"} style={{width:"50%"}}/></li>
		</SubList></li>
		<li>Velocity Vector:<SubList>
			<li>The instantaneous <b>velocity vector</b>:</li>
			<MathStuff>\[{"\\vec{\\textbf{v}}(t) = \\lim_{\\Delta t \\to 0} \\frac{\\vec{\\textbf{r}}(t + \\Delta t) - \\vec{\\textbf{r}}(t)}{\\Delta t} = \\frac{d \\vec{\\textbf{r}}}{dt}"}\]</MathStuff>
			<li><ImgComp src={"/articlePics/physics_1_pics/3.webp"} style={{width:"70%"}}/></li>
			<MathStuff>\[{"\\vec{\\textbf{v}}(t) = v_x(t)\\hat{\\textbf{i}} + v_y(t)\\hat{\\textbf{j}} + v_z(t)\\hat{\\textbf{k}}"}\]</MathStuff>
			<li>where:</li>
			<MathStuff>\[{"v_x (t) = \\frac{d}{dt} x(t), \\ v_y (t) = \\frac{d}{dt} y(t), \\ v_z (t) = \\frac{d}{dt} z(t)"}\]</MathStuff>
			<MathStuff>\[{"\\vec{\\textbf{v}}_{\\text{avg}} = \\frac{\\vec{\\textbf{r}}(t_2) - \\vec{\\textbf{r}}(t_1)}{t_2 - t_1}"}\]</MathStuff>
		</SubList></li>
		</ul>
		<h3>In Two And Three Dimensions</h3>
		<ul>
		<li>Acceleration vector:<SubList>
			<li><b>Acceleration vector:</b></li>
			<MathStuff>\[{"\\vec{\\textbf{a}}(t) = \\lim_{\\Delta t \\to 0} \\frac{\\vec{\\textbf{v}}(t + \\Delta t) - \\vec{\\textbf{v}}(t)}{\\Delta t} = \\frac{d \\vec{\\textbf{v}}}{dt}"}\]</MathStuff>
			<li>The acceleration in terms of components is:</li>
			<MathStuff>\[{"\\vec{\\textbf{a}}(t) = \\frac{d}{dt} v_x(t)\\hat{\\textbf{i}} + \\frac{d}{dt}v_y(t)\\hat{\\textbf{j}} + \\frac{d}{dt}v_z(t)\\hat{\\textbf{k}}"}\]</MathStuff>
			<MathStuff>\[{"\\vec{\\textbf{a}}(t) = \\frac{d^2}{dt^2} x(t)\\hat{\\textbf{i}} + \\frac{d^2}{dt^2} y(t)\\hat{\\textbf{j}} + \\frac{d^2}{dt^2} z(t)\\hat{\\textbf{k}}"}\]</MathStuff>
		</SubList></li>
		<li>Projectile motion:<SubList>
			<li><b>Projectile motion</b> is the motion of an object thrown or projected into the air, subject only to acceleration as a result of gravity. Such objects are called projectiles and their path is called a <b>trajectory</b>.</li>
			<li>Time of flight:<SubList>
				<li>Let \({"T_\\text{tof}"}\) be the time of flight for a projectile both launched at angle \(\theta\) and impacting on a flat horizontal surface.</li>
				<MathStuff>\[{"T_{\\text{tof}} = \\frac{2 (v_0 \\sin \\theta)}{g}"}\]</MathStuff>
				<li>This equation does not apply when the projectile lands at a different elevation than it was launched</li>
			</SubList></li>
			<li>Trajectory:<SubList>
				<li>Let a projectile be thrown at angle \(\theta\). The trajectory equation is:</li>
				<MathStuff>\[ y = (\tan \theta) x - {"\\left[\\frac{g}{2(v_0 \\cos \\theta)^2}\\right]x^2"} \]</MathStuff>
			</SubList></li>
			<li>Range:<SubList>
				<li>On a flat horizontal surace, the horizontal distance traveled by the projectile is:</li>
				<MathStuff>\[R = {"\\frac{v_0^2 \\sin(2\\theta)}{g}"}\]</MathStuff>
			</SubList></li>
		</SubList></li>
		<li>Uniform circular motion:<SubList>
			<li>{"Suppose a particle moves counterclockwise on a circular path at constant speed. The particle position vector is \\(\\vec{\\textbf{r}}(t)\\) and the velocity vector is \\(\\vec{\\textbf{v}}(t)\\)."}</li>
			<li>The scalar value of the position and velocity vectors is \(r\) and \(v\) respectively.</li>
			<li>The acceleration vector is perpendicular to the vector velocity, so it points towards the center of the circle. This is called the <b>centripetal acceleration</b> vector and has the magnitude:</li>
			<MathStuff>\[ {"a_c = \\frac{v^2}{r}"}\]</MathStuff>
			<li>Imagine the circular path in an \(xy\) plane with the origin at the center. Let \(\theta\) be the angle the particle makes with the \(x\)-axis, and let \(\theta=0^c\) when \(t=0\).</li>
			<li>The angular frequency \(\omega\) can be defined as:</li>
			<MathStuff>\[ {"\\omega = \\frac{\\theta}{t}"}\]</MathStuff>
			<li>If \(T\) be the period of motion:</li>
			<MathStuff>\[ {"\\omega = \\frac{2 \\pi}{T}"}\]</MathStuff>
			<li>Let \(r\) be the scalar value of {"\\(\\vec{\\textbf{r}}(t)\\). We can express \\(\\vec{\\textbf{r}}(t)\\)"} as:</li>
			<MathStuff>\[{"\\vec{\\textbf{r}}(t) = r \\cos(\\theta) \\hat{\\textbf{i}} + r \\sin(\\theta) \\hat{\\textbf{j}}"}\]</MathStuff>
			<li>This mean:</li>
			<MathStuff>\[{"\\begin{gather} \
			\\vec{\\textbf{r}}(t) = r \\cos(\\omega t) \\hat{\\textbf{i}} + r \\sin(\\omega t) \\hat{\\textbf{j}} \\\\ \
			\\vec{\\textbf{v}}(t) = \\frac{d}{dt} \\vec{\\textbf{r}}(t) = - r \\omega \\sin(\\omega t) \\hat{\\textbf{i}} + r \\omega \\cos(\\omega t) \\hat{\\textbf{j}} \\\\ \
			\\vec{\\textbf{a}}(t) = \\frac{d}{dt} \\vec{\\textbf{v}}(t) = - r \\omega^2 \\cos(\\omega t) \\hat{\\textbf{i}} - r \\omega^2 \\sin(\\omega t) \\hat{\\textbf{j}} \\end{gather}"}\]</MathStuff>
		</SubList></li>
		<li>Nonuniform Circular Motion:<SubList>
			<li>If the speed of the particle is changing, then it has a tangential acceleration with scalar:</li>
			<MathStuff>\[{"a_T =\\frac{d}{dt} \\Vert \\vec{\\textbf{v}}(t) \\Vert"}\]</MathStuff>
			<li>The total acceleration is:</li>
			<MathStuff>\[{"\\vec{\\textbf{a}} = \\vec{\\textbf{a}}_c(t) + \\vec{\\textbf{a}}_T(t)"}\]</MathStuff>
		</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Dynamics</h3>
		<ul>
		<li>The study of motion is called <b>kinematics</b>, but kinematics only describes the way objects move—their velocity and their acceleration. <b>Dynamics</b> is the study of how forces affect the motion of objects and systems.</li>
		<li><b>Newton's First law:</b><SubList>
			<li>A body at rest remains at rest or, if in motion, remains in motion at constant velocity unless acted on by a net external force.</li>
			<li><b>Mass</b> is also related to inertia, the ability of an object to resist changes in its motion - in other words, to resist acceleration. Newton's first law is often called the <b>law of inertia</b>.</li>
		</SubList></li>
		<li><b>Newton's Second law:</b><SubList>
			<li>The acceleration of a system is directly proportional to and in the same direction as the net external force acting on the system and is inversely proportional to its mass. In equation form:</li>
			<MathStuff>\[ {"\\vec{\\textbf{a}} = \\frac{\\vec{\\textbf{F}}_\\text{net}}{m}"} \]</MathStuff>
			<li>Newton actually stated his second law in terms of momentum: <i>"The instantaneous rate at which a body's momentum changes is equal to the net force acting on the body."</i></li>
			<MathStuff>\[{"\\vec{\\textbf{F}}_\\text{net} = \\frac{d}{dt} \\vec{\\textbf{p}}"} \]</MathStuff>
			<li>The <b>momentum</b> \({"\\vec{\\textbf{p}}"}\) is defined as: \({"\\vec{\\textbf{p}} = m \\vec{\\textbf{v}}"}\).</li>
		</SubList></li>
		<li><b>Newton's Third law:</b><SubList>
			<li>Whenever one body exerts a force on a second body, the first body experiences a force that is equal in magnitude and opposite in direction to the force that it exerts.</li>
			<li>Mathematically, if a body A exerts a force \({"\\vec{\\textbf{F}}"}\) on body \(B\), then \(B\) simultaneously exerts a force \({"-\\vec{\\textbf{F}}"}\) on \(A\), or in vector equation form: \({"\\vec{\\textbf{F}}_\\text{AB} - \\vec{\\textbf{F}}_\\text{BA}"}\).</li>
		</SubList></li>
		<li>Common forces:<SubList>
			<li><b>Normal force:</b> The force supporting the weight of an object, or a load, and is perpendicular to the surface of contact between the load and its support.</li>
			<li><b>Tension:</b> A force along the length of a medium; in particular, it is a pulling force that acts along a stretched flexible connector, such as a rope or cable.</li>
			<li><b>Friction:</b> A resistive force opposing motion or its tendency.</li>
			<li><b>Spring Force:</b> A spring is a special medium with a specific atomic structure that has the ability to restore its shape, if deformed.</li>
		</SubList></li>
		<li>Drawing free-body diagrams:<SubList>
			<li>Draw the object under consideration; it does not have to be artistic. At first, you may want to draw a circle around the object of interest to be sure you focus on labeling the forces acting on the object. If you are treating the object as a particle (no size or shape and no rotation), represent the object as a point. We often place this point at the origin of an \(xy\)-coordinate system.</li>
			<li>Include all forces that act on the object, representing these forces as vectors. Forces that the object exerts on its environment must not be included.</li>
			<li>Convert the free-body diagram into a more detailed diagram showing the \(x\)- and \(y\)-components of a given force.</li>
			<li>If there are two or more objects, or bodies, in the problem, draw a separate free-body diagram for each object.</li>
		</SubList></li>
		</ul>
		<h3>Application Of Newton's Laws</h3>
		<ul>
			<li>Static and Kinetic Friction:<SubList>
				<li>If two systems are in contact and stationary relative to one another, then the friction between them is called <b>static friction</b>. If two systems are in contact and moving relative to one another, then the friction between them is called <b>kinetic friction</b>.</li>
				<li>The magnitude of static friction \(f_s\) is \(f_s \le μ_s N\), where \(μ_s\) is the <b>coefficient of static friction</b>.</li>
				<li>One the applied force exceeds \(f_x (\text{"{max}"})\), the object moves.</li>
				<li>The magnitude of static friction \(f_k\) is \(f_k = μ_k N\), where \(μ_k\) is the <b>coefficient of kinetic friction</b>.</li>
				<li><u>Atomic-scale explanations of friction:</u> When two rough surfaces are in contact, the actual contact area is a tiny fraction of the total area because only high spots touch. When a greater normal force is exerted, the actual contact area increases, and we find that the friction is proportional to this area.</li>
				<li><ImgComp src={"/articlePics/physics_1_pics/4.webp"} style={{width:"90%"}}/></li>
			</SubList></li>
			<li>Centripetal force:<SubList>
				<li>Centripetal acceleration:</li>
				<MathStuff>\[{"a_c = \\frac{v^2}{r} = r \\omega^2"}\]</MathStuff>
				<li>Centripetal force:</li>
				<MathStuff>\[{"F_c = m \\frac{v^2}{r} = m r \\omega^2"}\]</MathStuff>
				<li><a href='https://en.wikipedia.org/wiki/Banked_turn'>A <b>banked turn</b> is a turn or change of direction in which the vehicle banks or inclines, usually towards the inside of the turn.</a></li>
				<li><b>Ideal banking</b>: the net external force equals the horizontal centripetal force in the absence of friction. This is when:</li>
				<MathStuff>\[{"\\theta = \\tan ^ {-1} \\left( \\frac{v^2}{rg} \\right)"}\]</MathStuff>
			</SubList></li>
			<li>Drag forces:<SubList>
				<li>Another interesting force in everyday life is the force of drag on an object when it is moving in a fluid (either a gas or a liquid).</li>
				<li>Like friction, the <b>drag force</b> always opposes the motion of an object. Unlike simple friction, the drag force is proportional to some function of the velocity of the object in that fluid.</li>
				<li>For most large objects not moving too slowly, the magnitude of the drag force \(F_D\) is proportional to the square of the speed of the object:</li>
				<MathStuff>\[{"F_D = \\frac{1}{2} C \\rho A v^2"}\]</MathStuff>
				<li>where \(C\) is the <b>drag coefficient</b>, \(A\) is the area of the object facing the fluid and \(\rho\) is the density of the fluid.</li>
				<li>For a spherical object falling in a medium, the drag force is:</li>
				<MathStuff>\[{"F_s = 6 \\pi r \\eta v"}\]</MathStuff>
				<li>where \(r\) is the radius of the object and \(η\) is the viscosity of the fluid.</li>
				<li>For a body moving in a straight line at moderate speeds through a liquid such as water, the frictional force can often be approximated by:</li>
				<MathStuff>\[f_R = - bv\]</MathStuff>
				<li>According to Newton's second law:</li>
				<MathStuff>\[mg - bv = m \frac{"{dv}{dt}"}\]</MathStuff>
				<li>As \(v\) increases, the frictional force, \(-bv\), increases until it matches \(mg\). At this point, the velocity remains constant:</li>
				<MathStuff>\[mg - bv_T = 0\]</MathStuff>
				<li>Otherwise:</li>
				<MathStuff>\[y = {"\\frac{mg}{b}t + \\frac{m^2 g}{b^2} (e^{-bt/m}-1)"}\]</MathStuff>
			</SubList></li>
		</ul>
	</div>
</div>

<h2>Work And Energy</h2>
<div className="content" data-source={28}>
  <ul style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
    <li>Work:<SubList>
      <li>In physics, work is done on an object when energy is transferred to the object. In other words, work is done when a force acts on something that undergoes a displacement from one position to another.</li>
      <MathStuff>\[ {"dW = \\vec{\\textbf{F}} \\cdot d \\vec{\\textbf{r}} = \\left| \\vec{\\textbf{F}} \\right| \\cdot | d \\vec{\\textbf{r}} | \\cos \\theta "}\]</MathStuff>
      <li>The work done by a force is the integral of the force with respect to displacement along the path of the displacement:</li>
      <MathStuff>\[{"W_{AB} = \\int\\limits_{\\text{path } AB} \\vec{\\textbf{F}} d \\vec{\\textbf{r}} "}\]</MathStuff>
      <li>The infinitesimal work done by a variable force can be expressed in terms of the components of the force and the displacement along the path:</li>
      <MathStuff>\[ {"dW = F_x dx + F_y dy + F_z dz"} \]</MathStuff>
      <li>A perfectly elastic spring force has only an x-component, \(F_x=-kx\), and the work done when \(x\) changes from \(x_A\) to \(x_B\) is:</li>
      <MathStuff>\[{"\\begin{align} W_{\\text{spring},AB} &=\\int_A^B F x dx= -k \\int_A^B x dx \\\\ &= - k \\left[ \\frac{x^2}{2} \\right]_A^B = -\\frac{k}{2}(x^2_B-x^2_A) \\end{align}"}\]</MathStuff>
    </SubList></li>
    <li>Kinetic energy:<SubList>
      <li>The <b>kinetic energy</b> of a particle is one-half the product of the particle's mass m and the square of its speed v:</li>
      <MathStuff>\[ {"K = \\frac{1}{2}m v^2"}\]</MathStuff>
      <li>We then extend this definition to any system of particles by adding up the kinetic energies of all the constituent particles:</li>
      <MathStuff>\[{"K = \\sum \\frac{1}{2}m v^2"}\]</MathStuff>
      <li>The kinetic energy of a particle can be expressed in terms of its momentum ({"\\vec{\\textbf{p}} =m\\vec{\\textbf{v}}"}):</li>
      <MathStuff>\[ {"K = \\frac{p^2}{2m}"}\]</MathStuff>
      <li>Because velocity is a relative quantity, you can see that the value of kinetic energy must depend on your frame of reference.</li>
      <li>The kinetic energy of a particle is a single quantity, but the kinetic energy of a system of particles can sometimes be divided into various types:<SubList>
        <li>If all the particles in a system have the same velocity, the system is undergoing translational motion and has <b>translational kinetic energy</b>.</li>
        <li>If an object is rotating, it could have <b>rotational kinetic energy</b>.</li> 
        <li>If it's vibrating, it could have <b>vibrational kinetic energy</b>.</li> 
        <li>The kinetic energy of a system, relative to an internal frame of reference, may be called <b>internal kinetic energy</b>.</li> 
        <li>The kinetic energy associated with random molecular motion may be called <b>thermal energy</b>.</li>
      </SubList></li>
    </SubList></li>
    <li>Work-Energy Theorem:<SubList>
      <li>The net work done on the particle:</li>
      <MathStuff>\[{"\\begin{align} W_{\\text{net,}AB} &= \\int_A^B (mv_x dv_x + mv_y dv_y + mv_z dv_z) \\\\ &= \\frac{1}{2} m \\left|v_x^2 + v_y^2 + v_z^2 \\right|_A^B = \\left| \\frac{1}{2} m v^2 \\right|_A^B = K_B - K_A \\end{align}"}\]</MathStuff>
      <li>This important result is called the <b>work-energy theorem</b>.</li>
    </SubList></li>
    <li>Power:<SubList>
      <li><b>Power</b> is defined as the rate of doing work:</li>
      <MathStuff>\[{"P=\\frac{dW}{dt}"}\]</MathStuff>
      <li>Let \({"\\vec{\\textbf{F}}"}\) be a constant force:</li>
      <MathStuff>\[{"P=\\frac{\\vec{\\textbf{F}} \\cdot d \\vec{\\textbf{r}}}{dt} = \\vec{\\textbf{F}} \\cdot \\frac{ d \\vec{\\textbf{r}}}{dt} = \\vec{\\textbf{F}} \\cdot \\vec{\\textbf{v}}"}\]</MathStuff>
    </SubList></li>
  </ul>
  <ul style={{width: "49%", marginRight: "0.5%", float: "right"}}>
    <li>Potential energy basics:<SubList>
    <li>Work done on an object by the constant gravitational force, near the surface of Earth, over any displacement is a function only of the difference in the positions of the end-points of the displacement.</li>
    <li>This property allows us to define a different kind of energy for the system than its kinetic energy, which is called <b>potential energy</b>.</li>
    <li>Let's ignore friction and air resistance. Consider a projectile motion of a football being kicked:<SubList>
      <li>As the football rises, the work done by the gravitational force on the football is negative, because the ball's displacement is positive vertically and the force due to gravity is negative vertically.</li>
      <li>As the football falls toward Earth, the work done on the football is now positive, because the displacement and the gravitational force both point vertically downward.</li>
      <li>The ball also speeds up, which indicates an increase in kinetic energy. Therefore, energy is converted from gravitational potential energy back into kinetic energy.</li>
    </SubList></li>
    <li>The <b>potential energy difference</b> from point A to point B as the negative of the work done:</li>
    <MathStuff>\[{"\\Delta U_{AB} = U_B - U_A = -W_{AB}"} \]</MathStuff>
    <li>As long as there is no friction or air resistance, the change in kinetic energy of the football equals negative of the change in gravitational potential energy of the football. This can be generalized to any potential energy:</li>
    <MathStuff>\[ {"\\Delta K_{AB} = - \\Delta U_{AB}"} \]</MathStuff>
    </SubList></li>
    <li>Gravitational potential energy near Earth's surface:<SubList>
      <li>Work is the negative of the difference in the gravitational potential energy:</li>
      <MathStuff>\[ {"\\Delta U_{\\text{grav}} = -W_{\\text{grav,}AB} = mg(y_B - y_A)"} \]</MathStuff>
      <li>From this, the gravitational potential energy function, near Earth's surface, is:</li>
      <MathStuff>\[ {"U(y) = mgy + text{const}"} \]</MathStuff>
    </SubList></li>
    <li>Elastic potential energy:<SubList>
      <li>The difference of <b>elastic potential energy</b> for a spring force as the negative of the work done by the spring force:</li>
      <MathStuff>\[ {"\\Delta U = -W_{AB} = \\frac{1}{2} k (x^2_B-x^2_A)"} \]</MathStuff>
      <li>The potential energy function corresponding to this difference is:</li>
      <MathStuff>\[ {"U(x) = \\frac{1}{2} kx^2 + \\text{const}"} \]</MathStuff>
    </SubList></li>
    <li>Conservative and non-conservative forces:<SubList>
      <li>In the interactions we considered, any transition between kinetic and potential energy did not change the total energy of the system.</li>
      <li>This was path independent, meaning that we can start and stop at any two points in the problem, and the total energy of the system—kinetic plus potential—at these points are equal to each other. This is characteristic of a <b>conservative force</b>.</li>
      <li><b>Non-conservative forces</b> and the work that they do are path dependent. Dissipative forces such as friction or air resistance, for example, are non-conservative. These forces take energy away from the system as the system progresses.</li>
      <li>The work done by a conservative force is independent of the path; in other words, the work done by a conservative force is the same for any path connecting two points:</li>
      <MathStuff>\[ {"\\begin{align} & W_{AB,\\text{path-1}} = \\int\\limits_{AB,\\text{path-1}} \\vec{\\textbf{F}}_\\text{cons} d\\vec{\\textbf{r}} = \\\\ & W_{AB,\\text{path-2}}=\\int\\limits_{AB,\\text{path-2}}\\vec{\\textbf{F}}_\\text{cons} d \\vec{\\textbf{r}} \\end{align}"} \]</MathStuff>
    </SubList></li>
    <li>Conservation of Energy:<SubList>
      <li>In scientific usage, a <b>conserved quantity</b> for a system stays constant, changes by a definite amount that is transferred to other systems, and/or is converted into other forms of that quantity.</li>
      <li>A conserved quantity, in the scientific sense, can be transformed, but not strictly created or destroyed.</li>
      <li>The <b>mechanical energy</b> \(E\) of a particle stays constant unless forces outside the system or non-conservative forces do work on it, in which case, the change in the mechanical energy is equal to the work done by the non-conservative forces:</li>
      <MathStuff>\[ {"W_{nc,AB} = \\Delta (K + U)_{AB} = \\Delta E_{AB}"} \]</MathStuff>
    </SubList></li>
    <li>Forms of Energy:<SubList>
      <li>Atoms and molecules inside all objects are in random motion. The internal kinetic energy from these random motions is called <b>thermal energy</b>, because it is related to the temperature of the object.</li>
      <li>Fuels, such as gasoline and food, have <b>chemical energy</b>, which is potential energy arising from their molecular structure.</li>
      <li>Light is just one kind of electromagnetic radiation, or <b>radiant energy</b>.</li>
      <li><b>Nuclear energy</b> comes from reactions and processes that convert measurable amounts of mass into energy.</li>
    </SubList></li>
    <li>Sources of energy:<SubList>
      <li><b>Renewable sources</b> are energy sources that are replenished through naturally occurring, ongoing processes, on a time scale that is much shorter than the anticipated lifetime of the civilization using the source.</li>
      <li><b>Non-renewable sources</b> are depleted once some of the energy they contain is extracted and converted into other kinds of energy.</li>
      <li><b>Hydropower</b> is produced by converting the gravitational potential energy of falling or flowing water into kinetic energy and then into work to run electric generators or machinery.</li>
      <li><b>Wind power</b> also converts kinetic energy into work, which can be used directly to generate electricity, operate mills, and propel sailboats.</li>
      <li><b>Geothermal power:</b> The interior of Earth has a great deal of thermal energy, part of which is left over from its original formation (gravitational potential energy converted into thermal energy) and part of which is released from radioactive minerals (a form of natural nuclear energy).</li>
      <li>The source of <b>solar power</b> is energy carried by the electromagnetic waves radiated by the Sun.</li>
    </SubList></li>
  </ul>
</div>
</>