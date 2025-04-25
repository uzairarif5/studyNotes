import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { CodePre } from "../../articleRelatedStuff/Code";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";

export const title = "Useful Information For Algorithms";
export const sourcesColor = {19: null, 20: null};
export const additionalResources = [73];

export const content = <>
<h1>Useful Information For Algorithms</h1>

<h2 id="Sorting">Sorting</h2>
<div className="content">
	<div style={{width:"49%", marginLeft:"0.5%", float: "left"}}>
		<ul>
			<li>A sorting algorithm is said to be <b>stable</b> if it does not change the relative ordering of records with identical key values.</li>
			<li>When comparing two sorting algorithms, the simplest approach would be to program both and measure their running times. This is an example of <b>empirical comparison</b>. However, doing fair empirical comparisons can be tricky because the running time for many sorting algorithms depends on specifics of the input values.</li>
			<li>When analyzing sorting algorithms, it is traditional to measure the cost by counting the number of comparisons made between keys.</li>
			<li><a href='https://en.wikipedia.org/wiki/Sorting_algorithm#Exchange_sort'><b>Exchange sort</b> works by comparing the first element with all elements above it, swapping where needed, thereby guaranteeing that the first element is correct for the final sort order; it then proceeds to do the same for the second element, and so on.</a></li>
			<li><b>Insertion Sort:</b><SubList>
				<li>Imagine that you have a stack of phone bills from the past two years and that you wish to organize them by date. A fairly natural way to do this might be to look at the first two bills and put them in order. Then take the third bill and put it into the right order with respect to the first two, and so on. As you take each bill, you would add it to the sorted pile that you have already made. This naturally intuitive process is the inspiration for our first sorting algorithm, called <b>Insertion Sort</b>.</li>
				<li><figure>
					<ImgComp src={require("./theory_of_algorithms_pics/1.PNG")} style={{width: "60%"}}/>
					<figcaption>An illustration of Insertion Sort</figcaption>
				</figure></li>
				<li>Insertion
					Sort iterates through a list of records. Each record is inserted in turn at the correct
					position within a sorted list composed of those records already processed.</li>
				<li><CodePre language="java">{`
static &lt;E extends Comparable&lt;? super E>>
void inssort(E[] A) {
	for (int i=1; i&lt;A.length; i++) // Insert i'th record
		for (int j=i; (j>0) && (A[j].compareTo(A[j-1])&lt;0); j--)
			DSutil.swap(A, j, j-1);
}
				`}</CodePre></li>
				<li>The number of comparisons (through the <code>for</code> loop) is one the first time , two the second time, and so on:</li>
				<MathStuff>$${"\\sum^n_{i=2} i \\approx \\frac{n^2}{2} = \\Theta(n^2)"}$$</MathStuff>
				<li>The average case should be about half the cost of the worst case, or around \(n^2/4\), which is still \(\Theta(n^2)\).</li>
				<li>The cost for Insertion Sort in the best case is \(\Theta(n)\).</li>
			</SubList></li>
			<li><b>Bubble Sort:</b><SubList>
				<li>Bubble Sort consists of a simple double for loop.</li>
				<li><CodePre language="java">{`
static &lt;E extends Comparable&lt;? super E>>
void bubblesort(E[] A) {
	for (int i=0; i&lt;A.length-1; i++) // Bubble up i'th record
		for (int j=A.length-1; j>i; j--)
			if ((A[j].compareTo(A[j-1]) &lt; 0))
				DSutil.swap(A, j, j-1);
}
				`}</CodePre></li>
				<li>The first iteration of the
					inner for loop moves through the record array from bottom to top, comparing
					adjacent keys. If the lower-indexed key's value is greater than its higher-indexedneighbor, then the two values are swapped. Once the smallest value is encountered, this process will cause it to "bubble" up to the top of the array.</li>
				<li><figure>
					<ImgComp src={require("./theory_of_algorithms_pics/2.PNG")} style={{width: "70%"}}/>
					<figcaption>An illustration of Bubble Sort. Each column shows the array after
						the iteration with the indicated value of \(i\) in the outer for loop.</figcaption>
				</figure></li>
				<li>Bubble Sort's running time is roughly the same in the best, average, and worst
					cases (\(\Theta(n^2)\)).</li>
			</SubList></li>
			<li><b>Selection Sort:</b><SubList>
				<li>Selection Sort first finds the smallest key in an unsorted list, then the second
					smallest, and so on. Its unique feature is that there are few record swaps.</li>
				<li>To find
					the next smallest key value requires searching through the entire unsorted portion
					of the array, but only one swap is required to put the record in place. . Thus, the total
					number of swaps required will be \(n - 1\) (we get the last record in place).</li>
				<li><CodePre language="java">{`
static &lt;E extends Comparable&lt;? super E>>
void selectsort(E[] A) {
	for (int i=0; i&lt;A.length-1; i++) { // Select i'th record
		int lowindex = i; // Remember its index
		for (int j=A.length-1; j>i; j--) // Find the least value
			if (A[j].compareTo(A[lowindex]) &lt; 0)
				lowindex = j; // Put it in place
		DSutil.swap(A, i, lowindex);
	}
}
				`}</CodePre></li>
				<li>Selection Sort (as written here) is essentially a Bubble Sort, except that rather
					than repeatedly swapping adjacent values to get the next smallest record into place,
					we instead remember the position of the element to be selected and do one swap
					at the end.</li>
				<li>The number of comparisons is still \(\Theta(n^2)\), but the number of swaps is much less than that required by bubble sort.</li>
			</SubList></li>
			<li>One way to keep the cost of swapping records low is to have each element of the array store a pointer to a record rather than store the record itself.</li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li><ImgComp src={require("./theory_of_algorithms_pics/3.PNG")} style={{width: "50%"}}/></li>
			<li><b>Shellsort:</b><SubList>
				<li>It is also sometimes called the <b>diminishing increment</b> sort.</li>
				<li>Shellsort breaks the array of elements into "virtual" sublists. Each sublist is sorted using an Insertion Sort.</li>
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
	
