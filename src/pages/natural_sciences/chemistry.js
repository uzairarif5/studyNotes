import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";

//Chapter 2.5 The Periodic Table

export const title = "Chemistry notes";
export const sourcesColor = {56:null};
export const content = <>
<h1>Chemistry</h1>
<h2 id="essentialIdeas">Essential Ideas</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}} data-source={56}>
		<h3>Chemistry in Context</h3>
    <ul>
      <li><b>Chemistry</b> is the study of the composition,
properties, and interactions of matter.</li>
      <li>The Scientific Method:<SubList>
				<li>Chemistry is a science based on observation and experimentation. Doing chemistry involves attempting to
			answer questions and explain observations in terms of the laws and theories of chemistry, using procedures
			that are accepted by the scientific community.</li>
				<li>There is no single route to answering a question or explaining
			an observation, but there is an aspect common to every approach: Each uses knowledge based on experiments
			that can be reproduced to verify the results.</li>
				<li>Some routes involve a <b>hypothesis</b>, a tentative explanation of observations that acts as a guide for gathering and checking information. A hypothesis is tested by
			experimentation, calculation, and/or comparison with the experiments of others and then refined as needed.</li>
				<li>Some hypotheses are attempts to explain the behavior that is summarized in <b>laws</b>. The laws of science
			summarize a vast number of experimental observations, and describe or predict some facet of the natural
			world.</li>
				<li>If such a hypothesis turns out to be capable of explaining a large body of experimental data, it can reach
			the status of a <b>theory</b>. Scientific theories are well-substantiated, comprehensive, testable explanations of
			particular aspects of nature.</li>
				<li>The path of discovery that leads from question and observation
			to law or hypothesis to theory, combined with experimental verification of the hypothesis and any necessary
			modification of the theory, is called the <b>scientific method</b>.</li>
				<li><ImgComp src={require("./chemistryPics/1.png")} style={{width:"80%"}}/></li>
      </SubList></li>
      <li>Domains of Chemistry:<SubList>
	<li>The <b>macroscopic domain</b> is familiar to us: It is the realm of
everyday things that are large enough to be sensed directly by human sight or touch. In daily life, this includes
the food you eat and the breeze you feel on your face.</li>
	<li>The <b>microscopic domain</b> is often visited in the
imagination. Some aspects of the microscopic domain are visible through standard optical microscopes, for
example, many biological cells.</li>
	<li>The <b>symbolic domain</b> contains the specialized language used to represent components of the macroscopic
and microscopic domains. Chemical symbols (such as those used in the periodic table), chemical formulas,
and chemical equations are part of the symbolic domain.</li>
      </SubList></li>
    </ul>
    <h3>Phases and Classification of Matter</h3>
    <ul>
      <li>States of matter:<SubList>
	<li><b>Matter</b> is defined as anything that occupies space and has mass, and it is all around us.</li>
	<li>A <b>solid</b> is rigid
  and possesses a definite shape. A <b>liquid</b> flows and takes the shape of its container, except that it forms a flat or
  slightly curved upper surface when acted upon by gravity. (In zero gravity, liquids assume a spherical shape.)
  Both liquid and solid samples have volumes that are very nearly independent of pressure. A gas takes both the
  shape and volume of its container.</li>
	<li>A <b>plasma</b> is a gaseous state of matter
  that contains appreciable numbers of electrically charged particles. The presence of these charged
  particles imparts unique properties to plasmas that justify their classification as a state of matter distinct from
  gases.</li>
	<li>The <b>mass</b> of an object is a measure of the amount of matter in it. One way to measure an object's mass is to
  measure the force it takes to accelerate the object.</li>
	<li><b>Weight</b> refers to the force that gravity exerts on an
  object.</li>
	<li>The <b>law of conservation</b> of matter summarizes many scientific observations about matter: It states that there
  is no detectable change in the total quantity of matter present when matter converts from one type to another
  (a chemical change) or changes among solid, liquid, or gaseous states (a physical change).</li>
      </SubList></li>
      <li>Classifying Matter:<SubList>
	<li>A <b>pure substance</b> has a constant composition. All specimens of a pure substance have exactly the same makeup
and properties.</li>
	<li>Any sample of sucrose (table sugar) consists of 42.1% carbon, 6.5% hydrogen, and 51.4%
oxygen by mass. Any sample of sucrose also has the same physical properties, such as melting point, color, and
sweetness, regardless of the source from which it is isolated.</li>
	<li>Pure substances that cannot be
broken down into simpler substances by chemical changes are called <b>elements</b>. Iron, silver, gold, aluminum,
sulfur, oxygen, and copper are familiar examples.</li>
	<li>Pure substances that are comprised of two or more elements are called <b>compounds</b>. Compounds may be
broken down by chemical changes to yield either elements or other compounds,</li>
	<li>A <b>mixture</b> is composed of two or more types of matter that can be present in varying amounts and can be separated by physical changes, such as evaporation (you will learn more about this later).</li>
	<li>A mixture with a
composition that varies from point to point is called a <b>heterogeneous mixture</b>.</li>
	<li>A <b>homogeneous mixture</b>, also called a solution, exhibits a uniform composition and appears visually the same throughout.</li>
	<li></li>
      </SubList></li>
      <li>Atoms and Molecules:<SubList>
	<li>An <b>atom</b> is the smallest particle of an element that has the properties of that element and can enter into a
