import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Geology Notes";
export const sourcesColor = {31:null};
export const content = <>
<h1>Geology Notes</h1>
<h2 id="chpt3">Intrusive Igneous Rocks</h2>
<div className="content">
	<div style={{width: "49%",float: "left", marginLeft: "0.5%"}}>
		<ul>
			<li>A <b>rock</b> is a consolidated mixture of the same or different minerals. By <i>consolidated</i>, we mean hard and strong. A rock can be composed of only one type of mineral (e.g., limestone is commonly made up of only calcite), but most rocks are composed of several different minerals.</li>
			<li>Rocks are grouped into three main categories based on how they form:<SubList>
				<li><b>Igneous:</b> formed from the cooling and crystallization of magma (molten rock).</li>
				<li><b>Sedimentary:</b> formed when weathered fragments of other rocks are buried, compressed, and cemented together, or when minerals precipitate directly from solution.</li>
				<li><b>Metamorphic:</b> formed by alteration (due to heat, pressure, and/or chemical action) of a pre-existing igneous or sedimentary rock.</li>
			</SubList></li>
		</ul>
		<h3>The Rock Cycle</h3>
		<ul>
			<li>The rock cycle is driven by two forces: <b>Earth's internal heat engine</b>, which moves material around in the core and the mantle and leads to slow but significant changes within the crust, and <b>the hydrological cycle</b>, which is the movement of water, ice, and air at the surface, and is powered by the sun.</li>
			<li><ImgComp src={"/articlePics/geology_pics/8.png"} style={{width:"70%"}}/></li>
			<li>Magma can either cool slowly within the crust (over centuries to millions of years) - forming <b>intrusive igneous rock</b>, or erupt onto the surface and cool quickly (within seconds to years) - forming <b>extrusive igneous rock</b>.</li>
			<li>Through the various plate-tectonics-related processes of mountain building, all types of rocks are uplifted and exposed at the surface. Once exposed, they are weathered, both physically (by mechanical breaking of the rock) and chemically (by weathering of the minerals), and the weathering products - mostly small rock and mineral fragments - are eroded, transported, and then deposited as <b>sediments</b>.</li>
			<li>Unless they are re-eroded and moved along, sediments will eventually be buried by more sediments. At depths of hundreds of metres or more, they become compressed and cemented into <b>sedimentary rock</b>.</li>
			<li>Different kinds of rocks are either uplifted, to be re-eroded, or buried deeper within the crust where they are heated up, squeezed, and changed into <b>metamorphic rock</b>.</li>
		</ul>
		<h3>Magma and Magma Formation</h3>
		<ul>
			<li>Magmas can vary widely in composition, but in general they are made up of only eight elements; in order of importance: oxygen, silicon, aluminum, iron, calcium, sodium, magnesium, and potassium.</li>
			<li><ImgComp src={"/articlePics/geology_pics/9.png"} style={{width:"70%"}}/></li>
			<li>The composition of magma depends on the rock it was formed from (by melting), and the conditions of that melting. Magmas derived from the mantle have higher levels of iron, magnesium, and calcium, but they are still likely to be dominated by oxygen and silicon.</li>
			<li>All magmas have varying proportions of elements such as hydrogen, carbon, and sulphur, which are converted into gases like water vapour, carbon dioxide, and hydrogen sulphide as the magma cools.</li>
			<li>Virtually all of the igneous rocks that we see on Earth are derived from magmas that formed from partial melting of existing rock, either in the upper mantle or the crust.</li>
			<li>Most partial melting of real rock does not involve heating the rock up. The two main mechanisms through which rocks melt are <b>decompression melting</b> and <b>flux melting</b>:<SubList>
				<li>Decompression melting takes place within Earth when a body of rock is held at approximately the same temperature but the pressure is reduced. This happens because the rock is being moved toward the surface, either at a mantle plume (a.k.a., hot spot), or in the upwelling part of a mantle convection cell.</li>
				<li>If a rock that is hot enough to be close to its melting point is moved toward the surface, the pressure is reduced, and the rock can pass to the liquid side of its melting curve. At this point, partial melting starts to take place.</li>
				<li>If a rock is close to its melting point and some water (a flux that promotes melting) is added to the rock, the melting temperature is reduced (solid line versus dotted line), and partial melting starts.</li>
				<li><ImgComp src={"/articlePics/geology_pics/10.png"} style={{width: "90%"}}/></li>
			</SubList></li>
			<li>At both mantle plumes and in the upward parts of convection systems, rock is being moved toward the surface, the pressure is dropping, and at some point, the rock crosses to the liquid side of its melting curve. At subduction zones, water from the wet, subducting oceanic crust is transferred into the overlying hot mantle. This provides the flux needed to lower the melting temperature. In both of these cases, only partial melting takes place - typically only about 10% of the rock melts - and it is always the most silica-rich components of the rock that melt, creating a magma that is more silica-rich than the rock from which it is derived.</li>
			<li><ImgComp src={"/articlePics/geology_pics/11.png"} style={{width: "100%"}}/></li>
			<li>The magma produced, being less dense than the surrounding rock, moves up through the mantle, and eventually into the crust. This typically leads to partial melting of the surrounding rock because most such magmas are hotter than the melting temperature of crustal rock. In this case, melting is caused by an increase in temperature.</li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}}>
		<h3>Crystallization of Magma</h3>
		<ul>
			<li>The minerals that make up igneous rocks crystallize at a range of different temperatures. The sequence in which minerals crystallize from a magma is known as the <b>Bowen reaction series</b>:<SubList>
				<li>Of the common silicate minerals, olivine normally crystallizes first, at between 1200° and 1300°C. As the temperature drops, and assuming that some silica remains in the magma, the olivine crystals react (combine) with some of the silica in the magma to form pyroxene. As long as there is silica remaining and the rate of cooling is slow, this process continues down the discontinuous branch: olivine to pyroxene, pyroxene to amphibole, and (under the right conditions) amphibole to biotite.</li>
				<li>At about the point where pyroxene begins to crystallize, plagioclase feldspar also begins to crystallize. At that temperature, the plagioclase is calcium-rich (anorthite). As the temperature drops, and providing that there is sodium left in the magma, the plagioclase that forms is a more sodium-rich variety.</li>
				<li><ImgComp src={"/articlePics/geology_pics/12.png"} width="90%"/></li>
				<li>In the discontinuous branch, olivine is typically the first mineral to form (at just below 1300°C). As the temperature continues to drop, olivine becomes unstable while pyroxene becomes stable. The early-forming olivine crystals react with silica in the remaining liquid magma and are converted into pyroxene.</li>
				<MathStuff>$$Mg_2SiO_4+SiO_2 \rightarrow 2MgSiO_3$$</MathStuff>
				<li>This continues down the chain, as long as there is still silica left in the liquid.</li>
				<li>In cases where cooling happens relatively quickly, individual plagioclase crystals can be zoned from calcium-rich in the centre to more sodium-rich around the outside. This occurs when calcium-rich early-forming plagioclase crystals become coated with progressively more sodium-rich plagioclase as the magma cools.</li>
				<li>Finally, if the magma is quite silica-rich to begin with, there will still be some left at around 750° to 800°C, and from this last magma, potassium feldspar, quartz, and maybe muscovite mica will form.</li>
				<li><ImgComp src={"/articlePics/geology_pics/13.png"} width="90%"/></li>
			</SubList></li>
			<li>A number of processes that take place within a magma chamber can affect the types of rocks produced in the end:<SubList>
				<li>If the magma has a low viscosity (i.e., it's runny) - which is likely if it is mafic - the crystals that form early, such as olivine, may slowly settle toward the bottom of the magma chamber. The means that the overall composition of the magma near the top of the magma chamber will become more felsic, as it is losing some iron- and magnesium-rich components. This process is known as <b>fractional crystallization</b>.</li>
				<li>The crystals that settle might either form an olivine-rich layer near the bottom of the magma chamber, or they might remelt because the lower part is likely to be hotter than the upper part. If any melting takes place, crystal settling will make the magma at the bottom of the chamber more mafic than it was to begin with.</li>
				<li><ImgComp src={"/articlePics/geology_pics/14.png"} width="90%"/></li>
				<li>If crystal settling does not take place, because the magma is too viscous, then the process of cooling will continue as predicted by the Bowen reaction series. In some cases, however, partially cooled but still liquid magma, with crystals in it, will either move farther up into a cooler part of the crust, or all the way to the surface during a volcanic eruption. In either of these situations, the magma that has moved toward the surface is likely to cool much faster than it did within the magma chamber, and the rest of the rock will have a finer crystalline texture.</li>
			</SubList></li>
		</ul>
		<h3>Classification of Igneous Rocks</h3>
		<ul>
			<li>Igneous rocks are classified into four categories, based on either their chemistry or their mineral composition: felsic, intermediate, mafic, and ultramafic.</li>
			<li><figure>
				<ImgComp src={"/articlePics/geology_pics/15.png"} style={{width: "100%"}}/>
				<figcaption>An important feature to note on this diagram is the red line separating the non-ferromagnesian silicates in the lower left from the ferromagnesian silicates in the upper right.</figcaption>
			</figure></li>
			<li>Felsic rocks can have about 1% to 20% ferromagnesian silicates. Intermediate rocks have between 20% and 50% ferromagnesian silicates, and mafic rocks have 50% to 100% ferromagnesian silicates.</li>
			<li>Almost all intrusive igneous rocks have crystals that are large enough to see with the naked eye, and we use the term <b>phaneritic</b> (from the Greek word <i>phaneros</i> meaning visible) to describe that. If the crystals are too small to distinguish, which is typical of most volcanic rocks, we use the term <b>aphanitic</b>.</li>
			<li>In general, the size of crystals is proportional to the rate of cooling. The longer it takes for a body of magma to cool, the larger the crystals will be.</li>
		</ul>
		<h3>Intrusive Igneous Bodies</h3>
		<ul>
			<li>In most cases, a body of hot magma is less dense than the rock surrounding it, so it has a tendency to move very slowly up toward the surface. It does so in a few different ways, including filling and widening existing cracks, melting the surrounding rock (called <b>country rock</b>), pushing the rock aside, and breaking the rock. Where some of the country rock is broken off, it may fall into the magma, a process called <b>stoping</b>. The resulting fragments are known as <b>xenoliths</b> (Greek for <i>strange rocks</i>).</li>
			<li>Some upward-moving magma reaches the surface, resulting in volcanic eruptions, but most cools within the crust. The resulting body of rock is known as a pluton.</li>
			<li><figure>
				<ImgComp src={"/articlePics/geology_pics/16.png"} style={{width:"70%"}}/>
				<figcaption>Some of the types of plutons. a: stocks (if they coalesce at depth then they might constitute a batholith), b: sill (a tabular body, in this case parallel to bedding), c: dyke (cross-cuts bedding), d: laccolith (a sill that has pushed up the overlying rock layers), e: pipe (a cylindrical conduit feeding a volcano). The two features labelled f could be pipes or dykes, but from this perspective it's not possible to determine if they are cylindrical or tabular.</figcaption>
			</figure></li>
			<li>Large irregular-shaped plutons are called either <b>stocks</b> or <b>batholiths</b>. The distinction between the two is made on the basis of the area that is exposed at the surface: if the body has an exposed surface area greater than 100 km2, then it's a batholith; smaller than 100 km2 and it's a stock. Batholiths are typically formed only when a number of stocks coalesce beneath the surface to create one large body.</li>
			<li>A <b>pipe</b> is a cylindrical body (with a circular, ellipitical, or even irregular cross-section) that served as a conduit for the movement of magma from one location to another. Most known pipes fed volcanoes, although pipes can also connect plutons. It is also possible for a dyke to feed a volcano.</li>
		</ul>
	</div>
</div>
<h2 id="chpt6">Sediments and Sedimentary Rocks</h2>
<div className="content">
	<div style={{width: "49%",float: "left", marginLeft: "0.5%"}}>
		<h3>Clastic Sedimentary Rocks</h3>
		<ul>
			<li>A <b>clast</b> is a fragment of rock or mineral, ranging in size from less than a micron to as big as an apartment block.</li>
			<li>Most sand-sized clasts are made of quartz because quartz
				is more resistant to weathering than any other common mineral.</li>
			<li>Sedimentary
				rocks that are made up of "clasts" are called <b>clastic sedimentary rocks</b>. A comparable term is <i>detrital
				sedimentary rocks</i>.</li>
			<li>Geologists that study sediments and sedimentary rocks use the <b>Udden-Wentworth grain-size scale</b> for describing the sizes of the grains:<SubList>
				<TableLI><caption>Udden-Wentworth grain-size scale</caption><tbody>
					<tr>
					<th colSpan={2} rowSpan={2}>Description</th>
					<th colSpan={2}>Size Range in mm</th>
					<th colSpan={2}>Size in microns</th>
					</tr>
					<tr>
					<th>from</th>
					<th>to</th>
					<th>from</th>
					<th>to</th>
					</tr>
					<tr>
					<th rowSpan={3}>Boulder</th>
					<td>large</td>
					<td>1,024</td>
					<td>no limit</td>
					<td colSpan={2}></td>
					</tr>
					<tr style={{height: "10px"}}>
					<td>medium</td>
					<td>512</td>
					<td>1024</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<td>small</td>
					<td>256</td>
					<td>512</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<th rowSpan={2}>Cobble</th>
					<td>large</td>
					<td>128</td>
					<td>256</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<td>small</td>
					<td>64</td>
					<td>128</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<th rowSpan={5}>Pebble<br/>
					(Granule)</th>
					<td>very coarse</td>
					<td>32</td>
					<td>64</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<td>coarse</td>
					<td>16</td>
					<td>32</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<td>medium</td>
					<td>8</td>
					<td>16</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<td>fine</td>
					<td>4</td>
					<td>8</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<td>very fine</td>
					<td>2</td>
					<td>4</td>
					<td colSpan={2}></td>
					</tr>
					<tr>
					<th rowSpan={5}>Sand</th>
					<td>very coarse</td>
					<td>1</td>
					<td>2</td>
					<td>1,000</td>
					<td>2,000</td>
					</tr>
					<tr>
					<td>coarse</td>
					<td>0.5</td>
					<td>1</td>
					<td>500</td>
					<td>1,000</td>
					</tr>
					<tr>
					<td>medium</td>
					<td>0.25</td>
					<td>0.5</td>
					<td>250</td>
					<td>500</td>
					</tr>
					<tr>
					<td>fine</td>
					<td>0.125</td>
					<td>0.25</td>
					<td>125</td>
					<td>250</td>
					</tr>
					<tr>
					<td>very fine</td>
					<td>0.063</td>
					<td>0.125</td>
					<td>63</td>
					<td>125</td>
					</tr>
					<tr>
					<th rowSpan={5}>Silt</th>
					<td>very coarse</td>
					<td colSpan={2}></td>
					<td>32</td>
					<td>63</td>
					</tr>
					<tr>
					<td>coarse</td>
					<td colSpan={2}></td>
					<td>16</td>
					<td>32</td>
					</tr>
					<tr>
					<td>medium</td>
					<td colSpan={2}></td>
					<td>8</td>
					<td>16</td>
					</tr>
					<tr>
					<td>fine</td>
					<td colSpan={2}></td>
					<td>4</td>
					<td>8</td>
					</tr>
					<tr>
					<td>v. fine</td>
					<td colSpan={2}></td>
					<td>2</td>
					<td>4</td>
					</tr>
					<tr>
					<th>Clay</th>
					<td>clay</td>
					<td colSpan={2}></td>
					<td>0</td>
					<td>2</td>
					</tr>
				</tbody></TableLI>
			</SubList></li>
			<li>
				<div style={{display: "grid", gridTemplateColumns: "60% 40%"}}>
				<div style={{paddingRight: "2px"}}>If you drop a granule into a glass of water, it will sink quickly to the bottom (less than half a second). If you drop a grain of sand into the same glass, it will sink more slowly (a second or two depending on the size). A grain of silt will take several seconds to get to the bottom, and a particle of fine clay may never get there. For smaller particles the difference between gravitational push and frictional resistance is less, so they settle slowly.</div>
				<ImgComp src={"/articlePics/geology_pics/1.png"} style={{objectFit: "contain", maxWidth: "100%", maxHeight: "250px"}} />
				</div>
			</li>
			<li>The ability of a moving medium (air or
				water) to move sedimentary particles is dependent on the velocity of
				flow.</li>
			<li>Clasts within streams are moved in several different ways. Large bedload clasts are pushed (by traction) or bounced along the bottom (by saltation), while smaller clasts
				are suspended in the water and kept there by the turbulence of the flow. As the flow velocity changes,
				different-sized clasts may be either incorporated into the flow or deposited on the bottom.</li>
			<li><ImgComp src={"/articlePics/geology_pics/2.png"} style={{width: "80%"}} /></li>
			<li><b>Lithification</b> is the term used to describe a number of different processes that take place within a
				deposit of sediment to turn it into solid rock. One of these processes is burial by other
				sediments, which leads to compaction of the material and removal of some of the intervening water
				and air. After this stage, the individual clasts are touching one another. </li>
			<li><b>Cementation</b> is the process
				of crystallization of minerals within the pores between the small clasts, and especially at the points of
				contact between clasts.</li>
			<li>The characteristics and distinguishing features of clastic sedimentary rocks:<SubList>
				<TableLI>
					<caption>Main types of clastic sedimentary rocks.</caption>
					<thead>
					<tr>
					<th scope="col">Group</th>
					<th scope="col">Examples</th>
					<th scope="col">Characteristics</th>
					</tr>
					</thead>
					<tbody>
					<tr>
					<th rowSpan={2} scope="row">Mudrock</th>
					<td>mudstone</td>
					<td>&gt;75% silt and clay, not bedded</td>
					</tr>
					<tr>
					<td>shale</td>
					<td>&gt;75% silt and clay, thinly bedded</td>
					</tr>
					<tr>
					<th scope="row">Coal</th>
					<td></td>
					<td>dominated by fragments of partially decayed plant matter, often enclosed between beds of sandstone or mudrock</td>
					</tr>
					<tr>
					<th rowSpan={3} scope="row">Sandstone</th>
					<td>quartz sandstone</td>
					<td>dominated by sand, &gt;90% quartz</td>
					</tr>
					<tr>
					<td>arkose</td>
					<td>dominated by sand, &gt;10% feldspar</td>
					</tr>
					<tr>
					<td>lithic wacke</td>
					<td>dominated by sand, &gt;10% rock fragments, &gt;15% silt and clay</td>
					</tr>
					<tr>
					<th scope="row">Conglomerate</th>
					<td></td>
					<td>dominated by rounded clasts, pebble size and larger</td>
					</tr>
					<tr>
					<th scope="row">Breccia</th>
					<td></td>
					<td>dominated by angular clasts, pebble size and larger</td>
					</tr>
					</tbody>
				</TableLI>
			</SubList></li>
			<li>Most coal forms in fluvial or delta environments where vegetation growth is vigorous and where decaying plant matter accumulates in long-lasting swamps with low oxygen levels. To avoid oxidation and breakdown, the organic matter must remain submerged for centuries or millennia, until it is covered with another layer of either muddy or sandy sediments.</li>
			<li>
				<div style={{display: "grid",gridTemplateColumns: "55% 45%"}}>
				<div>Sandstones are mostly made up of sand
				grains, but they also include finer
				material - both silt and clay. The term <b>arenite</b>
				applies to a so-called <i>clean sandstone</i>, meaning
				one with less than 15% silt and clay. Considering
				the sand-sized grains only (the grains larger than
				1/16th mm), arenites with 90% or more quartz are
				called <b>quartz arenites</b>. If they have more than
				10% feldspar and more feldspar than rock
				fragments, they are called <b>feldspathic arenites</b> or
				<i>arkosic arenites</i> (or just <i>arkose</i>). If they have
				more than 10% rock fragments, and more rock
				fragments than feldspar, they are <b>lithic arenites</b>.
				A sandstone with more than 15% silt or clay is
				called a <b>wacke</b>. The terms
				<b>quartz wacke</b>, <b>lithic wacke</b>, and <b>feldspathic wacke</b>
				are used with limits similar to those on the arenite
				diagram. Another name for a lithic wacke is <i>greywacke</i>.</div>
				<ImgComp src={"/articlePics/geology_pics/3.png"} style={{maxWidth: "100%"}}/>

				</div>
			</li>
			<li>
				<figure>
					<ImgComp src={"/articlePics/geology_pics/4.png"} style={{width: "100%"}}/>
					<figcaption>Photos of thin sections of three types of sandstone (Q=quartz, F=feldspar and L= lithic).</figcaption>
				</figure>
			</li>
			<li>"Lithic" means rock. Lithic clasts are rock fragments, as opposed to mineral fragments.</li>
		</ul>
		<h3>Chemical Sedimentary Rocks</h3>
		<ul>
			<li>Whereas clastic sedimentary rocks are dominated by components that have been transported as solid
				clasts (clay, silt, sand, etc.), <b>chemical sedimentary rocks</b> are dominated by components that have been transported as ions in solution (Na<sup>+</sup>, Ca<sup>2+</sup>, HCO<sup>3-</sup>, etc.).</li>
			<li>There is some overlap between the two because
				almost all clastic sedimentary rocks contain cement formed from dissolved ions, and many chemical
				sedimentary rocks include some clasts. Since ions can stay in solution for tens of thousands of years
				(some much longer), and can travel for tens of thousands of kilometres, it is virtually impossible to relate
				chemical sediments back to their source rocks.</li>
			<li>We use the word marine when referring to salt water (i.e., oceanic) environments, and the word aquatic when referring to freshwater
				environments.</li>
			<li>The most common chemical sedimentary rock, by far, is <b>limestone</b>. Others include <b>chert</b>, <b>banded iron formation</b>, and <b>evaporites</b>.</li>
			<li>Almost all limestone forms in the oceans, and most of that forms on the shallow continental shelves,
				especially in tropical regions with coral reefs. </li>
			<li>Reefs are highly productive ecosystems populated by a
				wide range of organisms, many of which use calcium and bicarbonate ions in seawater to make carbonate
				minerals (especially calcite) for their shells and other structures. They tend to form in areas with clear water (e.g., not close to the mouths of
				large rivers), and near the edges of steep drop-offs because the reef organisms thrive on nutrient-rich
				upwelling currents.</li>
			<li>As the reef builds up, it is eroded by waves and currents to produce carbonate
				sediments that are transported into the steep offshore <b>fore-reef</b> area and the shallower inshore <b>back-reef</b> area. These sediments are dominated by reef-type carbonate fragments of all sizes, including mud. In
				many such areas, carbonate-rich sediments also accumulate in quiet lagoons (where mud and molluscshell
				fragments predominate) or in offshore areas with strong currents (where either
				foraminifera tests accumulate or calcite crystallizes inorganically to form <b>ooids</b> (spheres
				of calcite that form in shallow tropical ocean water with strong currents)).</li>
			<li><ImgComp src={"/articlePics/geology_pics/5.png"} width="90%"/></li>
			<li>Limestone also accumulates in deeper water, from the steady rain of the carbonate shells of tiny
				organisms that lived near the ocean surface. The lower limit for limestone accumulation is around 4,000
				metres. Beneath that depth, calcite is soluble so limestone does not accumulate.</li>
			<li>Calcite can also form on land in a number of environments. <b>Tufa</b> forms at springs and
				<b>travertine</b> forms at hot springs. Similar material precipitates within limestone caves to form <b>stalactites</b>, <b>stalagmites</b>, and a wide range of other <b>speleothems</b>. Tufa, travertine and speleothems make up only a tiny proportion of all limestone.</li>
			<li>Not all marine organisms make their hard parts out of calcite; some use silica and when they die their tiny shells (or tests) settle slowly to the bottom where
				they accumulate as chert. In some cases, chert is deposited along with limestone in the moderately deep
				ocean, but the two tend to remain separate, so chert beds within limestone are quite common.</li>
			<li>Banded iron formation (BIF) is a deep sea-floor deposit of iron oxide that is a common ore of iron. BIF forms when iron dissolved in seawater is oxidized, becomes insoluble, and sinks to
				the bottom in the same way that silica tests do to form chert.</li>
			<li>Photosynthetic bacteria consume carbon dioxide from the
				atmosphere and use solar energy to convert it to oxygen. These bacteria first evolved around 3500 Ma,
				and for the next billion years, almost all of that free oxygen was used up by chemical and biological
				processes, but by 2400 Ma free oxygen levels started to increase in the atmosphere and the oceans. Over
				a period of 600 million years, that oxygen gradually converted soluble ferrous iron (Fe<sup>2+</sup>) to insoluble ferric iron (Fe<sup>3+</sup>), which combined with oxygen to form the mineral hematite (Fe<sub>2</sub>O<sub>3</sub>), leading to the
				accumulation of BIFs on the sea floor. After 1800 Ma, little dissolved iron was left in the oceans and the
				formation of BIF essentially stopped.</li>
			<li>In arid regions, lakes and inland seas typically have no stream outlet and the water that flows into them is removed only by evaporation. Under these conditions, the water becomes increasingly concentrated with dissolved salts, and eventually some of these salts reach saturation levels and start to crystallize. Although all evaporite deposits are unique because of differences in the chemistry of the water, in most cases minor amounts of carbonates start to precipitate when the solution is reduced to about 50% of its original volume. Gypsum (CaSO<sub>4</sub>·H<sub>2</sub>O) precipitates at about 20% of the original volume and halite (NaCl) precipitates at 10%.</li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}}>
		<h3>Depositional Environments and Sedimentary Basins</h3>
		<ul>
			<li><ImgComp src={"/articlePics/geology_pics/6.png"} width="90%"/></li>
			<li>Sediments accumulate in a wide variety of environment.</li>
			<TableLI>
				<caption>The important terrestrial and marine depositional environments and their characteristics</caption>
				<tbody>
				<tr>
				<th>Environment</th>
				<th>Important Transport Processes</th>
				<th>Depositional Environments</th>
				<th>Typical Sediment Types</th>
				</tr>
				<tr>
				<th colSpan={4}>Terrestrial Environments</th>
				</tr>
				<tr>
				<td>Glacial</td>
				<td>gravity, moving ice, moving water</td>
				<td>valleys, plains, streams, lakes</td>
				<td>glacial till, gravel, sand, silt, and clay</td>
				</tr>
				<tr>
				<td>Colluvial</td>
				<td>gravity</td>
				<td>steep-sided valleys</td>
				<td>coarse angular fragments</td>
				</tr>
				<tr>
				<td>Fluvial</td>
				<td>moving water</td>
				<td>streams</td>
				<td>gravel, sand, silt, and OM*</td>
				</tr>
				<tr>
				<td>Aeolian</td>
				<td>wind</td>
				<td>deserts and coastal regions</td>
				<td>sand, silt</td>
				</tr>
				<tr>
				<td>Lacustrine</td>
				<td>moving water</td>
				<td>lakes</td>
				<td>sand, silt, clay, and OM*</td>
				</tr>
				<tr>
				<td>Evaporite</td>
				<td>moving water</td>
				<td>lakes in arid regions</td>
				<td>salts, clay</td>
				</tr>
				<tr>
				<th colSpan={4}>Marine Environments</th>
				</tr>
				<tr>
				<td>Deltaic</td>
				<td>moving water</td>
				<td>deltas</td>
				<td>sand, silt, clay, and OM*</td>
				</tr>
				<tr>
				<td>Beach</td>
				<td>waves, longshore currents</td>
				<td>beaches, spits, sand bars</td>
				<td>gravel, sand</td>
				</tr>
				<tr>
				<td>Tidal</td>
				<td>tidal currents</td>
				<td>tidal flats</td>
				<td>silt, clay</td>
				</tr>
				<tr>
				<td>Reefs</td>
				<td>waves and tidal currents</td>
				<td>reefs and adjacent basins</td>
				<td>carbonates</td>
				</tr>
				<tr>
				<td>Shallow water marine</td>
				<td>waves and tidal currents</td>
				<td>shelves and slopes, lagoons</td>
				<td>carbonates (in tropical climates); sand/silt/clay (elsewhere)</td>
				</tr>
				<tr>
				<td>Lagoonal</td>
				<td>little transportation</td>
				<td>lagoon bottom</td>
				<td>carbonates (in tropical climates)</td>
				</tr>
				<tr>
				<td>Submarine fan</td>
				<td>underwater gravity flows</td>
				<td>continental slopes and abyssal plains</td>
				<td>gravel, sand, mud</td>
				</tr>
				<tr>
				<td>Deep water marine</td>
				<td>ocean currents</td>
				<td>deep-ocean abyssal plains</td>
				<td>clay, carbonate mud, silica mud</td>
				</tr>
				</tbody>
			</TableLI>
			<li>OM (organic matter) only accumulates in swampy parts of these environments.</li>
			<li>In order for sediments to be preserved long enough to be turned into rock, they need to have been deposited in a basin that will last that long.</li>
			<li><b>Trench basins</b> form where a subducting oceanic plate dips beneath the overriding continental or oceanic crust.</li>
			<li>A <b>forearc basin</b> lies between the subduction zone and the volcanic arc, and may be formed in part by friction between the subducting plate and the overriding plate, which pulls part of the overriding plate down.</li>
			<li><b>Foreland basins</b> are not only related to volcanic ranges, but can form adjacent to fold belt mountains</li>
			<li>A <b>rift basin</b> forms where continental crust is being pulled apart, and the crust on both sides the rift subsides. As rifting continues this eventually becomes a narrow sea, and then an ocean basin.</li>
		</ul>
		<h3>Sedimentary Structures and Fossils</h3>
		<ul>
			<li>Accumulation of sediments and sedimentary rocks takes place according to some important geological principles:<SubList>
				<li>The <b>principle of original horizontality</b> states that sediments accumulate in essentially horizontal layers. The implication is that tilted sedimentary layers observed to day must have been subjected to tectonic forces.</li>
				<li>The <b>principle of superposition states</b> that sedimentary layers are deposited in sequence, and that unless the entire sequence has been turned over by tectonic processes, the layers at the bottom are older than those at the top.</li>
				<li>The <b>principle of inclusions</b> states that any rock fragments in a sedimentary layer must be older than the layer. For example, the cobbles in a conglomerate must have been formed before the conglomerate.</li>
				<li>The <b>principle of faunal succession</b> states that there is a well-defined order in which organisms have evolved through geological time, and therefore the identification of specific fossils in a rock can be used to determine its age.</li>
			</SubList></li>
			<li><b>Bedding</b> is the separation of sediments into layers that either differ from one another in textures, composition, colour, or weathering characteristics, or are separated by partings — narrow gaps between adjacent beds </li>
			<li>Partings may represent periods of non-deposition that could range from a few decades to a few centuries.</li>
			<li>Bedding can form in almost any depositional environment.</li>
			<li><b>Cross-bedding</b> is bedding that contains angled layers and forms when sediments are deposited by flowing water or wind. Cross-beds in streams tend to be on the scale of centimetres to tens of centimetres, while those in <b>aeolian</b> (wind deposited) sediments can be on the scale of metres to several metres.</li>
			<li>Cross-beds form as sediments are deposited on the leading edge of an advancing ripple or dune. Each layer is related to a different ripple that advances in the flow direction, and is partially eroded by the following ripple. Cross-bedding is a very important sedimentary structure to recognize because it can provide information on the direction of current flows and, when analyzed in detail, on other features like the rate of flow and the amount of sediment available.</li>
			<li><ImgComp src={"/articlePics/geology_pics/7.png"} width="80%"/></li>
			<li><b>Graded bedding</b> is characterized by a gradation in grain size from bottom to top within a single bed. "Normal" graded beds are coarse at the bottom and become finer toward the top, a product of deposition from a slowing curren. Some graded beds are reversed (coarser at the top), and this normally results from deposition by a fast-moving debris flow.</li>
			<li><b>Ripples</b>, which are associated with the formation of cross-bedding, may be preserved on the surfaces of sedimentary beds.</li>
			<li>In a stream environment, boulders, cobbles, and pebbles can become <b>imbricated</b>, meaning that they are generally tilted in the same direction. Clasts in streams tend to tilt with their upper ends pointing downstream.</li>
			<li><b>Mud cracks</b> form when a shallow body of water (e.g., a tidal flat or pond), into which muddy sediments have been deposited, dries up and cracks. This happens because the clay in the upper mud layer tends to shrink on drying, and so it cracks because it occupies less space when it is dry.</li>
		</ul>
		<h3>Groups, Formations, and Members</h3>
		<ul>
			<li>The International Commission on Stratigraphy (ICS) has established a set of conventions for grouping, describing, and naming sedimentary rock units.</li>
			<li>The main stratigraphic unit is a <b>formation</b>, a formation is a series of beds that is distinct from other beds above and below, and is thick enough to be shown on the geological maps that are widely used within the area in question. Most formations are in the order of a few hundred metres thick.</li>
			<li>A series of formations can be classified together to define a <b>group</b>, which could be as much as a few thousand metres thick, and represents a series of rocks that were deposited within a single basin (or a series of related and adjacent basins) over a few million to a few tens of millions of years.</li>
			<li>In areas where detailed geological information is needed (for example, within a mining or petroleum district) a formation might be divided into members, where each member has a specific and distinctive lithology.</li>
		</ul>
	</div>
