import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { CodePre } from "../../articleRelatedStuff/Code";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export const title = "Data Structures And Algorithms Notes";
export const sourcesColor = {20: null, 4: "#4f94ac"};

export const content = <>
<h1>Data Structures And Algorithms Notes</h1>

<h2 id="intro">Introduction</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul data-source="20">
			<li>In the most general sense, a <b>data structure</b> is any data representation and its associated operations.</li>
			<li>More commonly, people use the term "data structure" to mean an organization or structuring for a collection of data items. A sorted list of integers stored in an array is an example of such a structuring.</li>
			<li>A solution is said to be <b>efficient</b> if it solves the problem within the required resource constraints.</li>
			<li>The <b>cost</b> of a solution is the amount of resources that the solution consumes.</li>
			<li><b>Data type:</b><SubList>
				<li>A <b>type</b> is a collection of values. For example, the Boolean type consists of the values <code>true</code> and <code>false</code>.</li>
				<li>A <b>data type</b> is a type together with a collection of operations to manipulate the type.</li>
				<li>An integer variable is a member of the integer data type. Addition is an example of an operation on the integer data type.</li>
				<li><b>Simple type:</b> A data type whose values contain no subparts. An example is the integers.</li>
				<li><b>Aggregate type</b> (or <b>composite type</b>): A type whose members have subparts. For example, a typical database record.</li>
				<li>A <b>data item</b> is a piece of information or a record whose value is drawn from a type. A data item is said to be a member of a type.</li>
			</SubList></li>
		</ul>
		<ul data-source="4">
			<li><b>Primitive data types</b> are a set of basic data types from which all other data types are constructed.</li>
			<li>Primitive data types in Java:<SubList>
				<li><u>Integer types with a variety of ranges:</u> <b>byte</b>, <b>short</b>, <b>int</b>, <b>long</b> and <b>char</b></li>
				<li><u>Floating-point numbers with single and double precisions:</u> <b>float</b> and <b>double</b></li>
				<li><u>True and false:</u> <b>boolean</b></li>
			</SubList></li>
			<li><a href='https://en.wikipedia.org/wiki/C_data_types'>C data types:</a> Minimally, there are four types, <b>char</b>, <b>int</b>, <b>float</b> and <b>double</b>, but the qualifiers <b>short</b>, <b>long</b>, <b>signed</b>, and <b>unsigned</b> mean that C contains numerous target-dependent integer and floating-point primitive types.</li>
		</ul>
		<ul data-source="20">
			<li>An <b>interface</b> is a class-like structure that only contains method signatures and fields. An interface does not contain an implementation of the methods or any data members.</li>
		</ul>
	</div>
	<ul style={{width: "49%", marginRight: "0.5%", float: "right"}} data-source="20">
		<li>An <b>abstract data type</b> is the specification of a data type within some language, independent of an implementation.</li>
		<li>The interface for the ADT is defined in terms of a type and a set of operations on that type. An ADT does not specify how the data type is implemented.</li>
		<li>A <b>data structure</b> is the implementation for an ADT.</li>
		<li>Data types have both a logical and a physical form. The definition of the data type in terms of an ADT is its logical form. The implementation of the data type as a data structure is its physical form.</li>
		<li>"Array" is commonly used in computer programming to mean a contiguous block of memory locations, where each memory location stores one fixed-length data item. By this meaning, an array is a physical data structure.</li>
		<li>However, array can also mean a logical data type composed of a (typically homogeneous) collection of data items, with each data item identified by an index number.</li>
		<li>Summary pic:<SubList>
			<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/0.png"} style={{width: "100%"}}/></li>
		</SubList></li>
	</ul>
</div>

<h2>Algorithm Analysis</h2>
<div className="content" data-source="20">
	<ul style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<li>Problems and algorithms:<SubList>
			<li>A <b>problem</b> is a task to be performed. Problems can be viewed as functions in the mathematical sense.</li>
			<li>A <b>function</b> is a matching between inputs (the <b>domain</b>) and outputs (the <b>range</b>).</li>
			<li>The values making up an input are called the parameters of the function. A specific selection of values for the parameters is called an instance of the problem.</li>
			<li>The limits to what functions can be implemented by programs is part of the domain of <b>computability</b>.</li>
			<li>An <b>algorithm</b> is a method or a process followed to solve a problem. If the problem is viewed as a function, then an algorithm is an implementation for the function that transforms an input to the corresponding output. It must have three properties:<SubList>
				<li>It must be correct.</li>
				<li>It is composed of a series of concrete steps. Concrete means that the action described by that step is completely understood - and doable - by the person or machine that must perform the algorithm.</li>
				<li>There can be no ambiguity as to which step will be performed next.</li>
				<li>It must be composed of a finite number of steps.</li>
				<li>It must terminate (no infinite loop).</li>
			</SubList></li>
			<li>A computer <b>program</b> is an instantiation of an algorithm in a programming language.</li>
		</SubList></li>	
		<li>Comparing algorithms:<SubList>
			<li><b>Asymptotic algorithm analysis</b>, <b>asymptotic analysis</b> or <b>algorithm analysis</b> is a method for estimating the efficiency of an algorithm or computer program by identifying its growth rate.</li>
			<li>Asymptotic analysis attempts to estimate the resource consumption of an algorithm.</li>
			<li>Typically you will analyze the time required for an algorithm (or the instantiation of an algorithm in the form of a program), and the space required for a data structure.</li>
			<li>A <b>basic operation</b> must have the property that its time to complete does not depend on the particular values of its operands.</li>
			<li>For a given input size \(n\) we often express the time \({"\\textbf{T}"}\) to run the algorithm as a function of \(n\), written as \({"\\textbf{T}"}(n)\).</li>
			<li><u>Example:</u><SubList>
				<li>Considert the following function:</li>
				<li><CodePre language="java">{`
// Return position of largest value in integer array A
static int largest(int[] A) {
int currlarge = 0;             // Position of largest element seen
for (int i=1; i<A.length; i++) // For each element
	if (A[currlarge] < A[i])     //   if A[i] is larger
			currlarge = i;            //     remember its position
return currlarge;              // Return largest position
}
				`}</CodePre></li>
				<li>Let us call \(c\) the amount of time required to compare two integers.</li>
				<li>The running time of making \(n\) comparisons is \({"\\textbf{T}"}(n) =cn\).</li>
				<li>The running time of a statement that assigns the first value of an integer array to a variable is simply the time required to copy the value of the first array value. Call this \(c_1\).</li>
				<li>The time to copy the value from the first position of the array is always \(c_1\), no matter how large the array. Therefore, \({"\\textbf{T}"}(n) =c_1\).</li>
				<li>Now consider the following snippet:</li>
				<li><CodePre language="java">{`
for (i=1; i<=n; i++) {
for (j=1; j<=n; j++) {
	sum++;
}
}
				`}</CodePre></li>
				<li>We can assume that incrementing takes constant time; call this time \(c_2\).</li>
				<li>The total number of increment operations is \(n^2\). Thus, we say that the running time is \({"\\textbf{T}"}(n)=c_2n^2\).</li>
			</SubList></li>
		</SubList></li>
		<li>Growth rate:<SubList>
			<li>If the size of the input has no effect on the running time, then this is called a <b>constant running time</b>.</li>
			<li><b>Growth rate:</b> The rate at which the cost of the algorithm grows as the size of its input grows.</li>
			<li><b>Upper bound:</b> a growth rate that is always greater than or equal to the growth rate of the algorithm in question.</li>
			<li><b>Lower bound:</b> a growth rate that is always less than or equal to the growth rate of the algorithm in question.</li>
			<li>Since the upper bound and lower bound for the algorithm can be very different for different situations (such as the best case or worst case), we typically have to specify which situation we are referring to.</li>
			<li> A growth rate of \(cn\) is often referred to as a <b>linear growth rate</b>.</li>
			<li>An algorithm whose running-time equation has a highest-order term containing a factor of \(n^2\) is said to have a <b>quadratic growth rate</b>.</li>
			<li>\(2^n\) represents <b>exponential growth rate</b>.</li>
		</SubList></li>
		<li>Big-Oh notation:<SubList>
			<li>Because the phrase "has an upper bound to its growth rate of \(f(n)\)" is long and often used when discussing algorithms, we adopt a special notation, called <b>big-Oh notation</b>.</li>
			<li>If the upper bound for an algorithm's growth rate (for, say, the worst case) is (\(f(n)\)), then we would write that this algorithm is "in the set \(O(f(n))\) in the worst case".</li>
			<li><u>Precise definition:</u> For \({"\\textbf{T}"}(n)\) a non-negatively valued function, \({"\\textbf{T}"}(n)\) is in set \(O(f(n))\) if there exist two positive constants \(c\) and \(n_0\) such that \({"\\textbf{T}"}(n) \le cf(n)\) for all \(n \gt n_0\).</li>
			<li>If \(f = O(g(n))\) and \(g = O(h(n))\), then \(f = O(h(n))\).</li>
			<li>If \(f = O(kg(n))\) where \(k \gt 0\), \(f(n)\) is in \(O(g(n))\).</li>
			<li>If \(f_1 = O(g_1(n))\) and \(f_2 = O(g_2(n))\), then \(f_1(n) + f_2(n)\) is in \(O(\max(g_1(n),g_2(n)))\).</li>
			<li>If \(f_1 = O(g_1(n))\) and \(f_2 = O(g_2(n))\), then \(f_1(n) f_2(n)\) is in \(O(g_1(n),g_2(n))\).</li>
		</SubList></li>
		<li>Big-Omega and theta notation:<SubList>
			<li>The lower bound for an algorithm is denoted by the symbol \(Ω\).</li>
			<li><u>Precise definition:</u> For \({"\\textbf{T}"}(n)\) a non-negatively valued function, \({"\\textbf{T}"}(n)\) is in set \(\Omega(g(n))\) if there exist two positive constants \(c\) and \(n_0\) such that \({"\\textbf{T}"}(n) \ge cg(n)\) for all \(n \gt n_0\).</li>
			<li>When the upper and lower bounds are the same within a constant factor, we indicate this by using \(\Theta\).</li>
			<li> An algorithm is said to be \(\Theta(h(n))\) if it is in \(O(h(n))\) and it is in \(Ω(h(n))\).</li>
		</SubList></li>
		<li>Amortized analysis:<SubList>
			<li><b>Amortized analysis:</b> The analysis for a series of operations taken as a whole.</li>
			<li>Rather than focusing on the individual cost of each operation independently and summing them, amortized analysis looks at the cost of the entire series and "charges" (amortizes) each individual operation with a share of the total cost.</li>
			<li>Amortized analysis in the case of a series of sequential searches in an unsorted array:<SubList>
				<li>For \(n\) random searches, the average-case cost for each search is \(n/2\), and so the expected total cost for the series is \(n^2/2\).</li>
				<li>Unfortunately, in the worst case all of the searches would be to the last item in the array. In this case, each search costs n for a total worst-case cost of \(n^2\).</li>
				<li>Compare this to the cost for a series of \(n\) searches such that each item in the array is searched for precisely once. The total number of searches, in the best, average, and worst case, for this problem must be \(\sum^n_{"{i=i}"} i ≈ n^2/2\).</li>
			</SubList></li>
			<li>A useful concept for amortized analysis is illustrated by a simple variation on the stack data structure:<SubList>
				<li>The <code>pop</code> function is slightly modified to take a second parameter \(k\) indicating that \(k\) pop operations are to be performed. This revised <code>pop</code> function is called <code>multipop</code>.</li>
				<li>The key to an amortized analysis of this problem lies in the concept of <b>potential</b>.</li>
				<li>At any given time, a certain number of items may be on the stack. The cost for <code>multipop</code> can be no more than this number of items.</li>
				<li>Each call to <code>push</code> places another item on the stack, which can be removed by only a single <code>multipop</code> operation. Thus, each call to <code>push</code> raises the potential of the stack by one item.</li>
				<li>The sum of costs for all calls to <code>multipop</code> can never be more than the total <b>potential</b> of the stack (aside from a constant time cost associated with each call to multipop itself).</li>
				<li>The amortized cost for any series of <code>push</code> and <code>multipop</code> operations is the sum of three costs: each of the <code>push</code> operations takes constant time; each <code>multipop</code> operation takes a constant time in overhead (regardless of the number of items popped on that call); the sum of the potentials expended by all <code>multipop</code> operations, which is at most \(m_1\), the number of <code>push</code> operations.</li>
				<MathStuff>{`
					$$m_1+(m_2+m_1) = \\Theta(m_1+m_2)$$
					$$
					\\begin{align}
					& m_1: \\text{ number of calls to push}\\\\
					& m_2: \\text{ number of calls to multipop}
					\\end{align}
					$$
				`}</MathStuff>
			</SubList></li>
		</SubList></li>
	</ul>
	<ul style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<li>Determining the execution time of a recursive subroutine:<SubList>
			<li>The recursive factorial function fact of calls itself with a value one less than its input value:</li>
			<li><CodePre language="java">{`
/** Recursively compute and return n! */
static long fact(int n) {
// fact(20) is the largest value that fits in a long
assert (n >= 0) && (n >= 20) : "n out of range";
if (n >= 1) return 1; // Base case: return base solution
return n * fact(n-1); // Recursive call for n > 1
}
			`}</CodePre></li>
			<li>The running time for this function can be expressed as:</li>
			<MathStuff>$${"\\textbf{T}(n) = \\textbf{T}(n - 1) + 1 \\text{ for } n > 1; T(1) = 0"}$$</MathStuff>
			<li>The closed-form solution for this recurrence relation is \(\Theta(n)\).</li>
			<li><b>Binary search</b> is a standard recursive algorithm for finding the record with a given search key value within a sorted list. <u>Implementation:</u></li>
			<li><CodePre language="java">{`
/** @return The position of an element in sorted array A
with value k. If k is not in A, return A.length. */
static int binary(int[] A, int k) {
int l = -1;
int r = A.length; // l and r are beyond array bounds
while (l+1 != r) { // Stop when l and r meet
	int i = (l+r)/2; // Check middle of remaining subarray
	if (k < A[i]) r = i; // In left half
	if (k == A[i]) return i; // Found it
	if (k > A[i]) l = i; // In right half
}
return A.length; // Search value not in A
}
			`}</CodePre></li>
			<li>Each recursive call to binary cuts the size of the array approximately in half, so we can model the worst-case cost as follows, assuming for simplicity that n is a power of two:</li>
			<MathStuff>$${"\\textbf{T}(n) = \\textbf{T}(n/2) + 1 \\text{ for } n > 1; T(1) = 1"}$$</MathStuff>
			<li>If we expand the recurrence, we find that we can do so only \(\log n\) times before we reach the base case, and each expansion adds one to the cost. Thus, the closedform solution for the recurrence is \(\textbf{"{T}"}(n) = \log n\).</li>
		</SubList></li>
		<li>Space bounds:<SubList>
			<li>Imagine that we want to keep track of friendships between \(n\) people. We can do this with an array of size \(n \times n\). Each row of the array represents the friends of an individual, with the columns indicating who has that individual as a friend.</li>
			<li>For \(n\) people, the total size of the array is \(\Theta(n^2)\).</li>
			<li>A data structure's primary purpose is to store data in a way that allows efficient access to those data. All information stored in addition to the actual data values is referred to as <b>overhead</b>.</li>
			<li>The <b>space/time tradeoff principle</b> says that one can often achieve a reduction in time if one is willing to sacrifice space or vice versa.</li>
			<li>A second principle for the relationship between a program's space and time requirements applies to programs that process information stored on disk:<SubList>
				<li>The disk-based space/time tradeoff principle is almost the reverse of the space/time tradeoff principle for programs using main memory.</li>
				<li>The <b>disk-based space/time tradeoff principle</b> states that the smaller you can make your disk storage requirements, the faster your program will run.</li>
				<li>This is because the time to read information from disk is enormous compared to computation time, so almost any amount of additional computation needed to unpack the data is going to be less than the disk-reading time saved by reducing the storage requirements.</li>
			</SubList></li>
		</SubList></li>
		<li>Recurrence relations:<SubList>
			<li>Recurrence relations are often used to model the cost of recursive functions.</li>
			<li>The first approach to solving recurrences is to guess the answer and then attempt to prove it correct. If a correct upper or lower bound estimate is given, an easy induction proof will verify this fact. If the proof is successful, then try to tighten the bound. If the induction proof fails, then loosen the bound and try again.</li>
			<li><u>Example:</u><SubList>
				<li>The running time for <u>Mergesort</u> is described by the equation:</li>
				<MathStuff>$$
					T(n) = 2T(n/2) + n; T(2) = 1
				$$</MathStuff>
				<li>We begin by guessing that this recurrence has an upper bound in \(O(n^2)\). To be more precise, assume that \(T(n) \le n^2 \).</li>
				<li>For the base case, \(T(2) = 1 ≤ 2^2\).</li>
				<li>The induction hypothesis is \(T(i) ≤ i^2\), for all \(i ≤ n\).</li>
				<li>It follows that:</li>
				<MathStuff>$${`\\begin{align}
					T(2n) &= 2T(n) + 2n \\\\
					&≤ 2n^2 + 2n\\\\
					&≤ 4n^2\\\\
					&≤ (2n)^2
				\\end{align}`}$$</MathStuff>
				<li>Thus, \(T(n)\) is in \(O(n^2)\).</li>
				<li>Is \(O(n^2)\) a good estimate?If we guess something smaller, such as \(T(n) ≤ cn\) for some constant \(c\), it should be clear that this cannot work because \(c2n = 2cn\) and there is no room for
					the extra n cost to join the two pieces together.</li>
				<li>Let us now try \(T(n) ≤ n \log n\).</li>
				<li>For the base case, the definition of the recurrence sets \(T(2) = 2\).</li>
				<li>Assume (induction hypothesis) that \(T(n) ≤ n \log n\). Then:</li>
				<MathStuff>$${`\\begin{align}
					T(2n) &= 2T(n) + 2n \\\\
					&≤ 2n \\log n  + 2n\\\\
					&≤ 2n(\\log n + 1)\\\\
					&≤ 2n \\log 2n
				\\end{align}`}$$</MathStuff>
				<li>This is what we seek to prove.</li>
				<li>In similar fashion, we can prove that \(T(n)\) is in \(Ω(n \log n)\). </li>
				<li>Thus, \(T(n)\) is also \(\Theta(n \log n)\).</li>
			</SubList></li>
		</SubList></li>
		<li>Expanding the recurrence:<SubList>
			<li>Estimating bounds is effective if you only need an approximation to the answer. More precise techniques are required to find an exact solution. One approach is called <b>expanding the recurrence</b>.</li>
			<li>In this method, the smaller terms on the right side of the equation are in turn replaced by their definition. This is the expanding step.</li>
			<li>These terms are again expanded, and so on, until a full series with no recurrence results. This yields a summation, and techniques for solving summations can then be used.</li>
			<li>To the solution for:</li>
			<MathStuff>$$
				T(n) = 2T(n/2) + 5n^2; T(1) = 7    
			$$</MathStuff>
			<li>We assume that \(n\) is a power of two, so we will rewrite it as \(n = 2^k\). This recurrence can be expanded as follows:</li>
			<MathStuff>$${`\\begin{align}
				T(n) &= 2T(n/2) + 5n^2\\\\
				&= 4T(n/4) + 2\\cdot 5(n/2)^2 + 5n^2\\\\
				&= 8T(n/8) + 4\\cdot 5(n/4)^2 + 2\\cdot 5(n/2)^2 + 5n^2\\\\
				&= 2^kT(1) + 2^{k-1} \\cdot 5
				{\\left( \\frac{n}{2^{k-1}} \\right)} ^2
				+ \\ldots + 2 \\cdot 5 {\\left( \\frac{n}{2} \\right)}^2+ 5n^2
			\\end{align}`}$$</MathStuff>
			<li>This last expression can best be represented by a summation: \(7n + 5n^2 \sum^{"{k-1}_{i=0}\\frac{1}{2^i}"}\).</li>
			<li>Which can be simplified to\( 10n^2 - 3n\). This is the exact solution to the recurrence for n a power of two.</li>
		</SubList></li>
		<li><b>Divide and conquer recurrences:</b><SubList>
			<li><b>Divide and conquer recurrences</b> have the form:</li>
			<MathStuff>$$T(n) = aT(n/b) + cn^k; T(1) = c$$</MathStuff>
			<li>where \(a\), \(b\), \(c\), and \(k\) are constants.</li>
			<li>In general, this recurrence describes a problem of size \(n\) divided into a subproblems of size \(n/b\), while \(cn^k\) is the amount of work necessary to combine the partial solutions.</li>
			<li>Assume that \(n = b^m\):</li>
			<MathStuff>$${`\\begin{align}
				T(n) &= aT \\left( \\frac{n}{b} \\right) + cn^k\\\\
				&= a \\left( aT \\left( \\frac{n}{b^2}\\right) + c \\left( \\frac{n}{b}\\right)^k \\right) + cn^k\\\\
				&= a \\left( a \\left[ a T \\left( \\frac{n}{b^3} \\right) + c \\left( \\frac{n}{b^2} \\right)^k  \\right] + c \\left( \\frac{n}{b} \\right) ^k \\right) + cn^k\\\\
				&= a^3T\\left( \\frac{n}{b^3} \\right) + a^2 c\\left( \\frac{n}{b^2} \\right)^k + ac\\left( \\frac{n}{b} \\right)^k +cn^k\\\\
				&= a^mT(1) + a^{m-1}c \\left( \\frac{n}{b^{m-1}} \\right)^k + \\ldots + ac \\left( \\frac{n}{b} \\right) ^k + cn^k\\\\
				&=c \\sum^m_{i=0} a^{m-i}b^{ik}\\\\
				&=ca^m\\sum^m_{i=0} \\left( \\frac{b^k}{a} \\right)^i
			\\end{align}`}$$</MathStuff>
			<li>The summation is a geometric series whose sum depends on the ratio \(r=b^k/a\). There are three cases:<SubList>
				<li>If \(r \lt 1\), then \(\sum r^i\) is a constant. Thus \(T(n)=\Theta(a^m)\) or \(\Theta(n^{"{\\log_ba}"})\), since \(a^m = a^{"{\\log_bn} = n^{\\log_ba}"}\).</li>
				<li>If \(r=1\), then \(\sum r = m + 1 = \log_bn+1\). Thus, \(T(n) = \Theta(a^m\log n) = \Theta(n^{"{\\log_ba}"}\log n)=\Theta(n^k\log n)\)</li>
				<li>If \(r \gt 1\), then \(\sum r = \Theta(r^m)\). Thus, \(T(n) = \Theta(a^mr^m) \) or \(\Theta(b^{"{km}"}) = \Theta(n^k)\).</li>
			</SubList></li>
			<li>We can summarize the above derivation as the following theorem, sometimes
				referred to as the <b>Master Theorem</b>:</li>
			<MathStuff>$${`
				T(n) =
				\\begin{cases}
				\\Theta(n^{\\log_ba})  & \\text{if }a > b^k \\\\
				\\Theta(n^k\\log n) & \\text{if } a=b^k\\\\
				\\Theta(n^k) & \\text{if }a \\lt b^k
				\\end{cases}
			`}$$</MathStuff>
		</SubList></li>
	</ul>
