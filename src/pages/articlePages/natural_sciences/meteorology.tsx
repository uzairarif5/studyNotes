import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Meteorology Notes";
export const sourcesColor = {30:null};
export const content = <>
<h1>Meteorology Notes</h1>
<h2>Atmospheric Basics</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}}>
		<ul>
			<li><figure>
				<ImgComp src={"/articlePics/meteorology_pics/1.png"} style={{width:"70%"}}/>
				<figcaption>View from outer space of the sun rising over Earth, illuminating the atmosphere in a ring of blue.</figcaption>
			</figure></li>
			<li>Everything that happens on Earth is caused in some way by radiation from the sun. It provides radiant energy (also called radiation or solar insolation) by converting hydrogen into helium near its core.</li>
			<li><figure>
				<ImgComp src={"/articlePics/meteorology_pics/2.png"} style={{width:"70%"}}/>
				<figcaption>Pie chart showing the gases that make up Earth's atmosphere.</figcaption>
			</figure></li>
			<li>In warm, moist, tropical regions, water vapor can make up nearly 4% of the atmospheric composition, while in polar regions it can be just a tiny fraction of a percent.</li>
			<li>The process of water vapor changing phase to liquid is called <b>condensation</b>. When liquid water becomes a gaseous vapor, it is known as <b>evaporation</b>. When water becomes ice or ice becomes water, these processes are known as <b>freezing</b> and <b>melting</b>, respectively. When ice transitions directly to water vapor, the process is known as <b>sublimation</b>. The transition from water vapor to ice is known as <b>vapor deposition</b>.</li>
			<li>When it changes phase from vapor to liquid or ice, it releases enormous amounts of heat, called <b>latent heat</b>.</li>
			<li>Although the atmosphere extends vertically for hundreds of
				kilometers, almost 99% of it is within approximately 30 km of
				the Earth's surface.</li>
			<MathStuff>$$weight = mass * acceleration$$</MathStuff>
			<li><b>Mass</b> is the measure of how much matter exists in a given object
				or space.</li>
			<li>Air <b>density</b> (denoted by &rho;) is determined by the amount of mass (m) that exists
				in a given space, or volume (V).</li>
			<MathStuff>$$density = \frac{"{mass}{volume}"} $$</MathStuff>
			<li>Air density is highest near the
				surface of Earth and decreases with height, because there are
				more molecules held tightly together at the surface by gravity
				than there are above.</li>
			<li>The standard unit for density is kg*m<sup>-3</sup>. Atmospheric surface density is typically around 1.2
				kg·m<sup>-3</sup>. We call this value &rho;<sub>0</sub> because it is the initial value at
				the surface. The exponential equation below approximates the distribution of density with height.</li>
			<MathStuff>{`
				$$\\begin{align} &\\rho(z) = \\rho_{0}*exp(-z/H) \\\\& H = \\frac{R_d*T}{g} \\end{align}$$
				$$\\begin{align}
				z & \\text{: altitude}\\\\
				R_d & \\text{: the gas constant for dry air (287.053 } JK^{-1}kg^{-1} \text{)}\\\\
				T & \\text{: temperature}\\\\
				g & \\text{: acceleration due to gravity}
				\\end{align}$$
			`}</MathStuff>
			<li>The equations are good approximations. They all involve
				assumptions of some kind, in this case, the
				primary issue is the assumption that temperature is
				constant throughout the atmosphere.</li>
			<li>Air <b>pressure</b>
				refers to the total force that air exerts against a given area of an
				object. The standard
				unit for pressure is in Newtons per square meter - or Pascals
				(Pa), which are defined as 1 N&middot;m<sup>-2</sup>.</li>
			<MathStuff>$$ Pressure = \frac{"{Force}{Area}"} $$</MathStuff>
			<li>Atmospheric surface pressure is typically around 1013
				hPa. We call this value P<sub>0</sub> because it is the initial value at
				the surface.</li>
			<MathStuff>{`
				$$\\begin{align} &P(z) = P_{0}*exp(-z/H) \\& H = \\frac{R_d*T}{g} \\end{align}$$
				$$\\begin{align}
				z & \\text{: altitude}\\\\
				R_d & \\text{: the gas constant for dry air (287.053 } JK^{-1}kg^{-1} \\text{)}\\\\
				T & \\text{: temperature}\\\\
				g & \\text{: acceleration due to gravity}
				\\end{align}$$
			`}</MathStuff>
			<li>The <b>Kelvin</b> scale (K) is almost always used as a temperature unit
				in scientific equations and is convenient in that it contains no
				negative numbers. The Kelvin scale begins at 0 K, or absolute
				zero, where atoms and molecules would theoretically be
				thermally motionless. A difference in 1 K is the same as a
				difference of 1°C, so a conversion is linear and simple: \(K = C + 273.15\).</li>
			<li>For dry air (no water vapor present), the <b>ideal gas law</b> is: \(P = \rho * R_d * T\).</li>
			<li><b>Hydrostatic balance:</b> The word hydro
				means water or fluid, and static means stationary, so the name
				can be interpreted as a stationary fluid balance. This balance
				holds true for most situations in the atmosphere. The hydrostatic
				equation is given by:</li>
			<MathStuff>$$\frac{"{\\Delta P}{\\Delta z}"} = -\rho*|g|$$</MathStuff>
			<li>The negative sign here is due to the fact that pressure is
				decreasing as height increases so the left-hand side will be
				negative.</li>
			<li>If you plan to use the above equation to calculate changes in
				altitude (Δz) with changes in pressure (ΔP) or vise versa, note
				that the above equation applies best over small changes.</li>
			<li>The atmospheric <b>thickness</b> varies depending on the average temperature in the layer. Warmer air is spaced out more, so a warmer layer of air will be thicker, while a cooler layer of air will be thinner. By knowing the average temperature of the layer, and the top and bottom pressure levels, you can calculate the thickness of the atmospheric layer.</li>
			<li>The hypsometric equation allows you to calculate the thickness (z<sub>2</sub> - z<sub>1</sub>) between two pressure levels, P<sub>2</sub> and P<sub>1</sub>. The z<sub>2</sub> and z<sub>1</sub> values are the heights at pressure levels P<sub>2</sub> and P<sub>1</sub>, respectively.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/3.PNG"} style={{width:"60%"}}/></li>
			<li><b>Virtual temperature</b> (T<sub>v</sub>) is defined as: \(T_v = T*[1+(0.61*r)]\), where the mixing ratio (r) is the mass of water vapor per mass of
				dry air and uses units of kilograms of water vapor per kilograms
				of dry air (kg·kg<sup>-1</sup>).</li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}}>
		<h3>Layers of the Atmosphere</h3>
		<ul>
			<li>We can define layers
				by how the air temperature varies with height, by the gas
				composition, and even by the electrical properties of each layer.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/4.png"} style={{width:"90%"}}/></li>
			<li><b>Troposphere:</b> All of the every day weather that we experience on Earth
				happens within the troposphere, which is characterized by
				frequent rising and sinking vertical air motions. The troposphere
				gets its name from the root word “tropo” in Greek, which means
				turning.</li>
			<li>At the top of the troposphere, the air temperature stops
				decreasing with height in a region known as the tropopause,
				which separates the troposphere and the stratosphere above. The
				height of the tropopause varies depending on the season and
				location. In warmer areas near the equator, the tropopause tends
				to be higher (around 17 km), while in colder polar regions the
				tropopause is lower (around 9 km) because warm layers of air
				are thicker than layers of cold air. For the same reason, the tropopause is found at higher elevations in the summer, and at lower elevations in the winter.</li>
			<li>The <b>atmospheric boundary layer (ABL)</b> is located within the lowest 0.3 to 3 km of the troposphere. The boundary layer experiences the greatest amount of turbulence in the atmosphere and is most affected by the diurnal (day-night) heating cycle.</li>
			<li>In the <b>stratosphere</b>, the air temperature increases with height, causing a temperature inversion. The temperature of the stratosphere increases with height because of the presence of a gas called <b>ozone</b> (O3), which heats the air through the absorption of ultraviolet (UV) radiation from the sun.</li>
			<li>The root word "strato" means layered, or spreading out, which is a good way to describe the many layers of the stratosphere.</li>
			<li>The boundary known as the <b>stratopause</b> separates the stratosphere below from the mesosphere above.</li>
			<li>In the <b>mesosphere</b>, the air temperature once again decreases with height and the air is extremely thin with a low density. The average atmospheric pressure in this layer is about 1 mb, which means that about 99.9% of all air molecules are located below this level and only about one thousandth of the atmospheric mass is located above. The reason that temperatures decrease with height in the mesosphere is due partially to the fact that there is not a lot of ozone to absorb UV radiation.</li>
			<li>The <b>mesopause</b> separates the mesosphere from the thermosphere above.</li>
			<li>In the <b>thermosphere</b>, the air density is extremely low so even a small amount of radiation absorption can lead to a large increase in temperature. Molecules can travel for entire kilometers without colliding into another molecule. This is the layer where auroras occur as a result of interactions between charged solar particles and air molecules.</li>
			<li>At the top of the thermosphere, at above 500 km above the Earth's surface, molecules can actually escape the gravitational pull of the Earth. This region is known as the <b>exosphere</b>, and represents the upper limit of the atmosphere.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/5.jpg"} style={{width:"80%"}}/></li>
		</ul>
		<h3>Weather and Climate</h3>
		<ul>
			<li><b>Weather</b> refers to the present condition of the atmosphere at any given time and place. This includes the following elements:<SubList>
				<li><b>Air Temperature:</b> how hot or cold the air is.</li>
				<li><b>Air Pressure:</b> the force the air exerts on the surface.</li>
				<li><b>Humidity:</b> the amount of water vapor present in the air.</li>
				<li><b>Clouds:</b> masses of water droplets and/or ice crystals that obscure parts of the sky.</li>
				<li><b>Precipitation:</b> water (solid or liquid) that falls from clouds and reaches the ground</li>
				<li><b>Visibility:</b> the maximum horizontal distance that can be seen. This can be affected by the presence of fog or precipitation.</li>
				<li><b>Wind:</b> the horizontal flow of air, caused by local differences in air pressure.</li>
			</SubList></li>
			<li><b>Climate</b> represents the average range of weather events in a region over a long period of time including weather extremes such as heat waves or cold spells, as well as the frequency of these events.</li>
		</ul>
		<h3>Meteorological Conventions</h3>
		<ul>
			<li><b>Cartesian coordinates:</b> x, y, and z and velocity: u, v, and w.</li>
			<li><b>Wind in Cartesian coordinates:</b> (U, V)</li>
			<li>Algebraically, wind is given a magnitude (wind speed) and a direction. Wind direction is split up into different components.</li>
			<TableLI><tbody>
				<tr><td>U</td><td>Wind in the x-direction</td></tr>
				<tr><td>V</td><td>Wind in the y-direction</td></tr>
				<tr><td>W</td><td>Wind in the z-direction (vertical air motion)</td></tr>
			</tbody></TableLI>
			<li><b>Polar coordinates:</b> direction and magnitude.</li>
			<li><b>Wind in Polar coordinates:</b> (α, M)</li>
			<li>Wind directions are given by angle, with 0° to the north, and degrees increasing clockwise. Winds are described using the direction from which they come.</li>
			<li>Sometimes, cylindrical coordinates (M, α, W) are used which are similar to polar coordinates in that magnitude and direction of wind velocity are used, but also include the vertical motion component W.</li>
		</ul>
		<h3>Cartography</h3>
		<ul>
			<li><b>Meridians</b>, which are north-south lines on a globe, are given by degrees longitude. The <b>prime meridian</b> lies at 0° longitude, and passes through Greenwich, Great Britain.
				East of here (defined as the Eastern Hemisphere, 0 - 180 °E), longitude is positive.
				West of the prime meridian (Western Hemisphere, 0 - 180 °W), longitude is negative.
				The Earth rotates counterclockwise about its axis.</li>
			<li><b>Parallels</b>, which are east-west lines on a globe, are given by degrees latitude. The Equator is 0° latitude, with latitudes north of the Equator as positive (Northern Hemisphere: 0 - 90°N), and latitudes south of the Equator are negative (Southern Hemisphere: 0 - -90°S).</li>
		</ul>
	</div>
