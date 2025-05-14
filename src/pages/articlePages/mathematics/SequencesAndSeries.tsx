import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export default function SequenceAndSeries(){
  return <>
    <h2>Sequences And Series</h2>
    <div className="content">
      <div data-source={65} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
        <ul>
          <li>Terminology of sequences:<SubList>
            <li>An infinite sequence (denoted as \({"\\{ a_n \\}"}\) or \({"\\{ a_n \\}^\\infty_{n=1}"}\)) is an ordered list of numbers of the form:</li>
            <MathStuff>$$a_1,a_2, \ldots , a_n, \ldots $$</MathStuff>
            <li>The subscript \(n\) is called the <b>index variable</b> of the sequence. Each number \(a_n\) is a term of the sequence.</li>
            <li>Sometimes sequences are defined by <b>explicit formulas</b>, in which case \(a_n=f(n)\) for some function \(f(n)\) defined over the positive integers.</li>
            <li>In a <b>recurrence relation</b>, one term (or more) of the sequence is given explicitly, and subsequent terms are defined in terms of earlier terms in the sequence.</li>
            <li>Note that the index does not have to start at \(n=1\) but could start with other integers. For example:</li>
            <MathStuff>$$a_0, a_1,a_2, \ldots $$</MathStuff>
            <li>Consider the ordered list \((2,4,8,16,32, \ldots)\). We can write the \(n\)th term by an explicit formula: \(a_n = 2^n\) or by the recurrence relation: \(a_n = 2 a_{"{n-1}"}\). We can write the sequence like this: \({"\\{ 2^n \\}_{n=1}^\\infty"}\).</li>
          </SubList></li>
          <li><b>Arithmetic sequence:</b><SubList>
            <li>In an <b>arithmetic sequence</b>, the difference between every pair of consecutive terms is the same.</li>
            <li>Consider the sequence \((3,7,11,15,19, \ldots)\). The terms can be described by the recurrence relation:</li>
            <MathStuff>$$a_n = {"{\\begin{cases} a_1 = 3 \\\\ a_n = a_{n-1} + 4 \\end{cases}}"}$$</MathStuff>
            <li>The terms can be described by the explicit formula \(a_n = 4n-1\).</li>
            <li className="ownExplanation">The general explicit formula is: \(a_n = a_0 + (n-1)d\) where \(d\) is the difference.</li>
          </SubList></li>
          <li><b>Geometric sequence:</b><SubList>
            <li>In a geometric sequence, the ratio of every pair of consecutive terms is the same. For example, consider the sequence:</li>
            <MathStuff>$$ 2, -\frac{"{2}{3}"},  \frac{"{2}{9}"}, \frac{"{2}{27}"}, - \frac{"{2}{81}"}, \ldots $$</MathStuff>
            <li>We see that the ratio of any term to the preceding term is \(-\frac{"{1}{3}"}\). Assuming this pattern continues, this sequence is a geometric sequence. It can be defined recursively as:</li>
            <MathStuff>$$ a_n = {"{\\begin{cases} a_1 = 2 \\\\ a_n = - \\frac{a_{n-1}}{3} \\end{cases}}"} $$</MathStuff>
            <li>We can also use the explicit formula:</li>
            <MathStuff>$$ a_n = 2 \left( -\frac{"{1}{3}"} \right)^{"{n-1}"} $$</MathStuff>
            <li className="ownExplanation">The general explicit formula is: \(a_n = a_0 r^{"{n-1}"}\) where \(r\) is the ratio.</li>
          </SubList></li>
          <li>Limit of a sequence:<SubList>
            <li>Given a sequence \({"\\{a_n\\}"}\), if the terms \(a_n\) become arbitrarily close to a finite number \(L\) as \(n\) becomes sufficiently large, we say \({"\\{a_n\\}"}\) is a <b>convergent sequence</b> and \(L\) is the limit of the sequence. In this case, we write: \(\lim_{"{n \\to \\infty}"} a_n = L\)</li>
            <li>If a sequence \({"\\{a_n\\}"}\) is not convergent, we say it is a <b>divergent sequence</b>.</li>
            <TableLI>
              <caption>Definition</caption>
              <tbody>
                <tr><td>A sequence \({"\\{a_n\\}"}\) converges to a real number \(L\) if for all \(ε \gt 0\), there exists an integer \(N\) such that \(|a_n-L| \lt ε\) if \(n≥N\). The number \(L\) is the limit of the sequence and we write: \[\lim_{"{n \\to \\infty}"} a_n = L\]</td></tr>
              </tbody>
            </TableLI>
            <li>Consider a sequence \({"\\{a_n\\}"}\) and suppose there exists a real number \(L\) such that the sequence \({"\\{a_n\\}"}\) converges to \(L\). Suppose \(f\) is a continuous function at \(L\). The sequence \({"\\{f(a_n) \\}"}\) converges to \(f(L)\). If \({"\\{ f(a_n) \\}"}\) is not defined for all \(a_n\), there should exist an integer \(N\) such that \(f\) is defined at all values \(a_n\) for \(n≥N\).</li>
            <TableLI>
              <caption>Squeeze theorem for sequences</caption>
              <tbody>
                <tr><td>
                  Consider sequences \({"\\{a_n\\}"}\), \({"\\{b_n \\}"}\), and \({"\\{ c_n \\}"}\). Suppose there exists an integer \(N\) such that:
                  \[a_n≤b_n≤c_n \text{"{ for all }"} n≥N\]
                  If there exists a real number \(L\) such that:
                  \[ \lim_{"{n \\to \\infty}"} a_n =L= \lim_{"{n \\to \\infty}"} c_n\]
                  then \({"\\{ b_n \\}"}\) converges and \(\lim_{"{n \\to \\infty}"} b_n=L\).
                </td></tr>
              </tbody>
            </TableLI>
            <li>A sequence \({" \\{a_n \\}"}\) is bounded above if there exists a real number \(M\) such that \(a_n \le M \) for all positive integers \(n\).</li>
            <li>A sequence \({" \\{a_n \\}"}\) is bounded below if there exists a real number \(M\) such that \(a_n \ge M \) for all positive integers \(n\).</li>
            <li>A sequence \({" \\{a_n \\}"}\) is a <b>bounded sequence</b> if it is bounded above and bounded below. Otherwise it is an <b>unbounded sequence</b>.</li>
            <li>A sequence \({" \\{a_n \\}"}\) is increasing for all \(n≥n_0\) if \({"a_{n+1} \\ge a_n"}\) for all \(n≥n_0\).</li>
            <li>A sequence \({" \\{a_n \\}"}\) is decreasing for all \(n≥n_0\) if \({"a_{n+1} \\le a_n"}\) for all \(n≥n_0\).</li>
            <li>A sequence \({" \\{a_n \\}"}\) is a <b>monotone sequence</b> for all \(n≥n_0\) if it is increasing for all \(n≥n_0\) or decreasing for all \(n≥n_0\).</li>
            <li><u><b>Monotone convergence theorem:</b></u> If \({" \\{a_n \\}"}\) is a bounded sequence and there exists a positive integer \(n_0\) such that \({" \\{a_n \\}"}\) is monotone for all \(n≥n_0\), then \({" \\{a_n \\}"}\) converges.</li>
          </SubList></li>
          <li>Sums and series:<SubList>
            <li>We have seen that a sequence is an ordered set of terms. If you add these terms together, you get a <b>series</b>.</li>
            <li>An <b>infinite series</b> is a sum of infinitely many terms and is written in the form:</li>
            <MathStuff>$$ \sum^\infty_{"{n=1}"} a_n = a_1 + a_2 + a_3 + \dots $$</MathStuff>
            <li>A \(k\)th <b>partial sum</b> of an infinite series is a finite sum of the form:</li>
            <MathStuff>$$ \sum^k_{"{n=1}"} a_n = a_1 + a_2 + a_3 + \dots + a_k $$</MathStuff>
            <li>Let \(S_k\) be the \(k\)th partial sum, and let \({"\\{S_k\\}"}\) be sequence of partial sums. If \({"\\{S_k\\}"}\) converges (i.e. \(S_k\) approaches a real number when \(k\) goes to infinity), then the infinite series converges.</li>
            <li>If \({"\\{S_k\\}"}\) diverges, then the infinite series diverges.</li>
            <li className="ownExplanation">An <b>arithmetic series</b> is the sum of an arithmetic sequence. A general formula for it is \(S_k = \frac{"{k}{2}(2 a_0 + (k-1)d)"}\).</li>
          </SubList></li>
          <li>Algebraic properties of convergent series:<SubList>
            <li>Let \(\sum^\infty_{"{n=1}"} a_n\) and \(\sum^\infty_{"{n=1}"} b_n\) be convergent series.</li>
            <li>\(\sum^\infty_{"{n=1}"} a_n + b_n\) = \(\sum^\infty_{"{n=1}"} a_n\) + \(\sum^\infty_{"{n=1}"} b_n\)</li>
            <li>\(\sum^\infty_{"{n=1}"} a_n - b_n\) = \(\sum^\infty_{"{n=1}"} a_n\) - \(\sum^\infty_{"{n=1}"} b_n\)</li>
            <li>c\(\sum^\infty_{"{n=1}"} a_n\) = \(\sum^\infty_{"{n=1}"} ca_n\)</li>
          </SubList></li>
          <li><b>Geometric series:</b><SubList>
            <li>A <b>geometric series</b> is any series that we can write in the form:</li>
            <MathStuff>$$ a + ar + ar^2 + ar^3 + \ldots = \sum^\infty_{"{n=1}"} ar^{"{n-1}"} $$</MathStuff>
            <li>The sum for a partial series is:</li>
            <MathStuff>$$ S_k = \frac{"{a(1-r^k)}{1-r}"} $$</MathStuff>
            <li>If \(|r| \lt 1\), \(S_k → a/(1-r)\) (i.e. the series converges), and if \(|r| \ge 1\), \(S_k\) diverges.</li>
          </SubList></li>
          <li>Telescoping series:<SubList>
            <li>A <b>telescoping series</b> is a series in which most of the terms cancel in each of the partial sums, leaving only some of the first terms and some of the last terms.</li>
            <li>For example, any series of the form:</li>
            <MathStuff>$$\begin{"{aligned}"} \sum^k_{"{n=1}"} [b_n - b_{"{n+1}"}] &= b_1 - b_2 + b_2 - b_3 + \dots + b_k - b_{"{k+1}"} \\ &= b_1 - b_{"{k+1}"} \end{"{aligned}"}$$</MathStuff>
            <li>If \(b_n\) converegs to \(B\) when \(n \to \infty\):</li>
            <MathStuff>$$ \sum^\infty_{"{n=1}"} [b_n - b_{"{n+1}"}] = b_1 - B $$</MathStuff>
            </SubList></li>
        </ul>
        <ul className={"ownExplanation"}>
          <li><b>Divergence test:</b><SubList>
            <li>If \(\lim_{"{n \\to \\infty}"} a_n = L\) where \(L\) is a non-zero constant or if \(\lim_{"{n \\to \\infty}"} a_n \) does not exist, then \(\sum^∞_{"{n=1}"} a_n\) diverges.</li>
            <li>If \(\lim_{"{n \\to \\infty}"} a_n = 0\), then \(\sum^∞_{"{n=1}"} a_n\) may or may not converge.</li>
            <li>A <b>harmonic series</b> \(\left( 1 + {"\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}"} + \ldots \right)\) does not converge.</li>
          </SubList></li>
          <li><b>Integral test:</b><SubList>
            <li>Consider a series \(\sum_{"{n=1}"}^∞ a_n\) with only positive terms.</li>
            <li>Let there be an integer \(N\) and a monotone decreasing function \(f\), such that \(f\) is defined on \([N, ∞)\) and \(f(n) = a_n\) for \(n \ge N\), then both the integral and the series below either converge or they both diverge:</li>
            <MathStuff>$$ \sum_{"{n=1}"}^\infty a_n \quad \int_N^\infty f(x) dx $$</MathStuff>
            <li>We can find an approximation of \(\sum_{"{n=N}"}^∞ a_n\) using this:</li>
            <MathStuff>$$ \int^\infty_N f(x) dx \le \sum_{"{n=N}"}^\infty a_n \le a_N + \int_N^\infty f(x) dx $$</MathStuff>
          </SubList></li>
        </ul>
      </div>
      <div data-source={65} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
        <ul>
          <li><b>The p-Series:</b><SubList>
            <li>For any real number \(p\), the series \(\sum^\infty_{"{n=1}"}\frac{"{1}{n^p}"}\) is called a <b>p-series</b>.</li>
            <li>The p-series diverges if \(p \le 1\).</li>
            <li>If \(p \gt 1\), then \(\sum^\infty_{"{n=1}"}\frac{"{1}{n^p}"}\) converges because\(\int^\infty_1 \frac{"{1}{x^p}"} dx\) converges.</li>
            <MathStuff>$$ \int^\infty_1 \frac{"{1}{x^p}"} dx = \frac{"{1}{p-1}"} \text{"{ if }"} p \gt 1$$</MathStuff>
          </SubList></li>
          <li>Remainder estimate for the integral test:<SubList>
            <li>Suppose \(\sum_{"{n=1}"}^∞ a_n\) is a convergent series with positive terms.</li>
            <li>Let \(S_N\) be the \(N\)th partial sum of \(\sum_{"{n=1}"}^∞ a_n\).</li>
            <li>Let \(R_N\) be defined as:</li>
            <MathStuff>$$ R_N = \sum_{"{n=N}"}^∞ a_n - S_N = \sum_{"{n=N+1}"}^∞ a_n$$</MathStuff>
            <li>This means:</li>
            <li>The <b>remainder estimate</b>.</li>
          </SubList></li>
          <li><b>Comparison Test:</b><SubList>
            <li>Suppose there exists an integer \(N\) such that \(0≤ a_n ≤ b_n\) for all \(n≥N\). If \(\sum^∞_{"{n=1}"} b_n\) converges, then \(\sum^∞_{"{n=1}"} a_n\) converges.</li>
            <li>Suppose there exists an integer \(N\) such that \(a_n \ge b_n \ge 0\) for all \(n≥N\). If \( \sum^∞_{"{n=1}"} b_n \) diverges, then \(\sum^∞_{"{n=1}"} a_n\) diverges.</li>
          </SubList></li>
          <li><b>Limit Comparison Test:</b><SubList>
            <li>Let \(a_n, b_n≥ 0\) for all \(n≥1\):<SubList opened>
              <li>If \(\lim_{"{n→∞}"} \frac{"{a_n}{b_n}"} = L ≠ 0\), then \(\sum^∞_{"{n=1}"} a_n\) and \(\sum^∞_{"{n=1}"} b_n\) both converge or both diverge.</li>
              <li>If \(\lim_{"{n→∞}"} \frac{"{a_n}{b_n}"} = 0\) and \(\sum^∞_{"{n=1}"} b_n\) converges, then \(\sum^∞_{"{n=1}"} a_n\) converges.</li>
              <li>If \(\lim_{"{n→∞}"} \frac{"{a_n}{b_n}"} = \infty\) and \(\sum^∞_{"{n=1}"} b_n\) diverges, then \(\sum^∞_{"{n=1}"} a_n\) diverges.</li>
            </SubList></li>
          </SubList></li>
          <li><b>Alternating Series:</b><SubList>
            <li>Any series whose terms alternate between positive and negative values is called an <b>alternating series</b>. An alternating series can be written in one of these forms:</li>
            <MathStuff>$$\begin{"{gather}"} \sum^{"{\\infty}"}_{"{n=1}"} (-1)^{"{n+1}"} b_n = b_1 - b_2 + b_3 - b_4 + b_5 - \cdots \\ \sum^{"{\\infty}"}_{"{n=1}"} (-1)^n b_n = - b_1 + b_2 - b_3 + b_4 - b_5 + \cdots \end{"{gather}"}$$</MathStuff>
            <li>Where \(b_n \gt 0\).</li>
            <li>If there exists \(N\) such that \(0 \lt b_{"{n+1}"} \le b_n\) for all \(n \ge N\) and if \(\lim_{"{n \\to \\infty}"} b_n = 0\), then it converges. This is known as the <b>alternating series test</b>.</li>
          </SubList></li>
          <li>Absolute convergence and conditional convergence:<SubList>
            <li>A series \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) exhibits <b>absolute convergence</b> if \(\sum^{"{\\infty}"}_{"{n=1}"} |a_n|\) converges. A series \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) exhibits <b>conditional convergence</b> if \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges but \(\sum^{"{\\infty}"}_{"{n=1}"} |a_n|\) diverges.</li>
            <li><u>Absolute Convergence Implies Convergence:</u> If \(\sum^{"{\\infty}"}_{"{n=1}"} |a_n|\) converges, then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges.</li>
          </SubList></li>
          <li><b>Ratio test:</b><SubList>
            <li>Let \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) be a series with nonzero terms, and let \(p = \lim_{"{n \\to \\infty}"} | \frac{"{a_{n+1}}{a_n}"} |\).</li>
            <li>If \(p \lt 1\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges absolutely.</li>
            <li>If \(p \gt 1\) or \(p=\infty\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) diverges.</li>
            <li>If \(p=1\), the test does not provide any information.</li>
          </SubList></li>
          <li><b>Root test:</b><SubList>
            <li>Let \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) be a series with nonzero terms, and let \(p = \sqrt[n]{"{|a_n|}"}\).</li>
            <li>If \(p \lt 1\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) converges absolutely.</li>
            <li>If \(p \gt 1\) or \(p=\infty\), then \(\sum^{"{\\infty}"}_{"{n=1}"} a_n\) diverges.</li>
            <li>If \(p=1\), the test does not provide any information.</li>
          </SubList></li>
          <li><b>Power series:</b><SubList>
            <li>A series of the form:</li>
            <MathStuff>$$ \sum^{"{\\infty}_{n=0}"} c_n (x-a)^n = c_0 + c_1 (x-a) + c_2(x-a)^2 + c_3 (x-a)^3 + c_4 (x-a)^4 + \cdots $$</MathStuff>
            <li>is a <b>power series</b> centered at \(x=a\).</li>
            <li>The set of values \(x\) for which the series converges is known as the <b>interval of convergence</b>. The value \(R\) is called the <b>radius of convergence</b>.</li>
          </SubList></li>
          <li>Properties of a power series:<SubList>
            <li>Suppose that the two power series \(\sum_{"{n=0}"}^{"{\\infty}"} c_n x^n\) and \(\sum_{"{n=0}"}^{"{\\infty}"} d_n x^n\) converge to the functions \(f\) and \(g\), respectively, on a common interval \(I\).</li>
            <li>The power series \(\sum_{"{n=0}"}^{"{\\infty}"} (c_n x^n ± d_nx^n)\) converges to \(f±g\) on \(I\).</li>
            <li>Let \(m \ge 0\) be an integer and \(b\) be a real number:<SubList opened>
              <li>The series \(\sum_{"{n=0}"}^{"{\\infty}"} b x^m c_n x^n\) converges to \(b x^m f(x)\) on \(I\).</li>
              <li>The series \(\sum_{"{n=0}"}^{"{\\infty}"} c_n (bx^m)^n\) converges to \(f(bx^m)\) for all x such that \(bx^m\) is in \(I\).</li>
            </SubList></li>
            <li>Let \(e^n\) be defined as:</li>
            <MathStuff>$${"\\begin{align} e_n &= c_0 d^n + c_1d^{n-1} + c_2 d^{n-2} + \\cdots +c_{n-1}d^1 + c_n d^0 \\\\ &= \\sum_{k=0}^n c_k d^{n-k} \\end{align}"}$$</MathStuff>
            <li>Then:</li>
            <MathStuff>$${" \\left( \\sum_{n=0}^{\\infty} c_n x^n \\right) \\left( \\sum_{n=0}^{\\infty} d_n x^n \\right) = \\sum_{n=0}^{\\infty} e_n x^n "}$$</MathStuff>
            <li>Where \(\sum{"_{n=0}^{\\infty}"} e_n x^n\) is known as the <b>Cauchy product</b> and it converges to \(f(x) * g(x)\) on \(I\).</li>
          </SubList></li>
          <li><b>Taylor/Maclaurin Series:</b><SubList>
            <li>If \(f\) has derivatives of all orders at \(x=a\), then the <b>Taylor series</b> for the function \(f\) at \(a\) is:</li>
            <MathStuff>$${" f(x) = \\sum^{\\infty}_{n=0} \\frac{f^{(n)}(a)}{n!}(x-a)^n "}$$</MathStuff>
            <li>The Taylor series for \(f\) at 0 is known as the <b>Maclaurin series</b> for \(f\).</li>
            <li>The \(n\)th partial sum is known as the \(n\)th <b>Taylor polynomials</b>. If \(a=0\), then they are known as <b>Maclaurin polynomials</b>.</li>
            <li><a href='https://en.wikipedia.org/wiki/Taylor_series'>A function is <b>analytic</b> at a point \(a\) if it is equal to the sum of its Taylor series in some open interval containing \(a\). A function may differ from the sum of its Taylor series, even if its Taylor series is convergent.</a></li>
            <li><a href='https://en.wikipedia.org/wiki/Non-analytic_smooth_function'>Consider the function below defined for every real number \(x\):</a></li>
            <MathStuff>$$ f(x) = {"\\begin{cases} e^{-1/x} &\\text{ if } x \\gt 0 \\\\ 0 &\\text{ if } x \\le 0 \\end{cases}"} $$</MathStuff>
            <li><a href='https://en.wikipedia.org/wiki/Non-analytic_smooth_function'>The function \(f\) is smooth, and all its derivatives at the origin are 0. Therefore, the Taylor series of \(f\) at the origin converges everywhere to the zero function, and so the Taylor series does not equal \(f(x)\) for \(x \gt 0\). Consequently, \(f\) is not analytic at the origin.</a></li>
            <li><b>Taylor's Theorem with Remainder:</b><SubList>
              <li>Let \(f\) be a function that can be differentiated \(n+1\) times on an interval \(I\) containing the real number \(a\). Let \(p_n\) be the \(n\)th Taylor polynomial of \(f\) at \(a\) and let \(R_n (x)\) be the \(n\)th remainder:</li>
              <MathStuff>$${" R_n(x) = f(x) - p_n(x) "}$$</MathStuff>
              <li>then for each \(x\) in the interval \(I\), there exists a real number \(c\) between \(a\) and \(x\) such that:</li>
              <MathStuff>$${" R_n(x) = \\frac{f^{(n+1)} (c)}{(n+1)!} (x-a)^{n+1} "}$$</MathStuff>
              <li>If there exists a real number \(M\) such that \(| f^{"{(n+1)}"}(x) | \le M\) for all \(x∈I\), then:</li>
              <MathStuff>$${" | R_n(x) | \\le \\frac{M }{(n+1)!} |x-a|^{n+1} "}$$</MathStuff>
              <li>for all \(x∈I\).</li>
              <li>If \(f\) has derivatives of all orders on an interval \(I\) containing \(a\), then the Taylor series converges to \(f(x)\) for all \(x\) in \(I\) if and only if \(\lim_{"{n \\to \\infty}"} R_n(x) = 0\) for all \(x\) in \(I\).</li>
            </SubList></li>
            <li>Convergence of Taylor Series:<SubList>
              <li>Suppose that \(f\) has derivatives of all orders on an interval \(I\) containing \(a\). Then the Taylor series:</li>
              <MathStuff>$${" \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n "}$$</MathStuff>
              <li>converges to \(f(x)\) for all \(x\) in \(I\) if and only if \(\lim_{"{n→\\infty}"} R_n (x)=0\) for all \(x\) in \(I\).</li>
            </SubList></li>
            <ImgComp src={"/articlePics/calculus_pics/29.png"} width="90%" />
          </SubList></li>
        </ul>
      </div>
    </div>
  </>;
}