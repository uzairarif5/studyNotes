import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Color Theory notes";
export const sourcesColor = {21: "#ec208a", 22: null};
export const additionalResources = [19];

export const content = <>
<h1>Color Theory</h1>

<h2 id="intro">Introduction</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <ul>
      <li><b>Colour</b> is usually described by its physical properties and by its perception by humans.</li>
      <li>In film, there are professionals called <b>colourists</b> whose job it is to adjust calibrations and many other variables in order to enhance the colour of the film itself.</li>
      <li>In art and design education, colour is often taught as a "scientific" principle.</li>        
    </ul>
  </div>
</div>

<h2 id="colourAsAScience">Colour As A Science</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <ul>
      <li>Colour vision differs from one species to another.</li>
      <li>In humans, what we perceive as 'colour' is the result of a combination of the physical characteristics of light interacting with the retina whose activity is then processed by the brain.</li>
      <li>In the eye, the retina has two types of cells which are sensitive to different types of light:<SubList>
        <li>Rod cells are located on the outer parts of the retina for peripheral vision and are mostly responsible for night-vision and other low-light settings.</li> 
        <li>Cone cells are more active in colour vision, being sensitive to red, green and blue spectra.</li>
      </SubList></li>        
    </ul>
    <h3>Additive vs Subtractice Modes</h3>
    <ul>
      <li>Colours produced by light-based sources, such as a projector or a computer screen are part of the <b>additive</b> system.</li>      
      <li>When the primary colours of this system (red, green and blue) are combined in equal parts, they produce white.</li>
      <li>Colours produced by material based sources such as dyes and paints are part of the <b>subtractive</b> system, and its primaries (red, blue, yellow), when combined in equal parts, will produce black.</li>
    </ul>
  </div>
  <div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <h3>Colour Wheels</h3>
    <ul>
      <li>In Western design practice, colour wheels are commonly used to explain relationships between colours. It's not a perfect system, there is much dispute over it and there is certainly no one true colour wheel.</li>
			<li><ImgComp style={{width:"50%"}} src={"/articlePics/color_theory_pics/1.jpeg"}/></li>
    </ul>
  </div>
</div>

<h2>Colour Histories</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <ul>
      <li><b>Aristotle</b> or <b>Theophrastis</b>:<SubList>
        <li>Connected	colour to the mixing or absence of light.</li>
        <li>Colours	were	linked	to	the	time	of	day,	red	and	yellow representing the day and darker colours representing the night.</li>
        <li>These notions	were highly	influential	and	prevailed	throughout the European middle age.</li>
      </SubList></li>
      <li><b>Sir Isaac Newton:</b><SubList>
        <li>Passed a beam of sunlight through a prism, producing the visible spectrum.</li>
        <li>Determined that all colours are actually light.</li>
      </SubList></li>
      <li><b>Johann Wolfgang Von Goethe:</b><SubList>
        <li>Proposed a study of colour based on preception rather than as a physical property of light.</li>
        <li>Assigned colours to categories such as "radiant" and gentle.</li>
      </SubList></li>
      <li><b>Michel Eugene Chevreul:</b><SubList>
        <li>Recorded behavior of colours when placed side by side.</li>
        <li>Art movements such as orphic cubism and neo-impressionism were influenced by Chevreul's work.</li>
      </SubList></li>
      <li><b>Ewald Hering:</b><SubList>
        <li>Theorized a system of colour opponency where six primary colours are coupled together, red-green, yellow-blue and white-black.</li>
        <li>This theory provided the foundation for the <b>Natural Colour System</b>.</li>
      </SubList></li>
      <li><b>Wilhelm Ostwald:</b><SubList>
        <li>Introduced the notion of adding white as tinting and adding black as shading.</li>
        <li>Observed that some coloursare more harmonious with one another than others.</li>
      </SubList></li>
      <li><b>Faber Birren:</b><SubList>
        <li>Theorized that warmer colours are more dynamic and therefore of mroe use to the designer.</li>
      </SubList></li>
    </ul>
  </div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}} data-source="21">
    <h3>Mayan Colour Compass</h3>
    <ul>
      <li>The Mayans in particular assigned their own primary colours to  directions on maps of their making. They then assigned objects, events and resources such as God, water, corn, plague, to these hues.</li>
			<li><ImgComp style={{width:"50%"}} src={"/articlePics/color_theory_pics/2.jpeg"}/></li>
    </ul>
  </div>
</div>

