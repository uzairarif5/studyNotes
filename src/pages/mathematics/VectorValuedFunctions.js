import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export default function VectorValuedFunction(){
  return <>
  <h2>Vector-Valued Function</h2>
  <div className="content">
    <ul data-source={45} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
      <li>Definition of a Vector-Valued Function:<SubList>
        <li>A vector-valued function is a function of the form:</li>
        <MathStuff>\[ \textbf{"{r}"}(t) = f(t) \textbf{"{i}"} + g(t) \textbf{"{j}"} + h(t) \textbf{"{k}"} \]</MathStuff>
        <li>where the component functions \(f\), \(g\), and \(h\), are real-valued functions of the parameter \(t\).</li>
      </SubList></li>
      <li>Plane curve and space curve:<SubList>
        <li>The graph of a vector-valued function of the form \({"\\textbf{r}(t)=f(t)\\textbf{i}+g(t)\\textbf{j}"}\) consists of the set of all  \((t,\textbf{"{r}"}(t))\), and the path it traces is called a <b>plane curve</b>.</li>
        <li>The graph of a vector-valued function of the form \({"\\textbf{r}(t)=f(t)\\textbf{i}+g(t)\\textbf{j}+h(t)\\textbf{k}"}\) consists of the set of all  \((t,\textbf{"{r}"}(t))\), and the path it traces is called a <b>space curve</b>.</li>
        <li>Any representation of a plane curve or space curve using a vector-valued function is called a <b>vector parameterization</b> of the curve.</li>
      </SubList></li>
      <li>Limit of a Vector-Valued Function:<SubList>
        <li>A vector-valued function \(\textbf{"{r}"}\) approaches the limit \(\textbf{"{L}"}\) as \(t\) approaches \(a\), written:</li>
        <MathStuff>\[ \lim_{"{t \\to a} \\textbf{r}(t) = \\textbf{L}"} \]</MathStuff>        
        <li>provided</li>
        <MathStuff>\[ \lim_{"{t \\to a} {\\Vert \\textbf{r}(t) = \\textbf{L} \\Vert = 0}"} \]</MathStuff>
        <li>If \({"\\lim_{t \\to a} f(t) "}\), \({"\\lim_{t \\to a} g(t) "}\) and \({"\\lim_{t \\to a} h(t) "}\) exists:</li>
        <MathStuff>\[ {"\\textbf{r}(t)=\\lim_{t \\to a} f(t)\\textbf{i} + \\lim_{t \\to a} g(t)\\textbf{j} + \\lim_{t \\to a} h(t)\\textbf{k}"}\]</MathStuff>
      </SubList></li>
      <li>Continuity of a Vector-Valued Function:<SubList>
        <li>Let \(f\), \(g\), and \(h\) be functions of \(t\). Then, the vector-valued function \({"\\textbf{r}(t)=f(t)\\textbf{i}+g(t)\\textbf{j}+h(t)\\textbf{k}"}\) is continuous at point \(t=a\) if the following three conditions hold:<SubList opened>
          <li>\(\textbf{"{r}"}(a)\) exists</li>
          <li>\(\lim_{"{t→a}"} \textbf{"{r}"}(t)\) exists</li>
          <li>\(\lim_{"{t→a}"} \textbf{"{r}"}(t)= \textbf{"{r}"}(a)\)</li>
        </SubList></li>
      </SubList></li>
      <li>Derivatives of Vector-Valued Functions:<SubList>
        <li>The <b>derivative</b> of a vector-valued function \(\textbf{"{r}"}(t)\) is:</li>
        <MathStuff>\[ {"\\textbf{r}'(t) = \\lim_{\\Delta t \\to 0} \\frac{\\textbf{r}(t+\\Delta t)-\\textbf{r}(t)}{\\Delta t}"}\]</MathStuff>
        <li>If \(\textbf{"{r}"}'(t)\) exists, then \(\textbf{"{r}"}\) is differentiable at \(t\).</li>
        <li>If \(\textbf{"{r}"}'(t)\) exists for all \(t\) in an open interval \((a,b)\), then \(\textbf{"{r}"}\) is differentiable over the interval \((a,b)\).</li>
        <li>Properties:<SubList>
          <li>If \({"\\textbf{r}(t)=f(t)\\textbf{i}+g(t)\\textbf{j}+h(t)\\textbf{k}"}\), then \({"\\textbf{r}'(t)=f'(t)\\textbf{i}+g'(t)\\textbf{j}+h'(t)\\textbf{k}"}\).</li>
          <li>\({"\\frac{d}{dt} [c \\textbf{r}(t)] = c\\textbf{r}'(t)"}\)</li>
          <li>\({"\\frac{d}{dt} [\\textbf{r}(t) + \\textbf{u}(t)] = \\textbf{r}'(t) + \\textbf{u}'(t)"}\)</li>
          <li>\({"\\frac{d}{dt} [f(t) \\textbf{u}(t)] = f'(t) \\cdot \\textbf{u}(t) + f(t) \\cdot \\textbf{u}'(t)"}\)</li>
          <li>\({"\\frac{d}{dt} [\\textbf{r}(t) \\cdot \\textbf{u}(t)] = \\textbf{r}'(t) \\cdot \\textbf{u}(t) + \\textbf{r}(t) \\cdot \\textbf{u}'(t)"}\)</li>
          <li>\({"\\frac{d}{dt} [\\textbf{r}(t) \\times \\textbf{u}(t)] = \\textbf{r}'(t) \\times \\textbf{u}(t) + \\textbf{r}(t) \\times \\textbf{u}'(t)"}\)</li>
          <li>\({"\\frac{d}{dt} [\\textbf{r}(f(t))] = \\textbf{r}'(f(t)) \\cdot f'(t)"}\)</li>
          <li>If \({"\\textbf{r}(t) \\cdot \\textbf{r}(t) = c"}\), then \({"\\textbf{r}(t) \\cdot \\textbf{r}'(t) = 0"}\)</li>
        </SubList></li>
        <li></li>
      </SubList></li>
      <li>Unit tangent vectors:<SubList>
        <li>The derivative at a point is the slope of the tangent line to the graph at that point.</li>
        <li>The derivative of a vector-valued function provides a tangent vector to the curve represented by the function.</li>
        <li><ImgComp src={require("./vector_valued_functions_pics/1.jpeg")} width="40%" /></li>
        <li>The <b>principal unit tangent vector</b> at \(t\) is defined to be:</li>
        <MathStuff>\[{"\\textbf{T}(t) = \\frac{\\textbf{r}'(t)}{\\Vert \\textbf{r}'(t) \\Vert}"}\]</MathStuff>
        <li>Provided \({"{\\Vert \\textbf{r}'(t) \\Vert} \\ne 0"}\).</li>
      </SubList></li>
    </ul>
    <ul data-source={45} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
      <li>Integrals of vector-valued functions:<SubList>
        <li>Consider \({"\\textbf{r}(t)=f(t)\\textbf{i}+g(t)\\textbf{j}+h(t)\\textbf{k}"}\).</li>
        <li>The <b>indefinite integral</b> of a vector-valued function:</li>
        <MathStuff>\[{"{\\int \\textbf{r}(t) \\ dt= \\left[\\int f(t) \\ dt \\right] \\textbf{i}+  \\left[\\int g(t) \\ dt \\right]\\textbf{j}+  \\left[\\int h(t) \\ dt \\right]\\textbf{k}}"}\]</MathStuff>
        <li>The <b>definite integral</b> of a vector-valued function:</li>
        <MathStuff>\[{"{\\int_a^b \\textbf{r}(t) \\ dt= \\left[\\int_a^b f(t) \\ dt \\right] \\textbf{i}+  \\left[\\int_a^b g(t) \\ dt \\right]\\textbf{j}+  \\left[\\int_a^b h(t) \\ dt \\right]\\textbf{k}}"}\]</MathStuff>
      </SubList></li>
      <li>Arc-Length:<SubList>
        <li>Given a smooth curve \(C\) defined by the function \({"\\textbf{r}(t)=f(t)\\textbf{i}+g(t)\\textbf{j}+h(t)\\textbf{k}"}\), where \(t\) lies within the interval \([a,b]\), the arc length of \(C\) over the interval is:</li>
        <MathStuff>\[{"\\begin{align} s &= \\int^b_a \\sqrt{[f'(t)]^2 + [g'(t)]^2 + [h'(t)]^2} \\ dt \\\\ &= \\int^b_a \\Vert \\textbf{r}'(t) \\Vert \\ dt\\end{align}"}\]</MathStuff>
        <li>The arc-length function:</li>
        <MathStuff>\[{"\\begin{align}s(t) &= \\int^t_a \\sqrt{[f'(u)]^2 + [g'(u)]^2 + [h'(u)]^2} \\ du \\\\ &= \\int^t_a \\Vert \\textbf{r}'(u) \\Vert \\ du\\end{align}"}\]</MathStuff>
        <li>If we differentiate both sides:</li>
        <MathStuff>\[s'(t)=\Vert \textbf{"{r}"}'(t) \Vert\]</MathStuff>
      </SubList></li>
      <li>Arc-length parameterization:<SubList>
        <li>Suppose that we find the arc-length function \(s(t)\) and are able to solve this function for \(t\) as a function of \(s\).</li>
        <li>We can then reparameterize the original function \(\textbf{"{r}"}(t)\) by substituting the expression for \(t\) back into \(\textbf{"{r}"}(t)\). The vector-valued function is now written in terms of the parameter \(s\). Since the variable \(s\) represents the arc length, we call this an <b>arc-length parameterization</b> of the original function \(\textbf{"{r}"}(t)\).</li>
        <TableLI>
          <thead>
            <tr><th>Arc-length parameterization of \(\textbf{"{r}"}(t)=4\cos(t)\textbf{"{i}"} + 4\sin(t)\textbf{"{j}"}\) for \(t \ge 0\)</th></tr>
          </thead>
          <tbody>
            <tr><td>
              First we find the arc-length function:
              \[{`\\begin{align}
                s(t) &= \\int^t_0 \\Vert \\textbf{r}'(u) \\Vert \\ du
                \\\\ &= \\int^t_0 \\Vert \\langle -4\\sin(u), 4\\cos(u)\\rangle \\Vert \\ du
                \\\\ &= \\int^t_0 \\sqrt{(-4\\sin(u))^2 + (4\\cos(u))^2} \\ du
                \\\\ &= \\int^t_0 \\sqrt{16\\sin^2(u) + 16\\cos^2(u)} \\ du
                \\\\ &= \\int^t_0 4 \\ du
                \\\\ &= 4t
              \\end{align}`}\]
              This means \(t=s/4\). Thus, replace \(t\) in \({"\\textbf{r}(t) = 4\\cos(t)\\textbf{i}+4\\sin(t)\\textbf{j}"}\) with \(s/4\), we get:
              \[{"\\textbf{r}(\\frac{s}{4}) = 4\\cos(\\frac{s}{4})\\textbf{i}+4\\sin(\\frac{s}{4})\\textbf{j}"}\]
              Since the original restriciton on \(t\) was \(t \\ge 0\), then the restriction on \(s\) becomes \(s/4 \ge 0\) or \(s \ge 0\).
            </td></tr>
          </tbody>
        </TableLI>
      </SubList></li>
      <li>Curvature:<SubList>
        <li>Let \(C\) be a smooth curve in the plane or in space given by \(\textbf{"{r}"}(s)\), where \(s\) is the arc-length parameter. The curvature \(k\) at \(s\) is:</li>
        <MathStuff>\[k={"{\\left \\Vert \\frac{d\\textbf{T}}{ds} \\right\\Vert}"}\]</MathStuff>
        <li>Recall that \(\textbf{"{T}"}(t)\) represents the unit tangent vector.</li>
        <li>Alternative formula:</li>
        <MathStuff>\[k={" \\frac{\\Vert \\textbf{T}'(t) \\Vert}{\\Vert \\textbf{r}'(t)\\Vert}"}\]</MathStuff>
        <li>If \(C\) is a three-dimensional curve, then the curvature can be given by the formula:</li>
        <MathStuff>\[k={"\\frac{\\Vert \\textbf{r}'(t) \\times \\textbf{r}''(t)\\Vert}{\\Vert \\textbf{r}'(t) \\Vert^3}"}\]</MathStuff>
        <li>If \(C\) is the graph of a function \(y=f(x)\) and both \(y'\) and \(y''\) exist, then the curvature \(k\) at point \((x,y)\) is given by:</li>
        <MathStuff>\[k={"\\frac{|y''|}{\\left[ 1+(y')^2 \\right]^{3/2}}"}\]</MathStuff>
      </SubList></li>
      <li>The normal and binormal Vectors:<SubList>
        <li>Let C be a three-dimensional smooth curve represented by \(\textbf{"{r}"}\) over an open interval \(I\). If \(\textbf{"{T}"}'(t)≠0\), then the <b>principal unit normal vector</b> at \(t\) is defined to be:</li>
        <MathStuff>\[ {"\\textbf{N} = \\frac{\\textbf{T}'(t)}{\\Vert \\textbf{T}'(t) \\Vert}"}\]</MathStuff>
        <li className="ownExplanation">Since the magnitude of vector \(\textbf{"{T}"}(t)\) is always 1, then the path is traces is a circle of radius 1, which means \(\textbf{"{T}"}'(t)\) is orthogonal to \(\textbf{"{T}"}(t)\). This also means \(\textbf{"{T}"}(t)\) and \(\textbf{"{N}"}(t)\) are orthogonal.</li>
        <li>The <b>binormal vector</b> at \(t\) is defined as:</li>
        <MathStuff>\[{"\\textbf{B}(t) = \\textbf{T}(t) \\times \\textbf{N}(t)"}\]</MathStuff>
        <li>The binomial vector is also a unit vector.</li>
        <li>The unit normal vector and the binormal vector form a plane that is perpendicular to the curve at any point on the curve, called the <b>normal plane</b>.</li>
        <li>The plane determined by the vectors \(\textbf{"{T}"}\) and \(\textbf{"{N}"}\) forms the <b>osculating plane</b> of \(C\) at any point \(P\) on the curve.</li>
        <li>These three vectors form a frame of reference in three-dimensional space called the <b>Frenet frame of reference</b> (also called the <b>TNB</b> frame).</li>
        <figure>
          <ImgComp src={require("./vector_valued_functions_pics/2.jpeg")} width="70%" />
          <figcaption>This figure depicts a Frenet frame of reference. At every point \(P\) on a three-dimensional curve, the unit tangent, unit normal, and binormal vectors form a three-dimensional frame of reference.</figcaption>
        </figure>
      </SubList></li>
      <li><b>Osculating circle:</b><SubList>
        <li><b><u>Osculating circle:</u></b> a circle that is tangent to a curve \(C\) at a point \(P\) and that shares the same curvature.</li>
        <li><ImgComp src={require("./vector_valued_functions_pics/3.jpeg")} width="70%" /></li>
        <li>The curvature of the circle is given by \(1/r\). We call \(r\) the radius of curvature of the curve.</li>
      </SubList></li>
    </ul>
  </div>
  </>
}