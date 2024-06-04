import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import SubList from "../../articleRelatedStuff/SubList";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export const title = "Electricity, Magnetism and Circuits Notes";
const sourcesOrder = [5, 6, 4];
export const sourcesColor = {5:null, 6:null, 4:null};
export const content = <>
	<h1>Electricity, Magnetism and Circuits Notes</h1>
	{getSourcesOL(sourcesColor, sourcesOrder)}

	<h2 id="electric_charges_and_fields">Electric Charges and Fields</h2>
	<div className="content">
		<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>Some history:<SubList>
				<li>The ancient Greek philosopher <b>Thales of Miletus</b> (624-546 BCE) recorded that when amber (a hard, translucent, fossilized resin from extinct trees) was vigorously rubbed with a piece of fur, a force was created that caused the fur and the amber to be attracted to each other.</li>
				<li>Additionally, he found that the rubbed amber would not only attract the fur, and the fur attract the amber, but they both could affect other (nonmetallic) objects, even if not in contact with those objects.</li>
				<li>The English physicist <b>William Gilbert</b> (1544-1603) also studied this attractive force, using various substances. He found that the metals never exhibited this force, whereas the minerals did. Moreover, although an electrified amber rod would attract a piece of fur, it would repel another electrified amber rod; similarly, two electrified pieces of fur would repel each other.</li>
				<li>The American physicist and statesman <b>Benjamin Franklin</b> found that he could concentrate charge in a "Leyden jar", which was essentially a glass jar with two sheets of metal foil, one inside and one outside, with the glass between them. This created a large electric force between the two foil sheets.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/1.png")}/></li>
				<li>Franklin pointed out that the observed behavior could be explained by supposing that one of the two types of charge remained motionless, while the other type of charge flowed from one piece of foil to the other. He further suggested that an excess of what he called this "electrical fluid" be called "positive electricity" and the deficiency of it be called "negative electricity".</li>
				<li>With the experiments that he was able to do, this was a pure guess; he had no way of actually determining the sign of the moving charge. Unfortunately, he guessed wrong; we now know that the charges that flow are the ones Franklin labeled negative, and the positive charges remain largely motionless.</li>
				<li>Let's list the specific observations that we have of electric force:<SubList>
					<li>The force acts without physical contact between the two objects.</li>
					<li>The force can be either attractive or repulsive: If two interacting objects carry the same sign of charge,
					the force is repulsive; if the charges are of opposite sign, the force is attractive.</li>
					<li>Not all objects are affected by this force.</li>
					<li>The magnitude of the force decreases (rapidly) with increasing separation distance between the
					objects. To be more precise, we find experimentally that the magnitude of the force decreases as the square of the distance between the two interacting objects increases.</li>
				</SubList></li>
				<li>In addition to the existence of two types of charge, several other properties of charge have been discovered:<SubList>
					<li><b>Charge is quantized:</b> This means that electric charge comes in discrete amounts, and there is a smallest possible amount of charge that an object can have. In the SI system, this smallest amount is \(e=1.602 \times 10^{"{-9}"}\).</li>
					<li><b>Charge is conserved:</b> Charge can neither be created nor destroyed; it can only be transferred from place to place, from one object to another.</li>
					<li><b>Charge is conserved in closed systems:</b> If the total charge you have in your local system on your lab bench is changing, there will be a measurable flow of charge into or out of the system.</li>
				</SubList></li>
			</SubList></li>
			<li><b>Electrons</b> and <b>protons</b>:<SubList>
				<li>Once it became clear that all matter was composed of particles that came to be called atoms, it also quickly became clear that the constituents of the atom included both positively charged particles and negatively charged particles.</li>
				<li>The negatively charged particle was the first one to be discovered. In 1897, the English physicist <b>J. J. Thomson</b> was studying what was then known as cathode rays. Some years before, the English physicist William Crookes had shown that these "rays" were negatively charged, but his experiments were unable to tell any more than that. The fact that they carried a negative electric charge was strong evidence that these were not rays at all, but particles.</li>
				<li>Thomson prepared a pure beam of these particles and sent them through crossed electric and magnetic fields, and adjusted the various field strengths until the net deflection of the beam was zero. With this experiment, he was able to determine the charge-to-mass ratio of the particle. This ratio showed that the mass of the particle was much smaller than that of any other previously known particle (1837 times smaller).</li>
				<li>Eventually, this particle came to be called the <b>electron</b>.</li>
				<li>Since the atom as a whole is electrically neutral, the next question was to determine how the positive and negative charges are distributed within the atom.</li>
				<li>The New Zealand physicist <b>Ernest Rutherford</b> showed that the positive charges of the atom existed within a tiny core - called a <b>nucleus</b> - that took up only a very tiny fraction of the overall volume of the atom.</li>
				<li>In addition, he showed that the negatively charged electrons perpetually orbited about this nucleus, forming a sort of electrically charged cloud that surrounds the nucleus. Rutherford concluded that the nucleus was constructed of small, massive particles that he named <b>protons</b>.</li>
			</SubList></li>
			<li>Discovery of <b>neutron</b>:<SubList>
				<li>Since it was known that different atoms have different masses, and that ordinarily atoms are electrically neutral, it was natural to suppose that different atoms have different numbers of protons in their nucleus, with an equal umber of negatively charged electrons orbiting about the positively charged nucleus.</li>
				<li>However, it was soon discovered that although the lightest atom, hydrogen, did indeed have a single proton as its nucleus, the next heaviest atom, helium, has twice the number of protons (two), but four times the mass of hydrogen.</li>
				<li>This mystery was resolved in 1932 by the English physicist <b>James Chadwick</b>, with the discovery of the <b>neutron</b>. The neutron is, essentially, an electrically neutral twin of the proton, with no electric charge, but (nearly) identical mass to the proton.</li>
				<li>In 1932, the picture of the atom was of a small, massive nucleus constructed of a combination of protons and neutrons, surrounded by a collection of electrons whose combined motion formed a sort of negatively charged "cloud" around the nucleus.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/2.png")}/></li>
				<li> The very low-mass electrons can be more or less easily removed or added to an atom, changing the net charge on the atom (though without changing its type). An atom that has had the charge altered in this way is called an <b>ion</b>.</li>
				<li>In the latter part of the twentieth century, many more subatomic particles were discovered in the nucleus of the atom: pions, neutrinos, and quarks, among others. With the exception of the photon, none of these particles are directly relevant to the study of electromagnetism.</li>
			</SubList></li>
			<li>Separation of Charge in Atoms:<SubList>
				<li>Some atoms and molecules have a greater affinity for electrons than others and will become negatively charged by close contact in rubbing, leaving the other material positively charged.</li>
				<li>Methods other than rubbing can also separate charges. Batteries use combinations of substances that interact in such a way as to separate charges. Chemical interactions may transfer negative charge from one substance to the other, making one battery terminal negative and leaving the first one positive.</li>
			</SubList></li>
			<li>Conservation of charge:<SubList>
				<li><b>Law of conservation of charge:</b> Total charge is constant in any process.</li>
				<li>In more exotic situations, such as in particle accelerators, mass, \(\Delta m\), can be created from energy in the amount \(\Delta m=Ec^2\). Sometimes, the created mass is charged. Whenever a charged particle is created, another having an opposite charge is always created along with it, so that the total charge created is zero. Usually, the two particles are "matter-antimatter" counterparts. For example, an antielectron would usually be created at the same time as an electron.</li>
			</SubList></li>
			<li>Conductors and Insulators:<SubList>
				<li>There is an outermost electron that is only loosely bound to the atom's nucleus. It can be easily dislodged.</li>
				<li>In a large mass of copper atoms (such as a copper wire or a sheet of copper), these vast numbers of outermost electrons (one per atom) wander from atom to atom, and are the electrons that do the moving when electricity flows.</li>
				<li>These wandering, or "free", electrons are called <b>conduction electrons</b>, and copper is therefore an excellent <b>conductor</b> (of electric charge).</li>
				<li><b>Superconductors</b> allow the movement of charge without any loss of energy.</li>
				<li><b>Insulators</b>, in contrast, are made from materials that lack conduction electrons; charge flows only with great difficulty, if at all.</li>
				<li>If excess charge is added to an insulating material, it cannot move, remaining indefinitely in place. This is why insulating materials exhibit the electrical attraction and repulsion forces described earlier.</li>
				<li>When excess charge is placed on a conductor or the conductor is put into a static electric field, charges in the conductor quickly respond to reach a steady state called <b>electrostatic equilibrium</b>.</li>
			</SubList></li>
		</ul>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li><b>Polarization:</b><SubList>
				<li>When a charged insulator (such as a positively charged glass rod) is brought close to the conductor, the (total) charge on the insulator exerts an electric force on the conduction electrons. Since the rod is positively charged, the conduction electrons (which themselves are negatively charged) are attracted, flowing toward the insulator to the near side of the conductor.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/3.png")}/></li>
				<li>This process is referred to as <i>inducing polarization</i> - in this case, polarizing the conductor. The resulting separation of positive and negative charge is called <b>polarization</b>. The result is the formation of what is called an electric <b>dipole</b>.</li>
				<li><figure>
					<ImgComp src={require("./electricity_magnetism_and_circuits_pics/4.png")} style={{width:"70%"}}/>
					<figcaption>Charging by induction</figcaption>
				</figure></li>
				<li>Water is a strongly <b>polar molecule</b>. Its 10 electrons (8 from the oxygen atom and 2 from the two hydrogen atoms) tend to remain closer to the oxygen nucleus than the hydrogen nuclei. This creates two centers of equal and opposite charges—what is called a <b>dipole</b>.</li>
				<li><figure>
					<ImgComp src={require("./electricity_magnetism_and_circuits_pics/7.webp")} style={{width:"55%"}}/>
					<figcaption>Unequal sharing of electrons between the oxygen (\(O\)) and hydrogen (\(H\)) atoms leads to a net separation of positive and negative charge, forming a dipole. The symbols \(δ−\) and \(δ+\) indicate that the oxygen side of the \(H_2O\) molecule tends to be more negative, while the hydrogen ends tend to be more positive. This leads to an attraction of opposite charges between molecules.</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Coulomb's law:</b><SubList>
				<MathStuff>$$F=k \frac{"{|q1q2|}"}{"{r^2}"}$$</MathStuff>
				<li>Coulomb's law calculates the magnitude of the force \(F\) between two point charges, \(q1\) and \(q2\), separated by a distance  \(r\). In SI units, the constant \(k\) is equal to \({"8.99 \\times 10^9 \\frac{Nm^2}{C^2}"}\)</li>    
				<li>The experiments Coulomb did, with the primitive equipment then available, were difficult. Modern experiments have verified Coulomb's law to great precision.</li>
			</SubList></li>
			<li><b>Electric Field:</b><SubList>
				<li>A <b>field</b> is a way of conceptualizing and mapping the force that surrounds any object and acts on another object at a distance without apparent physical connection.</li>
				<li>The Coulomb force field surrounding any charge extends throughout space. For a <b>point charge</b> (a particle having a charge \(Q\)) acting on a <b>test charge</b> \(q\) at a distance \(r\). Its magnitude is given by the equation:</li>
				<MathStuff>$$F=k\frac{"{|qQ|}"}{"{r^2}"}$$</MathStuff>
				<li>Both the magnitude and direction of the Coulomb force field depend on \(Q\) and the test charge \(q\).</li>
				<li>The electric field \(E\) is defined to be the ratio of the Coulomb force to the test charge.</li>
				<li>The magnitude of the electric field:</li>
				<MathStuff>$$E=\frac{"{F}"}{"{q}"}=k\frac{"{|Q|}"}{"{r^2}"}$$</MathStuff>
				<li>\(F\) is the electrostatic force (or Coulomb force) exerted on a positive test charge \(q\). It is understood that \(E\) is in the same direction as \(F\).</li>
				<li>It is assumed that \(q\) is so small that it does not alter the charge distribution creating the electric field.</li>
				<li><figure>
					<ImgComp src={require("./electricity_magnetism_and_circuits_pics/5.webp")} style={{width:"60%"}}/>
					<figcaption>Two equivalent representations of the electric field due to a positive charge \(Q\). (a) Arrows representing the electric field's magnitude and direction. (b) In the standard representation, the arrows are replaced by continuous field lines having the same direction at any point as the electric field. The closeness of the lines is directly related to the strength of the electric field.</figcaption>
				</figure></li>
				<li>In many situations, there are multiple charges. The total electric field created by multiple charges is the vector sum of the individual fields created by each charge.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/6.webp")} style={{width:"40%"}}/></li>
				<li>The properties of electric field lines for any charge distribution can be summarized as follows:<SubList numbered={true}>
					<li>Field lines must begin on positive charges and terminate on negative charges, or at infinity in the hypothetical case of isolated charges.</li>
					<li>The number of field lines leaving a positive charge or entering a negative charge is proportional to the magnitude of the charge.</li>
					<li>The strength of the field is proportional to the closeness of the field lines—more precisely, it is proportional to the number of lines per unit area perpendicular to the lines.</li>
					<li>The direction of the electric field is tangent to the field line at any point in space.</li>
					<li>Field lines can never cross.</li>
				</SubList></li>
			</SubList></li>
			<li><b>Electric Potential:</b><SubList>
				<li>When a free positive charge \(q\) is accelerated by an electric field, it is given kinetic energy. The process is analogous to an object being accelerated by a gravitational field.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/8.webp")} style={{width:"40%"}}/></li>
				<li>We use the letters \(PE\) to denote electric potential energy, which has units of joules (\(J\)).</li>
				<li>\(W=-ΔPE\): Work \(W\) done to accelerate a positive charge from rest is positive and results from a loss in \(PE\), or a negative \(ΔPE\).</li>
				<li>Since \(W=Fdcos \Theta\) and since \(F=qE\), then \(\Delta PE\) is proportional to the test charge \(q\).</li>
				<li>To have a physical quantity that is independent of test charge, we define electric potential \(V\) (or simply potential, since electric is understood) to be the potential energy per unit charge: \({"V=\\frac{PE}{q}"}\).</li>
				<li>Since \(PE\) is proportional to \(q\), the dependence on \(q\) cancels. Thus \(V\) does not depend on \(q\).</li>
				<li><a href='https://physics.stackexchange.com/questions/216537/what-is-the-relation-between-electric-potential-and-electric-potential-energy'>Electric potential (V) is the property of points in space. The value of the electric potential at a point in space numerically gives the amount of work that needs to be done to bring a unit positive charge from infinity to that point.</a></li>
				<li>The term <b>voltage</b> is the common name for potential difference. The relationship between potential difference (or voltage) and electrical potential energy is given by: \({"\\Delta V=V_B-V_A=\\frac{\\Delta PE}{q}"}\).</li>
				<li>Voltage is the energy per unit charge.</li>
				<li>On the submicroscopic scale, it is more convenient to define an energy unit called <b>electron volt (eV)</b>, which is the energy given to a fundamental charge accelerated through a potential difference of 1 V.</li>
				<MathStuff>$${"1 eV=(1.60 \\times 10^{-19} C)(1 V)=1.60\\times 10^{-19}J"}$$</MathStuff>
				<li>Relationship between voltage and electric field:<SubList>
					<li>A uniform electric field \(E\) is produced by placing a potential difference (or voltage) \(ΔV\) across two parallel metal plates.</li>
					<li><figure>
						<ImgComp src={require("./electricity_magnetism_and_circuits_pics/9.webp")} style={{width:"40%"}}/>
						<figcaption> The relationship between \(V\) and \(E\) for parallel conducting plates is  \(E=V/d\).</figcaption>
					</figure></li>
					<li>\(ΔV\) is most closely tied to energy, whereas \(E\) is most closely related to force.</li>
					<li>\(ΔV\) is a scalar quantity and has no direction, while \(E\) is a vector quantity.</li>
					<li>The work done by the electric field in Figure 19.5 to move a positive charge \(q\) from \(A\), the positive plate, higher potential, to \(B\), the negative plate, lower potential, is \(W=-ΔPE=-qΔV\). The potential difference between points \(A\) and \(B\) is \(-ΔV=-(V_B-V_A)=V_A - V_B=V_{"{AB}"}\). Entering this into the expression for work yields \(W=qV_{"{AB}"}\).</li>
					<li>Since \(W=Fd\) and since \(F=qE\), then \(W=qEd\), implying \(qEd=qV_{"{AB}"} \).So the voltage between points \(A\) and \(B\) is \(Ed=V_{"{AB}"} \).</li>
					<li>Thus the following relation is valid: \(1 N/C = 1 V/m\).</li>
					<li>The force on a positive charge is in the direction of \(E\) and also in the direction of lower potential \(V\). Furthermore, the magnitude of \(E\) equals the rate of decrease of \(V\) with distance.</li>
					<li>In equation form, the general relationship between voltage and electric field is \(E=-\frac{"{ΔV}{Δs}"}\), where \(Δs\) is the distance over which the change in potential, \(ΔV\), takes place. The minus sign tells us that \(E\) points in the direction of decreasing potential.</li>
					<li>The electric field is said to be the <b>gradient</b> of the electric potential.</li>
				</SubList></li>
				<li>The electric potential \(V\) of a point charge is given by \(V=k \frac{"{Q}"}{"{r}"}\).</li>
				<li>Places where the electric potential is constant are called <b>equipotential lines</b> in two dimensions, or <b>equipotential surfaces</b> in three dimensions.</li>
				<li><figure>
					<ImgComp src={require("./electricity_magnetism_and_circuits_pics/10.webp")} style={{width:"50%"}}/>
					<figcaption>An isolated point charge \(Q\) with its electric field lines in blue and equipotential lines in green.</figcaption>
				</figure></li>
				<li>Equipotential lines are always perpendicular to electric field lines.</li>
			</SubList></li>
			<li><b>Capacitors:</b><SubList>
				<li>A <b>capacitor</b> is a device used to store electric charge.</li>
				<li>When battery terminals are connected to an initially uncharged capacitor, equal amounts of positive and negative charge, \(+Q\) and \(-Q\), are separated into its two plates. The capacitor remains neutral overall, but we refer to it as storing a charge \(Q\).</li>
				<li>The amount of charge \(Q\) a capacitor can store depends on two major factors: the voltage applied and the capacitor's physical characteristics, such as its size.</li>
				<li>The field is proportional to the charge (\(E \propto  Q\)). It follows, then, that \(V \propto  Q\).</li>
				<li>\(Q=CV\): The \(C\) is the <b>capacitance</b>.</li>
				<li><b>Parallel Plate Capacitor:</b><SubList>
					<li>The <b>parallel plate capacitor</b> shown in has two identical conducting plates, each having a surface area \(A\), separated by a distance \(d\).</li>
					<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/11.webp")} style={{width:"40%"}}/></li>
					<li>The bigger the plates are, the more charge they can store—because the charges can spread out more. Similarly, the closer the plates are together, the greater the attraction of the opposite charges on them. It can be shown that: \(C= \epsilon_0 \frac{"{A}{d}"}\).</li>
				</SubList></li>
				<li><b>Dielectrics</b>:<SubList>
					<li>If \(d\) is made smaller to produce a larger capacitance, then the maximum voltage must be reduced proportionally to avoid <a href='https://qr.ae/pKy8xE'>breakdown</a> (since  \(E= \frac{"{V}{d}"}\)). An important solution to this difficulty is to put an insulating material, called a <b>dielectric</b>, between the plates of a capacitor and allow \(d\) to be as small as possible.</li>
					<li>Depending on the material used, the capacitance is greater than that given by the equation  \(C= \epsilon_0 \frac{"{A}{d}"}\) by a factor \(k\), called the <b>dielectric constant</b>. A parallel plate capacitor with a dielectric between its plates has a capacitance given by: \(C= k \epsilon_0 \frac{"{A}{d}"}\).</li>
					<li>The dielectric constant is generally defined to be \(k=E_0/E\), or the ratio of the electric field in a vacuum to that in the dielectric material.</li>
				</SubList></li>
				<li>Capacitors in series:<SubList>
					<li><figure>
						<ImgComp src={require("./electricity_magnetism_and_circuits_pics/12.png")} style={{width:"70%"}}/>
						<figcaption>(a) Capacitors connected in series. The magnitude of the charge on each plate is \(Q\). (b) An equivalent capacitor has a larger plate separation \(d\).</figcaption>
					</figure></li>
					<li>We can find an expression for the total capacitance by considering the voltage across the individual capacitors:</li>
					<MathStuff>$$ V= V_1 + V_2 + V_3 $$</MathStuff>
					<li>Now, calling the total capacitance \(C_s\) for series capacitance, consider that:</li>
					<MathStuff>$$ {"\\begin{align}\
					V &= \\frac{Q}{C_s} = V_1 + V_2 + V_3 \\\\\
					 &= \\frac{Q}{C_1} + \\frac{Q}{C_2} + \\frac{Q}{C_3} \\\\\
					\\end{align}"} $$</MathStuff>
					<li>Canceling the \(Q\)s, we obtain:</li>
					<MathStuff>$${"\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}"}$$</MathStuff>
					<li>An expression of this form always results in a total capacitance \(C_s\) that is less than any of the individual capacitances.</li>
				</SubList></li>
				<li>Capacitors in parallel:<SubList>
					<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/13.webp")} style={{width:"70%"}}/></li>
					<li>To find the equivalent total capacitance \(C_p\), we first note that the voltage across each capacitor is \(V\). Thus the capacitors have the same charges on them as they would have if connected individually to the voltage source.</li>
					<li>The total charge \(Q\) is the sum of the individual charges: \(Q=Q_1+Q_2+Q_3\).</li>
					<li>Using the relationship \(Q=CV\), we see that the total charge is \(Q=C_pV\), and the individual charges are \(Q_1=C_1V\), \(Q_2=C_2V\), and \(Q_3=C_3V\).</li>
					<MathStuff>$${"C_pV=C_1V+C_2V+C_3V"}$$</MathStuff>
					<li>Canceling \(V\) from the equation:</li>
					<MathStuff>$${"C_p=C_1+C_2+C_3"}$$</MathStuff>
				</SubList></li>
				<li>Energy Stored in Capacitors:<SubList>
					<li>We must be careful when applying the equation for electrical potential energy \(ΔPE=qΔV\) to a capacitor. Remember that \(ΔPE\) is the potential energy of a charge \(q\) going through a voltage \(ΔV\).</li>
					<li>The capacitor starts with zero voltage and gradually comes up to its full voltage as it is charged. The first charge placed on a capacitor experiences a change in voltage \(ΔV=0\). The final charge placed on a capacitor experiences \(ΔV=V\), since the capacitor now has its full voltage \(V\) on it.</li>
					<li>The average voltage on the capacitor during the charging process is \(V/2\). Thus the energy stored in a capacitor is:</li>
					<MathStuff>$${"E_{cap}=\\frac{QV}{2}"}$$</MathStuff>
					<li>where \(Q\) is the charge on a capacitor with a voltage \(V\) applied.</li>
					<li>Equivalent expressions:</li>
					<MathStuff>$${"E_{cap}=\\frac{CV^2}{2}=\\frac{Q^2}{2C}"}$$</MathStuff>
				</SubList></li>
			</SubList></li>
		</ul>
	</div>

	<h2>Electric Current, Resistance, and Ohm's Law</h2>
	<div className="content">
		<ul style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li><b>Electric current:</b><SubList>
				<li><b>Electric current</b> \(I\) is defined to be the rate at which charge flows, \(I = \frac{"{\\Delta Q}{\\Delta t}"}\).</li>
				<li><figure>
					<ImgComp src={require("./electricity_magnetism_and_circuits_pics/15.webp")} style={{width:"50%"}}/>
					<figcaption>Current \(I\) is the rate at which charge moves through an area \(A\), such as the cross-section of a wire. Conventional current is in the direction opposite to the movement of negative charge.</figcaption>
				</figure></li>
				<li>The SI unit for current is the <b>ampere</b> (\(A\)).</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/14.png")} style={{width:"70%"}}/></li>
				<li>Note that the direction of current flow in the figure above is from positive to negative. The direction of conventional current is the direction that positive charge would flow.</li>
				<li>In metal wires, for example, current is carried by electrons—that is, negative charges move. In ionic solutions, such as salt water, both positive and negative charges move.</li>
				<li>Most electrical signals carried by currents travel at speeds on the order of  \(10^8\)m/s, a significant fraction of the speed of light. Interestingly, the individual charges that make up the current move much more slowly on average, typically drifting at speeds on the order of  \(10^{"{-4}"}\)m/s.</li>
				<li>When a free charge is forced into a wire, the incoming charge pushes other charges ahead of it, which in turn push on charges farther down the line. The density of charge in a system cannot easily be increased, and so the signal is passed on rapidly. The resulting electrical shock wave moves through the system at nearly the speed of light.</li>
				<li>To be precise, the rapidly moving signal or shock wave is a rapidly propagating change in electric field.</li>
				<li>Good conductors have large numbers of free charges in them. The distance that an individual electron can move between collisions with atoms or other electrons is quite small. The electron paths thus appear nearly random.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/16.webp")} style={{width:"60%"}}/></li>
				<li>There is an electric field in the conductor that causes the electrons to drift in the direction shown (opposite to the field, since they are negative). The <b>drift velocity</b> (\(v_d\)) is the average velocity of the free charges. Drift velocity is quite small, since there are so many free charges. The larger the density, the lower the velocity required for a given current.</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/17.webp")} style={{width:"50%"}}/></li>
				<li>Let \(n\) number of free charges per unit volume, then \(\Delta Q\) in the shaded segment of the above picture is \(qnAx\). Therefore:</li>
				<MathStuff>$$\begin{"{align}"} I= \frac{"{\\Delta Q}{\\Delta t}"} &= \frac{"{qnAx}{\\Delta t}"} \\ \\ &= qnAv_d \end{"{align}"}$$</MathStuff>
			</SubList></li>
			<li><b>Resistance:</b><SubList>
				<li>The current that flows through most substances is directly proportional to the voltage \(V\) applied to it (\(I \propto V\)). This important relationship is known as <b>Ohm's law</b>.</li>
				<li>Ohm's law is not universally valid. The many substances for which Ohm's law holds are called <b>ohmic</b>.</li>
				<li>For ohmic materials, \(V=IR\), where \(R\) is the resistance.</li>
				<li>An object that has simple resistance is called a <b>resistor</b>, even if its resistance is small. The unit for resistance is an <b>ohm</b> and is given the symbol \(Ω\).</li>
				<li>A <b>simple circuit</b> has a single voltage source and a single resistor:</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/18.webp")} style={{width:"40%"}}/></li>
				<li>If voltage is measured at various points in a circuit, it will be seen to increase at the voltage source and decrease at the resistor.</li>
				<li>The voltage source supplies energy (causing an electric field and a current), and the resistor converts it to another form (such as thermal energy). In a simple circuit (one with a single simple resistor), the voltage supplied by the source equals the voltage drop across the resistor.</li>
				<li>The cylinder's electric resistance \(R\) is directly proportional to its length \(L\) and inversely proportional to the cylinder's cross-sectional area \(A\).</li>
				<li><ImgComp src={require("./electricity_magnetism_and_circuits_pics/19.webp")} style={{width:"50%"}}/></li>
				<li><b>Resistivity</b> \(\rho\) is an intrinsic property of a material, independent of its shape or size.</li>
				<li>Over relatively small temperature changes (about  \(100^\circ C\) or less), resistivity \(\rho\) varies with temperature change \(ΔT\) as expressed:</li>
				<MathStuff>$$ \rho = \rho_0 (1+ \alpha \Delta T)$$</MathStuff>
				<li>where \(\rho_0\) is the original resistivity and \(\alpha\) is the temperature coefficient of resistivity.</li>
				<li>For a cylinder we know  \(R=\rho L/A\), and so, if \(L\) and \(A\) do not change greatly with temperature, \(R\) will have the same temperature dependence as \(\rho \).</li>
			</SubList></li>
			<li><b>Power</b> and <b>energy</b>:<SubList>
				<li><b>Power</b> is the rate at which energy is moved:</li>
				<MathStuff>$$P = \frac{"{PE}{t}"} = \frac{"{qV}{t}"} = IV$$</MathStuff>
				<li>\(E = Pt\) is the energy used by a device for time \(t\).</li>
				<MathStuff>$$1 kW \cdot h = 3.6 \times 10^6 J$$</MathStuff>
			</SubList></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<ul style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</>