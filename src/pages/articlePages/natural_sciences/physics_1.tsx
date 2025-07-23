import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import Vectors from "../mathematics/Vectors";

export const title = "Physics Notes (Part 1)";
export const sourcesColor = {28: null, 6: null, 45: "rgb(110, 110, 140)"};
export const sourcesOrder = [45, 28, 6];
export const content = <>
	<h1>Physics Notes</h1>
	
	<h2>Units And Measurements</h2>
	<div className="content" data-source={28}>
	<ul style={{width: "48%", marginLeft: "1%", float: "left"}}>
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
	<ul style={{width: "48%", marginRight: "1%", float: "right"}}>
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
	<div style={{width: "48%", marginLeft: "1%", float: "left"}}>
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
		</ul>
	</div>
	<div style={{width: "48%", marginRight: "1%", float: "right"}}>
		<h3>In Two And Three Dimensions</h3>
		<ul>
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
	</div>
</>