</div>

<h2 id="basicADTs">Basic ADTs</h2>
<div className="content" data-source="20">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<h3>List</h3>
		<ul>
			<li>Lists:<SubList>
				<li>We define a <b>list</b> to be a finite, ordered sequence of data items known as elements. "Ordered" in this definition means that each element has a position in the list, it doesn't mean that they are sorted by value.</li>
				<li><CodePre language="java">{`
/** List ADT */
public interface List<E> {
	/** Remove all contents from the list, so it is once again
	empty. Client is responsible for reclaiming storage
	used by the list elements. */
	public void clear();
	/** Insert an element at the current location. The client
	must ensure that the list's capacity is not exceeded.
	@param item The element to be inserted. */
	public void insert(E item);
	/** Append an element at the end of the list. The client
	must ensure that the list's capacity is not exceeded.
	@param item The element to be appended. */
	public void append(E item);
	/** Remove and return the current element.
	@return The element that was removed. */
	public E remove();
	/** Set the current position to the start of the list */
	public void moveToStart();
	/** Set the current position to the end of the list */
	public void moveToEnd();
	/** Move the current position one step left. No change
	if already at beginning. */
	public void prev();
	/** Move the current position one step right. No change
	if already at end. */
	public void next();
	/** @return The number of elements in the list. */
	public int length();
	/** @return The position of the current element. */
	public int currPos();
	/** Set current position.
	@param pos The position to make current. */
	public void moveToPos(int pos);
	/** @return The current element. */
	public E getValue();
}    
				`}</CodePre></li>
				<li>Class <code>List</code> is a generic of one parameter,
					named <code>E</code> for "element",  serves as a placeholder for whatever element type the
					user would like to store in a list.</li>
			</SubList></li>
			<li>Array-Based list implementation:<SubList>
				<li><CodePre language="java">{`
/** Array-based list implementation */
class AList<E> implements List<E> {
	private static final int defaultSize = 10; // Default size
	private int maxSize; // Maximum size of list
	private int listSize; // Current # of list items
	private int curr; // Position of current element
	private E[] listArray; // Array holding list elements
	/** Constructors */
	/** Create a list with the default capacity. */
	AList() { this(defaultSize); }
	/** Create a new list object.
	@param size Max # of elements list can contain. */
	@SuppressWarnings("unchecked") // Generic array allocation
	AList(int size) {
		maxSize = size;
		listSize = curr = 0;
		listArray = (E[])new Object[size]; // Create listArray
	}
	public void clear() // Reinitialize the list
	{ listSize = curr = 0; } // Simply reinitialize values
	/** Insert "it" at current position */
	public void insert(E it) {
		assert listSize < maxSize : "List capacity exceeded";
		for (int i=listSize; i>curr; i--) // Shift elements up
		listArray[i] = listArray[i-1]; // to make room
		listArray[curr] = it;
		listSize++; // Increment list size
	}
	/** Append "it" to list */
	public void append(E it) {
		assert listSize < maxSize : "List capacity exceeded";
		listArray[listSize++] = it;
	}
	/** Remove and return the current element */
	public E remove() {
		if ((curr<0) || (curr>=listSize)) // No current element
		return null;
		E it = listArray[curr]; // Copy the element
		for(int i=curr; i<listSize-1; i++) // Shift them down
		listArray[i] = listArray[i+1];
		listSize--; // Decrement size
		return it;
	}
	public void moveToStart() { curr = 0; } // Set to front
	public void moveToEnd() { curr = listSize; } // Set at end
	public void prev() { if (curr != 0) curr--; } // Back up
	public void next() { if (curr < listSize) curr++; }
	/** @return List size */
	public int length() { return listSize; }
	/** @return Current position */
	public int currPos() { return curr; }
	/** Set current list position to "pos" */
	public void moveToPos(int pos) {
		assert (pos>=0) && (pos<=listSize) : "Pos out of range";
		curr = pos;
	}
	/** @return Current element */
	public E getValue() {
		assert (curr>=0) && (curr<listSize) : "No current element";
		return listArray[curr];
	}
}
				`}</CodePre></li>
				<li>Class <code>AList</code> stores the list elements in the first <code>listSize</code> contiguous array positions. Array positions correspond to list positions. In other words, the element
					at position \(i\) in the list is stored at array cell \(i\). This makes random access to any element in the list quite easy.</li>
				<li>Inserting an element at the head of an array-based list requires shifting all existing elements in the array by one position toward the tail.</li>
				<li>Inserting or removing elements at the tail takes \(\Theta(1)\) time.</li>
				<li>In the average case, insertion or removal requires moving half of the elements, which is \(\Theta(n)\).</li>
				<li>The other methods for class <code>AList</code> simply access the current list element or move the current position. They all require \(\Theta(1)\) time.</li>
			</SubList></li>
			<li>Linked list:<SubList>
				<li><b>Linked list</b> uses <b>dynamic memory allocation</b>, that is, it allocates memory for new list elements as needed.</li>
				<li>A linked list is made up of a series of objects, called the <b>nodes</b> of the list. Because a list node is a distinct object (as opposed to simply a cell in an array), it is good practice to make a separate list node class.</li>
			</SubList></li>
			<li><b>Singly Linked list :</b><SubList>
				<li><CodePre language="java">{`
/** linked list node */
class Link<E> {
	private E element; // Value for this node
	private Link<E> next; // Pointer to next node in list
	// Constructors
	Link(E it, Link<E> nextval)
	{ element = it; next = nextval; }
	Link(Link<E> nextval) { next = nextval; }
	Link<E> next() { return next; } // Return next field
	Link<E> setNext(Link<E> nextval) // Set next field
	{ return next = nextval; } // Return element field
	E element() { return element; } // Set element field
	E setElement(E it) { return element = it; }
}
				`}</CodePre></li>
				<li>Objects in the <code>Link</code> class contain an element field to store the element value, and a <code>next</code> field to store a pointer to the next node on the list. The list built is called a <b>singly linked list</b>, or a <b>one-way list</b>, because each list node has a single pointer to the next node on the list.</li>
				<li>The list's first node is accessed from a pointer named <code>head</code>. To speed access to the end of the list, and to allow the append method to be performed in constant time, a pointer named <code>tail</code> is also kept to the last link of the list. The position of the current element is indicated by another pointer, named <code>curr</code>.</li>
				<li>Because there is no simple way to compute the length of the list simply from these three pointers, the list length must be stored explicitly.</li>
				<li><CodePre language="java">{`
/** Linked list implementation */
class LList<E> implements List<E> {
	private Link<E> head; // Pointer to list header
	private Link<E> tail; // Pointer to last element
	protected Link<E> curr; // Access to current element
	private int cnt; // Size of list
	/** Constructors */
	LList(int size) { this(); } // Constructor -- Ignore size
	LList() {
		curr = tail = head = new Link<E>(null); // Create header
		cnt = 0;
	}
	/** Remove all elements */
	public void clear() {
		head.setNext(null); // Drop access to links
		curr = tail = head = new Link<E>(null); // Create header
		cnt = 0;
	}
	/** Insert "it" at current position */
	public void insert(E it) {
		curr.setNext(new Link<E>(it, curr.next()));
		if (tail == curr) tail = curr.next(); // New tail
		cnt++;
	}
	/** Append "it" to list */
	public void append(E it) {
		tail = tail.setNext(new Link<E>(it, null));
		cnt++;
	}
	/** Remove and return current element */
	public E remove() {
		if (curr.next() == null) return null; // Nothing to remove
		E it = curr.next().element(); // Remember value
		if (tail == curr.next()) tail = curr; // Removed last
		curr.setNext(curr.next().next());
		cnt--; // Decrement count
		return it; // Return value
	}
	/** Set curr at list start */
	public void moveToStart() { curr = head; }
	/** Set curr at list end */
	public void moveToEnd() { curr = tail; }
	/** Move curr one step left; no change if now at front */
	public void prev() {
		if (curr == head) return; // No previous element
		Link<E> temp = head;
		// March down list until we find the previous element
		while (temp.next() != curr) temp = temp.next();
		curr = temp;
	}
	/** Move curr one step right; no change if now at end */
	public void next() { if (curr != tail) curr = curr.next(); }
	/** @return List length */
	public int length() { return cnt; }
	/** @return The position of the current element */
	public int currPos() {
		Link<E> temp = head;
		int i;
		for (i=0; curr != temp; i++)
		temp = temp.next();
		return i;
	}
	/** Move down list to "pos" position */
	public void moveToPos(int pos) {
		assert (pos>=0) && (pos<=cnt) : "Position out of range";
		curr = head;
		for(int i=0; i<pos; i++) curr = curr.next();
	}
	/** @return Current element value */
	public E getValue() {
		if(curr.next() == null) return null;
		return curr.next().element();
	}
}
				`}</CodePre></li>
				<li>Note that LList's constructor maintains the optional (unnecessary) parameter for minimum
					list size; this is done simply to keep the calls to the constructor the same for both variants.</li>
				<li>The <b>header node</b> node like any other, but its value is ignored and it is not considered to be an actual
					element of the list. The header node saves coding effort because we no longer need
					to consider special cases for empty lists.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/9.PNG"} style={{width: "70%"}}/>
					<figcaption>(a) before insertion; (b) after inserting node with value 10</figcaption>
				</figure></li>
				<li>Removing a node from the linked list requires only that the appropriate pointer
					be redirected around the node to be deleted.</li>
				<li>Method <code>prev</code> takes \(\Theta(n)\) time, while <code>insert</code>, <code>remove</code> and <code>next</code> take \(\Theta(1)\) time.</li>
			</SubList></li>
			<li>Array-based lists vs Linked lists:<SubList>
				<li>Array-based lists have the disadvantage that their size must be predetermined
					before the array can be allocated. Array-based lists cannot grow beyond their predetermined size. Linked lists have the
					advantage that they only need space for the objects actually on the list.</li>
				<li>Array-based lists have the advantage that there is no wasted space for an individual element. Linked lists require that an extra pointer be added to every list
					node. If the element size is small, then the overhead for links can be a significant
					fraction of the total storage.</li>
				<li>Call \(n\) the number of elements currently in the list, \(P\) the size of a pointer in storage units (typically four bytes), \(E\) the size of a data element in storage units (this
					could be anything, from one bit for a Boolean variable on up to thousands of bytes
					or more for complex records), and \(D\) the maximum number of list elements that
					can be stored in the array. Then:</li>
				<MathStuff>$${`\\begin{align}
				DE: \\text{  amount of space required for the array-based list} \\\\
				n(P + E): \\text{ amount of space required for the linked list}
				\\end{align}`}$$</MathStuff>
				<li>Array-based implementation is more space efficient when \(DE \lt n(P + E)\). If \(P = E\), then the array-based implementation would be more efficient whenever the array is more
					than half full, \(n \gt \frac{"{D}"}{2}\).</li>
				<li>Array-based lists are faster for random access by position.</li>
				<li>Given a pointer to a suitable location in the list, the <code>insert</code> and <code>remove</code>
					methods for linked lists require only \(\Theta(1)\) time, while Array-based lists must shift the remainder of the list up or down within the array.</li>
			</SubList></li>
			<li><b>Dynamic Arrays:</b><SubList>
				<li><b>Dynamic arrays</b> allow the
					programmer to get around the limitation on the standard array that its size cannot
					be changed once the array has been created. This also means that space need not
					be allocated to the dynamic array until it is to be used. The disadvantage of this
					approach is that it takes time to deal with space adjustments on the array. Each time
					the array grows in size, its contents must be copied.</li>
				<li>A good implementation of the
					dynamic array will grow and shrink the array in such a way as to keep the overall
					cost for a series of insert/delete operations relatively inexpensive.</li>
				<li>A simple rule of thumb is
					to double the size of the array when it becomes full, and to cut the array size in
					half when it becomes one quarter full.</li>
			</SubList></li>
			<li><b>Doubly Linked Lists:</b><SubList>
				<li>A <b>doubly linked list</b> allows convenient
					access from a list node to the next node and also to the preceding node on the list</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/10.PNG"} style={{width:"70%"}}/></li>
				<li> Data member <code>head</code> points to the header node, and <code>tail</code> points to
					the tailer node. The purpose of these nodes is to simplify the <code>insert</code>, <code>append</code>,
					and <code>remove</code> methods.</li>
				<li><CodePre language="java">{`
/** Doubly linked list node */
class DLink<E> {
	private E element; // Value for this node
	private DLink<E> next; // Pointer to next node in list
	private DLink<E> prev; // Pointer to previous node
	/** Constructors */
	DLink(E it, DLink<E> p, DLink<E> n)
	{ element = it; prev = p; next = n; }
	DLink(DLink<E> p, DLink<E> n) { prev = p; next = n; }
	/** Get and set methods for the data members */
	DLink<E> next() { return next; }
	DLink<E> setNext(DLink<E> nextval)
	{ return next = nextval; }
	DLink<E> prev() { return prev; }
	DLink<E> setPrev(DLink<E> prevval)
	{ return prev = prevval; }
	E element() { return element; }
	E setElement(E it) { return element = it; }
}
				`}</CodePre></li>
				<li>The only disadvantage of the doubly linked list as compared to the singly linked
					list is the additional space used.</li>
				<li>Implementations for doubly linked list <code>insert</code>, <code>append</code>,
					<code>remove</code>, and <code>prev</code> methods:</li>
				<li><CodePre language="java">{`
/** Insert "it" at current position */
public void insert(E it) {
	curr.setNext(new DLink<E>(it, curr, curr.next()));
	curr.next().next().setPrev(curr.next());
	cnt++;
}
/** Append "it" to list */
public void append(E it) {
	tail.setPrev(new DLink<E>(it, tail.prev(), tail));
	tail.prev().prev().setNext(tail.prev());
	cnt++;
}
/** Remove and return current element */
public E remove() {
	if (curr.next() == tail) return null; // Nothing to remove
	E it = curr.next().element(); // Remember value
	curr.next().next().setPrev(curr);
	curr.setNext(curr.next().next()); // Remove from list
	cnt--; // Decrement the count
	return it; // Return value removed
}
/** Move curr one step left; no change if at front */
public void prev() {
	if (curr != head) // Can't back up from list head
	curr = curr.prev();
}
				`}</CodePre></li>
			</SubList></li>
			<li>Element Implementations:<SubList>
				<li>If the elements are payroll records, it might be desirable for the list node
					to store a reference to the record rather than store a copy of the record itself. This
					change would allow multiple list nodes (or other data structures) to point to the
					same record, rather than make repeated copies of the record. Not only might this
					save space, but it also means that a modification to an element's value is automatically reflected at all locations where it is referenced.</li>
				<li>An issue faced by implementors of a list class (or any other data structure
					that stores a collection of user-defined data elements) is whether the elements stored
					are all required to be of the same type. This is known as <b>homogeneity</b> in a data
					structure.</li>
				<li>Another issue that users of the list implementations must face is primarily of
					concern when programming in languages that do not support automatic garbage
					collection.</li>
				<li>Deleting <code>listArray</code> in the array-based implementation, or deleting a link node
					in the linked list implementation, might remove the only reference to an object,
					leaving its memory space inaccessible.</li>
				<li>Unfortunately, there is no way for the list
					implementation to know whether a given object is pointed to in another part of the
					program or not. Thus, the user of the list must be responsible for deleting these
					objects when that is appropriate.</li>
			</SubList></li>
			<li><b>Freelist</b>:<SubList>
				<li>The <code>new</code> operator is relatively expensive to use. Garbage collection is also expensive.</li>
				<li>Instead of making repeated calls to <code>new</code>, the <code>Link</code> class
					can handle its own <b>freelist</b>.</li>
				<li>A freelist holds those list nodes that are not currently
					being used. When a node is deleted from a linked list, it is placed at the head of the
					freelist. When a new element is to be added to a linked list, the freelist is checked
					to see if a list node is available. If so, the node is taken from the freelist.</li>
				<li>The freelist will never grow larger than the largest size yet reached by the
					linked list.</li>
				<li>In the implementation shown here, the link class is augmented with methods
					<code>get</code> and <code>release</code>:</li>
				<li><CodePre language="java">{`
/** Singly linked list node with freelist support */
class Link<E> {
private E element; // Value for this node
private Link<E> next; // Point to next node in list
/** Constructors */
Link(E it, Link<E> nextval) { element = it; next = nextval; }
Link(Link<E> nextval) { next = nextval; }
/** Get and set methods */
Link<E> next() { return next; }
Link<E> setNext(Link<E> nxtval) { return next = nxtval; }
E element() { return element; }
E setElement(E it) { return element = it; }

/** Extensions to support freelists */
static Link freelist = null; // Freelist for the class
/** @return A new link */
static <E> Link<E> get(E it, Link<E> nextval) {
	if (freelist == null) return new Link<E>(it, nextval);
	Link<E> temp = freelist; // Get from freelist
	freelist = freelist.next();
	temp.setElement(it);
	temp.setNext(nextval);
	return temp;
}
/** Release a link to the freelist */
void release() {
	element = null; // Drop reference to the element
	next = freelist;
	freelist = this;
}
}                        
				`}</CodePre></li>
				<li>Linked-list class members can be modified to use the freelist version of the link class:</li>
				<li><CodePre language="java">{`
/** Insert "it" at current position */
public void insert(E it) {
curr.setNext(Link.get(it, curr.next())); // Get link
if (tail == curr) tail = curr.next(); // New tail
cnt++;
}
/** Append "it" to list */
public void append(E it) {
tail = tail.setNext(Link.get(it, null));
cnt++;
}
/** Remove and return current element */
public E remove() {
if (curr.next() == null) return null; // Nothing to remove
E it = curr.next().element(); // Remember value
if (tail == curr.next()) tail = curr; // Removed last
Link<E> tempptr = curr.next(); // Remember link
curr.setNext(curr.next().next()); // Remove from list
tempptr.release(); // Release link
cnt--; // Decrement count
return it; // Return removed
}
				`}</CodePre></li>
			</SubList></li>
		</ul>
		<h3>Stack</h3>
		<ul>
			<li><b>Stacks:</b><SubList>
				<li>The <b>stack</b> is a list-like structure in which elements may be inserted or removed from only one end.</li>
				<li>While this restriction makes stacks less flexible than lists, it also makes stacks both efficient (for those operations they can do) and easy to implement.</li>
				<li>The accessible element of the stack is called the <b>top</b> element. Elements are not said to be inserted, they are <b>pushed</b> onto the stack. When removed, an element is said to be <b>popped</b> from the stack.</li>
				<li><CodePre language="java">{`
					/** Stack ADT */
public interface Stack<E> {
	/** Reinitialize the stack. The user is responsible for
	reclaiming the storage used by the stack elements. */
	public void clear();
	/** Push an element onto the top of the stack.
	@param it The element being pushed onto the stack. */
	public void push(E it);
	/** Remove and return the element at the top of the stack.
	@return The element at the top of the stack. */
	public E pop();
	/** @return A copy of the top element. */
	public E topValue();
	/** @return The number of elements in the stack. */
	public int length();
};
				`}</CodePre></li>
			</SubList></li>
			<li><b>Array-Based Stacks:</b><SubList>
				<li>As with the array-based list implementation, <code>listArray</code> must be declared of fixed
					size when the stack is created.</li>
				<li>If the top be at position 0 in the array. This implementation is
					inefficient, because now every <code>push</code> or <code>pop</code> operation will require that all elements
					currently in the stack be shifted one position in the array, for a cost of \(\Theta(n)\) if there
					are \(n\) elements.</li>
				<li>If the top element be at position \(n - 1\) when
					there are \(n\) elements in the stack, then as elements are pushed onto
					the stack, they are appended to the tail of the list. In this case, the cost for each <code>push</code> or <code>pop</code> operation is only \(\Theta(1)\).</li>
				<li><CodePre language="java">{`
/** Array-based stack implementation */
class AStack<E> implements Stack<E> {
	private static final int defaultSize = 10;
	private int maxSize; // Maximum size of stack
	private int top; // Index for top Object
	private E [] listArray; // Array holding stack
	/** Constructors */
	AStack() { this(defaultSize); }
	@SuppressWarnings("unchecked") // Generic array allocation
	AStack(int size) {
		maxSize = size;
		top = 0;
		listArray = (E[])new Object[size]; // Create listArray
	}
	/** Reinitialize stack */
	public void clear() { top = 0; }
	/** Push "it" onto stack */
	public void push(E it) {
		assert top != maxSize : "Stack is full";
		listArray[top++] = it;
	}
	/** Remove and top element */
	public E pop() {
		assert top != 0 : "Stack is empty";
		return listArray[--top];
	}
	/** @return Top element */
	public E topValue() {
		assert top != 0 : "Stack is empty";
		return listArray[top-1];
	}
	/** @return Stack size */
	public int length() { return top; }
}                    
				`}</CodePre></li>
			</SubList></li>
			<li><b>Linked Stacks:</b><SubList>
				<li><CodePre language="java">{`
/** Linked stack implementation */
class LStack<E> implements Stack<E> {
	private Link<E> top; // Pointer to first element
	private int size; // Number of elements
	/** Constructors */
	public LStack() { top = null; size = 0; }
	public LStack(int size) { top = null; size = 0; }
	/** Reinitialize stack */
	public void clear() { top = null; size = 0; }
	/** Put "it" on stack */
	public void push(E it) {
		top = new Link<E>(it, top);
		size++;
	}
	/** Remove "it" from stack */
	public E pop() {
		assert top != null : "Stack is empty";
		E it = top.element();
		top = top.next();
		size--;
		return it;
	}
	/** @return Top value */
	public E topValue() {
		assert top != null : "Stack is empty";
		return top.element();
	}
	/** @return Stack length */
	public int length() { return size; }
}
				`}</CodePre></li>
				<li>The freelist of shown in the "Singly Linked List" section is
					an example of a linked stack.</li>
			</SubList></li>
			<li>Comparison of array-based and linked stacks:<SubList>
				<li>All operations for the array-based and linked stack implementations take constant time, so from a time efficiency perspective, neither has a significant advantage.</li>
				<li>The array-based stack must declare a fixed-size array initially, and some of that space is wasted whenever the stack is not full.</li>
				<li>The linked stack can shrink and grow but requires the overhead of a link field for every element.</li>
				<li>When implementing multiple stacks, sometimes you can take advantage of the one-way growth of the array-based stack by using a single array to store two stacks. One stack grows inward from each end.</li>
				<li>In other words, ideally when one stack grows, the other will shrink. This is particularly effective when elements are taken from one stack and given to the other.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/11.PNG"} style={{width:"50%"}}/></li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Queues</h3>
		<ul>
			<li><b>Queues:</b><SubList>
				<li>Like the stack, the <b>queue</b> is a list-like structure that provides restricted access to its elements.</li>
				<li>Queue elements may only be inserted at the back (called an <b>enqueue</b> operation) and removed from the front (called a <b>dequeue</b> operation).</li>
				<li><CodePre language="java">{`
/** Queue ADT */
public interface Queue<E> {
	/** Reinitialize the queue. The user is responsible for
	reclaiming the storage used by the queue elements. */
	public void clear();
	/** Place an element at the rear of the queue.
	@param it The element being enqueued. */
	public void enqueue(E it);
	/** Remove and return element at the front of the queue.
	@return The element at the front of the queue. */
	public E dequeue();
	/** @return The front element. */
	public E frontValue();
	/** @return The number of elements in the queue. */
	public int length();
}
				`}</CodePre></li>
			</SubList></li>
			<li><b>Array-Based Queues:</b><SubList>
				<li>If we relax the requirement that all elements of the queue must be in the first \(n\) positions of the array, then both the <code>enqueue</code> and the <code>dequeue</code> operations can be performed in \(\Theta(1)\) time because the elements won't have to be shifted.</li>
				<li>This means when elements are removed from the queue, the front index increases.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/11.PNG"} style={{width:"60%"}}/>
					<figcaption>After repeated use, elements in the array-based queue will drift to the back of the array.</figcaption>
				</figure></li>
				<li>The "drifting queue" problem can be solved by pretending that the array is circular and so allow the queue to continue directly from the highest-numbered position in the array to the lowest-numbered position. This is easily implemented through use of the modulus operator (denoted by % in Java).</li>
				<li><CodePre language="java">{`
/** Array-based queue implementation */
class AQueue<E> implements Queue<E> {
	private static final int defaultSize = 10;
	private int maxSize; // Maximum size of queue
	private int front; // Index of front element
	private int rear; // Index of rear element
	private E[] listArray; // Array holding queue elements
	/** Constructors */
	AQueue() { this(defaultSize); }
	@SuppressWarnings("unchecked") // For generic array
	AQueue(int size) {
		maxSize = size+1; // One extra space is allocated
		rear = 0; front = 1;
		listArray = (E[])new Object[maxSize]; // Create listArray
	}
	/** Reinitialize */
	public void clear()
	{ rear = 0; front = 1; }
	/** Put "it" in queue */
	public void enqueue(E it) {
		assert ((rear+2) % maxSize) != front : "Queue is full";
		rear = (rear+1) % maxSize; // Circular increment
		listArray[rear] = it;
	}
	/** Remove and return front value */
	public E dequeue() {
		assert length() != 0 : "Queue is empty";
		E it = listArray[front];
		front = (front+1) % maxSize; // Circular increment
		return it;
	}
	/** @return Front value */
	public E frontValue() {
		assert length() != 0 : "Queue is empty";
		return listArray[front];
	}
	/** @return Queue size */
	public int length()
	{ return ((rear+maxSize) - front + 1) % maxSize; }
}                    
				`}</CodePre></li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/12.jpg"} style={{width:"80%"}}/>
					<figcaption>Example of an empty Queue and a full one (from OpenDSA)</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Linked Queue:</b><SubList>
				<li><CodePre language="java">{`
/** Linked queue implementation */
class LQueue<E> implements Queue<E> {
	private Link<E> front; // Pointer to front queue node
	private Link<E> rear; // Pointer to rear queuenode
	private int size; // Number of elements in queue
	/** Constructors */
	public LQueue() { init(); }
	public LQueue(int size) { init(); } // Ignore size
	/** Initialize queue */
	private void init() {
		front = rear = new Link<E>(null);
		size = 0;
	}
	/** Reinitialize queue */
	public void clear() { init(); }
	/** Put element on rear */
	public void enqueue(E it) {
		rear.setNext(new Link<E>(it, null));
		rear = rear.next();
		size++;
	}
	/** Remove and return element from front */
	public E dequeue() {
		assert size != 0 : "Queue is empty";
		E it = front.next().element(); // Store dequeued value
		front.setNext(front.next().next()); // Advance front
		if (front.next() == null) rear = front; // Last Object
		size--;
		return it; // Return Object
	}
	/** @return Front element */
	public E frontValue() {
		assert size != 0 : "Queue is empty";
		return front.next().element();
	}
	/** @return Queue size */
	public int length() { return size; }
}
				`}</CodePre></li>
				<li>A header link node is used, which allows for a simpler implementation of the <code>enqueue</code> operation by avoiding any special cases when the queue is empty.</li>
				<li>All member functions for both the array-based and linked queue implementations require constant time.</li>
				<li>The space comparison issues are the same as for the equivalent stack implementations.</li>
			</SubList></li>
		</ul>
		<div data-source="4">
		<h3>Dictionaries</h3>
		<ul>
			<li>A <b>dictionary</b> is an abstract data type that stores a collection of (key, value) pairs, such that each possible key appears at most once in the collection.</li>
			<li>The operations that are usually defined:<SubList>
				<li><code>Insert</code> or <code>put</code>: add a new (key,value) pair to the collection, mapping the key to its new value. Any existing mapping is overwritten.</li>
				<li><code>Remove</code> or <code>delete</code>: remove a (key,value) pair from the collection.</li>
				<li><code>Lookup</code>, <code>find</code>, or <code>get</code>: find the value (if any) that is bound to a given key. If no value is found, some lookup functions raise an exception, while others return a default value (zero, null, specific value passed to the constructor, ...).</li>
			</SubList></li>
			<li>The most frequently used general-purpose implementation is with a <b>hash table</b>.</li>
		</ul>
		</div>
		<div data-source="4">
		<h3>Sets</h3>
		<ul>
			<li>A <b>set</b> is an abstract data type that can store unique values, without any particular order.</li>
			<li>Typical operations:<SubList>
				<li><code>create()</code>: creates a new, initially empty set structure.</li>
				<li><code>add(S,x)</code>: adds the element x to S, if it is not present already.</li>
				<li><code>remove(S, x)</code>: removes the element x from S, if it is present.</li>
				<li><code>capacity(S)</code>: returns the maximum number of values that S can hold.</li>
				<li><code>size(S)</code>: returns the number of elements in S.</li>
				<li><code>is_element_of(x,S)</code>: checks whether the value x is in the set S.</li>
				<li><code>enumerate(S)</code>: returns a list containing the elements of S in some arbitrary order.</li>
			</SubList></li>
		</ul>
		</div>
	</div>