</div>

<h2 id="solarAndInfraredRadiation">Solar and Infrared Radiation</h2>
<div className="content">
	<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
		<h3>Radiation</h3>
		<ul>
			<li><b>Radiation</b> can be thought of in two ways: <b>electromagnetic waves</b> or as <b>photons</b>.</li>
			<li><b>Electromagnetic radiation</b> is a type of energy produced by electric and magnetic fields, taking a variety of names depending on the wavelength. Colder objects radiate at lower frequencies and longer wavelengths, and warmer objects radiate at higher frequency and shorter wavelengths.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/6.png"} style={{width:"90%"}}/></li>
		</ul>
		<h3>Wave Propagation</h3>
		<ul>
			<li>All electromagnetic waves travel at the <i>speed of light</i> (c<sub>0</sub>, approximately 3 X 10<sup>8</sup> m·s<sup>-1</sup>). The waves have a <b>wavelength (λ)</b> given by the distance from one wave crest to the next. The waves also have a <b>frequency (v)</b>, which is the number of repeated wave occurrences in a specified period of time. <b>Circular frequency</b> is defined as ω (radians·s<sup>-1</sup>) = 2π·v.</li>
			<MathStuff>
				$$Wavelength * Frequency = Speed\ Of\ Light$$
				$$λ*v=c_0$$
			</MathStuff>
		</ul>
		<h3>Characterizing Emission</h3>
		<ul>
			<li>A <b>blackbody</b> is an object that emits and absorbs the maximum amount of radiation possible given its temperature.</li>
			<li><b>Planck's curves</b> are used to show the amount of emitted radiation and primary wavelengths of electromagnetic energy that a black body emits given its temperature.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/7.png"} style={{width:"70%"}}/></li>
			<li><b>Wien's Law</b> states that the shorter the wavelength emitted, the hotter (more kinetic energy) the object is. In Wien's equation, sometimes the numerator is given as "a", a constant equal to 2897.</li>
			<MathStuff>$$Maximum \ Wavelength = \frac{"{a}{Temperature}"}$$</MathStuff>
			<li>Using Wein's equation to find wavelength gives an answer in microns, µm (10<sup>-6</sup> meters).</li>
			<li>The <b>Stefan-Boltzmann Law</b> relates the total radiation emitted (total emitted power per area) to the area under Planck's curve. This can be used to show that the hotter the object, the more energy it radiates per unit area.</li>
			<MathStuff>$$Emission = \frac{"{Power}{Area}"} = \sigma * Temperature^4$$</MathStuff>
			<li>The <b>Stefan-Boltzmann constant (σ)</b> is 5.67 X 10<sup>-8</sup> W·m<sup>-2</sup>·K<sup>-4</sup></li>
		</ul>
		<h3>Application to the Earth-Sun System</h3>
		<ul>
			<li>The Sun's average temperature is above 5,000 K while the Earth's average temperature is in the range 210-310 K. This means that the Sun and Earth radiate energy very differently.</li>
			<li>The Sun emits <b>solar radiation</b>, also known as <i>ultraviolet radiation</i> or <i>shortwave radiation</i>. The Earth emits <i>infrared radiation</i> or <i>longwave radiation</i>. The Sun emits radiation at a shorter wavelength than the Earth because it has a higher temperature, and Planck's curve for higher temperatures peaks at shorter wavelengths.</li>
		</ul>
		<h3>Albedo</h3>
		<ul>
			<li><b>Albedo (α)</b> as the ratio of the amount of radiation reflected from an object to the amount of radiation received by an object.</li>
			<MathStuff>$$α=\frac{"{reflected}{incident}"}$$</MathStuff>
			<li>The simplest way to think of albedo is based on the color of the object. Objects that are white colored are highly reflective and have a high albedo.</li>
			<li>Note that radiation reflected from an object does not warm the object.</li>
		</ul>
	</div>
	<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
		<h3>Surface Energy Balance</h3>
		<ul>
			<li>Arguably the most important aspect to consider about the Earth-Sun system is the energy balance. In <b>steady-state</b>, the amount of incoming energy should equal the amount of outgoing energy.</li>
			<li>The <b>solar constant (S)</b> is approximately equal to 1361 W·m<sup>-2</sup>. This value is a rough estimate of the amount of energy per area received by the Earth from the Sun, but it is not exact. We call it a solar "constant" but it can be slightly lower or higher at times. Radiation emitted from a spherical source, like the sun, decreases by the square of the distance from the sphere's center. This is called the <b>inverse square law</b>.</li>
			<li>Incoming solar radiation is called shortwave radiation and is in the ultraviolet and visible portions of the electromagnetic spectrum because of the emission temperature of the Sun. When solar radiation interacts with the Earth, it is partially absorbed by the Earth's surface, and partially reflected, depending on the albedo of the surface.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/8.png"} style={{width:"90%"}}/></li>
			<li> Earth emits radiation too. However, it is at a lower intensity and a much longer wavelength, which is called the <i>infrared portion of the electromagnetic spectrum</i> because of the lower emission temperature of the Earth.</li>
		</ul>
		<h3>Radiation Interaction with the Atmosphere</h3>
		<ul>
			<li><b>Greenhouse gases</b> are gases in the Earth's atmosphere that can absorb and emit radiation, primarily infrared radiation.</li>
			<li><figure>
				<ImgComp src={"/articlePics/meteorology_pics/9.png"} style={{width:"90%"}}/>
				<figcaption>Radiation transmitted by the atmosphere as a function of wavelength. Downgoing solar radiation is on the left, and upgoing thermal radiation is on the right, with the percentage of radiation absorbed and scattered by the Earth's atmosphere below. Finally, the percentage of radiation absorbed and scattered is then divided by the major greenhouse gases in the panels at the bottom.</figcaption>
			</figure></li>
			<li>In the panel of the figure above showing the total percentage of radiation that is absorbed by the Earth's atmosphere, you'll notice white gaps. These are called <b>Atmospheric Windows</b> where the wavelength of radiation is able to pass through the atmosphere without interaction with greenhouse gases.</li>
			<li>The <b>greenhouse effect</b> is the result of greenhouse gases absorbing and emitting outgoing infrared radiation emitted from Earth's surface. Because Earth's outgoing longwave radiation is partially absorbed by the atmosphere, this has a warming effect on Earth's surface making it warmer than it would be otherwise.</li>
		</ul>
		<h3>Radiation Changes with Time</h3>
		<ul>
			<li><b>Eccentricity</b> is the circularity of a planetary orbit. For example, a circle has zero eccentricity.</li>
			<li><b>Obliquity</b> is the degree of tilt in the axis of rotation.</li>
			<li><b>Precession</b> is the wobble in the rotational axis of a planet that slowly traces out a cone.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/10.gif"} style={{width:"60%"}}/></li>
			<li>While it is true that Earth's orbit is not spherical, and it is closer to the Sun during Northern Hemisphere winter, the distance from Earth to the Sun is not the cause of seasons.<SubList>
				<li><ImgComp src={"/articlePics/meteorology_pics/11.jpg"} style={{width:"70%"}}/></li>
			</SubList></li>
			<li><figure>
				<ImgComp src={"/articlePics/meteorology_pics/12.png"} style={{width:"70%"}}/>
				<figcaption>The amount of radiative energy (y-axis, in W m-2) as a function of time (x-axis, in hours). Yellow shows net warming and blue shows net cooling. The temperature is coolest at sunrise, warms during the day and reaches its maximum temperature in the late afternoon.</figcaption>
			</figure></li>
		</ul>
	</div>
