import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export default function Vectors(){
  return <>
	<h2>Vectors</h2>
	<div className="content">
		<div data-source={45} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
			<ul>
				<li>Basic concepts:<SubList>
					<li>A quantity that has magnitude and direction is called a <b>vector</b>.</li>
					<li>A vector \(\textbf{"{v}"}\) in a plane is represented by a directed line segment (an arrow). The endpoints of the segment are called the <b>initial point</b> and the <b>terminal point</b> of the vector.</li>
					<li>An arrow from the initial point to the terminal point indicates the direction of the vector. The length of the line segment represents its magnitude.</li>
					<li>We use the notation \(\Vert \textbf{"{v}"} \Vert\) to denote the magnitude of the vector \(\textbf{"{v}"}\).</li>
					<li>A vector with an initial point and terminal point that are the same is called the <b>zero vector</b>. The zero vector is the only vector without a direction, and by convention can be considered to have any direction convenient to the problem at hand.</li>
					<li>Vectors are said to be <b>equivalent vectors</b> if they have the same magnitude and direction.</li>
					<li> When a vector has initial point \({"\\scriptstyle{\\overrightarrow{P}}"}\) and terminal point \({"\\scriptstyle{\\overrightarrow{Q}}"}\), the notation \({"\\scriptstyle{\\overrightarrow{PQ}}"}\) is useful because it indicates the direction and location of the vector.</li>
					<li><ImgComp src={require("./vectors_pics/31.jpeg")} width="60%" /></li>
				</SubList></li>
				<li>Scalars:<SubList>
					<li>A real number is often called a <b>scalar</b> in mathematics and physics. Unlike vectors, scalars are generally considered to have a magnitude only, but no direction.</li>
					<li>Multiplying a vector by a scalar changes the vector's magnitude.</li>
					<li>This is called <b>scalar multiplication</b>.</li>
					<li>The product \(kv\) of a vector \(\textbf{"{v}"}\) and a scalar \(k\) is a vector with a magnitude that is \(|k|\) times the magnitude of \(\textbf{"{v}"}\), and with a direction that is the same as the direction of \(\textbf{"{v}"}\) if \(k \gt 0\), and opposite the direction of \(\textbf{"{v}"}\) if \(k \lt 0\).</li>
					<li><ImgComp src={require("./vectors_pics/32.jpeg")} width="60%" /></li>
				</SubList></li>
				<li>Adding vectors:<SubList>
					<li>The most common graphical method for adding two vectors is to place the initial point of the second vector at the terminal point of the first. This approach is called the <b>triangle method</b>.</li>
					<li><ImgComp src={require("./vectors_pics/33.jpeg")} width="60%" /></li>
					<li>A second method for adding vectors is called the <b>parallelogram method</b>. With this method, we place the two vectors so they have the same initial point, and then we draw a parallelogram with the vectors as two adjacent sides.</li>
					<li>The vector \(\textbf{"{v}"}+\textbf{"{w}"}\) is called the <b>vector sum</b>.</li>
					<li>We define \(\textbf{"{v}"} - \textbf{"{w}"}\) as \(\textbf{"{v}"} + ( - \textbf{"{w}"} )\) = \(\textbf{"{v}"} + ( -1 ) \textbf{"{w}"}\) . The vector \(\textbf{"{v}"} - \textbf{"{w}"}\) is called the <b>vector difference</b>.</li>
					<li><ImgComp src={require("./vectors_pics/34.jpeg")} width="60%" /></li>
					<li>These three vectors form the sides of a triangle. It follows that the length of any one side is less than (or equal to) the sum of the lengths of the remaining sides:</li>
					<MathStuff>\[ \Vert \textbf{"{v}"} + \textbf{"{w}"} \Vert \le \Vert \textbf{"{v}"} \Vert + \Vert \textbf{"{w}"} \Vert\]</MathStuff>
					<li>This is known more generally as the <b>triangle inequality</b>.</li>
					<li><b><u>Commutative property:</u></b> \(\textbf{"{u}"} + \textbf{"{v}"} = \textbf{"{v}"} + \textbf{"{u}"}\).</li>
					<li><b><u>Distributive property:</u></b> \((r+s) \textbf{"{v}"} = r \textbf{"{v}"} + s \textbf{"{v}"} \).</li>
					<li><b><u>Distributive property:</u></b> \(r(\textbf{"{u}"} + \textbf{"{v}"}) = r\textbf{"{u}"} + r\textbf{"{v}"}\).</li>
				</SubList></li>
				<li>Vector Components:<SubList>
					<li>Because a vector can be placed anywhere in a plane, it may be easier to perform calculations with a vector when its initial point coincides with the origin.</li>
					<li>We call a vector with its initial point at the origin a <b>standard-position vector</b>.</li>
					<li>Because the initial point of any vector in standard position is known to be \((0, 0)\), we can describe the vector by looking at the coordinates of its terminal point.</li>
					<li>If vector \(\textbf{"{v}"}\) has its initial point at the origin and its terminal point at \((x, y)\), we write the vector in component form as:</li>
					<MathStuff>\[ v = \langle x,y \rangle \]</MathStuff>
					<li>When a vector is written in component form like this, the scalars \(x\) and \(y\) are called the components of \(\textbf{"{v}"}\).</li>
					<li>Let \(\textbf{"{v}"}\) be a vector with initial point \((x_i,y_i)\) and terminal point \((x_t,y_t)\). Then we can express \(\textbf{"{v}"}\) in component form as \(\textbf{"{v}"}= \langle x_t - x_i, y_t - y_i \rangle \).</li>
					<li>The magnitude of a vector \(\textbf{"{v}"} = \langle x, y\rangle\) is:</li>
					<MathStuff>\[ \Vert \textbf{"{v}"} \Vert = \sqrt{"{x^2+y^2}"} \]</MathStuff>
				</SubList></li>
				<li>Unit vectors:<SubList>
					<li>A <b>unit vector</b> is a vector with magnitude 1.</li>
					<li>For any nonzero vector \(\textbf{"{v}"}\), we can use scalar multiplication to find a unit vector \(\textbf{"{u}"}\) that has the same direction as \(\textbf{"{v}"}\).</li>
					<MathStuff>\[ u = \frac{"{1}{\\Vert \\textbf{v} \\Vert}"} \textbf{"{v}"}\]</MathStuff>
					<li>Sometimes, though, it is more convenient to write a vector as a sum of a horizontal vector and a vertical vector. To make this easier, let's look at standard unit vectors. The standard unit vectors are the vectors \(i=〈1,0〉\) and \(j=〈0,1〉\).</li>
					<li>By applying the properties of vectors, it is possible to express any vector in terms of \(\textbf{"{i}"}\) and \(\textbf{"{j}"}\) in what we call a linear combination:</li>
					<MathStuff>\[\textbf{"{v}"}=〈x,y〉=〈x,0〉+〈0,y〉=x〈1,0〉+y〈0,1〉=x\textbf{"{i}"}+y\textbf{"{j}"}\]</MathStuff>
				</SubList></li>
				<li>Three-dimensional rectangular coordinate:<SubList>
					<li>The <b>three-dimensional rectangular coordinate</b> system consists of three perpendicular axes: the x-axis, the y-axis, the z-axis, and an origin at the point of intersection (0) of the axes.</li>
					<li>Because each axis is a number line representing all real numbers in \(\mathbb{"{R}"}\), the three-dimensional system is often denoted by \(\mathbb{"{R}"}^3\).</li>
					<li><ImgComp src={require("./vectors_pics/35.jpeg")} width="40%" /></li>
					<li>In two dimensions, the coordinate axes partition the plane into four quadrants. Similarly, the coordinate planes divide space between them into eight regions about the origin, called <b>octants</b>.</li>
					<li><ImgComp src={require("./vectors_pics/36.jpeg")} width="40%" /></li>
					<li>The distance \(d\) between points \((x_1,y_1,z_1)\) and \((x_2,y_2,z_2)\) is given by the formula:</li>
					<MathStuff>\[ d= \sqrt{"{(x_2-x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}"} \]</MathStuff>
					<li>The sphere with center \((a,b,c)\) and radius \(r\) can be represented by the equation:</li>
					<MathStuff>\[ (x-a)^2 + (y-b)^2 + (z-c)^2 = r^2\]</MathStuff>
					<li>This equation is known as the <b>standard equation of a sphere</b>.</li>
					<li>The standard unit vectors extend easily into three dimensions as well: \(\textbf{"{i}"}=⟨1,0,0⟩\), \(\textbf{"{j}"}=⟨0,1,0⟩\), and \(\textbf{"{k}"}=⟨0,0,1⟩\):</li>
					<MathStuff>\[\textbf{"{v}"}=⟨x,y,z⟩=x\textbf{"{i}"}+y\textbf{"{j}"}+z\textbf{"{k}"}\]</MathStuff>
				</SubList></li>
				<li>If two vectors \(u\) and \(v\) are parallel, then \(u=kv\) for some \(k \in \mathbb{"{R}"}\):<SubList>
					<li>If they are facing the same direction, then \(k = {"{\\Vert u \\Vert}{\\Vert v \\Vert}"}\).</li>
					<li>If they are in the opposite directions, then \(k = -{"{\\Vert u \\Vert}{\\Vert v \\Vert}"}\)</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={45} style={{width:" 49%",marginLeft: "0.5%",float: "right"}}>
			<ul>
				<li>Dot product:<SubList>
					<li>The <b>dot product</b> of two vectors \(u=\langle u_1, u_2, u_3 \rangle\) amd \(v = \langle v_1, v_2, v_3\rangle\) is:</li>
					<MathStuff>\[ {"\\textbf{u} \\cdot \\textbf{v} = u_1v_1 + u_2v_2 + u_3v_3"} \]</MathStuff>
					<li>Let \(\theta\) be the angle between the two vectors.</li>
					<MathStuff>\[ {"\\textbf{u} \\cdot \\textbf{v} = \\Vert \\textbf{u} \\Vert \\ \\Vert \\textbf{u} \\Vert \\cos(\\theta)"} \]</MathStuff>
					<li>Two nonzero vectors are <b>orthogonal</b> if and only if their dot product is 0.</li>
				</SubList></li>
				<li>Vector projection:<SubList>
					<li>The <b>vector projection</b> of \(\textbf{"{v}"}\) onto \(\textbf{"{u}"}\) (denoted as \({"\\operatorname{proj}_{\\textbf{u}} \\textbf{v}"}\)) represents the component of \(\textbf{"{v}"}\) that acts in the direction of \(\textbf{"{u}"}\).</li>
					<li>If \(\theta\) represents the angle between \(\textbf{"{v}"}\) and \(\textbf{"{u}"}\):</li>
					<MathStuff>\[ {"\\begin{gather} \\Vert \\operatorname{proj}_{\\textbf{u}} \\textbf{v} \\Vert = \\Vert \\textbf{v} \\Vert \\cos(\\theta) \\\\ \\operatorname{proj}_{\\textbf{u}} \\textbf{v} = \\frac{\\textbf{u} \\cdot \\textbf{v}}{\\Vert \\textbf{u}\\Vert} \\end{gather}"}\]</MathStuff>
				</SubList></li>
				<li>Cross product:<SubList>
					<li>Consider vectors \({"\\textbf{u} = \\langle u_1, u_2, u_3 \\rangle"}\), \({"\\textbf{v} = \\langle v_1, v_2, v_3 \\rangle"}\) and \({"\\textbf{w} = \\langle w_1, w_2, w_3 \\rangle"}\) such that \({"\\textbf{w} \\cdot \\textbf{u}=0"}\) and \({"\\textbf{w} \\cdot \\textbf{v}=0"}\):</li>
					<MathStuff>\[{"\\begin{gather} u_1w_1 + u_2w_2 + u_2w_2 =0 \\\\ v_1w_1 + v_2w_2 + v_2w_2 =0 \\end{gather}"} \]</MathStuff>
					<li>Possible solution:</li>
					<MathStuff>\[{"\\textbf{w} = \\langle u_2v_3-u_3v_2,-(u_1v_3-u_3v_1),u_1v_2-u_2v_1 \\rangle"}\]</MathStuff>
					<li>Use right hand rule to find the direction of the cross poduct vector:</li>
					<li><ImgComp src={require("./vectors_pics/40.jpeg")} width="70%" /></li>
					<li>The cross product gives the area of the product formed by two vectors \({"\\textbf{u}"}\) and \({"\\textbf{v}"}\):</li>
					<MathStuff>\[{"\\Vert \\textbf{u} \\times \\textbf{v} \\Vert = \\Vert \\textbf{u} \\cdot \\textbf{v} \\Vert \\cdot \\sin(\\theta)"}\]</MathStuff>
					<li>A 2x2 determinant is defined by:</li>
					<MathStuff>\[{"\\begin{vmatrix} a_1 & a_2 \\\\ b_1 & b_2 \\end{vmatrix} = a_1b_2-b_1a_2"}\]</MathStuff>
					<li>A 3x3 determinant is defined by:</li>
					<MathStuff>\[{"\\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 &b_3 \\\\ c_1 & c_2 &c_3 \\end{vmatrix} = a_1\\begin{vmatrix} b_2 & b_3 \\\\ c_2 & c_3 \\end{vmatrix} - a_2\\begin{vmatrix} b_1 & b_3 \\\\ c_1 & c_3 \\end{vmatrix} + a_3\\begin{vmatrix} b_1 & b_2 \\\\ c_1 & c_2 \\end{vmatrix}"}\]</MathStuff>
					<li>Let \({"\\textbf{b} = \\langle b_1, b_2, b_3 \\rangle"}\) and \({"\\textbf{c} = \\langle c_1, c_2, c_3 \\rangle"}\). We can use the determinant to find the cross product \(\textbf{"{b}"} \times \textbf{"{c}"}\):</li>
					<MathStuff>\[{"\\begin{vmatrix} \\textbf{i} & \\textbf{j} & \\textbf{k} \\\\ b_1 & b_2 &b_3 \\\\ c_1 & c_2 &c_3 \\end{vmatrix} = \\textbf{i}\\begin{vmatrix} b_2 & b_3 \\\\ c_2 & c_3 \\end{vmatrix} - \\textbf{j}\\begin{vmatrix} b_1 & b_3 \\\\ c_1 & c_3 \\end{vmatrix} + \\textbf{k}\\begin{vmatrix} b_1 & b_2 \\\\ c_1 & c_2 \\end{vmatrix}"}\]</MathStuff>
					<li>Triple scalar product:</li>
					<MathStuff>\[{"\\textbf{a} \\cdot (\\textbf{b} \\times \\textbf{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 &b_3 \\\\ c_1 & c_2 &c_3 \\end{vmatrix}"}\]</MathStuff>
					<li>Volume of a parallelepiped formed by vectors \({"\\textbf{u}"}\), \({"\\textbf{w}"}\) and \({"\\textbf{v}"}\):</li>
					<MathStuff>\[{"| \\textbf{u} \\cdot (\\textbf{w} \\times \\textbf{v}) | = \\Vert \\operatorname{proj}_{\\textbf{w} \\times \\textbf{v}} {\\textbf{u}} \\Vert \\ \\Vert \\textbf{w} \\times \\textbf{v} \\Vert"}\]</MathStuff>
					<li><ImgComp src={require("./vectors_pics/41.jpeg")} width="70%" /></li>
				</SubList></li>
				<li>Equation of a line:<SubList>
					<li>Let \(L\) be a line in space passing through point \(P= (x_p, y_p, z_p)\). Let \({"\\textbf{v}"}=\langle a,b,c \rangle\) be a vector parallel to \(L\).</li>
					<li>For any point \(Q= (x, y, z) \) on \(L\), we know \({"\\textbf{v}"}\) that is parallel to \(\scriptstyle{"{\\overrightarrow{PQ}}"}\). Thus, there is a scalar \(t\), such that:</li>
					<MathStuff>\[\begin{"{gather}"} {"{\\overrightarrow{PQ}}"}= tv \\ \langle x - x_p, y-y_p, z-z_p \rangle=\langle ta,tb,tc \rangle \\ \langle x, y, z \rangle=\langle x_p,y_p,z_p \rangle + t {"\\textbf{v}"} \end{"{gather}"}\]</MathStuff>
					<li> A line \(L\) parallel to vector \({"\\textbf{v}"}\) and passing through point \(P\) can be described by the following
					parametric equations:</li>
					<MathStuff>\[{"\\begin{gather} x = x_p + ta \\\\ y = y_p + tb \\\\ z=z_p+tc \\end{gather}"}\]</MathStuff>
					<li> If two lines in space are not parallel and do not intersect, then the lines are said to be <b>skew lines</b>.</li>
					<li>Let \({"\\textbf{p}"} = \langle x_0,y_0,z_0 \rangle\) and \({"\\textbf{q}"}=\langle x_1,y_1,z_1 \rangle\) be vectors with terminal points on a line segment \(S\). Points \((x_0,y_0,z_0 )\) and \(x_1,y_1,z_1 \) are the endpoints of \(S\). Then for any point \((x,y,z)\) on \(S\):</li>
					<MathStuff>\[\begin{"{gather}"} \langle x,y,z \rangle = {"\\textbf{p}"} + t({"\\textbf{q}-\\textbf{p}"}) \\ \text{"{where }"} 0 \le t \le 1 \end{"{gather}"}\]</MathStuff>
				</SubList></li>
				<li>Distance from a point to a line:<SubList>
					<li> Let \(L\) be a line in space passing through point \(P\) with direction vector \(\textbf{"{v}"}\). If \(M\) is any point not on \(L\), then the shortest distance from \(M\) to \(L\) is:</li>
					<MathStuff>\[d = {"\\frac{\\Vert \\overrightarrow{PM} \\times \\textbf{v}\\Vert}{\\Vert \\textbf{v}\\Vert}"}\]</MathStuff>
					<li>This is true because the area of a parallelogram created by \(\Vert \scriptstyle{"{\\overrightarrow{PM}}"} \times {"\\textbf{v}"} \Vert\) is \(d * \Vert {"\\textbf{v}"} \Vert \):</li>
					<li><ImgComp src={require("./vectors_pics/37.jpeg")} width="60%" /></li>
				</SubList></li>
				<li>Equation of a plane:<SubList>
					<li>Let \(n=\langle a,b,c \rangle\) be vector perpendicular to a plane \(P\), and let point \(A = (x_0,y_0,z_0) \) be a point on \(P\).</li>
					<li>For any point \(Q = (x,y,z)\) on \(P\):</li>
					<MathStuff>\[ n \cdot {"{\\overrightarrow{QA}}"} =0 \]</MathStuff>
					<li>This means:</li>
					<MathStuff>\[{"\\begin{gather} a(x-x_0) + b(y-y_0) + c(z-z_0) = 0 \\\\ ax+by+zc -ax_0 -by_0 -cz_0 = 0 \\end{gather}"}\]</MathStuff>
					<li>A plane is defined with the equation \(ax+by+zc +d = 0\).</li>
				</SubList></li>
				<li>Distance from a point to a plane:<SubList>
					<li>Suppose a plane with normal vector \(\textbf{"{n}"}\) passes through point \(Q\). The distance \(d\) from the plane to a point \(P\) not in the plane is:</li>
					<MathStuff>\[d={"\\lVert \\operatorname{proj}_n \\overrightarrow{PQ} \\rVert = \\frac{\\left| \\overrightarrow{PQ} \\cdot \\textbf{n} \\right|}{\\Vert \\textbf{n} \\Vert}"}\]</MathStuff>
					<li><ImgComp src={require("./vectors_pics/38.jpeg")} width="60%" /></li>
				</SubList></li>
				<li>Finding the angle between two intersecting planes:<SubList>
					<li><ImgComp src={require("./vectors_pics/39.jpeg")} width="50%" /></li>
					<MathStuff>\[ \cos(\theta) = \frac{"{|n_1 \\cdot n_2|}{ \\Vert n_1 \\Vert \\Vert n_2 \\Vert}"}\]</MathStuff>
				</SubList></li>
			</ul>
		</div>
	</div>
  </>
}