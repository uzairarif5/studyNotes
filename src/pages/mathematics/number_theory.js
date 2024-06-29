
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import { TableLI } from "../../articleRelatedStuff/tableManager";
import SubList from "../../articleRelatedStuff/SubList";

//Elementary number theory: pg 18

export const title = "Number Theory Notes";
export const sourcesColor = {35: null, 54: null};
export const content = <>
  <h1>Number Theory</h1>
  {getSourcesOL(sourcesColor)}

  <h2 id="introduction_and_divisibility">Introduction And Divisibility</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li data-source={35}><b>Number theory</b> (at the most basic level) is the study of the properties of integers.</li>
      <li data-source={35}><b>Diophantine equation:</b><SubList>
        <li><a href='https://en.wikipedia.org/wiki/Diophantine_equation'>A <b>Diophantine equation</b> is an equation, typically a polynomial equation in two or more unknowns with integer coefficients, for which only integer solutions are of interest.</a></li>
        <li><u>Example:</u> The Pythagorean Theorem results in triples (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), etc.</li>
      </SubList></li>
      <li data-source={54}><b>Prime Numbers:</b><SubList>
        <li data-source={35}>A <b>prime number</b> is an integer \({"p > 1"}\) such that it cannot be written as \(p = ab\) with \({"a, b > 1"}\).</li>
        <li data-source={35}><b>Fundamental Theorem of Arithmetic:</b> Every positive integer can be written as a product of primes (possibly with repetition).</li>
        <li data-source={35}>If \(p\) is prime and \(p|ab\), then \(p|a\) or \(p|b\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/gcdLemma7'>proof</a>).</li>
        <li>Let \(n\) be a composite number, then \(n\) has a prime divisor \(p\) with \(p \le \sqrt{"{n}"}\) (<a href='https://www.deriveit.net/discrete_mathematics/prime_numbers/nCompositeSoPrimeDivisorLessThanRootN'>proof</a>).</li>
        <li><u>Sieve of Eratosthenes:</u><SubList>
          <li>Suppose we wish to find all prime numbers less than or equal to 50. Any composite less than or equal to 50 must have a prime divisor less than or equal to \(\sqrt{"{50}"}\), which is around 7.07.</li>
          <li>The prime numbers less than 7.07 are 2, 3, 5 and 7. In a list of integers from 2 to 50, we can delete all multiples of 2, 3, 5 and 7.</li>
          <TableLI>
            <tbody>
              <tr><td>
                2 3 4 5 6 7 8 9 10<br/>
                11 12 13 14 15 16 17 18 19 20<br/>
                21 22 23 24 25 26 27 28 29 30<br/>
                31 32 33 34 35 36 37 38 39 40<br/>
                41 42 43 44 45 46 47 48 49 50<br/>
              </td></tr>
              <tr><td>
                2 3 - 5 - 7 - 9 -<br/>
                11 - 13 - - - 17 - 19 -<br/>
                - - 23 - - - - - 29 -<br/>
                31 - - - - - 37 - - -<br/>
                41 - 43 - - - 47 - - -<br/>
              </td></tr>
            </tbody>
          </TableLI>
          <li>Any number remaining in the list is not divisible by 2, 3, 5 or 7, and cannot be composite.</li>
        </SubList></li>
        <li>For any positive integer \(n\), there are at least \(n\) consecutive composite positive integers (<a href='https://www.deriveit.net/discrete_mathematics/prime_numbers/nConsecutiveCompositeInteger'>proof</a>).</li>
        <li><b>Twin Prime Conjecture:</b> There are infinitely many prime numbers \(p\) for which \(p+2\) is also a prime number.</li>
        <li><b>Prime Number Theorem:</b><SubList>
          <li>Let \(\pi (x)\) be a function that outputs the number of prime numbers less than or equal to \(x\).</li>
          <li>The Prime Number Theorem states:</li>
          <MathStuff>$${"\\lim_{x \\to \\infty} \\frac{\\pi (x) \\ln(x)}{x} = 1"}$$</MathStuff>
          <li>This means for large \(x\), \(\pi (x)\) may be approximated by \({"\\frac{x}{\\ln x}"}\).</li>
        </SubList></li>
        <li><b>Goldbach's conjecture:</b> Every even integer greater than 2 can be expressed as the sum of two prime numbers.</li>
        <li>Any prime number expressible in the form \(2^p - 1\) with \(p\) prime is said to be <b>Mersenne prime</b>. There may be infinite of them.</li>
        <li>Any prime number expressible in the form \(2^{"{2^n}"}+1\) (where \(n\) is a positive integer greater than 0) is said to be a <b>Fermat prime</b>, and only five are known.</li>
        <li>There may be infinitely many primes expressible in the form \(n^2 + 1 \) where \(n\) is a positive integer.</li>
        <li><b>Dirichlet's Theorem:</b> Let \(a,b \gt 0\) and \((a,b)=1\), then arithmetic progression \(a, a+b, a+2b, \ldots \) contains infinitely many primes.</li>
        <li>There are infinite primes expressible in the form \(4n+3\) (<a href='https://www.deriveit.net/discrete_mathematics/prime_numbers/infinite_primes_4k_plus_3'>proof</a>).</li>
      </SubList></li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={35}>
      <li data-source={35}>Common divisor:<SubList>
        <li>\({"a|b, a|c \\implies a|(bx + cy) \\ \\forall x, y"}\) where \({"a, b, c, x, y \\in \\mathbb{Z}"}\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/divisibility1'>proof</a>).</li>
        <li>\({"\\gcd(a, b)"}\) is the greatest common divisor of \({"a"}\) and \({"b"}\). It can also be represented as \({"(a, b)"}\). <a href='https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/05%3A_Basic_Number_Theory/5.05%3A_More_on_GCD'>Every linear combination of \({"a"}\) and \({"b"}\) is a multiple of \({"\\gcd(a,b)"}\)</a>.</li>
        <li>If \((a, b) = 1\), then \(a\) and \(b\) are <b>coprime</b> <span data-source={54}>or <b>relatively prime</b></span>.</li>
        <li data-source={54}>Let \((a, b) = d\), then \((a/d, b/d) = 1\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility/gcdLemma8'>proof</a>).</li>
        <li data-source={54}> Smallest possible linear combination of \(a\) and \(b\) is \((a, b)\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility/linear_combination_smallest_gcd'>proof</a>).</li>
        <li>If \((a, m) = 1\) and \((b, m) = 1\), then \((ab, m) = 1\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/multiplicative'>proof</a>).</li>
        <li>If \(c|ab\) and \((c, a) = 1\), then \(c|b\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/other'>proof</a>).</li>
        <li data-source={54}>Let \((a_1,a_2,\ldots,a_n)=1\), then \(a_1,a_2,\ldots,a_n\) are said to be <b>relatively prime</b>. If \((a_i,a_j)=1\) for all pairs \(i\) and \(j\) with \(i \ne j\), then \(a_1,a_2,\ldots,a_n\) are said to be <b>pairwise relatively prime</b>.</li>
      </SubList></li>
      <li data-source={54}>Least common multiple:<SubList>
        <li>The <b>least common multiple</b> of \(a\) and \(b\), denoted \([a,b]\), is the least positive integer \(m\) such that \(a|m\) and \(b|m\).</li>
        <li>Let \({"a={p_1}^{a_1}{p_2}^{a_2}\\ldots{p_n}^{a_n}"}\) and let \({"b={p_1}^{b_1}{p_2}^{b_2}\\ldots{p_n}^{b_n}"}\), then:</li>
        <MathStuff>$${`\\begin{align}
        (a,b) &= {p_1}^{min \\{ a_1, b_1 \\} }{p_2}^{min \\{ a_2, b_2 \\} }\\ldots{p_n}^{min \\{ a_n, b_n \\} } \\\\
        [a,b] &= {p_1}^{max \\{ a_1, b_1 \\} }{p_2}^{max \\{ a_2, b_2 \\} }\\ldots{p_n}^{max \\{ a_n, b_n \\} } 
        \\end{align}`}$$</MathStuff>
        <li>This also means \((a,b)[a,b] = ab\).</li>
        <li>\([a, b] = 1\) if and only if \((a,b)\).</li>
      </SubList></li>
      <li data-source={35}><b>Euclidean Algorithm:</b><SubList numbered>
        <li>If \({"a, b < 0"}\), replace with negative</li>
        <li>If \({"a > b"}\), switch \(a\) and \(b\)</li>
        <li>If \({"a = 0"}\), return \(b\)</li>
        <li>Since \({"a > 0"}\), write \({"b = aq + r"}\) with \({"0 ≤ r < a"}\). Replace \({"(a, b)"}\) with \((r, a)\) and go to Step 3.</li>
      </SubList></li>
      <li data-source={35}><b>Binomial Coefficient</b>:<SubList>
        <li>\(n(n − 1)(n − 2). . . 1 = n!\) is number of ways to order \(n\) objects.</li>
        <li>The <b>Binomial Coefficient</b> is number of ways to pick \(k\) of \(n\) objects.</li>
        <MathStuff>$${"\\binom{n}{k}=\\frac{n!}{(n-k)!k!}"}$$</MathStuff>
        <li>This is used in the <b>binomial theorem</b>:</li>
        <MathStuff>$${"(x+y)^n=\\sum^n_{k=0}\\binom{n}{k}x^{k}y^{n-k}"}$$</MathStuff>
        <li>See <a href='https://www.youtube.com/watch?v=2pYzly7jLqs'>this video</a> to understand the binomial theorem.</li>
      </SubList></li>
      <li className="ownExplanation">Exactly divides:<SubList>
        <li><a href='https://planetmath.org/exactlydivides'>Let \(a\) and \(b\) be integers and \(n\) a positive integer. Then \(a^m\) exactly divides \(b\) (denoted as \(a^n∥n\)) if \(a^n\) divides \(b\) but \(a^{"{n+1}"}\) does not</a>, meaning \(a\) divides \(b\) exactly \(n\) times.</li>
        <li>A prime number \(p\) can divide \(n!\) at max \(e\) times, where \(e\) is:</li>
        <MathStuff>$${"\\left \\lfloor \\frac{n}{p} \\right \\rfloor + \\left \\lfloor \\frac{n}{p^2} \\right \\rfloor + \\left \\lfloor \\frac{n}{p^3} \\right \\rfloor \\ldots"}$$</MathStuff>
        <li>See <a href='https://www.youtube.com/watch?v=4p68aPqeegA'>this video</a> and <a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/legendres_formula'>this article</a>.</li>
        <li>There is a lower bound on \(e\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/legendres_formula_lower_bound'>proof</a>):</li>
        <MathStuff>$${"e \\le \\frac{ n }{p - 1 }"}$$</MathStuff>
      </SubList></li>
    </ul>
  </div>

  <h2 id="congruences">Congruences</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={35}>
      <li><b>Modulo:</b><SubList>
        <li><a href='https://en.wikipedia.org/wiki/Modular_arithmetic'><b>Modular arithmetic</b> is a system of arithmetic for integers, where numbers "wrap around" when reaching a certain value, called the <b>modulus</b></a>.</li>
        <li>Let \(a\), \(b\), \(m\) be integers, with \(m = 0\). We say \(a\) is <b>congruent</b> to \(b\) modulo \(m\) (represented as \(a ≡ b \mod m\)) if \(a\) and \(b\) have the same remainder when divided \(m\) (which is also if \(m|b-a\)) .</li>
        <li>If [\(a ≡ b \mod m\)] and [\(c ≡ d \mod m\)], then [\(a + c ≡ b + d \mod m\)] (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/modLemma1'>proof</a>) and [\(ac ≡ bd \mod m\)] (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/modLemma2'>proof</a>).</li>
        <li>If \((x, m) = 1\) and [\(ax ≡ bx \mod m\)], then [\(a ≡ b \mod m\)] (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/modLemma3'>proof</a>).</li>
      </SubList></li>
      <li data-source={54}><b>Equivalence class:</b><SubList>
        <li>The set of integers \(\mathbb{"{Z}"}\) is partitioned into equivalence classes under modulo \(m\).</li>
        <li>\([x]\) denotes the equivalence class containing \(x\).</li>
        <TableLI>
          <thead>
            <tr><th>Equivalence classes of \(\mathbb{"{Z}"}\) under congruence modulo 4:</th></tr>
          </thead>
          <tbody>
            <tr><td>$${"\\begin{align} [0] &= \\{ x \\in \\mathbb{Z}:x≡0 \\mod 4 \\} \\\\ &= \\{\\ldots, -8, -4, 0, 4, 8, \\dots \\} \\end{align}"}$$$${"\\begin{align} [1] &= \\{ x \\in \\mathbb{Z}: x≡1 \\mod 4 \\} \\\\ &= \\{\\ldots, -7, -3, 1, 5, 9, \\dots \\} \\end{align}"}$$$${"\\begin{align} [2] &= \\{ x \\in \\mathbb{Z}: x≡2 \\mod 4 \\} \\\\ &= \\{\\ldots, -6, -2, 2, 6, 10, \\dots \\} \\end{align}"}$$$${"\\begin{align} [3] &= \\{ x \\in \\mathbb{Z}: x≡3 \\mod 4 \\} \\\\ &= \\{ \\ldots, -5, -1, 3, 7, 11, \\dots \\} \\end{align}"}$$</td></tr>
            <tr><td>\({"\\mathbb{Z}"}\) is partitioned into four classes.</td></tr>
          </tbody>
        </TableLI>
      </SubList></li>
      <li><b>Residue system:</b><SubList>
        <li><a href='https://artofproblemsolving.com/wiki/index.php/Residue_class'>In modular arithmetic, a <b>residue</b> of an integer \(a\) in modulo \(n\) is the unique value of \(0\leq r \leq n-1\) such that \(a=kn + r\). In the context of division, a residue is simply a remainder.</a></li>
        <li>A <b>complete residue system mod m</b> is a collection of integers \(a_1 \ldots a_m\) such that \(a_i \not\equiv a_j \mod m\) if \(i \ne j\) and any integer \(n\) is congruent to some \(a_i \mod m\).</li>
        <li data-source={54}>The set \({"\\{0,1,2,3\\}"}\) is a complete residue system modulo 4 and so is \({"\\{ 6,-11,19,1988 \\}"}\).</li>
        <li>Take any complete residue system mod \(m\) and take the subset consisting of all the integers in it which are coprime to \(m\) - these will form a <b>reduced residue system</b>.</li>
        <li data-source={54}>The \({"\\{ 0, 1, 2, \\ldots, m-1 \\} "}\) is said to be the <b>set of least nonnegative residue modulo m</b>.</li>
        <li>If \(m = 12\), then \({"\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 \\}"}\) would be a complete residue and the reduced residue would be \({"\\{1, 5, 7, 11\\}"}\).</li>
        <li>The number of elements in a reduced residue system mod m is called <b>Euler's totient function</b>: \(\phi(m)\) (ie., the number of positive integers \(≤ m\) and coprime to \(m\)).</li>
        <li><b>Euler's Theorem:</b> If \((a, m) = 1\), then \({"a^{\\phi(m)} ≡ 1 \\mod m"}\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/eulers_theorem'>proof</a>).</li>
      </SubList></li>
      <li data-source={54}><b>Linear Congruences:</b><SubList>
        <li>A congruence of the form \(ax ≡ b \mod m\) is said to be a <b>linear congruence</b> in the variable \(x\). The congruence is linear in the sense that the variable \(x\) occurs to the first power.</li>
        <li></li>
        <li></li>
      </SubList></li>
      <li><b>Fermat's Little Theorem:</b> \(a^p ≡ a \mod p \) for prime \(p\) and an integer \(a\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/fermats_little_theorem'>proof</a>).</li>
      <li><b>Freshman's Dream:</b> \((x + y)^p ≡ x^p + y^p (\mod p)\) where \(x\) and \(y\) are integers and \(p\) is prime (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/freshmans_dream'>proof</a>).</li>
      <li>Inverses:<SubList>
        <li>If \((a, m) = 1\), then there is a unique integer \(b \mod m\) such that \(ab ≡ 1 \mod m\). This \(b\) is denoted by \({"\\frac{1}{a}"}\) or \(a^{"{-1}"} \mod m\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/modular_inverse'>proof</a>).</li>
        <li>The congruence \(x^2 ≡ 1 \mod p\) has only the solutions \(x ≡ ±1 \mod p\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/x_square_solution'>proof</a>).</li>
        <li><b>Wilson's Theorem:</b> If \(p\) is a prime then \((p - 1)! ≡ -1 \mod p\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/wilsons_theorem'>proof</a>).</li>
        <li>The congruence \(x^2 ≡ -1 \mod p\) is solvable if and only if \(p = 2\) or \(p ≡ 1 \mod 4\). If \(p ≡ 1 \mod 4\), then \(x = (\frac{"{p-1}{2}"})!\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/x_square_solvable'>proof</a>).</li>
      </SubList></li>
      <li>Congruence (equation):<SubList>
        <li>A congruence (equation) is of the form \({"a_nx^n + a_{n-1}x^{n-1} + \\ldots + a_0 ≡ 0 \\mod m"}\) where \(a_n \ldots a_0\) are integers.</li>
        <li><b>Linear Congruence:</b> \(ax ≡ b \mod m\).</li>
        <li>Let \(g = (a, m)\). Then there is a solution to \(ax ≡ b \mod m\) if and only if \(g|b\). <a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/congruence_solution'>How to find solutions?</a></li>
      </SubList></li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={35}>
      <li>Chinese Remainder Theorem:<SubList>
        <li>Suppose we have a systme of congruences of moduli:</li>
        <MathStuff>$${"\\begin{align} x &≡ a_1 \\mod m_1 \\\\ x &≡ a_2 \\mod m_2 \\\\ & \\quad \\vdots \\\\ x &≡ a_k \\mod m_k \\end{align}"}$$</MathStuff>
        <li><b>Chinese Remainder Theorem:</b> If the moduli are coprime in pairs (\((m_i, m_j ) = 1\) for \(i \ne j\)), then the system has a unique solution mod \(m_1m_2 \ldots m_k\) (<a href='https://www.deriveit.net/discrete_mathematics/modular_arithmetic/chinese_remainder_theorem'>proof</a>).</li>
      </SubList></li>
    </ul>
  </div>
</>

/*
Read about:
  Primality Testing
  Factorization
  Pollard Rho 
  Hensel’s Lemma
  Primitive Roots (Prime Powers)
  Index Calculus
*/