</div>
<h2>Thermodynamics</h2>
<div className="content">
	<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
		<h3>Energy Transfer</h3>
		<ul>
			<li><b>Energy</b> can be defined as the ability to do <b>work</b>. When you apply a force on an object, it is said that work is done on the object if that object is displaced, meaning it moves from its original location.</li>
			<MathStuff>$$Work = Force * displacement$$ $$W = F*\Delta d$$</MathStuff>
			<li>Internal energy is the total amount of energy stored in any object and determines how much work the object is capable of performing. This includes both <b>kinetic energy</b> (energy that an object has when it is in motion) and <b>potential energy</b> (energy that is stored). The potential energy (PE) due to gravitational pull is given by the following equation:</li>
			<MathStuff>{`
				$$PE = m*g*h$$
				$$\\begin{align}
				\\text{m: } & \\text{mass}\\\\
				\\text{g: } & \\text{gravity}\\\\
				\\text{h: } & \\text{height above ground}\\\\
				\\end{align}$$
			`}</MathStuff>
			<li>Anything that moves contains kinetic energy (KE).</li>
			<MathStuff>$$KE = \frac{"{1}{2}"}m*v^2$$</MathStuff>
			<li><b>First law of thermodynamics:</b> Energy cannot be created or destroyed.</li>
			<li>One important example of kinetic energy is <b>thermal energy</b>, which comes from the tiny movement of many molecules in a system.</li>
			<li>The transfer of thermal energy due to the temperature difference between two objects is what is known as <b>heat</b>.</li>
			<li><b>Conduction:</b> energy directly transferred through a substance without the movement of material.</li>
			<li><b>Convection</b> refers to movement within a fluid due to the tendency of lower density fluid to rise over higher density fluid, which sinks due to the force of gravity resulting in heat transfer within the fluid.</li>
			<li>When it comes to the atmosphere, the most important form of energy is the energy we get from the Sun, which is called <b>radiant energy</b> or <i>radiation</i>. Radiant energy can be transferred to an object without the space in between being heated.</li>
			<li>When heat is added to an ice cube, the temperature of the ice will increase until it reaches its melting point (0°C). After this point, any further addition of heat will cause the ice to melt to liquid water, but the temperature of the ice-water system will not change until the phase change is complete. The heat that is absorbed by the ice-water system from the environment in order for the phase change to occur is known as <b>latent heat</b>.</li>
			<li>Processes that take heat from the environment (melting, evaporation, sublimation) are considered <b>cooling processes</b>. On the other hand, processes that add heat to the environment (condensation, freezing, deposition) are <b>warming processes</b> because during the phase change energy is released.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/13.png"} style={{width:"70%"}}/></li>
			<li><figure>
				<ImgComp src={"/articlePics/meteorology_pics/14.png"} style={{width:"80%"}}/>
				<figcaption>The y-axis of this figure shows the state of water at different temperatures. The x-axis shows the amount of energy applied to the water. When water reaches 0°C and 100°C, the melting/freezing and boiling points of water, respectively, the temperature stops increasing while energy is still being applied. Instead of increasing the water's temperature, this energy is instead going into the processes of melting and evaporation. From here, you can see that the latent heat of vaporization is much greater than the latent heat of melting.</figcaption>
			</figure></li>
			<li><b>Specific heat</b> or <i>heat capacity</i> (C) is the term for the amount of heat required to raise the temperature of a substance by a certain amount. Typically this is defined at a constant pressure or a constant volume.</li>
		</ul>
		<h3>Frameworks for Understanding the Atmosphere</h3>
		<ul>
			<li>An <b>Eulerian framework</b> is a fixed framework, relative to a single point on the Earth's surface. When a weather forecast is done for a given location on Earth or when you look at a dataset from one weather station, you are viewing the atmosphere from an Eulerian perspective — that is, how the wind and air travels past a fixed point.</li>
			<li>Another framework is <b>Lagrangian</b>, which is a framework that is constantly moving and travels with the air. When we are looking at motions within the atmosphere, such as rising or sinking air, it is useful to use this framework as a way to see how properties within the rising plume of air are changing.</li>
			<li>Many times it is useful to think about a mass of air (called <b>"air parcel"</b>) instead of individual molecules. An air parcel is often thought of as an amorphous bubble or blob of air, roughly the scale of a party balloon or a hot air balloon that contains uniform properties (temperature, density, pressure) throughout.</li>
		</ul>
	</div>
	<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
		<h3>Defining Changes in the Atmosphere</h3>
		<ul>
			<li>In order to study changes in temperature, momentum, and moisture in an air parcel, a Lagrangian framework is always used.  With a Lagrangian framework, we can see changes from the parcel's perspective as it moves.</li>
			<li>Temperature inside the air parcel is conserved unless heat is transferred to or from the environment, or if it loses or gains heat by rising or sinking, which will cause it to expand or contract, respectively.</li>
			<li><ImgComp src={"/articlePics/meteorology_pics/15.png"} style={{width: "50%"}}/></li>
			<li>The atmospheric <b>lapse rate</b>, Γ, denoted by an upper-case gamma, is defined as the reduction in temperature with altitude. A positive lapse rate means that the air temperature is decreasing with height.</li>
			<MathStuff>$$\Gamma = -\frac{"{T_2-T_1}{z_2-z_2}"}$$</MathStuff>
			<li>An <b>Adiabatic process</b> just means that there is no heat transfer taking place (∆q = 0) during the process.</li>
			<li>An air parcel expands adiabatically as it rises is due to the fact that the environmental air pressure decreases with height.</li>
			<li><a href="https://en.wikipedia.org/w/index.php?title=Potential_temperature&oldid=1164128486">The <b>potential temperature</b> of a parcel at pressure \(P\) is the temperature that the parcel would attain if adiabatically brought to a standard reference pressure \(P_0\), usually 1,000 hPa (1,000 mb).</a></li>
			<li>The potential temperature, θ, completely ignores the temperature change of the parcel due to it having done work or been worked on (expanding or contracting).</li>
			<MathStuff>{`
				$$\\theta = T * \\left( \\frac{P_0}{P} \\right) ^{R/C_p}$$
				$$\\begin{align}
				\\text{P}_\\text{0}\\text{: } & \\text{reference pressue}\\\\
				\\text{R: } & \text{gas constant of air}\\\\
				\\text{C}_\\text{p}\\text{: } & \\text{specific heat capacity at a constant pressure}\\\\
				\\end{align}$$
			`}</MathStuff>
		</ul>
		<h3>Introduction to Thermodynamic Diagrams</h3>
		<ul>
			<li>Parcels that are warmer than their environment will tend to rise due to lower density, and the change of the parcel's temperature with height can be anticipated based on the parcel's moisture content.</li>
			<li><figure>
				<ImgComp src={"/articlePics/meteorology_pics/16.png"} style={{width:"60%"}}/>
				<figcaption>Horizontal lines show isobars, lines of constant pressure; vertical lines show isotherms, lines of constant temperature; and orange lines show dry adiabats, lines of constant potential temperature.</figcaption>
			</figure></li>
		</ul>
		<h3>Heat Budget at Earth's Surface</h3>
		<ul>
			<li><b>Earth's heat budget</b> could be defined by the incoming shortwave radiation (K↓), reflected shortwave radiation (K↑), longwave radiation emitted by the Earth (I↑), and the downwelling longwave radiation emitted from the atmosphere (I↓) received by the Earth's surface.</li>
			<MathStuff>$$F^*=K \uparrow +K\downarrow+I\uparrow+I\downarrow$$</MathStuff>
			<li><b>Heat flux</b> is the rate of heat transfer through a surface over time. The units of heat flux can be given as J·m<sup>-2</sup>·s<sup>-1</sup>, or W·m<sup>-2</sup>, because W = J·s<sup>-1</sup>. It is heat moving through an area over time.</li>
			<li>Fluxes are defined as positive for heat moving upward:<SubList>
				<li>F* = the net radiation between the surface and atmosphere.</li>
				<li>F<sub>H</sub> = effective surface turbulent heat flux (sensible heat flux, SH). <a href='https://www.daikinuae.com/en_us/faq/what-is-the-difference-between-sensible-and-latent-heat-1.html'>Heat that causes a change in temperature in an object is called sensible heat.</a></li>
				<li>F<sub>E</sub> = effective surface latent heat flux, caused by evaporation or condensation (latent heat flux, LH).</li>
				<li>F<sub>G</sub> = molecular heat conduction to/from deeper below the surface, basically heat being conducted from nearby molecules.</li>
				<li>All of these fluxes have to balance (0 = F* + F<sub>H</sub> + F<sub>E</sub> - F<sub>G</sub>).</li>
			</SubList></li>
			<li>The <b>Bowen ratio</b> helps to distinguish various types of surfaces.</li>
			<MathStuff>$$ BR = \frac{"{F_H}{F_E}"}$$</MathStuff>
			<li>Moist surfaces have a small Bowen ratio because latent heating dominates over sensible heating while dry surfaces have a large Bowen ratio because sensible heating dominates over latent heating.</li>
		</ul>
	</div>

</div>
</>