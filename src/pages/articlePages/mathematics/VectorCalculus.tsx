import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { Questions } from "../../articleRelatedStuff/Questions";
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
          <li>Curve \(C\) is a <b>closed curve</b> if there is a parameterization \(\textbf{"{r}"}(t)\) for \({"a \\le t \\le b"}\) of \(C\) such that the parameterization traverses the curve exactly once and \(\textbf{"{r}"}(a) = \textbf{"{r}"}(b)\).</li>
          <li>Curve \(C\) is a <b>simple curve</b> if \(C\) does not cross itself (i.e. \(\textbf{"{r}"}\)) is one-to-one over \((a,b)\). For a simple curve, it is possible that \(\textbf{"{r}"}(a) = \textbf{"{r}"}(b)\), meaning that it is also closed.</li>
          <li>A region \(D\) is a <b>connected region</b> if, for any two points \(P_1\) and \(P_2\) , there is a path from \(P_1\) to \(P_2\) with a trace contained entirely inside \(D\).</li>
          <li>A region \(D\) is a <b>simply connected region</b> if it is connected and has no holes.</li>
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
          <li>A <b>closed curve</b> is one for which there exists a parameterization \(r(t)\), \(a≤t≤b\), such that \(r(a)=r(b)\), and the curve is traversed exactly once.</li>
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
          <li>If we replace the unit tangential vector with unit normal vector \({"\\textbf{N}(t)"}\) and instead compute integral \({"\\int_C \\textbf{F} \\cdot \\textbf{N} ds"}\), we get the <b>flux</b> of \({"\\textbf{F}"}\) across \(C\).</li>
          <li><span className="ownExplanation">The \({"\\textbf{N}(t)"}\) may not the same as the principle unit normal vector.</span> The normal vector is \({"\\textbf{n}(t) = \\langle y\'(t), -x\'(t) \\rangle"}\), and the unit normal vector is:</li>
          <MathStuff>\[{"\\textbf{N}(t) = \\frac{\\langle y\'(t), -x\'(t) \\rangle}{\\sqrt{x\'(t)^2 + y\'(t)^2}}"}\]</MathStuff>
          <li>The flux of \({"\\textbf{F}"}\) across \(C\) is:</li>
          <MathStuff>\[{"\\int_C \\textbf{F} \\cdot \\textbf{N} ds = \\int_a^b \\textbf{F}(\\textbf{r}(t)) \\cdot \\textbf{n}(t) dt"}\]</MathStuff>
        </SubList></li>
        <li>Circulation:<SubList>
          <li>The line integral of vector field \({"\\textbf{F}"}\) along an oriented closed curve is called the <b>circulation</b> of \({"\\textbf{F}"}\) along \(C\). They have their own rotation:</li>
          <MathStuff>\[{"\\oint_C \\textbf{F} \\cdot \\textbf{T} ds"}\]</MathStuff>
        </SubList></li>
        <li>Fundamental theorem for line integrals:<SubList>
          <li>Let \(C\) be a piecewise smooth curve with parameterization \({"\\textbf{r}"}(t)\), \(a≤t≤b\). Let \(f\) be a function of two or three variables with first-order partial derivatives that exist and are continuous on \(C\). Then:</li>
          <MathStuff>\[{"\\int_C ∇f \\cdot dr = f(\\textbf{r}(b)) - f(\\textbf{r}(a))"}\]</MathStuff>
          <li>The fundamental theorem for line integrals has two important consequences:<SubList>
            <li>The first consequence is that if \({"\\textbf{F}"}\) is conservative and \(C\) is a closed curve (i.e. \({"\\textbf{r}"}(b) = {"\\textbf{r}"}(a)\)), then the circulation of \({"\\textbf{F}"}\) along \(C\) is zero.</li>
            <li>The second consequence is that line integrals of conservative vector fields are independent of path - meaning they depend only on the endpoints of the given curve.</li>
          </SubList></li>
          <li>The vector field \({"\\textbf{F}"}\) is independent of path (or path independent) if \({"∫_{C_1} \\textbf{F} \\cdot dr=∫_{C_2} \\textbf{F} \\cdot dr"}\) for any paths \(C_1\) and \(C_2\) in \(D\) with the same initial and terminal points.</li>
          <li>If \({"\\textbf{F}"}\) is a continuous vector field that is independent of path and the domain \(D\) of \({"\\textbf{F}"}\) is open and connected, then \({"\\textbf{F}"}\) is conservative.</li>
        </SubList></li>
        <li><b>Green's Theorem:</b><SubList>
          <li>Let \(D\) be an open, simply connected region with a boundary curve \(C\) that is a piecewise smooth, simple closed curve oriented counterclockwise.</li>
          <li>Let \(F=⟨P,Q⟩\) be a vector field with component functions that have continuous partial derivatives on \(D\). Then:</li>
          <MathStuff>\[{"\\int_C \\textbf{F} \\cdot d\\textbf{r} = \\int_C Pdx + Qdy = \\iint_D (Q_x - P_y) dA"}\]</MathStuff>
          <li>The above is the circulation form, below is the flux form:</li>
          <MathStuff>\[{"\\int_C \\textbf{F} \\cdot \\textbf{N} ds = \\iint_D (P_x + Q_y) dA"}\]</MathStuff>
          <li>The flux form of Green's theorem can also be extended to a region with finitely many holes.</li>
        </SubList></li>
      </ul>
      <ul data-source={45} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
        <li>Divergence:<SubList>
          <li>If \({"\\textbf{F}"}=⟨P,Q,R⟩\) is a vector field in \({"\\mathbb{R}"}^3\) and \(P_x\), \(Q_y\), and \(R_z\) all exist, then the <b>divergence</b> of \({"\\textbf{F}"}\) is defined by:</li>
          <MathStuff>\[{"\\operatorname{div} \\textbf{F} = P_x + Q_y + R_y"}\]</MathStuff>
          <li>Divergence can be written symbolically as the dot product: \({"\\operatorname{div} \\textbf{F} = ∇ \\cdot \\textbf{F}"}\), where:</li>
          <MathStuff>\[∇ = {"\\langle \\frac{∂}{∂x},\\frac{∂}{∂y},\\frac{∂}{∂z} \\rangle"}\]</MathStuff>
          <li>Note this is merely helpful notation, because the dot product of a vector of operators and a vector of functions is not meaningfully defined given our current definition of dot product.</li>
          <li>For two dimensions:</li>
          <MathStuff>\[{"\\operatorname{div} \\textbf{F} = P_x + Q_y =∇ \\cdot \\textbf{F}"}\]</MathStuff>
          <li>If \({"\\textbf{F}"}=⟨P,Q⟩\) is a source-free continuous vector field with differentiable component functions, then  \({"\\operatorname{div} \\textbf{F}"} =0\).</li>
        </SubList></li>
        <li>Curl:<SubList>
          <li>If \({"\\textbf{F}"}=⟨P,Q,R⟩\) is a vector field in \({"\\mathbb{R}"}^3\), then the <b>curl</b> of \({"\\textbf{F}"}\) is defined by:</li>
          <MathStuff>\[{"\\operatorname{curl} \\textbf{F} = (R_y - Q_z) \\textbf{i} + (P_z - R_x) \\textbf{j} + (Q_x - P_y) \\textbf{k}"}\]</MathStuff>
          <li>To help with remembering, we use the notation \(∇ \times F\) to stand for a "determinant" that gives the curl formula:</li>
          <MathStuff>\[
            {"\\begin{vmatrix} \
            \\textbf{i} & \\textbf{k} & \\textbf{k} \\\\  \
            \\frac{∂}{∂x} & \\frac{∂}{∂y} & \\frac{∂}{∂z} \\\\  \
            P & Q & R  \
            \\end{vmatrix}"}
          \]</MathStuff>
          <li>If \({"\\textbf{F}"}=⟨P,Q⟩\):</li>
          <MathStuff>\[{"(Q_x - P_y)\\textbf{k}"}\]</MathStuff>
          <li>The circulation form of Green's theorem is sometimes written as:</li>
          <MathStuff>\[{"\\iint_D \\operatorname{curl} \\textbf{F} \\cdot \\textbf{k} dA"}\]</MathStuff>
          <li>Let \({"\\textbf{F}"}=⟨P,Q,R⟩\) be a vector field in \({"\\mathbb{R}"}^3\) such that the component functions all have continuous second-order partial derivatives. Then, \({"\\operatorname{div} \\operatorname{curl}"}(F)=∇⋅(∇ \times F)=0\).</li>
          <li>If \({"\\textbf{F}"}=⟨P,Q,R⟩\) is conservative, then  \({"\\operatorname{curl} \\textbf{F}=0"}\).</li>
          <li>Let \({"\\textbf{F}"}=⟨P,Q,R⟩\) be a vector field in space on a simply connected domain. If \({"\\operatorname{curl} \\textbf{F}=0"}\), then \({"\\textbf{F}"}\) is conservative.</li>
        </SubList></li>
        <li>Parametric Surfaces:<Questions>
          <li>What's the difference between "regular parameterization" and "smooth"?</li>
        </Questions><SubList>
          <li>A <b>parameterized surface</b> is given by a description of the form:</li>
          <MathStuff>\[{"\\textbf{r}(u,v) = \\langle x(u,v), y(u,v),z(u,v) \\rangle"}\]</MathStuff>
          <li>The <b>parameter domain</b> of the parameterization is the set of points in the uv-plane that can be substituted into \({"\\textbf{r}"}\).</li>
          <li>The surface \({"\\langle R\\cos u, R\\sin u , v\\rangle"}\), (where both \(u\) and \(v\) are in the interval \([-\infty,\infty]\)) describes a cylinder made by \(x^2 + y^2 = R^2\).</li>
          <li>A sphere of radius \(\rho\) centered at the origin is given by:</li>
          <MathStuff>\[{"\\textbf{r}(\\phi, \\theta) = \\langle \\rho \\cos \\theta \\sin \\phi, \\rho \\sin \\theta \\sin \\phi, \\rho \\cos \\phi \\rangle"}\]</MathStuff>
          <li>where \(0 \le \theta \le 2 \pi\) and \(0 \le \phi \pi\).</li>
          <li>A surface Parameterization \({"\\textbf{r}(u,v) = \\langle x(u,v), y(u,v),z(u,v) \\rangle"}\) is a <b>regular parameterization</b> if \({"\\textbf{r}_u \\times \\textbf{r}_v"}\) is not zero for any point \((u,v)\) in the parameter domain.</li>
          <li className="research">A surface parameterization \({"\\textbf{r}(u,v) = \\langle x(u,v), y(u,v),z(u,v) \\rangle"}\) is <b>smooth</b> if vector \({"\\textbf{r}_u \\times \\textbf{r}_v"}\) is not zero for any choice of \(u\) and \(v\) in the parameter domain.</li>
          <li>A surface may also be <b>piecewise smooth</b> if it has smooth faces but also has locations where the directional derivatives do not exist.</li>
        </SubList></li>
        <li>Surface area:<SubList>
          <li>Let \({"\\textbf{r}(u,v) = \\langle x(u,v), y(u,v),z(u,v) \\rangle"}\) with parameter domain \(D\) be a smooth paramete of surface \(S\). Assumse \(S\) is traced out only once as \((u,v)\) varies over \(D\). The <b>surface area</b> of \(S\) is:</li>
          <MathStuff>\[\iint_D \Vert {"\\textbf{t}_u \\times \\textbf{t}_v"} \Vert dA\]</MathStuff>
          <li>where \({"\\textbf{t}_u = \\langle \\frac{∂x}{∂u} \\frac{∂y}{∂u}, \\frac{∂z}{∂u} \\rangle"}\) and \({"\\textbf{t}_v = \\langle \\frac{∂x}{∂v} \\frac{∂y}{∂v}, \\frac{∂z}{∂v} \\rangle"}\) and all partial derivatives are continuous.</li>
        </SubList></li>
        <li>Surface integral:<SubList>
          <li>Let \(S\) be a piecewise smooth surface with parameterization \({"\\textbf{r}(u,v) = \\langle x(u,v), y(u,v),z(u,v) \\rangle"}\) with parameter domain \(D\) and let \(f(x,y,z)\) be a function with a domain that contains \(S\).</li>
          <li>The <b>surface integral of a scalar-valued function</b> of \(f\) over a piecewise smooth surface \(S\) is:</li>
          <MathStuff>\[\begin{"{gather}"} \iint_S f(x,y,z) dS = \\ \iint_D {"f(\\textbf{r}(u,v)) \\Vert \\textbf{t}_u \\times \\textbf{t}_v \\Vert"} dA \end{"{gather}"}\]</MathStuff>
        </SubList></li>
        <li>Orientation of a surface:<SubList>
          <li>If it is possible to choose a unit normal vector \({"\\textbf{N}"}\) at every point \((x,y,z)\) on \(S\) so that \({"\\textbf{N}"}\) varies continuously over \(S\), then \(S\) is "orientable".</li>
          <li>A choice of unit normal vector at each point gives the <b>orientation</b> of a surface \(S\).</li>
          <li>A surface can be oriented if the surface has an "inner" side and an "outer" side, or an "upward" side and a "downward" side.</li>
          <li>Some surfaces are twisted in such a fashion that there is no well-defined notion of an "inner" or "outer" side, like the Möbius strip.</li>
        </SubList></li>
        <li>Surface Integral of a vector field:<SubList>
          <li>Let \({"\\textbf{F}"}\) be a continuous vector field with a domain that contains oriented surface \(S\) with unit normal vector \({"\\textbf{N}"}\). The surface integral of \({"\\textbf{F}"}\) over \(S\) is:</li>
          <MathStuff>\[{"\\iint_S \\textbf{F} \\cdot dS = \\iint_S \\textbf{F} \\cdot \\textbf{N} dS"}\]</MathStuff>
          <li>A surface integral over a vector field is also called a <b>flux integral</b>.</li>
          <MathStuff>\[{"\\iint_S \\textbf{F} \\cdot \\textbf{N} dS = \\iint_D \\textbf{F}(\\textbf{r}(u,v)) \\cdot (\\textbf{t}_u \\times \\textbf{t}_v)"} dA\]</MathStuff>
        </SubList></li>
        <li><b>Stoke's theorem:</b><SubList>
          <li>Let \(S\) be a piecewise smooth oriented surface with a boundary that is a simple closed curve \(C\) with positive orientation. If \({"\\textbf{F}"}\) is a vector field with component functions that have continuous partial derivatives on an open region containing \(S\), then</li>
          <MathStuff>\[{"\\int_C \\textbf{F}\\cdot d\\textbf{r} = \\iint_S \\operatorname{curl} \\textbf{F} \\cdot dS"}\]</MathStuff>
        </SubList></li>
        <li>The <b>divergence theorem</b>:<SubList>
          <li>Let \(S\) be a piecewise, smooth closed surface that encloses solid \(E\) in space.</li>
          <li>Assume that \(S\) is oriented outward, and let \({"\\textbf{F}"}\) be a vector field with continuous partial derivatives on an open region containing \(E\). Then:</li>
          <MathStuff>\[\iiint_E {"\\operatorname{div} \\textbf{F} dV = \\iint_S \\textbf{F} \\cdot dS"}\]</MathStuff>
        </SubList></li>
      </ul>
    </div>
  </>;
}