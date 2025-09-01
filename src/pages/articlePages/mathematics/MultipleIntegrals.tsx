import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export default function MultipleIntegrals(){
return <>
<h2>Multiple Integrals</h2>
<div className="content">
  <ul data-source={45} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li>Double Integrals definition:<SubList>
      <li>The double integral of the function \(f(x,y)\) over the rectangular region \(R\) in the \(xy\)-plane is defined as:</li>
      <MathStuff>\[ {"\\iint\\limits_R f(x,y) dA = \\lim_{m,n \\to \\infty} \\sum^m_{i=1} \\sum^n_{j=1} f(x_i^*, y_j^*) \\Delta A"} \]</MathStuff>
    </SubList></li>
    <li>Properties of double integrals:<SubList>
      <li><u>The sum property:</u></li>
      <MathStuff>\[ {"\\iint\\limits_R [f(x,y) + g(x,y)] dA = \\iint\\limits_R f(x,y) dA + \\iint\\limits_R g(x,y) dA "} \]</MathStuff>
      <li><u>The constant property:</u></li>
      <MathStuff>\[ {"\\iint\\limits_R cf(x,y) dA = c \\iint\\limits_R f(x,y) dA "} \]</MathStuff>
      <li><u>Additivity property:</u> If \(R = S \cup T\) and there is no overlap:</li>
      <MathStuff>\[ {"\\iint\\limits_R f(x,y) dA = \\iint\\limits_S f(x,y) dA + \\iint\\limits_T f(x,y) dA "} \]</MathStuff>
      <li><u>Monotonicity:</u> If \(f(x,y) \ge g(x,y)\) for \((x,y) \in R\):</li>
      <MathStuff>\[ {"\\iint\\limits_R f(x,y) dA \\ge \\iint\\limits_R g(x,y) dA"} \]</MathStuff>
      <li><u>Bounding property:</u> If \(m \le f(x,y) \le M\), then:</li>
      <MathStuff>\[ {"m \\times A(R) \\le \\iint\\limits_R f(x,y) dA \\le M \\times A(R)"} \]</MathStuff>
      <li><u>Separability property:</u> In the case where \(f(x,y)\) can be factored as a product of a function \(g(x)\) of \(x\) only and a function \(h(y)\) of \(y\) only, then over the region \({"R=\\{(x,y)|a \\le x \\le b,c \\le y \\le d \\}"}\), the double integral can be written as:</li>
      <MathStuff>\[ {"\\iint\\limits_R f(x,y) dA = \\left(\\int^b_a g(x) dx\\right) \\left(\\int^b_a h(y) dy\\right)"} \]</MathStuff>
    </SubList></li>
    <li>Iterated integral:<SubList>
      <li>Assume \(a\), \(b\), \(c\), and \(d\) are real numbers. We define an iterated integral for a function \(f(x,y\)) over the rectangular region \(R\) =\([a,b] \times [c,d]\) as:</li>
      <MathStuff>\[ {"\\int_a^b \\int_c^d f(x,y) dy dx = \\int_a^b \\left[ \\int_c^d f(x,y) dy \\right] dx"} \]</MathStuff>
      <MathStuff>\[ {"\\int_c^d \\int_a^b f(x,y) dy dx = \\int_c^d \\left[ \\int_a^b f(x,y) dx \\right] dy"} \]</MathStuff>
    </SubList></li>
    <li>Fubini's theorem:<SubList>
      <li>Suppose that \(f(x,y)\) is a function of two variables that is continuous over a rectangular region \({"R= \\{(x,y) \\in \\mathbb{R}^2|a \\le x \\le b,c \\le y \\le d \\}"}\). Then the double integral of \(f\) over the region equals an iterated integral:</li>
      <MathStuff>\[ {"\\begin{gather} \\iint\\limits_R f(x,y) dA = \\iint\\limits_R f(x,y) dx dx \\\\ = \\int_a^b \\int_c^d f(x,y) dy dx = \\int_c^d \\int_a^b f(x,y) dy dx \\end{gather}"} \]</MathStuff>
    </SubList></li>
    <li>Average value of a function:<SubList>
      <li>The average value of a function of two variables over a region \({"\\mathbb{R}"}\):</li>
      <MathStuff>\[ {"f_\\text{avg} = \\frac{1}{\\text{Area}(R)} \\iint\\limits_R f(x,y) dA"} \]</MathStuff>
    </SubList></li>
    <li>General regions:<SubList>
      <li>A region \(D\) in the \((x,y)\)-plane is of <b>Type I</b> if it lies between two vertical lines and the graphs of two continuous functions \(g_1(x)\) and \(g_2(x)\):</li>
      <MathStuff>\[ {"D= \\{ (x,y)|a \\le x \\le b, g_1(x) \\le y \\le g_2(x) \\}"} \]</MathStuff>
      <ImgComp src={"/articlePics/multiple_integrals_pics/1.webp"} width="70%" />
      <li>A region \(D\) in the xy plane is of <b>Type II</b> if it lies between two horizontal lines and the graphs of two continuous functions \(h_1(y)\) and \(h_2(y)\):</li>
      <MathStuff>\[ {"D= \\{ (x,y)|c \\le y \\le d,h_1(y) \\le x \\le h_2(y) \\}"} \]</MathStuff>
      <ImgComp src={"/articlePics/multiple_integrals_pics/2.webp"} width="70%" />
    </SubList></li>
    <li>Double integrals over nonrectangular regions:<SubList>
      <li>Suppose \(f(x,y)\) is deinfed on a general planar bounded region \(D\) which is a subset of \(R\).</li>
      <li>In order to develop double integrals of \(f\) over \(D\), we extend the definition of the function to include all points on the rectangular region \(R\) by defined a new function \(g(x,y)\):</li>
      <MathStuff>\[ {"g(x,y) = \\begin{cases} f(x,y) & \\text{if } (x,y) \\text{ is in } D\\\\ 0 & \\text{if } (x,y) \\text{ is in } R \\text{ but not in } D\\end{cases}"} \]</MathStuff>
      <ImgComp src={"/articlePics/multiple_integrals_pics/3.webp"} />
      <MathStuff>\[ {"\\iint\\limits_D f(x,y) dA = \\iint\\limits_R g(x,y) dA"} \]</MathStuff>
    </SubList></li>
    <li>Fubini's Theorem (Strong Form):<SubList>
      <li>For a function \(f(x,y)\) that is continuous on a region \(D\) of Type I, we have:</li>
      <MathStuff>\[ {"\\iint\\limits_D f(x,y) dydx = \\int^b_a \\left[ \\int_{g_1(x)}^{g_2(x)} f(x,y) dy \\right] dx"} \]</MathStuff>
      <li>Similarly for a function \(f(x, y)\) that is continuous on a region \(D\) of type II we have:</li>
      <MathStuff>\[ {"\\iint\\limits_D f(x,y) dxdy = \\int^d_c \\left[ \\int_{h_1(x)}^{h_2(x)} f(x,y) dx \\right]dy"} \]</MathStuff>
    </SubList></li>
    <li>Improper double integral:<SubList>
      <li>An <b>improper double integral</b> is an integeral  where either \(D\) is an unbounded region or \(f\) is an unbounded function.</li>
      <li><u>Fubini's theorem for improper integrals:</u> If \(D\) is a bounded rectangle or simple region in the plane defined by \({"\\{(x,y):a≤x≤b,g(x)≤y≤h(x) \\}"}\) and also by \({"\\{ (x,y):c≤y≤d,j(y)≤x≤k(y) \\}"}\) and \(f\) is a nonnegative function on \(D\) with finitely many discontinuities in the interior of \(D\), then:</li>
      <MathStuff>\[ {"\\begin{align} \\iint\\limits_D f(x,y) dA &= \\int_{x=a}^{x=b} \\int_{y=g(x)}^{y=h(x)} f(x,y) dydx \\\\ &= \\int_{y=c}^{y=d} \\int_{x=j(y)}^{x=k(y)} f(x,y) dydx \\end{align}"} \]</MathStuff>
      <li>If \(R\) is an unbounded rectangle such as  \({"R=\\{(x,y):a≤x<∞,c≤y<∞\\}"}\), then when the limit exists, we have:</li>
      <MathStuff>\[ {"\\begin{align} \\iint\\limits_D f(x,y) dA &= \\lim_{(b,d) \\to (\\infty,\\infty)} \\int_a^b \\left( \\int_c^d f(x,y) dy \\right) dx \\\\ &= \\lim_{(b,d) \\to (\\infty,\\infty)} \\int_c^d \\left( \\int_a^b f(x,y) dx \\right) dy \\end{align}"} \]</MathStuff>
    </SubList></li>
    <li>Double integrals in polar coordinates:<SubList>
      <li>The double integral of the function \(f(r,θ)\) over the polar rectangular region \(R\) in the \(rθ\)-plane is defined as:</li>
      <MathStuff>{"\\begin{align} \\iint\\limits_R f(r, \\theta) dA &= \\lim_{m,n \\to \\infty} \\sum_{i=1}^m\\sum_{j=1}^n f(r^*_{ij}, \\theta^*_{ij}) \\Delta A \\\\ &= \\lim_{m,n \\to \\infty} \\sum_{i=1}^m\\sum_{j=1}^n f(r^*_{ij}, \\theta^*_{ij}) r^*_{ij} \\Delta r \\Delta \\theta\\end{align}"}</MathStuff>
      <li>The double integral over a polar rectangular region can be expressed as an iterated integral in polar coordinates:</li>
      <MathStuff>{"\\iint\\limits_R f(r,\\theta) r \\ dr d\\theta = \\int_{\\theta = \\alpha}^{\\theta = \\beta} \\int_{r=a}^{r=b} f(r,\\theta) r \\ dr d\\theta"}</MathStuff>
      <li>If \(f\) is given in terms of \(x\) and \(y\), then:</li>
      <MathStuff>{"\\iint\\limits_R f(x,y) dA = \\iint\\limits_R f(r \\cos \\theta, r \\sin \\theta) r \\ dr d\\theta"}</MathStuff>
    </SubList></li>
    <li>General polar regions of integration:<SubList>
      <li>We describe a general polar region as \({"D = \\{(r, \\theta) | \\alpha \\le \\theta \\le \\beta, h_1(\\theta) \\le r \\le h_2(\\theta)\\}"}\):</li>
      <ImgComp src={"/articlePics/multiple_integrals_pics/4.webp"}/>
      <li>If \(f(r,θ)\) is continuous on a general polar region \(D\) as described above, then:</li>
      <MathStuff>{"\\iint\\limits_D f(r, \\theta) r \\ dr d \\theta = \\int_{\\theta=\\alpha}^{\\theta=\\beta} \\int_{r=h_1(\\theta)}^{r=h_2(\\theta)} f(r, \\theta) r \\ dr d \\theta"}</MathStuff>
    </SubList></li>
    <li>Area formula:<SubList>
      <MathStuff>{"\\text{Area } A = \\int_\\alpha^\\beta \\int_{h_1(\\theta)}^{h_2(\\theta)} 1 r \\ dr d\\theta"}</MathStuff>
    </SubList></li>
  </ul>
  <ul data-source={45} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <li><b>Triple integrals:</b><SubList>
      <li>The <b>triple integral</b> of a function \(f(x,y,z)\) over a rectangular box \(B\) is defined as:</li>
       <MathStuff>\[ {"\\lim_{l,m,n \\to \\infty} \\sum^l_{i=1} \\sum^m_{j=1} \\sum^n_{k=1} f(x^*_{ijk}, y^*_{ijk},z^*_{ijk}) \\Delta x \\Delta y \\Delta z = \\iiint\\limits_B f(x,y,z) dV"} \]</MathStuff>
      <li>For each \(i\), \(j\), and \(k\), the point \(({"x^*_{ijk}, y^*_{ijk},z^*_{ijk}"})\) is a sample point in the sub-box \({"B_{ijk}"}\).</li>
      <li>Fubini's Theorem for Triple Integrals:<SubList opened>
        <li>If \(f(x,y,z)\) is continuous on a rectangular box \(B=[a,b] \times [c,d] \times [e,f]\), then</li>
       <MathStuff>\[{"\\iiint\\limits_B f(x,y,z) dV = \\int_e^f \\int_c^d \\int_a^b f(x,y,z) dx \\ dy \\ dz"}\]</MathStuff>
        <li>This integral is also equal to any of the other five possible orderings for the iterated triple integral.</li>
      </SubList></li>
      <li>We can find the volume of a general solid bounded region \(E\) like this:</li>
      <MathStuff>\[ \iiint\limits_E 1 dv \]</MathStuff>
    </SubList></li>
    <li>Triple Integral over a General Region:<SubList>
      <li>The triple integral of a continuous function \(f(x,y,z)\) over a general three-dimensional region:</li>
      <MathStuff>\[{"E= \\{ (x,y,z) | (x,y) \\in D, u_1 (x,y) \\le z \\le u_2 (x,y) \\}"}\]</MathStuff>
      <li>in \({"\\mathbb{R}^3"}\), where \(D\) is the projection of \(E\) onto the \(xz\)-plane, is:</li>
      <MathStuff>\[{"\\iint\\limits_E f(x,y,z) dV = \\iint\\limits_D \\left[ \\int_{u_1 (x,y)}^{u_2 (x,y)} f(x,y,z) dz \\right] dA"}\]</MathStuff>
      <li>The region \(D\) in any of the planes may be of Type I or Type II.</li>
      <li>If \(D\) in the \(xy\)-plane is of Type I:</li>
      <MathStuff>\[{"E= \\{ (x,y,z) | a \\le x \\le b, g_1 (x) \\le y \\le g_2(x), u_1 (x,y) \\le z \\le u_2 (x,y) \\}"}\]</MathStuff>
      <li>Then the triple integral becomes:</li>
      <MathStuff>\[{"\\iint\\limits_E f(x,y,z) dV = \\int_a^b \\int_{g_1(x)}^{g_2(x)} \\int_{u_1 (x,y)}^{u_2 (x,y)} f(x,y,z) dz \\ dy \\ dx"}\]</MathStuff>
      <li>If \(D\) in the \(xy\)-plane is of Type II, then:</li>
      <MathStuff>\[{"E= \\{ (x,y,z) | c \\le y \\le d, h_1 (y) \\le x \\le h_2(y), u_1 (x,y) \\le z \\le u_2 (x,y) \\}"}\]</MathStuff>
      <li>Then the triple integral becomes:</li>
      <MathStuff>\[{"\\iint\\limits_E f(x,y,z) dV = \\int_{y=c}^{y=d} \\int_{x=h_1(x)}^{x=h_2(x)} \\int_{z=u_1 (x,y)}^{z=u_2 (x,y)} f(x,y,z) dz \\ dx \\ dy"}\]</MathStuff>
    </SubList></li>
    <li>Average value of a function of three variables:<SubList>
      <li>If \(f(x,y,z)\) is integrable over a solid bounded region \(E\) with positive volume \(V(E)\), then the average value of the function is:</li>
      <MathStuff>\[{"f_{ave} = \\frac{1}{V(E)} \\iiint\\limits_E f(x,y,z) dV"}\]</MathStuff>
      <li>The volume is:</li>
      <MathStuff>\[{"V(E)=\\iiint\\limits_E 1 \\ dV"}\]</MathStuff>
    </SubList></li>
    <li>Triple integral in cylindrical coordinates:<SubList>
      <li>Consider the cylindrical box (expressed in cylindrical coordinates):</li>
      <MathStuff>\[{"B={(r,θ,z)|a≤r≤b,α≤θ≤β,c≤z≤d}"}\]</MathStuff>
      <li>If the function \(f(r,θ,z)\) is continuous on \(B\) and if \({"(r^*_{ijk},θ^*_{ijk},z^*_{ijk})"}\) is any sample point in the cylindrical subbox \({"B_{ijk} = [r_{i-1},r_i] \\times [θ_{j-1},θ_j] \\times [z_{k-1},z_k]"}\), then we can define the triple integral in cylindrical coordinates as the limit of a triple Riemann sum, provided the following limit exists:</li>
      <MathStuff>\[{"\\lim_{l,m,n→∞} \\sum_{i=1}^l \\sum_{j=1}^m \\sum _{k=1}^n f(r^*_{ijk},θ^*_{ijk},z^*_{ijk}) r^*_{ijk} \\Delta r \\Delta θ \\Delta z"}\]</MathStuff>
      <li>If \(g(x,y,z)\) is the function in rectangular coordinates, and the box \(B\) is expressed in rectangular coordinates, then:</li>
      <MathStuff>\[{"\\begin{align} \\iiint\\limits_B g(x,y,z) dV &= \\iiint\\limits_B g(r \\cos \\theta,r \\sin \\theta,z) r dr d\\theta dz \\\\ &= \\iiint\\limits_B f(r,\\theta,z) r dr d \\theta dz \\end{align}"}\]</MathStuff>
      <li>Fubini's theorem in cylindrical coordinates:<SubList>
        <li>Suppose that \(g(x,y,z)\) is continuous on a portion of a circular cylinder \(B\), which when described in cylindrical coordinates looks like \({"B=\\{ (r,θ,z)|a≤r≤b,α≤θ≤β,c≤z≤d \\}"}\). Then \(g(x,y,z)=g(r \cos θ,r \sinθ,z)=f(r,θ,z)\) and:</li>
        <MathStuff>\[{"\\iiint\\limits_B g(x,y,z) dV = \\int_c^d \\int_\\alpha^\\beta \\int_a^b f(r,\\theta,z) r dr d \\theta dz "}\]</MathStuff>
      </SubList></li>
      <li>If \({"D= \\{(r,θ)|g_1(θ)≤r≤g_2(θ),α≤θ≤β \\}"}\) is the proection of \({"E=\\{ (r,θ,z)|(r,θ)∈D,u_1(r,θ)≤z≤u_2(r,θ)\\}"}\) onto the \(r \theta\)-plane, then we have:</li>
      <MathStuff>\[{"\\iiint\\limits_E f(r,\\theta,z) r dr d \\theta dz = \\int_{\\theta=\\alpha}^{\\theta=\\beta} \\int_{r=g_1(\\theta)}^{r=g_2(\\theta)} \\int_{z=u_1(r,\\theta)}^{z=u_2(r,\\theta)} f(r,\\theta,z) r dz dr d \\theta"}\]</MathStuff>
    </SubList></li>
    <li>Triple integral in spherical coordinates:<SubList>
      <li>The triple integral in spherical coordinates is the limit of a triple Riemann sum:</li>
      <MathStuff>{"\\lim_{l,m,n→∞}\\sum_{i=1}^l \\sum_{j=1}^m \\sum _{k=1}^n f(ρ^*_{ijk},θ^*_{ijk},φ^*_{ijk})(ρ^*_{ijk})^2 \\sin(φ^*_{ijk}) \\Delta ρ \\Delta θ \\Delta φ"}</MathStuff>
      <li>Fubini's theorem for spherical coordinates:<SubList>
        <li>If \(f(ρ,θ,φ)\) is continuous on a spherical solid box \(B=[a,b] \times [α,β] \times [γ,ψ]\), then:</li>
        <MathStuff>{"\\iiint\\limits_B f(ρ,θ,φ)ρ^2 \\sin(φ) \\Delta ρ \\Delta θ \\Delta φ = \\int_{\\theta=\\alpha}^{\\theta=\\beta} \\int_{φ=γ}^{φ=ψ} \\int_{ρ=a}^{ρ=b} f(ρ,θ,φ)ρ^2 \\sin(φ) \\Delta ρ \\Delta θ \\Delta φ"}</MathStuff>
        <li>This iterated integral may be replaced by other iterated integrals by integrating with respect to the three variables in other orders.</li>
      </SubList></li>
      <li>If \({"D=\\{(ρ,θ)|g_1(θ)≤ρ≤g_2(θ),α≤θ≤β\\}"}\) is the projection of \({"E=\\{(ρ,θ,φ)|(ρ,θ)∈D,u_1(ρ,θ)≤φ≤u_2(ρ,θ)\\}"}\) onto the \(ρθ\)-plane, then we have:</li>
      <MathStuff>{"\\iiint\\limits_E f(ρ,θ,φ) dV = \\int_{\\alpha}^{\\beta} \\int_{g_1(θ)}^{g_2(θ)} \\int_{u_1(ρ,θ)}^{u_2(ρ,θ)} f(ρ,θ,φ)ρ^2 \\sin(φ) dφ dρ dθ "}</MathStuff>
    </SubList></li>
    <li><b>Planar Transformations:</b><SubList>
      <li>A <b>planar transformation</b> \(T\) is a function that transforms a region \(G\) in one plane into a region \(R\) in another plane by a change of variables. Both \(G\) and \(R\) are subsets of \({"\\mathbb{R}^2"}\).</li>
      <li>The region \(G\) below in the \(uv\)-plane transforms into region \(R\) in the \(xy\)-plane by the change of variables \(x=g(u,v)\) and \(y=h(u,v)\).</li>
      <ImgComp src={"/articlePics/multiple_integrals_pics/5.webp"} width="70%" />
      <li>A transformation \(T:G \rightarrow R\) defined as \(T(u,v)=(x,y)\) is said to be a <b>one-to-one</b> transformation if no two points map to the same image point.</li>
      <li>If \(T\) maps \(G\) to \(R\), then \(G\) is the domain, and \(R\) is the range, also known as the <b>image</b> of \(G\) under the transformation \(T\).</li>
    </SubList></li>
    <li><b>Jacobian:</b><SubList>
      <li>The <b>Jacobian</b> of the \(C^1\) transformation \(T(u,v)=(g(u,v),h(u,v))\) is denoted by \(J(u,v)\) and is defined by the \(2 \times 2\) determinant:</li>
      <MathStuff>\[{"\\begin{align} J(u,v) &= \\left| \\frac{\\partial (x,y)}{\\partial (u, v)} \\right| = \\begin{vmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial y}{\\partial u} \\\\ \\frac{\\partial x}{\\partial v} & \\frac{\\partial y}{\\partial v} \\end{vmatrix} \\\\ &= \\left(\\frac{\\partial x}{\\partial u}\\frac{\\partial y}{\\partial v} - \\frac{\\partial x}{\\partial v}\\frac{\\partial y}{\\partial u} \\right) \\end{align}"}\]</MathStuff>
    </SubList></li>
    <li>Change of Variables for double and triple integrals:<SubList>
      <li>Let \(T(u,v)=(x,y)\) where \(x=g(u,v)\) and \(y=h(u,v)\) be a one-to-one \(C^1\) transformation, with a nonzero Jacobian on the interior of the region \(S\) in the \(uv\)-plane; it maps \(S\) into the region \(R\) in the \(xy\)-plane. If \(f\) is continuous on \(R\) then:</li>
      <MathStuff>\[{"\\iint\\limits_R f(x,y) dA = \\iint\\limits_S f(g(u,v),h(u,v)) \\left| \\frac{\\partial (x,y)}{\\partial (u,v)} \\right| dudv"}\]</MathStuff>
      <li>Let \(T(u,v,w)=(x,y,z)\) where \(x=g(u,v,w)\) and \(y=h(u,v,w)\) be a one-to-one \(C^1\) transformation, with a nonzero Jacobian that maps \(G\) in the \(uvw\)-space into the region \(R\) in the \(xyz\)-space. If \(F\) is continuous on \(R\) then:</li>
      <MathStuff>\[{"\\iint\\limits_R F(x,y,z) dV = \\iint\\limits_G f(g(u,v,w),h(u,v,w),k(u,v,w)) \\left| \\frac{\\partial (x,y,z)}{\\partial (u,v,w)} \\right| dudvdw"}\]</MathStuff>
    </SubList></li>
  </ul>
</div>
</>
}