/** Modified Insertion Sort for varying increments */
static void inssort2(int[] A, int start, int incr) {
	for (int i=start+incr; i&lt;A.length; i+=incr)
		for (int j=i; (j>=incr) && (A[j] &lt; A[j-incr]); j-=incr)
			Swap.swap(A, j, j-incr);
}
				`}</CodePre></li>
				<li>One possible implementation for Shellsort is to use increments that are all powers of two. We start by picking as \(I\) the largest power of two less than \(n\).</li>
				<li>This will generate \(I\) sublists of 2 records each. If there were 16 records in the array indexed from 0 to 15, the first sublist would be the records in positions 0 and 8, the second is in positions 1 and 9, and so on.</li>
				<li><figure>
					<ImgComp src={require("./theory_of_algorithms_pics/4.PNG")} style={{width: "80%"}}/>
					<figcaption>Here, the increment is 8, so there are 8 sublists of size 2.</figcaption>
				</figure></li>
				<li>At the end of the first pass, the resulting array is "a little better sorted".</li>
				<li>The second pass of Shellsort looks at fewer, bigger sublists. In our example, the second pass will have an increment of size 4.</li>
				<li><figure>
					<ImgComp src={require("./theory_of_algorithms_pics/5.PNG")} style={{width: "80%"}}/>
					<figcaption>The second pass sorts 4 sublists of size 4 and increment 4.</figcaption>
				</figure></li>
				<li>At the end of processing sublists with increment 4, the array is "even more sorted".</li>
				<li><figure>
					<ImgComp src={require("./theory_of_algorithms_pics/6.PNG")} style={{width: "80%"}}/>
					<figcaption>The third pass sorts 2 sublists of size 8 and increment 2. The fourth pass sorts 1 list of size 16 and increment 1 (a regular Insertion Sort).</figcaption>
				</figure></li>
				<li>Shellsort's final pass will always use an increment of 1, but the list is far closer to sorted than it was at the start, so this final call to Insertion Sort runs far faster than if we had run Insertion Sort on the original array.</li>
			</SubList></li>
			<li><b>Mergesort:</b><SubList>
				<li>Mergesort is one of the simplest sorting algorithms conceptually, and has good
					performance both in the asymptotic sense and in empirical running time.</li>
				<li>Even though it is based on a simple concept, it is relatively difficult to implement in practice.</li>
				<li><figure>
					<ImgComp src={require("./theory_of_algorithms_pics/7.PNG")} style={{width: "55%"}}/>
					<figcaption>An illustration of Mergesort;  mergesort will recursively subdivide the list into sublists of one
						element each, then recombine the sublists. </figcaption>
				</figure></li>
				<li>A pseudocode sketch of Mergesort is as follows:</li>
				<li><CodePre language="plaintext">{`
List mergesort(List inlist) {
	if (inlist.length() &lt;= 1) return inlist;;
	List L1 = half of the items from inlist;
	List L2 = other half of the items from inlist;
	return merge(mergesort(L1), mergesort(L2));
}
				`}</CodePre></li>
				<li>The hardest step to understand about Mergesort is the <code>merge</code> function. The <code>merge</code> function starts by examining the first record of each sublist and picks the smaller value as the smallest record overall. This smaller value is removed from its sublist and placed into the output list.</li>
				<li><CodePre language="java">{`
