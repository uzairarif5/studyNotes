import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export default function DifferentiationOfFunctionsOfSeveralVariables(){
  return <>
	  <h2>Differentiation Of Functions Of Several Variables</h2>
    <div className="content">
		  <ul data-source={45} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
        <li>Functions of Two Variables:<SubList>
          <li>A function of two variables \(z=f(x,y)\) maps each ordered pair \((x,y)\) in a subset \(D\) of the real plane \(\mathbb{"{R}"}^2\) to a unique real number \(z\).</li>
          <li>The set \(D\) is called the <b>domain</b> of the function. The <b>range</b> of \(f\) is the set of all real numbers \(z\) that has at least one ordered pair \((x,y)∈D\) such that \(f(x,y)=z\).</li>
				  <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/1.jpeg"} width="60%" />
          <li>The function \(z=f(x,y)\) has two independent variables (\(x\) and \(y\)) and one dependent variable \(z\).</li>
          <li> The graph of a function \(z=(x,y)\) of two variables is called a <b>surface</b>.</li>
        </SubList></li>
        <li>Level Curves and vertical traces:<SubList>
          <li>Given a function \(f(x,y)\) and a number \(c\) in the range of \(f\), a <b>level curve</b> of a function of two variables for the value \(c\) is defined to be the set of points satisfying the equation \(f(x,y)=c\).</li>
          <li>A level curve of a function of two variables \(f(x,y)\) is completely analogous to a contour line on a topographical map.</li>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/2.jpeg"} width="60%" />
            <figcaption>Level curves of the function \(g(x,y)= \sqrt{"{9-x^2-y^2}"}\), using different values of \(c\).</figcaption>
          </figure></li>
          <li>A <b>vertical trace</b> of the function can be:<SubList opened>
            <li>either the set of points that solves the equation \(f(a,y)=z\) for a given constant \(x=a\).</li>
            <li>or \(f(x,b)=z\) for a given constant \(y=b\).</li>
          </SubList></li>
          <li>Level curves are always graphed in the \(xy\)-plane, and, vertical traces are graphed in the  \(xz\)- or \(yz\)-planes.</li>
          <li>Given a function \(f(x,y,z)\) and a number \(c\) in the range of \(f\), a <b>level surface</b> of a function of three variables is defined to be the set of points satisfying the equation \(f(x,y,z)=c\).</li>
        </SubList></li>
        <li>Limits:<SubList>
          <li>Consider a point \((a,b) \in \mathbb{"{R}"}^2\). A \(\delta\) <b>disk</b> centered at point \((a,b)\) is defiend to be an open disk of radius \(\delta\) centered at point \((a,b)\):</li>
          <MathStuff>\[ {"\\{ (x,y) \\in \\mathbb{R}^2 | (x-a)^2 + (y-b)^2\\lt \\delta^2 \\}"} \]</MathStuff>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/3.jpeg"} width="60%" />
            <figcaption>A disk centered around point \((2,1)\).</figcaption>  
          </figure></li>
          <li>Let \(f\) be a function of two variables, \(x\) and \(y\). The limit of \(f(x,y)\) as \((x,y)\) approaches \((a,b)\) is \(L\), written, \({"\\lim_{(x,y) \\to (a,b)} f(x,y)=L"}\), if for each \(\epsilon \gt 0\), there exists a small enough \(\delta \gt 0\) such that for all points \((x,y)\) in a \(\delta\) disk around \((a,b)\), except possibly for \((a,b)\) itself, the value of \(f(x,y)\) is no more than \(\epsilon\) away from \(L\).</li>
          <li>For any \(\epsilon \gt 0\), there exists a number \(\delta \gt 0\) such that:</li>
          <MathStuff>\[\begin{"{gather}"} |f(x,y)-L| \lt \epsilon \text{"{ whenever}"} \\  0 \lt \sqrt{"{(x-a)^2 + (y-b)^2}"} \lt \delta \end{"{gather}"}\]</MathStuff>
          <li><ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/4.jpeg"} width="80%" /></li>
          <li>Limit laws:<SubList>
            <li><b><u>Constant law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} c = c"}\)</li>
            <li><b><u>Identity laws:</u></b></li>
            <MathStuff>\[{"\\begin{gather} \\lim_{(x,y) \\to (a,b)} x = a \\\\ \\lim_{(x,y) \\to (a,b)} y = a \\end{gather}"}\]</MathStuff>
            <li><b><u>Sum law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} (f(x,y) + g(x,y)) = L + M"}\)</li>
            <li><b><u>Constant Multiple law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} (c f(x,y)) = cL"}\)</li>
            <li><b><u>Product law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} (f(x,y)g(x,y)) = LM"}\)</li>
            <li><b><u>Qoutient law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} \\frac{f(x,y)}{g(x,y)} = \\frac{L}{M}"}\)</li>
            <li><b><u>Power law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} f(x,y)^n = L^n"}\) for any positive integer \(n\).</li>
            <li><b><u>Root law:</u></b> \({"\\lim_{(x,y) \\to (a,b)} \\sqrt[n]{f(x,y)} = \\sqrt[n]{L}"}\) for all \(L\) if \(n\) is odd and positive, and for \(L \ge 0\) if \(n\) is even and positive procided that \(f(x,y) \\ge 0\) for all \((a,y) \ne (a,b)\) is the neighborhood of \((a,b)\).</li>
          </SubList></li>
        </SubList></li>
        <li>Interior points and boundary points:<SubList>
          <li>A point \(P_0\) is called <b>interior point</b> of \(S\) if there is a \(\delta\) disk centered around \(P_0\) contained completely in \(S\).</li>
          <li>A point \(P_0\) is called a <b>boundary point</b> of \(S\) if every \(\Delta \) disk centered around \(P_0\) contains points both inside and outside \(S\).</li>
          <figure>
            <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/5.jpeg"} width="60%" />
            <figcaption>\((-1,1)\) is an interior point and \((2,3)\) is a boundary point.</figcaption>
          </figure>
          <li>\(S\) is called an <b>open set</b> if every point of \(S\) is an interior point.</li>
          <li>\(S\) is called a <b>closed set</b> if it contains all its boundary points.</li>
          <li>An open set \(S\) is a <b>connected set</b> if it cannot be represented as the union of two or more disjoint, nonempty open subsets.</li>
          <li>A set \(S\) is a <b>region</b> if it is open, connected, and nonempty.</li>
        </SubList></li>
        <li>Continuity:<SubList>
          <li>A function \(f(x,y)\) is continuous at a point \((a,b)\) in its domain if the following conditions are satisfied:<SubList opened>
            <li>\(f(a,b)\) exists.</li>
            <li>\(\lim_{"{(x,y) \\to (a,b)}"} f(x,y)\) exists.</li>
            <li>\(\lim_{"{(x,y) \\to (a,b)}"} f(x,y) = f(a,b)\).</li>
          </SubList></li>
          <li>If \(f(x,y)\) is continuous at \((a, b)\), and \(g(x,y)\) is continuous at \((a,b)\), then \(f(x,y)+g(x,y)\) is continuous at \((a,b)\).</li>
          <li>If \(g(x)\) is continuous at \(x_0\) and \(h(y)\) is continuous at \(y_0\), then \(f(x,y)=g(x)h(y)\) is continuous at \((x_0, y_0)\).</li>
          <li>Let \(g\) be a function of two variables from a domain  \(D⊆ \mathbb{"{R}"}^2\) to a range \(R ⊆ \mathbb{"{R}"}\). Suppose \(g\) is continuous at some point \((x_0,y_0) ∈ D\). Let \(f\) be a function that maps \(\mathbb{"{R}"}\) to \(\mathbb{"{R}"}\) such that \(g(x_0,y_0)\) is in the domain of \(f\). Last, assume \(f\) is continuous at \(g(x_0,y_0)\). Then \(f∘g\) is continuous at \((x_0,y_0)\).</li>
        </SubList></li>
        <li><b>Partial derivatives:</b><SubList>
          <li>Let \(f(x,y)\) be a function of two variables. Then the <b>partial derivative</b> of \(f\) with respect to \(x\), written as \(∂f/∂x\), or \(f_x\), is defined as:</li>
          <MathStuff>\[{"\\frac{∂f}{∂x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x,y)}{h}"}\]</MathStuff>
          <li>The \(∂\) is called "partial", so \(∂f/∂x\) is spoken as the "partial of \(f\) with respect to \(x\)".</li>
          <li>When calculating partial derivatives is to treat all independent variables, other than the variable with respect to which we are differentiating, as constants.</li>
          <li>Consider a secant line whose slope is defined like this:</li>
          <MathStuff>\[\frac{"{f(x+h, y) - f(x,y)}{h}"}\]</MathStuff>
          <li>\(h\) is some positive real number and \(y\) is some set to some constant.</li>
          <li>This slope represents an average rate of change of \(f\) as we travel parallel to the \(x\)-axis. If \(h\) approaches zero, the slope of the secant line approaches the slope of the tangent line.</li>
          <li>Let \(f(x,y,z)\) be a function of three variables. Then, the partial derivative of \(f\) with respect to \(x\), written as \(∂f/∂x\), or \(f_x\), is defined to be:</li>
          <MathStuff>\[{"\\frac{∂f}{∂x} = \\lim_{h \\to 0} \\frac{f(x+h, y,z) - f(x,y,z)}{h}"}\]</MathStuff>
        </SubList></li>
        <li><b>Tangent Planes:</b><SubList>
          <li>Let \(S\) be a surface defined by a function \(z=f(x,y)\), and let \(P_0 = (x_0, y_0)\) be a point in the domain of \(f\).</li>
          <li>Let the set \(C\) be all the curves passing through \(P_0\) and lying entirely in \(S\). If the tangent lines to all curves in \(C\) at \(P_0\) lie in the same plane, then this plane is called the <b>tangent plane</b>.</li>
          <li>The equation of a tangent plane:</li>
          <MathStuff>\[z = f(x_0 ,y_0) + f_x(x_0 ,y_0) (x-x_0) + f_y(x_0 ,y_0) (y - y_0)\]</MathStuff>
          <li><b><u>Linear approximation:</u></b> if there is a point \((x_0,y_0)\) at which the precise value of \(f(x,y)\) is known, then for values of \((x,y)\) reasonably close to \((x_0,y_0)\), the linear approximation (i.e., tangent plane) yields a value that is also reasonably close to the exact value of \(f(x,y)\).</li>
        </SubList></li>
        <li>Differentiability:<SubList>
          <li>A function \(f(x,y)\) is differentiable at a point \(P(x_0,y_0)\) if, for all points \((x,y)\) in a \(δ\) disk around  \(P\), we can write:</li>
          <MathStuff>\[{"\\lim_{(x,y) \\to (x_0,y_0)} \\frac{f(x,y) - (f_x(x_0 ,y_0) (x-x_0) + f_y(x_0 ,y_0) (y - y_0))}{\\sqrt{(x-x_0)^2 + (y-y_0)^2}}"}=0\]</MathStuff>
          <li>If \(f(x,y)\) is differentiable at \((x_0,y_0)\), then \(f(x,y)\) is continuous at \((x_0,y_0)\).</li>
          <li>If \(f(x,y)\), \(f_x(x,y)\), and \(f_y(x,y)\) all exist in a neighborhood of \((x_0,y_0)\) and are continuous at \((x_0,y_0)\), then \(f(x,y)\) is differentiable there.</li>
        </SubList></li>
        <li><b>Differentials:</b><SubList>
          <li>Let \(z=f(x,y)\) be a function of two variables with \((x_0,y_0)\) in the domain of \(f\), and let \(\Delta x\) and \(\Delta y\) be chosen so that \((x_0+\Delta x,y_0+\Delta y)\) is also in the domain of \(f\).</li>
          <li>If \(f\) is differentiable at the point \((x_0,y_0)\), then the differentials \(dx\) and \(dy\) are defined as \(dx=\Delta x\) and \(dy=\Delta y\).</li>
          <li>The differential \(dz\), also called the total differential of \(z=f(x,y)\) at \((x_0,y_0)\), is defined as:</li>
          <MathStuff>\[dz=f_x(x_0,y_0)dx+f_y(x_0,y_0)dy\]</MathStuff>
          <li>Let \(\Delta z=f(x+\Delta x,y+\Delta y) - f(x,y)\). We use \(dz\) to approximate \(\Delta z\):</li>
          <MathStuff>\[\Delta z≈dz=f_x(x_0,y_0) dx+ f_y(x_0,y_0)dy\]</MathStuff>
          <li>The differential is used to approximate the change in the function \(z=f(x_0,y_0)\) at the point \((x_0,y_0)\) for given values of \(\Delta x\) and \(\Delta y\).</li>
          <li>Since \(\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)\), this can be used further to approximate \(f(x+\Delta x,y+\Delta y)\):</li>
          <MathStuff>\[{"\\begin{align} f(x+\\Delta x,y+\\Delta y) &= f(x,y)+\\Delta z \\\\ &≈f(x,y)+f_x(x_0,y_0)\\Delta x+f_y(x_0,y_0)\\Delta y\\end{align}"}\]</MathStuff>
        </SubList></li>
      </ul>
		  <ul data-source={45} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
        <li><b>Chain Rule:</b><SubList>
          <li><u><b>Chain rule for one independent variable:</b></u> Suppose that \(x=g(t)\) and \(y=h(t)\) are differentiable functions of \(t\) and \(z=f(x,y)\) is a differentiable function of \(x\) and \(y\). Then \(z=f(x(t),y(t))\) is a differentiable function of \(t\):</li>
          <MathStuff>\[{"\\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} \\cdot \\frac{dx}{dt} + \\frac{\\partial z}{\\partial y} \\cdot \\frac{dy}{dt}"}\]</MathStuff>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/6.jpeg"} width="70%" />
            <figcaption>Tree diagram for the above chain rule.</figcaption>
          </figure></li>
          <li><b><u>Chain Rule for Two Independent Variables:</u></b> Suppose \(x=g(u,v)\) and \(y=h(u,v)\) are differentiable functions of \(u\) and \(v\), and \(z=f(x,y)\) is a differentiable function of \(x\) and \(y\). Then, \(z=f(g(u,v),h(u,v))\) is a differentiable function of \(u\) and \(v\):</li>
          <MathStuff>\[{"\\begin{gather} \\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x} \\cdot \\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y} \\cdot \\frac{\\partial y}{\\partial u} \\\\ \\frac{\\partial z}{\\partial v} = \\frac{\\partial z}{\\partial x} \\cdot \\frac{\\partial x}{\\partial v} + \\frac{\\partial z}{\\partial y} \\cdot \\frac{\\partial y}{\\partial v} \\end{gather}"}\]</MathStuff>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/6.jpeg"} width="80%" />
            <figcaption>Tree diagram for the above chain rule</figcaption>
          </figure></li>
          <li><u><b>The Generalized Chain Rule:</b></u> Let \(w=f(x_1,x_2, \ldots, x_m)\) be a differentiable function of \(m\) independent variables, and for each \({"i∈{1,\\ldots,m}"}\), let \(x_i=x_i(t_1,t_2, \ldots,t_n)\) be a differentiable function of \(n\) independent variables. Then:</li>
          <MathStuff>\[{" \\frac{\\partial w}{\\partial t_j} = \\frac{\\partial w}{\\partial x_1} \\cdot \\frac{\\partial x_1}{\\partial t_j} + \\frac{\\partial w}{\\partial x_2} \\cdot \\frac{\\partial x_2}{\\partial t_j} + \\cdots + \\frac{\\partial w}{\\partial x_m} \\cdot \\frac{\\partial x_m}{\\partial t_j}  "}\]</MathStuff>
          <li>for any \({"j∈{1,2, \\ldots,n}"}\).</li>
        </SubList></li>
        <li>Implicit Differentiation:<SubList>
          <li>Consider the ellipse defined by the equation \(x^2 + 3y^2 + 4y -4 = 0\). This equation implicitly defines \(y\) as a function of \(x\). Let \(h(x,y) = x^2 + 3y^2 + 4y -4\), then we can say \(h(x,y)\) defines \(y\) implicitly as a function of \(x\) via the equation \(h(x,y)=0\).</li>
          <li>Suppose there is some function \(z=f(x,y)\) defines \(y\) implicitly as a function of \(x\) via the equation \(f(x,y)=0\). Then:</li>
          <MathStuff>\[{"\\frac{dy}{dx} = - \\frac{\\partial f / \\partial x}{\\partial f / \\partial y}"}\]</MathStuff>
          <li>provided \(f_y(x,y)=0\)</li>
          <li>If the equation \(f(x,y,z)=0\) defines \(z\) implicitly as a differentiable function of \(x\) and \(y\), then:</li>
          <MathStuff>\[{"\\frac{\\partial z}{\\partial x} = - \\frac{\\partial f / \\partial x}{\\partial f / \\partial z} \\\\ \\frac{\\partial z}{\\partial y} = - \\frac{\\partial f / \\partial y}{\\partial f / \\partial z}"}\]</MathStuff>
          <li>As long  as \(f_z(x,y,z)=0\).</li>
        </SubList></li>
        <li>Directional Derivatives:<SubList>
          <li>Suppose \(z=f(x,y)\) is a function of two variables with a domain of \(D\). Given a point \((a,b)\) in the domain of \(f\), we choose a direction to travel from that point.</li>
          <li>We measure the direction using an angle \(θ\), which is measured counterclockwise in the \(x\), \(y\)-plane, starting at zero from the positive \(x\)-axis.</li>
          <li>The distance we travel is \(h\) (<span className="ownExplanation">where \(h\) is parallel to the \(x\), \(y\)-plane</span>) and the direction we travel is given by the unit vector \(\textbf{"{u}"}=(\cos θ)\textbf{"{i}"}+(\sin θ)\textbf{"{j}"}\).</li>
          <li>Therefore, the \(z\)-coordinate of the second point on the graph is given by \(z=f(a+h \cos θ,b+h \sin θ)\).</li>
          <li>The directional derivative of \(f\) in the direction of \(u\) is given by:</li>
          <MathStuff>\[ {"D_\\textbf{u} f(a,b) = \\lim_{h→0} \\frac{f(a+h \\cos θ,b+h \\sin θ) - f(a,b)}{h}"} \]</MathStuff>
          <li>Provided that the limit exists. Another way of defining \({"\\textbf{D}_\\textbf{u}"}\) is:</li>
          <MathStuff>\[ {"D_\\textbf{u} f(a,b) = f_x(x,y) \\cos θ + f_y(x,y) \\sin θ"} \]</MathStuff>
        </SubList></li>
        <li>Gradient:<SubList>         
          <li>Let \(z=f(x,y)\) be a function of \(x\) and \(y\) such that \(f_x\) and \(f_y\) exist. The vector \(∇f(x,y)\) is called the <b>gradient</b> of \(f\) and is defined as \(∇f(x,y)=f_x(x,y) \textbf{"{i}"}+f_y(x,y) \textbf{"{j}"}\).</li>
          <li>The vector \(∇f(x,y)\) is also written as "grad \(f\)".</li>
          <li>Since \(\textbf{"{u}"}=(\cos θ)\textbf{"{i}"}+(\sin θ)\textbf{"{j}"}\):</li>
          <MathStuff>\[ {"D_\\textbf{u} f(a,b) = ∇f(x,y) \\cdot \\textbf{u}"} \]</MathStuff>
          <li>Properties of the gradient:<SubList>
            <li>If \(∇f(x_0,y_0)=0\), then \(D_\textbf{"{u}"} f(x_0,y_0)=0\) for any unit vector \(\textbf{"{u}"}\).</li>
            <li>If \(∇f(x_0,y_0)≠0\), then \(D_\textbf{"{u}"} f(x_0,y_0)\) is maximized when \(u\) points in the same direction as \(∇f(x_0,y_0)\). The maximum value of \(D_\textbf{"{u}"} f(x_0,y_0)\) is \(∥∇f(x_0,y_0)∥\).</li>
            <li>If \(∇f(x0,y0)≠0\), then \(D_\textbf{"{u}"} f(x_0,y_0)\) is minimized when \(u\) points in the opposite direction from \(∇f(x_0,y_0)\). The minimum value of \(D_\textbf{"{u}"} f(x_0,y_0)\) is  \(-∥∇f(x_0,y_0)∥\).</li>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/8.png"} width="90%" />
          </SubList></li>
          <li>Suppose the function \(z=f(x,y)\) has continuous first-order partial derivatives in an open disk centered at a point \((x_0,y_0)\). If \(∇f(x_0,y_0)≠0\), then \(∇f(x_0,y_0)\) is normal to the level curve of \(f\) at \((x_0,y_0)\).</li>
          <li>Let \(w=f(x,y,z)\) be a function of three variables such that \(f_x\), \(f_y\) and \(f_z\) exist. The vector \(∇f(x,y,z)\) is called the gradient of \(f\) and is defined as:</li>
          <MathStuff>\[ {"∇f(x,y,z)=f_x(x,y,z)\\textbf{i}+f_y(x,y,z)\\textbf{j}+f_z(x,y,z)\\textbf{k}"} \]</MathStuff>
          <li>Let \(f(x,y,z)\) be a differentiable function of three variables and let \(\textbf{"{u}"}=\cos α \textbf{"{i}"}+ \cos β \textbf{"{j}"} + \cos γ \textbf{"{k}"}\) be a unit vector. Then, the directional derivative of \(f\) in the direction of \(\textbf{"{u}"}\) is given by:</li>
          <MathStuff>\[ {"\\begin{align} D_\\textbf{u} f(x,y,z) &= ∇f(x,y,z) \\cdot \\textbf{u} \\\\ &= f_x (x,y,z)\\cos α + f_y (x,y,z) \\cos β + f_z (x,y,z)\\cos γ \\end{align}"} \]</MathStuff>
        </SubList></li>
        <li>Critical points:<SubList>
          <li>Let \(z=f(x,y)\) be a function of two variables that is defined on an open set containing the point \((x_0,y_0)\).The point \((x_0,y_0)\) is called a <b>critical point</b> of a function of two variables \(f\) if one of the two following conditions holds: \(f_x(x_0,y_0)=f_y(x_0,y_0)=0\) and either \(f_x(x_0,y_0)\) or \(f_y(x_0,y_0)\) does not exist.</li>
          <li>Local/global maximum:<SubList>
            <li>\(f\) has a <b>local maximum</b> at \((x_0, y_0)\) if \(f(x_0,y_0) \ge f(x,y)\) for all points \((x,y)\) within some disk centered at \((x_0,y_0)\). The number \(f(x_0,y_0)\) is called a <b>local maximum value</b>.</li>
            <li>If the preceding inequality holds for every point \((x,y)\) in the domain of \(f\), then \(f\) has a <b>global maximum</b> (also called an absolute maximum) at \((x_0,y_0)\).</li>
          </SubList></li>
          <li>Local/global minimum:<SubList>
            <li>\(f\) has a <b>local minimum</b> at \((x_0, y_0)\) if \(f(x_0,y_0) \le f(x,y)\) for all points \((x,y)\) within some disk centered at \((x_0,y_0)\). The number \(f(x_0,y_0)\) is called a <b>local maximum value</b>.</li>
            <li>If the preceding inequality holds for every point \((x,y)\) in the domain of \(f\), then \(f\) has a <b>global minimum</b> (also called an absolute minimum) at \((x_0,y_0)\).</li>
          </SubList></li>
          <li>If \(f(x_0,y_0)\) is either a local maximum or local minimum value, then it is called a <b>local extremum</b>.</li>
          <li><b>Fermat's Theorem for Functions of Two Variables:</b><SubList>
            <li>Let \(z=f(x,y)\) be a function of two variables that is defined and continuous on an open set containing the point \((x_0,y_0)\). Suppose \(f_x\) and \(f_y\) each exists at \((x_0,y_0)\). If \(f\) has a local extremum at \((x_0,y_0)\), then \((x_0,y_0)\) is a critical point of \(f\).</li>
          </SubList></li>
          <li><b>Saddle point:</b><SubList>
            <li>Given the function \(z=f(x,y)\), the point \((x_0,y_0,f(x_0,y_0))\) is a <b>saddle point</b> if both \(f_x(x_0,y_0)=0\) and \(f_y(x_0,y_0)=0\), but \(f\) does not have a local extremum at \((x_0,y_0)\).</li>
          </SubList></li>
          <li><b>Second derivative test:</b><SubList>
            <li>Suppose \(f_x(x_0,y_0)=0\) and \(f_y(x_0,y_0)=0\). Define \(D\):</li>
            <MathStuff>\[ D = {"f_{xx}(x_0,y_0) f_{yy}(x_0,y_0) - (f_{xy}(x_0,y_0))^2"} \]</MathStuff>
            <li>If \(D \gt 0\) and \({"f_{xx}(x_0,y_0)>0"}\), then \(f\) has a local minimum at \((x_0,y_0)\).</li>
            <li>If \(D \gt 0\) and \({"f_{xx}(x_0,y_0)<0"}\), then \(f\) has a local maximum at \((x_0,y_0)\).</li>        
            <li>If \(D \lt 0\), then \(f\) has a saddle point at \((x_0,y_0)\).</li>
            <li>If \(D=0\), then the test is inconclusive.</li>
          </SubList></li>
          <li><b>Extreme Value Theorem:</b><SubList>
            <li>A continuous function \(f(x,y)\) on a closed and bounded set \(D\) in the plane attains an absolute maximum value at some point of \(D\) and an absolute minimum value at some point of \(D\).</li>
          </SubList></li>
        </SubList></li>
        <li>Lagrange multipliers:<SubList>
          <li>Suppose we want to maximize or minimize a continuous function \(f(x,y) = 48x + 96y - x^2 - 2xy - 9y^2\) subject to a constraint of the form \(20x+4y \le 216\).</li>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/9.webp"} width="70%" />
            <figcaption>Level curves of \(f(x,y)\).</figcaption>
          </figure></li>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/10.webp"} width="70%" />
            <figcaption>Level curves of \(f(x,y)\) with \(20x + 4y = 216\).</figcaption>
          </figure></li>
          <li>Let \(g(x,y) = 20x + 4y - 216\).</li>
          <li className="ownExplanation">Think of \(f(x,y)\) and \(g(x,y)\) in a 3d graph, where only the values of \(x\), \(y\) and \(f(x,y)\) that are within the constraints are shown.</li>
          <li className="ownExplanation">The maximum or minimum value of \(f(x,y)\) is the in the level curve where only one unique value \(x\) and \(y\) are in the constaint.</li>
          <li><figure>
				    <ImgComp src={"/articlePics/differentiation_of_funcions_of_several_variables_pics/11.jpeg"} width="70%" />
            <figcaption>\(f(x,y)\) within the \(g(x,y)\) constraint.</figcaption>
          </figure></li>
          <li className="ownExplanation">In other words, a maximum or minimum value can be found if the gradient vector of \(g(x,y)\) is parallel to the gradient vector of \(f(x,y)\).</li>
          <MathStuff>\[∇ f(x,y) = \lambda ∇g(x,y)\]</MathStuff>
          <li>The number \(\lambda\) is called the <b>Langrange multiplier</b>.</li>
          <li>The method of Lagrange multipliers can be applied to problems with more than one constraint. In this case the optimization function, is a function of three variables:</li>
          <MathStuff>\[w = f(x,y,z)\]</MathStuff>
          <li>There are two constraints:</li>
          <MathStuff>\[g(x,y,z) = 0 \quad h(x,y,z) = 0\]</MathStuff>
          <li>There are two Lagrange multipliers, \(\lambda_1\) and \(\lambda_2\):</li>
          <MathStuff>\[∇ f(x_0,y_0,z_0) = \lambda_1 ∇g(x_0,y_0,z_0) + \lambda_2 ∇h(x_0,y_0,z_0)\]</MathStuff>
        </SubList></li>
      </ul>
    </div>
  </>;
}