chemical combination.</li>
	<li>Consider the element gold, for example. Imagine cutting a gold nugget in half, then
cutting one of the halves in half, and repeating this process until a piece of gold remained that was so small
that it could not be cut in half (regardless of how tiny your knife may be). This minimally sized piece of gold is
an atom (from the Greek atomos, meaning "indivisible"). This atom would no longer be gold if it
were divided any further.</li>
	<li>A <b>molecule</b> consists of two or more atoms joined by
strong forces called chemical bonds.</li>
      </SubList></li>
      <li>Physical and Chemical Properties:<SubList>
	<li><a href='https://www.thoughtco.com/difference-between-physical-and-chemical-properties-604142'>A <b>physical property</b> is an aspect of matter that can be observed or measured without changing its chemical composition. Examples of physical properties include color, molecular weight, and volume.</a></li>
	<li>A <b>physical change</b> is a change in the state
or properties of matter without any accompanying change in the chemical identities of the substances
contained in the matter.</li>
	<li><a href='https://www.thoughtco.com/difference-between-physical-and-chemical-properties-604142'>A <b>chemical property</b> may only be observed by changing the chemical identity of a substance. Examples of chemical properties include reactivity, flammability.</a></li>
	<li>A <b>chemical change</b> always produces one or more types of matter that differ from the matter present before the change.</li>
	<li>If the property depends on the amount of matter present, it
is an <b>extensive property</b>. The mass and volume of a substance are examples of extensive properties.</li>
	<li>If the property of a sample of matter does not depend on the
amount of matter present, it is an <b>intensive property</b>. Temperature is an example of an intensive property.</li>
	<li>While many elements differ dramatically in their chemical and physical properties, some elements have
	similar properties. These properties can be used to sort the elements into three classes:<SubList opened>
	  <li><b>metals</b> (elements that conduct well)</li>
	  <li><b>nonmetals</b> (elements that conduct poorly)</li>
	  <li><b>metalloids</b> (elements that have intermediate conductivities)</li>
	</SubList></li>
	<li><ImgComp src={require("./chemistryPics/2.png")} style={{width:"100%"}}/></li>
      </SubList></li>
    </ul>
    <h3>Measurements</h3>
    <ul>
      <li>SI Base Units:<SubList>
	<li><b>Units</b>, such as liters, pounds, and centimeters, are standards of comparison for measurements.</li>
	<li>The measurement units for seven fundamental properties ("base units") are listed below. The standards
  for these units are fixed by international agreement, and they are called <b>the International System of Units</b> or
  <b>SI Units</b> (from the French, Le Système International d'Unités).</li>
	<TableLI>
	  <caption>Base Units of the SI System</caption>
	  <thead>
	    <tr><th>Property Measured</th><th>Name of Unit</th><th>Symbol of Unit</th></tr>
	  </thead>
	  <tbody>
	    <tr><td>length</td><td>meter</td><td>m</td></tr>
	    <tr><td>mass</td><td>kilogram</td><td>kg</td></tr>
	    <tr><td>time</td><td>second</td><td>s</td></tr>
	    <tr><td>temperature</td><td>kelvin</td><td>K</td></tr>
	    <tr><td>electric current</td><td>ampere</td><td>A</td></tr>
	    <tr><td>amount of substance</td><td>mole</td><td>mol</td></tr>
	    <tr><td>luminous intensity</td><td>candela</td><td>cd</td></tr>
	  </tbody>
	</TableLI>
	<TableLI>
	  <caption>Common Unit Prefixes</caption>
	  <thead>
	    <tr><th>Prefix</th><th>Factor</th></tr>
	  </thead>
	  <tbody>
	    <tr><td>femto</td><td>\(10^{"{-15}"}\)</td></tr>
	    <tr><td>pico</td><td>\(10^{"{-12}"}\)</td></tr>
	    <tr><td>nano</td><td>\(10^{"{-9}"}\)</td></tr>
	    <tr><td>micro</td><td>\(10^{"{-6}"}\)</td></tr>
	    <tr><td>milli</td><td>\(10^{"{-3}"}\)</td></tr>
	    <tr><td>centi</td><td>\(10^{"{-2}"}\)</td></tr>
	    <tr><td>deci</td><td>\(10^{"{-1}"}\)</td></tr>
	    <tr><td>kilo</td><td>\(10^{"{3}"}\)</td></tr>
	    <tr><td>mega</td><td>\(10^{"{6}"}\)</td></tr>
	    <tr><td>giga</td><td>\(10^{"{9}"}\)</td></tr>
	    <tr><td>tera</td><td>\(10^{"{12}"}\)</td></tr>
	  </tbody>
	</TableLI>
      </SubList></li>
      <li>Derived SI Units:<SubList>
				<li><b>Volume</b> is the measure of the amount of space occupied by an object. The standard SI unit of volume is defined
			by the base unit of length. The standard volume is a cubic meter \(m^3\).</li>
				<li>A <b>liter (L)</b> is the more
			common name for the cubic decimeter.</li>
				<li>The <b>density</b> of a substance is the ratio of the mass of a sample of the substance to its volume.</li>
      </SubList></li>
    </ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}} data-source={56}>
		<h3>Measurement Uncertainty, Accuracy, and Precision</h3>
		<ul>
			<li><b>Counting</b> is the only type of measurement that is free from uncertainty, provided the number of objects being counted does not change while the counting process is underway.</li>
			<li>To measure the volume of liquid in a graduated cylinder, you should make a reading at the bottom of the meniscus, the lowest point on the curved surface of the liquid:<SubList>
				<li><ImgComp src={require("./chemistryPics/3.png")} style={{width:"100%"}}/></li>
				<li>Refer to the illustration above, the bottom of the meniscus lies between the 21 and
	22 markings. The meniscus appears to be a bit closer to the 22-mL mark than to the 21-mL mark, and so a reasonable estimate of the liquid's volume would be 21.6 mL, but the 6 is an estimate.</li>
				<li>Numerical scales such as the one shown above will permit measurements to one-tenth of the smallest scale division. The scale in this case has 1-ml divisions, and so volumes may be measured to the nearest 0.1 mL.</li>
			</SubList></li>
			<li>Every measurement has some <b>uncertainty</b>.</li>
			<li>All of the digits in a measurements, including the uncertain last digit, are called <b>significant figures</b>.</li>
			<li>What if you were analyzing a reported value and trying to determine what is significant and what is not?<SubList>
				<li>Well, for starters, all nonzero digits are significant, and it is only zeros that require
