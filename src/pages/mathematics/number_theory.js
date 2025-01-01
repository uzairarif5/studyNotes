import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import SubList from "../../articleRelatedStuff/SubList";

//Elementary number theory: pg 18

export const title = "Number Theory Notes";
export const sourcesColor = {35: null, 54: null, 4: null};
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
        <li data-source={35}>If \(p\) is prime and \(p|ab\), then \(p|a\) or \(p|b\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/gcdLemma7'>proof</a>).</li>
        <li data-source={35}><b>Fundamental Theorem of Arithmetic:</b> Every positive integer can be written as a product of primes (possibly with repetition).</li>
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
        <li>If \(2^p - 1\) is prime, then \(p\) is prime (<a href='https://www.deriveit.net/discrete_mathematics/prime_numbers/Mersenne_prime1'>proof</a>). Any prime number expressible in the form \(2^p - 1\) is said to be a <b>Mersenne prime</b>. There may be infinite of them.</li>
        <li>Any prime number expressible in the form \(2^{"{2^n}"}+1\) (where \(n\) is a positive integer greater than 0) is said to be a <b>Fermat prime</b>, and only five are known.</li>
        <li>There may be infinitely many primes expressible in the form \(n^2 + 1 \) where \(n\) is a positive integer.</li>
        <li><b>Dirichlet's Theorem:</b> Let \(a,b \gt 0\) and \((a,b)=1\), then arithmetic progression \(a, a+b, a+2b, \ldots \) contains infinitely many primes.</li>
        <li>There are infinite primes expressible in the form \(4n+3\) (<a href='https://www.deriveit.net/discrete_mathematics/prime_numbers/infinite_primes_4k_plus_3'>proof</a>).</li>
        <li>If \(n \gt 1\), then \(n\) is said to be <b>powerful</b> if all exponents in it's prime factorization are at least 2. A powerful number is a product of a square number and a cube number (<a href='https://www.deriveit.net/discrete_mathematics/prime_numbers/powerful_from_square_and_cube'>proof</a>).</li>
      </SubList></li>
      <li data-source={35}><b>Binomial Coefficient</b>:<SubList>
        <li>\(n(n - 1)(n - 2). . . 1 = n!\) is number of ways to order \(n\) objects.</li>
        <li>The <b>Binomial Coefficient</b> is number of ways to pick \(k\) of \(n\) objects.</li>
        <MathStuff>$${"\\binom{n}{k}=\\frac{n!}{(n-k)!k!}"}$$</MathStuff>
        <li>This is used in the <b>binomial theorem</b>:</li>
        <MathStuff>$${"(x+y)^n=\\sum^n_{k=0}\\binom{n}{k}x^{k}y^{n-k}"}$$</MathStuff>
        <li>See <a href='https://www.youtube.com/watch?v=2pYzly7jLqs'>this video</a> to understand the binomial theorem.</li>
      </SubList></li>
    </ul>
    <div style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={35}>
      <ul>
        <li data-source={54}>Divisors and multiples:<SubList>
          <li data-source={35}>\({"a|b, a|c \\implies a|(bx + cy) \\ \\forall x, y"}\) where \({"a, b, c, x, y \\in \\mathbb{Z}"}\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/divisibility1'>proof</a>).</li>
          <li data-source={35}>\({"\\gcd(a, b)"}\) is the greatest common divisor of \({"a"}\) and \({"b"}\). It can also be represented as \({"(a, b)"}\). <a href='https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/05%3A_Basic_Number_Theory/5.05%3A_More_on_GCD'>Every linear combination of \({"a"}\) and \({"b"}\) is a multiple of \({"\\gcd(a,b)"}\)</a>.</li>
          <li data-source={35}>If \((a, b) = 1\), then \(a\) and \(b\) are <b>coprime</b> <span data-source={54}>or <b>relatively prime</b></span>.</li>
          <li>Let \((a, b) = d\), then \((a/d, b/d) = 1\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility/gcdLemma8'>proof</a>).</li>
          <li> Smallest possible linear combination of \(a\) and \(b\) is \((a, b)\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility/linear_combination_smallest_gcd'>proof</a>).</li>
          <li data-source={35}>If \((a, m) = 1\) and \((b, m) = 1\), then \((ab, m) = 1\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/multiplicative'>proof</a>).</li>
          <li data-source={35}>If \(c|ab\) and \((c, a) = 1\), then \(c|b\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/other'>proof</a>).</li>
          <li>Let \((a_1,a_2,\ldots,a_n)=1\), then \(a_1,a_2,\ldots,a_n\) are said to be <b>relatively prime</b>. If \((a_i,a_j)=1\) for all pairs \(i\) and \(j\) with \(i \ne j\), then \(a_1,a_2,\ldots,a_n\) are said to be <b>pairwise relatively prime</b>.</li>
          <li>The <b>least common multiple</b> of \(a\) and \(b\), denoted \([a,b]\), is the least positive integer \(m\) such that \(a|m\) and \(b|m\).</li>
          <li>Let \({"a={p_1}^{a_1}{p_2}^{a_2}\\ldots{p_n}^{a_n}"}\) and let \({"b={p_1}^{b_1}{p_2}^{b_2}\\ldots{p_n}^{b_n}"}\), then:</li>
          <MathStuff>$${`\\begin{align}
          (a,b) &= {p_1}^{min \\{ a_1, b_1 \\} }{p_2}^{min \\{ a_2, b_2 \\} }\\ldots{p_n}^{min \\{ a_n, b_n \\} } \\\\
          [a,b] &= {p_1}^{max \\{ a_1, b_1 \\} }{p_2}^{max \\{ a_2, b_2 \\} }\\ldots{p_n}^{max \\{ a_n, b_n \\} } 
          \\end{align}`}$$</MathStuff>
          <li>This also means \((a,b)[a,b] = ab\).</li>
        </SubList></li>
      </ul>
      <ul className="ownExplanation">
        <li><b>The Euclidean Algorithm:</b><SubList>
          <li><ImgComp src={require("./number_theory_pics/1.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>
          <li>15 divides 105; 15 divides 225; 15 divides 1680; 15 divides 1905; 15 divides 11205. Thus 15 is a common divisor of 11205 and 1905.</li>
          <li><ImgComp src={require("./number_theory_pics/2.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>
          <li>The Euclidean Algorithm yields not only the greatest common divisor of a and b, d, but it also yields two constants h and k such that: d = ha + kb.</li>
        </SubList></li>
        <li>Exactly divides:<SubList>
          <li><a href='https://planetmath.org/exactlydivides'>Let \(a\) and \(b\) be integers and \(n\) a positive integer. Then \(a^m\) exactly divides \(b\) (denoted as \(a^n∥n\)) if \(a^n\) divides \(b\) but \(a^{"{n+1}"}\) does not</a>, meaning \(a\) divides \(b\) exactly \(n\) times.</li>
          <li>If a prime number \(p\) can divide \(n!\) at max \(e\) times, then \(e\) is:</li>
          <MathStuff>$${"\\left \\lfloor \\frac{n}{p} \\right \\rfloor + \\left \\lfloor \\frac{n}{p^2} \\right \\rfloor + \\left \\lfloor \\frac{n}{p^3} \\right \\rfloor \\ldots"}$$</MathStuff>
          <li>See <a href='https://www.youtube.com/watch?v=4p68aPqeegA'>this video</a> and <a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/legendres_formula'>this article</a>.</li>
          <li>There is a lower bound on \(e\) (<a href='https://www.deriveit.net/discrete_mathematics/divisibility_and_gcd/legendres_formula_lower_bound'>proof</a>):</li>
          <MathStuff>$${"e \\le \\frac{ n }{p - 1 }"}$$</MathStuff>
        </SubList></li>
        <li>Divisibility rules:<SubList>
          <li>An integer is divisible by 2 if its last digit is divisible by 2.</li>
          <li>An integer is divisble by 3 if the sum of its digits is divisible by 3.</li>
          <li>An integer is divisible by 5 if its last digit is 5 or 0.</li>
          <li>An integer is divisible by 6 if it is divisible by both 2 and 3.</li>
          <li>An integer is divisible by 7 if the alternating sum of blocks of three from is divisible by 7.</li>
          <li>An integer is divisible by 11 if the integer obtained by alternately adding and substracting the digits is divisible by 11.</li>
        </SubList></li>
      </ul>
    </div>
  </div>

  <h2 id="congruences">Congruences</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li data-source={54}><b>Modulo:</b><SubList>
        <li><a href='https://en.wikipedia.org/wiki/Modular_arithmetic'><b>Modular arithmetic</b> is a system of arithmetic for integers, where numbers "wrap around" when reaching a certain value, called the <b>modulus</b></a>.</li>
        <li>Let \(a\), \(b\), \(m\) be integers, with \(m = 0\). We say \(a\) is <b>congruent</b> to \(b\) modulo \(m\) (represented as \(a ≡ b \bmod m\)) if \(a\) and \(b\) have the same remainder when divided \(m\) (which is also if \(m|b-a\)) .</li>
        <li>Let \([a ≡ b \bmod m]\):<SubList>
          <li>If \([k ≡ j \bmod m]\), then \([a + k ≡ b + j \bmod m]\) and \([ak ≡ bj \bmod m]\)</li>
          <li>If \([n|m]\), then \([a ≡ b \bmod nm]\).</li>
          <li>\((a, m) = (b, m)\).</li>
          <li>If \(c\) is a positive integer, then \([ca ≡ cb \bmod cm]\).</li>
          <li>If \(d|a\), \(d|b\) and \(d|m\), then \([{"\\frac{a}{d} ≡ \\frac{b}{d} \\bmod \\frac{m}{d}"}]\).</li>
          <li>If \([c ≡ d \bmod m]\), \(c|a\) and \(d|b\), then \([{"\\frac{a}{d} ≡ \\frac{b}{d} \\bmod m"}]\).</li>
        </SubList></li>
        <li>Consider the congruence \(6a ≡ 6b \bmod 3\), which is true for all integers \(a\) and \(b\). It is a natural tendency to cancel out the 6 on each side, leaving \(a ≡ b \bmod 3\). This is wrong.</li>
        <li>\([ca ≡ cb \bmod m] \iff [a ≡ b \bmod m/(c, m)]\).</li>
        <li>If \((a ≡ b \bmod m)\), \((a ≡ b \bmod n)\) and gcd(m, n) = 1, then \((a ≡ b \bmod mn)\).</li>
        <li>If \(c\) is an even integer, then \([c^2 ≡ 0 \bmod 4]\). If \(c\) is an odd integer, then \([c^2 ≡ 1 \bmod 4]\) and \([c^2 ≡ 1 \bmod 8]\)</li>
        <li>If n is odd and \((3 ∤ n)\), then \((n^2 ≡ 1 \bmod 24)\).</li>
        <li>If n is a positve integer and \((n ≡ 3 \bmod 4)\), then n cannot be written as a sum of two square integers.</li>
        <li>If \(p\) is prime and \((a^2 ≡ b^2 \bmod p)\), then \((a ≡ ±b \bmod p)\).</li>
        <li>1 + 2 + 3 + ... + (n-1) ≡ 0 \(\bmod n\) if and only if \(n\) is odd.</li>
        <li>If 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + (n-1)<sup>2</sup> ≡ 0 \(\bmod n\), then n ≡ ±1 \(\bmod 6\).</li>
        <li>1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> + ... + (n-1)<sup>3</sup> ≡ 0 \(\bmod n\), then n is not congruent to 2 mod 4</li>
      </SubList></li>
      <li data-source={54}>Congruence modulo \(m\) is an equivalence relation on \(\mathbb{"{Z}"}\) (set of integers):<SubList>
        <li>Since any integer divides 0, then \(m | 0\), and therefore \(m | a - a\). This means \(a ≡ a \bmod m\), and this shows that congruence modulo \(m\) is reflexive on \(\mathbb{"{Z}"}\).</li>
        <li>If \(a ≡ b \bmod m\), then \(b ≡ a \bmod m\). This shows that congruence modulo \(m\) is symmetric on \(\mathbb{"{Z}"}\).</li>
        <li>If \(a ≡ b \bmod m\) and \(b ≡ c \bmod m\), then \(m | a - b\) and  \(m | b - c\), so \(m | (a - b) + (b - c)\), which means  \(m | a - c\). Therefore, \(a ≡ c \bmod m\). So congruence modulo \(m\) is transitive on \(\mathbb{"{Z}"}\).</li>
      </SubList></li>
      <li data-source={54}><b>Equivalence class:</b><SubList>
        <li>The set of integers \(\mathbb{"{Z}"}\) is partitioned into equivalence classes under modulo \(m\).</li>
        <li>\([x]\) denotes the equivalence class containing \(x\).</li>
        <TableLI>
          <thead>
            <tr><th>Equivalence classes of \(\mathbb{"{Z}"}\) under congruence modulo 4:</th></tr>
          </thead>
          <tbody>
            <tr><td>$${"\\begin{align} [0] &= \\{ x \\in \\mathbb{Z}:x≡0 \\bmod 4 \\} \\\\ &= \\{\\ldots, -8, -4, 0, 4, 8, \\dots \\} \\end{align}"}$$$${"\\begin{align} [1] &= \\{ x \\in \\mathbb{Z}: x≡1 \\bmod 4 \\} \\\\ &= \\{\\ldots, -7, -3, 1, 5, 9, \\dots \\} \\end{align}"}$$$${"\\begin{align} [2] &= \\{ x \\in \\mathbb{Z}: x≡2 \\bmod 4 \\} \\\\ &= \\{\\ldots, -6, -2, 2, 6, 10, \\dots \\} \\end{align}"}$$$${"\\begin{align} [3] &= \\{ x \\in \\mathbb{Z}: x≡3 \\bmod 4 \\} \\\\ &= \\{ \\ldots, -5, -1, 3, 7, 11, \\dots \\} \\end{align}"}$$</td></tr>
            <tr><td>\({"\\mathbb{Z}"}\) is partitioned into four classes.</td></tr>
          </tbody>
        </TableLI>
      </SubList></li>
      <li><b>Residue system:</b><SubList>
        <li data-source={35}>A <b>complete residue system mod m</b> is a collection of integers \(a_1 \ldots a_m\) such that \(a_i \not\equiv a_j \bmod m\) if \(i \ne j\) and any integer \(n\) is congruent to some \(a_i \bmod m\).</li>
        <li data-source={54}>The set \({"\\{0,1,2,3\\}"}\) is a complete residue system modulo 4 and so is \({"\\{ 6,-11,19,1988 \\}"}\).</li>
        <li data-source={35}>Take any complete residue system mod \(m\) and take the subset consisting of all the integers in it which are coprime to \(m\) - these will form a <b>reduced residue system</b>.</li>
        <li data-source={35}>If \(m = 12\), then \({"\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 \\}"}\) would be a complete residue system and the reduced residue system would be \({"\\{1, 5, 7, 11\\}"}\).</li>
        <li data-source={54}>The set \({"\\{ 0, 1, 2, \\ldots, m-1 \\} "}\) is said to be the <b>set of least nonnegative residues modulo m</b>.</li>
        <li data-source={4}>If \((a, m) = 1\) and if \(r^1, \ldots, r^{"{φ(m)}"}\) is a reduced residue system (modulo \(m\)), then \(ar^1, \ldots, ar^{"{φ(m)}"}\) is also a reduced residue system.</li>
        <li data-source={35}>The number of elements in a reduced residue system mod \(m\) is called <b>Euler's totient function</b>: \(\phi(m)\).</li>
        <li data-source={4}>A <b>totative</b> of a given positive integer \(m\) is an integer \(k\) such that \(0 \lt k \le m\) and \(k\) is coprime to \(m\). Euler's totient function \(\phi(m)\) counts the number of totatives of \(m\).</li>
        <li data-source={35}><b>Euler's Theorem:</b> If \((a, m) = 1\), then \({"a^{\\phi(m)} ≡ 1 \\bmod m"}\).</li>
      </SubList></li>
      <li>If \(p\) is prime and \((a^2 ≡ a \bmod p)\), then \((a ≡ 0)\) or \((a ≡ 1)\).</li>
      <li>Congruence (equation):<SubList>
        <li data-source={35}>A congruence (equation) is of the form \({"a_nx^n + a_{n-1}x^{n-1} + \\ldots + a_0 ≡ 0 \\bmod m"}\) where \(a_n \ldots a_0\) are integers.</li>
        <li data-source={54}>A congruence of the form \(ax ≡ b \bmod m\) is said to be a <b>linear congruence</b> in the variable \(x\). The congruence is linear in the sense that the variable \(x\) occurs to the first power.</li>
        <li data-source={54}>If one element of a conguence class is a solution to \(ax ≡ b \bmod m\), then all elements of the congruence class solutions of \(ax ≡ b \bmod m\). Any linear congruence in one variable has either no solution in \(\mathbb{"{Z}"}\) or infinitely many solutions in \(\mathbb{"{Z}"}\).</li>
        <li className="ownExplanation">Let \(g = (a, m)\). Since \(g\) is the smallest positive linear combination, then \(g = ap - mq\), and one of the solution to the linear congruence is \(\frac{"{b}{g}"}p\\).</li>
        <li className="ownExplanation">There are infinitely many solutions of the form: \(\frac{"{b}{g}"}p + \\frac{"{m}{g}"} n\), where \(n = 0, 1, 2, \\ldots\). A linear congruence has \\(g\\) incongruent solutions, so \(n = 0, 1, 2, \\ldots, (g-1)\) is sufficient.</li>
      </SubList></li>
      <li data-source={35}><b>Fermat's Little Theorem:</b> \(a^p ≡ a \bmod p \) for prime \(p\) and an integer \(a\).</li>
      <li data-source={35}><b>Freshman's dream:</b> \((x + y)^p ≡ x^p + y^p (\bmod p)\) where \(x\) and \(y\) are integers and \(p\) is prime.</li>
      <li data-source={35}>Inverses:<SubList>
        <li>If \((a, m) = 1\), then there is a unique integer \(b \bmod m\) such that \(ab ≡ 1 \bmod m\). This \(b\) is denoted by \({"\\frac{1}{a}"}\) or \(a^{"{-1}"} \bmod m\).</li>
        <li><b>Wilson's Theorem:</b> If \(p\) is a prime then \((p - 1)! ≡ -1 \bmod p\).</li>
        <li>The congruence \(x^2 ≡ -1 \bmod p\) is solvable if and only if \(p = 2\) or \(p ≡ 1 \bmod 4\). If \(p ≡ 1 \bmod 4\), then \(x = (\frac{"{p-1}{2}"})!\).</li>
      </SubList></li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li data-source={54}><b>Chinese Remainder Theorem:</b><SubList>
        <li>Suppose we have a system of congruences of moduli:</li>
        <MathStuff>$${"\\begin{align} x &≡ b_1 \\bmod m_1 \\\\ x &≡ b_2 \\bmod m_2 \\\\ & \\quad \\vdots \\\\ x &≡ b_k \\bmod m_k \\end{align}"}$$</MathStuff>
        <li><b>Chinese Remainder Theorem:</b> If the moduli are pairwise relatively prime, then the system has a unique solution mod \(m_1m_2 \ldots m_k\).</li>
        <li>Let \(M = m_1m_2 \ldots m_k\) and \(M_i = \frac{"{M}{m_i}"}\), then the solution is \(M_1M_1^{"{-1}"} b_1 + M_2M_2^{"{-1}"} b_2 + M_3M_3^{"{-1}"} b_3 + \ldots + M_kM_k^{"{-1}"} b_k\).</li>
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