static &lt;E extends Comparable&lt;? super E>>
void mergesort(E[] A, E[] temp, int l, int r) {
	int mid = (l+r)/2; // Select midpoint
	if (l == r) return; // List has one element
	mergesort(A, temp, l, mid); // Mergesort first half
	mergesort(A, temp, mid+1, r); // Mergesort second half
	for (int i=l; i&lt;=r; i++) // Copy subarray to temp
	temp[i] = A[i];
	// Do the merge operation back to A
	int i1 = l; int i2 = mid + 1;
	for (int curr=l; curr&lt;=r; curr++) {
		if (i1 == mid+1) // Left sublist exhausted
		A[curr] = temp[i2++];
		else if (i2 > r) // Right sublist exhausted
		A[curr] = temp[i1++];
		else if (temp[i1].compareTo(temp[i2])&lt;0) // Get smaller
		A[curr] = temp[i1++];
		else A[curr] = temp[i2++];
	}
}                    
				`}</CodePre></li>
				<li>Note that this approach requires twice the amount of space
					as any of the sorting methods presented so far, which is a serious disadvantage for
					Mergesort.</li>
				<li>Mergesort is recursively called until subarrays of size 1 have
					been created, requiring \(log n\) levels of recursion.</li>
				<li>An optimized Mergesort  reverses the order of the second subarray during the initial copy. Now the current positions of the two subarrays work inwards from the ends, allowing the end of each subarray to act as a sentinel for the other (see visualization <a href='https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/MergesortImpl.html'>here</a>).</li>
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
				<li>This version also has a second optimization: It uses Insertion Sort to sort small subarrays whenever the size of the array is smaller than a value defined by <code>THRESHOLD</code>.</li>
				<li>At each of the \(\log n\) levels of recursion, \(\Theta(n)\) work is done, for a total cost of \(\Theta(n \log n)\).</li>
			</SubList></li>
			<li>The practicality of using a Binary Search Tree for sorting:<SubList>
				<li>You could insert all of the values to be sorted into
					the BST one by one, then traverse the completed tree using an inorder traversal.
					The output would form a sorted list. </li>
				<li>This approach has a number of drawbacks,
					including the extra space required by BST pointers and the amount of time required
					to insert nodes into the tree.</li>
				<li>The left subtree contains those values in the list less than the root value
					while the right subtree contains those values in the list greater than or equal to the
					root value. Thus, the BST implicitly implements a "divide and conquer" approach
					to sorting the left and right subtrees. Quicksort implements this concept in a much
					more efficient way.</li>
			</SubList></li>
			<li><b>Quicksort:</b><SubList>
				<li><b>Quicksort</b>, when properly implemented, is the fastest
					known general-purpose in-memory sorting algorithm in the average case.</li>
				<li>Quicksort is hampered by exceedingly poor worst-case performance, thus making it inappropriate
					for certain applications.</li>
				<li>Quicksort first selects a value called the pivot. This is conceptually like the
					root node's value in the BST. Assume that the input array contains \(k\) values less
					than the pivot. The records are then rearranged in such a way that the \(k\) values
					less than the pivot are placed in the first, or leftmost, \(k\) positions in the array, and
					the values greater than or equal to the pivot are placed in the last, or rightmost,
					\(n-k\) positions. This is called a <b>partition</b> of the array. </li>
				<li>The values placed in a given
					partition need not (and typically will not) be sorted with respect to each other. All
					that is required is that all values end up in the correct partition.</li>
				<li><CodePre language="java">{`
static &lt;E extends Comparable&lt;? super E>>
void qsort(E[] A, int i, int j) { // Quicksort
	int pivotindex = findpivot(A, i, j); // Pick a pivot
	DSutil.swap(A, pivotindex, j); // Stick pivot at end
	// k will be the first position in the right subarray
	int k = partition(A, i, j-1, A[j]);
	DSutil.swap(A, k, j); // Put pivot in place
	if ((k-i) > 1) qsort(A, i, k-1); // Sort left partition
	if ((j-k) > 1) qsort(A, k+1, j); // Sort right partition
}                        
				`}</CodePre></li>
				<li>Parameters <code>i</code> and <code>j</code> define the left and right indices, respectively, for the subarray being sorted. The initial call to <code>quicksort</code> would be <code>quicksort(array, 0, n-1)</code>.</li>
				<li>Function <code>partition</code> will move records to the appropriate partition and then return <code>k</code>. Note that the pivot value is initially placed at the end of the array (position <code>j</code>).</li>
				<li>Selecting a pivot can be done in many ways. Here is a simple <code>findpivot</code> function:</li>
				<li><CodePre language="java">{`
static int findpivot(Comparable[] A, int i, int j)
{ return (i+j)/2; }
				`}</CodePre></li>
				<li>We now turn to function <code>partition</code>. Because we do not know in advance how many keys are less than the pivot, we use a clever algorithm that moves indices inwards from the ends of the subarray, swapping values as necessary until the two indices meet.</li>
				<li><CodePre language="java">{`