some thought. We will use the terms "leading", "trailing", and "captive" for the zeros and will consider how to
deal with them.</li>
				<li><ImgComp src={require("./chemistryPics/4.png")} style={{width:"60%"}}/></li>
				<li>Starting with the first nonzero digit on the left, count this digit and all remaining digits to the right. This is the number of significant figures in the measurement unless the last digit is a trailing zero lying to the left of the
decimal point.</li>
				<li>Captive zeros result from measurement and are therefore always significant. Leading zeros, however, are never significant.</li>
				<li><ImgComp src={require("./chemistryPics/5.png")} style={{width:"90%"}}/></li>
				<li>The number of significant figures is uncertain in a number that ends with a zero to the left of the decimal point
location.</li>
				<li><ImgComp src={require("./chemistryPics/6.png")} style={{width:"90%"}}/></li>
				<li>The ambiguity can be resolved with the use of exponential notation: \(1.3 * 10^3\) (two significant figures), \( 1.30 * 10^3\) (three significant figures, if the tens place was measured), or \(1.300 * 10^3\) (four significant figures, if the ones place was also measured).</li>
				<li>In cases where only the decimal-formatted number is
available, it is prudent to assume that all trailing zeros are not significant.</li>
			</SubList></li>
			<li>Significant Figures in Calculations:<SubList>
				<li><u>Rule:</u> When adding or subtracting numbers, round the result to the same number of decimal places as the
number with the fewest decimal places (i.e., the least certain value in terms of addition and subtraction). <u>Example:</u> 1.0023 g + 4.383 g = 5.385 g.</li>
				<li><u>Rule:</u> When multiplying or dividing numbers, round the result to the same number of digits as the number
with the fewest significant figures (the least certain value in terms of multiplication and division). <u>Example:</u> 0.6238 cm X 6.6 cm = 4.1 cm<sup>2</sup>.</li>
			</SubList></li>
			<li>Measurements are said to be <b>precise</b> if they yield
very similar results when repeated in the same manner.</li>
			<li>A measurement is considered <b>accurate</b> if it yields a
result that is very close to the true or accepted value.</li>
		</ul>
	</div>
</div>
<h2 id="atomsMoleculesIons">Atoms, Molecules And Ions</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}} data-source={56}>
		<h3>Atomic Structure and Symbolism</h3>
		<ul>
			<li>The development of modern atomic theory revealed much about the inner structure of atoms:<SubList>
				<li>It was learned
that an atom contains a very small nucleus composed of positively charged <b>protons</b> and uncharged <b>neutrons</b>,
surrounded by a much larger volume of space containing negatively charged <b>electrons</b>.</li>
				<li>The nucleus contains
the majority of an atom's mass because protons and neutrons are much heavier than electrons, whereas
electrons occupy almost all of an atom's volume.</li>
				<li>When describing the properties of tiny objects such as atoms, we use appropriately small units of measure, such as the <b>atomic mass unit (amu)</b> and the <b>fundamental unit of charge (e)</b>.</li>
				<li>The amu was originally defined based on hydrogen, the lightest element, then later in terms of oxygen.</li>
				<li>Since 1961, it has been defined with
regard to the most abundant isotope of carbon, atoms of which are assigned masses of exactly 12 amu. Thus, one amu is exactly of the
mass of one carbon-12 atom: 1 amu = \({"1.6605 * 10^{-24}"}\) g.</li>
				<li>The fundamental unit of charge (also called the
elementary charge) equals the magnitude of the charge of an electron (e) with e = \({"1.602 * 10^{-19}"}\) C.</li>
				<li>A proton has a mass of 1.0073 amu and a charge of 1+. A neutron is a slightly heavier particle with a mass 1.0087 amu and a charge of zero; as its name suggests, it is neutral. The electron has a charge of 1- and is a much lighter particle with a mass of about 0.00055 amu.</li>
				<li>The number of protons in the nucleus of an atom is its <b>atomic number (Z)</b>. This is the defining trait of an element.</li>
				<li>A neutral atom must contain the same number of positive and negative charges, so the number of protons equals
