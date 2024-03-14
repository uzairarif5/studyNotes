import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export function analogSignalProcessing (){return <>
    <h2 id="analogSignalProcessing">Analog Signal Processing</h2>
    <div className="content">
        <div el={"div"} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
            <ul data-source={2}>
                <li>The systems used to manipulate electric signals directly are called <b>circuits</b>.</li>
                <li>Power and energy:<SubList>
                    <li>Voltages and currents also carry <b>power</b>.</li>
                    <li>The <b>instantaneous power</b> at each moment of time consumed by the element is given by the product of the voltage and current: \(p(t)=v(t)i(t)\).</li>
                    <li>A positive value for power indicates that at time \(t\) the circuit element is consuming power; a negative value means it is producing power.</li>
                    <li>Power defined this way has units of <b>watts</b>.</li>
                    <li>Power is the rate at which energy is consumed or produced. Energy is the integral of power:</li>
                    <MathStuff>$$E(t)=\int^t_{"{-\\infty}"} p(\alpha) d \alpha$$</MathStuff>
                    <li>Positive energy corresponds to consumed energy and negative energy corresponds to energy production.</li>
                    <li>The units of energy are <b>joules</b> and a watt equals joules/second.</li>
                </SubList></li>
                <li>Ideal Circuit Elements:<SubList>
                    <li>The elementary circuit elements - the <b>resistor</b>, <b>capacitor</b>, and <b>inductor</b> - impose linear relationships between voltage and current.</li>
                    <li>In a resistor, the voltage is proportional to the current, with the constant of proportionality \(R\), known as the <b>resistance</b>: \(v(t) = R i(t)\).</li>
                    <li>Resistance has units of <b>ohms</b>, denoted by \(\Omega\).</li>
                    <li><b>Conductance:</b> \(\frac{1}{"{R}"}\).</li>
                    <li>The <b>capacitor</b> stores charge and the relationship between the charge stored and the resultant voltage is \(q = Cv\). The constant of proportionality, the <b>capacitance</b>, has units of <b>farads</b> (\(F\)).</li>
                    <li>As current is the rate of change of charge, then: \(i(t)=C \frac{"{d}"}{"{dt}"} v(t)\).</li>
                    <li>This means: \(p(t) = C v(t) \frac{"{d}"}{"{dt}"} v(t)\).</li>
                    <li>The <b>inductor</b> stores magnetic flux, with larger valued inductors capable of storing more flux. Inductance has units of <b>henries</b> (H).</li>
                    <MathStuff>$${"\\begin{align} v(t) &= L \\frac{d}{dt} i(t) \\\\  i(t) &= \\frac{1}{L}\\int^t_{-\\infty} v(\\alpha) d \\alpha \\end{align}"}$$</MathStuff>
                    <li><b>Sources</b> of voltage and current are also circuit elements, but they are not linear in the strict sense of linear systems. For example, The voltage source's is \(v = v_s\) regardless of what the current might be. As for the current source, \(i = i_s\) regardless of the voltage.</li>
                    <li>Source and linear circuit elements are ideal circuit elements. One central notion of circuit theory is combining the ideal elements to describe how physical elements operate in the real world.</li>
                </SubList></li>
                <li>Electric Circuits and Interconnection Laws:<SubList>
                    <li>A <b>circuit</b> connects circuit elements together in a specific configuration designed to transform the source signal (originating from a voltage or current source) into another signal.</li>
                    <li><b>Kirchhoff's Current Law (KCL):</b> At every node, the sum of all currents entering a node must equal zero. What this law means physically is that charge cannot accumulate in a node; what goes in must come out.</li>
                    <li><b>Kirchhoff's Voltage Law (KVL):</b> The voltage law says that the sum of voltages around every closed loop in the circuit must equal zero.</li>
                </SubList></li>
                <li>Power Dissipation in Resistor Circuits:<SubList>
                    <li>The total power consumed/created by a circuit equals the sum of each element's power:</li>
                    <MathStuff>$$P = \Sigma_k v_ki_k$$</MathStuff>
                    <li>The power consumed by any resistor equals either of the following:</li>
                    <MathStuff>$$ {"\\frac{v^2}{R} \\text{ or } i^2 R"} $$</MathStuff>
                    <li>Since resistors are positive-valued, resistors always dissipate power. Current flowing through a resistor makes it hot; its power is dissipated by heat.</li>
                    <li>A physical wire has a resistance and hence dissipates power (it gets warm just like a resistor in a circuit). In fact, the resistance of a wire of length \(L\) and cross-sectional area \(A\) is given by: \(R=\frac{"{\\rho L}"}{"{A}"}\). The quantity \(\rho\) is known as the <b>resistivity</b>.</li>
                    <li>Resistivity has units of ohm-meters. Most materials have a positive value for \(\rho\), which means the longer the wire, the greater the resistance and thus the power dissipated. Superconductors have zero resistivity and hence do not dissipate power.</li>
                    <li>Consider the simple series circuit:</li>
                    <li><ImgComp src={require("./signals_and_systems_pics/5.png")} style={{width:"50%"}}/></li>
                    <li>From this, we get the following equations:</li>
                    <MathStuff>$${"\\begin{align}\
                    v_{out} &= R_2 i_{out}\\\\\
                    \\\\\
                    i_{out} &= \\frac{v_{in}}{R_1+R_2}\\\\\
                    \\end{align}"}$$</MathStuff>
                    <li>This means the voltage across the resistor \(R_2\) is:</li>
                    <MathStuff>$${"v_{out} = \\frac{R_2}{R_1+R_2}v_{in}"}$$</MathStuff>
                    <li>This leads to a relationship between power \(P_2\) and the resistor \(R_2\):</li>
                    <MathStuff>$${"\\begin{align}\
                    P_2 &= v_{out}i_{out}\\\\\
                    \\\\\
                    P_2 &= \\frac{R_2}{R_1+R_2}v_{in}i_{out}\\\\\
                    \\\\\
                    P_2 &= \\frac{R_2}{(R_1+R_2)^2}v_{in}^2\\\\\
                    \\end{align}"}$$</MathStuff>
                </SubList></li>
                <li>Series and Parallel Circuits:<SubList>
                    <li><ImgComp src={require("./signals_and_systems_pics/5.png")} style={{width:"50%"}}/></li>
                    <li>For the two series-connected resistors, the voltage across one resistor equals the ratio of that resistor's value and the sum of resistances times the voltage across the series combination. This concept is so pervasive it has a name: <b>voltage divider</b>.</li>
                    <li>The input-output relationship:</li>
                    <MathStuff>$$ {"\\frac{v_{out}}{v_{in}} = \\frac{R_2}{R_1+R_2}"} $$</MathStuff>
                    <li>The series combination of two resistors acts, as far as the voltage source is concerned, as a single resistor having a value equal to the sum of the two resistances.</li>
                    <li><ImgComp src={require("./signals_and_systems_pics/6.png")} style={{width:"60%"}}/></li>
                    <li>When resistors are connected in parallel, the voltages are identical.</li>
                    <li><ImgComp src={require("./signals_and_systems_pics/7.png")} style={{width:"60%"}}/></li>
                    <li>The KCL equation is \(i_{"{in}"} = i_1 + i_{"{out}"}\). Using the \(v\)-\(i\) relations, we find that:</li>
                    <MathStuff>$$ {"\\begin{align} \
                    i_1R_1 &= i_{out}R_2\\\\\
                    (i_{in} - i_{out})R_1 &= i_{out} R_2\\\\\
                    i_{in} R_1 &= i_{out} R_2 + i_{out} R_1\\\\\
                    i_{out} &= \\frac{R_1}{R_1+R_2} i_{in}\\\\\
                    \\end{align}"} $$</MathStuff>
                    <li>For a parallel combination of resistors, the equivalent conductance is the sum of the conductances.</li>
                    <li><ImgComp src={require("./signals_and_systems_pics/8.png")} style={{width:"60%"}}/></li>
                    <MathStuff>$$ {"\\begin{align} \
                    i_{out} &= \\frac{R_1}{R_1+R_2} i_{in}\\\\\
                    V &= i_{in}R_{total}\\\\\
                    i_{out} &= \\frac{R_1}{R_1+R_2} \\frac{V}{R_{total}}\\\\\
                    \\frac{i_{out}}{V} &= \\frac{R_1}{R_1+R_2} \\frac{1}{R_{total}}\\\\\
                    \\frac{1}{R_2} &= \\frac{R_1}{R_1+R_2} \\frac{1}{R_{total}}\\\\\
                    R_{total} &= \\frac{R_1 R_2}{R_1+R_2}\\\\\
                    \\end{align}"} $$</MathStuff>
                    <li>A shorthand notation for this quantity is \(R_1 \parallel R_2 \).</li>
                    <li>Similar to voltage divider for series resistances, we have <b>current divider</b> for parallel resistances.</li>
                    <li>Voltage measurement devices must have large resistances compared with that of the resistor across which the voltage is to be measured.</li>
                    <li><ImgComp src={require("./signals_and_systems_pics/10.png")} style={{width:"30%"}}/></li>
                    <li>For the above circuit, the total resistance expression mimics the structure:</li>                    
                    <MathStuff>$$ {"\\begin{align} \
                    R_{T} &= R_1 \\parallel ((R_2 \\parallel R_3) + R_4)\\\\\
                    &= \\frac{R_1R_2R_3 + R_1R_2R_4 + R_1R_3R_4}{R_1R_2 + R_1R_3 + R_2R_3 + R_2R_4 + R_3R_4}\\\\\
                    \\end{align}"} $$</MathStuff>
                </SubList></li>
                <li>Equivalent Circuits:<SubList>
                    <li>The resistors not involved with variables of interest can be collapsed into a single resistance. This result is known as an <b>equivalent circuit</b>.</li>
                    <li>From the viewpoint of a pair of terminals, a group of resistors functions as a single resistor, the resistance of which can usually be found by applying the parallel and series rules.</li>
                </SubList></li>
            </ul>
        </div>
        <div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
            <ul data-source={2}>
                <li>Circuits with Capacitors:<SubList>
                    <li><ImgComp src={require("./signals_and_systems_pics/9.png")} style={{width:"40%"}}/></li>
                    <li>From the above picture: \({"v_{in} = v_R + v_{out}"}\).</li>
                    <li>The current through the capacitor is given by: \(i = C \frac{"{d}"}{"{dt}"} v_{"{out}"}\).</li>
                    <li>Therefore: \({"v_{in} = RC \\frac{d}{dt} v_{out} + v_{out}"}\)</li>
                </SubList></li>
                <li>The Impedance Concept:<SubList>
                    <li>Rather than solving the differential equation that arises in circuits containing capacitors and inductors, let's pretend that all sources in the circuit are complex exponentials having the same frequency.</li>
                    <li><ImgComp src={require("./signals_and_systems_pics/9.png")} style={{width:"40%"}}/></li>
                    <li>For the above  RC circuit , let \({"v_{in} = V_{in} e^{j2 \\pi ft}"}\). The complex amplitude \({"V_{in}"}\) determines the size of the source and its phase.</li>
                    <li>The critical consequence of assuming that sources have this form is that all voltages and currents in the circuit are also complex exponentials, having amplitudes governed by KVL, KCL, and the \(v\)-\(i\) relations and the same frequency as the source.</li>
                    <li><u>For the resistor</u>, \(v = Ri\):</li>
                    <MathStuff>$$ {"v(t) = V e^{j2 \\pi ft} \\implies i(t) = \\frac{V}{R} e^{j2 \\pi ft}"} $$</MathStuff>
                    <li>Thus, if the resistor's voltage is a complex exponential, so is the current, with an amplitude \({"I = \\frac{V}{R}"}\).</li>
                    <li><u>For a capacitor</u>, \(i(t)=C \frac{"{d}"}{"{dt}"} v(t)\):</li>
                    <MathStuff>$$ {"v(t) = V e^{j2 \\pi ft} \\implies i(t) = C ((V e^{j2 \\pi ft})(j2 \\pi f))"} $$</MathStuff>
                    <li>The amplitude of this complex exponential is \(I = CV j2 \pi f\).</li>
                    <li><u>For an inductor</u>, where \(v(t) = L \frac{"{d}"}{"{dt}"} i (t)\). Assuming the current to be a complex exponential:</li>
                    <MathStuff>$$ {"v(t) = LI(j2 \\pi f) (e^{j2 \\pi ft})"} $$</MathStuff>
                    <li>making the complex amplitude \(V = LIj2 \pi f\).</li>
                    <li>The major consequence of assuming complex exponential voltage and currents is that the ratio \({"Z = \\frac{V}{I}"}\) for each element does not depend on time, but does depend on source frequency. This quantity is known as the element's <b>impedance</b>.</li>
                    <TableLI><tbody>
                        <tr><td>\(Z_R\) = \(R\)</td></tr>
                        <tr><td>\(Z_C\) = \(\frac{"{1}{j2\\pi fC}"}\)</td></tr>
                        <tr><td>\(Z_L\) = \(j2 \pi fL\)</td></tr>
                    </tbody></TableLI>
                    <li>The complex amplitudes for voltage and current also obey Kirchhoff's laws, we can solve circuits using voltage and current divider and the series and parallel combination rules by considering the elements to be impedances.</li>
                    <li>When we find the differential equation relating the source and the output, we are faced with solving the circuit in what is known as the <b>time domain</b>. It is often easier to find the output if we use impedances. Because impedances depend only on frequency, we find ourselves in the <b>frequency domain</b>.</li>
                    <li><figure>
                        <ImgComp src={require("./signals_and_systems_pics/11.png")} style={{width:"60%"}}/>
                        <figcaption>(a) A simple RC circuit. (b) The impedance counterpart for the RC circuit. Note that the source and output voltage are now complex amplitudes.</figcaption>
                    </figure></li>
                    <li>For the \(RC\) circuit shown above, let's find the diffrential equation relating the output to input:</li>
                    <TableLI><tbody><tr>
                        <td><ul>
                            <li>We know that \({"v_{in} = v_R + v_{out}"}\), \(i = C \frac{"{d}"}{"{dt}"} v_{"{out}"}\) and \({"v_R = Ri"}\).</li>
                            <li>Putting it all together: \[{"v_{in} = RC \\frac{d}{dt} v_{out} + v_{out}"}\]</li>
                        </ul></td>
                        <td><ul>
                            <li>Using impedances, the complex amplitude of the output voltage \(V_{"{out}"}\) can be found using voltage divider: \[V_{"{out}"} = \frac{"{Z_C}{Z_C + Z_R}"} V_{"{in}"}\] \[V_{"{out}"} = \frac{"{1}{j 2 \\pi f RC + 1}"} V_{"{in}"}\] \[V_{"{out}"} (j 2 \pi f RC + 1) = V_{"{in}"}\] \[(j 2 \pi f RC V_{"{out}"} + V_{"{out}"}) = V_{"{in}"}\] \[RC j 2 \pi f V_{"{out}"} e^{"{j 2 \\pi f t}"} + V_{"{out}"} e^{"{j 2 \\pi f t}"} \] \[ = V_{"{in}"} e^{"{j 2 \\pi f t}"}\]  \[{"RC \\frac{d}{dt} v_{out} + v_{out} = v_{in}"}\]</li>
                        </ul></td>
                    </tr></tbody></TableLI>
                </SubList></li>
            </ul>
        </div>
    </div>
</>}