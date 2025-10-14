import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export default function SecondOrderDifferentialEquations() {
  return <>
    <h2>Second-Order Differential Equations</h2>
    <div className="content">
      <ul data-source={45} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
        <li>Definition:<SubList>
          <li>A second order differential equation is <b>linear</b> if it can be written in the form:</li>
          <MathStuff>{"a_2(x) y'' + a_1(x)y' + a_0(x)y = r(x)"}</MathStuff>
          <li>where \(a_2(x)\), \(a_1(x)\), \(a_0(x)\) and \(r(x)\) are real-valued functions and \(a_2(x)\) is not identically zero.</li>
          <li>If \(r(x)=0\) for every value of \(x\), the equation is said to be a <b>homogeneous linear equation</b>.</li>
          <li>If \(r(x) \ne 0\) for some value of \(x\), the equation is said to be a <b>nonhomogeneous linear equation</b>.</li>
        </SubList></li>
        <li>Superposition Principle:<SubList>
          <li>If \(y_1(x)\) and \(y_2(x)\) are solutions to a lienar homogeneous differential equation, then this function is also a solution:</li>
          <MathStuff>y(x) = c_1y_1(x) + c_2y_2(x)</MathStuff>
          <li>where \(c_1\) and \(c_2\) are constants.</li>
          <li>A set of functions \(f_1(x),f_2(x), \dots ,f_n(x)\) is said to be <b>linearly dependent</b> if there are constants  \(c_1,c_2,\dots, c_n\), not all zero, such that \(c_1f_1(x)+c_2f_2(x)+ \cdots +c_nf_n(x)=0\) for all \(x\) over the interval of interest.</li>
          <li>A set of functions that is not linearly dependent is said to be <b>linearly independent</b>.</li>
        </SubList></li>
        <li>Second-order equations with constant coefficients:<SubList>
          <li>Consider the equation of the form:</li>
          <MathStuff>{"ay'' + by' +  cy = 0"}</MathStuff>
          <li>where \(a\), \(b\) and \(c\) are constants.</li>
          <li>The <b>characteristic equation</b> of the differential equation \(ay''+by'+cy=0\) is:</li>
          <MathStuff>{" a λ^2+bλ+c=0"}</MathStuff>
          <li>The form of the general solution varies, depending on whether the characteristic equation has distinct, real roots; a single, repeated real root; or complex conjugate roots:</li>
          <TableLI>
            <thead>
              <tr><th>Characteristic equation roots</th><th>General solution to the differential equation</th></tr>
            </thead>
            <tbody>
              <tr><td>Distinct real roots, \(\lambda_1\) and \(\lambda_2\)</td><td>\(y(x) = {"c_1 e^{\\lambda_1 x} + c_2 e^{\\lambda_2 x}"}\)</td></tr>
              <tr><td>A repeated real root, \(\lambda\)</td><td>\(y(x) = {"c_1 e^{\\lambda x} + c_2 x e^{\\lambda x}"}\)</td></tr>
              <tr><td>Complex conjugate roots \(\alpha \pm \beta i\)</td><td>\({"y(x) = e^{\\alpha x}(c_1 \\cos(\\beta x) + c_2 \\sin(\\beta x))"}\)</td></tr>
            </tbody>
          </TableLI>
        </SubList></li>
        <li>Second-order equations we require two initial conditions to find a specific solution to the initial-value problem.</li>
        <li>Boundary-value problem:<SubList>
          <li>Sometimes we know the condition of the system at two different times. For example, we might know \(y(t_0)=y_0\) and \(y(t_1)=y_1\).</li>
          <li>These conditions are called <b>boundary conditions</b>, and finding the solution to the differential equation that satisfies the boundary conditions is called solving a <b>boundary-value problem</b>.</li>
        </SubList></li>
      </ul>
      <ul data-source={45} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
        <li>General solution to a nonhomogeneous linear equation:<SubList>
          <li>Consider the nonhomogeneous linear differential equation:</li>
          <MathStuff>{"a_2(x) y'' + a_1(x)y' + a_0(x)y = r(x)"}</MathStuff>
          <li>The associated homogeneous equation:</li>
          <MathStuff>{"a_2(x) y'' + a_1(x)y' + a_0(x)y =0"}</MathStuff>
          <li>is called the <b>complementary equation</b>.</li>
          <li>A solution \(y_p(x)\) of a differential equation that contains no arbitrary constants is called a <b>particular solution</b> to the equation.</li>
          <li>Let \(c_1y_1(x)+c_2y_2(x)\) denote the general solution to the complementary equation.</li>
          <li>The general solution to the nonhomogeneous equation is given by:</li>
          <MathStuff>{"y(x)=c_1y_1(x)+c_2y_2(x) + y_p(x)"}</MathStuff>
        </SubList></li>
        <li>Method of undetermined coefficients:<SubList>
          <li>The <b>method of undetermined coefficients</b> involves making educated guesses about the form of the particular solution based on the form of \(r(x)\).</li>
          <TableLI>
            <thead>
              <tr><th>\(r(x)\)</th><th>Initial guess for \(y_p(x)\)</th></tr>
            </thead>
            <tbody>
              <tr><td>\(k\) (a constant)</td><td>\(A\) (a constant)</td></tr>
              <tr><td>\(ax+b\)</td><td>\(Ax+B\) (The guess must include both terms even if \(b=0\))</td></tr>
              <tr><td>\(ax^2 + bx+c\)</td><td>\(Ax^2 + Bx + C\) (The guess must include all three terms even if \(b\) and \(c\) are zero)</td></tr>
              <tr><td>Higher-order polynomials</td><td>Polynomial of the same order as \(r(x)\)</td></tr>
              <tr><td>\(ae^{"{\\lambda x}"}\)</td><td>\(Ae^{"{\\lambda x}"}\)</td></tr>
              <tr><td>\(a \cos(\beta x) +b\sin(\beta x)\)</td><td>\(A \cos(\beta x) + B \sin(\beta x)\) (The guess must include both terms even if either \(a=0\) or \(b=0\))</td></tr>
              <tr><td>\((ax^2 + bx+c)e^{"{\\lambda x}"}\)</td><td>\((Ax^2 + Bx+C)e^{"{\\lambda x}"}\)</td></tr>
              <tr><td>\((a_2x^2 + a_1+a_0) \cos(\beta x) + \) \((b_2x^2 + b_1+b_0) \sin(\beta x)\)</td><td>\((A_2x^2 + A_1+A_0) \cos(\beta x) + \) \((B_2x^2 + B_1+B_0) \sin(\beta x)\)</td></tr>
              <tr><td>\((a_2x^2 + a_1+a_0) e^{"{\\alpha x}"} \cos(\beta x) + \) \((b_2x^2 + b_1+b_0) e^{"{\\alpha x}"} \sin(\beta x)\)</td><td>\((A_2x^2 + A_1+A_0) e^{"{\\alpha x}"} \cos(\beta x) + \) \((B_2x^2 + B_1+B_0) e^{"{\\alpha x}"} \sin(\beta x)\)</td></tr>
            </tbody>
          </TableLI>
        </SubList></li>
        <li>Cramer's rule:<SubList>
          <li>The system of equations:</li>
          <MathStuff>\[{"\\begin{gather} a_1z_1 + b_1z_2 = r_1 \\\\ a_2z_1 + b_2z_2 = r_2 \\end{gather}"}\]</MathStuff>
          <li>has a unique solution if and only if the determinant of the coefficients is not zero. In this case, the solution is:</li>
          <MathStuff>\[{"z_1 = \\frac{\\begin{vmatrix} r_1 & b_1 \\\\ r_2 & b_2\\end{vmatrix}}{\\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}} \\qquad z_2= \\frac{\\begin{vmatrix}a_1 & r_1 \\\\ a_2 & r_2\\end{vmatrix}}{\\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}}"}\]</MathStuff>
        </SubList></li>
        <li>Method of variation of parameters:<SubList>
          <li>Sometimes, \(r(x)\) is not a combination of polynomials, exponentials, or sines and cosines.</li>
          <li>When this is the case, the method of undetermined coefficients does not work, and we have to use another approach to find a particular solution to the differential equation. We use an approach called the <b>method of variation of parameters</b>.</li>
          <li>Consider the differential equation:</li>
          <MathStuff>{"y'' + py' + qy = r(x)"}</MathStuff>
          <li>where \(p\) and \(q\) are constants.</li>
          <li>If the general solution to the complementary equation is given by \(c_1y_1(x)+c_2y_2(x)\), we are going to look for a particular solution of the form:</li>
          <MathStuff>{"y_p(x)=u(x)y_1(x)+v(x)y_2(x)"}</MathStuff>
          <li>To find a particular solution, use Cramer's rule to find functions \(u'(x)\) and \(v'(x)\) satisfying:</li>
          <MathStuff>\[{"\\begin{gather} u' y_1 + v' y_2 = 0 \\\\ u' y_1' + v' y_2' = r(x) \\end{gather}"}\]</MathStuff>
          <li>Then, integrate \(u'\) and \(v'\) to find \(u(x)\) and \(v(x)\).</li>
        </SubList></li>
        <li>Finding power series solutions to differential equations:<SubList>
          <li>Assume the differential equation has a solution of the form:</li>
          <MathStuff>y(x)=∑^\infty_{"{n=0}"} a_n x^n</MathStuff>
          <li>Differentiate the power series term by term to get:</li>
          <MathStuff>\begin{"{align}"} y'(x) &= ∑^\infty_{"{n=1}"} n a_n x^{"{n-1}"} \\ y''(x) &= ∑^\infty_{"{n=2}"} n (n-1) a_n x^{"{n-2}"} \end{"{align}"}</MathStuff>
          <li>Substitute the power series expressions into the differential equation.</li>
          <li>Re-index sums as necessary to combine terms and simplify the expression.</li>
          <li>Equate coefficients of like powers of \(x\) to determine values for the coefficients \(a_n\) in the power series.</li>
          <li>Substitute the coefficients back into the power series and write the solution.</li>
        </SubList></li>
      </ul>
    </div>
  </>;
}