the number of electrons.</li>
				<li>The
total number of protons and neutrons in an atom is called its <b>mass number (A)</b>.</li>
				<li>Atoms of the same element
that differ in mass are called <b>isotopes</b>.</li>
				<li>When the numbers of these subatomic particles are not equal, the atom is electrically
charged and is called an <b>ion</b>.</li>
				<li>An atom that gains one or more electrons will exhibit a negative charge and is
called an <b>anion</b>. Positively charged atoms called <b>cations</b> are formed when an atom loses one or more
electrons.</li>
			</SubList></li>
			<li>Isotopes:<SubList>
				<li>The symbol for a specific isotope of any element is written by placing the mass number as a superscript to the
left of the element symbol.</li>
				<li>For example, magnesium exists as a mixture of three isotopes, each with an atomic number of 12 and with mass numbers of 24, 25, and 26, respectively.</li>
				<li><ImgComp src={require("./chemistryPics/7.png")} style={{width:"60%"}}/></li>
			</SubList></li>
			<li><b>Atomic Mass:</b><SubList>
				<li>Because each proton and each neutron contribute approximately one amu to the mass of an atom, and each
electron contributes far less, the <b>atomic mass</b> of a single atom is approximately equal to its mass number (a
whole number).</li>
				<li>However, the average masses of atoms of most elements are not whole numbers because most
elements exist naturally as mixtures of two or more isotopes.</li>
				<li>The occurrence and natural abundances of isotopes can be experimentally determined using an instrument
called a <b>mass spectrometer</b>.</li>
				<li>In a typical mass spectrometer, the sample is vaporized and exposed to a high-energy
electron beam that causes the sample's atoms (or molecules) to become electrically charged, typically by losing
one or more electrons.</li>
				<li>These cations then pass through a (variable) electric or magnetic field that deflects each
cation's path to an extent that depends on both its mass and charge.</li>
				<li><ImgComp src={require("./chemistryPics/8.png")} style={{width:"90%"}}/></li>
				<li>The ions are detected, and a
plot of the relative number of ions generated versus their mass-to-charge ratios (a mass spectrum) is made.</li>
			</SubList></li>
		</ul>
		<h3>Chemical Formulas</h3>
		<ul>
			<li><b>Molecular</b> and <b>structural formula</b>:<SubList>
				<li>A <b>molecular formula</b> is a representation of a molecule that uses chemical symbols to indicate the types of
	atoms followed by subscripts to show the number of atoms of each type in the molecule.</li>
				<li>The <b>structural formula</b> for a compound gives the same information as its molecular formula (the types and
	numbers of atoms in the molecule) but also shows how the atoms are connected in the molecule.</li>
				<li><figure>
					<ImgComp src={require("./chemistryPics/9.png")} style={{width:"90%"}}/>
					<figcaption>A methane molecule can be represented as (a) a molecular formula, (b) a structural formula, (c) a ball-and-stick model, and (d) a space-filling model.</figcaption>
				</figure></li>
				<li>H<sub>2</sub> is a molecular formula; it represents a diatomic molecule of hydrogen, consisting of two atoms of the element that are chemically bonded together. The expression 2H, on the other hand, indicates two separate hydrogen atoms that are not combined as a unit.</li>
			</SubList></li>
			<li><b>Empirical formula:</b><SubList>
				<li>Compounds are formed when two or more elements chemically combine, resulting in the formation of bonds.</li>
				<li>We sometimes describe the composition of these compounds with an <b>empirical formula</b>, which indicates
the types of atoms present and the simplest whole-number ratio of the number of atoms (or ions) in the
compound.</li>
			</SubList></li>
			<li>Glucose formula:<SubList>
				<li>The molecular formula is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> because one molecule actually contains 6 C, 12 H, and 6 O atoms.</li>
				<li>The simplest whole-number ratio of C to H to O atoms in glucose is 1:2:1, so the empirical formula is CH<sub>2</sub>O.</li>
			</SubList></li>	
			<li><b>Isomers:</b><SubList>
				<li>Acetic acid and methyl formate are examples of <b>isomers</b> - compounds
