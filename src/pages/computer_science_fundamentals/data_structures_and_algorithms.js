import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { CodePre } from "../../articleRelatedStuff/Code";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export const title = "Data Structures And Algorithms Notes";
export const sourcesColor = {19: null, 20: null, 4: "#4f94ac", 21: "rgb(204, 119, 153)", 22: "rgb(0, 129, 0)"};
export const sourcesOrder = [19, 20, 4, 21, 22]

export const content = <>
<h1>Data Structures And Algorithms Notes</h1>
<ol id="additionalResources">
	<li><a href='https://coursera.org/share/d8124fd791622db91dba4e4bd9c612fd'>Algorithms, Part 1</a> course on coursera</li>
</ol>

<h2 id="intro">Introduction</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul>
			<li>A <b>type</b> is a collection of values. For example, the Boolean type consists of the values <code>true</code> and <code>false</code>.</li>
			<li>A <b>data item</b> is a piece of information or a record whose value is drawn from a type. A data item is said to be a member of a type.</li>
			<li>A <b>data type</b> is a type together with a collection of operations to manipulate the type.</li>
		</ul>
		<div data-source="4">
			<ul>
				<li><b>Primitive data types</b> are a set of basic data types from which all other data types are constructed.</li>
				<li>Primitive data types in Java:<SubList>
					<li><u>Integer types with a variety of ranges:</u> <b>byte</b>, <b>short</b>, <b>int</b>, <b>long</b> and <b>char</b></li>
					<li><u>Floating-point numbers with single and double precisions:</u> <b>float</b> and <b>double</b></li>
					<li><u>True and false:</u> <b>boolean</b></li>
				</SubList></li>
				<li><a href='https://en.wikipedia.org/wiki/C_data_types'>C data types:</a> Minimally, there are four types, <b>char</b>, <b>int</b>, <b>float</b> and <b>double</b>, but the qualifiers <b>short</b>, <b>long</b>, <b>signed</b>, and <b>unsigned</b> mean that C contains numerous target-dependent integer and floating-point primitive types.</li>
				<li>A <b>composite data type</b> or <b>compound data type</b> is any data type which can be constructed in a program using the programming language's primitive data types and other composite types. It is sometimes called a <b>structure</b> or <b>aggregate type</b>. <u>Examples:</u><SubList>
					<li><b>Array:</b> a sequence of elements of the same type stored contiguously in memory.</li>
					<li>A <b>record</b> is a collection of <b>fields</b> (piece of data encapsulated within a class or object). Records are distinguished from arrays by the fact that not all of the fields must contain the same type of data.</li>
					<li><b>String:</b> a sequence of characters representing text.</li>
					<li>A <b>union</b> is a value that may have any of several representations or formats within the same position in memory</li>
				</SubList></li>
			</ul>
		</div>
		<ul>
			<li>In the most general sense, a <b>data structure</b> is any data representation and its associated operations.</li>
			<li>More commonly, people use the term "data structure" to mean an organization or structuring for a collection of data items. A sorted list of integers stored in an array is an example of such a structuring.</li>
			<li>A solution is said to be <b>efficient</b> if it solves the problem within the required resource constraints.</li>
			<li>The <b>cost</b> of a solution is the amount of resources that the solution consumes.</li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li>An <b>interface</b> is a class-like structure that only contains method signatures and fields. An interface does not contain an implementation of the methods or any data members.</li>
			<li><a href='https://www.javatpoint.com/abstract-data-type-in-data-structure'>An <b>abstract data type</b> is an abstraction of a data structure that provides only the interface to which the data structure must adhere. In other words, we can say that abstract data types are the entities that are definitions of data and operations but do not have implementation details.</a></li>
		</ul>
		<div data-source="22"><ul><li>ADTs are more abstract and theoretical, while interfaces are concrete programming constructs for defining contracts and ensuring code compatibility.</li></ul></div>
		<ul>  
			<li>A <b>data structure</b> is the implementation for an ADT. The term "data structure" often refers to data stored in a computer's main memory.</li>
			<li>Data types have both a logical and a physical form. The definition of the data type in terms of an ADT is its logical form. The implementation of the data type as a data structure is its physical form.</li>
			<li>A distinction should be made between the logical concept of a data type and its physical implementation in a computer program. As an example, the term "array" could refer either to a data type or an implementation.</li>
			<li>"Array" is commonly used in computer programming to mean a contiguous block of memory locations, where each memory location stores one fixed-length data item. By this meaning, an array is a physical data structure.</li>
			<li>However, array can also mean a logical data type composed of a (typically homogeneous) collection of data items, with each data item identified by an index number.</li>
		</ul>
	</div>
</div>

<h2 id="algorithmComplexity">Algorithm Complexity</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<div data-source="21">
		<h3>Big-O Notation</h3>
		<ul>
			<li>When we speak about a "\(O(n^2)\) algorithm", this says that our algorithm is
				approximately as fast as, or faster, an algorithm that would do a number of operations equal to the square of the size of its
				input. The "or faster" part is there because Big-O is used instead of Big-Theta.</li>
			<li>If \(f(n) = 100n^2 + 10n + 1\) and \(g(n) = n^2\), then \(f = O(g)\), and also \(f = O(n^3)\), and \(f = O(n^4)\).</li>
			<li>If \(f = O(g)\) and \(g = O(h)\), then \(f = O(h)\).</li>
			<li>We are also sometimes interested in the space complexity of our algorithm. For this we consider the number of
				bytes in memory occupied by the algorithm as a function of the size of the input, and use Big-O the same way.</li>
			<li><u>Examples:</u><SubList>
				<li>This loop's time complexity is \(O(n)\):</li>
				<li><CodePre language="c">{`
int find_max(const int *array, int len) {
	int max = INT_MIN;
	for (int i = 0; i &lt; len; i++) {
		if (max &lt; array[i]) {
			max = array[i];
		}
	}
	return max;
}
				`}</CodePre></li>
				<li>The following function checks if an array has any duplicates by taking each element, then iterating over the whole
					array to see if the element is there:</li>
				<li><CodePre language="c">{`
int contains_duplicates(const int *array, size_t len) {
	for (int i = 0; i &lt; len - 1; i++) {
		for (int j = 0; j &lt; len; j++) {
			if (i != j && array[i] == array[j]) {
			return 1;
			}
		}
	}
	return 0;
}
				`}</CodePre></li>
				<li>The inner loop performs at each iteration a number of operations that is constant with \(n\). The outer loop also does
					a few constant operations, and runs the inner loop \(n\) times. The outer loop itself is run \(n\) times. So the operations
					inside the inner loop are run \(n^2\) times. Thus, the complexity will be something like \(an^2 + bn + c\), and since the highest term is \(n^2\), the O
					notation is \(O(n^2)\).
					</li>
			</SubList></li>
		</ul></div>
		<div data-source="21">
			<h3>Big-Omega Notation</h3>
			<ul style={{paddingBottom: "1px"}}>
				<li>Let \(f(n)\) and \(g(n)\) be two functions defined on the set of the positive real numbers. We write \(f(n) = \Omega(g(n))\) if there are positive constants \(c\) and \(n_0\) such that: \(0 ≤ c g(n) ≤ f(n)\) for all \(n ≥ n_0\).</li>
				<li>For example lets we have \(f(n) = 3n^2 + 5n - 4\). Then \(f(n) = \Omega(n^2)\). It is also correct \(f(n) = \Omega(n)\), or even \(f(n) = \Omega(1)\).</li>
				<li>We should also define
					\(f(n)=\Omega(g(n))\) by saying for some constant \(c \gt 0\), \(f(n)≥ c g(n)\) for infinitely many \(n\). This gives a nice
					correspondence between upper and lower bounds:</li>
				<MathStuff>$$f(n)=\Omega(g(n)) \iff f(n) \ne O(g(n))$$</MathStuff>
			</ul>
		</div>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li>Because the most important factor affecting running time is normally size of the input, for a given input size n we often express the time \(\mathbf{"{T}"}\) to run the algorithm as a function of \(n\), written as \(\mathbf{"{T}"}(n)\). We will always assume \(\mathbf{"{T}"}(n)\) is a  non-negative value.</li>
			<li>Let us call \(c\) the amount of time required to compare two integers, \(\mathbf{"{T}"}(n)=cn\) describes the growth rate for the running time of the largestvalue sequential search algorithm.</li>
		</ul>
		<div data-source="21">
			<h3>Big-Theta Notation</h3>
			<ul>
				<li>Unlike Big-O notation, which represents only upper bound of the running time for some algorithm, Big-Theta is a
					tight bound; both upper and lower bound. Tight bound is more precise, but also more difficult to compute.</li>
				<li>We write \(f(x) = \Theta(g(x))\) as
					\(x\to \infty\) if and only if there are positive constants \(K\) and \(L\) and a real number \(x0\) such that \(K|g(x)| \le f(x) \le L|g(x)|\) for all \(x \ge x0\). The definition is equal to: \(f(x) = O(g(x))\) and \(f(x) = \Omega(g(x))\).</li>
			<li>Because \(\Theta(g(x))\) is a set, we could write \(f(x) ∈ \Theta(g(x))\) to indicate that \(f(x)\) is a member of \(\Theta(g(x))\). Instead, we
				will usually write \(f(x) = \Theta(g(x))\) to express the same notion - that's the common way.</li>
			<li>Whenever \(\Theta(g(x))\) appears in a formula, we interpret it as standing for some anonymous function that we do not care to name. For example the equation \(T(n) = T(n/2) + \Theta(n)\), means \(T(n) = T(n/2) + f(n)\) where \(f(n)\) is a
				function in the set \(\Theta(n)\).</li>
			</ul>
		</div>
		<br/>
		<ul>
			<li>Determining the execution time of a recursive subroutine:<SubList>
				<li>The recursive factorial function fact of calls itself with a value one less than its input value:</li>
				<li><CodePre language="java">{`
/** Recursively compute and return n! */
static long fact(int n) {
	// fact(20) is the largest value that fits in a long
	assert (n >= 0) && (n &lt;= 20) : "n out of range";
	if (n &lt;= 1) return 1; // Base case: return base solution
	return n * fact(n-1); // Recursive call for n > 1
}
				`}</CodePre></li>
				<li>The running time for this function can be expressed as:</li>
				<MathStuff>$${"T(n) = T(n - 1) + 1 \\text{ for } n > 1; T(1) = 0"}$$</MathStuff>
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
		if (k &lt; A[i]) r = i; // In left half
		if (k == A[i]) return i; // Found it
		if (k > A[i]) l = i; // In right half
	}
	return A.length; // Search value not in A
}
				`}</CodePre></li>
				<li>Each recursive call to binary cuts the size of the array approximately in half, so we can model the worst-case cost as follows, assuming for simplicity that n is a power of two:</li>
				<MathStuff>$${"T(n) = T(n/2) + 1 \\text{ for } n > 1; T(1) = 1"}$$</MathStuff>
				<li>If we expand the recurrence, we find that we can do so only log n times before
					we reach the base case, and each expansion adds one to the cost. Thus, the closedform solution for the recurrence is \(T(n) = log n\).</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="basicADTs">Basic ADTs</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<h3>List</h3>
		<ul>
			<li>We define a <b>list</b> to be a finite, ordered sequence of data items known as elements. "Ordered" in this definition means that each element has a position in the
				list, it doesn't mean that they are sorted by value.</li>
			<li>The ADT for a list:<SubList>
				<li><CodePre language="java">{`