<h2>Physical Properties Of Colour</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <ul>
      <li><b>Hue:</b> generic name for any of several colours typically determined by a dominant corresponding wavelength (e.g. red, blue, green).</li>
      <li><b>Saturation:</b> refers to how pronounced or "faded" a particular hue is within a certain colour.</li>
      <li><b>Value</b> or <b>Key</b>: refers to the lightness or darkness of a particular hue, altered by the addition or subtraction of black or white.</li>
      <li>More on hues:<SubList>
        <li><b>Primary Hues:</b> "Pure" hues, or hues which cannot be created using any other hues in a chosen colour system. Primary hues are mixed to produce all other hues.</li>
        <li><b>Secondary Hues:</b> Produced when two primary hues are mixed together in equal parts.</li>
        <li><b>Achromatic Hues:</b> refers to white, black and greyscale, which are important to our understanding of light and dark.</li>
        <li className="ownExplanation"><b>Analogous Hues:</b> Hues which are next to each other in the color wheel.</li>
        <li><b>Complementary Hues:</b> Colours located across from one another on the colour wheel are often deemed complementary. When used together, complementary colours typically enhance one another.</li>
      </SubList></li>
    </ul>
  </div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}} data-source="21">
    <ul>
      <li><b>Additive colour mode:</b><SubList>
        <li>Light-generated colours, such as those generated by a computer screen, television or photography. The primary colours of the additive system are red, green and blue (RGB). </li>
      </SubList></li>
      <li><b>Subtractive colour mode:</b><SubList>
        <li>Hues produced through the mixing of pigment, such as in paint and ink are part of the subtractive colour system.</li>
        <li>There are two sets of primaries in this system depending on medium. The traditional paint system is based on red, blue and yellow (RBY) and the printer system based on cyan, magenta, yellow and black (CMYK).</li>
        <li>If you work on a monitor and then go to print, you'll be going from one mode of colour to another (RGB to CMYK) so what you see isn't always what you get!</li>
      </SubList></li>
    </ul>
    <h3>Contemporary Colour Systems</h3>
    <ul>
      <li><b>CIE:</b><SubList>
        <li> In the 1940s, the Commission Internationale de l'Eclairage developed the CIE system.</li>
        <li>The CIE system eliminates the 'problem' of human interpretation of colour, allowing designers to match colours that to the human eye seem very similar and are easily confused.</li>
        <li>The CIE system is the standard in the light industry.</li>
      </SubList></li>
      <li><b>Munsell:</b><SubList>
        <li>Colour theorist <b>Albert Munsell</b> first developed his system in the early 1900s.</li>
        <li>Munsell extended the title of 'primary' to red, yellow, blue, green and purple and used these to create 100 secondary colours, which he then arranged according to hue, value and saturation.</li>
        <li>In 1941 it was adopted by the United States Bureau of Standards, which still employs it today.</li>
      </SubList></li>
      <li><b>NCS:</b><SubList>
        <li>Based on Hering's work, the Natural Colour System (NCS) emerged from Sweden and focuses on the perception of colour by the human brain. In the NCS, colour is defined according to darkness, saturation and hue.</li>
      </SubList></li>
      <li><b>Pantone:</b><SubList>
        <li>In 1962 the Pantone Color Matching System was created in the United States.</li>
        <li>Though it has become the standard for graphic designers and printers, it differs from other colour systems in that it doesn't contribute a colour theory, but rather it exists entirely for profit.</li>
        <li>Pantone numbers colours in order to identify them.</li>
      </SubList></li>
    </ul>
  </div>
</div>

<h2>Colour Harmonies</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <ul>
      <li>Broadly speaking, <b>colour harmonies</b> are colour combinations that are aesthetically pleasing.</li>
      <li> They are useful to a designer because humans typically like to see balance and a harmony of colour is one of many ways to achieve this balance.</li>
      <li>The rules of colour harmonies are by no means set in stone.</li>
      <li><b>Analogous harmony:</b> when colours that are next to one another on the colour wheel are used in a composition.</li>
    </ul>
  </div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}} data-source="21">
    <ul>      
      <li><b>Complementary</b> or <b>dyadic</b> harmony is when colours that are opposite of each other on the colour wheel are used.</li>      
      <li><b>Triadic harmony</b> relies on the use of three colours that are equally spaced on the colour wheel.</li>      <li><b>Achromatic harmony</b> lacks all hue, and so are composed of black, white and greyscale.</li>
      <li><b>Monochromatic harmony</b> refers to a composition with only one colour, with various tints, tones and shades of that colour being used.</li>
    </ul>
  </div>
</div>

<h2>Colour And Us</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}} data-source="21">
    <ul>
      <li>One of the first rules of typography is that your type should be legible.<SubList>
        <li>One Way of making sure your type is legible in almost any situation, the black stroke around the White letters pushes the type forWard, so that it appears to be sitting atop the image.</li>
      </SubList></li>
      <li>Several tips for accessible design  from "Access Ability: A Practical Handbook on Accessible Graphic Design":<SubList>
        <li>Aim for a 70% difffernece inteh value of the colour of the type and the background.</li>
        <li>Try testing your completed designs by printing them in greyscale. If ou have difficulty reading your type, you need more <b>contrast</b>, which refers to how brightness makes two or more objects in the same field of view, appear separate from each other.</li>
        <li>Using complimentary colours is normally a good way to achieve strong contrast of hues, but if the saturation and value of the colours are too similar, <b>simultaneous contrast</b> (shown below) will occur, causing an optical illusion that makes the colours appear to vibrate and put a strain on the eye.</li>
			  <li><ImgComp style={{width:"50%"}} src={"/articlePics/color_theory_pics/3.jpeg"}/></li>
      </SubList></li>
    </ul>
  </div>
</div>

</>;