with the same chemical formula but different molecular structures</li>
				<li><ImgComp src={require("./chemistryPics/10.png")} style={{width:"70%"}}/></li>
				<li>Acetic acid and methyl formate are <b>structural isomers</b>, compounds in which the molecules differ in how the atoms are connected to each other. There are also various types of <b>spatial isomers</b>, in which the relative orientations of the atoms in space can be different.</li>
				<li>The compound carvone consists of two isomers that are mirror images of each other. S-(+)-carvone smells like caraway, and R-(-)-carvone smells like spearmint.</li>
				<li><ImgComp src={require("./chemistryPics/11.png")} style={{width:"70%"}}/></li>
			</SubList></li>
		</ul>
		<h3>The Periodic Table</h3>
		<ul>
			<li><b>Dimitri Mendeleev:</b><SubList>
				<li>As early chemists worked to purify ores and discovered more elements, they realized that various elements could be grouped together by their similar chemical behaviors.</li>
				<li><b>Dimitri Mendeleev</b> in Russia (1869) and <b>Lothar Meyer</b> in Germany (1870) independently recognized that there was a periodic relationship among the properties of the elements known at that time.</li>
				<li>Both published tables with the elements arranged according to increasing atomic mass. But Mendeleev went one step further than Meyer: He used his table to predict the existence of elements that would have the properties similar to aluminum and silicon, but were yet unknown.</li>
			</SubList></li>
			<li><b>Periodic law:</b><SubList>
				<li>By the twentieth century, it became apparent that the periodic relationship involved atomic numbers rather than atomic masses. The modern statement of this relationship, the <b>periodic law</b>, is as follows: <i>the properties of the elements are periodic functions of their atomic numbers</i>.</li>
				<li>A modern periodic table arranges the elements in increasing order of their atomic numbers and groups atoms with similar properties in the same vertical column.</li>
				<li>The elements are arranged in seven horizontal rows, called <b>periods</b> or <b>series</b>, and 18 vertical columns, called <b>groups</b>.</li>
				<li><ImgComp src={require("./chemistryPics/12.png")} style={{width:"100%"}}/></li>
				<li>Many elements differ dramatically in their chemical and physical properties, but some elements are similar in their behaviors.</li>
				<li>We can sort the elements into large classes with common properties:<SubList>
					<li><b>Metals:</b> elements that are shiny, malleable, good conductors of heat and electricity - shaded yellow.</li>
					<li><b>Nonmetals:</b> elements that appear dull, poor conductors of heat and electricity - shaded green.</li>
					<li><b>Metalloids:</b> elements that conduct heat and electricity moderately well, and possess some properties of metals and some properties of nonmetals - shaded purple.</li>
				</SubList></li>
			</SubList></li>
			<li>Classifying elements:<SubList>
				<li>The elements can also be classified into:<SubList>
					<li>The <b>Main-group elements</b> (or <b>representative elements</b>) in the columns labeled 1, 2, and 13 - 18.</li>
					<li>The <b>transition metals</b> in the columns labeled 3 - 12.</li>
					<li>The <b>inner transition metals</b> in the two rows at the bottom of the table (the top-row elements are called lanthanides and the bottom-row elements are actinides).</li>
				</SubList></li>
				<li><ImgComp src={require("./chemistryPics/13.png")} style={{width:"100%"}}/></li>
				<li>The elements in group 1 (the first column) form compounds that consist of one atom of the element and one atom of hydrogen. These elements (except hydrogen) are known as <b>alkali metals</b>, and they all have similar chemical properties.</li>
				<li>The elements in group 2 (the second column) form compounds consisting of one atom of the element and two atoms of hydrogen: These are called <b>alkaline earth metals</b>.</li>
				<li>Other groups with specific names are the <b>pnictogens</b> (group 15), <b>chalcogens</b> (group 16), <b>halogens</b> (group 17), and the <b>noble gases</b> (group 18, also known as <b>inert gases</b>).</li>
				<li>The groups can also be referred to by the first element of the group: For example, the chalcogens can be called the oxygen group or oxygen family.</li>
				<li>Hydrogen is a unique, nonmetallic element with properties similar to both group 1 and group 17 elements. For that reason, hydrogen may be shown at the top of both groups, or by itself.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}} data-source={56}>
		<h3>Ionic and Molecular Compounds</h3>
		<ul>
			<li>Gaining and losing electrons:<SubList>
				<li>In ordinary chemical reactions, the nucleus of each atom (and thus the identity of the element) remains unchanged. Electrons, however, can be added to atoms by transfer from other atoms, lost by transfer to other atoms, or shared with other atoms.</li>
				<li>During the formation of some compounds, atoms gain or lose electrons, and form electrically charged particles called <b>ions</b>.</li>
				<li>Atoms of many main-group metals lose enough electrons to leave them with the same number of electrons as an atom of the preceding noble gas.</li>
				<li>For example, a neutral calcium atom, with 20 protons and 20 electrons, readily loses two electrons. This results in a cation with 20 protons, 18 electrons, and a 2+ charge. It would then have the same number of electrons as atoms of the preceding noble gas, argon, and be symbolized \({"\\text{Ca}^{2+}"}\).</li>
				<li>The neutral bromine atom, with 35 protons and 35 electrons, can gain one electron. It would then have the same number of electrons as atoms of the next noble gas, krypton, and be symbolized \({"\\text{Br}^-"}\).</li>
				<li>Transition metals and some other metals often exhibit variable charges that are not predictable by their location in the table. For example, copper can form ions with a 1+ or 2+ charge, and iron can form ions with a 2+ or 3+ charge.</li>
				<li>The ions that we have discussed so far are called <b>monatomic ions</b>, that is, they are ions formed from only one atom. We also find many <b>polyatomic ions</b>. These ions, which act as discrete units, are electrically charged molecules (a group of bonded atoms with an overall charge).</li>
				<li><b>Oxyanions</b> are polyatomic ions that contain one or more oxygen atoms.</li>
				<li>There is a system for naming some polyatomic ions:<SubList>
					<li><i>-ate</i> and <i>-ite</i> are suffixes designating polyatomic ions containing more or fewer oxygen atoms.</li>
					<li><i>Per-</i> and <i>hypo-</i> are prefixes meaning more oxygen atoms than <i>-ate</i> and fewer oxygen atoms than <i>-ite</i>, respectively.</li>
					<li>For example, {"perchlorate is \\(\\text{ClO}^{4-}\\), chlorate is \\(\\text{ClO}^{3-}\\), chlorite is \\(\\text{ClO}^{2-}\\) and hypochlorite is \\(\\text{ClO}^-\\)"}.</li>
					<li>Unfortunately, the number of oxygen atoms corresponding to a given suffix or prefix is not consistent; for example, nitrate is \({"\\text{NO}^{3-}"}\) while sulfate is \({"{\\text{SO}_4}^{2-}"}\).</li>
				</SubList></li>
				<li>When electrons are transferred and ions form, <b>ionic bonds</b> result. Ionic bonds are electrostatic forces of attraction, (between cations and anions). When electrons are "shared" and molecules form, <b>covalent bonds</b> result.</li>
			</SubList></li>
			<li>Ionic Compounds:<SubList>
				<li>When an element composed of atoms that readily lose electrons (a metal) reacts with an element composed of atoms that readily gain electrons (a nonmetal), a transfer of electrons usually occurs, producing ions. The compound formed by this transfer is stabilized by the electrostatic attractions (ionic bonds) between the ions of opposite charge present in the compound.</li>
				<li>When a metal is combined with one or more nonmetals, the compound is usually ionic. This guideline works well for predicting ionic compound formation for most of the compounds. However, it is not always true (for example, aluminum chloride, \(\text{"{AlCl}"}_3\), is not ionic).</li>
				<li>Ionic compounds are solids that typically melt at high temperatures and boil at even higher temperatures.</li>
				<li>In solid form, an ionic compound is not electrically conductive because its ions are unable to flow ("electricity" is the flow of charged particles). When molten, however, it can conduct electricity because its ions are able to move freely through the liquid.</li>
				<li>The gemstone sapphire is mostly a compound of aluminum and oxygen that contains aluminum cations, \({"\\text{Al}^{3+}"}\), and oxygen anions, \({"\\text{O}^{2-}"}\). The formula is \({"\\text{Al}_2\\text{O}_3"}\).</li>
				<li>Many ionic compounds contain polyatomic ions as the cation, the anion, or both. As with simple ionic compounds, these compounds must also be electrically neutral, so their formulas can be predicted by treating the polyatomic ions as discrete units.</li>
				<li>We use parentheses in a formula to indicate a group of atoms that behave as a unit. For example, the formula for calcium phosphate, one of the minerals in our bones, is \({"\\text{Ca}_3(\\text{PO}_4)_2"}\). This formula indicates that there are three calcium ions \({"(\\text{Ca}^{2+})"}\) for every two phosphate \({"({\\text{PO}_4}^{3-})"}\) groups.</li>
			</SubList></li>
			<li>Molecular Compounds:<SubList>
				<li>Many compounds do not contain ions but instead consist solely of discrete, neutral molecules. These <b>molecular compounds</b> (<b>covalent compounds</b>) result when atoms share, rather than transfer (gain or lose), electrons.</li>
				<li>Under normal conditions, molecular compounds often exist as gases, low-boiling liquids, and low-melting solids, although many important exceptions exist. Covalent compounds are usually formed by a combination of nonmetals.</li>
			</SubList></li>
		</ul>
		<h3>Chemical Nomenclature</h3>
		<ul>
			<li><b>Nomenclature:</b> a collection of rules for naming things.</li>
			<li>Compounds Containing Only Monatomic Ions:<SubList>
				<li>The name of a binary compound containing monatomic ions consists of the name of the cation (the name of the metal) followed by the name of the anion (the name of the nonmetallic element with its ending replaced by the suffix <i>-ide</i>).</li>
				<TableLI>
					<tbody>
						<tr><td>NaCl</td><td>sodium chloride</td></tr>
						<tr><td>KBr</td><td>potassium bromide</td></tr>
						<tr><td>CaI<sub>2</sub></td><td>calcium iodide</td></tr>
						<tr><td>Mg<sub>3</sub>N<sub>2</sub></td><td>magnesium nitride</td></tr>
						<tr><td>Al<sub>4</sub>C<sub>3</sub></td><td>aluminum carbide</td></tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Compounds Containing Polyatomic Ions:<SubList>
				<li>First name the cation and then the anion.</li>
				<TableLI>
					<tbody>
						<tr><td>NH<sub>4</sub>Cl</td><td>ammonium chloride</td></tr>
						<tr><td>Ca<sub>S</sub>O<sub>4</sub></td><td>calcium sulfate</td></tr>
						<tr><td>Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></td><td>magnesium phosphate</td></tr>
						<tr><td>Al<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub></td><td>aluminum carbonate</td></tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Compounds Containing a Metal Ion with a Variable Charge:<SubList>
				<li>Most of the transition metals and some main group metals can form two or more cations with different charges.</li>
				<li>Compounds of these metals with nonmetals are named with the same method as compounds in the first category, except the charge of the metal ion is specified by a Roman numeral in parentheses after the name of the metal.</li>
				<TableLI>
					<tbody>
						<tr><td>FeCl<sub>2</sub></td><td>iron(II) chloride</td></tr>
						<tr><td>FeCl<sub>3</sub></td><td>iron(III) chloride</td></tr>
						<tr><td>Hg<sub>2</sub>O</td><td>mercury(I) oxide</td></tr>
						<tr><td>HgO</td><td>mercury(II) oxide</td></tr>
						<tr><td>SnF<sub>2</sub></td><td>tin(II) fluoride</td></tr>
						<tr><td>SnF<sub>4</sub></td><td>tin(IV) fluoride</td></tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Ionic Hydrates:<SubList>
				<li>Ionic compounds that contain water molecules as integral components of their crystals are called <b>hydrates</b>.</li>
				<li>The name for an ionic hydrate is derived by adding a term to the name for the anhydrous (meaning "not hydrated") compound that indicates the number of water molecules associated with each formula unit of the compound. The added word begins with a Greek prefix denoting the number of water molecules and ends with "hydrate".</li>
				<li><ImgComp src={require("./chemistryPics/14.png")} style={{width:"80%"}}/></li>
			</SubList></li>
			<li>Compounds Composed of Two Elements:<SubList>
				<li>When two nonmetallic elements form a molecular compound, several combination ratios are often possible. For example, carbon and oxygen can form the compounds CO and CO<sub>2</sub>.</li>
				<li>To deal with this situation, we use a naming method that is somewhat similar to that used for ionic compounds, but with added prefixes to specify the numbers of atoms of each element.</li>
				<li>The name of the more metallic element (the one farther to the left and/or bottom of the periodic table) is first, followed by the name of the more nonmetallic element (the one farther to the right and/or top) with its ending changed to the suffix <i>-ide</i>. The numbers of atoms of each element are designated by the Greek prefixes.</li>
				<TableLI>
					<tbody>
						<tr><td>SO<sub>2</sub></td><td>sulfur dioxide</td></tr>
						<tr><td>BCl<sub>3</sub></td><td>boron trichloride</td></tr>
						<tr><td>SO<sub>3</sub></td><td>sulfur trioxide</td></tr>
						<tr><td>SF<sub>6</sub></td><td>sulfur hexafluoride</td></tr>
						<tr><td>N<sub>2</sub>O<sub>4</sub></td><td>dinitrogen tetroxide</td></tr>
						<tr><td>P<sub>4</sub>O<sub>10</sub></td><td>tetraphosphorus decaoxide</td></tr>
					</tbody>
				</TableLI>
				<li>Although NO is often called <b>nitric oxide</b>, its proper name is nitrogen monoxide. Similarly, N<sub>2</sub>O is known as <b>nitrous oxide</b> even though our rules would specify the name dinitrogen monoxide.</li>
			</SubList></li>
			<li>Binary Acids:<SubList>
				<li>Some compounds containing hydrogen are members of an important class of substances known as <b>acids</b>.</li>
				<li>A mixture of water with an acid is given a name derived from the compound's name. If the compound is a <b>binary acid</b> (comprised of hydrogen and one other nonmetallic element):<SubList opened>
					<li>The word "hydrogen" is changed to the prefix <i>hydro-</i></li>
					<li>The other nonmetallic element name is modified by adding the suffix <i>-ic</i></li>
					<li>The word "acid" is added as a second word</li>
				</SubList></li>
				<TableLI><thead>
					<tr>
					<th scope="col">Name of Gas</th>
					<th scope="col">Name of Acid</th>
					</tr>
					</thead><tbody>
					<tr>
					<td>HF (<i>g</i>), hydrogen fluoride</td>
					<td>HF (<i>aq</i>), hydrofluoric acid</td>
					</tr>
					<tr>
					<td>HCl (<i>g</i>), hydrogen chloride</td>
					<td>HCl (<i>aq</i>), hydrochloric acid</td>
					</tr>
					<tr>
					<td>HBr (<i>g</i>), hydrogen bromide</td>
					<td>HBr (<i>aq</i>), hydrobromic acid</td>
					</tr>
					<tr>
					<td>HI (<i>g</i>), hydrogen iodide</td>
					<td>HI (<i>aq</i>), hydroiodic acid</td>
					</tr>
					<tr>
					<td>H<sub>2</sub>S (<i>g</i>), hydrogen sulfide</td>
					<td>H<sub>2</sub>S (<i>aq</i>), hydrosulfuric acid</td>
					</tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Oxyacids:<SubList>
				<li><b>Oxyacids:</b> compounds that contain hydrogen, oxygen, and at least one other element, and are bonded in such a way as to impart acidic properties to the compound.</li>
				<li>Typical oxyacids consist of hydrogen combined with a polyatomic, oxygen-containing ion.</li>
				<li>To name oxyacids:<SubList opened>
					<li>Omit "hydrogen"</li>
					<li>Start with the root name of the anion</li>
					<li>Replace <i>-ate</i> with <i>-ic</i>, or <i>-ite</i> with <i>-ous</i></li>
					<li>Add "acid"</li>
				</SubList></li>
				<TableLI><thead>
					<tr>
					<th scope="col">Formula</th>
					<th scope="col">Anion Name</th>
					<th scope="col">Acid Name</th>
					</tr>
					</thead><tbody>
					<tr>
					<td>HC<sub>2</sub>H<sub>3</sub>O<sub>2</sub></td>
					<td>acetate</td>
					<td>acetic acid</td>
					</tr>
					<tr>
					<td>HNO<sub>3</sub></td>
					<td>nitrate</td>
					<td>nitric acid</td>
					</tr>
					<tr>
					<td>HNO<sub>2</sub></td>
					<td>nitrite</td>
					<td>nitrous acid</td>
					</tr>
					<tr>
					<td>HClO<sub>4</sub></td>
					<td>perchlorate</td>
					<td>perchloric acid</td>
					</tr>
					<tr>
					<td>H<sub>2</sub>CO<sub>3</sub></td>
					<td>carbonate</td>
					<td>carbonic acid</td>
					</tr>
					<tr>
					<td>H<sub>2</sub>SO<sub>4</sub></td>
					<td>sulfate</td>
					<td>sulfuric acid</td>
					</tr>
					<tr>
					<td>H<sub>2</sub>SO<sub>3</sub></td>
					<td>sulfite</td>
					<td>sulfurous acid</td>
					</tr>
					<tr>
					<td>H<sub>3</sub>PO<sub>4</sub></td>
					<td>phosphate</td>
					<td>phosphoric acid</td>
					</tr>
					</tbody>
				</TableLI>
			</SubList></li>
		</ul>
	</div>