/** List ADT */
public interface List&lt;E> {
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
			<li>Array-Based List Implementation:<SubList>
				<li><CodePre language="java">{`
/** Array-based list implementation */
class AList&lt;E> implements List&lt;E> {
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
		assert listSize &lt; maxSize : "List capacity exceeded";
		for (int i=listSize; i>curr; i--) // Shift elements up
		listArray[i] = listArray[i-1]; // to make room
		listArray[curr] = it;
		listSize++; // Increment list size
	}
	/** Append "it" to list */
	public void append(E it) {
		assert listSize &lt; maxSize : "List capacity exceeded";
		listArray[listSize++] = it;
	}
	/** Remove and return the current element */
	public E remove() {
		if ((curr&lt;0) || (curr>=listSize)) // No current element
		return null;
		E it = listArray[curr]; // Copy the element
		for(int i=curr; i&lt;listSize-1; i++) // Shift them down
		listArray[i] = listArray[i+1];
		listSize--; // Decrement size
		return it;
	}
	public void moveToStart() { curr = 0; } // Set to front
	public void moveToEnd() { curr = listSize; } // Set at end
	public void prev() { if (curr != 0) curr--; } // Back up
	public void next() { if (curr &lt; listSize) curr++; }
	/** @return List size */
	public int length() { return listSize; }
	/** @return Current position */
	public int currPos() { return curr; }
	/** Set current list position to "pos" */
	public void moveToPos(int pos) {
		assert (pos>=0) && (pos&lt;=listSize) : "Pos out of range";
		curr = pos;
	}
	/** @return Current element */
	public E getValue() {
		assert (curr>=0) && (curr&lt;listSize) : "No current element";
		return listArray[curr];
	}
}
				`}</CodePre></li>
				<li>Class <code>AList</code> stores the list elements in the first <code>listSize</code> contiguous array positions. Array positions correspond to list positions. In other words, the element
					at position \(i\) in the list is stored at array cell \(i\). This makes random access to any element in the list quite easy.</li>
				<li>Inserting an element at the head of an array-based list requires shifting all existing elements in the array by one position toward the tail.</li>
				<li>Inserting or removing elements at the tail takes \(\Theta(1)\) time.</li>
				<li>In the average case, insertion or removal requires moving half of the elements, which is \(\Theta(n)\).</li>
			</SubList></li>
			<li><b>Linked list</b> uses <b>dynamic memory allocation</b>, that
				is, it allocates memory for new list elements as needed.</li>
			<li>A linked list is made up of a series of objects, called the <b>nodes</b> of the list. Because a list node is a distinct object (as opposed to simply a cell in an array), it is
				good practice to make a separate list node class.</li>
			<li><b>Singly Linked list :</b><SubList>
				<li><CodePre language="java">{`
/** linked list node */
class Link&lt;E> {
	private E element; // Value for this node
	private Link&lt;E> next; // Pointer to next node in list
	// Constructors
	Link(E it, Link&lt;E> nextval)
	{ element = it; next = nextval; }
	Link(Link&lt;E> nextval) { next = nextval; }
	Link&lt;E> next() { return next; } // Return next field
	Link&lt;E> setNext(Link&lt;E> nextval) // Set next field
	{ return next = nextval; } // Return element field
	E element() { return element; } // Set element field
	E setElement(E it) { return element = it; }
}
				`}</CodePre></li>
				<li>Objects in the <code>Link</code> class
					contain an element field to store the element value, and a <code>next</code> field to store a
					pointer to the next node on the list. The list built is called a <b>singly
					linked list</b>, or a <b>one-way list</b>, because each list node has a single pointer to the next
					node on the list.</li>
				<li>The list's first node is accessed from a pointer named <code>head</code>. To speed access
					to the end of the list, and to allow the append method to be performed in constant
					time, a pointer named <code>tail</code> is also kept to the last link of the list. The position of
					the current element is indicated by another pointer, named <code>curr</code>.</li>
				<li>Because there is no simple way to compute the length of the list simply from these three
					pointers, the list length must be stored explicitly.</li>
				<li><CodePre language="java">{`
/** Linked list implementation */
class LList&lt;E> implements List&lt;E> {
	private Link&lt;E> head; // Pointer to list header
	private Link&lt;E> tail; // Pointer to last element
	protected Link&lt;E> curr; // Access to current element
	private int cnt; // Size of list
	/** Constructors */
	LList(int size) { this(); } // Constructor -- Ignore size
	LList() {
		curr = tail = head = new Link&lt;E>(null); // Create header
		cnt = 0;
	}
	/** Remove all elements */
	public void clear() {
		head.setNext(null); // Drop access to links
		curr = tail = head = new Link&lt;E>(null); // Create header
		cnt = 0;
	}
	/** Insert "it" at current position */
	public void insert(E it) {
		curr.setNext(new Link&lt;E>(it, curr.next()));
		if (tail == curr) tail = curr.next(); // New tail
		cnt++;
	}
	/** Append "it" to list */
	public void append(E it) {
		tail = tail.setNext(new Link&lt;E>(it, null));
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
		Link&lt;E> temp = head;
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
		Link&lt;E> temp = head;
		int i;
		for (i=0; curr != temp; i++)
		temp = temp.next();
		return i;
	}
	/** Move down list to "pos" position */
	public void moveToPos(int pos) {
		assert (pos>=0) && (pos&lt;=cnt) : "Position out of range";
		curr = head;
		for(int i=0; i&lt;pos; i++) curr = curr.next();
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
					<ImgComp src={require("./data_structures_and_algorithms_pics/9.PNG")} style={{width: "70%"}}/>
					<figcaption>(a) before insertion; (b) after inserting node with value 10</figcaption>
				</figure></li>
				<li>Removing a node from the linked list requires only that the appropriate pointer
					be redirected around the node to be deleted.</li>
				<li>Method <code>prev</code> takes \(\Theta(n)\) time, while <code>insert</code>, <code>remove</code> and <code>next</code> take \(\Theta(1)\) time.</li>
				<li>Using a <b>freelist</b> (<a href='https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/Freelist.html'>useful page</a>):<SubList>
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
class Link&lt;E> {
	private E element; // Value for this node
	private Link&lt;E> next; // Point to next node in list
	/** Constructors */
	Link(E it, Link&lt;E> nextval) { element = it; next = nextval; }
	Link(Link&lt;E> nextval) { next = nextval; }
	/** Get and set methods */
	Link&lt;E> next() { return next; }
	Link&lt;E> setNext(Link&lt;E> nxtval) { return next = nxtval; }
	E element() { return element; }
	E setElement(E it) { return element = it; }

	/** Extensions to support freelists */
	static Link freelist = null; // Freelist for the class
	/** @return A new link */
	static &lt;E> Link&lt;E> get(E it, Link&lt;E> nextval) {
		if (freelist == null) return new Link&lt;E>(it, nextval);
		Link&lt;E> temp = freelist; // Get from freelist
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
	Link&lt;E> tempptr = curr.next(); // Remember link
	curr.setNext(curr.next().next()); // Remove from list
	tempptr.release(); // Release link
	cnt--; // Decrement count
	return it; // Return removed
}
					`}</CodePre></li>
				</SubList></li>
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
			<li>Element Implementations:<SubList>
				<li>List users must decide whether they wish to store a copy of any given element
					on each list that contains it.</li>
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
			<li><b>Doubly Linked Lists:</b><SubList>
				<li>A <b>doubly linked list</b> allows convenient
					access from a list node to the next node and also to the preceding node on the list</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/10.PNG")} style={{width:"70%"}}/></li>
				<li> Data member <code>head</code> points to the header node, and <code>tail</code> points to
					the tailer node. The purpose of these nodes is to simplify the <code>insert</code>, <code>append</code>,
					and <code>remove</code> methods.</li>
				<li><CodePre language="java">{`
/** Doubly linked list node */
class DLink&lt;E> {
	private E element; // Value for this node
	private DLink&lt;E> next; // Pointer to next node in list
	private DLink&lt;E> prev; // Pointer to previous node
	/** Constructors */
	DLink(E it, DLink&lt;E> p, DLink&lt;E> n)
	{ element = it; prev = p; next = n; }
	DLink(DLink&lt;E> p, DLink&lt;E> n) { prev = p; next = n; }
	/** Get and set methods for the data members */
	DLink&lt;E> next() { return next; }
	DLink&lt;E> setNext(DLink&lt;E> nextval)
	{ return next = nextval; }
	DLink&lt;E> prev() { return prev; }
	DLink&lt;E> setPrev(DLink&lt;E> prevval)
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
	curr.setNext(new DLink&lt;E>(it, curr, curr.next()));
	curr.next().next().setPrev(curr.next());
	cnt++;
}
/** Append "it" to list */
public void append(E it) {
	tail.setPrev(new DLink&lt;E>(it, tail.prev(), tail));
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
				<li>For singly linked lists we set <code>curr</code> to point to the node preceding the node that
					contained the actual current element, due to lack of access to the previous node. Since we do have access to the previous node in a
					doubly linked list, this is no longer necessary. We could set <code>curr</code> to point directly
					to the node containing the current element. However, we can keep the
					same convention for the <code>curr</code> pointer as we set up for singly linked lists, purely
					for the sake of consistency.</li>
			</SubList></li>
		</ul>
		<h3>Stack</h3>
		<ul>
			<li>The <b>stack</b> is a list-like structure in which elements may be inserted or removed
				from only one end.</li>
			<li>While this restriction makes stacks less flexible than lists, it
				also makes stacks both efficient (for those operations they can do) and easy to implement.</li>
			<li>Stack ADT:<SubList>
				<li>The accessible element of the stack is called the <b>top</b> element. Elements are not
					said to be inserted, they are <b>pushed</b> onto the stack. When removed, an element is
					said to be <b>popped</b> from the stack.</li>
				<li><CodePre language="java">{`
					/** Stack ADT */
public interface Stack&lt;E> {
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
class AStack&lt;E> implements Stack&lt;E> {
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
class LStack&lt;E> implements Stack&lt;E> {
	private Link&lt;E> top; // Pointer to first element
	private int size; // Number of elements
	/** Constructors */
	public LStack() { top = null; size = 0; }
	public LStack(int size) { top = null; size = 0; }
	/** Reinitialize stack */
	public void clear() { top = null; size = 0; }
	/** Put "it" on stack */
	public void push(E it) {
		top = new Link&lt;E>(it, top);
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
			<li>All operations for the array-based and linked stack implementations take constant
					time, so from a time efficiency perspective, neither has a significant advantage.</li>
			<li>Implementing Recursion:<SubList>
				<li>A subroutine call is normally implemented by
					placing necessary information about the subroutine (including the return address,
					parameters, and local variables) onto a stack. This information is called an <b>activation record</b>.</li>
				<li>Because an activation record must be created and placed onto the stack for
					each subroutine call, making subroutine calls is a relatively expensive operation.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Queues</h3>
		<ul>
			<li>Like the stack, the <b>queue</b> is a list-like structure that provides restricted access to
				its elements.</li>
			<li>Queue elements may only be inserted at the back (called an <b>enqueue</b>
				operation) and removed from the front (called a <b>dequeue</b> operation).</li>
			<li>Queue ADT:<SubList>
				<li><CodePre language="java">{`
/** Queue ADT */
public interface Queue&lt;E> {
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
				<li>If we relax the requirement that all elements of the queue must be in the first \(n\)  positions of the array, then both the <code>enqueue</code> and the <code>dequeue</code> operations can be
					performed in \(\Theta(1)\) time because the elements won't have to be shifted.</li>
				<li>This means when elements are removed from the queue, the front index increases.</li>
				<li>
				<figure><ImgComp src={require("./data_structures_and_algorithms_pics/11.PNG")} style={{width:"50%"}}/>
					<figcaption>After repeated use, elements in the array-based queue will drift to
						the back of the array.</figcaption>
				</figure></li>
				<li>The "drifting queue" problem can be solved by pretending that the array is
					circular and so allow the queue to continue directly from the highest-numbered position in the array to the lowest-numbered position. This is easily implemented
					through use of the modulus operator (denoted by % in Java).</li>
				<li><CodePre language="java">{`
/** Array-based queue implementation */
class AQueue&lt;E> implements Queue&lt;E> {
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
					<ImgComp src={require("./data_structures_and_algorithms_pics/12.jpg")} style={{width:"80%"}}/>
					<figcaption>Example of an empty Queue and a full one (from OpenDSA)</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Linked Queue:</b><SubList>
				<li><CodePre language="java">{`
/** Linked queue implementation */
class LQueue&lt;E> implements Queue&lt;E> {
	private Link&lt;E> front; // Pointer to front queue node
	private Link&lt;E> rear; // Pointer to rear queuenode
	private int size; // Number of elements in queue
	/** Constructors */
	public LQueue() { init(); }
	public LQueue(int size) { init(); } // Ignore size
	/** Initialize queue */
	private void init() {
		front = rear = new Link&lt;E>(null);
		size = 0;
	}
	/** Reinitialize queue */
	public void clear() { init(); }
	/** Put element on rear */
	public void enqueue(E it) {
		rear.setNext(new Link&lt;E>(it, null));
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
				<li>A header
					link node is used, which allows for a simpler implementation of the <code>enqueue</code> operation by
					avoiding any special cases when the queue is empty.</li>
			</SubList></li>
			<li>All member functions for both the array-based and linked queue implementations
				require constant time.</li>
			<li>The space comparison issues are the same as for the equivalent stack implementations.</li>
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
			<li>The most frequently used general-purpose implementation is with a <b>hash table</b>:<SubList>
				<li>A hash table uses a <b>hash function</b> to compute an index, also called a <b>hash code</b>, into an array of buckets or slots, from which the desired value can be found.</li>
				<li>During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.</li>
				<li>Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause <i>hash collisions</i> where the hash function generates the same index for more than one key. <u>Collision Resolution:</u><SubList>
					<li>In <b>separate chaining</b>, the process involves building a linked list with key-value pair for each search array index. The collided items are chained together through a single linked list, which can be traversed to access the item with a unique search key.</li>
					<li><ImgComp src={require("./data_structures_and_algorithms_pics/13.png")} style={{width:"80%"}}/></li>
					<li><b>Open addressing:</b> when a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found. <u>Well-known probe sequences:</u><SubList>
						<li><b>Linear probing</b>, in which the interval between probes is fixed.</li>
						<li><b>Quadratic probing</b> operates by taking the original hash index and adding successive values of an arbitrary quadratic polynomial until an open slot is found.</li>
						<li><b>Double hashing</b>, in which the interval between probes is computed by a secondary hash function.</li>
					</SubList></li>
					<li><ImgComp src={require("./data_structures_and_algorithms_pics/14.png")} style={{width:"80%"}}/></li>
				</SubList></li>
			</SubList></li>
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

<h2 id="trees">Trees</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<div data-source="4" >
			<ul>
				<li>
					A <b>graph</b> data structure consists of a finite (and possibly mutable) set of <b>vertices</b> (also called <b>nodes</b>), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as <b>edges</b>, and for a directed graph are also known as edges but also sometimes <b>arrows</b>.
				</li>
				<li>
					<figure style={{width:"45%"}}>
						<ImgComp src={require("./data_structures_and_algorithms_pics/6.png")}/>
						<figcaption>A directed graph with three vertices (blue circles) and three edges (black arrows).</figcaption>
					</figure>
				</li>
			</ul>
		</div>
		<div data-source="21" >
			<ul>
				<li><b>Trees</b> are a sub-type of the graph data structure. To be a tree, a graph must satisfy two requirements:<SubList>
					<li><u>It is acyclic:</u> It contains no cycles (or "loops")</li>
					<li><u>It is connected:</u> All nodes are reachable through
						one path in the graph.</li>
				</SubList></li>
				<li>A <b>binary tree</b> is a tree that each node in it has maximum of two children.</li>
				<li><b>Binary search tree (BST)</b> is a binary tree
					which all the values in left sub tree are less than values in
					right sub tree. <u>Implementation:</u><SubList>
					<li><CodePre language="python">{`
class Node:
	def __init__(self, val):
		self.l_child = None
		self.r_child = None
		self.data = val

def insert(root, node):
	if root is None:
		root = node
	else:
		if root.data > node.data:
			if root.l_child is None:
				root.l_child = node
			else:
				insert(root.l_child, node)
		else:
			if root.r_child is None:
				root.r_child = node
			else:
				insert(root.r_child, node)

def in_order_print(root):
	if not root: #True is root is None
		return
	in_order_print(root.l_child)
	print root.data
	in_order_print(root.r_child)
			   
def pre_order_print(root):
	if not root:
		return
	print root.data
	pre_order_print(root.l_child)
	pre_order_print(root.r_child) 
					`}</CodePre></li>
				</SubList></li>
				<li>There are three cases to be considered while deleting a BST node:<SubList>
					<li><ImgComp src={require("./data_structures_and_algorithms_pics/8.jpg")} width="80%"/></li>
					<li><u>Case 1:</u> Node to be deleted is the leaf node.</li>
					<li><u>Case 2:</u> Node to be deleted has one child.</li>
					<li><u>Case 3:</u> Node to be deleted has both children.</li>
					<li><CodePre language="cpp">{`
struct node
{
	int data;
	node *left, *right;
};

node* delete_node(node *root, int data)
{
	if(root == nullptr) return root;
	else if(data &lt; root->data) root->left = delete_node(root->left, data);
	else if(data > root->data) root->right = delete_node(root->right, data);
	else
	{
		if(root->left == nullptr && root->right == nullptr) // Case 1
		{
			free(root);
			root = nullptr;
		}
		else if(root->left == nullptr) // Case 2
		{
			node* temp = root;
			root = root->right;
			free(temp);
		}
		else if(root->right == nullptr) // Case 2
		{
			node* temp = root;
			root = root->left;
			free(temp);
		}
		else // Case 3
		{
			node* temp = root->right;
			while(temp->left != nullptr) temp = temp->left;
			root->data = temp->data;
			root->right = delete_node(root->right, temp->data);
		}
	}
	return root;
}       
					`}</CodePre></li>
				</SubList></li>
				<li>To check if a given binary tree is BST:<SubList>
					<li>One way to do this is to remember the min and max possible values of
						the keys in the subtree we are visiting. For example, if the root of the tree has the range [K_MIN,K_MAX], then the range of the left subtree is [K_MIN,x) and the range of the right subtree is (x,K_MAX].</li>
					<li><CodePre language="javascript">{`
is_BST(root, min, max):
	if root == null:
		return true
	// is the current node key out of range?
	if root->key &lt; min || root->key > max:
		return false
	// check if left and right subtree is BST
	return is_BST(root->left,min,root->key-1) && is_BST(root->right,root->key+1,max)   
					`}</CodePre></li>
				</SubList></li>
				<li>Visiting a node of a binary tree in some order is called <b>traversals</b>:<SubList>
					<li><ImgComp src={require("./data_structures_and_algorithms_pics/7.PNG")} style={{width:"50%"}}/></li>
					<li><b>Level order traversal:</b> Printing node data level by level, 1 2 3 4 5 6 7</li>
					<li><b>Pre-order traversal:</b> is traversing the node then left sub-tree of the node and then the right sub-tree of the node, 1 2 4 5 3 6 7</li>
					<li><b>In-order traversal:</b> is traversing the left sub-tree of the node then the node and then right sub-tree of the node, 4 2 5 1 6 3 7</li>
					<li><b>Post-order traversal:</b> is traversing the left sub-tree of the node then the right sub-tree and then the node, 4 5 2 6 7 3 1</li>
				</SubList></li>
				<li>The <b>lowest common ancestor</b> between two nodes <code>n1</code> and <code>n2</code> is defined as the lowest node in the tree that has both <code>n1</code> and <code>n2</code> as descendants.</li>
			</ul>
		</div>
		<ul style={{paddingBottom: "1px"}}>
			<li>Some definitions:<SubList>
				<li>The <b>depth</b> of a node \(M\) in the tree is the length of the path from the root of the tree to M.</li>
				<li>The <b>height</b> of a tree is one more than the depth of the deepest node in the tree.</li>
				<li>All nodes of depth \(d\) are at <b>level</b> \(d\) in the tree.</li>
				<li>The <b>root</b> is the only node at level 0, and its depth is 0.</li>
				<li>A <b>leaf</b> node is any node that has two empty children.</li>
				<li>An <b>internal</b> node is any node that has at least one non-empty child.</li>
				<li>Each node in a <b>full</b> binary tree is either an internal node with exactly
					two non-empty children or a leaf.</li>
				<li>A <b>complete</b> binary tree has a restricted shape
					obtained by starting at the root and filling the tree by levels from left to right. In the
					complete binary tree of height \(d\), all levels except possibly level \(d-1\) are completely
					full. The bottom level has its nodes filled in from the left side.</li>
				<li><figure style={{width:"70%"}}>
					<ImgComp src={require("./data_structures_and_algorithms_pics/15.PNG")}/>
					<figcaption>(a) This tree is full (but
						not complete). (b) This tree is complete (but not full).
						</figcaption>
				</figure></li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Array Implementation for Complete Binary Trees</h3>
		<ul>
			<li>An array can store the tree's data values efficiently, placing each data value in the array position
			corresponding to that node's position within the tree:<SubList>
				<li><figure style={{width:"75%"}}><ImgComp src={require("./data_structures_and_algorithms_pics/16.PNG")}/>
					<figcaption>A complete binary tree and its array implementation. (a) The complete binary tree with twelve nodes. Each node has been labeled with its position
						in the tree. (b) The positions for the relatives of each node.</figcaption>
				</figure></li>
				<li>If the total number of nodes in the tree is \(n\), and index of the node in
					question is \(r\), which must fall in the range 0 to \(n - 1\):
					</li>
				<MathStuff>$${`\\begin{aligned}
					Parent(r) = b(r - 1)/2c &\\text{  if r 6 = 0} \\\\
					Left child(r) = 2r + 1 &\\text{  if 2r + 1 &lt; n} \\\\
					Right child(r) = 2r + 2 &\\text{  if 2r + 2 &lt; n} \\\\
					Left sibling(r) = r - 1 &\\text{  if r is even}
				\\end{aligned}`}$$</MathStuff>
			</SubList></li>
			<li>When a collection of objects is organized by importance or priority, we call
				this a <b>priority queue</b>.</li>
			<li><b>Heaps:</b><SubList>
				<li>A <b>heap</b> is defined by two properties:<SubList>
					<li>It is a complete binary tree, so heaps are nearly always implemented
					using the array representation for complete binary trees.</li>
					<li>The values stored in a heap are partially ordered. This means that there is
					a relationship between the value stored at any node and the values of its children.</li>
				</SubList></li>
				<li>The logical view of the heap is actually a tree structure, while
					the typical physical implementation uses an array.</li>
				<li>A <b>max-heap</b> has the property that every node stores a value that is greater than
					or equal to the value of either of its children, so, the root stores the maximum of all values in the tree:<SubList>
					<li><CodePre language="java">{`
/** Max-heap implementation */
public class MaxHeap&lt;E extends Comparable&lt;? super E>> {
	private E[] Heap; // Pointer to the heap array
	private int size; // Maximum size of the heap
	private int n; // Number of things in heap
	/** Constructor supporting preloading of heap contents */
	public MaxHeap(E[] h, int num, int max)
	{ Heap = h; n = num; size = max; buildheap(); }
	/** @return Current size of the heap */
	public int heapsize() { return n; }
	/** @return True if pos a leaf position, false otherwise */
	public boolean isLeaf(int pos)
	{ return (pos >= n/2) && (pos &lt; n); }
	/** @return Position for left child of pos */
	public int leftchild(int pos) {
		assert pos &lt; n/2 : "Position has no left child";
		return 2*pos + 1;
	}
	/** @return Position for right child of pos */
	public int rightchild(int pos) {
		assert pos &lt; (n-1)/2 : "Position has no right child";
		return 2*pos + 2;
	}
	/** @return Position for parent */
	public int parent(int pos) {
		assert pos > 0 : "Position has no parent";
		return (pos-1)/2;
	}
	/** Insert val into heap */
	public void insert(E val) {
		assert n &lt; size : "Heap is full";
		int curr = n++;
		Heap[curr] = val; // Start at end of heap
		// Now sift up until curr's parent's key > curr's key
		while ((curr != 0) &&
		(Heap[curr].compareTo(Heap[parent(curr)]) > 0)) {
			DSutil.swap(Heap, curr, parent(curr));
			curr = parent(curr);
		}
	}
	/** Heapify contents of Heap */
	public void buildheap()
	{ for (int i=n/2-1; i>=0; i--) siftdown(i); }
	/** Put element in its correct place */
	private void siftdown(int pos) {
		assert (pos >= 0) && (pos &lt; n) : "Illegal heap position";
		while (!isLeaf(pos)) {
			int j = leftchild(pos);
			if ((j&lt;(n-1)) && (Heap[j].compareTo(Heap[j+1]) &lt; 0))
			j++; // j is now index of child with greater value
			if (Heap[pos].compareTo(Heap[j]) >= 0) return;
			DSutil.swap(Heap, pos, j);
			pos = j; // Move down
		}
	}
	/** Remove and return maximum value */
	public E removemax() {
		assert n > 0 : "Removing from empty heap";
		DSutil.swap(Heap, 0, --n); // Swap maximum with last value
		if (n != 0) // Not on last element
		siftdown(0); // Put new heap root val in correct place
		return Heap[n];
	}
	/** Remove and return element at specified position */
	public E remove(int pos) {
		assert (pos >= 0) && (pos &lt; n) : "Illegal heap position";
		if (pos == (n-1)) n--; // Last element, no work to be done
		else {
			DSutil.swap(Heap, pos, --n); // Swap with last value
			// If we just swapped in a big value, push it up
			while ((pos > 0) &&
			(Heap[pos].compareTo(Heap[parent(pos)]) > 0)) {
				DSutil.swap(Heap, pos, parent(pos));
				pos = parent(pos);
			}
			if (n != 0) siftdown(pos); // If it is little, push down
		}
		return Heap[n];
	}
}    
					`}</CodePre></li>
					<li>The heap is a natural implementation for the priority queue discussed at the
						beginning of this section. Jobs can be added to the heap (using their priority value
						as the ordering key) when needed. Method <code>removemax</code> can be called whenever a
						new job is to be executed.</li>
				</SubList></li>
				<li>A <b>min-heap</b> has the property that every node stores a value that is less than
					or equal to that of its children.</li>
			</SubList></li>
			<li><b>Huffman Coding Trees:</b><SubList>
				<li><figure style={{width:"55%"}}>
					<ImgComp src={require("./data_structures_and_algorithms_pics/17.PNG")}/>
					<figcaption>Relative frequencies for the 26 letters of the alphabet as they appear in a selected set of English documents. "Frequency" represents the expected frequency of occurrence per 1000 letters.</figcaption>
				</figure></li>
				<li><b>Huffman coding</b> assigns codes to characters such that the length of the code depends on the relative frequency or weight of the corresponding character.</li>
				<li>The Huffman code for each letter is derived from a full binary tree called the <b>Huffman coding tree</b>, or simply the <b>Huffman tree</b>. </li>
				<li>Each leaf of the Huffman tree corresponds to a letter.</li>
				<li>The process of building the Huffman tree for \(n\) letters:<SubList>
					<li>The <b>weighted path length</b> of a leaf is its weight times its depth. The binary tree with <i>minimum external path weight</i> is the one with the minimum sum of weighted path lengths for the given set of leaves.</li>
					<li>The goal is to build a tree with the minimum external path weight.</li>
					<li><ImgComp src={require("./data_structures_and_algorithms_pics/18.PNG")} style={{width: "65%"}}/></li>
					<li>Create a collection of \(n\) initial Huffman trees, each of which is a single leaf node containing one of the letters. Put the \(n\) partial trees onto a priority queue organized by
						weight (frequency).</li>
					<li>Next, remove the first two trees (the ones with lowest weight)
						from the priority queue. Join these two trees together to create a new tree whose
						root has the two trees as children, and whose weight is the sum of the weights of the
						two trees. Put this new tree back into the priority queue.</li>
					<li>The process is repeated
						until all of the partial Huffman trees have been combined into one.</li>
				</SubList></li>
				<li><u>Implementation:</u><SubList>
					<li>Internal nodes and leaf
						nodes are represented by separate classes, each derived from an abstract base class:</li>
					<li><CodePre language="java">{`
/** Huffman tree node implementation: Base class */
public interface HuffBaseNode&lt;E> {
	public boolean isLeaf();
	public int weight();
}
/** Huffman tree node: Leaf class */
class HuffLeafNode&lt;E> implements HuffBaseNode&lt;E> {
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
class HuffInternalNode&lt;E> implements HuffBaseNode&lt;E> {
	private int weight; // Weight (sum of children)
	private HuffBaseNode&lt;E> left; // Pointer to left child
	private HuffBaseNode&lt;E> right; // Pointer to right child
	/** Constructor */
	public HuffInternalNode(HuffBaseNode&lt;E> l,
	HuffBaseNode&lt;E> r, int wt)
	{ left = l; right = r; weight = wt; }
	/** @return The left child */
	public HuffBaseNode&lt;E> left() { return left; }
	/** @return The right child */
	public HuffBaseNode&lt;E> right() { return right; }
	/** @return The weight */
	public int weight() { return weight; }
	/** Return false */
}
					`}</CodePre></li>
					<li>Class declarations for the Huffman tree:</li>
					<li><CodePre language="java">{`
class HuffTree&lt;E> implements Comparable<HuffTree&lt;E>>{
	private HuffBaseNode&lt;E> root; // Root of the tree
	/** Constructors */
	public HuffTree(E el, int wt)
	{ root = new HuffLeafNode&lt;E>(el, wt); }
	public HuffTree(HuffBaseNode&lt;E> l,
	HuffBaseNode&lt;E> r, int wt)
	{ root = new HuffInternalNode&lt;E>(l, r, wt); }
	public HuffBaseNode&lt;E> root() { return root; }
	public int weight() // Weight of tree is weight of root
	{ return root.weight(); }
	public int compareTo(HuffTree&lt;E> that) {
		if (root.weight() &lt; that.weight()) return -1;
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
				<li>Using Huffman Codes:<SubList>
					<li>'0' is assigned to edges connecting a node with its left child, and
						'1' to edges connecting a node with its right child</li>
					<li><figure style={{width:"50%"}}><ImgComp src={require("./data_structures_and_algorithms_pics/19.PNG")}/>
						<figcaption> The code for K is '111101'.</figcaption>
					</figure></li>
				</SubList></li>
				<li>A set of codes is said to meet the <b>prefix property</b> if no code in the set is the
					prefix of another. The prefix property guarantees that there will be no ambiguity in
					how a bit string is decoded.</li>
				<li>The code
						for M is '11111'. Taking five right branches in the Huffman tree. We can be sure that no letter can have code
						'111' because this corresponds to an internal node of the tree, and the tree-building
						process places letters only at the leaf nodes.</li>
				<li>The frequencies of
					letters in an English text document do change depending on context. For example,
					while E is the most commonly used letter of the alphabet in English documents,
					T is more common as the first letter of a word. This is why most commercial compression utilities do not use Huffman coding as their primary coding method.</li>
				<li>Some frequency patterns will save no space as
					compared to fixed-length codes. In general,
					Huffman coding does better when there is large variation in the frequencies of
					letters.</li>
			</SubList></li>
		</ul>
		<h3>Non-Binary Trees</h3>
		<ul>
			<li>When we permit trees to have nodes with an arbitrary number of children, they become much harder to implement than binary trees. To distinguish them from binary trees, we use the term <b>general tree</b>. <u>Definitions and Terminology:</u><SubList>
				<li>A <b>tree \(\pmb{"{\\textit{T}}"}\)</b> is a finite set of one or more nodes such that there is one designated node \(R\), called the root of \(T\). If the set \((T - {"{R}"})\) is not empty, these nodes are partitioned into \(n \gt 0\) disjoint subsets \(T_0, T_1, ..., T_{"{n-1}"}\), each of which is a tree, and whose roots \(R_1, R_2, ..., R_n\), respectively, are children of \(R\).</li>
				<li>The subsets \(T_i \ (0 ≤ i &lt; n)\) are
					said to be subtrees of \(T\). These subtrees are ordered in that \(T_i\)
					is said to come before \(T_j\) if \(i &lt; j\)</li>
				<li>By convention, the subtrees are arranged from left to right with subtree \(T_0\) called the leftmost child of \(R\). A node's out degree is the number of children for
					that node. A <b>forest</b> is a collection of one or more trees.</li>
			</SubList></li>
			<li>ADT for General Tree Nodes:<SubList>
				<li>Because we do not know
					in advance how many children a given node will have in the general tree, we cannot give explicit functions to access each child. An alternative must be found that works
					for an unknown number of children. </li>
				<li>One choice would be to provide a function that takes as its parameter the index
					for the desired child. That combined with a function that returns the number of
					children for a given node would support the ability to access any node or process
					all children of a node.</li>
				<li>An alternative is to provide access to the leftmost child of a node, and
					to provide access to the right sibling of a node:</li>
				<li><CodePre language="java">{`
/** General tree node ADT */
interface GTNode&lt;E> {
	public E value();
	public boolean isLeaf();
	public GTNode&lt;E> parent();
	public GTNode&lt;E> leftmostChild();
	public GTNode&lt;E> rightSibling();
	public void setValue(E value);
	public void setParent(GTNode&lt;E> par);
	public void insertFirst(GTNode&lt;E> n);
	public void insertNext(GTNode&lt;E> n);
	public void removeFirst();
	public void removeNext();
}
/** General tree ADT */
interface GenTree&lt;E> {
	public void clear(); // Clear the tree
	public GTNode&lt;E> root(); // Return the root
	// Make the tree have a new root, give first child and sib
	public void newroot(E value, GTNode&lt;E> first,
	GTNode&lt;E> sib);
	public void newleftchild(E value); // Add left child
}
				`}</CodePre></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</SubList></li>
			<li>The <b>Parent Pointer</b> Implementation:<SubList>
				<li>Storing for each node only a
					pointer to that node's parent is called  the <b>parent pointer</b> implementation.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/20.PNG")} style={{width:"60%"}}/></li>
				<li>The parent pointer implementation is useful for this question: "Given two nodes, are they in the same tree?"</li>
				<li>If both nodes reach the same root,
					then they must be in the same tree. If the roots are different, then the two nodes are
					not in the same tree.</li>
				<li>The parent pointer representation is most often used to maintain a collection of
					disjoint sets. Two disjoint sets share no members in common (their intersection is
					empty).</li>
				<li> There are two basic operations that we wish to support:<ol>
						<li>determine if two objects are in the same set</li>
						<li>merge two sets together</li>
					</ol></li>
				<li><CodePre language="java">{`
/** General Tree class implementation for UNION/FIND */
class ParPtrTree {
	private Integer [] array; // Node array
	public ParPtrTree(int size) {
		array = new Integer[size]; // Create node array
		for (int i=0; i&lt;size; i++)
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
				<li>A low-cost approach to reducing the height is to be smart about how two trees
					are joined together:<SubList>
						<li>One simple technique, called the <b>weighted union rule</b>, joins
							the tree with fewer nodes to the tree with more nodes by making the smaller tree's
							root point to the root of the bigger tree.</li>
						<li><b>Path compression</b> is a method that tends to create extremely shallow trees. Path compression takes place while finding the root for a given node \(X\).
							It resets the parent of every node on the path from
							\(X\) to root \(R\) to point directly to \(R\).</li>
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
				<li>Each
					node contains a value, a pointer (or index) to its parent, and a pointer to a linked list
					of the node's children, stored in order from left to right.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/21.PNG")} style={{width:"70%"}}/></li>
				<li>The leftmost child of a node can be found
					directly because it is the first element in the linked list. However, finding the right sibling requires that all children parent.</li>
			</SubList></li>
			<li>The <b>Left-Child/Right-Sibling</b> Implementation:<SubList>
				<li>Each node stores its value
					and pointers to its parent, leftmost child, and right sibling.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/22.PNG")} style={{width:"70%"}}/></li>
				<li>If two trees are stored within the same node array, then adding one as the subtree
					of the other simply requires setting three pointers.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/23.PNG")} style={{width:"70%"}}/></li>
				<li>This implementation is more space efficient than the
					"list of children" implementation, and each node requires a fixed amount of space
					in the node array.
					</li>
			</SubList></li>
			<li>Dynamic Node Implementations (approach 1):<SubList>
				<li>One Approach is to allocate an array of child pointers as part of the node. </li>
				<li>This approach assumes that the number of children is known when the node is created. </li>
				<li>If the number of children does change, then some special recovery mechanism must be provided to support a change in the size of the child pointer array.</li>
				<li>One possibility is to allocate a new node of the correct size from free store and return the old copy of the node to free store for later reuse.</li>
				<li><figure style={{width:"70%"}}><ImgComp src={require("./data_structures_and_algorithms_pics/24.PNG")}/><figcaption> For each node,
					the first field stores the node value while the second field stores the size of the
					child pointer array.</figcaption></figure></li>
			</SubList></li>
			<li>Dynamic Node Implementations (approach 2):<SubList>
				<li>Store a linked list of child pointers with each node.</li>
				<li>This is more flexible, but which requires more space.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/25.PNG")} style={{width:"70%"}}/></li>
			</SubList></li>
			<li><b>K-ary Trees:</b><SubList>
				<li><b>K-ary trees</b> are trees whose internal nodes all have exactly K children. Thus, a full binary tree is a 2-ary tree.</li>
				<li><b>Full</b> and <b>complete</b> K-ary trees are analogous to full and complete binary trees.</li>
			</SubList></li>
			<li><b>Sequential Tree Representations:</b><SubList>
				<li>The goal is to store a series of node values with the minimum information needed to
					reconstruct the tree structure.  This approach, known as a <b>sequential tree representation</b>, this has the advantage of saving space because no pointers are stored.</li>
				<li>It has
					the disadvantage that accessing any node in the tree requires sequentially processing all nodes that appear before it in the node list.</li>
				<li>Sequential tree implementations can be used to <b>serialize</b> a tree structure. Serialization is the process of storing an object as a series of bytes, typically so that the
					data structure can be transmitted between computers.</li>
				<li>A sequential tree implementation typically stores the node values as they would
					be enumerated by a preorder traversal, along with sufficient information to describe
					the tree's shape.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/26.PNG")} style={{width:"40%"}}/></li>
				<li>We can represent the above binary tree like this: \(A'B'/DC'E'G/F'HI\). The slashes represent empty children, and the mark (') represents that the node is internal.</li>
				<li>Another approach is to store a separate bit vector to represent the status of each node, where '1' would indicate internal.</li>
				<li>For other general trees, we can use ')'  to indicate the end of a child list.  All leaf nodes are followed by a ')' symbol because they have no children. A leaf node that is also the
					last child for its parent would indicate this by two or more successive ')' symbols.</li>
				<li>In this example: \(RAC)D)E))BF)))\), F is followed by three ')' marks, because it is a leaf, the last node of B's rightmost subtree, and the last node of R's rightmost subtree.</li>
				<li><ImgComp src={require("./data_structures_and_algorithms_pics/27.PNG")} style={{width:"40%"}}/></li>
				<li>Note that this representation for serializing general trees cannot be used for binary trees. Every binary tree node has a left and a right child, the above example doesn't tell us whether D is a left or right child.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="graphs">Graphs</h2>
<div className="content">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul>
			<li><u>Terminologies:</u><SubList>
				<li>A graph \(G = (V, E)\) consists of a set of vertices \(V\) and a set of edges \(E\), such that each edge in \(E\) is a connection between a pair of vertices in \(V\).</li>
				<li>The number
				of vertices is written \(|V|\), and the number of edges is written \(|E|\). \(|E|\) can range from zero to a maximum of \(|V|^2 - |V|\). </li>
				<li>A graph with relatively few edges is called <b>sparse</b>, while a graph with many edges is called dense. A graph containing all possible edges is said to be <b>complete</b>.</li>
				<li>A graph with edges directed from one vertex to another is called a <b>directed graph</b> or <b>digraph</b>. A graph whose edges are not directed is called an <b>undirected graph</b>.</li>
				<li>A graph with labels associated with its vertices is called a <b>labeled graph</b>.</li>
				<li>Two vertices are adjacent if they are joined by an <b>edge</b>. Such vertices are also called <b>neighbors</b>.</li>
				<li>An edge connecting Vertices \(U\) and \(V\) is written \((U, V)\). Such an edge is said to be incident on Vertices \(U\) and \(V\). Associated with each edge may be a cost or <b>weight</b>. Graphs whose edges have weights are said to be <b>weighted</b>.</li>
				<li><figure style={{width:"70%"}}><ImgComp src={require("./data_structures_and_algorithms_pics/28.PNG")}/><figcaption> (a) A graph. (b) A directed graph (digraph). (c) A labeled (directed) graph with weights associated with the edges.</figcaption></figure></li>
				<li>In a directed graph, the <b>out degree</b> for a vertex is the number of neighbors adjacent from it (or the number of edges going out from it), while the <b>in degree</b> is the number of neighbors adjacent to it (or the number of edges coming in to it).</li>
				<li>A sequence of vertices \(v_1, v_2, \ldots, v_n\) forms a <b>path</b> of length \(n - 1\) if there exist edges from \(v_i\) to \(v_i+1\) for \(1 ≤ i &lt; n\). A path is <b>simple</b> if all vertices on the path are distinct. The <b>length</b> of a path is the number of edges it contains.</li>
				<li>A <b>cycle</b> is a path of length three or more that connects some vertex \(v_1\) to itself. A cycle is <b>simple</b> if the path is simple, except for the first and last vertices being the same.</li>
				<li>A <b>subgraph \(S\)</b> is formed from graph \(G\) by selecting a subset \(V_s\) of \(G\)'s vertices and a subset \(E_s\) of \(G\)'s edges such that for every edge \(e ∈ E_s\), both vertices of \(e\) are in \(V_s\). Any subgraph of \(V\) where all vertices in the graph connect to all other vertices in the subgraph is called a <b>clique</b>.</li>
				<li>An undirected graph is <b>connected</b> if there is at least one path from any vertex
					to any other.</li>
				<li><figure style={{width:"50%"}}>
					<ImgComp src={require("./data_structures_and_algorithms_pics/29.PNG")}/>
					<figcaption> An undirected graph with three connected components. Vertices 0, 1, 2, 3, and 4 form one connected component. Vertices 5 and 6 form a second connected component. Vertex 7 by itself forms a third connected component.</figcaption>
				</figure></li>
				<li>The maximally connected subgraphs of an undirected graph are called <b>connected components</b>.</li>
				<li>A graph without cycles is called an <b>acyclic graph</b>.</li>
				<li className="research">A <b>free tree</b> is a connected, undirected graph with no simple cycles. An equivalent definition is that a free tree is connected and has \(|V| - 1\) edges.</li>
			</SubList></li>
			<li>Representating graphs:<SubList>
				<li>The <b>adjacency matrix</b> for a graph is a \(|V| \times |V|\) array.</li>
				<li>Assume that |V| = n and that the vertices are labeled from \(v0\) through \(v_{"{n-1}"}\). Row \(i\) of the adjacency matrix contains entries for Vertex \(v_i\).</li>
				<li>Column \(j\) in row \(i\) is marked if there is an edge from \(v_i\) to \(v_j\) and is not marked otherwise.  Thus, the adjacency matrix requires one bit at each position.</li>
				<li>Alternatively, if we wish to associate a number with each edge, such as the weight or distance between two vertices, then each matrix position must store that number.</li>
				<li>In either case, the space requirements for the adjacency matrix are \(\Theta(|V|^2)\).</li>
				<li>The second common representation for graphs is the <b>adjacency list</b>. The adjacency list is an array of linked lists. The array is \(|V|\) items long, with position \(i\) storing a pointer to the linked list of edges for Vertex \(v_i\). </li>
				<li><figure>
					<ImgComp src={require("./data_structures_and_algorithms_pics/30.PNG")}/>
					<figcaption>(a) A directed graph. (b) The adjacency matrix for the graph of (a). (c) The adjacency list for the graph of (a).</figcaption>
				</figure></li>
				<li>The storage requirements for the adjacency list depend on both the number of
					edges and the number of vertices in the graph. There must be an array entry for
					each vertex (even if the vertex is not adjacent to any other vertex and thus has no
					elements on its linked list), and each edge must appear on one of the lists. Thus,
					the cost is \(\Theta(|V| + |E|)\).</li>
				<li>The adjacency list stores information only for those edges that actually appear in the graph, while the adjacency matrix requires space for each potential edge, whether it exists or not.</li>
				<li>However, the adjacency matrix requires no overhead for pointers, which can be a substantial cost, especially if the only information stored for an edge is one bit to indicate its existence.</li>
				<li>As the graph becomes denser, the adjacency matrix becomes relatively more space efficient. Sparse graphs are likely to have their adjacency list representation be more space efficient.</li>
			</SubList></li>
			<li>Graph ADT:<SubList>
				<li>Before showing the adjacency matrix and the adjacency list implementations. We will begin with an interface defining an ADT for graphs that a given implementation must meet:</li>
				<li><CodePre language="java">{`
interface Graph { // Graph class ADT
	// Initialize the graph with some number of vertices
	void init(int n);
	// Return the number of vertices
	int nodeCount();
	// Return the current number of edges
	int edgeCount();
	// Get the value of node with index v
	Object getValue(int v);
	// Set the value of node with index v
	void setValue(int v, Object val);
	// Adds a new edge from node v to node w with weight wgt
	void addEdge(int v, int w, int wgt);
	// Get the weight value for an edge
	int weight(int v, int w);
	// Removes the edge from the graph.
	void removeEdge(int v, int w);
	// Returns true iff the graph has the edge
	boolean hasEdge(int v, int w);
	// Returns an array containing the indicies of the neighbors of v
	int[] neighbors(int v);
}
				`}</CodePre></li>
				<li>This ADT assumes that the number of vertices is fixed when the graph is created, but that edges can be added and removed. The <code>init</code> method sets (or resets) the number of nodes in the graph, and creates necessary space for the adjacency matrix or adjacency list.</li>
				<li>Vertices are defined by an integer index value. In other words, there is a Vertex \(0\), Vertex \(1\), and so on through Vertex \(n-1\).</li>
				<li>Nearly every graph algorithm presented in this chapter will require visits to all neighbors of a given vertex. The neighbors method returns an array containing the indices for the neighboring vertices, in ascending order. The following lines appear in many graph algorithms:</li>
				<li><CodePre language="java">{`
int[] nList = G.neighbors(v);
for (int i=0; i &lt; nList.length; i++) {
	if (G.getValue(nList[i]) != VISITED) {
		DoSomething();
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Adjacency matrix <u>implementation</u>:<SubList>
				<li><CodePre language="java">{`
class GraphM implements Graph {
	private int[][] matrix;
	private Object[] nodeValues;
	private int numEdge;
	
	// No real constructor needed
	GraphM() { }
	
	public void init(int n) {
		matrix = new int[n][n];
		nodeValues = new Object[n];
		numEdge = 0;
	}
	
	public int nodeCount() { return nodeValues.length; }
	public int edgeCount() { return numEdge; }
	public Object getValue(int v) { return nodeValues[v]; }
	public void setValue(int v, Object val) { nodeValues[v] = val; }

	// Adds a new edge from node v to node w
	public void addEdge(int v, int w, int wgt) {
		if (wgt == 0) { return; } // Can't store weight of 0
		if (matrix[v][w] == 0) {
			numEdge++;
		}
		matrix[v][w] = wgt;
	}
	public void removeEdge(int v, int w) {
		if (matrix[v][w] != 0) {
			matrix[v][w] = 0;
			numEdge--;
		}
	}
	public boolean hasEdge(int v, int w) { return matrix[v][w] != 0; }
	public int weight(int v, int w) { return matrix[v][w]; }
	
	
	// Returns an array containing the indicies of the neighbors of v
	public int[] neighbors(int v) {
		int i;
		int count = 0;
		int[] temp;
		for (i=0; i&lt;nodeValues.length; i++) {
			if (matrix[v][i] != 0) { count++; }
		}
		temp = new int[count];
		for (i=0, count=0; i&lt;nodeValues.length; i++) {
			if (matrix[v][i] != 0) { temp[count++] = i; }
		}
		return temp;
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Adjacency list <u>implementation</u>:<SubList>
				<li><CodePre language="java">{`
public class GraphL implements Graph {

	// Doubly linked list node
	private class Edge {
		int vertex, weight;
		Edge prev, next;
		Edge(int v, int w, Edge p, Edge n) {
			vertex = v;
			weight = w;
			prev = p;
			next = n;
		}
	}
	
	private Edge[] nodeArray;
	private Object[] nodeValues;
	private int numEdge;
	
	// No real constructor needed
	GraphL() {}
	
	// Initialize the graph with n vertices
	public void init(int n) {
		nodeArray = new Edge[n];
		// List headers;
		for (int i=0; i&lt;n; i++) {
			nodeArray[i] = new Edge(-1, -1, null, null);
		}
		nodeValues = new Object[n];
		numEdge = 0;
	}
	
	public int nodeCount() { return nodeArray.length; }
	public int edgeCount() { return numEdge; }
	public Object getValue(int v) { return nodeValues[v]; }
	public void setValue(int v, Object val) { nodeValues[v] = val; }
	
	// Return the link in v's neighbor list that preceeds the
	// one with w (or where it would be)
	private Edge find (int v, int w) {
		Edge curr = nodeArray[v];
		while ((curr.next != null) && (curr.next.vertex &lt; w)) {
			curr = curr.next;
		}
		return curr;
	}
	
	// Adds a new edge from node v to node w with weight wgt
	public void addEdge(int v, int w, int wgt) {
		if (wgt == 0) { return; } // Can't store weight of 0
		Edge curr = find(v, w);
		if ((curr.next != null) && (curr.next.vertex == w)) {
			curr.next.weight = wgt;
		}
		else {
			curr.next = new Edge(w, wgt, curr, curr.next);
			numEdge++;
			if (curr.next.next != null) {
				curr.next.next.prev = curr.next;
			}
		}
	}
	
	// Get the weight value for an edge
	public int weight(int v, int w) {
		Edge curr = find(v, w);
		if ((curr.next == null) || (curr.next.vertex != w)) { return 0; }
		else { return curr.next.weight; }
	}
	
	// Removes the edge from the graph.
	public void removeEdge(int v, int w) {
		Edge curr = find(v, w);
		if ((curr.next == null) || curr.next.vertex != w) { return; }
		else {
			curr.next = curr.next.next;
			if (curr.next != null) { curr.next.prev = curr; }
		}
		numEdge--;
	}
	
	// Returns true iff the graph has the edge
	public boolean hasEdge(int v, int w) { return weight(v, w) != 0; }
	
	// Returns an array containing the indicies of the neighbors of v
	public int[] neighbors(int v) {
		int cnt = 0;
		Edge curr;
		for (curr = nodeArray[v].next; curr != null; curr = curr.next) {
			cnt++;
		}
		int[] temp = new int[cnt];
		cnt = 0;
		for (curr = nodeArray[v].next; curr != null; curr = curr.next) {
			temp[cnt++] = curr.vertex;
		}
		return temp;
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Graph Traversals:<SubList>
				<li>Many graph applications need to visit the vertices of a graph in some specific order based on the graph's topology. This is known as a graph <b>traversal</b>.</li>
				<li>Graph traversal algorithms typically begin with a start vertex and attempt to visit the remaining vertices from there. Graph traversals must deal with a number of troublesome cases. First, it might not be possible to reach all vertices from the start vertex. This occurs when the graph is not connected. Second, the graph might contain cycles, and we must make sure that cycles do not cause the algorithm to go into an infinite loop.</li>
				<li>Graph traversal algorithms can solve both of these problems by flagging vertices as <code>VISITED</code> when appropriate.</li>
				<li>Once the traversal algorithm completes, we can check to see if all vertices have been processed by checking whether they have the VISITED flag set. If not all vertices are flagged, we can continue the traversal from another unvisited vertex.</li>
				<li>Note that this process works regardless of whether the graph is directed or undirected. To ensure visiting all vertices, <code>graphTraverse</code> could be called as follows on a graph \(G\):</li>
				<li><CodePre language="java">{`
static void graphTraverse(Graph G) {
	int v;
	for (v=0; v&lt;G.nodeCount(); v++) {
		G.setValue(v, null); // Initialize
	}
	for (v=0; v&lt;G.nodeCount(); v++) {
		if (G.getValue(v) != VISITED) {
			doTraversal(G, v);
		}
	}
}
				`}</CodePre></li>
				<li>Our first method for organized graph traversal is called <b>depth-first search (DFS)</b>.</li>
				<li>Whenever a vertex \(v\) is visited during the search, DFS will recursively visit all of \(v\)'s unvisited neighbors.</li>
				<li>Equivalently, DFS will add all edges leading out of \(v\) to a stack. The next vertex to be visited is determined by popping the stack and following that edge.</li>
				<li><CodePre language="java">{`
static void DFS(Graph G, int v) {
	PreVisit(G, v);
	G.setValue(v, VISITED);
	int[] nList = G.neighbors(v);
	for (int i=0; i &lt; nList.length; i++) {
		if (G.getValue(nList[i]) != VISITED) {
			DFS(G, nList[i]);
		}
	}
	PostVisit(G, v);
}
				`}</CodePre></li>
				<li>This implementation contains calls to functions <code>PreVisit</code> and <code>PostVisit</code>. These functions specify what activity should take place during the search.</li>
				<li>DFS processes each edge once in a directed graph. In an undirected graph, DFS processes each edge from both directions. Each vertex must be visited, but only once, so the total cost is \(\Theta(|V|+|E|)\).</li>
				<li>Our second graph traversal algorithm is known as a <b>breadth-first search (BFS)</b>.</li>
				<li>BFS examines all vertices connected to the start vertex before visiting vertices further away.</li>
				<li><CodePre language="java">{`
static void BFS(Graph G, int v) {
	LQueue Q = new LQueue(G.nodeCount());
	Q.enqueue(v);
	G.setValue(v, VISITED);
	while (Q.length() > 0) { // Process each vertex on Q
		v = (Integer)Q.dequeue();
		PreVisit(G, v);
		int[] nList = G.neighbors(v);
		for (int i=0; i &lt; nList.length; i++) {
			if (G.getValue(nList[i]) != VISITED) { // Put neighbors on Q
				G.setValue(nList[i], VISITED);
				Q.enqueue(nList[i]);
			}
		}
		PostVisit(G, v);
	}
}
				`}</CodePre></li>
			</SubList></li>
		</ul>
	</div>

	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li><b>Topological Sort:</b><SubList>
				<li>Assume that we need to schedule a series of tasks, such as classes or construction jobs, where we cannot start one task until after its prerequisites are completed. We wish to organize the tasks into a linear order that allows us to complete them one at a time without violating any prerequisites. We can model the problem using a <i>direct acyclic graph</i> (DAG).</li>
				<li><b>Topological sort</b> is the process of laying out the vertices of a DAG in a linear order such that no vertex \(A\) in the order is preceded by a vertex that can be reached by a (directed) path from \(A\).</li>
				<li><figure>
					<ImgComp src={require("./data_structures_and_algorithms_pics/31.PNG")}/>
					<figcaption>Seven tasks have dependencies as shown by the directed graph.</figcaption>
				</figure></li>
				<li>A topological sort may be found by performing a DFS on the graph. When a vertex is visited, no action is taken (i.e., function <code>PreVisit</code> does nothing). When the recursion pops back to that vertex, function <code>PostVisit</code> prints the vertex. This yields a topological sort in reverse order.</li>
				<li><CodePre language="java">{`
static void topsortDFS(Graph G) {
	int v;
	for (v=0; v&lt;G.nodeCount(); v++) {
		G.setValue(v, null); // Initialize
	}
	for (v=0; v&lt;G.nodeCount(); v++) {
		if (G.getValue(v) != VISITED) {
			tophelp(G, v);
		}
	}
}
	
static void tophelp(Graph G, int v) {
	G.setValue(v, VISITED);
	int[] nList = G.neighbors(v);
	for (int i=0; i &lt; nList.length; i++) {
		if (G.getValue(nList[i]) != VISITED) {
			tophelp(G, nList[i]);
		}
	}
	printout(v);
}
				`}</CodePre></li>
				<li>We can implement topological sort using a queue instead of recursion.</li>
				<li>First visit all edges, counting the number of edges that lead to each vertex (i.e., count the number of prerequisites for each vertex). All vertices with no prerequisites are placed on the queue.</li>
				<li>We then begin processing the queue. When Vertex \(v\) is taken off of the queue, it is printed, and all neighbors of \(v\) (that is, all vertices that have \(v\) as a prerequisite) have their counts decremented by one.</li>
				<li>Place on the queue any neighbor whose count becomes zero. If the queue becomes empty without printing all of the vertices, then the graph contains a cycle.</li>
				<li><CodePre language="java">{`
static void topsortBFS(Graph G) {   // Topological sort: Queue
	Queue Q = new LQueue(G.nodeCount());
	int[] Count = new int[G.nodeCount()];
	int[] nList;
	int v;
	for (v=0; v&lt;G.nodeCount(); v++) { Count[v] = 0; } // Initialize
	for (v=0; v&lt;G.nodeCount(); v++) { // Process every edge
		nList = G.neighbors(v);
		for (int i=0; i &lt; nList.length; i++) {
			Count[nList[i]]++;  // Add to v's prereq count
		}
	}
	for (v=0; v&lt;G.nodeCount(); v++) {   // Initialize Queue
		if (Count[v] == 0) {    // V has no prerequisites
			Q.enqueue(v);
		}
	}
	while (Q.length() > 0) {    // Process the vertices
		v = (Integer)Q.dequeue();
		printout(v);    // PreVisit for Vertex V
		nList = G.neighbors(v);
		for (int i=0; i&lt;nList.length; i++) {
			Count[nList[i]]--;  // One less prerequisite
			if (Count[nList[i]] == 0) { // This vertex is now free
				Q.enqueue(nList[i]);
			}
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li>Shortest-Paths Problems:<SubList>
				<li>On a road map, a road connecting two towns is typically labeled with its distance. We can model a road network as a directed graph whose edges are labeled with real numbers. These labels may be called <b>weights</b>, <b>costs</b>, or <b>distances</b>, depending on the application.</li>
				<li><b>Single-source shortest paths problem:</b> Given a graph with weights (or distances) on the edges, and a designated start vertex \(s\), find the shortest path from \(s\) to every other vertex in the graph.</li>
				<li>For unweighted graphs (or whenever all edges have the same cost), the single-source shortest paths can be found using a simple breadth-first search.</li>
				<li>One approach to solving this problem when the edges have differing weights might be to process the vertices in a fixed order. </li>
				<li>Label the vertices \(v_0\) to \(v_{"{n-1}"}\), with \(S=v_0\). When processing Vertex \(v_1\), we take the edge connecting \(v_0\) and \(v_1\). When processing \(v_2\), we consider the shortest distance from \(v_0\) to \(v_2\) and compare that to the shortest distance from \(v_0\) to \(v_1\) to \(v_2\).</li>
				<li>When processing Vertex \(v_i\), we consider the shortest path for Vertices \(v_0\) through \(v_{"{i-1}"}\) that have already been processed.</li>
				<li>A shortest path from \(S\) to \(X\) must have its next-to-last vertex in \(S\):</li>
				<MathStuff>$${"d(S,X)=\\min_{U∈S} \\ (d(S,U)+\\textbf{w}(U,X))"}$$</MathStuff>
				<li>In other words, the shortest path from \(S\) to \(X\) is the minimum over all paths that go from \(S\) to \(U\), then have an edge from \(U\) to \(X\), where \(U\) is some vertex in \(S\).</li>
				<li>This solution is usually referred to as <b>Dijkstra's algorithm</b>. It works by maintaining a distance estimate \(D(X)\) for all vertices \(X\) in \(V\). The elements of \(D\) are initialized to the value <code>INFINITE</code>. Vertices are processed in order of distance from \(S\). Whenever a vertex \(v\) is processed, \(D(X)\) is updated for every neighbor \(X\) of \(V\).</li>
				<li><CodePre language="java">{`
// Compute shortest path distances from s, store them in D
static void Dijkstra(Graph G, int s, int[] D) {
	for (int i=0; i&lt;G.nodeCount(); i++) {    // Initialize
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i&lt;G.nodeCount(); i++) {  // Process the vertices
		int v = minVertex(G, D);     // Find next-closest vertex
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; } // Unreachable
		int[] nList = G.neighbors(v);
		for (int j=0; j&lt;nList.length; j++) {
			int w = nList[j];
			if (D[w] > (D[v] + G.weight(v, w))) {
				D[w] = D[v] + G.weight(v, w);
			}
		}
	}
}
				`}</CodePre></li>
				<li>There are two reasonable solutions to the key issue of finding the unvisited vertex with minimum distance value during each pass through the main for loop. The first method is simply to scan through the list of \(|V|\) vertices searching for the minimum value, as follows:</li>
				<li><CodePre language="java">{`
// Find the unvisited vertex with the smalled distance
static int minVertex(Graph G, int[] D) {
	int v = 0;  // Initialize v to any unvisited vertex;
	for (int i=0; i&lt;G.nodeCount(); i++) {
		if (G.getValue(i) != VISITED) { v = i; break; }
	}
	for (int i=0; i&lt;G.nodeCount(); i++) {  // Now find smallest value
		if ((G.getValue(i) != VISITED) && (D[i] &lt; D[v])) {
			v = i;
		}
	}
	return v;
}
				`}</CodePre></li>
				<li>Because this scan is done \(|V|\) times, and because each edge requires a constant-time update to \(D\), the total cost for this approach is \(\Theta(|V|^2+|E|)=\Theta(|V|^2)\), because \(|E|\)
					is in \(O(|V|^2)\).</li>
				<li>An alternative approach is to store unprocessed vertices in a min-heap ordered by their distance from the processed vertices. The next-closest vertex can be found in the heap in \(Θ(\log|V|)\) time.</li>
				<li>Every time we modify \(D(X)\), we could reorder \(X\) in the heap by deleting and reinserting it. This is an example of a <b>priority queue with priority update</b>.</li>
				<li>To implement true priority updating, we would need to store with each vertex its position within the heap so that we can remove its old distances whenever it is updated by processing new edges.</li>
				<li>The time complexity is \(\Theta((|V|+|E|)\log|E|)\), because for each edge that we process we must reorder the heap.</li>
				<li>We use the <code>KVPair</code> class to store key-value pairs in the heap, with the edge weight as the key and the target vertex as the value.</li>
				<li><CodePre language="java">{`
// Dijkstra's shortest-paths: priority queue version
static void DijkstraPQ(Graph G, int s, int[] D) {
	int v;    // The current vertex
	KVPair[] E = new KVPair[G.edgeCount()];   // Heap for edges
	E[0] = new KVPair(0, s);  // Initial vertex
	MinHeap H = new MinHeap(E, 1, G.edgeCount());
	for (int i=0; i&lt;G.nodeCount(); i++) { // Initialize distance
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i&lt;G.nodeCount(); i++) { // For each vertex

		KVPair temp = (KVPair)(H.removemin());
		if (temp == null) { return; }   // Unreachable nodes exist
		v = (Integer)temp.value();

		while (G.getValue(v) == VISITED) {
			temp = (KVPair)(H.removemin());
			if (temp == null) { return; } // Unreachable nodes exist
			v = (Integer)temp.value();
		}

		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; }   // Unreachable
		int[] nList = G.neighbors(v);
		for (int j=0; j&lt;nList.length; j++) {
			int w = nList[j];
			if (D[w] > (D[v] + G.weight(v, w))) { // Update D
				D[w] = D[v] + G.weight(v, w);
				H.insert(new KVPair(D[w], w));
			}
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li><b>Minimal Cost Spanning Trees:</b><SubList>
				<li>The <b>minimal-cost spanning tree (MCST)</b> problem takes as input a connected, undirected graph \(G\), where each edge has a distance or weight measure attached.</li>
				<li className="Opened">The MCST is the graph containing the vertices of \(G\) along with the subset of \(G\)'s edges that:<ol>
					<li>has minimum total cost as measured by summing the values for all of the edges in the subset</li>
					<li>keeps the vertices connected</li>
				</ol></li>
				<li>The MCST is a free tree with \(|V|-1\) edges. The name "minimum-cost spanning tree" comes from the fact that the required set of edges forms a tree, it spans the vertices (i.e., it connects them together), and it has minimum cost.</li>
				<li><figure>
					<ImgComp src={require("./data_structures_and_algorithms_pics/32.PNG")}/>
					<figcaption>All edges appear in the original graph. Those edges drawn with heavy lines indicate the subset making up the MCST. Note that edge \((C,F)\) could be replaced with edge \((D,F)\) to form a different MCST with equal cost.</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Prim's algorithm:</b><SubList>
				<li><b>Prim's Algorithm</b> is a greedy algorithm for computing the MCST of a graph.</li>
				<li>Prim's algorithm is very simple. Start with any Vertex \(N\) in the graph, setting the MCST to be \(N\) initially. Pick the least-cost edge connected to \(N\).</li>
				<li>This edge connects \(N\) to another vertex; call this \(M\). Add Vertex \(M\) and Edge \((N,M)\) to the MCST. Next, pick the least-cost edge coming from either \(N\) or \(M\) to any other vertex in the graph. Add this edge and the new vertex it reaches to the MCST.</li>
				<li>This process continues, at each step expanding the MCST by selecting the least-cost edge from a vertex currently in the MCST to a vertex not currently in the MCST.</li>
				<li>Prim's algorithm is quite similar to Dijkstra's algorithm for finding the single-source shortest paths. The primary difference is that we are seeking not the next closest vertex to the start vertex, but rather the next closest vertex to any vertex currently in the MCST. Thus we replace the lines:</li>
				<li><CodePre language="java">{`
if (D[w] > (D[v] + G.weight(v, w)))
	D[w] = D[v] + G.weight(v, w);
				`}</CodePre></li>
				<li>in Djikstra's algorithm with the lines:</li>
				<li><CodePre language="java">{`
if (D[w] > G.weight(v, w))
	D[w] = G.weight(v, w);
				`}</CodePre></li>
				<li>The following code shows an implementation for Prim's algorithm:</li>
				<li><CodePre language="java">{`
// Compute shortest distances to the MCST, store them in D.
// V[i] will hold the index for the vertex that is i's parent in the MCST
void Prim(Graph G, int s, int[] D, int[] V) {
	for (int i=0; i&lt;G.nodeCount(); i++) {    // Initialize
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i&lt;G.nodeCount(); i++) {   // Process the vertices
		int v = minVertex(G, D);    // Find next-closest vertex
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; } // Unreachable
		if (v != s) { AddEdgetoMST(V[v], v); }
		int[] nList = G.neighbors(v);
		for (int j=0; j&lt;nList.length; j++) {
			int w = nList[j];
			if (D[w] > G.weight(v, w)) {
				D[w] = G.weight(v, w);
				V[w] = v;
			}
		}
	}
}
				`}</CodePre></li>
				<li>Array <code>V[I]</code> stores the previously visited vertex that is closest to Vertex \(I\). This information lets us know which edge goes into the MCST when Vertex \(I\) is processed.</li>
				<li>Alternatively, we can implement Prim's algorithm using a <i>priority queue</i> to find the next closest vertex:</li>
				<li><CodePre language="java">{`
// Prims MCST algorithm: priority queue version
void PrimPQ(Graph G, int s, int[] D, int[] V) {
	int v;  // The current vertex
	KVPair[] E = new KVPair[G.edgeCount()]; // Heap for edges
	E[0] = new KVPair(0, s);    // Initial vertex
	MinHeap H = new MinHeap(E, 1, G.edgeCount());
	for (int i=0; i&lt;G.nodeCount(); i++) {   // Initialize distance
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i&lt;G.nodeCount(); i++) {    // For each vertex
		KVPair temp = H.removemin();
		if (temp == null) { return; }      // Unreachable nodes exist
		v = (Integer)temp.value();
			while (G.getValue(v) == VISITED) {
				KVPair temp = H.removemin();
				if (temp == null) { return; }   // Unreachable nodes exist
				v = (Integer)temp.value();
			}
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; }  // Unreachable
		if (v != s) { AddEdgetoMST(V[v], v); } // Add edge to MST
		int[] nList = G.neighbors(v);
		for (int j=0; j&lt;nList.length; j++) {
			int w = nList[j];
			if (D[w] > G.weight(v, w)) { // Update D
				D[w] = G.weight(v, w);
				V[w] = v;   // Where it came from
				H.insert(D[w], w);
			}
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li><b>Kruskal's Algorithm:</b><SubList>
				<li>Kruskal's algorithm is also a simple, greedy algorithm.</li>
				<li>First partition the set of vertices into \(|V|\) disjoint sets, each consisting of one vertex. Then process the edges in order of weight. An edge is added to the MCST, and two disjoint sets combine if the edge connects two vertices in different disjoint sets. This process is repeated until only one disjoint set remains.</li>
				<li>The edges can be processed in order of weight by using a <i>min-heap</i>. This is generally faster than sorting the edges first, because in practice we need only visit a small fraction of the edges before completing the MCST.</li>
				<li><CodePre language="java">{`
void Kruskal(Graph G) {
	ParPtrTree A = new ParPtrTree(G.nodeCount());   // Equivalence array
	KVPair[] E = new KVPair[G.edgeCount()]; // Minheap array
	int edgecnt = 0; // Count of edges

	for (int i=0; i&lt;G.nodeCount(); i++) {    // Put edges in the array
		int[] nList = G.neighbors(i);
		for (int w=0; w&lt;nList.length; w++) {
			E[edgecnt++] = new KVPair(G.weight(i, nList[w]), new int[]{ i,nList[w] } );
		}
	}
	MinHeap H = new MinHeap(E, edgecnt, edgecnt);
	int numMST = G.nodeCount(); // Initially n disjoint classes
	for (int i=0; numMST>1; i++) {  // Combine equivalence classes
		KVPair temp = H.removemin();    // Next cheapest edge
		if (temp == null) { return; }   // Must have disconnected vertices
		int v = ((int[])temp.value())[0];
		int u = ((int[])temp.value())[1];
		if (A.differ(v, u)) {   // If in different classes
			A.UNION(v, u);  // Combine equiv classes
			AddEdgetoMST(v, u); // Add this edge to MST
			numMST--;   // One less MST
		}
	}
}
				`}</CodePre></li>
				<li>The total cost of the algorithm is \(\Theta(|E|\log|E|)\) in the worst case, when nearly all edges must be processed before all the edges of the spanning tree are found and the algorithm can stop.</li>
				<li>More often the edges of the spanning tree are the shorter ones,and only about \(|V|\) edges must be processed. If so, the cost is often close to \(\Theta(|V|\log|E|)\) in the average case.</li>
			</SubList></li>
			<li>All-Pairs Shortest Paths:<SubList>
				<li>Define a \(k\)-path from vertex v to vertex \(u\) to be any path whose intermediate vertices (aside from \(v\) and \(u\)) all have indices less than \(k\). A \(0\)-path is defined to be a direct edge from \(v\) to \(u\).</li>
				<li><figure>
					<ImgComp src={require("./data_structures_and_algorithms_pics/33.PNG")}/>
					<figcaption>Path 1-3 is a \(0\)-path by definition. Path 3-0-2 is not a \(0\)-path, but it is a \(1\)-path (as well as a \(2\)-path, a \(3\)-path, and a \(4\)-path) because the largest intermediate vertex is 0. Path 1-3-2 is a \(4\)-path, but not a \(3\)-path because the intermediate vertex is 3. All paths in this graph are \(4\)-paths.</figcaption>
				</figure></li>
				<li>Define \(D_k(v,u)\) to be the length of the shortest \(k\)-path from vertex \(v\) to vertex \(u\). Assume that we already know the shortest \(k\)-path from \(v\) to \(u\). The shortest \((k+1)\)-path either goes through vertex \(k\) or it does not. If it does go through \(k\), then the best path is the best \(k\)-path from \(v\) to \(k\) followed by the best \(k\)-path from \(k\) to \(u\). Otherwise, we should keep the best \(k\)-path seen before.</li>
				<li><b>Floyd's algorithm</b> simply checks all of the possibilities in a triple loop.</li>
				<li><CodePre language="java">{`
/** Compute all-pairs shortest paths */
static void Floyd(Graph G, int[][] D) {
	for (int i=0; i&lt;G.n(); i++) { // Initialize D with weights
		for (int j=0; j&lt;G.n(); j++) {
			if (G.weight(i, j) != 0) { D[i][j] = G.weight(i, j); }
		}
	}
	for (int k=0; k&lt;G.n(); k++) { // Compute all k paths
		for (int i=0; i&lt;G.n(); i++) {
			for (int j=0; j&lt;G.n(); j++) {
				if ((D[i][k] != Integer.MAX_VALUE) &&
				(D[k][j] != Integer.MAX_VALUE) &&
				(D[i][j] > (D[i][k] + D[k][j])))
				{D[i][j] = D[i][k] + D[k][j];}
			}
		}
	}
}
				`}</CodePre></li>
				<li>At the end of the algorithm, array \(D\) stores the all-pairs shortest distances.</li>
				<li>This algorithm requires \(\Theta(|V|^3)\) running time.</li>
			</SubList></li>
		</ul>
	</div>
</div>

</>