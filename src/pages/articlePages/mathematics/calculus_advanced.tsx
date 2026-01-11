import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import Vectors from "./Vectors";
import ConicSectionAndQuadraticSurfaces from "./ConicSectionAndQuadraticSurfaces";
import VectorValuedFunction from "./VectorValuedFunctions";
import DifferentiationOfFunctionsOfSeveralVariables from "./DifferentiationOfFunctionsOfSeveralVariables";
import MultipleIntegrals from "./MultipleIntegrals";
import VectorCalculus from "./VectorCalculus";
import SecondOrderDifferentialEquations from "./SecondOrderDifferentialEquations";

export const title = "Calculus (Advanced) Notes";

export const sourcesColor = {45: "rgb(110, 110, 140)", 65: "rgb(100, 90, 120)"};
export const sourcesOrder = [45, 65];
export const content = <>

<h1>Calculus (Advances) Notes</h1>
<h2>Parametric Equations and Other Coordinate System</h2>
<div className="content">
  <ul data-source={65} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li>Parametric equations:<SubList>
      <li>If \(x\) and \(y\) are continuous functions of \(t\) on an interval \(I\), then the equations \(x= x(t)\) and \(y = y(t)\) are called <b>parametric equations</b> and \(t\) is called the parameter.</li>
      <li>The set of points \((x,y)\) obtained as \(t\) varies over the interval \(I\) is called <i>the graph of the parametric equations</i>. The graph of parametric equations is called a <b>parametric curve</b> or <b>plane curve</b>, and is denoted by \(C\).</li>
    </SubList></li>
    <li>Calculus of parametric curves:<SubList>
      <li>Consider the plane curve defined by the parametric equations \(x=x(t)\) and \(y=y(t)\). Suppose that \(x'(t)\) and \(y'(t)\) exist, and assume that \(x'(t)≠0\). Then the derivative \(\frac{"{dy}{dx}"}\) is given by:</li>
      <MathStuff>$${" \\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{y'(t)}{x'(t)}"}$$</MathStuff>
      <li>The second derivative is:</li>
      <MathStuff>$${" \\frac{d^2 y}{dx^2} = \\frac{d}{dx} \\left[ \\frac{dy}{dx} \\right] = \\frac{d/dt}{dx/dt} \\left[ \\frac{dy}{dx} \\right]"}$$</MathStuff>
      <li>The area under the parametric curve from \(t=a\) to \(t=b\) would be:</li>
      <MathStuff>$${" A= \\int_a^b y(t) x'(t)\\ dt"}$$</MathStuff>
      <li>The arc from from \(t=a\) to \(t=b\) would be:</li>
      <MathStuff>$${"L = \\int_a^b \\sqrt{\\left( \\frac{dx}{dt} \\right)^2 + \\left( \\frac{dy}{dt} \\right)^2} dt"}$$</MathStuff>
    </SubList></li>
    <li>Polar coordinates:<SubList>
      <li>Consider point \(P\) with the Cartesian coordinates \((x,y)\). The line segment connecting the origin to the point \(P\) measures the distance from the origin to \(P\) and has length \(r\). The angle between the positive \(x\)-axis and the line segment has measure \(θ\).</li>
      <ImgComp src={"/articlePics/calculus_advanced_pics/2.png"} width="40%"/>
      <li>This observation suggests a natural correspondence between the coordinate pair \((x,y)\) and the values \(r\) and \(θ\). This correspondence is the basis of the <b>polar coordinate system</b>.</li>
      <li>Using right-triangle trigonometry:</li>
      <MathStuff>$${"\\begin{align} \\cos(θ) &= \\frac{x}{r} \\implies x = r \\cos(θ) \\\\ \\sin(θ) &= \\frac{y}{r} \\implies y = r \\sin(θ) \\end{align}"}$$</MathStuff>
      <li>Furthermore:</li>
      <MathStuff>$${"\\begin{gather} r^2 = x^2 + y^2 \\\\ \\tan(θ) = \\frac{y}{x}\\end{gather}"}$$</MathStuff>
      <li>Each point \((x,y)\) in the Cartesian coordinate system can therefore be represented as an ordered pair \((r,θ)\) in the polar coordinate system. The first coordinate is called the <b>radial coordinate</b> and the second coordinate is called the <b>angular coordinate</b>.</li>
      <li>The line segment starting from the center of the graph going to the right (called the positive x-axis in the Cartesian system) is the <b>polar axis</b>. The center point is the <b>pole</b>, or origin, of the coordinate system, and corresponds to \(r=0\).</li>
    </SubList></li>
    <li>Curves defined by polar equations:<SubList>
      <ImgComp src={"/articlePics/calculus_advanced_pics/4.png"} width="90%"/>
      <ImgComp src={"/articlePics/calculus_advanced_pics/5.png"} width="90%"/>
      <li>A cardioid is a special case of a limaçon.</li>
    </SubList></li>
    <li>Symmetry in Polar Curves and Equations:<SubList>
      <li>The curve is symmetric about the polar axis if \(r=f(θ)\) is unchanged by replacing \(θ\) with \(−θ\).</li>
      <li>The curve is symmetric about the pole if \(r=f(θ)\) is unchanged when replacing \(r\) with \(-r\), or \(θ\) with \(π+θ\).</li>
      <li>The curve is symmetric about the vertical line \(θ=\frac{"{π}{2}"}\) if \(r=f(θ)\) is unchanged when \(θ\) is replaced by \(π−θ\).</li>
      <ImgComp src={"/articlePics/calculus_advanced_pics/6.png"}  width="90%"/>
    </SubList></li>
    <li>Calculus in polar coordinates:<SubList>
      <li>Suppose \(f\) is continuous and nonnegative on the interval \(α \le θ \le β\) with \(0 \lt β−α \le 2π\). The area of the region bounded by the graph of \(r=f(θ)\) between the radial lines \(θ=α\) and \(θ=β\) is:</li>
      <MathStuff>$$ {"A = \\int^β_α \\frac{1}{2} [f(θ)]^2 dθ = \\int^β_α \\frac{1}{2} r^2 dθ"} $$</MathStuff>
      <li>The length of the graph of \(r=f(θ)\) from \(θ=α\) to \(θ=β\) is:</li>
      <MathStuff>$$ {"L = \\int^β_α \\sqrt{[f(θ)]^2 + [f'(θ)]^2} dθ = = \\int^β_α \\sqrt{r^2 + \\left[ \\frac{dr}{dθ} \\right]^2} dθ"} $$</MathStuff>
    </SubList></li>
  </ul>
  <ul data-source={45} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <li><b>Cylindrical coordinate system:</b><SubList>
      <li>In the <b>cylindrical coordinate system</b>, a point in space is represented by the ordered triple \((r,θ,z)\), where \((r,θ)\) are the polar coordinates of the point's projection in the \(xy\)-plane \(z\) is the usual \(z\)-coordinate in the Cartesian coordinate system:</li>
      <ImgComp src={"/articlePics/calculus_advanced_pics/1.jpeg"} width="50%"/>
      <li>Conversion between Cylindrical and Cartesian Coordinates:</li>
      <MathStuff>\[{"\\begin{gather} x = r \\cos(\\theta) \\\\ y = r \\sin(\\theta) \\\\ r^2 = x^2 + y^2 \\\\ \\tan(\\theta) = \\frac{y}{z} \\end{gather}"}\]</MathStuff>
      <figure>
        <ImgComp src={"/articlePics/calculus_advanced_pics/7.jpeg"} width="80%"/>
        <figcaption>(a) In cylindrical coordinates, surfaces of the form \(r=c\) are vertical cylinders of radius \(c\), (b) surfaces of the form \(θ=c\) are half-planes at angle \(c\) from the \(x\)-axis, and (c) surfaces of the form \(z=c\) are planes parallel to the \(xy\)-plane.</figcaption>
      </figure>
    </SubList></li>
    <li><b>Spherical Coordinates:</b><SubList>
      <li>In the <b>spherical coordinate system</b>, a point \(P\) in space is represented by the ordered triple \((ρ,θ,φ)\) where \(ρ\) is the distance between \(P\) and the origin, \(θ\) is the same angle used to describe the location in cylindrical coordinates, and \(φ\) is the angle formed by the positive z-axis and line segment \(\scriptstyle{"\\overline{OP}"}\),where \(O\) is the origin and \(0≤φ≤π\).</li>
      <ImgComp src={"/articlePics/calculus_advanced_pics/3.jpeg"} width="50%"/>
      <li>Converting between Spherical and Rectangular Coordinates:</li>
      <MathStuff>\[{"\\begin{gather} x=ρ\\sin(\\phi)\\cos(\\theta) \\\\ y=ρ\\sin(\\phi)\\sin(\\theta) \\\\ z=ρ\\cos(\\phi) \\\\ ρ=x^2+y^2+z^2 \\\\ \\tan(\\theta) = \\frac{y}{x}\\end{gather}"}\]</MathStuff>
      <li>Converting between Spherical and Cylindrical Coordinates:</li>
      <MathStuff>\[{"\\begin{gather} r=ρ\\sin(\\phi) \\\\ z=ρ\\cos(\\phi) \\\\ ρ^2=r^2+z^2 \\end{gather}"}\]</MathStuff>
      <figure>
        <ImgComp src={"/articlePics/calculus_advanced_pics/8.jpeg"} width="80%"/>
        <figcaption>(a) In spherical coordinates, surfaces of the form \(ρ=c\) are spheres of radius \(ρ\), (b) surfaces of the form \(θ=c\) are half-planes at an angle \(θ\) from the \(x\)-axis, and (c) surfaces of the form \(ϕ=c\) are half-cones at an angle \(ϕ\) from the \(z\)-axis.</figcaption>
      </figure>
    </SubList></li>
  </ul>
</div>

{ Vectors() }
{ ConicSectionAndQuadraticSurfaces() }
{ VectorValuedFunction() }
{ DifferentiationOfFunctionsOfSeveralVariables() }
{ MultipleIntegrals() }
{ VectorCalculus() }
{ SecondOrderDifferentialEquations() }

</>