</div>

<h2>Composition of Substances and Solutions</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}} data-source={56}>
		<ul>
			<li>Formula Mass for covalent substances:<SubList>
				<li>For <b>covalent substances</b>, the formula represents the numbers and types of atoms composing a single molecule of the substance; therefore, the formula mass may be correctly referred to as a molecular mass. Consider chloroform (CHCl<sub>3</sub>), the average molecular mass of a chloroform molecule is therefore equal to the sum of the average atomic masses of these atoms.</li>
				<li><ImgComp src={require("./chemistryPics/15.png")} style={{width:"80%"}}/></li>
				<li>Likewise, the molecular mass of an aspirin molecule, C<sub>9</sub>H<sub>8</sub>O<sub>4</sub>, is the sum of the atomic masses of nine carbon atoms, eight hydrogen atoms, and four oxygen atoms, which amounts to 180.15 amu.</li>
			</SubList></li>
			<li>Formula mass for ionic compounds:<SubList>
				<li>The formula mass for an <b>ionic compound</b> is calculated in the same way as the formula mass for covalent compounds: by summing the average atomic masses of all the atoms in the compound's formula.</li>
				<li className="research">Keep in mind, however, that the formula for an ionic compound does not represent the composition of a discrete molecule, so it may not correctly be referred to as the "molecular mass".</li>
				<li>Sodium chloride is an ionic compound composed of sodium cations, Na+, and chloride anions, Cl-, combined in a 1:1 ratio. The formula mass for this compound is computed as (22.99 + 35.45 =) 58.44 amu.</li>
				<li>Note that the average masses of neutral sodium and chlorine atoms were used in this computation, rather than the masses for sodium cations and chlorine anions. This approach is perfectly acceptable when computing the formula mass of an ionic compound.</li>
				<li>Even though a sodium cation has a slightly smaller mass than a sodium atom (since it is missing an electron), this difference will be offset by the fact that a chloride anion is slightly more massive than a chloride atom (due to the extra electron).</li>
				<li>Even when calculating the mass of an isolated ion, the missing or additional electrons can generally be ignored, since their contribution to the overall mass is negligible.</li>
				<li>The few exceptions to this guideline are very light ions derived from elements with precisely known atomic masses.</li>
			</SubList></li>
			<li><b>The Mole:</b><SubList>
				<li>The <b>mole</b> is an amount unit similar to familiar units like pair, dozen, gross, etc. It provides a specific measure of the number of atoms or molecules in a sample of matter.</li>
				<li>A mole of substance is that amount in which there are \(6.02214076 * 10^23\) discrete entities (atoms or molecules). This is a fundamental constant known as <b>Avogadro's number</b> (N<sub>A</sub>).</li>
				<li>The <b>molar mass</b> of an element (or compound) is the mass in grams of 1 mole of that substance, a property expressed in units of grams per mole (g/mol).</li>
				<li>Per the amu definition, a single <sup>12</sup>C atom weighs 12 amu (its atomic mass is 12 amu). A mole of <sup>12</sup>C weighs 12 g (its molar mass is 12 g/mol). This relationship holds for all elements, since their atomic masses are measured relative to that of the amu-reference substance, <sup>12</sup>C.</li>
				<li>While atomic mass and molar mass are numerically equivalent, keep in mind that they are vastly different in terms of scale.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}} data-source={56}>
		<ul>
			<li></li>
		</ul>
	</div>
</div>
</>