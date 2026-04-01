import { MathStuff } from "../../articleRelatedStuff/MathStuff"; 
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import SubList from "../../articleRelatedStuff/SubList";

//Elementary number theory: pg 77

export const title = "Number Theory Notes";
export const sourcesColor = {35: null, 54: null, 4: null, 66: null};
export const content = <>
  <h1>Number Theory</h1>

  <h2>Basic Concepts</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li data-source={35}><b>Number theory</b> (at the most basic level) is the study of the properties of integers.</li>
      <li data-source={66}>Axioms for the set of integers:<SubList>
        <li>Assume \(a\), \(b\) and \(c\) are integers.</li>
        <li><b>Closure:</b> \(a+b\) and \(a \cdot b\) are integers.</li>
        <li><b>Commutative laws:</b> \(a + b = b+a\) and \(a \cdot b = b \cdot a\) for all inegers \(a\) and \(b\).</li>
        <li><b>Associative laws:</b> \((a + b)+c = a+(b+c)\) and \((a \cdot b) \cdot c = a \cdot (b \cdot c)\).</li>
        <li><b>Distributive laws:</b> \((a+b) \cdot c = ac + bc\).</li>
        <li><b>Identity elements:</b> \(a+0=a\) and \(a \cdot 1 = a\).</li>
        <li><b>Additive inverse:</b> For every integer \(a\), there exists an <b>additive inverse</b> \(x\) such that \(a+x=0\).</li>
        <li><b>Cancellation law:</b> If \(a \cdot c = b\) and \(c \neq 0\), then \(a=b\).</li>
        <li><b>Closure for the positive integers:</b> \(a+b\) and \(a \cdot b\) are positive integers whenever \(a\) and \(b\) are positive integers.</li>
        <li><b>Trichotomy law:</b> For every integer \(a\), \(a \gt 0\), \(a=0\) or \(a \lt 0\).</li>
        <li>The set of integers is said to be an <b>ordered set</b> because it has a subset that is closed under addition and multiplication and because the trichotomy law holds for every integer.</li>
        <li><a href='https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Mathematics_for_Computer_Science_(Lehman_Leighton_and_Meyer)/01%3A_Proofs/02%3A_Well_Ordering_Principle/2.04%3A_Well_Ordered_Sets'>A set of numbers is <b>well ordered</b> when each of its nonempty subsets has a minimum element.</a></li>
        <li><b>Well-Ordering Property:</b> Every nonempty set of positive integers has a least element.</li>
        <li className="ownExplanation">The set \([0,2]\) is not well ordered because there are subsets that do not have a least element. For example \((1,2)\).</li>
      </SubList></li>
      <li data-source={66}>Algebraic numbers:<SubList>
        <li>A number \(\alpha\) is <b>algebraic</b> if it is a root of a polynomial with integer coefficients.</li>
        <li>\(\alpha\) is algebraic if:</li>
        <MathStuff>{"a_n \\alpha^n + a_{n-1} \\alpha^{n-1} + \\ldots + a_0 = 0"}</MathStuff>
        <li>where \(a_i\) are some integers.</li>
        <li>If a number is not algebraic, then it's <b>transcendental</b>.</li>
        <li>\(\sqrt{"{2}"}\) is algebraic because it is a root of the polynomial \(x^2-2\).</li>
        <li>Every rational number is algebraic because when the number is of the form \(a/b\) where \(a\) and \(b\) are integers and \(b \ne 0\), then it is a root of \(bx-a\).</li>
      </SubList></li>
      <li data-source={66}>Sequences:<SubList>
        <li>A <b>sequence</b> \({"\\{a_n\\}"}\) is a list of numbers \(a_1, a_2, a_3, \ldots\).</li>
        <li>The sequence \({"\\{a_n\\}"}\), where \(a_n = n^2\) begins with the terms 1, 4, 9, ....</li>
        <li>A <b>geometric progression</b> is a sequence of the form \(a\), \(ar^2\), \(ar^3\), ....</li>
        <li>The <b>triangular numbers</b> is a sequnce where \(t_k\) is the number of dots in the triangular array of \(k\) rows with \(j\) dots in the \(j\)th row. It begins with the terms 1, 3, 6, 10, 15, ....</li>
      </SubList></li>
      <li data-source={66}>Countable sets:<SubList>
        <li>A set is <b>countable</b> if:<SubList opened>
          <li>it is finite</li>
          <li>or infinite and there exists a one-to-one correspondence between the set of positive integers and the set.</li>
        </SubList></li>
        <li>A set that is not countable is called <b>uncountable</b>.</li>
      </SubList></li>
      <li data-source={66}>Sum:<SubList>
        <li>The following notation represents the sum of the numbers \(a_1\), \(a_2\), ..., \(a_n\):</li>
        <MathStuff>{"\\sum^n_{k=1} a_k = a_1 + a_2 + \\cdots +a_n"}</MathStuff>
        <li>Here are some properties:</li>
        <MathStuff>{"\\begin{align} \\sum^n_{j=m} ka_j &= k\\sum^n_{j=m} a_j \\\\ \\sum^n_{j=m} (a_j+b_j) &= \\sum^n_{j=m} a_j+ \\sum^n_{j=m} b_j \\\\ \\sum^n_{i=m}\\sum^q_{j=p} (a_ib_j) &= \\left( \\sum^n_{i=m} a_i \\right) \\left( \\sum^q_{j=p} b_j \\right) \\\\ \\sum^n_{i=m}\\sum^q_{j=p} (a_ib_j) &= \\sum^q_{j=p}\\sum^n_{i=m} (a_ib_j) \\end{align}"}</MathStuff>
      </SubList></li>
      <li data-source={66}>Products:<SubList>
        <li>The product of the numbers \(a_1\), \(a_2\), ..., \(a_n\) is denoted by:</li>
        <MathStuff>{"\\prod^n_{j=1} a_j = a_1 a_2 \\cdots a_n"}</MathStuff>
        <li>If \(n \ge 1\), then \(n!\) (read as "\(n\) <b>factorial</b>") is the product of the integers 1, 2, .., \(n\).</li>
        <li>Also, \(0! = 1\).</li>
      </SubList></li>
      <li data-source={66}>Fibonacci numbers:<SubList>
        <li>The <b>Fibonacci sequence</b> is defined recursively by \(f_1 = 1\), \(f_2 = 1\), and \(f_n = {"f_{n-1}+f_{n-2}"}\) for \(n \ge 3\).</li>
        <li>The terms of this sequence are called the <b>Fibonacci numbers</b>.</li>
      </SubList></li>
    </ul>
    <div style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <ul>
        <li><b>Diophantine equation:</b><SubList>
          <li><a href='https://en.wikipedia.org/wiki/Diophantine_equation'>A <b>Diophantine equation</b> is an equation, typically a polynomial equation in two or more unknowns with integer coefficients, for which only integer solutions are of interest.</a></li>
          <li><u>Example:</u> The Pythagorean Theorem results in triples (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), etc.</li>
        </SubList></li>
        <li data-source={66}>Floor and ceiling functions:<SubList>
          <li>The <b>greatest integer</b> in a real number \(x\), denoted by \([x]\), is the largest integer less than or equal to \(x\).</li>
          <li><u>Examples:</u> \([5/2]=2\), \([-5/2]=-3\), \([2]=2\).</li>
          <li>The greatest integer function is also known as the <b>floor function</b>, with notation \(\lfloor x \rfloor\).</li>
          <li>The <b>ceiling function</b> of a real number \(x\), denoted by \(\lceil x \rceil\), is the smallest integer greater than or equal to \(x\).</li>
          <li><u>Examples:</u> \(\lceil 5/2 \rceil = 3\) and \(\lceil -5/2 \rceil = 2\).</li>
          <li>Properties:<SubList>
            <li>\(n \in \mathbb{"{Z}"} \implies \lfloor x + n \rfloor = \lfloor x \rfloor + n\).</li>
            <li>\([2x] + [2y] ≥ [x] + [y] + [x+y]\)</li>
            <li>\([x + y] ≥ [x] + [y]\)</li>
            <li>\([xy] ≥ [x][y]\)</li>
            <li>\([x + 1/2]\) is the integer nearest to \(x\)</li>
            <li>\([(x + n)/m] = [([x] + n)/m]\) where \(n, m ∈ {"\\mathbb{Z}"}\)</li>
            <li>\([√[x]] = √[x]\)</li>
            <li><a href='https://en.wikipedia.org/wiki/Hermite%27s_identity'><b>Hermite's identity:</b></a></li>
            <MathStuff>{"\\sum^{n-1} \\left\\lfloor x+\\frac{k}{n} \\right\\rfloor = \\lfloor nx \\rfloor"}</MathStuff>
          </SubList></li>
        </SubList></li>
        <li data-source={66}>Divisibility:<SubList>
          <li>If \(a\) and \(b\) are integers with \(a \ne 0\), we say that \(a\) divides \(b\) if there is an integer \(c\) such that \(b=ac\).</li>
          <li>If \(a\) divides \(b\), we also say that \(a\) is a <b>divisor</b> or <b>factor</b> of \(b\) and that \(b\) is a <b>multiple</b> of \(a\).</li>
          <li>\(a \mid b\): "\(a\) divides \(b\)"</li>
          <li>\(a \nmid b\): "\(a\) does not divide \(b\)"</li>
          <li>Properties:<SubList>
            <li>Let \(a, b, c, m, n \in \mathbb{"{Z}"}\).</li>
            <li>\(a \mid b \wedge b \mid c \implies a\mid c\).</li>
            <li>\(c \mid a \wedge c \mid b \implies c \mid (ma + nb) \ \forall m, n\).</li>
          </SubList></li>
          <li><b>The division algorithm:</b><SubList>
            <li>If \(a \in \mathbb{"{Z}"}\) and \(b \in \mathbb{"{Z}"}^+\), then there are unique integers \(q\) and \(r\) such that \(a=bq+r\) where \(0 \le r \lt b\). This is not an algorithm, but a theorem.</li>
            <li>\(q\) is the <b>qoutient</b>, \(r\) is the <b>remainder</b>, \(a\) is the <b>dividend</b> and \(b\) is the <b>divisor</b>.</li>
            <li>\(b \mid a \iff r = 0\).</li>
          </SubList></li>
          <li>There are \([x/d]\) positive integers that are \(≤ x\) (where \(x ∈ Z^+\)) and divisible by \(d\).</li>
        </SubList></li>
        <li data-source={54}><b>Prime Numbers:</b><SubList>
          <li data-source={35}>A <b>prime number</b> is an integer \({"p > 1"}\) such that it cannot be written as \(p = ab\) with \({"a, b > 1"}\).</li>
          <li data-source={35}>If \(p\) is prime and \(p|ab\), then \(p|a\) or \(p|b\).</li>
          <li data-source={35}><b>Fundamental Theorem of Arithmetic:</b> Every positive integer can be written as a product of primes (possibly with repetition).</li>
          <li>Let \(n\) be a composite number, then \(n\) has a prime divisor \(p\) with \(p \le \sqrt{"{n}"}\).</li>
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
          <li>For any positive integer \(n\), there are at least \(n\) consecutive composite positive integers.</li>
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
        <li data-source={54}>gcd and lcm:<SubList>
          <li data-source={35}>\({"\\gcd(a, b)"}\) is the greatest common divisor of \({"a"}\) and \({"b"}\). It can also be represented as \({"(a, b)"}\). <a href='https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/05%3A_Basic_Number_Theory/5.05%3A_More_on_GCD'>Every linear combination of \({"a"}\) and \({"b"}\) is a multiple of \({"\\gcd(a,b)"}\)</a>.</li>
          <li data-source={35}>If \((a, b) = 1\), then \(a\) and \(b\) are <b>coprime</b> <span data-source={54}>or <b>relatively prime</b></span>.</li>
          <li>Let \((a, b) = d\), then \((a/d, b/d) = 1\).</li>
          <li> Smallest possible linear combination of \(a\) and \(b\) is \((a, b)\).</li>
          <li data-source={35}>If \((a, m) = 1\) and \((b, m) = 1\), then \((ab, m) = 1\).</li>
          <li data-source={35}>If \(c|ab\) and \((c, a) = 1\), then \(c|b\).</li>
          <li>Let \((a_1,a_2,\ldots,a_n)=1\), then \(a_1,a_2,\ldots,a_n\) are said to be <b>relatively prime</b>. If \((a_i,a_j)=1\) for all pairs \(i\) and \(j\) with \(i \ne j\), then \(a_1,a_2,\ldots,a_n\) are said to be <b>pairwise relatively prime</b>.</li>
          <li className="ownExplanation">If \((a,b)=1\), then \((a,b+ka)=1\) where \(k\) is any integer.</li>
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
          <li><ImgComp src={"/articlePics/number_theory_pics/1.jpg"} style={{width: "70%",marginLeft: "15%"}}/></li>
          <li>15 divides 105; 15 divides 225; 15 divides 1680; 15 divides 1905; 15 divides 11205. Thus 15 is a common divisor of 11205 and 1905.</li>
          <li><ImgComp src={"/articlePics/number_theory_pics/2.jpg"} style={{width: "70%",marginLeft: "15%"}}/></li>
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

  <h2>Integer Representations And Operations</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li data-source={66}>Positional number system:<SubList>
        <li><u><b>Decimal notation:</b></u> we write numbers using digits, which are used to represent powers of ten. For example, by 37465, we mean:</li>
        <MathStuff>{"3 \\cdot 10^4 + 7 \\cdot 10^3 + 4 \\cdot 10^2 + 6 \\cdot 10^1 + 5"}</MathStuff>
        <li><b><u>Positional number system:</u></b> the position a digit occupies determines the quantity it represents.</li>
        <li>Every positive integer \(n\) can be uniquely written as:</li>
        <MathStuff>{" n = a_kb^k + a_{k-1}b^{k-1} + \\cdots + a_1b + a_0 "}</MathStuff>
        <li>where \(b\) is a positive integer, \(k\) is a nonnegative integer and \(a_j\) is an inetger with \(0 \le a_j \le b-1\) for \(j=0,1,\ldots,k\).</li>
        <li>To find the base \(b\) expansion of \(n\), we first divide \(n\) by \(b\). The remainder is the digit \(a_0\). Then, we divide the qoutient by \(b\) to get \(a_1\). We repeat this process once a qoutient of 0 is obtained.</li>
        <li>For example, to represent 116 in base 2, we do:</li>
        <MathStuff>{"\\begin{gather} 116 = 2 \\cdot 58 + 0 \\\\ 58 = 2 \\cdot 29 + 0 \\\\ 29 = 2 \\cdot 14 + 1 \\\\ 14 = 2 \\cdot 7 + 0 \\\\ 7 = 2 \\cdot 3 + 1 \\\\ 3 = 2 \\cdot 1 + 1 \\\\ 1 = 2 \\cdot 0 + 1 \\end{gather}"}</MathStuff>
        <li>In base 16 (hexadecimal) notation there are 16 digits, usually denoted by: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.</li>
        <li>To convert \({"(\\text{A35B0F})_{16}"}\) from hexadecimal to decimal notation, we write:</li>
        <MathStuff>{'\\begin{align} (\\text{A35B0F})_{16} &= && 10 \\cdot 16^5 + 3 \\cdot 16^4 + 5 \\\\ & && \\cdot 16^3 + 11 \\cdot 16^2 + 0 \\cdot 16 + 15 \\\\ &= &&(10705679)_{10} \\end{align}'}</MathStuff>
        <li><b><u>Balanced Ternary Expansion:</u></b> Every nonzero integer can be uniquely represented in the form:</li>
        <MathStuff>{"e_k3^k + e_{k-1}3^{k-1} + \\cdots + e_1 3 + e_0"}</MathStuff>
        <li>where \\(e_j\\) is either -1, 0 or 1 for \\(j=0,1,2,\\ldots,k\\).</li>
        <li>To convert a number from base \(r\) to base \(r^n\), take the number in blocks of size \(n\). To go the other way, convert each digit of a base \(r^n\) number to base \(r\), and concatenate the results:<SubList>
          <li>To convert \((2FB3)_{"16"}\) to base 2. Each hex digit  is converted to a block of four binary digits.</li>
          <MathStuff>{"\\begin{gather} (3)_{16} = (0011)_2 \\\\ (B)_{16} = (1011)_2 \\\\ (F)_{16} = (1111)_2 \\\\ (2)_{16} = (0010)_2 \\\\ (2FB3)_{16} = (10111110110011)_2 \\end{gather}"}</MathStuff>
          <li>To convert from \((11110111101001)_2\) to hex:</li>
          <MathStuff>{"\\begin{gather} (1001)_2 = (9)_{16} \\\\ (1110)_2 = (E)_{16} \\\\ (1011)_2 = (D)_{16} \\\\ (0011)_2 = (3)_{16} \\\\ (11110111101001)_2 = (3DE9)_{16} \\end{gather}"}</MathStuff>
          <li></li>
        </SubList>♣</li>
        <li></li>
      </SubList></li>
      <li></li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
    </ul>
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
        <li>If \(n\) is odd and \((3 ∤ n)\), then \((n^2 ≡ 1 \bmod 24)\).</li>
        <li>If \(n\) is a positve integer and \((n ≡ 3 \bmod 4)\), then n cannot be written as a sum of two square integers.</li>
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
        <li data-source={4}>If \((a, m) = 1\) and if \({"\\{r^1, \\ldots, r^{φ(m)} \\}"}\) is a reduced residue system (modulo \(m\)), then \({"\\{ ar^1, \\ldots, ar^{φ(m)} \\}"}\) is also a reduced residue system.</li>
        <li data-source={35}>The number of elements in a reduced residue system mod \(m\) is called <b>Euler's totient function</b>: \(\phi(m)\).</li>
        <li data-source={4}>A <b>totative</b> of a given positive integer \(m\) is an integer \(k\) such that \(1 \le k \le m\) and \(k\) is coprime to \(m\). Euler's totient function \(\phi(m)\) counts the number of totatives of \(m\).</li>
        <li data-source={35}><b>Euler's Theorem:</b> If \((a, m) = 1\), then \({"a^{\\phi(m)} ≡ 1 \\bmod m"}\).</li>
      </SubList></li>
      <li>If \(p\) is prime and \((a^2 ≡ a \bmod p)\), then \((a ≡ 0)\) or \((a ≡ 1)\).</li>
      <li>If a prime \(p\) does not divides \(a\) or \(b\), and \(a^p ≡ b^p \bmod p\), then \(a ≡ b \bmod p\) and \(a^p ≡ b^p \bmod p^2\).</li>
      <li>Congruence (equation):<SubList>
        <li data-source={35}>A congruence (equation) is of the form \({"a_nx^n + a_{n-1}x^{n-1} + \\ldots + a_0 ≡ 0 \\bmod m"}\) where \(a_n \ldots a_0\) are integers.</li>
        <li data-source={54}>A congruence of the form \(ax ≡ b \bmod m\) is said to be a <b>linear congruence</b> in the variable \(x\). The congruence is linear in the sense that the variable \(x\) occurs to the first power.</li>
        <li data-source={54}>If one element of a conguence class is a solution to \(ax ≡ b \bmod m\), then all elements of the congruence class solutions of \(ax ≡ b \bmod m\). Any linear congruence in one variable has either no solution in \(\mathbb{"{Z}"}\) or infinitely many solutions in \(\mathbb{"{Z}"}\).</li>
        <li className="ownExplanation">Let \(g = (a, m)\). A linear congruence will have a solution if and only if \(g|b\). Since \(g\) is the smallest positive linear combination, then \(g = ap - mq\) for some integers \(p\) and \(q\), and one of the solution to the linear congruence is \( \frac{"{b}{g}"}p \).</li>
        <li className="ownExplanation">There are infinitely many solutions of the form: \(\frac{"{b}{g}"}p + \frac{"{m}{g}"} n\), where \(n = 0, 1, 2, \ldots\). A linear congruence has \(g\) incongruent solutions, so \(n = 0, 1, 2, \ldots, (g-1)\) is sufficient.</li>
        <li><span data-source={35}>If \((a, m) = 1\), then there is a unique integer \(b \bmod m\) such that \(ab ≡ 1 \bmod m\). This \(b\) is denoted by \(a^{"{-1}"} \bmod m\).</span> <span data-source={54}>In this case, \(b\) would be called the <b>inverse</b> of \(a\).</span></li>
      </SubList></li>
      <li data-source={54}><b>Wilson's Theorem:</b> If \(p\) is a prime then \((p - 1)! ≡ -1 \bmod p\). The converse of this is also true: If \((n - 1)! ≡ -1 \bmod n\), then \(n\) is prime.</li>
      <li data-source={54}>A prime number \(p\) is called <b>Wilson prime</b> if \((p - 1)! ≡ -1 \bmod p^2\). Only three are known: 5, 13, 563.</li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li data-source={54}>The congruence \(x^2 ≡ -1 \bmod p\) is solvable if and only if \(p = 2\) or \(p ≡ 1 \bmod 4\). If \(p ≡ 1 \bmod 4\), then \(x = (\frac{"{p-1}{2}"})!\).</li>
      <li data-source={54}>If \(p ≡ 3 \bmod 4\), then \(((p-1)/2)! ≡ ±1 \bmod p\).</li>
      <li data-source={54}><b>Fermat's Little Theorem:</b><SubList>
        <li><b>Fermat's Little Theorem:</b> If \(p | a\), then \(a^{"{p-1}"} ≡ 1 \bmod p \) for prime \(p\) and an integer \(a\).</li>
        <li><u>Corollary:</u> If \(p | a\), then \(a^p ≡ a \bmod p \).</li>
        <li><u>Corollary:</u> If \(p \nmid a\), then the inverse of \(a\) modulo \(p\) is \(a^{"{p-2}"}\).</li>
        <li>Let \(p\) and \(q\) be distinct odd prime integers with \(p-1|q-1\). If \(a\) is an integer where \((a, pq)=1\), then \(a^{"{q-1}"} ≡ 1 \bmod pq\).</li>
        <li>From both Wilson's theorem and Fermat's little theorem, we can derive \([p|a^p + (p-1)!a]\) and \([p|(p-1)! a^p + a]\).</li>
      </SubList></li>
      <li data-source={54}>Pseudoprimes:<SubList>
        <li>If \(n\) is a composite integer and \(2^n ≡ 2 \bmod n\), then \(n\) is a <b>pseudoprime</b>.</li>
        <li>If \(n\) is a composite integer and let \(b\) be a postive integer. If \(b^n ≡ b \bmod n\), then \(n\) is a pseudoprime to the base \(b\). If the base is not specified, then it is assumed that the base is 2.</li>
        <li>If \(n\) is a pseudoprime, then \(2^n - 1\) is also a pseudoprime.</li>
        <li>If \(n\) is a composite integer, and \(b^n ≡ b \bmod n\) for all integers \(b\), then \(n\) is an <b>absolute pseudoprime</b> or <b>Carmichael number</b>. If \((b, n) = 1\), then \(b^{"{n-1}"} ≡ 1 \bmod n\).</li>
      </SubList></li>
      <li data-source={35}><b>Freshman's dream:</b> \((x + y)^p ≡ x^p + y^p (\bmod p)\) where \(x\) and \(y\) are integers and \(p\) is prime.</li>
      <li data-source={54}><b>Chinese Remainder Theorem:</b><SubList>
        <li>Suppose we have a system of congruences of moduli:</li>
        <MathStuff>$${"\\begin{align} x &≡ b_1 \\bmod m_1 \\\\ x &≡ b_2 \\bmod m_2 \\\\ & \\quad \\vdots \\\\ x &≡ b_k \\bmod m_k \\end{align}"}$$</MathStuff>
        <li><b>Chinese Remainder Theorem:</b> If the moduli are pairwise relatively prime, then the system has a unique solution mod \(m_1m_2 \ldots m_k\).</li>
        <li>Let \(M = m_1m_2 \ldots m_k\) and \(M_i = \frac{"{M}{m_i}"}\), then the solution is \(M_1M_1^{"{-1}"} b_1 + M_2M_2^{"{-1}"} b_2 + M_3M_3^{"{-1}"} b_3 + \ldots + M_kM_k^{"{-1}"} b_k\).</li>
        <MathStuff>$$ M_1M_1^{"{-1}"} b_1 + M_2M_2^{"{-1}"} b_2 + M_3M_3^{"{-1}"} b_3 + \ldots + M_kM_k^{"{-1}"} b_k $$</MathStuff>
      </SubList></li>
    </ul>
  </div>

  <h2 id="arithmetic_functions">Arithmetic Functions</h2>
  <div className="content">
    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}} data-source={54}>
      <li>Arithmetic functions and multiplicativity:<SubList>
        <li>An <b>arithmetic function</b> is a function whose domain is the set of positive integers. For example, the Euler phi-function: \(\phi(n)\).</li>
        <li>An arithmetic function \(f\) is said to be <b>multiplicative</b> if \(f(mn)=f(m)f(n)\) whenever \(m\) and \(n\) are relatively prime positive integers.</li>
        <li>If \(n\) is a positive integer, then by the fundamental theorem of arithmetic:</li>
        <MathStuff>{"\\[n = p_1^{a_1} + p_2^{a_2} + \\cdots + p_r^{a_r}\\]"}</MathStuff>
        <li>Let \(f\) be a multiplicative arithmetic function. Since \(({"p_i^{a_i}, p_j^{a_j}"})=1\) whenever \(i \ne j\), we have:</li>
        <MathStuff>{"\\[f(n) = f(p_1^{a_1} + p_2^{a_2} + \\cdots + p_r^{a_r}) = f(p_1^{a_1})f(p_2^{a_2}) \\cdots f(p_r^{a_r})\\]"}</MathStuff>
        <li>An arithmetic function \(f\) is said to be <b>completely multiplicative</b> if \(f(mn)=f(m)f(n)\) for ALL positive integers \(m\) and \(n\).</li>
      </SubList></li>
      <li>The notation \(\sum_{"{d|n, d \\gt 0}"}\) means "the summation over all distinct positive divisors \(d\) of \(n\)".</li>
      <li>Let \(f\) be an arithmetic function and, for \(n \in \mathbb{"{Z}"}^+\), let \(F(n)= \sum_{"{d|n, d \\gt 0}"} f(d)\). If \(f\) is multiplicative, then \(F\) is multiplicative.</li>
      <li>The Euler phi function (\(\phi(n)\)) is multiplicative.</li>
      <li>If \(p\) is prime, then \(\phi(p^a) = p^a -p^{"{a-1}"}\).</li>
    </ul>
    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
      <li></li>
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