static int partition(Comparable[] A, int left, int right, Comparable pivot) {
	while (left &lt;= right) { // Move bounds inward until they meet
		while (A[left].compareTo(pivot) &lt; 0) { left++; }
		while ((right >= left) && (A[right].compareTo(pivot) >= 0))
		{ right--; }
		if (left &lt; right) { Swap.swap(A, left, right); }
	}
	return left; // Return first position in right partition
}                      
				`}</CodePre></li>
				<li>For a good visualization, <a href='https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/Quicksort.html'>click here</a>, and for a good video, <a href='https://www.youtube.com/watch?v=Hoixgm4-P4M'>click here</a>.</li>
				<li>Note the check that <code>right {String.fromCharCode(62)}= left</code> in the second inner <code>while</code> loop. This ensures that right does not run off the low end of the partition in the case where the pivot is the least value in that partition.</li>
				<li>Function <code>partition</code> returns the first index of the right partition (the place where <code>left</code> ends at) so that the subarray bound for the recursive calls to qsort can be determined.</li>
				<li><ImgComp src={require("./theory_of_algorithms_pics/9.PNG")} style={{width: "70%"}}/></li>
				<li>In the worst case, Quicksort is \(\Theta(n^2)\). If the pivot values are selected at random, then this is extremely unlikely to happen. When selecting the middle position of the current subarray, it is still unlikely to happen.</li>
				<li>Quicksort's best case occurs when findpivot always breaks the array into two equal halves. In the best case, the result will be \(\log n\) levels of partitions. At each level, all partition steps for that level do a total of \(n\) work, for an overall cost of \(n \log n\) work when Quicksort finds perfect pivots.</li>
				<li>Quicksort has average-case cost \(\Theta(n \log n)\).</li>
			</SubList></li>
			<li><b>Heapsort:</b><SubList>
				<li><b>Heapsort</b> is based on the heap data structure.</li>
				<li>The complete binary tree is balanced, its array representation is space efficient, and we can load all values into the tree at once,
					taking advantage of the efficient <code>buildheap</code> function.</li>
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
				<li>Heapsort has one special advantage over the other sorts studied so far. Building the heap is relatively cheap, requiring \(\Theta(n)\) time. Removing the maximum-valued record from the heap requires \(\Theta(\log n)\)
					time in the worst case. Thus, if we wish to find the \(k\) records with the largest key values in an array, we can do so in time \(\Theta(n+k \log n)\).</li>
				<li>A disadvantage is that it is not stable (i.e., records with equal keys might not remain in the same order after sorting).</li>
				<li>A sorting algorithm based on max-heaps is quite straightforward. First we use the heap building algorithm to convert the array into max-heap order. Then we repeatedly remove the maximum value from the heap, restoring the heap property each time that we do so, until the heap is empty.</li>
				<li>Note that each time
					we remove the maximum element from the heap, it is placed at the end of the
					array.</li>
				<li><ImgComp src={require("./theory_of_algorithms_pics/8.PNG")} style={{width: "55%"}}/></li>
			</SubList></li>
			<li><b>Binsort:</b><SubList>
				<li>A sort that works by taking each record and placing it into a bin based on its value. The bins are then gathered up in order to sort the list.</li>
				<li>Consider the following code:</li>
				<li><CodePre language="java">{`
for (i=0; i&lt;A.length; i++)
	B[A[i]] = A[i];
				`}</CodePre></li>
				<li>We can extend this simple version of the Binsort algorithm to be more useful.</li>
				<li>The simplest extension is to allow for duplicate values among the keys. This can be done by turning array slots into arbitrary-length bins by turning array <code>B</code> into an array of linked lists.</li>
				<li>A second extension allows for a key range greater than \(n\). For example, a set of \(n\) records might have keys in the range \(1\) to \(2n\). The only requirement is that each possible key value have a corresponding bin in <code>B</code>.</li>
				<li><CodePre language="java">{`
static void binsort(int[] A) {
	List[] B = new LinkedList[MaxKeyValue+1];
	int item;
	for (int i=0; i&lt;=MaxKeyValue; i++)
		B[i] = new LinkedList();
	for (int i=0; i&lt;A.length; i++) B[A[i]].append(A[i]);
	int pos = 0;
	for (int i=0; i&lt;=MaxKeyValue; i++)
		for (B[i].moveToStart(); (item = B[i].getValue()) != -1; B[i].next())
			A[pos++] = item;
}
				`}</CodePre></li>
				<li>This version of Binsort can sort any collection of records whose key values fall in the range from 0 to <code>MaxKeyValue</code>.</li>
				<li>Taking all of the records out of the bins requires Binsort to look at every bin to see if it contains a record. Thus, the algorithm must process <code>MaxKeyValue</code> bins, regardless of how many of them actually hold records.</li>
				<li> Suppose that <code>MaxKeyValue</code> \(=n^2\). In this case, the total amount of work done will be \(\Theta(n+n^2)=\Theta(n^2)\). This results in a poor sorting algorithm.</li>
				<li>A further generalization to Binsort would yield a <b>bucket sort</b>. Here, each bin (now called a bucket) is associated with not just one key, but rather a range of key values.</li>
			</SubList></li>
			<li><b>Radix Sort:</b><SubList>
				<li>Consider a sequence of records with keys in the range 0 to 99. If we have ten bins available, we can first assign records to bins by taking their key value modulo 10. Thus, every key will be assigned to the bin matching its rightmost decimal digit.</li>
				<li>We can then take these records from the bins <b>in order</b>, and reassign them to the bins on the basis of their leftmost (10's place) digit.</li>
				<li>This is an example of a <b>Radix Sort</b>, so called because the bin computations are based on the <b>radix</b> or the <b>base</b> of the key values.</li>
				<li>This sorting algorithm can be extended to any number of keys in any key range. We simply assign records to bins based on the keys' digit values working from the rightmost digit to the leftmost. If there are \(k\) digits, then this requires that we assign keys to bins \(k\) times.</li>
				<li>We would prefer to sort an array of values and avoid processing linked lists. If we knew how many values would be in each bin, then an auxiliary array of size \(r\)
					can be used to define these lengths and guide us to were each one starts in the output array.</li>
				<li><CodePre language="java">{`
