import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { CodePre } from "../../articleRelatedStuff/Code";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Data Structures And Algorithms Notes (Part 2)";
export const sourcesColor = {19: null, 20: null};

export const content = <>
<h1>Data Structures And Algorithms Notes (Part 2)</h1>

<h2 id="graphs">Graphs</h2>
<div className="content" data-source="20">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul>
			<li><u>Terminologies:</u><SubList>
				<li>A <b>graph</b> \(G = (V, E)\) consists of a set of <b>vertices</b> \(V\) and a set of <b>edges</b> \(E\), such that each edge in \(E\) is a connection between a pair of vertices in \(V\).</li>
				<li>The number  of vertices is written \(|V|\), and the number of edges is written \(|E|\).</li>
				<li>A graph with edges directed from one vertex to another is called a <b>directed graph</b> or <b>digraph</b>. A graph whose edges are not directed is called an <b>undirected graph</b>.</li>
				<li>A graph with labels associated with its vertices is called a <b>labeled graph</b>.</li>
				<li>Associated with each edge may be a cost or <b>weight</b>. Graphs whose edges have weights are said to be <b>weighted</b>.</li>
				<li><figure>
					<ImgComp style={{width:"70%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/6.PNG"}/>
					<figcaption>(a) A graph. (b) A directed graph (digraph). (c) A labeled (directed) graph with weights associated with the edges.</figcaption>
				</figure></li>
				<li>An edge connecting vertices \(U\) and \(V\) is written \((U, V)\). Such an edge is said to be <b>incident</b> on vertices \(U\) and \(V\).</li>
				<li>Two vertices are <b>adjacent</b> if they are joined by an edge. Such vertices are also called <b>neighbors</b>.</li>
				<li>The <b>degree</b> of a vertex is the number of edges it is adjacent with.</li>
				<li>In a directed graph, the <b>out degree</b> for a vertex is the number of neighbors adjacent from it (or the number of edges going out from it), while the <b>in degree</b> is the number of neighbors adjacent to it (or the number of edges coming in to it).</li>
				<li>A sequence of vertices \(v_1, v_2, \ldots, v_n\) forms a <b>path</b> of length \(n - 1\) if there exist edges from \(v_i\) to \(v_i+1\) for \(1 ≤ i &lt; n\).</li>
				<li>A path is <b>simple</b> if all vertices on the path are distinct. The <b>length</b> of a path is the number of edges it contains.</li>
				<li>A <b>cycle</b> is a path of length three or more that connects some vertex \(v_1\) to itself. A cycle is <b>simple</b> if the path is simple, except for the first and last vertices being the same.</li>
				<li>An undirected graph is <b>connected</b> if there is at least one path from any vertex to any other.</li>
				<li>The maximally connected subgraphs of an undirected grraph are called <b>connected components</b>.</li>
				<li>A graph with relatively few edges is called <b>sparse</b>, while a graph with many edges is called <b>dense</b>. A graph containing all possible edges is said to be <b>complete</b>.</li>
				<li>A <b>subgraph \(S\)</b> is formed from graph \(G\) by selecting a subset \(V_s\) of \(G\)'s vertices and a subset \(E_s\) of \(G\)'s edges such that for every edge \(e ∈ E_s\), both vertices of \(e\) are in \(V_s\).</li>
				<li>Any subgraph of \(V\) where all vertices in the graph connect to all other vertices in the subgraph is called a <b>clique</b>.</li>
				<li><figure>
					<ImgComp style={{width:"60%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/7.PNG"}/>
					<figcaption>An undirected graph with three connected components. Vertices 0, 1, 2, 3, and 4 form one connected component. Vertices 5 and 6 form a second connected component. Vertex 7 by itself forms a third connected component.</figcaption>
				</figure></li>
				<li>A graph without cycles is called an <b>acyclic graph</b>. A directed graph without cycles is called a <b>directed acyclic graph</b> or <b>DAG</b>.</li>
				<li className="research">A <b>free tree</b> is a connected, undirected graph with no simple cycles. An equivalent definition is that a free tree is connected and has \(|V| - 1\) edges.</li>
			</SubList></li>
			<li>Representating graphs:<SubList>
				<li>The <b>adjacency matrix</b> for a graph is a \(|V| \times |V|\) array.</li>
				<li>Assume that \(|V| = n\) and that the vertices are labeled from \(v_0\) through \(v_{"{n-1}"}\). Row \(i\) of the adjacency matrix contains entries for vertex \(v_i\).</li>
				<li>Column \(j\) in row \(i\) is marked if there is an edge from \(v_i\) to \(v_j\) and is not marked otherwise. Thus, the adjacency matrix requires one bit at each position.</li>
				<li>Alternatively, if we wish to associate a number with each edge, such as the weight or distance between two vertices, then each matrix position must store that number.</li>
				<li>In either case, the space requirements for the adjacency matrix are \(\Theta(|V|^2)\).</li>
				<li>The second common representation for graphs is the <b>adjacency list</b>. The adjacency list is an array of linked lists. The array is \(|V|\) items long, with position \(i\) storing a pointer to the linked list of edges for Vertex \(v_i\). </li>
				<li><figure>
					<ImgComp style={{width: "60%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/8.PNG"}/>
					<figcaption>(a) A directed graph. (b) The adjacency matrix for the graph of (a). (c) The adjacency list for the graph of (a).</figcaption>
				</figure></li>
				<li>The storage requirements for the adjacency list depend on both the number of edges and the number of vertices in the graph. There must be an array entry for each vertex (even if the vertex is not adjacent to any other vertex and thus has no elements on its linked list), and each edge must appear on one of the lists. Thus, the cost is \(\Theta(|V| + |E|)\).</li>
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
				<li>Vertices are defined by an integer index value. In other words, there is a vertex \(0\), Vertex \(1\), and so on through Vertex \(n-1\).</li>
				<li>Nearly every graph algorithm presented in this chapter will require visits to all neighbors of a given vertex. The neighbors method returns an array containing the indices for the neighboring vertices, in ascending order. The following lines appear in many graph algorithms:</li>
				<li><CodePre language="java">{`
int[] nList = G.neighbors(v);
for (int i=0; i < nList.length; i++) {
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
		for (i=0; i<nodeValues.length; i++) {
			if (matrix[v][i] != 0) { count++; }
		}
		temp = new int[count];
		for (i=0, count=0; i<nodeValues.length; i++) {
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
		for (int i=0; i<n; i++) {
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
		while ((curr.next != null) && (curr.next.vertex < w)) {
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
				<li>Graph traversal algorithms typically begin with a start vertex and attempt to visit the remaining vertices from there. </li>
				<li>Graph traversals must deal with a number of troublesome cases:<SubList opened>
					<li>First, it might not be possible to reach all vertices from the start vertex. This occurs when the graph is not connected.</li>
					<li>Second, the graph might contain cycles, and we must make sure that cycles do not cause the algorithm to go into an infinite loop.</li>
				</SubList></li>
				<li>Graph traversal algorithms can solve both of these problems by flagging vertices as <code>VISITED</code> when appropriate.</li>
				<li>Once the traversal algorithm completes, we can check to see if all vertices have been processed by checking whether they have the VISITED flag set. If not all vertices are flagged, we can continue the traversal from another unvisited vertex.</li>
				<li>Note that this process works regardless of whether the graph is directed or undirected. To ensure visiting all vertices, <code>graphTraverse</code> could be called as follows on a graph \(G\):</li>
				<li><CodePre language="java">{`
static void graphTraverse(Graph G) {
	int v;
	for (v=0; v<G.nodeCount(); v++) {
		G.setValue(v, null); // Initialize
	}
	for (v=0; v<G.nodeCount(); v++) {
		if (G.getValue(v) != VISITED) {
			doTraversal(G, v);
		}
	}
}
				`}</CodePre></li>
			</SubList></li>
			<li><b>Depth-first search:</b><SubList>
				<li>Our first method for organized graph traversal is called <b>depth-first search (DFS)</b>.</li>
				<li>Whenever a vertex \(v\) is visited during the search, DFS will recursively visit all of \(v\)'s unvisited neighbors.</li>
				<li>Equivalently, DFS will add all edges leading out of \(v\) to a stack. The next vertex to be visited is determined by popping the stack and following that edge.</li>
				<li><CodePre language="java">{`
static void DFS(Graph G, int v) {
	PreVisit(G, v);
	G.setValue(v, VISITED);
	int[] nList = G.neighbors(v);
	for (int i=0; i < nList.length; i++) {
		if (G.getValue(nList[i]) != VISITED) {
			DFS(G, nList[i]);
		}
	}
	PostVisit(G, v);
}
				`}</CodePre></li>
				<li>This implementation contains calls to functions <code>PreVisit</code> and <code>PostVisit</code>. These functions specify what activity should take place during the search.</li>
				<li>DFS processes each edge once in a directed graph. In an undirected graph, DFS processes each edge from both directions. Each vertex must be visited, but only once, so the total cost is \(\Theta(|V|+|E|)\).</li>
			</SubList></li>
			<li><b>Breadth-first search:</b><SubList>
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
		for (int i=0; i < nList.length; i++) {
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
					<ImgComp style={{width:"90%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/9.PNG"}/>
					<figcaption>Seven tasks have dependencies as shown by the directed graph.</figcaption>
				</figure></li>
				<li>Using a DFS:<SubList>
					<li>A topological sort may be found by performing a DFS on the graph. When a vertex is visited, no action is taken (i.e., function <code>PreVisit</code> does nothing). When the recursion pops back to that vertex, function <code>PostVisit</code> prints the vertex. This yields a topological sort in reverse order.</li>
					<li><CodePre language="java">{`
static void topsortDFS(Graph G) {
	int v;
	for (v=0; v<G.nodeCount(); v++) {
		G.setValue(v, null); // Initialize
	}
	for (v=0; v<G.nodeCount(); v++) {
		if (G.getValue(v) != VISITED) {
			tophelp(G, v);
		}
	}
}
	
static void tophelp(Graph G, int v) {
	G.setValue(v, VISITED);
	int[] nList = G.neighbors(v);
	for (int i=0; i < nList.length; i++) {
		if (G.getValue(nList[i]) != VISITED) {
			tophelp(G, nList[i]);
		}
	}
	printout(v);
}
					`}</CodePre></li>
					<li>Using this algorithm starting at J1 and visiting adjacent neighbors in alphabetic order, vertices of the graph are printed out in the order J7, J5, J4, J6, J2, J3, J1. Reversing this yields the topological sort J1, J3, J2, J6, J4, J5, J7.</li>
				</SubList></li>
				<li>Using a queue:<SubList>
					<li>We can implement topological sort using a queue instead of recursion.</li>
					<li>First visit all edges, counting the number of edges that lead to each vertex (i.e., count the number of prerequisites for each vertex). All vertices with no prerequisites are placed on the queue.</li>
					<li>We then begin processing the queue. When vertex \(v\) is taken off of the queue, it is printed, and all neighbors of \(v\) (that is, all vertices that have \(v\) as a prerequisite) have their counts decremented by one.</li>
					<li>Place on the queue any neighbor whose count becomes zero. If the queue becomes empty without printing all of the vertices, then the graph contains a cycle.</li>
					<li><CodePre language="java">{`
static void topsortBFS(Graph G) {   // Topological sort: Queue
	Queue Q = new LQueue(G.nodeCount());
	int[] Count = new int[G.nodeCount()];
	int[] nList;
	int v;
	for (v=0; v<G.nodeCount(); v++) { Count[v] = 0; } // Initialize
	for (v=0; v<G.nodeCount(); v++) { // Process every edge
		nList = G.neighbors(v);
		for (int i=0; i < nList.length; i++) {
			Count[nList[i]]++;  // Add to v's prereq count
		}
	}
	for (v=0; v<G.nodeCount(); v++) {   // Initialize Queue
		if (Count[v] == 0) {    // V has no prerequisites
			Q.enqueue(v);
		}
	}
	while (Q.length() > 0) {    // Process the vertices
		v = (Integer)Q.dequeue();
		printout(v);    // PreVisit for Vertex V
		nList = G.neighbors(v);
		for (int i=0; i<nList.length; i++) {
			Count[nList[i]]--;  // One less prerequisite
			if (Count[nList[i]] == 0) { // This vertex is now free
				Q.enqueue(nList[i]);
			}
		}
	}
}
					`}</CodePre></li>
				</SubList></li>
				<li>The inverse problem of determining whether a proposed node ordering is a valid topological sort of the graph can be solved with an algorithm nearly identical to the queue-based topological sort algorithm:<SubList>
					<li>First process the graph to generate the count array with the incoming degree of each node.</li>
					<li>Assuming that the proposed ordering has a length of \(n\), move through the nodes of the proposed ordering in order from the beginning. For each node \(v\), check that it's count is zero. Then decrement the count by one for each neighbor reachable by \(v\).</li>
					<li>If all nodes have a count of zero when they are visited in this order, then this is a valid topological sort.</li>
				</SubList></li>
			</SubList></li>
			<li>Shortest-Paths Problems:<SubList>
				<li>On a road map, a road connecting two towns is typically labeled with its distance. We can model a road network as a directed graph whose edges are labeled with real numbers. These labels may be called <b>weights</b>, <b>costs</b>, or <b>distances</b>, depending on the application.</li>
				<li><b>Single-source shortest paths problem:</b> Given a graph with weights (or distances) on the edges, and a designated start vertex \(s\), find the shortest path from \(s\) to every other vertex in the graph.</li>
				<li>For unweighted graphs (or whenever all edges have the same cost), the single-source shortest paths can be found using a simple breadth-first search.</li>
				<li>One approach to solving this problem when the edges have differing weights might be to process the vertices in a fixed order.</li>
				<li>Label the vertices \(v_0\) to \(v_{"{n-1}"}\), with \(S=v_0\). When processing Vertex \(v_1\), we take the edge connecting \(v_0\) and \(v_1\). When processing \(v_2\), we consider the shortest distance from \(v_0\) to \(v_2\) and compare that to the shortest distance from \(v_0\) to \(v_1\) to \(v_2\).</li>
				<li>When processing Vertex \(v_i\), we consider the shortest path for Vertices \(v_0\) through \(v_{"{i-1}"}\) that have already been processed.</li>
				<li>A shortest path from \(S\) to \(X\) must have its next-to-last vertex in \(S\):</li>
				<MathStuff>{"d(S,X)=\\min_{U∈S} \\ (d(S,U)+\\textbf{w}(U,X))"}</MathStuff>
				<li>In other words, the shortest path from \(S\) to \(X\) is the minimum over all paths that go from \(S\) to \(U\), then have an edge from \(U\) to \(X\).</li>
				<li>This solution is usually referred to as <b>Dijkstra's algorithm</b>. It works by maintaining a distance estimate \({"\\textbf{D}"}(X)\) for all vertices \(X\) in \(V\). The elements of \({"\\textbf{D}"}\) are initialized to the value <code>INFINITE</code>. Vertices are processed in order of distance from \(S\). Whenever a vertex \(v\) is processed, \(D(X)\) is updated for every neighbor \(X\) of \(V\).</li>
				<li><CodePre language="java">{`
// Compute shortest path distances from s, store them in D
static void Dijkstra(Graph G, int s, int[] D) {
	for (int i=0; i<G.nodeCount(); i++) {    // Initialize
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) {  // Process the vertices
		int v = minVertex(G, D);     // Find next-closest vertex
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; } // Unreachable
		int[] nList = G.neighbors(v);
		for (int j=0; j<nList.length; j++) {
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
	for (int i=0; i<G.nodeCount(); i++) {
		if (G.getValue(i) != VISITED) { v = i; break; }
	}
	for (int i=0; i<G.nodeCount(); i++) {  // Now find smallest value
		if ((G.getValue(i) != VISITED) && (D[i] < D[v])) {
			v = i;
		}
	}
	return v;
}
				`}</CodePre></li>
				<li>Because this scan is done \(|V|\) times, and because each edge requires a constant-time update to <code>D</code>, the total cost for this approach is \(\Theta(|V|^2+|E|)=\Theta(|V|^2)\), because \(|E|\) is in \(O(|V|^2)\).</li>
				<li>An alternative approach is to store unprocessed vertices in a min-heap ordered by their distance from the processed vertices. The next-closest vertex can be found in the heap in \(\Theta(\log|V|)\) time.</li>
				<li>Every time we modify \({"\\textbf{D}"}(X)\), we could reorder \(X\) in the heap by deleting and reinserting it. This is an example of a <b>priority queue with priority update</b>.</li>
				<li>To implement true priority updating, we would need to store with each vertex its position within the heap so that we can remove its old distances whenever it is updated by processing new edges.</li>
				<li>A simpler approach is to add the new (always smaller) distance value for a given vertex as a new record in the heap. The smallest value for a given vertex currently in the heap will be found first, and greater distance values found later will be ignored because the vertex will already be marked as <code>VISITED</code>.</li>
				<li>The time complexity is \(\Theta((|V|+|E|)\log|E|)\), because for each edge that we process we must reorder the heap.</li>
				<li>We use the <code>KVPair</code> class to store key-value pairs in the heap, with the edge weight as the key and the target vertex as the value.</li>
				<li><CodePre language="java">{`
// Dijkstra's shortest-paths: priority queue version
static void DijkstraPQ(Graph G, int s, int[] D) {
	int v;    // The current vertex
	KVPair[] E = new KVPair[G.edgeCount()];   // Heap for edges
	E[0] = new KVPair(0, s);  // Initial vertex
	MinHeap H = new MinHeap(E, 1, G.edgeCount());
	for (int i=0; i<G.nodeCount(); i++) { // Initialize distance
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) { // For each vertex

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
		for (int j=0; j<nList.length; j++) {
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
				<li>The <b>minimal-cost spanning tree (MCST)</b> problem takes as input a connected, undirected graph \({"\\textbf{G}"}\), where each edge has a distance or weight measure attached.</li>
				<li>The MCST is the graph containing the vertices of \(G\) along with the subset of \(G\)'s edges that:<SubList opened>
					<li>has minimum total cost as measured by summing the values for all of the edges in the subset</li>
					<li>keeps the vertices connected</li>
				</SubList></li>
				<li>The MCST is a free tree with \(|V|-1\) edges. The name "minimum-cost spanning tree" comes from the fact that the required set of edges forms a tree, it spans the vertices (i.e., it connects them together), and it has minimum cost.</li>
				<li><figure>
					<ImgComp src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/10.PNG"}/>
					<figcaption>All edges appear in the original graph. Those edges drawn with heavy lines indicate the subset making up the MCST. Note that edge \((C,F)\) could be replaced with edge \((D,F)\) to form a different MCST with equal cost.</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Prim's algorithm:</b><SubList>
				<li><b>Prim's Algorithm</b> is a greedy algorithm for computing the MCST of a graph.</li>
				<li>Start with any vertex \(N\) in the graph, setting the MCST to be \(N\) initially. Pick the least-cost edge connected to \(N\).</li>
				<li>This edge connects \(N\) to another vertex; call this \(M\). Add Vertex \(M\) and Edge \((N,M)\) to the MCST.</li>
				<li>Next, pick the least-cost edge coming from either \(N\) or \(M\) to any other vertex in the graph. Add this edge and the new vertex it reaches to the MCST.</li>
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
	for (int i=0; i<G.nodeCount(); i++) {    // Initialize
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) {   // Process the vertices
		int v = minVertex(G, D);    // Find next-closest vertex
		G.setValue(v, VISITED);
		if (D[v] == INFINITY) { return; } // Unreachable
		if (v != s) { AddEdgetoMST(V[v], v); }
		int[] nList = G.neighbors(v);
		for (int j=0; j<nList.length; j++) {
			int w = nList[j];
			if (D[w] > G.weight(v, w)) {
				D[w] = G.weight(v, w);
				V[w] = v;
			}
		}
	}
}
				`}</CodePre></li>
				<li>Array <code>V[I]</code> stores the previously visited vertex that is closest to vertex \(I\). This information lets us know which edge goes into the MCST when vertex \(I\) is processed.</li>
				<li>Alternatively, we can implement Prim's algorithm using a <i>priority queue</i> to find the next closest vertex:</li>
				<li><CodePre language="java">{`
// Prims MCST algorithm: priority queue version
void PrimPQ(Graph G, int s, int[] D, int[] V) {
	int v;  // The current vertex
	KVPair[] E = new KVPair[G.edgeCount()]; // Heap for edges
	E[0] = new KVPair(0, s);    // Initial vertex
	MinHeap H = new MinHeap(E, 1, G.edgeCount());
	for (int i=0; i<G.nodeCount(); i++) {   // Initialize distance
		D[i] = INFINITY;
	}
	D[s] = 0;
	for (int i=0; i<G.nodeCount(); i++) {    // For each vertex
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
		for (int j=0; j<nList.length; j++) {
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
				<li>The edges can be processed in order of weight by using a min-heap. This is generally faster than sorting the edges first, because in practice we need only visit a small fraction of the edges before completing the MCST.</li>
				<li><CodePre language="java">{`
void Kruskal(Graph G) {
	ParPtrTree A = new ParPtrTree(G.nodeCount());   // Equivalence array
	KVPair[] E = new KVPair[G.edgeCount()]; // Minheap array
	int edgecnt = 0; // Count of edges

	for (int i=0; i<G.nodeCount(); i++) {    // Put edges in the array
		int[] nList = G.neighbors(i);
		for (int w=0; w<nList.length; w++) {
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
				<li>Define a \(k\)-path from vertex \(v\) to vertex \(u\) to be any path whose intermediate vertices (aside from \(v\) and \(u\)) all have indices less than \(k\). A 0-path is defined to be a direct edge from \(v\) to \(u\).</li>
				<li><figure>
					<ImgComp style={{width:"75%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/11.PNG"}/>
					<figcaption>Path 1-3 is a 0-path by definition.<br/>Path 3-0-2 is not a 0-path, but it is a 1-path (as well as a 2-path, a 3-path, and a 4-path) because the largest intermediate vertex is 0.<br/>Path 1-3-2 is a 4-path, but not a 3-path because the intermediate vertex is 3.<br/>All paths in this graph are 4-paths.</figcaption>
				</figure></li>
				<li>Define \(D_k(v,u)\) to be the length of the shortest \(k\)-path from vertex \(v\) to vertex \(u\). Assume that we already know the shortest \(k\)-path from \(v\) to \(u\).</li>
				<li>The shortest \((k+1)\)-path either goes through vertex \(k\) or it does not. If it does go through \(k\), then the best path is the best \(k\)-path from \(v\) to \(k\) followed by the best \(k\)-path from \(k\) to \(u\). Otherwise, we should keep the best \(k\)-path seen before.</li>
				<li><b>Floyd's algorithm</b> simply checks all of the possibilities in a triple loop.</li>
				<li><CodePre language="java">{`
/** Compute all-pairs shortest paths */
static void Floyd(Graph G, int[][] D) {
	for (int i=0; i<G.n(); i++) { // Initialize D with weights
		for (int j=0; j<G.n(); j++) {
			if (G.weight(i, j) != 0) { D[i][j] = G.weight(i, j); }
		}
	}
	for (int k=0; k<G.n(); k++) { // Compute all k paths
		for (int i=0; i<G.n(); i++) {
			for (int j=0; j<G.n(); j++) {
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

<h2>Spatial Data Structures</h2>
<div className="content" data-source="20">
	<div style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<ul>
			<li>Spatial data structures:<SubList>
				<li><b>Spatial attribute:</b> An attribute of a record that has a position in space, such as the coordinate. This is typically in two or more dimensions.</li>
				<li>Multidimensional range queries are the defining feature of a spatial application.</li>
				<li><b>Spatial data structure:</b> A data structure designed to support efficient processing when a spatial attribute is used as the key.</li>
			</SubList></li>
			<li><b>Sparse matrix:</b><SubList>
				<li>Sometimes we need to represent a large, two-dimensional matrix where many of the elements have a value of zero.</li>
				<li>A difficult situation arises when the vast majority of values stored in an \(n \times m\) matrix are zero, but there is no restriction on which positions are zero and which are non-zero. This is known as a <b>sparse matrix</b>.</li>
				<li>Consider the following sparse matrix:</li>
				<li><ImgComp style={{width: "40%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/4.jpeg"}/></li>
				<li>One approach is to implement the matrix as an orthogonal list.</li>
				<li>The corresponding orthogonal array is shown in the Figure. Here we have a list of row headers, each of which contains a pointer to a list of matrix records.</li>
				<li>A second list of column headers also contains pointers to matrix records.</li>
				<li><ImgComp style={{width: "60%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/5.png"}/></li>
				<li>Each non-zero element stores its own value, its position within the matrix, and four pointers (for its neighbors).</li>
				<li>Another representation for sparse matrices is sometimes called the <b>Yale representation</b>. Matlab uses a similar representation, with a primary difference being that the Matlab representation uses column-major order.</li>
				<li>The Matlab representation stores the sparse matrix using three lists. The first is simply all of the non-zero element values, in column-major order. The second list stores the start position within the first list for each column. The third list stores the row positions for each of the corresponding non-zero values.</li>
			</SubList></li>
			<li><b>PR Quadtree:</b><SubList>
				<li>In the <b>Point-Region quadtree</b> each node either has exactly four children or is a leaf (i.e. a full four-way branching tree).</li>
				<li>The PR quadtree represents a collection of data points in two dimensions by decomposing the region containing the data points into four equal quadrants, subquadrants, and so on, until no leaf node contains more than a single point.</li>
				<li>Each internal node of a PR quadtree represents a single split of the two-dimensional region.</li>
				<li>The four quadrants of the region (or equivalently, the corresponding subtrees) are designated (in order) NW, NE, SW, and SE.</li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/1.png"}/></li>
				<li>The PR quadtree is actually a trie.</li>
				<li>Region search is easily performed with the PR quadtree:<SubList>
					<li>To locate all points within radius \(r\) of query point \(Q\), begin at the root.</li>
					<li>If the root is an empty leaf node, then no data points are found.</li>
					<li>If the root is a leaf containing a data record, then the location of the data point is examined to determine if it falls within the circle.</li>
					<li>If the root is an internal node, then the process is performed recursively, but only on those subtrees containing some part of the search circle.</li>
				</SubList></li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<ul>
			<li><b>KD trees:</b><SubList>
				<li>The <b>kd tree</b> is a modification to the BST that allows for efficient processing of multi-dimensional search keys.</li>
				<li>The kd tree differs from the BST in that each level of the kd tree makes branching decisions based on a particular search key associated with that level, called the <b>discriminator</b>.</li>
				<li>We define the discriminator at level \(i\) to be \(i \mod k\) for \(k\) dimensions:<SubList>
					<li>For example, assume that we store data organized by \(xy\)-coordinates. </li>
					<li>In this case, \(k\) is 2 (there are two coordinates), with the \(x\)-coordinate field arbitrarily designated key 0, and the \(y\)-coordinate field designated key 1.</li>
					<li>At each level, the discriminator alternates between \(x\) and \(y\).</li>
				</SubList></li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/2.png"}/></li>
				<li>Deleting a node from a kd tree is similar to deleting from a BST, but slightly harder:<SubList>
					<li>As with deleting from a BST, the first step is to find the node (call it \(N\)) to be deleted.</li>
					<li>If \(N\) has no children, then \(N\) is replaced with a <code>NULL</code> pointer.</li>
					<li>If \(N\) has children, the record stored in \(N\) should be replaced either by the record in \(N\)'s right subtree with the least value of \(N\)'s discriminator, or by the record in \(N\)'s left subtree with the greatest value for this discriminator.</li>
					<li>Assume that \(N\) was at an odd level and therefore \(y\) is the discriminator. \(N\) could then be replaced by the record in its right subtree with the least \(y\) value (call it \(Y_{"{min}"}\)). The problem is that \(Y_{"{min}"}\) is not necessarily the leftmost node.</li>
					<li>A modified search procedure to find the least \(y\) value in the left subtree must be used to find it instead.</li>
					<li>A recursive call to the delete routine will then remove \(Y_{"{min}"}\) from the tree. Finally, \(Y_{"{min}"}\)'s record is substituted for the record in node \(N\).</li>
				</SubList></li>
			</SubList></li>
			<li><b>Bintree:</b><SubList>
				<li>The Bintree differs from the BST in two important ways:<SubList>
					<li>First, being a data structure for multiple dimensions, at each level of the tree the Bintree makes branching decisions based on a particular search key associated with that level, called the <b>discriminator</b>. Its splitting decisions alternate among the key dimensions.</li>
					<li>Another difference is that the Bintree uses what is known as <b>image-space decomposition</b>, and so is a form of trie.</li>
					<li>An image-space decomposition splits the key space into equal halves, rather than splitting at the key value of the object being stored.</li>
					<li>Splitting in one dimension at a time distinguishes the Bintree from the PR Quadtree, and using the image-space decomposition is what distinguishes the Bintree from the kd tree.</li>
				</SubList></li>
				<li><ImgComp src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/3.jpeg"}/></li>
			</SubList></li>
			<li>Other spatial data structures:<SubList>
				<li>The three-dimensional equivalent of the PR quadtree would be a tree with \(2^3\) or eight branches. Such a tree is called an <b>octree</b>.</li>
				<li>We can use a four-way decomposition of space centered on the data points. The tree resulting from such a decomposition is called a <b>point quadtree</b>.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2>Searching</h2>
<div className="content" data-source="20">
	<ul style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<li><b>Sequential search:</b><SubList>
			<li>If you want to find the position in an unsorted array of \(n\) integers that stores a particular value, you cannot really do better than simply looking through the array from the beginning and move toward the end until you find what you are looking for. This algorithm is called <b>sequential search</b>.</li>
			<li>If you do find it, we call this a <b>successful search</b>.</li>
			<li>If the value is not in the array, eventually you will reach the end. We will call this an <b>unsuccessful search</b>.</li>
		</SubList></li>
		<li><b>Binary search:</b><SubList>
			<li>Binary search begins by examining the value in the middle position of the array; call this position \({"\\text{mid}"}\) and the corresponding value \(k_{"\\text{mid}"}\).</li>
			<li>If \(K=k_{"\\text{mid}"}\), then processing can stop immediately.</li>
			<li>if \(K \lt k_{"\\text{mid}"}\), then you know that the value \(K\) cannot appear in the array at any position greater than \({"\\text{mid}"}\). Thus, you can eliminate future search in the upper half of the array.</li>
			<li>If \(K \gt k_{"\\text{mid}"}\), then you know that you can ignore all positions in the array less than \({"\\text{mid}"}\).</li>
			<li>Binary search next looks at the middle position in that part of the array where value \(K\) may exist.</li>
			<li>The value at this position again allows us to eliminate half of the remaining positions from consideration.</li>
			<li>This process repeats until either the desired value is found, or there are no positions remaining in the array that might contain the value \(K\).</li>
		</SubList></li>
		<li>Analyzing search in unsorted lists:<SubList>
			<li>Sequential search on an unsorted list requires \(\Theta(n)\) time in the worst, average, and best cases.</li>
			<li>We have \(n+1\) distinct possible events: That \(K\) is in one of positions 0 to \(n-1\) in \({"\\textbf{P}"}\) (each position having its own probability), or that it is not in \({"\\textbf{P}"}\) at all.</li>
			<MathStuff>{"\\textbf{P}(K \\not \\in \\textbf{L}) = 1-\\textbf{P}(K = \\textbf{L}[i])"}</MathStuff>
			<li>Let \(p_i\) be the probability that \(K\) is in position \(i\) of \({"\\textbf{L}"}\) (indexed from 0 to \(n-1\)).</li>
			<li>For any position \(i\) in the list, standard sequential search will look at \(i+1\) records. So we say that the cost when \(K\) is in position \(i\) is \(i+1\).</li>
			<li>When \(K\) is not in \({"\\textbf{L}"}\), sequential search will require \(n\) comparisons. Let \(p_n\) be the probability that \(K\) is not in \({"\\textbf{L}"}\).</li>
			<li>Then the average cost \({"\\textbf{T}"}(n)\) will be:</li>
			<MathStuff>{"\\textbf{T}(n) = np_n + \\sum_{i=0}^{n-1} (i+1)p_i"}</MathStuff>
			<li className="ownExplanation">There is \(p_n\) probability of searching all \(n\) slots, and \(p_i\) probability of doing \(i+1\) searches.</li>
			<li>What happens to the equation if we assume all the \(p_i\)'s are equal (except \(p_n\))?</li>
			<MathStuff>{"\\begin{align} \\textbf{T}(n) &= np_n + \\sum_{i=0}^{n-1} (i+1)p \\\\ &= np_n + p\\sum_{i=1}^n (i+1) \\\\ &= np_n + p\\frac{n(n+1)}{2} \\\\ &= np_n + \\frac{1-p_n}{n}\\frac{n(n+1)}{2} \\\\ &= \\frac{n+1+p_n(n-1)}{2}\\end{align}"}</MathStuff>
		</SubList></li>
		<li><b>Jump search:</b><SubList>
			<li><b>Jump search:</b> The idea is to keep jumping by some fixed number of positions until a value is found that is bigger than search key \(K\), then do a sequential search over the subarray that is now known to contain the search key.</li>
			<li>For some value \(j\), we check every \(j\)'th element in \({"\\textbf{L}"}\), that is, we check elements \({"\\textbf{L}"}[j]\), \({"\\textbf{L}"}[2j]\), and so on. So long as \(K\) is greater than the values we are checking, we continue on.</li>
			<li>If we define \(m\) such that \(mj \le n \lt (m+1)j\), then the total cost of this algorithm is at most \(m+j-1\) 3-way comparisons.</li>
			<li>They are 3-way because at each comparison of \(K\) with some \({"\\textbf{L}"}[i]\) we need to know if \(K\) is less than, equal to, or greater than \({"\\textbf{L}"}[i]\).</li>
			<li>Therefore, the cost to run the algorithm on \(n\) items with a jump of size \(j\) is:</li>
			<MathStuff>{"\\textbf{T}(n,j) = m + j - 1 = \\left\\lfloor \\frac{n}{j} \\right\\rfloor +j - 1"}</MathStuff>
			<li>What is the best value that we can pick for \(j\)? We want to minimize the cost:</li>
			<MathStuff>{"\\min_{1 \\le j \\le n} \\left \\{ \\left\\lfloor \\frac{n}{j} \\right\\rfloor +j - 1 \\right \\}"}</MathStuff>
			<li>Take the derivative and solve for \(f'(j)=0\) to find the minimum, which is \(j={"\\sqrt{n}"}\). In this case, the worst case cost will be roughly \(2{"\\sqrt{n}"}\).</li>
		</SubList></li>
		<li>Cost of binary search in the worst case:<SubList>
			<li>We can reason that we look at one element (for a cost of one), and then repeat the process on half of the array.</li>
			<li>This would give us a recurrence that looks like \(f(n)=1+f(n/2)\).</li>
			<li>If we want to be more precise about our worst case, we should notice that we are doing a little more than cutting the array in half. We never look again at a particular position that we test.</li>
			<li>We can use the floor function, to get an exact worst case model as follows:</li>
			<MathStuff>f(n) = {"\\begin{cases} 1 & n = 1 \\\\ f(\\lfloor n/2 \\rfloor) + 1 & n \\gt 1 \\end{cases}"}</MathStuff>
			<li>Since \(n/2 \ge \lfloor n/2 \rfloor\), and since \(f(n)\) is assumed to be non-decreasing, we can estimate the upper bound with the simplification \(f(n)=f(n/2)+1\).</li>
			<li>We can prove with induction that \(f(n) = \log n + 1\).</li>
			<MathStuff>{"\\begin{align} f(n/2)+1 &= (\\log(n/2) +1)+1 \\\\ &= (\\log(n)-1 +1)+1 \\\\ &= \\log(n)+1 \\\\ &= f(n) \\end{align}"}</MathStuff>
		</SubList></li>
		<li>Cost of binary search in the average case:<SubList>
			<li>Assumptions: \(X\) is in \({"\\textbf{L}"}\), \(X\) is equally likely to be in any position and \(n = 2^k - 1\) for some non-negative integer \(k\).</li>
			<li>There are \(2^i\) chances to hit in \(i\) pieces.</li>
			<li className="ownExplanation">One slot can be reached in one probe, two slots can be reached in two probes, four slots can be reached in three probes, and so on. There are at max \(\log n\) probes.</li>
			<li>The cost is:</li>
			<MathStuff>{"\\begin{gather}\\frac{1(1) + 2(2) + 3(4) + \\ldots + \\log n \\ 2^{(\\log n) -1}}{n} \\\\ =\\frac{1}{n} \\sum^{\\log n}_{i=1}i 2^{i-1} \\\\ \\approx \\log n - 1\\end{gather}"}</MathStuff>
			<li>So the average cost is only about one or two comparisons less than the worst cost.</li>
		</SubList></li>
	</ul>
	<div style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<h3>Search Structures</h3>
		<ul>
			<li><b>Self-organizing list:</b><SubList>
				<li><b>Self-organizing list:</b> A list that, over a series of search operations, will make use of some heuristic to re-order its elements in an effort to improve search times.</li>
				<li>There are three traditional heuristics for managing self-organizing lists: Frequency count, move to front and transpose.</li>
				<li>Frequency count:<SubList>
					<li>The most obvious way to keep a list ordered by frequency would be to store a count of accesses to each record and always maintain records in this order.</li>
					<li>Whenever a record is accessed, it might move toward the front of the list if its number of accesses becomes greater than a record preceding it.</li>
					<li>Besides requiring space for the access counts, count does not react well to changing frequency of access over time.</li>
					<li>Once a record has been accessed a large number of times under the frequency count system, it will remain near the front of the list regardless of further access history.</li>
				</SubList></li>
				<li>Move to front:<SubList>
					<li>Bring a record to the front of the list when it is found, pushing all the other records back one position.</li>
					<li>This heuristic is easy to implement if the records are stored using a linked list.</li>
					<li>When records are stored in an array, bringing a record forward from near the end of the array will result in a large number of records changing position.</li>
				</SubList></li>
				<li>Transpose:<SubList>
					<li>Swap any record found with the record immediately preceding it in the list.</li>
					<li>Frequently used records will, over time, move to the front of the list. Records that were once frequently accessed but are no longer used will slowly drift toward the back.</li>
					<li>Consider the case where the last record of the list (call it \(X\)) is accessed. This record is then swapped with the next-to-last record (call it \(Y\)), making \(Y\) the last record. If \(Y\) is now accessed, it swaps with \(X\).</li>
					<li>A repeated series of accesses alternating between \(X\) and \(Y\) will continually search to the end of the list, because neither record will ever make progress toward the front. However, such pathological cases are unusual in practice.</li>
					<li>A variation on transpose would be to move the accessed record forward in the list by some fixed number of steps.</li>
				</SubList></li>
			</SubList></li>
			<li><b>Bit vectors:</b><SubList>
				<li><b>Bit vectors</b> or a <b>bitmap</b> is an array that stores a single bit at each position.</li>
				<li>Typically these bits represent Boolean variables associated with a collection of objects, such that the \(i\)th bit is the Boolean value for the \(i\)th object.</li>
			</SubList></li>
			<li><b>AVL tree:</b><SubList>
				<li>The AVL tree (named for its inventors Adelson-Velskii and Landis) should be viewed as a BST with the following additional property: For every node, the heights of its left and right subtrees differ by at most 1.</li>
				<li>As long as the tree maintains this property, if the tree contains \(n\) nodes, then it has a depth of at most \(O(\log n)\).</li>
				<li>The key to making the AVL tree work is to alter the insert and delete routines so as to maintain the balance property.</li>
				<li>After inserting a new node, nodes in the new tree can only be unbalanced by a difference of at most 2 in the subtrees.</li>
				<li>For the bottommost unbalanced node, call it \(S\), there are 4 cases:<SubList opened numbered>
					<li>The extra node is in the left child of the left child of \(S\).</li>
					<li>The extra node is in the right child of the left child of \(S\).</li>
					<li>The extra node is in the left child of the right child of \(S\).</li>
					<li>The extra node is in the right child of the right child of \(S\).</li>
				</SubList></li>
				<li>Cases 1 and 4 are symmetrical, as are cases 2 and 3.</li>
				<li>It turns out that we can do this using a series of local operations known as <b>rotations</b>. Cases 1 and 4 can be fixed using a <b>single rotation</b>. Cases 2 and 3 can be fixed using a <b>double rotation</b>.</li>
				<li><figure>
					<ImgComp style={{width:"80%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/12.png"}/>
					<figcaption>A single rotation in an AVL tree.</figcaption>
				</figure></li>
				<li><figure>
					<ImgComp style={{width:"80%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/13.png"}/>
					<figcaption>A double rotation in an AVL tree.</figcaption>
				</figure></li>
			</SubList></li>
			<li><b>Splay tree:</b><SubList>
				<li>Like the AVL tree, the splay tree is not actually a distinct data structure, but rather reimplements the BST insert, delete, and search methods to improve the performance of a BST.</li>
				<li>The splay tree access rules guarantee that a series of \(m\) operations will take \(O(m \log n)\) time for a tree of \(n\) nodes whenever \(m \ge n\), for an average cost of \(O(\log n)\) per access operation.</li>
				<li>Unlike the AVL tree, the splay tree is not guaranteed to be height balanced. What is guaranteed is that the total cost of the entire series of accesses will be cheap.</li>
				<li>The splay tree access functions operate in a manner reminiscent of the move-to-front rule for self-organizing lists, and of the path compression technique for managing a series of Union/Find operations.</li>
				<li>These access functions tend to make the tree more balanced, but an individual access will not necessarily result in a more balanced tree.</li>
				<li>Whenever a node \(S\) is accessed (e.g., when \(S\) is inserted, deleted, or is the goal of a search), the splay tree performs a process called <b>splaying</b>.</li>
				<li>Splaying moves \(S\) to the root of the BST. When \(S\) is being deleted, splaying moves the parent of \(S\) to the root.</li>
				<li>As in the AVL tree, a splay of node \(S\) consists of a series of rotations. A rotation moves \(S\) higher in the tree by adjusting its position with respect to its parent and grandparent.</li>
				<li>A single rotation is performed only if \(S\) is a child of the root node.</li>
				<li>It basically switches \(S\) with its parent in a way that retains the BST property.</li>
				<li><figure>
					<ImgComp style={{width:"80%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/14.png"}/>
					<figcaption>Splay tree single rotation.</figcaption>
				</figure></li>
				<li>Unlike the AVL tree, the splay tree requires two types of double rotation.</li>
				<li>The first double rotation is called a <b>zigzag rotation</b>:<SubList>
					<li>It takes place when either of the following two conditions are met:<SubList opened>
						<li>\(S\) is the left child of \(P\), and \(P\) is the right child of \(G\).</li>
						<li>\(S\) is the right child of \(P\), and \(P\) is the left child of \(G\).</li>
					</SubList></li>
					<li><ImgComp style={{width:"80%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/15.png"}/></li>
				</SubList></li>
				<li>The other double rotation is known as a <b>zigzig rotation</b>:<SubList>
					<li>A zigzig rotation takes place when either of the following two conditions are met:<SubList opened>
						<li>\(S\) is the left child of \(P\), and \(P\) is the left child of \(G\).</li>
						<li>\(S\) is the right child of \(P\), and \(P\) is the right child of \(G\).</li>
					</SubList></li>
					<li><ImgComp style={{width:"80%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/16.png"}/></li>
				</SubList></li>
			</SubList></li>
			<li><b>Red-black tree:</b><SubList>
				<li>A node is either red or black.</li>
				<li>The root is black.</li>
				<li>A red node's child nodes are black.</li>
				<li>each path from the root to an empty subtree contain the same number of black nodes.</li>
			</SubList></li>
			<li><b>Skip list:</b><SubList>
				<li>The AVL tree and the splay tree are also guaranteed to provide good performance, but at the cost of added complexity as compared to the BST.</li>
				<li>The skip list is not guaranteed to provide good performance, but it will provide good performance with extremely high probability.</li>
				<li>A skip list can be viewed as a sorted linked list with some extra pointers</li>
				<li><ImgComp style={{width:"90%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/17.jpeg"}/></li>
				<li>We give a third pointer to every fourth node, give a fourth pointer to every eighth node, and so on—until we reach the ultimate of \(\log n\) pointers in the first and middle nodes for a list of \(n\) nodes.</li>
				<li>To search, start with the bottom row of pointers, going as far as possible and skipping many nodes at a time. Then, shift up to shorter and shorter steps as required. With this arrangement, the worst-case number of accesses is \(\Theta(\log n)\).</li>
				<li>The ideal skip list is organized so that (if the head node is not counted) half of the nodes have only one pointer, one quarter have two, one eighth have three, and so on.</li>
				<li><CodePre language="java">{`
class SkipNode<K extends Comparable<K>, E> {
	private KVPair<K, E> rec;
	private SkipNode<K, E>[] forward;

	public E element() {
		return rec.value();
	}

	public K key() {
		return rec.key();
	}

	@SuppressWarnings("unchecked")
	public SkipNode(K key, E elem, int level) {
		rec = new KVPair<K, E>(key, elem);
		forward = new SkipNode[level + 1];
		for (int i = 0; i < level; i++)
			forward[i] = null;
	}

	public String toString() {
		return rec.toString();
	}
}

class SkipList<K extends Comparable<K>, E> implements Dictionary<K, E> {
  private SkipNode<K, E> head;
  private int level;
  private int size;
  static private Random ran = new Random(); // Hold the Random class object

  public SkipList() {
    head = new SkipNode<K, E>(null, null, 0);
    level = -1;
    size = 0;
  }
	
	// Return the (first) matching matching element if one exists, null otherwise
  public E find(K key) {
    SkipNode<K, E> x = head; // Dummy header node
    for (int i = level; i >= 0; i--) // For each level...
      while ((x.forward[i] != null) && (x.forward[i].key().compareTo(key) < 0)) // go forward
        x = x.forward[i]; // Go one last step
    x = x.forward[0]; // Move to actual record, if it exists
    if ((x != null) && (x.key().compareTo(key) == 0)) return x.element(); // Got it
    else return null; // Its not there
  }
	
	// Pick a level using a geometric distribution
  int randomLevel() {
    int lev;
    for (lev = 0; Math.abs(ran.nextInt()) % 2 == 0; lev++) // ran is random generator
      ; // Do nothing
    return lev;
  }

	 /** Insert a key, element pair into the skip list */
  public void insert(K key, E elem) {
    int newLevel = randomLevel(); // New node's level
    if (newLevel > level) // If new node is deeper
      adjustHead(newLevel); // adjust the header
    // Track end of level
    SkipNode<K, E>[] update = new SkipNode[level + 1];
    SkipNode<K, E> x = head; // Start at header node
    for (int i = level; i >= 0; i--) { // Find insert position
      while ((x.forward[i] != null) && (x.forward[i].key().compareTo(key) < 0))
        x = x.forward[i];
      update[i] = x; // Track end at level i
    }
    x = new SkipNode<K, E>(key, elem, newLevel);
    for (int i = 0; i <= newLevel; i++) { // Splice into list
      x.forward[i] = update[i].forward[i]; // Who x points to
      update[i].forward[i] = x; // Who points to x
    }
    size++; // Increment dictionary size
  }
	
	private void adjustHead(int newLevel) {
    SkipNode<K, E> temp = head;
    head = new SkipNode<K, E>(null, null, newLevel);
    for (int i = 0; i <= level; i++)
      head.forward[i] = temp.forward[i];
    level = newLevel;
  }
}
				`}</CodePre></li>
				<li>Whenever inserting a node, we assign it a level (i.e., some number of pointers). The assignment is random, using a geometric distribution yielding a 50% probability that the node will have one pointer, a 25% probability that it will have two, and so on.</li>
				<li>Once the proper level for the node has been determined, the next step is to find where the node should be inserted and link it in as appropriate at all of its levels.</li>
				<li>Maintaining such balance would be expensive during the normal process of insertions and deletions. The key to skip lists is that we do not worry about any of this.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2>Dynamic Programming</h2>
<div className="content" data-source="20">
	<ul style={{width: "49%", marginLeft: "0.5%", float: "left"}}>
		<li><b>Dynamic programming:</b><SubList>
			<li><b>Dynamic programming</b> is an algorithm design technique that can improve the efficiency of any inherently recursive algorithm that repeatedly re-solves the same subproblems.</li>
			<li>Using dynamic programming requires two steps:<SubList opened>
				<li>You find a recursive solution to a problem where subproblems are redundantly solved many times.</li>
				<li>Optimize the recursive algorithm to eliminate re-solving subproblems. The resulting algorithm may be recursive or iterative. The iterative form is commonly referred to by the term dynamic programming.</li>
			</SubList></li>
		</SubList></li>
		<li>Computing fibonacci numbers:<SubList>
			<li>The Fibonacci sequence is typically defined as follows:</li>
			<MathStuff>{"f(n) = f(n+1) + f(n-2) \\text{ for } n \\ge 2; f(0) = f(1) = 1"}</MathStuff>
			<li>Here is the "natural" recursive implementation for computing the \(n\)'th Fibonacci number.</li>
			<li><CodePre language="java">{`
/* Recursively generate and return the n'th Fibonacci number */
static long fibr(int n) {
  // fibr(91) is the largest value that fits in a long
  if ((n <= 0) || (n > 91)) { return -1; }
  if ((n == 1) || (n == 2)) { return 1; }    // Base case
  return fibr(n-1) + fibr(n-2);      // Recursive call
}
			`}</CodePre></li>
			<li>The growth rate is exponential: \(f(n) ≈ (1.618)^n\).</li>
			<li className="ownExplanation">We can store the values of the subproblems so we don't have to recalculate them again, this technique is called <b>memoization</b>.</li>
			<li><CodePre language="java">{`
static int fibrt(int n) {
  // Assume Values has at least n slots, and all
  // slots are initialized to 0
  if ((n <= 0) || (n > 91)) { return -1; }
  if (n <= 2) { return 1; }             // Base case
  if (Values[n] == 0) {
    Values[n] = fibrt(n-1) + fibrt(n-2);
  }
  return Values[n];
}
			`}</CodePre></li>
			<li>A second technique is called <b>tabulation</b>:<SubList>
				<li>The dependency graph must be analyzed to infer an alternative computation order for the subproblems. The only restriction is that a subproblem can only be computed when the subproblems it depends on have been computed.</li>
				<li>In addition, the value of each subproblem must be stored in the table.</li>
				<li>In the case of computing a value in the Fibonacci series, we reverse the order to calculate the series from the starting point, and implement this by a simple loop.</li>
				<li>Unfortunately, since it does not have any similarity to the original recursive algorithm, there is no mechanical way to get from the original recursive form to the dynamic programming form.</li>
			</SubList></li>
			<li className="ownExplanation">Memoization is top-down while tabulation is bottom-up.</li>
			<li>An additional optimization can be made. Of course, we didn't actually need to use a table storing all of the values, since future computations do not need access to all prior subproblems.</li>
			<li>Instead, we could build the value by working from 0 and 1 up to \(n\) rather than backwards from \(n\) down to 0 and 1.</li>
			<li><CodePre language="java">{`
/* Iteratively generate and return the n'th Fibonacci number */
static long fibi(int n) {
  // fibr(91) is the largest value that fits in a long
  if ((n <= 0) || (n > 91)) { return -1; }
  long curr, prev, past;
  if ((n == 1) || (n == 2)) { return 1; }
  curr = prev = 1;     // curr holds current Fib value
  for (int i=3; i<=n; i++) { // Compute next value
    past = prev;             // past holds fibi(i-2)
    prev = curr;             // prev holds fibi(i-1)
    curr = past + prev;      // curr now holds fibi(i)
  }
  return curr;
}
			`}</CodePre></li>
		</SubList></li>
		<li>The knapsack problem:<SubList>
			<li>Assume that we have a knapsack with a certain amount of space that we will define using integer value \(K\). We also have \(n\) items each with a certain size such that that item \(i\) has integer size \(k_i\).</li>
			<li>The problem is to find a subset of the \(n\) items whose sizes exactly sum to \(K\), if one exists. We can define the problem more formally as: Find \({"S ⊂ \\{1,2,\\ldots,n\\}"}\) such that:</li>
			<MathStuff>{"\\sum_{i \\in S} k_i = K"}</MathStuff>
			<li>We can say that \(P(n,K)\) has a solution if and only if there exists a solution for either \(P(n-1,K)\) or \(P(n-1,K-k_n)\). We can solve \(P(n,K)\) only if we can solve one of the sub problems where we use or do not use the \(n\)th item.</li>
			<li><CodePre language="plaintext">{`
if P(n-1,K) has a solution,
	then P(n,K) has a solution
	else if P(n-1,K-kn) has a solution
		then P(n,K) has a solution
		else P(n,K) has no solution.
			`}</CodePre></li>
			<li>Although this algorithm is correct, it naturally leads to a cost expressed by the recurrence relation \(T(n)=2T(n-1)+c=\Theta (2n)\). That can be pretty expensive!</li>
			<li>There are two approaches to actually solving the problem: memoization and tabulation.</li>
			<li><u>Memoization:</u> to start with our problem of size \(P(n,K)\) and make recursive calls to solve the subproblems, each time checking the array to see if a subproblem has been solved, and filling in the corresponding cell in the array whenever we get a new subproblem solution.</li>
		</SubList></li>
	</ul>
	<ul style={{width: "49%", marginRight: "0.5%", float: "right"}}>
		<li>Chained matrix multiplication:<SubList>
			<li>given a sequences of matrices, our goal is to find the most efficient wat to multiply these matrices.</li>
			<li>It matters whether we multiply \(A \times B\) or \(B \times A\).</li>
			<li>Suppose there are \(n\) matrices labeled 1 to \(n\). we can use a table of size \(n \times n\).</li>
			<li>In this table, the entry at \([i,j]\) is the cost for the best solution of multiplying matrices \(i\) to \(j\).</li>
			<li><ImgComp style={{width:"70%"}} src={"/articlePics/data_structures_and_algorithms_(part_2)_pics/10.jpeg"}/></li>
			<li>So, the upper left corner (entry \([1,n]\)) is the full solution.</li>
			<li>Entries on the main diagonal are simply a single matrix (no multiplication).</li>
		</SubList></li>
		<li>0/1 Knapsack Problem:<SubList>
			<li>The 0/1 Knapsack problem can be defined in terms of a thief who enters the place they will rob with a single knapsack to carry away their spoils.</li>
			<li>This knapsack has a specified limit on the weight it can support without tearing. This weight capacity will be refered to as CAP.</li>
			<li>After cracking open a safe, the theif finds that the safe contains N items, each with a specific weight and value (both are integers).</li>
			<li>The thief's goal is to maximize the total value of set of items they take without going over the weight limit, CAP.</li>
			<li>The "0/1" binary qualifier in the name of this problem denotes that each item must be entirely accepted or rejected, that is, the theif can't subdivide an item.</li>
			<TableLI>
				<thead>
					<tr><th>Symbol</th><th>Definition</th></tr>
				</thead>
				<tbody>
					<tr><td>N</td><td>the number of items in the safe</td></tr>
					<tr><td>CAP</td><td>the weight capacity of the knapsack</td></tr>
					<tr><td>WT(i)</td><td>the weight of the \(i\)th item</td></tr>
					<tr><td>VALUE(i)</td><td>the value of the \(i\)th item</td></tr>
					<tr><td>V(i, c)</td><td>\(i \le n, c \le \text{"{cap}"}\) denotes the total value of the optimal solution to a version of the problem in which c is the capacity of the knapsack and only items \(1, 2, 3, \ldots , i\) are considered.</td></tr>
				</tbody>
			</TableLI>
			<li>To create a solution for this problem, it would be best to start simple. Consider the how \(V(i, c)\) can be defined when \(i = 1\). In this case, we are asking for the total value of an optimal solution when only the first item is involved and the knapsack has a capacity of \(c\). \(V(1, c) = \operatorname{"{VALUE}"}(i)\) if \(\operatorname{"{WT}"}(i) \le c\) and \(V(1, c) = 0\) otherwise.</li>
			<li>Another simple case to consider would be if \(i = 0\) or \(c = 0\). If \(i = 0\), there are no items to consider so \(V(0, c) = 0\). If \(c = 0\), the knapsack can not hold anything else, so \(V(i ,0) = 0\).</li>
			<li>If \({"\\operatorname{WT}(i)"} \gt c\) then \(V(i, c)\) must be the same as \(V(i-1, c)\) since the knapsack is capacity is not large enough to contain the item \(i\).</li>
			<li>Otherwise to determine whether of not the solution contains item \(i\), we must compare:<SubList>
				<li>The optimal solution to the capaciy \(c\) version when only items \(1,2,3, \ldots, i-1\) are used, that is, \(V(i-1, c)\)</li>
				<li>The optimal solution to \({"V(i-1, c- \\operatorname{WT}(i)) + \\operatorname{VALUE}(i)"}\).</li>
				<li>If an item i is included in the knapsack, the remaining capacity of the knapsack drops by \(\operatorname{"WT"}(i)\). So ({"V(i-1, c- \\operatorname{WT}(i))"}\) represents the best vale that can be obtained from the remaining items with this new capacity.</li>
				<li>Since we are including item i in the knapsack, \(\operatorname{"VALUE"}(i)\) is added. hence \({"V(i-1, c- \\operatorname{WT}(i)) + \\operatorname{VALUE}(i)"}\) represents the optimal value if the ith item is taken.</li>
				<li>Whichever is the larger of above two represents the solution to the capacity \(c\) problem for items chosen from among \(1, 2, 3, \dots, i\).</li>
				<li>If the two are equal, then don't include the item in the knapsack.</li>
			</SubList></li>
			<li>An implementation of this algorithm:</li>
			<li><CodePre language="java">{`
//this function behaves like the V(i,c) method defined previously
//in this chapter
int V(int i, int c){
	//base cases
	if(i == 0 || c == 0){
		return 0;
	}
	//item does not fit case
	if(wt(i) > c){
		return V(i-1, c);
	}
	//compare best case if item i is taken or left behind.
	//and return the larger number.
	int B = V(i-1, c-wt(i)) + value(i);
	int A = V(i-1, c);
	if(A >= B){
		return A;
	}
	else{
		return B;
	}
}
			`}</CodePre></li>
			<li>This algorithm is of exponential efficiency \(O(2^N)\), where \(N\) is the number of items.</li>
			<li>The value returned by our \(V(i, c)\) are simple integers,that could easily be stored in a two dimensional array.</li>
			<li>One important thing to notice is, although this algorithm finds the optimal value, it does not find the item set that produced the value.</li>
			<li>The optimal solution set can be recovered from a complete table of optimal values for the set of items.</li>
			<li>Recall that the two function calls are \(V(i-1, c)\) and \({"V(i-1, c- \\operatorname{WT}(i))"}\). As it turns out, each row in the table only depends on the row above it. With this fact known, it is simple to see that the table can be filled in with an iterative approach.</li>
			<li><CodePre language="java">{`
int v(int n, int cap){
	int table[][] = new int[n+1][cap+1];
	for(int i = 0; i <= n; i++){
		for(int j = 0; j <= cap; j++){
			//base case
			if(i == 0 || j == 0)
				table[i][j] = 0;
			else{
				//item wont fit case
				if(wt(i) > j)
					table[i][j] = table[i-1][j];
				else{
					int A,B;
					B = table[i-1][j-wt(i)] + value(i);
					A = table[i-1][j];
					if(A >= B)
						table[i][j] = A;
					else
						table[i][j] = B;
				}
			}
		}
	}
	//some code could go here to recover the solution set.

	//return the optimal value
	return table[i][j];
}
			`}</CodePre></li>
			<li>The efficency of the algorithm above is \(O(N * \operatorname{"{CAP}"})\), because each cell in the table requires constant work to fill.</li>
		</SubList></li>
		<li>Edit distance:<SubList>
			<li><b>Edit Distance</b> is a measure for the minimum number of changes required to convert one string into another.</li>
			<TableLI>
				<thead>
					<tr><th>Symbol</th><th>Definition</th></tr>
				</thead>
				<tbody>
					<tr><td>\(S\)</td><td>starting string</td></tr>
					<tr><td>\(T\)</td><td>ending string</td></tr>
					<tr><td>\(m\)</td><td>the length of S</td></tr>
					<tr><td>\(n\)</td><td>the length of T</td></tr>
					<tr><td>\(S(i)\)</td><td>the \(i\)th character in \(S\)</td></tr>
					<tr><td>\(T(j)\)</td><td>the \(j\)th character at \(T\)</td></tr>
					<tr><td>\(ED(S, T, i, j)\)</td><td>\(i:[1..m], j:[1..n]\), the minimum number of changes when comparing \(S(i)\) with \(T(j)\).</td></tr>
				</tbody>
			</TableLI>
			<li>The recursive algorithm is as follows:<SubList>
				<li>Base case check:<SubList>
					<li>The base case for this algorithm is simply when you run out of characters to compare in either \(S\) or \(T\).</li>
					<li>If you run out of characters for both, the number that is returned will be zero.</li>
					<li>If you run out of characters of one but not the other, the value returned is the remaining number of characters in the non-zero length string.</li>
				</SubList></li>
				<li>Check to see if <code>S(i) == T(j)</code>.</li>
				<li>If they match, recurse to <code>ED(S, T, i-1, j-1)</code>.</li>
				<li>If they don't match, three recursive calls are necessary. In order:<SubList opened numbered>
					<li><u>Substitution:</u> recurse to <code>ED(S, T, i-1, j-1)</code> and add one.</li>
					<li><u>Insertion:</u> recurse to <code>ED(S, T, i, j-1)</code> and add one.</li>
					<li><u>Deletion:</u> recurse to <code>ED(S,T,i-1,j)</code> and add one.</li>
				</SubList></li>
				<li>Find the operation that yields the minimum number of changes (operation counts). If there is a tie, follow the order of precedence established by the ordering of recursive calls: Substition, Insertion, Deletion.</li>
			</SubList></li>
			<li><CodePre language="java">{`
int editDistance(String S, String T, int i, int j){
	//base cases
	if (i === 0)
		return j;
	if (j === 0)
		return i;

	//recursive call, start with match check
	if (S.charAt(i) == T.charAt(j))
		return editDistance(S, T, i-1, j-1);
	else{ //no match, recurse three times
		int sub = editDistance(S, T, i-1, j-1) + 1;
		int ins = editDistance(S, T, i, j-1) + 1;
		int del = editDistance(S, T, i-1, j) + 1;
		return Math.min(Math.min(sub, ins), del);
	}
}
			`}</CodePre></li>
			<li>At any given character comparision, there might be as many as three recursive calls, so \(O(3^{"{\\max(m,n)}"})\).</li>
			<li>The following is the same Edit Distance algorithm as above, but implemented dynamically.</li>
			<li><CodePre language="java">{`
int editDistance(String start, String end){
	int startMax = start.length;
	int endMax = end.length;
	int array[][] = new int[startMax + 1][endMax + 1]

	//initialize all array values to zero
	for (int i = 0; i <= startMax; i++) {
		for (int j = 0; j <= endMax; j++) {
			array[i][j] = 0;
		}
	}

	//initialize the base cases
	for (int i = 1; i <= startMax; i++) {
		array[i][0] = i;
	}

	for (int j = 1; j <= endMax; j++) {
		array[0][j] = j;
	}

	//fill in the grid
	for (int i = 1; i <= startMax; i++) {
		for(int j = 1; j <= endMax; j++) {
			//match check
			if (start.charAt(i-1) == end.charAt(j-1))
				array[i][j] = array[i-1][j-1];
			else {
				int sub = array[i-1][j-1] + 1;
				int ins = array[i][j-1] + 1;
				int del = array[i-1][j] + 1;

				array[i][j] = Math.min(Math.min(sub, ins), del);
			}
		}
	}

	return array[startMax][endMax];
}
			`}</CodePre></li>
			<li>The efficiency of this dynamic approach is \(O(m*n)\).</li>
		</SubList></li>
	</ul>
</div>


</>