</div>

<h2>Trees</h2>
<div className="content" data-source="20">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul>
			<li><u>Definitions:</u><SubList>
				<li>A <b>binary tree</b> is made up of a finite set of elements called <b>nodes</b>.</li>
				<li>This set either is empty or consists of a node called the <b>root</b> together with two binary trees, called the left and right subtrees, which are disjoint from each other and from the root.</li>
				<li>The roots of these subtrees are <b>children</b> of the root.</li>
				<li>There is an <b>edge</b> from a node to each of its children, and a node is said to be the <b>parent</b> of its children.</li>
				<li>If \(n_1, n_2, \ldots ,n_k\) is a sequence of nodes in the tree such that \(n_i\) is the parent of \(n_{"{i+1}"}\) for \(1 \le i \lt k\), then this sequence is called a <b>path</b> from \(n_1\) to \(n_k\).</li>
				<li>The <b>length</b> of the path is \(k-1\).</li>
				<li>f there is a path from node \(R\) to node \(M\), then \(R\) is an <b>ancestor</b> of \(M\), and \(M\) is a <b>descendant</b> of \(R\).</li>
				<li>The <b>depth</b> of a node \(M\) in the tree is the length of the path from the root of the tree to M.</li>
				<li>The <b>height</b> of a tree is one more than the depth of the deepest node in the tree.</li>
				<li>All nodes of depth \(d\) are at <b>level</b> \(d\) in the tree.</li>
				<li>The <b>root</b> is the only node at level 0, and its depth is 0.</li>
				<li>A <b>leaf</b> node is any node that has two empty children.</li>
				<li>An <b>internal</b> node is any node that has at least one non-empty child.</li>
			</SubList></li>
			<li>Full and complete binary trees:<SubList>
				<li>Each node in a <b>full</b> binary tree is either an internal node with exactly two non-empty children or a leaf.</li>
				<li>A <b>complete</b> binary tree has a restricted shape obtained by starting at the root and filling the tree by levels from left to right. In the complete binary tree of height \(d\), all levels except possibly level \(d-1\) are completely full. The bottom level has its nodes filled in from the left side.</li>
				<li><figure style={{width:"70%"}}>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/15.PNG"}/>
					<figcaption>(a) This tree is full (but
						not complete). (b) This tree is complete (but not full).
						</figcaption>
				</figure></li>
				<li>Some binary tree implementations store data only at the leaf nodes, using the internal nodes to provide structure to the tree.</li>
				<li><b>Full Binary Tree Theorem:</b> The number of leaves in a non-empty full binary tree is one more than the number of internal nodes.</li>
				<li>The number of empty subtrees in a non-empty binary tree is one more than the number of nodes in the tree.</li>
				<li>Any process for visiting all of the nodes in some order is called a <b>traversal</b>.</li>
			</SubList></li>
			<li>Traversals:<SubList>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/6.jpeg"}/></li>
				<li><b>Preorder traversal:</b> we visit any given node before we visit its children.</li>
				<li>The preorder enumeration for the tree is <b>A B D C E G F H I</b>.</li>
				<li><b>Postorder traversal:</b>We visit each node only after we visit its children (and their subtrees).</li>
				<li>The postorder enumeration for the tree is <b>D B G E H I F C A</b>.</li>
				<li>An <b>inorder traversal</b> first visits the left child (including its entire subtree), then visits the node, and finally visits the right child (including its entire subtree).</li>
				<li>The inorder enumeration for the tree is <b>B D A G E C H F I</b>.</li>
			</SubList></li>
			<li>Information flow in recursive functions:<SubList>
				<li>Handling information flow in a recursive function can be a challenge. In any given function, we might need to be concerned with either or both of:<SubList opened>
					<li>Passing down the correct information needed by the function to do its work,</li>
					<li>Returning (passing up) information to the recursive function's caller.</li>
				</SubList></li>
				<li>Local:<SubList>
					<li><b>Local traversal</b> involves going to each node in the tree to do some operation. Such functions need no information from the parent (other than a pointer to the current node), and pass no information back.</li>
					<li>Examples include preorder traversal and incrementing the value of every node by one.</li>
				</SubList></li>
				<li>Passing Down Information:<SubList>
					<li>Slightly more complicated is the situation where every node needs the same piece of information to be passed to it.</li>
					<li>An example would be incrementing the value for all nodes by some amount. In this case, the value parameter is simply passed on unchanged in all recursive calls.</li>
					<li>Many functions need information that changes from node to node. A simple example is a function to set the value for each node of the tree to be its depth.</li>
					<li>In this case, the depth is passed as a parameter to the function, and each recursive call must adjust that value.</li>
				</SubList></li>
				<li><b>Collect-and-return:</b><SubList>
					<li>Collect-and-return requires that we communicate information back up the tree to the caller.</li>
					<li>Simple examples are to count the number of nodes in a tree, or to sum the values of all the nodes.</li>
				</SubList></li>
			</SubList></li>
			<li>Binary tree node implementations:<SubList>
				<li>Here is an ADT for binary tree nodes, called <code>BinNode</code>:</li>
				<li><CodePre language="java">{`
interface BinNode<E> { // Binary tree node ADT
  // Get and set the element value
  public E value();
  public void setValue(E v);

  // return the children
  public BinNode<E> left();
  public BinNode<E> right();

  // return TRUE if a leaf node, FALSE otherwise
  public boolean isLeaf();
}
				`}</CodePre></li>
				<li>Here is a simple implementation for the <code>BinNode</code> interface, which we will name <code>BSTNode</code>:</li>
				<li>Every <code>BSTNode</code> object also has two pointers, one to its left child and another to its right child.</li>
				<li><CodePre language="java">{`
// Binary tree node implementation: supports comparable objects
class BSTNode<E extends Comparable<? super E>> implements BinNode<E> {
  private E element;           // Element for this node
  private BSTNode<E> left;     // Pointer to left child
  private BSTNode<E> right;    // Pointer to right child

  // Constructors
  BSTNode() { left = right = null; }
  BSTNode(E val) { left = right = null; element = val; }
  BSTNode(E val, BSTNode<E> l, BSTNode<E> r)
    { left = l; right = r; element = val; }

  // Get and set the element value
  public E value() { return element; }
  public void setValue(E v) { element = v; }

  // Get and set the left child
  public BSTNode<E> left() { return left; }
  public void setLeft(BSTNode<E> p) { left = p; }

  // Get and set the right child
  public BSTNode<E> right() { return right; }
  public void setRight(BSTNode<E> p) { right = p; }

  // return TRUE if a leaf node, FALSE otherwise
  public boolean isLeaf() { return (left == null) && (right == null); }
}
				`}</CodePre></li>
				<li>Using the same class for leave nodes and internal nodes will simplify the implementation, but might be an inefficient use of space. Some applications require data values only for the leaves.</li>
				<li>A <b>base class</b> provides a general definition for an object, and a <b>subclass</b> modifies a base class to add more detail. The base class in the following code is named <code>VarBinNode</code>:</li>
				<li><CodePre language="java">{`
// Base class for expression tree nodes
public interface VarBinNode {
  public boolean isLeaf(); // All subclasses must implement
}

/** Leaf node */
public class VarLeafNode implements VarBinNode {
  private String operand;                 // Operand value

  VarLeafNode(String val) { operand = val; }
  public boolean isLeaf() { return true; }
  public String value() { return operand; }
}

// Internal node
public class VarIntlNode implements VarBinNode {
  private VarBinNode left;                // Left child
  private VarBinNode right;               // Right child
  private Character operator;             // Operator value

  VarIntlNode(Character op, VarBinNode l, VarBinNode r)
    { operator = op; left = l; right = r; }
  public boolean isLeaf() { return false; }
  public VarBinNode leftchild() { return left; }
  public VarBinNode rightchild() { return right; }
  public Character value() { return operator; }
}

// Preorder traversal
public static void traverse(VarBinNode rt) {
  if (rt == null) { return; }         // Nothing to visit
  if (rt.isLeaf()) {                 // Process leaf node
    Visit.VisitLeafNode(((VarLeafNode)rt).value());
  }
  else {                           // Process internal node
    Visit.VisitInternalNode(((VarIntlNode)rt).value());
    traverse(((VarIntlNode)rt).leftchild());
    traverse(((VarIntlNode)rt).rightchild());
  }
}
				`}</CodePre></li>
			</SubList></li>
			<li>Binary tree space requirements:<SubList>
				<li>Let \(P\) stands for the amount of space required by a pointer, and \(D\) stands for the amount of space required by a data value.</li>
				<li>In a simple pointer-based implementation for binary tree nodes, every node has two pointers to its children (even when the children are NULL):<SubList>
					<li>This implementation requires total space amounting to \(n(2P+D)\) for a tree of \(n\) nodes.</li>
					<li>The total overhead space will be \(2Pn\) for the entire tree. Thus, the overhead fraction will be \(2P/(2P+D)\).</li>
					<li>If we assume that \(P=D\), then a binary tree has about two thirds of its total space taken up in overhead.</li>
					<li>The Full Binary Tree Theorem tells us that about half of the pointers are NULL values that serve only to indicate tree structure, but which do not provide access to new data.</li>
					<li>In many languages (such as Java or JavaScript), the most typical implementation is not to store any actual data in a node, but rather a pointer to the data record. In this case, each node will typically store three pointers, all of which are overhead, resulting in an overhead fraction of \(3P/(3P+D)\).</li>
				</SubList></li>
				<li>If only leaves store data values:<SubList>
					<li>The fraction of total space devoted to overhead depends on whether the tree is full.</li>
					<li>If the tree is not full, then the overhead can be an arbitrarily high percentage.</li>
					<li>The overhead fraction drops as the tree becomes closer to full, being lowest when the tree is truly full. In this case, about one half of the nodes are internal.</li>
					<li>Great savings can be had by eliminating the pointers from leaf nodes in full binary trees:</li>
					<MathStuff>\[{"\\frac{\\frac{n}{2} 2P}{\\frac{n}{2} (2P) + Dn}= \\frac{P}{P+D}"}\]</MathStuff>
					<li>If \(P=D\), the overhead drops to about one half of the total space.</li>
				</SubList></li>
				<li>If the internal nodes store two pointers and no data field while the leaf nodes store only a pointer to the data field:<SubList>
					<li>This implementation requires:</li>
					<MathStuff>{"\\frac{n}{2} 2P + \\frac{n}{2} (P+D)"}</MathStuff>
					<li>If \(P=D\), then the overhead is \(3P/(3P+D)=3/4\).</li>
					<li>It might seem counter-intuitive that the overhead ratio has gone up while the total amount of space has gone down. The reason is because we have changed our definition of "data" to refer only to what is stored in the leaf nodes, so while the overhead fraction is higher, it is from a total storage requirement that is lower.</li>
				</SubList></li>
				<li>When using separate implementations for internal and leaf nodes, there must be a way to distinguish between the node types.</li>
				<li>When separate node types are implemented via Java subclasses, the runtime environment stores information with each object allowing it to determine, for example, the correct subclass to use when the <code>isLeaf</code> virtual function is called. Thus, each node requires additional space.</li>
				<li>Only one bit is truly necessary to distinguish the two possibilities. In rare applications where space is a critical resource, implementors can often find a spare bit within the node's value field (or pointer) in which to store the node type indicator.</li>
			</SubList></li>
			<li><b>Binary search trees:</b><SubList>
				<li>A <b>binary search tree (BST)</b> is a binary tree that conforms to the following condition:<SubList opened>
					<li>All nodes stored in the left subtree of a node whose key value is \(K\) have key values less than or equal to \(K\).</li>
					<li>All nodes stored in the right subtree of a node whose key value is \(K\) have key values greater than \(K\).</li>
				</SubList></li>
				<li>There are various ways to deal with keys and comparing records. Three typical approaches are <b>key-value pairs</b>, a special comparison method such as using the <code>Comparator</code> class, and passing in a <b>comparator function</b>.</li>
				<li><CodePre language="java">{`
// Binary Search Tree implementation
class BST<E extends Comparable<E>> {
  private BSTNode<E> root; // Root of the BST
  private int nodecount; // Number of nodes in the BST

  // constructor
  BST() { root = null; nodecount = 0; }

  // Reinitialize tree
  public void clear() { root = null; nodecount = 0; }

  // Insert a record into the tree.
  // Records can be anything, but they must be Comparable
  // e: The record to insert.
  public void insert(E e) {
    root = inserthelp(root, e);
    nodecount++;
  }

  // Remove a record from the tree
  // key: The key value of record to remove
  // Returns the record removed, null if there is none.
  public E remove(E key) {
    E temp = findhelp(root, key); // First find it
    if (temp != null) {
      root = removehelp(root, key); // Now remove it
      nodecount--;
    }
    return temp;
  }

  // Return the record with key value k, null if none exists
  // key: The key value to find
  public E find(E key) { return findhelp(root, key); }

  // Return the number of records in the dictionary
  public int size() { return nodecount; }
				`}</CodePre></li>
				<li>Removing a node:<SubList>
					<li>Removing a node with given key value \(R\) from the BST requires that we first find \(R\) and then remove it from the tree.</li>
					<li>The first part of the remove operation is a search to find \(R\). Once \(R\) is found, there are several possibilities. If \(R\) has no children, then \(R\)'s parent has its pointer set to NULL. If \(R\) has one child, then \(R\)'s parent has its pointer set to \(R\)'s child.</li>
					<li>The problem comes if \(R\) has two children. One approach is to find a value in one of the subtrees that can replace the value in \(R\).</li>
					<li>Which value can substitute for the one being removed? The least key value greater than the one being removed, or else the greatest key value less than (or equal to) the one being removed. If either of these values replace the one being removed, then the BST property is maintained.</li>
					<li>The cost for <code>removehelp</code> is the depth of the node being removed, or in the case when this node has two children, the depth of the node with smallest value in its right subtree.</li>
				</SubList></li>
				<li>The cost for <code>findhelp</code> and <code>inserthelp</code> is the depth of the node found or inserted.</li>
			</SubList></li>
			<li><b>Guided traversal:</b><SubList>
				<li><b>Guided traversal</b> refers to a problem that does not require visiting every node in the tree, though it typically requires looking at more than one path through the tree.</li>
				<li>For finding the minimum value in a BST, we need to only visit the left subtree until we reach a leaf node.</li>
			</SubList></li>
			<li>Array implementation for complete binary trees:<SubList>
				<li>A complete binary tree of \(n\) nodes has only one possible shape. An array can store the data values efficiently.</li>
				<li>We begin by assigning numbers to the node positions in the complete binary tree, level by level, from left to right:</li>
				<li><figure style={{width:"75%"}}><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/16.PNG"}/>
					<figcaption>A complete binary tree and its array implementation. (a) The complete binary tree with twelve nodes. Each node has been labeled with its position in the tree. (b) The positions for the relatives of each node.</figcaption>
				</figure></li>
				<li>If the total number of nodes in the tree is \(n\), and index of the node in question is \(r\), which must fall in the range 0 to \(n - 1\):</li>
				<MathStuff>$${`\\begin{aligned}
					\\text{Parent}(r) &= \\lfloor (r - 1)/2 \\rfloor &&\\text{if } r \\ne 0 \\\\
					\\text{Left child}(r) &= 2r + 1 &&\\text{if } 2r + 1 < n \\\\
					\\text{Right child}(r) &= 2r + 2 &&\\text{if } 2r + 2 < n \\\\
					\\text{Left sibling}(r) &= r - 1 &&\\text{if } r \\text{ is even and } r \\ne 0 \\\\
					\\text{Right sibling}(r) &= r + 1 &&\\text{if } r \\text{ is odd and } r \\lt n \\\\
				\\end{aligned}`}$$</MathStuff>
			</SubList></li>
			<li>When a collection of objects is organized by importance or priority, we call this a <b>priority queue</b>.</li>
			<li><b>Heaps:</b><SubList>
				<li>A <b>heap</b> is defined by two properties:<SubList>
					<li>It is a complete binary tree, so heaps are nearly always implemented
					using the array representation for complete binary trees.</li>
					<li>The values stored in a heap are partially ordered. This means that there is
					a relationship between the value stored at any node and the values of its children.</li>
				</SubList></li>
				<li>The logical view of the heap is actually a tree structure, while the typical physical implementation uses an array.</li>
				<li>A <b>max-heap</b> has the property that every node stores a value that is greater than or equal to the value of either of its children, so, the root stores the maximum of all values in the tree:<SubList>
					<li><CodePre language="java">{`
// Max-heap implementation
// use 'java -ea' to enable assertions that check valid heap positions
class MaxHeap {
  private Comparable[] heap; // Pointer to the heap array
  private int maxSize; // Maximum size of the heap
  private int n; // Number of things now in heap

  // Constructor supporting preloading of heap contents
  MaxHeap(Comparable[] h, int heapSize, int max) {
    heap = h;
    n = heapSize;
    maxSize = max;
    buildHeap();
  }

  // Return current size of the heap
  public int heapSize() { return n; }

  // Return true if pos a leaf position, false otherwise
  public boolean isLeaf(int pos) 
  { return (n / 2 <= pos ) && (pos < n); }

  // Return position for left child of pos
  public static int leftChild(int pos) 
  { return 2 * pos + 1; }

  // Return position for right child of pos
  public static int rightChild(int pos) 
  { return 2 * pos + 2; }

  // Return position for parent
  public static int parent(int pos) 
  { return (pos - 1) / 2; }

  // Insert val into heap
  public void insert(Comparable key) {
    assert n < maxSize : "Heap is full; cannot insert";
    heap[n] = key;
    n++;
    shiftUp(n - 1);
  }

  // Heapify contents of Heap
  private void buildHeap() {
    for (int i = parent(n - 1); i >= 0; i--) {
      shiftDown(i);
    }
  }

  // Moves an element down to its correct place
  private void shiftDown(int pos) {
    assert (0 <= pos && pos < n) : "Invalid heap position";
    while (!isLeaf(pos)) {
      int child = leftChild(pos);
      if ((child + 1 < n) && isGreaterThan(child + 1, child)) {
        child = child + 1; // child is now index with the greater value
      }
      if (!isGreaterThan(child, pos)) {
        return; // stop early
      }
      swap(pos, child);
      pos = child; // keep shifting down
    }
  }

  // Moves an element up to its correct place
  private void shiftUp(int pos) {
    assert (0 <= pos && pos < n) : "Invalid heap position";
    while (pos > 0) {
      int parent = parent(pos);
      if (isGreaterThan(parent, pos)) {
        return; // stop early
      }
      swap(pos, parent);
      pos = parent; // keep shifting up
    }
  }

  // Remove and return maximum value
  public Comparable removeMax() {
    assert n > 0 : "Heap is empty; cannot remove";
    n--;
    swap(0, n);  // Swap maximum with last value
    shiftDown(0); // Put new heap root val in correct place
    return heap[n];
  }

  // Remove and return element at specified position
  public Comparable remove(int pos) {
    assert (0 <= pos && pos < n) : "Invalid heap position";
    n--;
    swap(pos, n); // Swap with last value
    update(pos);  // Move other value to correct position
    return heap[n];
  }

  // Modify the value at the given position
  public void modify(int pos, Comparable newVal) {
    assert (0 <= pos && pos < n) : "Invalid heap position";
    heap[pos] = newVal;
    update(pos);
  }

  // The value at pos has been changed, restore the heap property
  private void update(int pos) {
    shiftUp(pos);   // priority goes up
    shiftDown(pos); // unimportant goes down
  }

  // swaps the elements at two positions
  private void swap(int pos1, int pos2) {
    Comparable temp = heap[pos1];
    heap[pos1] = heap[pos2];
    heap[pos2] = temp;
  }

  // does comparison used for checking heap validity
  private boolean isGreaterThan(int pos1, int pos2) {
    return heap[pos1].compareTo(heap[pos2]) > 0;
  }
}  
					`}</CodePre></li>
					<li>Insertion:<SubList>
						<li>We put the new value at the end of the array, then move upward.</li>
						<li>Each call to <code>insert</code> takes \(\Theta (\log n)\) time in the worst case, because the value being inserted can move at most the distance from the bottom of the tree to the top of the tree.</li>
					</SubList></li>
					<li>Removing:<SubList>
						<li>We swap the first and last positions, decrement the heap by one (removing the last element), then push the top element down as appropriate.</li>
						<li>The cost of deleting the maximum element is \(\Theta(\log n)\) in the average and worst cases.</li>
					</SubList></li>
					<li>The heap is a natural implementation for the priority queue. Jobs can be added to the heap (using their priority value as the ordering key) when needed. Method <code>removemax</code> can be called whenever a new job is to be executed.</li>
				</SubList></li>
				<li>A <b>min-heap</b> has the property that every node stores a value that is less than or equal to that of its children.</li>
			</SubList></li>
			<li><b>Trie:</b> A form of search tree where an internal node represents a split in the key space at a predetermined location, rather than split based on the actual key values seen.</li>
		</ul>
		<h3>Huffman Coding Trees</h3>
		<ul>
			<li><b>Huffman Coding Trees:</b><SubList>
				<li><b>Huffman coding</b> assigns codes to characters such that the length of the code depends on the relative frequency or weight of the corresponding character. The codes can be of variable length, such that the letters which are expected to appear most frequently are shorter.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/17.PNG"} style={{width: "55%"}}/>
					<figcaption>Relative frequencies for the 26 letters of the alphabet as they appear in a selected set of English documents. "Frequency" represents the expected frequency of occurrence per 1000 letters.</figcaption>
				</figure></li>
				<li>Huffman coding is optimal whenever the true frequencies are known, and the frequency of a letter is independent of the context of that letter in the message.</li>
				<li>The Huffman code for each letter is derived from a full binary tree called the <b>Huffman coding tree</b>.</li>
			</SubList></li>
			<li>Building a Huffman tree for \(n\) letters:<SubList>
				<li>Each leaf of the Huffman tree corresponds to a letter, and we define the weight of the leaf node to be the weight (frequency) of its associated letter.</li>
				<li>The <b>weighted path length</b> of a leaf is its weight times its depth. The binary tree with <b>minimum external path weight</b> is the one with the minimum sum of weighted path lengths for the given set of leaves.</li>
				<li>The goal is to build a tree with the minimum external path weight.</li>
				<li>A letter with high weight should have low depth, so that it will count the least against the total path length.</li>
				<li>Create a collection of \(n\) initial Huffman trees, each of which is a single leaf node containing one of the letters. Put the \(n\) partial trees onto a priority queue organized by weight (frequency).</li>
				<li>Next, remove the first two trees (the ones with lowest weight) from the priority queue. Join these two trees together to create a new tree whose root has the two trees as children, and whose weight is the sum of the weights of the two trees. Put this new tree back into the priority queue.</li>
				<li>The process is repeated until all of the partial Huffman trees have been combined into one.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/18.PNG"} style={{width: "65%"}}/></li>
				<li><u>Implementation:</u><SubList>
					<li>Internal nodes and leaf nodes are represented by separate classes, each derived from an abstract base class:</li>
					<li><CodePre language="java">{`
/** Huffman tree node implementation: Base class */
public interface HuffBaseNode<E> {
	public boolean isLeaf();
	public int weight();
}
/** Huffman tree node: Leaf class */
class HuffLeafNode<E> implements HuffBaseNode<E> {
	private E element; // Element for this node
	private int weight; // Weight for this node
	/** Constructor */
	public HuffLeafNode(E el, int wt)
	{ element = el; weight = wt; }
	/** @return The element value */
	public E element() { return element; }
	/** @return The weight */
	public int weight() { return weight; }
	/** Return true */
	public boolean isLeaf() { return true; }
}
/** Huffman tree node: Internal class */
class HuffInternalNode<E> implements HuffBaseNode<E> {
	private int weight; // Weight (sum of children)
	private HuffBaseNode<E> left; // Pointer to left child
	private HuffBaseNode<E> right; // Pointer to right child
	/** Constructor */
	public HuffInternalNode(HuffBaseNode<E> l,
	HuffBaseNode<E> r, int wt)
	{ left = l; right = r; weight = wt; }
	/** @return The left child */
	public HuffBaseNode<E> left() { return left; }
	/** @return The right child */
	public HuffBaseNode<E> right() { return right; }
	/** @return The weight */
	public int weight() { return weight; }
	/** Return false */
}
					`}</CodePre></li>
					<li>Class declarations for the Huffman tree:</li>
					<li><CodePre language="java">{`
class HuffTree<E> implements Comparable<HuffTree<E>>{
	private HuffBaseNode<E> root; // Root of the tree
	/** Constructors */
	public HuffTree(E el, int wt)
	{ root = new HuffLeafNode<E>(el, wt); }
	public HuffTree(HuffBaseNode<E> l,
	HuffBaseNode<E> r, int wt)
	{ root = new HuffInternalNode<E>(l, r, wt); }
	public HuffBaseNode<E> root() { return root; }
	public int weight() // Weight of tree is weight of root
	{ return root.weight(); }
	public int compareTo(HuffTree<E> that) {
		if (root.weight() < that.weight()) return -1;
		else if (root.weight() == that.weight()) return 0;
		else return 1;
	}
}
					`}</CodePre></li>
					<li>Implementation for the Huffman tree construction function:</li>
					<li><CodePre language="java">{`
/** Build a Huffman tree from list hufflist */
static HuffTree<Character> buildTree() {
	HuffTree tmp1, tmp2, tmp3 = null;
	while (Hheap.heapsize() > 1) { // While two items left
		tmp1 = Hheap.removemin();
		tmp2 = Hheap.removemin();
		tmp3 = new HuffTree<Character>(tmp1.root(), tmp2.root(),
		tmp1.weight() + tmp2.weight());
		Hheap.insert(tmp3); // Return new tree to heap
	}
	return tmp3; // Return the tree
}
					`}</CodePre></li>
				</SubList></li>
				<li>ASCII coding actually uses 8 bits per character. Seven bits are used to represent the 128 codes of the ASCII character set. The eigth bit as a parity bit, that can be used to check if there is a transmission error for the character.</li>
			</SubList></li>
			<li>Using Huffman Codes:<SubList>
				<li>A set of codes is said to meet the <b>prefix property</b> if no code in the set is the prefix of another. The prefix property guarantees that there will be no ambiguity in how a bit string is decoded.</li>
				<li>'0' is assigned to edges connecting a node with its left child, and '1' to edges connecting a node with its right child</li>
				<li><figure>
					<ImgComp style={{width:"50%"}} src={"/articlePics/data_structures_and_algorithms_pics/19.PNG"}/>
					<figcaption>The code for K is '111101'.</figcaption>
				</figure></li>
				<li>The code for M is '11111'. Taking five right branches in the Huffman tree. We can be sure that no letter can have code '111' because this corresponds to an internal node of the tree, and the tree-building process places letters only at the leaf nodes.</li>
				<li>The frequencies of letters in an English text document do change depending on context. For example, while E is the most commonly used letter of the alphabet in English documents, T is more common as the first letter of a word. This is why most commercial compression utilities do not use Huffman coding as their primary coding method.</li>
				<li>Some frequency patterns will save no space as compared to fixed-length codes. In general, Huffman coding does better when there is large variation in the frequencies of letters.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>General Trees</h3>
		<ul>
			<li><u>Definitions:</u><SubList>
				<li>When we permit trees to have nodes with an arbitrary number of children, they become much harder to implement than binary trees. To distinguish them from binary trees, we use the term <b>general tree</b>.</li>
				<li>A <b>tree \({"\\textbf{T}"}\)</b> is a finite set of one or more nodes such that there is one designated node \(R\), called the <b>root</b> of \({"\\textbf{T}"}\). If the set \(({"{\\textbf{T} - {R}}"})\) is not empty, these nodes are partitioned into \(n \gt 0\) disjoint subsets \({"\\textbf{T}_0, \\textbf{T}_1, \\ldots, \\textbf{T}_{n-1}"}\), each of which is a tree, and whose roots \(R_1, R_2, \ldots, R_n\), respectively, are children of \(R\).</li>
				<li>The subsets \({"\\textbf{T}"}_i \ (0 ≤ i &lt; n)\) are said to be <b>subtrees</b> of \({"\\textbf{T}"}\). These subtrees are ordered in that \({"\\textbf{T}"}_i\) is said to come before \({"\\textbf{T}"}_j\) if \(i &lt; j\)</li>
				<li>By convention, the subtrees are arranged from left to right with subtree \({"\\textbf{T}"}_0\) called the leftmost child of \(R\).</li>
				<li>A node's <b>out degree</b> is the number of children for that node. A <b>forest</b> is a collection of one or more trees.</li>
			</SubList></li>
			<li>ADT for General Tree Nodes:<SubList>
				<li>Because we do not know in advance how many children a given node will have in the general tree, we cannot give explicit functions to access each child. An alternative must be found that works for an unknown number of children. </li>
				<li>One choice would be to provide a function that takes as its parameter the index for the desired child. That combined with a function that returns the number of children for a given node would support the ability to access any node or process all children of a node.</li>
				<li>An alternative is to provide access to the leftmost child of a node, and to provide access to the right sibling of a node:</li>
				<li><CodePre language="java">{`
/** General tree node ADT */
interface GTNode<E> {
	public E value();
	public boolean isLeaf();
	public GTNode<E> parent();
	public GTNode<E> leftmostChild();
	public GTNode<E> rightSibling();
	public void setValue(E value);
	public void setParent(GTNode<E> par);
	public void insertFirst(GTNode<E> n);
	public void insertNext(GTNode<E> n);
	public void removeFirst();
	public void removeNext();
}
/** General tree ADT */
interface GenTree<E> {
	public void clear(); // Clear the tree
	public GTNode<E> root(); // Return the root
	// Make the tree have a new root, give first child and sib
	public void newroot(E value, GTNode<E> first,
	GTNode<E> sib);
	public void newleftchild(E value); // Add left child
}
				`}</CodePre></li>
			</SubList></li>
			<li>Tree traversals:<SubList>
				<li>For general trees, preorder and postorder traversals are defined with meanings similar to their binary tree counterparts.</li>
				<li><b>Preorder traversal</b> of a general tree first visits the root of the tree, then performs a preorder traversal of each subtree from left to right.</li>
				<li>A <b>postorder traversal</b> of a general tree performs a postorder traversal of the root's subtrees from left to right, then visits the root.</li>
				<li><b>Inorder traversal</b> does not have a natural definition for the general tree, because there is no particular number of children for an internal node. An arbitrary definition - such as visit the leftmost subtree in inorder, then the root, then visit the remaining subtrees in inorder - can be invented.</li>
			</SubList></li>
			<li>The <b>Parent Pointer</b> Implementation:<SubList>
				<li>Storing for each node only a pointer to that node's parent is called the <b>parent pointer</b> implementation.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/20.PNG"} style={{width:"60%"}}/></li>
				<li>The parent pointer implementation is useful for this question: "Given two nodes, are they in the same tree?"</li>
				<li>If both nodes reach the same root, then they must be in the same tree. If the roots are different, then the two nodes are not in the same tree.</li>
				<li>The parent pointer representation is most often used to maintain a collection of disjoint sets.</li>
				<li>There are two basic operations that we wish to support:<SubList opened>
					<li>determine if two objects are in the same set (FIND operation)</li>
					<li>merge two sets together (UNION operation)</li>
				</SubList></li>
				<li>Here is an implementation for parent pointer trees and the UNION/FIND process:</li>
				<li><CodePre language="java">{`
/** General Tree class implementation for UNION/FIND */
class ParPtrTree {
	private Integer [] array; // Node array
	public ParPtrTree(int size) {
		array = new Integer[size]; // Create node array
		for (int i=0; i<size; i++)
		array[i] = null;
	}
	/** Determine if nodes are in different trees */
	public boolean differ(int a, int b) {
		Integer root1 = FIND(a); // Find root of node a
		Integer root2 = FIND(b); // Find root of node b
		return root1 != root2; // Compare roots
	}
	/** Merge two subtrees */
	public void UNION(int a, int b) {
		Integer root1 = FIND(a); // Find root of node a
		Integer root2 = FIND(b); // Find root of node b
		if (root1 != root2) array[root2] = root1; // Merge
	}
	/** @return The root of curr's tree */
	public Integer FIND(Integer curr) {
		if (array[curr] == null) return curr; // At root
		while (array[curr] != null) curr = array[curr];
		return curr;
	}
}                
				`}</CodePre></li>
				<li>A low-cost approach to reducing the height is to be smart about how two trees are joined together:<SubList>
					<li>One simple technique, called the <b>weighted union rule</b>, joins the tree with fewer nodes to the tree with more nodes by making the smaller tree's root point to the root of the bigger tree.</li>
					<li>This will limit the total depth of the tree to \(O(\log n)\), because the depth of nodes only in the smaller tree will now increase by one, and the depth of the deepest node in the combined tree can only be at most one deeper than the deepest node before the trees were combined.</li>
					<li><b>Path compression</b> is a method that tends to create extremely shallow trees. Path compression takes place while finding the root for a given node \(X\). It resets the parent of every node on the path from \(X\) to root \(R\) to point directly to \(R\).</li>
					<li><CodePre language="java">{`
public Integer FIND(Integer curr) {
	if (array[curr] == null) return curr; // At root
	array[curr] = FIND(array[curr]);
	return array[curr];
}
					`}</CodePre></li>
				</SubList></li>
			</SubList></li>
			<li>The <b>list of children</b> implementation:<SubList>
				<li>The "list of children" implementation stores the tree nodes in an array.</li>
				<li>Each node contains a value, a pointer (or index) to its parent, and a pointer to a linked list of the node's children, stored in order from left to right.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/21.PNG"} style={{width:"70%"}}/></li>
				<li>The leftmost child of a node can be found directly because it is the first element in the linked list.</li>
			</SubList></li>
			<li>The <b>Left-Child/Right-Sibling</b> Implementation:<SubList>
				<li>Each node stores its value and pointers to its parent, leftmost child, and right sibling.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/22.PNG"} style={{width:"70%"}}/></li>
				<li>If two trees are stored within the same node array, then adding one as the subtree of the other simply requires setting three pointers.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/23.PNG"} style={{width:"70%"}}/></li>
				<li>This implementation is more space efficient than the "list of children" implementation, and each node requires a fixed amount of space in the node array.</li>
			</SubList></li>
			<li>Dynamic Node Implementations:<SubList>
				<li>One Approach is to allocate an array of child pointers as part of the node. </li>
				<li>This approach assumes that the number of children is known when the node is created. </li>
				<li>If the number of children does change, then some special recovery mechanism must be provided to support a change in the size of the child pointer array.</li>
				<li>One possibility is to allocate a new node of the correct size from free store and return the old copy of the node to free store for later reuse.</li>
				<li><figure style={{width:"70%"}}><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/24.PNG"}/><figcaption> For each node, the first field stores the node value while the second field stores the size of the child pointer array.</figcaption></figure></li>
				<li>Another approach is to store a linked list of child pointers with each node. This is more flexible, but which requires more space.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/25.PNG"} style={{width:"70%"}}/></li>
			</SubList></li>
			<li>Dynamic left-child/right-sibling implementation:<SubList>
				<li>Each node of the "left-child/right-sibling" implementation points to two "children" in a new binary tree structure.</li>
				<li>We can easily extend this conversion to a forest of general trees, because the roots of the trees can be considered siblings. We simply include links from each node to its right sibling and remove links to all children except the leftmost child.</li>
				<li><figure>
					<ImgComp style={{width:"80%"}} src={"/articlePics/data_structures_and_algorithms_pics/34.png"}/>
					<figcaption></figcaption>
				</figure></li>
			</SubList></li>
			<li><b>K-ary Trees:</b><SubList>
				<li><b>K-ary trees</b> are trees whose internal nodes all have exactly K children. Thus, a full binary tree is a 2-ary tree.</li>
				<li><b>Full</b> and <b>complete</b> K-ary trees are analogous to full and complete binary trees, respectively.</li>
			</SubList></li>
		</ul>
		<h3>Sequential Tree Representations</h3>
		<ul>
			<li>What are they:<SubList>
				<li>The goal is to store a series of node values with the minimum information needed to reconstruct the tree structure. This approach, known as a <b>sequential tree representation</b>, this has the advantage of saving space because no pointers are stored.</li>
				<li>It has the disadvantage that accessing any node in the tree requires sequentially processing all nodes that appear before it in the node list.</li>
				<li>Sequential tree implementations can be used to <b>serialize</b> a tree structure. Serialization is the process of storing an object as a series of bytes, typically so that the data structure can be transmitted between computers.</li>
				<li>A sequential tree implementation typically stores the node values as they would be enumerated by a preorder traversal, along with sufficient information to describe the tree's shape.</li>
			</SubList></li>
			<li>Full binary tree representation:<SubList>
				<li>If the tree is a full binary tree, then less information about structure typically needs to be stored.</li>
				<li>Because every node of a binary tree is either a leaf or has two (possibly empty) children, we can take advantage of this fact to implicitly represent the tree's structure.</li>
				<li>As we read the series of node values, we do not know when a leaf node has been reached. However, we can treat all non-empty nodes as internal nodes with two (possibly empty) children.</li>
				<li>Only NULL values will be interpreted as leaf nodes, and these can be listed explicitly.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/26.PNG"} style={{width:"40%"}}/></li>
				<li>We can represent the above binary tree like this: [A, B, /,D, C, E, G, /, /, /, F, H, /, /, I, /, /].</li>
				<li>From the Full Binary Tree Theorem, we know that the size of the node list will be about twice the number of nodes (i.e., the overhead fraction is 1/2).</li>
				<li>Storing \(n\) extra bits can be a considerable savings over storing \(n\) <code>null</code> values.</li>
				<li>We should be able to store the node list more compactly. However, any sequential implementation must recognize when a leaf node has been reached, that is, a leaf node indicates the end of a subtree.</li>
				<li>One way to do this is to explicitly list with each node whether it is an internal node or a leaf. If a node \(X\) is an internal node, then we know that its two children (which may be subtrees) immediately follow \(X\) in the node list.</li>
				<li>Let "/" represent empty children, and a mark (') represents that the node is internal.</li>
				<li>The above tree can be stored as [A', B', /, D, C', E', G, /, F', H, I].</li>
				<li>Each node was shown with a mark if it is internal, or no mark if it is a leaf. This requires that each node value has space to store the mark bit.</li>
			</SubList></li>
			<li>Bit vector representation:<SubList>
				<li>Another approach is to store a separate bit vector to represent the status of each node, where '1' would indicate internal.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/34.jpeg"} style={{width:"50%"}}/>
					<figcaption>Ignore the "rt"</figcaption>
				</figure></li>
			</SubList></li>
			<li>General tree representation:<SubList>
				<li>We can use ")"  to indicate the end of a child list.  All leaf nodes are followed by a ")" symbol because they have no children. A leaf node that is also the last child for its parent would indicate this by two or more successive ")" symbols.</li>
				<li>In this example: [R, A, C, ), D, ), E, ), ), B, F, ), ), )]. "F" is followed by three ")" marks, because it is a leaf, the last node of B's rightmost subtree, and the last node of R's rightmost subtree.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/27.PNG"} style={{width:"40%"}}/></li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="Sorting">Sorting</h2>