</div>
<h2 id="chpt7">Metamorphism and Metamorphic Rocks</h2>
<div className="content">
	<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
		<ul>
			<li><b>Metamorphism</b> is the change that takes place within a body of rock as a result of it being subjected to conditions that are different from those in which it formed.</li>
		</ul>
		<h3>Controls over Metamorphic Processes</h3>
		<ul>
			<li className="Opened">The main factors that control metamorphic processes are:<SubList>
				<li>The mineral composition of the <b>parent</b> rock:<SubList>
					<li>In most cases, this is sedimentary or igneous rock, but metamorphic rock that reaches the surface and is then reburied can also be considered a parent rock.</li>
					<li>On the other hand, if, for example, a mudstone is metamorphosed to slate and then buried deeper where it is metamorphosed to schist, the parent rock of the schist is mudstone, not slate.</li>
				</SubList></li>
				<li>The <b>temperature</b> at which metamorphism takes place: <SubList>
					<li>All minerals are stable over a specific range of temperatures.</li>
					<li>Some minerals will crystallize into different polymorphs (same composition, but different crystalline structure) depending on the temperature and pressure.</li>
				</SubList></li>
				<li>The amount and type of <b>pressure</b> during metamorphism: <SubList>
					<li>It has implications for mineral stability and for the texture of metamorphic rocks.</li>
				</SubList></li>
				<li>The types of <b>fluids</b> that are present during metamorphism: <SubList>
					<li>Water is the main fluid present within rocks of the crust.</li>
					<li>Water facilitates the transfer of ions between minerals and within minerals, and therefore increases the rates at which metamorphic reactions take place.</li>
					<li>Hot water, can have elevated concentrations of dissolved substances, and therefore it is an important medium for moving certain elements around within the crust.</li>
				</SubList></li>
				<li>The amount of <b>time</b> available for metamorphism: <SubList>
					<li>The growth of new minerals within a rock during metamorphism has been estimated to be about 1 mm per million years.</li>
					<li>The tectonic processes that lead to metamorphism are also very slow, so in most cases, the chance for metamorphic reactions to be completed is high.</li>
				</SubList></li>
			</SubList></li>
		</ul>
		<h3>Classification of Metamorphic Rocks</h3>
	</div>
</div>
</>