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
  </ul>
</div>
</>
}