<div className="content" data-source="20">
	<div style={{width:"49%", marginLeft:"0.5%", float: "left"}}>
		<ul>
			<li>Sorting problems:<SubList>
				<li><b>Sorting problem:</b> to arrange a set of records so that the values of their key fields are in non-decreasing order.</li>
				<li>A sorting algorithm is said to be <b>stable</b> if it does not change the relative ordering of records with identical key values.</li>
				<li>When comparing two sorting algorithms, the simplest approach would be to program both and measure their running times. This is an example of <b>empirical comparison</b>. However, doing fair empirical comparisons can be tricky because the running time for many sorting algorithms depends on specifics of the input values.</li>
				<li>When analyzing sorting algorithms, it is traditional to measure the cost by counting the number of comparisons made between keys.</li>
			</SubList></li>
			<li><b>Insertion sort:</b><SubList>
				<li><b>Insertion sort</b> iterates through a list of records. Each record is inserted in turn at the correct position within a sorted list composed of those records already processed.</li>
				<li><CodePre language="java">{`
static <T extends Comparable<T>> void inssort(T[] A) {
  for (int i=1; i<A.length; i++) // Insert i'th record
    for (int j=i; (j>0) && (A[j].compareTo(A[j-1]) < 0); j--)
      swap(A, j, j-1);
}
				`}</CodePre></li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/35.PNG"} style={{width: "60%"}}/>
					<figcaption>An illustration of insertion sort</figcaption>
				</figure></li>
				<li>The worst case cost is \(\Theta(n^2)\).</li>
				<li>The average case cost is \(\Theta(n^2)\).</li>
				<li>The best case cost is \(\Theta(n)\).</li>
			</SubList></li>
			<li><b>Bubble Sort:</b><SubList>
				<li>Bubble Sort consists of a simple double <code>for</code> loop.</li>
				<li><CodePre language="java">{`
static <T extends Comparable<T>> void bubblesort(T[] A) {
  for (int i=0; i<A.length-1; i++) // Insert i'th record
    for (int j=1; j<A.length-i; j++)
      if (A[j-1].compareTo(A[j]) > 0)
        swap(A, j-1, j);
}
				`}</CodePre></li>
				<li>The inner <code>for</code> loop moves through the record array from left to right, comparing adjacent keys. If a record's key value is greater than the key of its right neighbor, then the two records are swapped.</li>
				<li>nce the record with the largest key value is encountered, this process will cause it to "bubble" up to the right of the array.</li>
				<li>The second pass through the array repeats this process. However, because we know that the record with the largest value already reached the right of the array on the first pass, there is no need to compare the rightmost two records on the second pass.</li>
				<li>Bubble Sort's running time is roughly the same in the best, average, and worst cases (\(\Theta(n^2)\)).</li>
			</SubList></li>
			<li><b>Selection Sort:</b><SubList>
				<li>The \(i\)'th pass of <b>Selection Sort</b> "selects" the \(i\)'th largest key in the array, placing that record at the end of the array. In other words, Selection Sort first finds the largest key in an unsorted list, then the next largest, and so on.</li>
				<li>To find the next largest key value requires searching through the entire unsorted portion of the array, but only one swap is required to put the record in place. Thus, the total number of swaps required will be \(n - 1\) (we get the last record in place).</li>
				<li><CodePre language="java">{`
static <T extends Comparable<T>> void selsort(T[] A) {
  for (int i=0; i<A.length-1; i++) {       // Select i'th biggest record
    int bigindex = 0;                      // Current biggest index
    for (int j=1; j<A.length-i; j++)       // Find the max value
      if (A[j].compareTo(A[bigindex]) > 0) // Found something bigger
        bigindex = j;                      // Remember bigger index
    swap(A, bigindex, A.length-i-1);       // Put it into place
  }
}
				`}</CodePre></li>
				<li>Selection Sort is essentially a Bubble Sort except that rather than repeatedly swapping adjacent values to get the next-largest record into place, we instead remember the position of the record to be selected and do one swap at the end.</li>
				<li>While this sort requires \(\Theta(n^2)\) time in the best, average, and worst cases, it requires only \(\Theta(n)\) swap operations.</li>
			</SubList></li>
			<li><b>Exchange sort:</b><SubList>
				<li>Moves (for Insertion and Bubble Sort) are by single steps. Swapping adjacent records is called an <b>exchange</b>.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/36.PNG"} style={{width: "55%"}}/></li>
				<li>The total number of comparisons required is at least the number of inversions for the record, where an <b>inversion</b> occurs when a record with key value greater than the current record's key value appears before it.</li>
			</SubList> </li>
			<li>Speeding up insertion sort:<SubList>
				<li>There is a better alternative than continuously swapping the record to the left until a smaller value is found. This is to move the current record to a temporary variable, and then shift all of the records with greater value one step to the right.</li>
				<li>Since swap requires three assignments per element and shifting requires only one assignment per element, we can hope that this will yield a big improvement.</li>
				<li><CodePre language="java">{`
// Instead of swapping, "shift" the values down the array
static void inssortshift(int[] A) {
  for (int i=1; i<A.length; i++) { // Insert i'th record
    int j;
    int temp = A[i];
    for (j=i; (j>0) && (temp < A[j-1]); j--) {
      A[j] = A[j-1];
    }
    A[j] = temp;
  }
}
				`}</CodePre></li>
			</SubList></li>
			<li>Speeding up bubble sort:<SubList>
				<li>Check during each iteration of the outer loop, see if any swaps took place during that iteration, and quit if not (since we know the list is ordered at this point).</li>
				<li>We can improve on this idea even more by recognizing that if the last swap done affects the values at positions \(i\) and \(i+1\), no swaps could happen to values at positions greater than \(i\).</li>
				<li><CodePre language="java">{`
static <T extends Comparable<T>> void bubblecheckswap(T[] A) {
  int n = A.length - 1;
  while (n > 0) {
    int newn = 0;
    for (int i = 0; i < n; i++) {
      /* if this pair is out of order */
      if (A[i].compareTo(A[i+1]) > 0) {
        swap(A, i, i+1);
        newn = i;
      }
    }
    n = newn;
  }
}
				`}</CodePre></li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li><b>Shellsort:</b><SubList>
				<li>It is also sometimes called the <b>diminishing increment</b> sort.</li>
				<li>Shellsort breaks the array of elements into "virtual" sublists. Each sublist is sorted using an insertion sort.</li>
				<li>Shellsort breaks the list into disjoint sublists, where a sublist is defined by an "increment", \(I\). Each record in a given sublist is \(I\) positions apart.</li>
				<li><CodePre language="java">{`
static void shellsort(int[] A) {
	for (int i=A.length/2; i>2; i/=2) { // For each increment
		for (int j=0; j&lt;i; j++) {         // Sort each sublist
			inssort2(A, j, i);
		}
	}
	inssort2(A, 0, 1);     // Could call regular inssort here
}
	
/** Modified insertion sort for varying increments */
static void inssort2(int[] A, int start, int incr) {
	for (int i=start+incr; i&lt;A.length; i+=incr)
		for (int j=i; (j>=incr) && (A[j] &lt; A[j-incr]); j-=incr)
			Swap.swap(A, j, j-incr);
}
				`}</CodePre></li>
				<li>One possible implementation for Shellsort is to use increments that are all powers of two. We start by picking as \(I\) the largest power of two less than \(n\).</li>
				<li>This will generate \(I\) sublists of 2 records each. If there were 16 records in the array indexed from 0 to 15, the first sublist would be the records in positions 0 and 8, the second is in positions 1 and 9, and so on.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/37.PNG"} style={{width: "80%"}}/>
					<figcaption>Here, the increment is 8, so there are 8 sublists of size 2.</figcaption>
				</figure></li>
				<li>At the end of the first pass, the resulting array is "a little better sorted".</li>
				<li>The second pass of Shellsort looks at fewer, bigger sublists. In our example, the second pass will have an increment of size 4.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/38.PNG"} style={{width: "80%"}}/>
					<figcaption>The second pass sorts 4 sublists of size 4 and increment 4.</figcaption>
				</figure></li>
				<li>At the end of processing sublists with increment 4, the array is "even more sorted".</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_pics/39.PNG"} style={{width: "80%"}}/>
					<figcaption>The third pass sorts 2 sublists of size 8 and increment 2. The fourth pass sorts 1 list of size 16 and increment 1 (a regular insertion sort).</figcaption>
				</figure></li>
				<li>Shellsort's final pass will always use an increment of 1, but the list is far closer to sorted than it was at the start, so this final call to insertion sort runs far faster than if we had run insertion sort on the original array.</li>
				<li>Average-cast performance is \(\Theta(n^{"{1.5}"})\).</li>
			</SubList></li>
			<li><b>Mergesort:</b><SubList>
				<li>A natural approach to problem solving is divide and conquer. One way to do this would be to split the list in half, sort the halves, and then merge the sorted halves together. This is the idea behind <b>Mergesort</b>.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/40.PNG"} style={{width: "55%"}}/></li>
				<li>A pseudocode sketch of Mergesort is as follows:</li>
				<li><CodePre language="plaintext">{`
List mergesort(List inlist) {
	if (inlist.length() &lt;= 1) return inlist;;
	List L1 = half of the items from inlist;
	List L2 = other half of the items from inlist;
	return merge(mergesort(L1), mergesort(L2));
}
				`}</CodePre></li>
				<li>The <code>merge</code> function starts by examining the first record of each sublist and picks the smaller value as the smallest record overall. This smaller value is removed from its sublist and placed into the output list.</li>
				<li>Here is pseudocode for merge on lists:</li>
				<li><CodePre language="plaintext">{`
List merge(List L1, List L2) {
  List answer = new List();
  while (L1 != NULL || L2 != NULL) {
    if (L1 == NULL) { // Done L1
      answer.append(L2);
      L2 = NULL;
    }
    else if (L2 == NULL) { // Done L2
      answer.append(L1);
      L1 = NULL;
    }
    else if (L1.value() <= L2.value()) {
      answer.append(L1.value());
      L1 = L1.next();
    }
    else {
      answer.append(L2.value());
      L2 = L2.next();
    }
  }
  return answer;
}       
				`}</CodePre></li>
				<li>Note that this approach requires twice the amount of space as any of the sorting methods presented so far, which is a serious disadvantage for Mergesort.</li>
			</SubList></li>
			<li>Implementing mergesort:<SubList>
				<li>Mergesort is recursively called until subarrays of size 1 have been created, requiring \(\log n\) levels of recursion.</li>
				<li>These subarrays are merged into subarrays of size 2, which are in turn merged into subarrays of size 4, and so on. We need to avoid having each merge operation require a new array.</li>
				<li>With some difficulty, an algorithm can be devised that alternates between two arrays. A much simpler approach is to copy the sorted sublists to the auxiliary array first, and then merge them back to the original array.</li>
				<li><CodePre language="java">{`
static void mergesort(Comparable[] A, Comparable[] temp, int left, int right) {
  if (left == right) { return; }       // List has one record
  int mid = (left+right)/2;          // Select midpoint
  mergesort(A, temp, left, mid);     // Mergesort first half
  mergesort(A, temp, mid+1, right);  // Mergesort second half
  for (int i=left; i<=right; i++) {    // Copy subarray to temp
    temp[i] = A[i];
  }
  // Do the merge operation back to A
  int i1 = left;
  int i2 = mid + 1;
  for (int curr = left; curr <= right; curr++) {
    if (i1 == mid+1) {                 // Left sublist exhausted
      A[curr] = temp[i2++];
    }
    else if (i2 > right) {             // Right sublist exhausted
      A[curr] = temp[i1++];
    }
    else if (temp[i1].compareTo(temp[i2]) <= 0) {  // Get smaller value
      A[curr] = temp[i1++];
    }
    else{
      A[curr] = temp[i2++];
    }
  }
}
				`}</CodePre></li>
				<li>An optimized Mergesort reverses the order of the second subarray during the initial copy. Now the current positions of the two subarrays work inwards from the ends, allowing the end of each subarray to act as a sentinel for the other.</li>
				<li><CodePre language="java">{`
static void mergesortOpt(Comparable[] A, Comparable[] temp, int left, int right) {
	int i, j, k, mid = (left+right)/2;  // Select the midpoint
	if (left == right) { return; }          // List has one record
	if ((mid-left) >= THRESHOLD) { mergesortOpt(A, temp, left, mid); }
	else { inssort(A, left, mid); }
	if ((right-mid) > THRESHOLD) { mergesortOpt(A, temp, mid+1, right); }
	else { inssort(A, mid+1, right); }
	// Do the merge operation.  First, copy 2 halves to temp.
	for (i=left; i&lt;=mid; i++) { temp[i] = A[i]; }
	for (j=right; j>mid; j--) { temp[i++] = A[j]; }
	// Merge sublists back to array
	for (i=left,j=right,k=left; k&lt;=right; k++) {
		if (temp[i].compareTo(temp[j]) &lt;= 0) { A[k] = temp[i++]; }
		else { 
		A[k] = temp[j--];
		}
	}
}               
				`}</CodePre></li>
				<li>This version also has a second optimization: It uses insertion sort to sort small subarrays whenever the size of the array is smaller than a value defined by <code>THRESHOLD</code>.</li>
				<li>The worst case time is \(\Theta(n \log n)\).</li>
				<li>When all record values are equal, then the running time is \(\Theta(n \log n)\).</li>
			</SubList></li>
			<li>The practicality of using a Binary Search Tree for sorting:<SubList>
				<li>You could insert all of the values to be sorted into the BST one by one, then traverse the completed tree using an inorder traversal.	The output would form a sorted list. </li>
				<li>This approach has a number of drawbacks, including the extra space required by BST pointers and the amount of time required to insert nodes into the tree.</li>
				<li>The left subtree contains those values in the list less than the root value
					while the right subtree contains those values in the list greater than or equal to the
					root value. Thus, the BST implicitly implements a "divide and conquer" approach
					to sorting the left and right subtrees. Quicksort implements this concept in a much
					more efficient way.</li>
			</SubList></li>
			<li><b>Quicksort:</b><SubList>
				<li><b>Quicksort</b>, when properly implemented, is the fastest known general-purpose in-memory sorting algorithm in the average case.</li>
				<li>Quicksort is hampered by exceedingly poor worst-case performance, thus making it inappropriate for certain applications.</li>
				<li>Quicksort first selects a value called the <b>pivot</b>. This is conceptually like the root node's value in the BST.</li>
				<li>Assume that the input array contains \(k\) values less than the pivot. The records are then rearranged in such a way that the \(k\) values less than the pivot are placed in the first, or leftmost, \(k\) positions in the array, and the values greater than or equal to the pivot are placed in the last, or rightmost, \(n-k\) positions. This is called a <b>partition</b> of the array.</li>
				<li><CodePre language="java">{`
static void quicksort(Comparable[] A, int i, int j) { // Quicksort
  int pivotindex = findpivot(A, i, j);  // Pick a pivot
  Swap.swap(A, pivotindex, j);               // Stick pivot at end
  // k will be the first position in the right subarray
  int k = partition(A, i, j-1, A[j]);
  Swap.swap(A, k, j);                        // Put pivot in place
  if ((k-i) > 1) { quicksort(A, i, k-1); }  // Sort left partition
  if ((j-k) > 1) { quicksort(A, k+1, j); }  // Sort right partition
}          
				`}</CodePre></li>
				<li>Parameters <code>i</code> and <code>j</code> define the left and right indices, respectively, for the subarray being sorted. The initial call to <code>quicksort</code> would be <code>quicksort(array, 0, n-1)</code>.</li>
				<li>Function <code>partition</code> will move records to the appropriate partition and then return <code>k</code>.</li>
				<li>Note that the pivot value is initially placed at the end of the array (position <code>j</code>). Thus, partition must not affect the value of array position \(j\).</li>
				<li>Selecting a pivot can be done in many ways. Here is a simple <code>findpivot</code> function:</li>
				<li><CodePre language="java">{`
static int findpivot(Comparable[] A, int i, int j)
	{ return (i+j)/2; }
				`}</CodePre></li>
				<li>We now turn to function <code>partition</code>. Because we do not know in advance how many keys are less than the pivot, we use a clever algorithm that moves indices inwards from the ends of the subarray, swapping values as necessary until the two indices meet.</li>
				<li><CodePre language="java">{`
static int partition(Comparable[] A, int left, int right, Comparable pivot) {
  while (left <= right) { // Move bounds inward until they meet
    while (A[left].compareTo(pivot) < 0) { left++; }
    while ((right >= left) && (A[right].compareTo(pivot) >= 0)) { right--; }
    if (right > left) { Swap.swap(A, left, right); } // Swap out-of-place values
  }
  return left;            // Return first position in right partition
}                     
				`}</CodePre></li>
				<li>Note the check that <code>right &gt;= left</code> in the second inner <code>while</code> loop. This ensures that <code>right</code> does not run off the low end of the partition in the case where the pivot is the least value in that partition.</li>
				<li>Function <code>partition</code> returns the first index of the right partition (the place where <code>left</code> ends at) so that the subarray bound for the recursive calls to qsort can be determined.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/41.PNG"} style={{width: "60%"}}/></li>
				<li>In the worst case, Quicksort is \(\Theta(n^2)\). If the pivot values are selected at random, then this is extremely unlikely to happen. When selecting the middle position of the current subarray, it is still unlikely to happen.</li>
				<li>Quicksort's best case occurs when <code>findpivot</code> always breaks the array into two equal halves. In the best case, the result will be \(\log n\) levels of partitions. At each level, all partition steps for that level do a total of \(n\) work, for an overall cost of \(\Theta(n \log n)\) work when Quicksort finds perfect pivots.</li>
				<li>Quicksort has average-case cost \(\Theta(n \log n)\).</li>
			</SubList></li>
			<li><b>Heapsort:</b><SubList>
				<li><b>Heapsort</b> is based on the heap data structure. It works by building a max heap, and then repeatedly removing the item with maximum key value (moving it to the end of the heap) until all elements have been removed (and replaced at their proper location in the array).</li>
				<li>The complete binary tree is balanced, its array representation is space efficient, and we can load all values into the tree at once, taking advantage of the efficient <code>buildheap</code> function.</li>
				<li>The asymptotic performance of Heapsort is \(\Theta(n \log n)\) in the best, average, and worst cases.</li>
				<li><CodePre language="java">{`
static void heapsort(Comparable[] A) {
	// The heap constructor invokes the buildheap method
	MaxHeap H = new MaxHeap(A, A.length, A.length);
	for (int i=0; i&lt;A.length; i++) {  // Now sort
		H.removemax(); // Removemax places max at end of heap
	}
}
				`}</CodePre></li>
				<li>Heapsort has one special advantage over the other sorts studied so far. Building the heap is relatively cheap, requiring \(\Theta(n)\) time.</li>
				<li>Removing the maximum-valued record from the heap requires \(\Theta(\log n)\) time in the worst case. Thus, if we wish to find the \(k\) records with the largest key values in an array, we can do so in time \(\Theta(n+k \log n)\).</li>
				<li>A disadvantage is that it is not stable (i.e., records with equal keys might not remain in the same order after sorting).</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/42.PNG"} style={{width: "70%"}}/></li>
			</SubList></li>
			<li><b>Binsort:</b><SubList>
				<li>A sort that works by taking each record and placing it into a bin based on its value. The bins are then gathered up in order to sort the list.</li>
				<li><u>The most basic example:</u> where key values are used to assign records to bins. It always taking \(\Theta(n)\) time regardless of the initial ordering of the keys. The problem is that this algorithm has limited use because it works only for a permutation of the numbers from 0 to \(n-1\).</li>
				<li>The simplest extension is to allow for duplicate values among the keys. This can be done by turning array slots into arbitrary-length bins by turning array \(B\) into an array of linked lists.</li>
				<li>A second extension allows for a key range greater than \(n\). For example, a set of \(n\) records might have keys in the range \(1\) to \(2n\). The only requirement is that each possible key value have a corresponding bin in <code>B</code>.</li>
				<li>We assume that we know that the range of possible keys is between 0 and <code>MaxKeyValue</code>.</li>
				<li><CodePre language="java">{`
void binsort(Integer[] A) {
  List[] B = new LinkedList[MaxKeyValue+1];
  Object item;
  for (int i=0; i<=MaxKeyValue; i++) {
    B[i] = new LinkedList();
  }
  for (int i=0; i<A.length; i++) { B[A[i]].append(new Integer(A[i])); }
  int pos = 0;
  for (int i=0; i<=MaxKeyValue; i++) {
    for (B[i].moveToStart(); (item = B[i].getValue()) != null; B[i].next()) {
      A[pos++] = (Integer)item;
    }
  }
}
				`}</CodePre></li>
				<li>This version of Binsort can sort any collection of records whose key values fall in the range from 0 to <code>MaxKeyValue</code>.</li>
				<li>The total work required is simply that needed to place each record into the appropriate bin and then take all of the records out of the bins. Thus, we need to process each record twice, for \(\Theta(n)\) work.</li>
				<li>Taking all of the records out of the bins requires Binsort to look at every bin to see if it contains a record. Thus, the algorithm must process <code>MaxKeyValue</code> bins, regardless of how many of them actually hold records.</li>
				<li>Suppose that <code>MaxKeyValue</code> \(=n^2\). In this case, the total amount of work done will be \(\Theta(n+n^2)=\Theta(n^2)\). This results in a poor sorting algorithm.</li>
				<li>A further generalization to Binsort would yield a <b>bucket sort</b>. Here, each bin (now called a <b>bucket</b>) is associated with a range of key values (rather than just one key).</li>
				<li>A bucket sort assigns records to buckets and then relies on some other sorting technique to sort the records within each bucket.</li>
			</SubList></li>
			<li><b>Radix Sort:</b><SubList>
				<li>Consider a sequence of records with keys in the range 0 to 99. If we have ten bins available, we can first assign records to bins by taking their key value modulo 10. Thus, every key will be assigned to the bin matching its rightmost decimal digit.</li>
				<li>We can then take these records from the bins <b>in order</b>, and reassign them to the bins on the basis of their leftmost (10's place) digit.</li>
				<li>This is an example of a <b>Radix Sort</b>, so called because the bin computations are based on the <b>radix</b> or the <b>base</b> of the key values.</li>
				<li>This sorting algorithm can be extended to any number of keys in any key range. We simply assign records to bins based on the keys' digit values working from the rightmost digit to the leftmost. If there are \(k\) digits, then this requires that we assign keys to bins \(k\) times.</li>
				<li>We would prefer to sort an array of values and avoid processing linked lists. If we knew how many values would be in each bin, then an auxiliary array of size \(r\) can be used to define these lengths and guide us to were each one starts in the output array.</li>
				<li>For example, if during the first pass the 0 bin will receive three records and the 1 bin will receive five records, then we could simply reserve the first three array positions for the 0 bin and the next five array positions for the 1 bin.</li>
				<li><CodePre language="java">{`
static void radix(Integer[] A, int k, int r) {
  Integer[] B = new Integer[A.length];
  int[] count = new int[r];     // Count[i] stores number of records with digit value i
  int i, j, rtok;

  for (i=0, rtok=1; i<k; i++, rtok*=r) { // For k digits
    for (j=0; j<r; j++) { count[j] = 0; }    // Initialize count

    // Count the number of records for each bin on this pass
    for (j=0; j<A.length; j++) { count[(A[j]/rtok)%r]++; }

    // count[j] will be index in B for last slot of bin j.
    // First, reduce count[0] because indexing starts at 0, not 1
    count[0] = count[0] - 1;
    for (j=1; j<r; j++) { count[j] = count[j-1] + count[j]; }

    // Put records into bins, working from bottom of bin
    // Since bins fill from bottom, j counts downwards
    for (j=A.length-1; j>=0; j--) {
      B[count[(A[j]/rtok)%r]] = A[j];
      count[(A[j]/rtok)%r] = count[(A[j]/rtok)%r] - 1;
    }
    for (j=0; j<A.length; j++) { A[j] = B[j]; } // Copy B back
  }
}
				`}</CodePre></li>
				<li>At the end of each pass, the records are copied back to the original array.</li>
				<li>The first inner <code>for</code> loop initializes array <code>count</code>. The second loop counts the number of records to be assigned to each bin. The third loop sets the values in count to their proper indices within array \(B\). Note that the index stored in <code>count[j]</code> is the last index for bin \(j\).</li>
				<li>The fourth loop assigns the records to the bins (within array \(B\)). The final loop simply copies the records back to array A to be ready for the next pass.</li>
				<li>Variable <code>rtok</code> stores \(r^i\) for use in bin computation on the \(i\)'th iteration. </li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_pics/43.PNG"} style={{width: "70%"}}/></li>
				<li>At the end, since the outer loop is executed \(k\) times and some of the inner loops execute \(n\) times, while others are executed \(r\) times, we have the total amount of work required is \(\Theta((n+r)k)\), we can say \(\Theta(nk)\) since \(r\) is rather small and can be treated as a constant.</li>
				<li>In the case of unique key values, we have \(k \ge \log_r n\), and thus the total running time of radixsort is \(\Omega(n \log n)\).</li>
			</SubList></li>
			<li>Lower bounds for sorting:<SubList>
				<li>The sorting problem cannot be solved by any algorithm in less than \(\Omega(n)\) time because it takes at least \(n\) steps to read and write the \(n\) values to be sorted.</li>
				<li>Based on our current knowledge of sorting algorithms and the size of the input, we know that the problem of sorting is bounded by \(\Omega(n)\) and \(O(n \log n)\).</li>
				<li>Comparison-based decisions can be modeled as the branches in a tree. This means that any sorting algorithm based on comparisons between records can be viewed as a binary tree whose nodes correspond to the comparisons, and whose branches correspond to the possible outcomes. Next, the minimum number of leaves in the resulting tree is shown to be the factorial of \(n\). Finally, the minimum depth of a tree with \(n!\) leaves is shown to be in \(\Omega(n \log n)\).</li>
				<li>No sorting algorithm based on key comparisons can possibly be faster than \(\Omega(n \log n)\) in the worst case.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="hashing">Hashing</h2>
<div className="content" data-source="20">
	<div style={{width:"49%", marginLeft:"0.5%", float: "left"}}>
		<ul>
			<li><u>Definitions:</u><SubList>
				<li><b>Hashing</b> is a method for storing and retrieving records from a database.</li>
				<li>It lets you insert, delete, and search for records based on a search key value. When properly implemented, these operations can be performed in constant time.</li>
				<li>A properly tuned hash system typically looks at only one or two records for each search, insert, or delete operation.</li>
				<li>A hash system stores records in an array called a <b>hash table</b> (or <code>HT</code> in code).</li>
				<li>A position in the hash table is also known as a <b>slot</b>.</li>
			</SubList></li>
			<li>Basic understanding of how it works:<SubList>
				<li>Hashing works by performing a computation on a search key \(K\) in a way that is intended to identify the position in <code>HT</code> that contains the record with key \(K\).</li>
				<li>The function that does this calculation is called the <b>hash function</b>. Since hashing schemes place records in the table in whatever order satisfies the needs of the address calculation, records are not ordered by value.</li>
				<li>The number of slots in hash table <code>HT</code> will be denoted by the variable \(M\) with slots numbered from \(0\) to \(M-1\).</li>
				<li>The goal for a hashing system is to arrange things such that, for any key value \(K\) and some hash function \(h\), \(i=h(K)\) is a slot in the table such that \(0 \le i \lt M\), and we have the key of the record stored at <code>HT[i]</code> equal to \(K\).</li>
				<li>Hashing is not good for applications where multiple records with the same key value are permitted and also not a good method for answering range searches.</li>
				<li>Hashing is most appropriate for answering the question: <i>"What record, if any, has key value \(K\)?"</i>.</li>
			</SubList></li>
			<li>In most applications, there are many more values in the key range than there are slots in the hash table:<SubList>
				<li>Suppose the key can take any value in the range 0 to 65,535, and that we expect to store approximately 1000 records at any given time.</li>
				<li>It is impractical in this situation to use a hash table with 65,536 slots, because then the vast majority of the slots would be left empty. We must devise a hash function that allows us to store the records in a much smaller table.</li>
				<li>Because the key range is larger than the size of the table, at least some of the slots must be mapped to from multiple key values.</li>
				<li>Given a hash function \(h\) and two keys \(k_1\) and \(k_2\), if \(h(k_1)=β=h(k_2)\) where \(β\) is a slot in the table, then we say that \(k_1\) and \(k_2\) have a <b>collision</b> at slot \(β\) under hash function \(h\).</li>
			</SubList></li>
			<li>Finding a record with key value \(K\) in a database organized by hashing follows a two-step procedure:<SubList numbered={true}>
				<li>Compute the table location \(h(K)\).</li>
				<li>Starting with slot \(h(K)\), locate the record containing key \(K\) using (if necessary) a <b>collision resolution policy</b>.</li>
			</SubList></li>
			<li>Hash function principles:<SubList>
				<li>A database organized by hashing must store records in a hash table that is not so large that it wastes space. To balance time and space efficiency, this means that the hash table should be around half full.</li>
				<li>We would like to pick a hash function that maps keys to slots in a way that makes each slot in the hash table have equal probablility of being filled for the actual set keys being used.</li>
				<li>How well any particular hash function does depends on the actual distribution of the keys used within the allowable key range. In many applications the incoming records are highly clustered or otherwise poorly distributed.</li>
				<li>If we know nothing about the distribution of the incoming keys, we wish to select a hash function that evenly distributes the key range across the hash table, while avoiding obvious opportunities for clustering such as hash functions that are sensitive to the high- or low-order bits of the key value.</li>
				<li>If we know something about the distribution of the incoming keys, we should use a distribution-dependent hash function that avoids assigning clusters of related key values to the same hash table slot.</li>
			</SubList></li>
		</ul>
		<h3>Sample Hash Functions</h3>
		<ul>
			<li><b>Simple Mod Function:</b><SubList>
				<li>Consider the following hash function used to hash integers to a table of sixteen slots:</li>
				<li><CodePre language="java">{`
int h(int x) {
	return x % 16;
}
				`}</CodePre></li>
				<li>Recall that the values 0 to 15 can be represented with four bits (i.e., 0000 to 1111). The value returned by this hash function depends solely on the least significant four bits of the key.</li>
				<li>This example shows that the size of the table \(M\) can have a big effect on the performance of a hash system because the table size is typically used as the modulus to ensure that the hash function produces a number in the range \(0\) to \(M-1\).</li>
			</SubList></li>
			<li><b>Binning:</b><SubList>
				<li>Say we are given keys in the range 0 to 999, and have a hash table of size 10. In this case, a possible hash function might simply divide the key value by 100 so hash function "bins" the first 100 keys to the first slot, the next 100 keys to the second slot, and so on.</li>
				<li>In general with binning we store the record with key value \(i\) at array position \(\frac{"{i}{X}"}\) for some value \(X\) (using integer division). A problem with Binning is that we have to know the key range so that we can figure out what value to use for \(X\).</li>
				<li>If we pick too big a value for the key range and the actual key values are all relatively small, then most records will hash to slot 0.</li>
				<li>We could take the result of any binning computation and then mod by the table size to be safe. So if we have keys that are bigger than 999 when dividing by 100, we can still make sure that the result is in the range 0 to 9 with a mod by 10 step at the end.</li>
				<li>The mod function, for a power of two, looks at the low-order bits, while binning looks at the high-order bits.</li>
			</SubList></li>
			<li><b>The Mid-Square Method:</b><SubList>
				<li><b>Mid-square method:</b> The key value is squared, and some number of bits from the middle of the resulting value are extracted as the hash code.</li>
				<li>The mid-square method squares the key value, and then takes out the middle \(r\) bits of the result, giving a value in the range \(0\) to \(2^{"{r-1}"}\).</li>
				<li>Consider records whose keys are 4-digit numbers in base 10. The goal is to hash these key values to a table of size 100 (i.e., a range of 0 to 99). This range is equivalent to two digits in base 10. That is, \(r=2\).</li>
				<li>If the input is the number 4567, squaring yields an 8-digit number, 20857489. The middle two digits of this result are 57. All digits of the original key value (equivalently, all bits when the number is viewed in binary) contribute to the middle two digits of the squared value.</li>
				<li>Thus, the result is not dominated by the distribution of the bottom digit or the top digit of the original key value.</li>
				<li>Of course, if the key values all tend to be small numbers, then their squares will only affect the low-order digits of the hash value.</li>
			</SubList></li>
			<li>A simple hash function for strings:<SubList>
				<li>We start with a simple summation function:</li>
				<li><CodePre language="java">{`
int sascii(String x, int M) {
	char ch[];
	ch = x.toCharArray();

	int i, sum;
	for (sum=0, i=0; i &lt; x.length(); i++) {
		sum += ch[i];
	}
	return sum % M;
}
				`}</CodePre></li>
				<li>If the hash table size \(M\) is small compared to the resulting summations, then this hash function should do a good job of distributing strings evenly among the hash table slots, because it gives equal weight to all characters in the string.</li>
				<li>This is an example of the <b>folding method</b>, a method that breaks the string into pieces, converts the letter(s) to an integer value, and summing up the pieces.</li>
				<li>If the sum is not sufficiently large, then the modulus operator will yield a poor distribution:<SubList>
					<li>The ASCII value for 'A' is 65 and 'Z' is 90, <code>sum</code> will always be in the range 650 to 900 for a string of ten upper case letters.</li>
					<li>For a hash table of size 100 or less, a reasonable distribution results.</li>
					<li>For a hash table of size 1000, the distribution is terrible because only slots 650 to 900 can possibly be the home slot for some key value, and the values are not evenly distributed even within those slots.</li>
				</SubList></li>
			</SubList></li>
			<li><b>String Folding:</b><SubList>
				<li>This function processes the string four bytes at a time, and interprets each of the four-byte chunks as a single long integer value:</li>
				<li><CodePre language="java">{`
// Use folding on a string, summed 4 bytes at a time
int sfold(String s, int M) {
	long sum = 0, mul = 1;
	for (int i = 0; i &lt; s.length(); i++) {
		mul = (i % 4 == 0) ? 1 : mul * 256;
		sum += s.charAt(i) * mul;
	}
	//"aaaa" in integer form:
	//97 + (97*256) + (97*256*256) + (97*256*256*256)
	return (int)(Math.abs(sum) % M);
}
				`}</CodePre></li>
				<li>The integer values for the four-byte chunks are added together. In the end, the resulting sum is converted to the range \(0\) to \(M-1\) using the modulus operator.</li>
				<li>If the string "aaaabbbb" is passed to <code>sfold</code>, then the first four bytes ("aaaa") will be interpreted as the integer value 1,633,771,873, and the next four bytes ("bbbb") will be interpreted as the integer value 1,650,614,882.</li>
				<li>Their sum is 3,284,386,755 (when treated as an unsigned integer). If the table size is 101 then the modulus function will cause this key to hash to slot 75 in the table.</li>
				<li>For any sufficiently long string, the sum for the integer quantities will typically cause a 32-bit integer to overflow (thus losing some of the high-order bits) because the resulting values are so large. But this causes no problems when the goal is to compute a hash function.</li>
				<li>The reason that hashing by summing the integer representation of four letters at a time is superior to summing one letter at a time is because the resulting values being summed have a bigger range. This still only works well for strings long enough (say at least 7-12 letters), but the original method would not work well for short strings either.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Collision Resolution Techniques</h3>
		<ul>
			<li>Collision resolution techniques can be broken into two classes:<SubList>
				<li>One is when collisions are stored outside the table (<b>open hashing</b> or <b>separate chaining</b>).</li>
				<li>The other is when collisions result in storing one of the records at another slot in the table (<b>closed hashing</b> or <b>open addressing</b>).</li>
				<li><b>Open hashing:</b><SubList>
					<li>The simplest form of open hashing defines each slot in the hash table to be the head of a linked list.</li>
					<li>All records that hash to a particular slot are placed on that slot's linked list.</li>
					<li>Ordering the list by key value provides an advantage in the case of an unsuccessful search, because we know to stop searching the list once we encounter a key that is greater than the one being searched for.</li>
					<li>Given a table of size \(M\) storing \(N\) records, the hash function will (ideally) spread the records evenly among the \(M\) positions in the table, yielding on average \(N/M\) records for each list.</li>
					<li>The average cost for hashing should be \(\Theta(1)\). However, if clustering causes many records to hash to only a few of the slots, then the cost to access a record will be much higher because many elements on the linked list must be searched.</li>
					<li>Open hashing is most appropriate when the hash table is kept in main memory, with the lists implemented by a standard in-memory linked list.</li>
					<li>Storing an open hash table on disk in an efficient way is difficult, because members of a given linked list might be stored on different disk blocks. This would result in multiple disk accesses when searching for a particular key value, which defeats the purpose of using hashing.</li>
				</SubList></li>
				<li><b>Bucket Hashing:</b><SubList>
					<li>One implementation for closed hashing groups hash table slots into <b>buckets</b>. The \(M\) slots of the hash table are divided into \(B\) buckets, with each bucket consisting of \(M/B\) slots.</li>
					<li>The hash function assigns each record to the first slot within one of the buckets. If this slot is already occupied, then the bucket slots are searched sequentially until an open slot is found.</li>
					<li>If a bucket is entirely full, then the record is stored in an <b>overflow bucket</b> of infinite capacity at the end of the table. All buckets share the same overflow bucket.</li>
					<li>A good implementation will use a hash function that distributes the records evenly among the buckets so that as few records as possible go into the overflow bucket.</li>
					<li>A simple variation on bucket hashing is to hash a key value to some slot in the hash table as though bucketing were not being used. If the home position is full, then we search through the rest of the bucket to find an empty slot. If all slots in this bucket are full, then the record is assigned to the overflow bucket.</li>
					<li>The advantage of this approach is that initial collisions are reduced, because any slot (in the bucket) can be a home position rather than just the first slot in the bucket.</li>
				</SubList></li>
			</SubList></li>
			<li>Collision resoution policy:<SubList>
				<li>The most commonly used form of hashing: closed hashing with no bucketing, and a collision resolution policy that can potentially use any slot in the hash table.</li>
				<li>We can view any <b>collision resolution</b> method as generating a sequence of hash table slots that can potentially hold the record. The first slot in the sequence will be the home position for the key.</li>
				<li>If the home position is occupied, then the <b>collision resolution policy</b> goes to the next slot in the sequence. If this is occupied as well, then another slot must be found, and so on.</li>
				<li>This sequence of slots is known as the <b>probe sequence</b>, and it is generated by some <b>probe function</b>. Insertion works as follows:</li>
				<li><CodePre language="java">{`
// Insert e into hash table HT
void hashInsert(Key k, Elem e) {
	int home;                     // Home position for e
	int pos = home = h(k);        // Init probe sequence
	for (int i=1; EMPTYKEY != (HT[pos]).key(); i++) {
		if (k == HT[pos].key()) {
			println("Duplicates not allowed");
			return;
		}
		pos = (home + p(k, i)) % M; // probe
	}
	HT[pos] = e;
}
				`}</CodePre></li>
				<li>Method \(hashInsert\) first checks to see if the home slot for the key is empty. If the home slot is occupied, then we use the probe function \(p(k,i)\) to locate a free slot in the table.</li>
				<li>Function \(p\) has two parameters, the key \(k\) and a count \(i\) of where in the probe sequence we wish to be. That is, to get the first position in the probe sequence after the home slot for key \(K\), we call \(p(K,1)\). For the next slot in the probe sequence, call \(p(K,2)\).</li>
				<li>Both the insert and the search routines assume that at least one slot on the probe sequence of every key will be empty. Otherwise they will continue in an infinite loop on unsuccessful searches.</li>
				<li>The hash system should keep a count of the number of records stored, and refuse to insert into a table that has only one free slot.</li>
				<li><b>Simple linear probing:</b><SubList>
					<li>The simplest approach to collision resolution is simply to move down the table from the home slot until a free slot is found. This is known as <b>linear probing</b>.</li>
					<li>The probe function for simple linear probing is \(p(K,i)=i\). That is, the \(i\)th offset on the probe sequence is just \(i\), meaning that the \(i\)th step is simply to move down \(i\) slots in the table.</li>
					<li>Linear probing has the virtue that all slots in the table will be candidates for inserting a new record before the probe sequence returns to the home position.</li>
					<li>Linear probing is one of the worst collision resolution methods. The tendency of linear probing to cluster items together is known as <b>primary clustering</b>. Small clusters tend to merge into big clusters, making the problem worse.</li>
				</SubList></li>
				<li><b>Linear Probing by Steps:</b><SubList>
					<li>How can we avoid primary clustering? One possible improvement might be to use linear probing, but to skip slots by some constant \(c\) (other than 1). This would make the probe function \(p(K,i)=ci\), and so the \(i\)th slot in the probe sequence will be \((h(K)+ic) \mod M\).</li>
					<li>One quality of a good probe sequence is that it will cycle through all slots in the hash table before returning to the home position. Not all values for \(c\) will make this happen.</li>
					<li>Constant \(c\) must be relatively prime to \(M\) to generate a linear probing sequence that visits all slots in the table.</li>
					<li>Consider the situation where \(c=2\) and we wish to insert a record with key \(k_1\) such that \(h(k_1)=3\). The probe sequence for \(k_1\) is 3, 5, 7, 9, and so on. If another key \(k2\) has home position at slot 5, then its probe sequence will be 5, 7, 9, and so on. The probe sequences of \(k_1\) and \(k_2\) are linked together in a manner that contributes to clustering.</li>
					<li>In other words, linear probing with a value of \(c \gt 1\) does not solve the problem of primary clustering.</li>
				</SubList></li>
				<li><b>Pseudo-Random Probing:</b><SubList>
					<li>In <b>pseudo-random probing</b>, the \(i\)th slot in the probe sequence is \((h(K)+r_i) \mod M\) where \(r_i\) is the \(i\)th value in a random permutation of the numbers from 1 to \(M-1\).</li>
					<li>All inserts and searches must use the same sequence of random numbers. The probe function would be \(p(K,i)=\textbf{"{Permutation}"}[i]\), where \(\textbf{"{Permutation}"}\) is an array of length \(M\) that stores a value of 0 in position \(\textbf{"{Permutation}[0]"}\), and stores a random permutation of the values from 1 to \(M-1\) in slots 1 to \(M-1\).</li>
				</SubList></li>
				<li><b>Quadratic Probing:</b><SubList>
					<li>The probe function is some quadratic function \(p(K,i)=c_1i^2+c_2i+c_3\) for some choice of constants \(c_1\), \(c_2\), and \(c_3\).</li>
					<li>For many hash table sizes, this probe function will cycle through a relatively small number of slots.</li>
					<li>Fortunately, it is possible to get good results from quadratic probing at low cost. The right combination of probe function and table size will visit many slots in the table.</li>
				</SubList></li>
				<li><b>Double Hashing:</b><SubList>
					<li>If two keys hash to the same home position, however, then they will always follow the same probe sequence for every collision resolution method that we have seen so far.</li>
					<li>The probe sequences generated by pseudo-random and quadratic probing (for example) are entirely a function of the home position, not the original key value. This is because function \(p\) ignores its input parameter \(K\) for these collision resolution methods.</li>
					<li>If the hash function generates a cluster at a particular home position, then the cluster remains under pseudo-random and quadratic probing. This problem is called <b>secondary clustering</b>.</li>
					<li>To avoid secondary clustering, we need to have the probe sequence make use of the original key value. A simple technique for doing this is to return to linear probing by a constant step size for the probe function, but to have that constant be determined by a second hash function, \(h_2\). Thus, the probe sequence would be of the form \(p(K,i)=i \times h_2(K)\). This method is called <b>double hashing</b>.</li>
					<li>The value returned by \(h_2\) must never be zero (or \(M\)) because that will immediately lead to an infinite loop as the probe sequence makes no progress.</li>
					<li>A good implementation should ensure that all of the probe sequence constants are relatively prime to the table size \(M\).</li>
				</SubList></li>
			</SubList></li>
			<li>Analysis of Closed Hashing:<SubList>
				<li>Define the <b>load factor</b> for the table as \(α=N/M\), where \(N\) is the number of records currently in the table.</li>
				<li>An estimate of the expected cost for an insertion (or an unsuccessful search) can be derived analytically as a function of \(α\) in the case where we assume that the probe sequence follows a random permutation of the slots in the hash table.</li>
				<li>Assuming that every slot in the table has equal probability of being the home slot for the next record, the probability of finding the home position occupied is \(α\).</li>
				<li>The probability of finding both the home position occupied and the next slot on the probe sequence occupied is \(\frac{"{N}"}{"{M}"} \times \frac{"{N-1}"}{"{M-1}"}\).</li>
				<li>The probability of \(i\) collisions is \(\frac{"{N}"}{"{M}"} \times \frac{"{N-1}"}{"{M-1}"} \times \frac{"{N-i+1}"}{"{M-i+1}"}\). If \(N\) and \(M\) are large, then this is approximately \((N/M)^i\).</li>
				<li>The expected number of probes:</li>
				<MathStuff>$${`
					1+\\sum^\\infty_{i=1} \\left( \\frac{N}{M} \\right)^i = \\frac{1}{1-\\alpha}
				`}$$</MathStuff>
				<li>The cost for a successful search (or a deletion) has the same cost as originally inserting that record.</li>
				<li>We can derive an estimate of this cost (essentially an average over all the insertion costs) by integrating from 0 to the current value of α, yielding a result of:</li>
				<MathStuff>{`\\frac{1}{α} \\ \\log_e \\left( \\frac{1}{1−α} \\right)`}</MathStuff>
			</SubList></li>
		</ul>
		<h3>Deletion</h3>
		<ul>
			<li>When deleting records from a hash table, there are two important considerations:<SubList>
				<li>Deleting a record must not hinder later searches. In other words, the search process must still pass through the newly emptied slot to reach records whose probe sequence passed through this slot.</li>
				<li>We do not want to make positions in the hash table unusable because of deletion. The freed slot should be available to a future insertion.</li>
			</SubList></li>
			<li>Both of these problems can be resolved by placing a special mark in place of the deleted record, called a <b>tombstone</b>:<SubList>
				<li>The <b>tombstone</b> indicates that a record once occupied the slot but does so no longer.</li>
				<li>If a tombstone is encountered when searching along a probe sequence, the search procedure continues with the search.</li>
				<li>When a tombstone is encountered during insertion, that slot can be used to store the new record. However, to avoid inserting duplicate keys, it will still be necessary for the search procedure to follow the probe sequence until a truly empty position has been found, simply to verify that a duplicate is not in the table.</li>
			</SubList></li>
			<li>After a series of intermixed insertion and deletion operations, some slots will contain tombstones. This will tend to lengthen the average distance from a record's home position to the record. Two possible solutions are:<SubList>
				<li>Do a local reorganization upon deletion to try to shorten the average path length.</li>
				<li>Periodically rehash the table by reinserting all records into a new hash table. Not only will this remove the tombstones, but it also provides an opportunity to place the most frequently accessed records into their home positions.</li>
			</SubList></li>
		</ul>
	</div>
</div>

</>