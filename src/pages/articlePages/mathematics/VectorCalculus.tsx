import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import SubList from "../../articleRelatedStuff/SubList";

export default function VectorCalculus() {
  return <>
    <h2>Vector Calculus</h2>
    <div className="content">
      <ul data-source={45} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
        <li><b>Vector field:</b><SubList>
          <li>A vector field \(\textbf{"{F}"}\) in \(\mathbb{"{R}"}^2\) is an assignment of a two-dimensional vector \(\textbf{"{F}"}(x,y)\) to each point \((x,y)\) of a subset \(D\) of \(\mathbb{"{R}"}^2\). The subset D is the domain of the vector field.</li>
          <li>A vector field \(\textbf{"{F}"}\) in \(\mathbb{"{R}"}^3\) is an assignment of a three-dimensional vector \(\textbf{"{F}"}(x,y,z)\) to each point \((x,y,z)\) of a subset \(D\) of \(\mathbb{"{R}"}^3\). The subset \(D\) is the domain of the vector field.</li>
          <li>A vector field is said to be <b>continuous</b> if its component functions are continuous.</li>
          <li>A vector field \(\textbf{"{F}"}\) is a <b>unit vector field</b> if the magnitude of each vector in the field is 1.</li>
        </SubList></li>
        <li>Rotational and radial fields:<SubList>
          <li>In a <b>radial field</b>, all vectors either point directly toward or directly away from the origin. Example:</li>
          <MathStuff>\[{"\\textbf{F}(x,y) = \\frac{x}{2} \\textbf{i} + \\frac{y}{2} \\textbf{j}"}\]</MathStuff>
          <li>In contrast to <b>radial fields</b>, in a rotational field, the vector at point (x,y) is tangent (not perpendicular) to a circle with radius \(r=\sqrt{"{x^2+y^2}"}\). Example:</li>
          <MathStuff>\[{"\\textbf{F}(x,y) = \\langle y,-x\\rangle"}\]</MathStuff>
        </SubList></li>
        <li><b>Gradient field</b> or <b>conservative field</b>:<SubList>
          <li>A vector field \(\textbf{"{F}"}\) is a <b>gradient field</b> or a <b>conservative field</b> if there exists a scalar function \(f\) such that \(∇f=F\), where:</li>
          <MathStuff>\[{"\\begin{align} ∇f &= f_x (x,y) \\textbf{i}+ f_y (x,y) \\textbf{j} \\\\ \\text{or } ∇f &= f_x (x,y,z) \\textbf{i}+ f_y (x,y,z) \\textbf{j} + f_z(x,y,z)\\textbf{k} \\end{align}"}\]</MathStuff>
          <li><u>Example:</u> If \(f(x,y)=x^2y^2\), then \(\textbf{"{F}"}= \langle 2xy^2, 2x^2y \rangle\).</li>
          <li>If \(\textbf{"{F}"}\) is a conservative field of \(f\), then \(f\) is called a <b>potential function</b> for \(F\).</li>
          <li>Let \(\textbf{"{F}"}\) be a conservative vector field on an open and connected domain and let \(f\) and \(g\) be functions such that \(∇f=\textbf{"{F}"}\) and \(∇g=\textbf{"{F}"}\). Then, there is a constant \(C\) such that \(f=g+C\).</li>
          <li><u>Cross-Partial Property:</u><SubList>
            <li>If \(\textbf{"{F}"}(x,y)=⟨P(x,y),Q(x,y)⟩\) is a conservative vector field in \(\mathbb{"{R}"}^2\), then:</li>
            <MathStuff>\[{"\\frac{∂P}{∂y} = \\frac{∂Q}{∂x} "}\]</MathStuff>
            <li>If \(\textbf{"{F}"}(x,y,z)=⟨P(x,y,z),Q(x,y,z),R(x,y,z)⟩\) is a conservative vector field in \(\mathbb{"{R}"}^3\), then:</li>
            <MathStuff>\[{"\\frac{∂P}{∂y} = \\frac{∂Q}{∂x}, \\ \\frac{∂R}{∂y} = \\frac{∂Q}{∂z}, \\ \\frac{∂P}{∂z} = \\frac{∂R}{∂x} "}\]</MathStuff>
          </SubList></li>
        </SubList></li>
        <li>Line integrals:<SubList>
          <li>A <b>line integral</b> gives us the ability to integrate multivariable functions and vector fields over arbitrary curves in a plane or in space.</li>
          <li>There are two types of line integrals:<SubList>
            <li><b>Scalar line integrals</b> are integrals of a scalar function over a curve in a plane or in space.</li>
            <li><b>Vector line integrals</b> are integrals of a vector field over a curve in a plane or in space.</li>
          </SubList></li>
          <li>Let \(f\) be a function with a domain that includes the smooth curve \(C\) that is parameterized by \(\textbf{"{r}"}(t)=⟨x(t),y(t),z(t)⟩, a≤t≤b\).</li>
          <li>Partition the parameter interval \([a,b]\) into \(n\) subintervals \([t_{"{i-1}"},t_i]\) of equal width for \(1≤i≤n\), where \(t_0=a\) and \(t_n=b\). Let \(t^*_i\) be a value in the \(i\)th interval \([t_{"{i-1}"},t_i]\).</li>
          <li>Let point \(P_i\) be the endpoint of \(\textbf{"{r}"}(t_i)\). The points \(P_i\) divide the curve \(C\) into \(n\) pieces with lengths \(\Delta s_i\).</li>
          <li>Let \(P^*_i\) denote the endpoint of \(\textbf{"{r}"}(t_i^*)\) for \(1 \le i \le n\).</li>
          <li>The scalar line integral of \(f\) along \(C\) is:</li>
          <MathStuff>\[{"\\int_C f(x,y,z) ds = \\lim_{n \\to \\infty} \\sum^n_{i=1} f(P^*_i) \\Delta s_i"}\]</MathStuff>
          <li>If \(C\) is a planar curve, then \(C\) can be represented by the parametric equations \(x=x(t),y=y(t)\), and \(a≤t≤b\). If \(C\) is smooth and \(f(x,y)\) is a function of two variables, then the scalar line integral of \(f\) along \(C\) is defined similarly as:</li>
          <MathStuff>\[{"\\int_C f(x,y) ds = \\lim_{n \\to \\infty} \\sum^n_{i=1} f(P^*_i) \\Delta s_i"}\]</MathStuff>
          <li>If \(f\) is a continuous function on a smooth curve \(C\), then \(\int_C f ds\) always exists, and:</li>
          <MathStuff>\[{"\\int_C f \\ ds = \\int_a^b f(\\textbf{r}(t)) \\Vert \\textbf{r}'(t) \\Vert dt"}\]</MathStuff>
          <li>The second type of line integrals are vector line integrals, in which we integrate along a curve through a vector field.</li>
          <li>Let \({"\\textbf{F}"}\) be a continuous vector field in \({"\\mathbb{R}^3"}\):</li>
          <MathStuff>\[{"\\textbf{F}(x,y,z)=P(x,y,z)\\textbf{i}+Q(x,y,z)\\textbf{j}+R(x,y,z)\\textbf{k}"}\]</MathStuff>
          <li>The work done by the vector field depends on the direction in which the particle is moving. Therefore, we must specify a direction along curve C; such a specified direction is called an <b>orientation of a curve</b>.</li>
          <li>A <b>closed curve</b> is one for which there exists a parameterization \(r(t)\), \(a≤t≤b\),such that \(r(a)=r(b)\), and the curve is traversed exactly once.</li>
          <li>The work done by \({"\\textbf{F}"}\) in moving the particle in the positive direction along \(C\) is:</li>
          <MathStuff>\[{"W = \\int_C \\textbf{F} \\cdot \\textbf{T} ds"}\]</MathStuff>
          <li>Also:</li>
          <MathStuff>\[{"\\int_C \\textbf{F} \\cdot \\textbf{T} ds = \\int_a^b \\textbf{F}(\\textbf{r}(t)) \\cdot \\textbf{r}'(t) dt = \\int_C \\textbf{F} \\cdot d \\textbf{r}"}\]</MathStuff>
          <li>Another notation of \({"\\int_C \\textbf{F} \\cdot d \\textbf{r}"}\) is \({"\\int_C P dx + Q dy + R dz"}\).</li>
          <li>Now, suppose that \(C\) is an oriented curve that is not smooth, but can be written as the union of finitely many smooth curves. In this case, we say that \(C\) is a <b>piecewise smooth curve</b>.</li>
          <li>Properties of vector line integrals:<SubList>
            <li>\({"\\int_C (\\textbf{F} + \\textbf{G}) \\cdot d \\textbf{r} = \\int_C \\textbf{F} \\cdot d \\textbf{r} + \\int_C \\textbf{G} \\cdot d \\textbf{r}"}\)</li>
            <li>\({"\\int_C k \\textbf{F} \\cdot d \\textbf{r} = k \\int_C \\textbf{F} \\cdot d \\textbf{r}"}\), where \(k\) is a constant.</li>
            <li>\({"\\int_{-C} \\textbf{F} \\cdot d \\textbf{r} = - \\int_C \\textbf{F} \\cdot d \\textbf{r}"}\).</li>
          </SubList></li>
        </SubList></li>
        <li>Flux:<SubList>
          <li>The vector line integral is the dot product of the vector field with the unit tangential vector with respect to arc length.</li>
          <li>If we replace the unit tangential vector with unit normal vector \({"\\textbf{N}(t)"}\) and instead compute integral \({"\\int_C \\textbf{F} \\cdot \\textbf{N} ds"}\), we get the <b>flux</b> of \({"\\textbf{F}"}\) across \(C\). Also:</li>
          <MathStuff>\[{"\\int_C \\textbf{F} \\cdot \\textbf{N} ds = \\int_a^b \\textbf{F}(\\textbf{r}(t)) \\cdot \\textbf{n}(t) dt"}\]</MathStuff>
        </SubList></li>
        <li>Circulation:<SubList>
          <li>The line integral of vector field \({"\\textbf{F}"}\) along an oriented closed curve is called the <b>circulation</b> of \({"\\textbf{F}"}\) along \(C\). They have their own rotation:</li>
          <MathStuff>\[{"\\oint_C \\textbf{F} \\cdot \\textbf{T} ds"}\]</MathStuff>
        </SubList></li>
      </ul>
      <ul data-source={45} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
        <li></li>
      </ul>
    </div>
  </>;
}