static void radix(Integer[] A, int k, int r) {
	Integer[] B = new Integer[A.length];
	int[] count = new int[r];
	// Count[i] stores number of records with digit value i
	int i, j, rtok;
	
	for (i=0, rtok=1; i&lt;k; i++, rtok*=r) { // For k digits
		for (j=0; j&lt;r; j++) { count[j] = 0; }    // Initialize count
	
		// Count the number of records for each bin on this pass
		for (j=0; j&lt;A.length; j++) { count[(A[j]/rtok)%r]++; }
	
		// count[j] will be index in B for last slot of bin j.
		// First, reduce count[0] because indexing starts at 0, not 1
		count[0] = count[0] - 1;
		for (j=1; j&lt;r; j++) { count[j] = count[j-1] + count[j]; }
	
		// Put records into bins, working from bottom of bin
		// Since bins fill from bottom, j counts downwards
		for (j=A.length-1; j>=0; j--) {
			B[count[(A[j]/rtok)%r]] = A[j];
			count[(A[j]/rtok)%r] = count[(A[j]/rtok)%r] - 1;
		}
		for (j=0; j&lt;A.length; j++) { A[j] = B[j]; } // Copy B back
	}
}
				`}</CodePre></li>
				<li>The first inner for loop initializes array count.</li>
				<li> Variable <code>rtok</code> stores \(r^i\) for use in bin computation on the \(i\)'th iteration. </li>
				<li>The second loop counts the number of records to be assigned to each bin.</li>
				<li>The third loop sets the values in count to their proper indices within array \(B\).</li>
				<li><ImgComp src={require("./theory_of_algorithms_pics/10.PNG")} style={{width: "70%"}}/></li>
				<li>Note that the index stored in <code>count[j]</code> is the last index for bin j.</li>
				<li>The fourth loop assigns the records to the bins (within array \(B\)).</li>
				<li>The final loop simply copies the records back to array \(A\) to be ready for the next pass.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2>Analysis Techniques</h2>
<div className="content">
	<div style={{width:"49%", marginLeft:"0.5%", float: "left"}}>
		<ul>
			<li>Many analyses of iterative algorithms use a summation to model the cost of a
				loop.</li>
			<li>The simple summation \(\left[ \sum^{"{n}"}_{"{i=1}"}i \right]\) is equal to \(\frac{"{n(n+1)}{2}"}\).</li>
			<li>The summation \(\left[ \sum^{"{n}_{i=0}"} ar^i \right]\) has teh solution \(\frac{"{a(1-r^{n+1})}{1-r}"}\), where \(r \ne 1\).</li>
		</ul>
		<h3>Amortized Analysis</h3>
		<ul>
			<li><u>Defintion:</u><SubList>
				<li><b>Amortized analysis:</b> The analysis for a series of operations taken as a whole.</li>
				<li>Rather than focusing on the individual cost of each operation independently and summing them, amortized analysis looks at the cost of the entire series and "charges" each individual operation with a hare of the total cost.</li>
			</SubList></li>
			<li>Amortized analysis in the case of a series of sequential searches in an unsorted array:<SubList>
				<li>For \(n\) random searches, the average-case cost for each search is \(n/2\), and so the expected total cost for the series is \(n^2/2\).</li>
				<li>Unfortunately, in the worst case all of the searches would be to the last item in the array. In this case, each search costs n for a total worst-case cost of \(n^2\).</li>
				<li>Compare this to the cost for a series of n searches such that each item in the array is searched for precisely once. The total number of searches, in the best, average, and worst case, for this problem must be \(\sum^n_{"{i=i}"} i ≈ n^2/2\).</li>
			</SubList></li>
			<li>A useful concept for amortized analysis is illustrated by a simple variation on the stack data structure:<SubList>
				<li>The <code>pop</code> function is slightly modified to take a second parameter \(k\) indicating that \(k\) pop operations are to be performed. This revised <code>pop</code> function is called <code>multipop</code>.</li>
				<li>The key to an amortized analysis of this problem lies in the concept of <b>potential</b>.</li>
				<li>At any given time, a certain number of items may be on the stack. The cost for <code>multipop</code> can be no more than this number of items.</li>
				<li>Each call to <code>push</code> places
					another item on the stack, which can be removed by only a single <code>multipop</code> operation. Thus, each call to <code>push</code> raises the potential of the stack by one item.</li>
				<li>The sum of costs for all calls to <code>multipop</code> can never be more than the total <b>potential</b> of
					the stack (aside from a constant time cost associated with each call to multipop
					itself).</li>
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
			{/*
			<li>Using amortized analysis to prove a relationship between the cost of the <b>move-to-front self-organizing list heuristic</b> and the cost for the <b>optimal static ordering of the list</b>:<SubList>
				<li><b>Self-organizing lists</b> modify the order of records within the list based on the actual pattern of record access. </li>
				<li>Self-organizing lists use a heuristic for deciding how to to reorder the list. Here are three traditional heuristics:<SubList numbered={true}>
					<li>The most obvious way to keep a list ordered by frequency would be to store a count of accesses to each record and always maintain records in this order. This method will be referred to as <b>count</b>.</li>
					<li>Bring a record to the front of the list when it is found, pushing all the other records back one position. This is called <b>move-to-front</b>. This heuristic is easy to implement if the records are stored using a linked list. When records are stored in an array, bringing a record forward from near the end of the array will result in a large number of records (slightly) changing position.</li>
					<li>Swap any record found with the record immediately preceding it in the list. This heuristic is called <b>transpose</b>. Frequently used records will, over time, move to the front of the list.</li>
				</SubList></li>
				<li>For a series of search operations, the minimum cost for a static list results when the list is sorted by frequency of access to its records.</li>
				<li>Move-to-front's cost is bounded in the sense that it requires at most twice the number of accesses required by the optimal static ordering for \(n\) records when at least \(n\) searches are performed.</li>
				<li>For \(m\) searches, there must be exactly \(m\) successful comparisons for both the self-organizing list and the static list.</li>
				<li>For any sequence of searches \(S\), the total number of (unsuccessful) comparisons between key \(A\) and key \(B\) is identical to the number of comparisons between \(A\) and \(B\) required for the subsequence of \(S\) made up only of searches for \(A\) or \(B\). Call this subsequence \(S_{AB}\).</li>
				<li className="research">The number of unsuccessful comparisons between \(A\) and \(B\) made by the move-to-front heuristic on subsequence \(S_{AB}\) is at most twice the number of unsuccessful comparisons between \(A\) and \(B\) required when \(S_{AB}\) is applied to the optimal static ordering for the list. To see this, assume that \(S_{AB}\) contains \(i A\)'s and \(j B\)'s, with \(i≤j\).</li>
				<li className="research">Under the optimal static ordering, \(i\) unsuccessful comparisons are required because \(B\) must appear before \(A\) in the list (because its access frequency is higher). Move-to-front will yield an unsuccessful comparison whenever the request sequence changes from \(A\) to \(B\) or from \(B\) to \(A\). The total number of such changes possible is \(2i\) because each change involves an \(A\) and each \(A\) can be part of at most two changes.</li>
				<li className="research">Because the total number of unsuccessful comparisons required by move-to-front for any given pair of keys is at most twice that required by the optimal static ordering, the total number of unsuccessful comparisons required by move-to-front for all pairs of keys is also at most twice as high. Because the number of successful comparisons is the same for both methods, the total number of comparisons required by move-to-front is less than twice the number of comparisons required by the optimal static ordering.</li>
			</SubList></li>
			*/}
		</ul>       
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Recurrence Relations</h3>
		<ul>
			<li>Recurrence relations are often used to model the cost of recursive functions.</li>
			<li>The first approach to solving recurrences is to guess the answer and then attempt to prove it correct. If a correct upper or lower bound estimate is given, an easy induction proof will verify this fact. If the proof is successful, then try to tighten the bound. If the induction proof fails, then loosen the bound and try again. <u>Example:</u><SubList>
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
			<li><b>Expanding the recurrence</b>:<SubList>
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
</div>

<h2 id="hashing">Hashing</h2>
<div className="content">
	<div style={{width:"49%", marginLeft:"0.5%", float: "left"}}>
		<ul>
			<li><u>Definition:</u><SubList>
				<li><b>Hashing</b> is a method for storing and retrieving records from a database.</li>
				<li>It lets you insert, delete, and search for records based on a search key value. When properly implemented, these operations can be performed in constant time.</li>
				<li>A properly tuned hash system typically looks at only one or two records for each search, insert, or delete operation.</li>
				<li>A hash system stores records in an array called a <b>hash table</b> (called <code>HT</code>).</li>
				<li>A position in the hash table is also known as a <b>slot</b>.</li>
			</SubList></li>
			<li>Basic understanding of how it works:<SubList>
				<li>Hashing works by performing a computation on a search key \(K\) in a way that is intended to identify the position in <code>HT</code> that contains the record with key \(K\).</li>
				<li>The function that does this calculation is called the <b>hash function</b>. Since hashing schemes place records in the table in whatever order satisfies the needs of the address calculation, records are not ordered by value.</li>
				<li>The number of slots in hash table <code>HT</code> will be denoted by the variable \(M\) with slots numbered from \(0\) to \(M-1\).</li>
				<li>The goal for a hashing system is to arrange things such that, for any key value \(K\) and some hash function \(h\), \(i=h(K)\) is a slot in the table such that \(0 \le i \lt M\), and we have the key of the record stored at <code>HT[i]</code> equal to \(K\).</li>
			</SubList></li>
			<li>Hashing is not good for applications where multiple records with the same key value are permitted and also not a good method for answering range searches.</li>
			<li>Hashing is most appropriate for answering the question: <i>"What record, if any, has key value \(K\)?"</i>.</li>
			<li>In most applications, there are many more values in the key range than there are slots in the hash table.</li>
			<li>In most applications, there are many more values in the key range than there are slots in the hash table:<SubList>
				<li>Suppose the key can take any value in the range 0 to 65,535, and that we expect to store approximately 1000 records at any given time.</li>
				<li>It is impractical in this situation to use a hash table with 65,536 slots, because then the vast majority of the slots would be left empty. We must devise a hash function that allows us to store the records in a much smaller table.</li>
				<li>Because the key range is larger than the size of the table, at least some of the slots must be mapped to from multiple key values.</li>
				<li>Given a hash function h and two keys \(k1\) and \(k2\), if \(h(k1)=β=h(k2)\) where \(β\) is a slot in the table, then we say that \(k1\) and \(k2\) have a <b>collision</b> at slot \(β\) under hash function \(h\).</li>
			</SubList></li>
			<li>Finding a record with key value K in a database organized by hashing follows a two-step procedure:<SubList numbered={true}>
				<li>Compute the table location \(h(K)\).</li>
				<li>Starting with slot \(h(K)\), locate the record containing key \(K\) using (if necessary) a <b>collision resolution policy</b>.</li>
			</SubList></li>
			<li>We would like to pick a hash function that maps keys to slots in a way that makes each slot in the hash table have equal probablility of being filled for the actual set keys being used. Unfortunately, we normally have no control over the distribution of key values for the actual records in a given database or collection.</li>
		</ul>
		<h3>Sample Hash Function</h3>
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
			<li>A Simple Hash Function for Strings:<SubList>
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
				<li>This is an example of the <b>folding method</b>, a method that  breaks the string into pieces, converts the letter(s) to an integer value, and summing up the pieces.</li>
				<li>If the sum is not sufficiently large, then the modulus operator will yield a poor distribution. <u>Example:</u><SubList>
					<li>The ASCII value for 'A' is 65 and 'Z' is 90, sum will always be in the range 650 to 900 for a string of ten upper case letters.</li>
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
				<li>If the string "aaaabbbb" is passed to <code>sfold</code>, then the first four bytes ("aaaa") will be interpreted as the integer value 1,633,771,873, and the next four bytes ("bbbb") will be interpreted as the integer value 1,650,614,882. Their sum is 3,284,386,755 (when treated as an unsigned integer).</li>
				<li>For any sufficiently long string, the sum for the integer quantities will typically cause a 32-bit integer to overflow (thus losing some of the high-order bits) because the resulting values are so large. But this causes no problems when the goal is to compute a hash function.</li>
				<li>The reason that hashing by summing the integer representation of four letters at a time is superior to summing one letter at a time is because the resulting values being summed have a bigger range. This still only works well for strings long enough (say at least 7-12 letters), but the original method would not work well for short strings either.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Collision Resolution Techniques</h3>
		<ul>
			<li>Collision resolution techniques can be broken into two classes: <b>open hashing</b> (also called <b>separate chaining</b>) and <b>closed hashing</b> (also called <b>open addressing</b>).</li>
			<li>The difference between the two has to do with whether collisions are stored outside the table (open hashing), or whether collisions result in storing one of the records at another slot in the table (closed hashing).</li>
			<li><b>Open hashing:</b><SubList>
				<li>The simplest form of open hashing defines each slot in the hash table to be the head of a linked list.</li>
				<li>All records that hash to a particular slot are placed on that slot's linked list.</li>
				<li>Ordering the list by key value provides an advantage in the case of an unsuccessful search, because we know to stop searching the list once we encounter a key that is greater than the one being searched for.</li>
				<li>Given a table of size \(M\) storing \(N\) records, the hash function will (ideally) spread the records evenly among the \(M\) positions in the table, yielding on average \(N/M\) records for each list.</li>
				<li>The average cost for hashing should be \(\Theta(1)\). However, if clustering causes many records to hash to only a few of the slots, then the cost to access a record will be much higher because many elements on the linked list must be searched.</li>
			</SubList></li>
			<li><b>Bucket Hashing:</b><SubList>
				<li>One implementation for closed hashing groups hash table slots into <b>buckets</b>. The \(M\) slots of the hash table are divided into \(B\) buckets, with each bucket consisting of \(M/B\) slots.</li>
				<li>If a bucket is entirely full, then the record is stored in an <i>overflow bucket</i> of infinite capacity at the end of the table. All buckets share the same overflow bucket.</li>
				<li>A good implementation will use a hash function that distributes the records evenly among the buckets so that as few records as possible go into the overflow bucket.</li>
				<li>When searching for a record, the first step is to hash the key to determine which bucket should contain the record. The records in this bucket are then searched. If the desired key value is not found and the bucket still has free slots, then the search is complete. If the bucket is full, then it is possible that the desired record is stored in the overflow bucket.</li>
				<li>A simple variation on bucket hashing is to hash a key value to some slot in the hash table as though bucketing were not being used. If the home position is full, then we search through the rest of the bucket to find an empty slot. If all slots in this bucket are full, then the record is assigned to the overflow bucket.</li>
			</SubList></li>
			<li><b>Simple linear probing:</b><SubList>
				<li>We can view any collision resolution method as generating a sequence of hash table slots that can potentially hold the record. The first slot in the sequence will be the home position for the key. If the home position is occupied, then the collision resolution policy goes to the next slot in the sequence. If this is occupied as well, then another slot must be found, and so on. This sequence of slots is known as the <b>probe sequence</b>, and it is generated by some <b>probe function</b>.</li>
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
				<li>Function <code>p</code> has two parameters, the key \(k\) and a count \(i\) of where in the probe sequence we wish to be. That is, to get the first position in the probe sequence after the home slot for key \(K\), we call \(p(K,1)\). For the next slot in the probe sequence, call \(p(K,2)\).</li>
				<li>The simplest approach to collision resolution is simply to move down the table from the home slot until a free slot is found. This is known as <b>linear probing</b>. The probe function for simple linear probing is \(p(K,i)=i\). That is, the \(i\)th offset on the probe sequence is just \(i\), meaning that the \(i\)th step is simply to move down \(i\) slots in the table.</li>
				<li>The ideal behavior for a collision resolution mechanism is that each empty slot in the table will have equal probability of receiving the next record inserted (assuming that every slot in the table has equal probability of being hashed to initially).</li>
				<li>Linear probing is one of the worst collision resolution methods. The tendency of linear probing to cluster items together is known as <b>primary clustering</b>. Small clusters tend to merge into big clusters, making the problem worse</li>
			</SubList></li>
			<li><b>Linear Probing by Steps:</b><SubList>
				<li>How can we avoid primary clustering? One possible improvement might be to use linear probing, but to skip slots by some constant \(c\) (other than 1). This would make the probe function \(p(K,i)=ci\), and so the ith slot in the probe sequence will be \((h(K)+ic) \mod M\).</li>
				<li>Constant \(c\) must be relatively prime to \(M\) to generate a linear probing sequence that visits all slots in the table (that is, \(c\) and \(M\) must share no factors). For a hash table of size \(M=10\), if \(c\) is any one of 1, 3, 7, or 9, then the probe sequence will visit all slots for any key.</li>
				<li>Consider the situation where \(c=2\) and we wish to insert a record with key \(k1\) such that \(h(k1)=3\). The probe sequence for \(k1\) is 3, 5, 7, 9, and so on. If another key \(k2\) has home position at slot 5, then its probe sequence will be 5, 7, 9, and so on. The probe sequences of \(k1\) and \(k2\) are linked together in a manner that contributes to clustering. In other words, linear probing with a value of \(c \gt 1\) does not solve the problem of primary clustering.</li>
			</SubList></li>
			<li><b>Pseudo-Random Probing:</b><SubList>
				<li>In <b>pseudo-random probing</b>, the \(i\)th slot in the probe sequence is \((h(K)+r_i) \mod M\) where \(r_i\) is the \(i\)th value in a random permutation of the numbers from 1 to \(M-1\).</li>
				<li>All inserts and searches must use the same sequence of random numbers. The probe function would be \(p(K,i)=Permutation[i]\).</li>
			</SubList></li>
			<li><b>Quadratic Probing:</b><SubList>
				<li>The probe function is some quadratic function \(p(K,i)=c_1i^2+c_2i+c_3\) for some choice of constants \(c_1\), \(c_2\), and \(c_3\).</li>
				<li>For many hash table sizes, this probe function will cycle through a relatively small number of slots.</li>
				<li>Fortunately, it is possible to get good results from quadratic probing at low cost. The right combination of probe function and table size will visit many slots in the table.</li>
			</SubList></li>
			<li><b>Double Hashing:</b><SubList>
				<li>The probe sequences generated by pseudo-random and quadratic probing (for example) are entirely a function of the home position, not the original key value.</li>
				<li>If two keys hash to the same home position, however, then they will always follow the same probe sequence for every collision resolution method that we have seen so far.</li>
				<li>If the hash function generates a cluster at a particular home position, then the cluster remains under pseudo-random and quadratic probing. This problem is called <b>secondary clustering</b>.</li>
				<li>To avoid secondary clustering, we need to have the probe sequence make use of the original key value. A simple technique for doing this is to return to linear probing by a constant step size for the probe function, but to have that constant be determined by a second hash function, \(h_2\). Thus, the probe sequence would be of the form \(p(K,i)=i \times h_2(K)\). This method is called <b>double hashing</b>.</li>
				<li>A good implementation should ensure that all of the probe sequence constants are relatively prime to the table size \(M\).</li>
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
			</SubList></li>
		</ul>
		<h3>Deletion</h3>
		<ul>
			<li>When deleting records from a hash table, there are two important considerations:<SubList>
				<li>Deleting a record must not hinder later searches. In other words, the search process must still pass through the newly emptied slot to reach records whose probe sequence passed through this slot. Thus, the delete process cannot simply mark the slot as empty, because this will isolate records further down the probe sequence.</li>
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