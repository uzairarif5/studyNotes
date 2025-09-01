import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import SubList from "../../articleRelatedStuff/SubList";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Discrete Mathematics Notes";

export const sourcesColor = {5: "#776690"};
export const content = <>

<h1>Discrete Mathematics Notes</h1>
<h2>Discrete Structures</h2>
<div className="content">
  <ul data-source={5} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li><b>Discrete structures:</b> They are the mathematical objects that we use to represent parts of the problems we are solving.</li>
    <li><b>Sets:</b><SubList>
      <li>A <b>set</b> is an unordered collection of elements.</li>
      <li>We can describe sets by saying exactly what elements are members of the set. How to specify memebership:<SubList>
        <li>In words (e.g., Let be the set of all natural numbers less than 10).</li>
        <li>By explicitly listing all the elements (e.g., \(A={"\\{3,5,7\\}"}\)).</li>
        <li>By using something called <b>set comprehension</b> (also called <b>set builder notation</b>). An example of this is \(A = {"\\{x \\in \\mathbb{N}:x < 10\\}"}\). We would read that as "\(A\) is the set of natural numbers that satisfy the property that they are less than 10."</li>
      </SubList></li>
    </SubList></li>
    <li><b>Functions:</b><SubList>
      <li>One way to define a <b>function</b> is as a rule that assigns each input exactly one output.</li>
      <li>The output is called the <b>image</b> of the input.</li>
      <li>Functions also come equipped with a <b>domain</b>, the set of all inputs, and a <b>codomain</b>, the set of all allowable outputs.</li>
      <li>You might also speak of the <b>range</b> of the function, which is the set of all actual outputs, or put another way, the set of all images of elements from the domain.</li>
      <li>We write \(f : X \rightarrow Y\)  to describe a function with name \(f\), domain \(X\) and codomain \(Y\).</li>
      <li>A <b>closed formula</b> is one in which each output is given by an explicit rule based solely on its input.</li>
      <li>A <b>recursive definition</b> of a function tells us how to compute the output for a given input based on other outputs of the function.</li>
    </SubList></li>
  </ul>
  <ul data-source={5} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <li><b>Sequences:</b><SubList>
      <li>It is fine to think of a <b>sequence</b> of numbers as an ordered list. We can refer to the terms simply as: \(a_0, a_1, a_2, \ldots\).</li>
      <li>If we want to be a little more precise and more abstract, we can think of a sequence as a function:<SubList>
        <li>The domain is the natural numbers or some subset of consecutive natural numbers. The codomain is some set.</li>
        <li>We think of the domain as the positions in the sequence, and the image of those inputs as the terms in the sequence.</li>
      </SubList></li>
    </SubList></li>
    <li><b>Relations:</b><SubList>
      <li>Examples of <b>relations</b>: less than, multiple of, both even, not equal.</li>
      <li>The examples above are all <b>binary relations</b> in that they relate two elements.</li>
      <li> The careful and formal way to define a relation is as a set of ordered pairs (or triples, etc.):<SubList>
        <li>Consider the (infinite) set of all ordered pairs \((a,b)\) such that \(a \lt b\).</li>
        <li>Every element of this set contains numbers for which the relation "less than" is true, and every pair of numbers for which the relation is true is a pair in the set.</li>
        <li>we can say that this set of pairs is the relation.</li>
      </SubList></li>
      <li>The less-than relation is, for example, <b>irreflexive</b> because there are no elements that are less than themselves.</li>
      <li>It is also <b>antisymmetric</b> since there are no distinct numbers \(a\) and \(b\) such that \(a \lt b\) and \(b \lt a\).</li>
      <li>It is also <b>transitive</b> since if \(a \lt b\) and \(b \lt c\) then it must follow that \(a \lt c\).</li>
    </SubList></li>
    <li><b>Graphs:</b><SubList>
      <li>A <b>graph</b> is a type of relation, one that is symmetric (if \(a\) is related to \(b\), then \(b\) is related to \(a\)) and irreflexive (no element is related to itself).</li>
      <li>However, we mostly think of graphs as the drawings of dots and lines, or more precisely as a set of <b>vertices</b> together with a set of <b>edges</b>, where each edge is a two-element subset of the vertices.</li>
    </SubList></li>
  </ul>
</div>

<h2>Logic And Proofs</h2>
<div className="content">
  <ul data-source={5} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li><b>Logic</b> is the study of consequence.</li>
    <li>Arguments:<SubList>
      <li>A <b>statement</b> is a declarative sentence that is either true or false.</li>
      <li>An <b>argument</b> is a sequence of statements, the last of which is called the <b>conclusion</b> and the rest of which are called <b>premises</b>.</li>
      <li>An argument is said to be <b>valid</b> provided the conclusion must be true whenever the premises are all true.</li>
      <li>An argument is <b>invalid</b> if it is not valid; that is, all the premises can be true, and the conclusion could still be false.</li>
      <li>An argument is <b>sound</b> provided it is valid and all the premises are true.</li>
      <li>A <b>proof</b> of a statement is a sound argument whose conclusion is the statement.</li>
    </SubList></li>
    <li>Atomic and Molecular Statements:<SubList>
      <li>A statement is any declarative sentence which is either true or false. A statement is <b>atomic</b> if it cannot be divided into smaller statements, otherwise it is called <b>molecular</b>.</li>
      <li>You can build more complicated (molecular) statements out of simpler (atomic or molecular) ones using <b>logical connectives</b>.</li>
      <li>We define the following logical connectives:<SubList>
        <li><b>Conjunction:</b> \(P \land Q\), read "\(P\) and \(Q\)".</li>
        <li><b>Disjunction:</b> \(P \lor Q\), read "\(P\) or \(Q\)".</li>
        <li><b>Implication:</b> \(P \rightarrow Q\), read "if \(P\) then \(Q\)".</li>
        <li><b>Biconditional:</b> \(P \leftrightarrow Q\), read "\(P\) if and only if \(Q\)".</li>
        <li><b>Negation:</b> \(\neg P\), read "not \(P\)".</li>
      </SubList></li>
      <li>The first four are called <b>binary connectives</b> (because they connect two statements) while "not" is an example of a <b>unary connective</b> (since it applies to a single statement).</li>
    </SubList></li>
    <li>Truth table:<SubList>
      <li>The logical connectives can be represented in a table, called a <b>truth table</b>.</li>
      <li>We simply list what the truth value of the statement is for each possible combination of truth values of the parts.</li>
      <TableLI>
        <thead>
          <tr><th>\(P\)</th><th>\(Q\)</th><th>\(P \land Q\)</th><th>\(P \lor Q\)</th><th>\(P \rightarrow Q\)</th><th>\(P \leftrightarrow Q\)</th></tr>
        </thead>
        <tbody>
          <tr><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td><td>T</td></tr>
          <tr><td>T</td><td>F</td><td>F</td><td>T</td><td>F</td><td>F</td></tr>
          <tr><td>F</td><td>T</td><td>F</td><td>T</td><td>T</td><td>F</td></tr>
          <tr><td>F</td><td>F</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
        </tbody>
      </TableLI>
      <TableLI>
        <thead>
          <tr><th>\(P\)</th><th>\(P \neg Q\)</th></tr>
        </thead>
        <tbody>
          <tr><td>T</td><td>F</td></tr>
          <tr><td>F</td><td>T</td></tr>
        </tbody>
      </TableLI>
    </SubList></li>
    <li>Quantifiers and Predicates:<SubList>
      <li>A <b>predicate</b> is like a statement, but contains a <b>free variable</b>. When you replace that variable with a constant of some sort, then the sentence becomes a statement proper.</li>
      <li>A predicate can be made into a (true or false) statement by evaluating it at some constant(s), or we can claim that some or all possible constants would make the resulting statement true or false. This is done using <b>quantifiers</b>.</li>
      <li>For example, we might use the predicate \(P(x)\) to represent "\(x\) is prime".</li>
      <li>The <b>universal quantifier</b> is written \(\forall\) and is read, "for all". The existential quantifier \(\exists\) is written and is read, "there exists" or "for some".</li>
      <li>Any statement of the form, "Every \(P\)-thing is a \(Q\)-thing" can be written as:</li>
      <MathStuff>\[ \forall x (P(x) \rightarrow Q(x)) \]</MathStuff>
      <li>Any statement of the form, "Some \(P\)-things are \(Q\)-things" can be written as:</li>
      <MathStuff>\[ \exists x (P(x) \land Q(x)) \]</MathStuff>
      <li>Given a sentence with free variables, the <b>universal generalization</b> of that sentence is the statement obtained by adding enough universal quantifiers to the beginning of the sentence so that all free variables become bound.</li>
    </SubList></li>
  </ul>
  <ul data-source={5} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <li>Implication:<SubList>
      <li>An <b>implication</b> (or <b>conditional</b>) is a molecular statement of the form \(P \rightarrow Q\) where \(P\) and \(Q\) are statements. We say that \(P\) is a <b>hypothesis</b> (or <b>antecedent</b>) and that \(Q\) is a <b>conclusion</b> (or <b>consequent</b>).</li>
      <li>Our definition of the truth conditions for an implication says that there is only one way for an implication to be false: when the hypothesis is true and the conclusion is false.</li>
      <li>The <b>converse</b> is the statement \(Q \rightarrow P\).</li>
      <li>The <b>contrapositive</b> is the statement \(\neg Q \rightarrow \neg P\). The contrapositive of a true statement is always true.</li>
      <li>The <b>inverse</b> is the statement \(\neg P \rightarrow \neg Q\).</li>
      <li>"\(P\) is necessary for \(Q\)" means \(Q \rightarrow P\).</li>
      <li>"\(P\) is sufficient for \(Q\)" means \(P \rightarrow Q\).</li>
      <li>If \(P\) is necessary and sufficient for \(Q\), then \(P \leftrightarrow Q\).</li>
    </SubList></li>
    <li>Logical equivalence:<SubList>
      <li>Two (molecular) statements \(P\) and \(Q\) are <b>logically equivalent</b> provided \(P\) is true precisely when \(Q\) is true. We write this as \(P \equiv Q\). Example:</li>
      <MathStuff>\[P \rightarrow Q \equiv \neg Q \rightarrow \neg P\]</MathStuff>
      <li><b>De Morgan's Laws:</b><SubList opened>
        <MathStuff>\[\begin{"{align}"} \neg (P \land Q) \equiv \neg P \lor \neg Q \\ \neg (P \lor Q) \equiv \neg P \land \neg Q \end{"{align}"}\]</MathStuff>
      </SubList></li>
      <li>Implications are disjunctions: \(P \rightarrow Q \equiv \neg P \lor Q\).</li>
      <li>Quantifiers and Negation:<SubList opened>
        <li>\(\neg \forall x P(x)\) is equivalent to \(\exists x \neg P(x)\).</li>
        <li>\(\neg \exists x P(x)\) is equivalent to \(\forall x \neg P(x)\).</li>
      </SubList></li>
    </SubList></li>
    <li>Deductions:<SubList>
      <li><b>Deduction rule:</b> an argument form that is always valid.</li>
      <MathStuff>\[ {"\\begin{gather} p \\rightarrow q \\\\ p \\\\ \\therefore q \\end{gather}"} \]</MathStuff>
      <li>This one is a particularly famous rule called <b>modus ponens</b>.</li>
    </SubList></li>
    <li>Proof Styles:<SubList>
      <li><b>Direct:</b> Assume \(P\). Explain, explain, ..., explain. Therefore \(Q\).</li>
      <li><b>Contrapositive:</b> Assume \(\neg Q\). Explain, explain, ..., explain. Therefore \(\neg P\).</li>
      <li><b>Contradiction:</b> Assume \(\neg P\). This means that ..., which tells us ..., so we can say ... But that is a contradiction, so \(P\) must in fact be true.</li>
    </SubList></li>
  </ul>
</div>

<h2>Graph Theory</h2>
<div className="content">
  <ul data-source={5} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li>Graph:<SubList>
      <li>Graphs are made up of a collection of dots called <b>vertices</b> and lines connecting those dots called <b>edges</b>. When two vertices are connected by an edge, we say they are <b>adjacent</b>.</li>
      <li><u>Proper definition:</u> A graph is an ordered pair \(G=(V,E)\) consisting of a nonempty set \(V\) (called the vertices) and a set \(E\) (called the edges) of two-element subsets of \(V\).</li>
      <li>We often draw a representation of these sets. We put a dot down for each vertex, and connect two dots with a line precisely when those two vertices are one of the 2-element subsets in our set of edges.</li>
      <li>Consider this graph:</li>
      <MathStuff>\[({"\\{a,b,c,d\\},\\{\\{a,b\\},\\{ a,c\\}, \\{ b,c\\},\\{ b,d\\},\\{c,d\\}\\}"})\]</MathStuff>
      <li>Ways to draw this graph:</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/1.jpeg"} width="50%"/>
      <li>A Graph is <b>connected</b> if you can get from any vertex to any other vertex by following some path of edges. The following graph  is not connected, because you cannot go from \(a\) to \(b\):</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/3.jpeg"} width="40%"/>
      <li>A graph is <b>complete</b> if every pair of vertices is connected by an edge. \(K_n\) is a complete graph on \(n\) vertices.</li>
    </SubList></li>
    <li><b>Isomorphism:</b><SubList>
      <li>An <b>isomorphism</b> between two graphs \(G_1\) and \(G_2\) is a bijection \(f:V_1 \rightarrow V_2\) between the vertices of the graphs such that \({"\\{a,b\\}"}\) is an edge in \(G_1\) if and only if \({"\\{ f(a),f(b) \\}"}\) is an edge in \(G_2\).</li>
      <li>Two graphs are <b>isomorphic</b> if there is an isomorphism between them. In this case we write \(G_1 \cong G_2\).</li>
      <li>An isomorphism is simply a function which renames the vertices. It must be a bijection so every vertex gets a new name.</li>
      <li>A collection of isomorphic graphs is often called an <b>isomorphism class</b>.</li>
    </SubList></li>
    <li>Subgraphs:<SubList>
      <li>We say that \(G' = (V',E')\) is a <b>subgraph</b> of \(G = (V,E)\), and write \(G' \subseteq G\), provided \(V' \subseteq V\) and \(E' \subseteq E\).</li>
      <li>In the graphs below, \(G_2\) and \(G_3\) are subgraphs of \(G_1\), but \(G_4\) is not.</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/2.jpeg"} width="90%"/>
      <li>We say that \(G' = (V',E')\) is an <b>induced subgraph</b> of \(G=(V,E)\) provided \(V' \subseteq V\) and every edge in \(E\) whose vertices are still in \(V'\) is also an edge in \(E'\).</li>
      <li>\(G_2\) is an induced subgraph, because every edge in \(G_1\) that connects the vertices in \(G_2\) (\({"\\{a,b,c,d\\}"}\)) is also an edge in \(G_2\).</li>
      <li>\(G_3\) is not an induced subgraph because the edge \({"\\{a,b\\}"}\) is in \(E_1\) but not in \(E_3\), even though vertices \(a\) and \(b\) are in \(V_3\).</li>
    </SubList></li>
    <li>Multigraphs:<SubList>
      <li>Graphs are suppose to connect vertices with one edge only. If you want more edges, we would use <b>multigraphs</b>.</li>
      <li>A <b>multiset</b> is a set in which we are allowed to include a single element multiple times.</li>
    </SubList></li>
    <li><b>Degree:</b><SubList>
      <li>We call the number of edges emanating from a given vertex the <b>degree</b> of that vertex.</li>
      <li><b>Handshake Lemma:</b> In any graph, the sum of the degrees of vertices in the graph is always twice the number of edges:</li>
      <MathStuff>\[\sum_{"{v \\in V}"} d(v) = 2e\]</MathStuff>
      <li><b>Degree sequence:</b> A list of every degree of every vertex in the graph, generally written in non-increasing order. For example: \((4,4,3,3,3,2,1)\).</li>
    </SubList></li>
    <li><b>Bipartite graphs</b>:<SubList>
      <li>We say a graph is <b>bipartite</b> if the vertices can be divided into two sets, \(A\) and \(B\), with no two vertices in \(A\) adjacent and no two vertices in \(B\) adjacent.</li>
      <li>If each vertex in \(A\) is adjacent to all the vertices in \(B\), then the graph is a <b>complete bipartite graph</b>, and gets a special name: \({"K_{m,n}"}\), where \(|A|=m\) and \(|B|=n\).</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/4.jpeg"} width="20%"/>
    </SubList></li>
    <li><b>Trees:</b><SubList>
      <li>A <b>tree</b> is a connected graph containing no cycles.</li>
      <li>A <b>forest</b> is a graph containing no cycles. Note that this means that a connected forest is a tree.</li>
      <li>A graph \(T\) is a tree if and only if between every pair of distinct vertices of \(T\) there is a unique path.</li>        <li>A graph \(F\) is a forest if and only if between any pair of vertices in \(F\) there is at most one path.</li>
      <li>Any tree with at least two vertices has at least two vertices of degree one.</li>
      <li>Let \(T\) be a tree with \(v\) vertices and \(e\) edges. Then \(e = v - 1\).</li>
      <li>Given a connected graph \(G\), a <b>spanning tree</b> of \(G\) is a subgraph of \(G\) which is a tree and includes all the vertices of \(G\). Every connected graph has a spanning tree.</li>
      <li><b>Rooted Trees:</b><SubList>
        <li>If one vertex of a tree is designated as the "root", then every other vertex on the tree can be characterized by its position relative to the root.</li>
        <li>If two vertices are adjacent, then we say that the one closer to the root is the <b>parent</b> of the other, which is called the <b>child</b> of the parent.</li>
        <li>The child of a child of a vertex is called the <b>grandchild</b> of the vertex (and it is the <b>grandparent</b>).</li>
        <li>A vertex \(v\) is a descendent of a vertex \(u\) provided \(u\) is a vertex on the path from \(v\) to the root. Then we would call \(u\) an <b>ancestor</b> of \(v\).</li>
        <li>Vertices \(u\) and \(v\) are called <b>siblings</b> provided they have the same parent.</li>
      </SubList></li>
    </SubList></li>
    <li>Planar Graphs:<SubList>
      <li>When a connected graph can be drawn without any edges crossing, it is called <b>planar</b>.</li>
      <li>When a planar graph is drawn in this way, it divides the plane into regions called <b>faces</b>.</li>
      <li>This is a planar graph:</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/5.jpeg"} width="25%"/>
      <li>Because it can be drawn like this:</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/6.jpeg"} width="25%"/>
      <li>The graphs are the same, so if one is planar, the other must be, too. However, the original drawing of the graph was not a <b>planar representation</b> of the graph.</li>
      <li>The graph above has 3 faces (we include the "outside" region as a face).</li>
      <li><u>Euler's Formula:</u> For any connected planar graph with \(v\) vertices, \(e\) edges, and \(f\) faces, we have: \(v-e+f=2\).</li>
    </SubList></li>
  </ul>
  <ul data-source={5} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <li><b>Polyhedra:</b><SubList>
      <li>A <b>polyhedron</b> is a geometric solid made up of flat polygonal faces joined at edges and vertices.</li>
      <li><b>Convex polyhedra:</b> any line segment connecting two points on the interior of the polyhedron must be entirely contained inside the polyhedron.</li>
      <li>Every convex polyhedron can be projected onto the plane without edges crossing.</li>
      <li><b>Regular polyhedra</b> Each face is an identical regular polygon and each vertex joins an equal number of faces. There are exactly five regular polyhedra:<SubList>
        <li><u>Tetrahedron:</u> A regular polyhedra with four trianglular faces.</li>
        <li><u>Octahedron:</u> A regular polyhedra with eight trianglular faces.</li>
        <li><u>Icosahedron:</u> A regular polyhedra with twenty trianglular faces.</li>
        <li><u>Cube:</u> A regular polyhedron with square faces.</li>
        <li><u>Dodecahedron:</u>  A regular polyhedron with pentagons as faces (12 pentagons in total).</li>
      </SubList></li>
    </SubList></li>
    <li>Euler Trails and Circuits:<SubList>
      <li>A <b>walk</b> in a graph is a sequence of vertices such that every vertex in the sequence is adjacent to the vertices before and after it in the sequence.</li>
      <li>f the walk travels along every edge exactly once, then the walk is called an <b>Euler trail</b>.</li>
      <li> If, in addition, the starting and ending vertices are the same, then the walk is called an <b>Euler circuit</b>.</li>
      <li>One way to write down an Euler trail or circuit is to list the edges in order. Consider this graph:</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/7.jpeg"} width="50%"/>
      <li>There are two Euler trails we could write:</li>
      <MathStuff>\[{"\\begin{gather} (a,b),(b,c)(c,d) \\\\ (d,c),(c,b),(b,a) \\end{gather}"}\]</MathStuff>
      <li>A graph has an Euler circuit if and only if the degree of every vertex is even.</li>
      <li>A graph has an Euler trail if and only if there are at most two vertices with odd degree.</li>
    </SubList></li>
    <li><b>Hamilton paths:</b><SubList>
      <li><b>Hamilton path:</b>a path that visits every vertex exactly once.</li>
      <li><b>Hamilton cycles:</b> Hamilton paths that start and stop at the same vertex.</li>
    </SubList></li>
    <li>Vertex coloring:<SubList>
      <li>In general, given any graph \(G\), a coloring of the vertices is called a <b>vertex coloring</b>.</li>
      <li>If the vertex coloring has the property that adjacent vertices are colored differently, then the coloring is called <b>proper</b>.</li>
      <li> The smallest number of colors needed to get a proper vertex coloring is called the <b>chromatic number</b> of the graph, written \(\chi(G)\).</li>
      <li>\(K_n\) has chromatic number \(n\).</li>
      <li>If \(G\) is a planar graph, then the chromatic number of \(G\) is less than or equal to 4. Thus any map can be properly colored with 4 or fewer colors.</li>
      <li>A <b>clique</b> in a graph is a set of vertices all of which are pairwise adjacent.</li>
      <li>We define the <b>clique number</b> of a graph to be the largest \(n\) for which the graph contains a clique of size \(n\).</li>
      <li>The chromatic number of a graph \(G\) is at least the clique number of \(G\).</li>
      <li>Let \(\Delta(G)\) be the largest degree of any vertex in the graph \(G\).</li>
      <li><b>Brook's Theorem:</b> Any graph \(G\) satisfies \(\chi(G) \le \Delta (G)\), unless \(G\) is a complete graph or an odd cycle, in which case \(\chi(G)= \Delta(G)+1\).</li>
    </SubList></li>
    <li>Coloring edges:<SubList>
      <li>The least number of colors required to properly color the edges of a graph \(G\) is called the <b>chromatic index</b> of \(G\), written \(\chi ' (G)\).</li>
      <li><b>Vizing's Theorem:</b> For any graph \(G\), the chromatic index \(\chi ' (G)\) is either \(\Delta (G)\) or \(\Delta(G)+1\).</li>
      <li>Graphs for which \(\chi ' (G) = \Delta (G)\) are called <b>class 1</b>, while the others are called <b>class 2</b>.</li>
      <li>Bipartite graphs are of class 1.</li>
    </SubList></li>
    <li>Relations generally:<SubList>
      <li>A graph is a way to represent some ways that different objects are related.</li>
      <li>Let \(A \times B = {"\\{(a,b)\\}"}: a \in A, b \in B\).</li>
      <li>A <b>binary relation</b> is a set of ordered pairs. We say the binary relation is a relation on sets \(A\) and \(B\) provided the ordered pars are a subset of \(A \times B\).</li>
      <li>We say a binary relation on a set \(A\) provided the ordered pait are a subset of \(A \times A\).</li>
      <li>Given a binary relation \(R\), define \(R^{"{-1}"}\)  to be the <b>inverse</b> of \(R\) as the set: \({"R^{-1} = \\{ (b,a): (a,b) \\in R \\}"}\)</li>
      <li>Let \(R\) be a relation from set \(A\) to \(B\) and \(S\) be a relation from \(B\) to \(C\). The <b>composition</b> of \(R\) and \(S\) is:</li>
      <MathStuff>\[{"S \\circ R = \\{ (a,c) \\in A \\times C: (a,b) \\in R \\land (b,c) \\in S \\text{ for some } b \\in B \\}"}\]</MathStuff>
      <li>Properties:<SubList>
        <li>\(R\) is <b>reflexive</b> provided \((a,a) \in A\) for all \(a \in A\).</li>
        <li>\(R\) is <b>symmetric</b> provided, for all \(a,b \in A\) if \((a,b) \in R\) then \((b,a) \in R\).</li>
        <li>\(R\) is <b>transitive</b> provided, for all \(a,b,c \in A\) if \((a,b) \in R\) and \((b,c) \ in R\) then \((a,c) \in R\).</li>
      </SubList></li>
      <li>A relation that is reflexive, symmetric, and transitive is called an <b>equivalence relation</b>.</li>
      <li>Given a non-empty set \(A\), a <b>partition</b> of \(A\) is a set \(P\) of non-empty subsets of \(A\) such that every element of \(A\) is in exactly one element of \(P\).</li>
    </SubList></li>
    <li>Matching in bipartite graphs:<SubList>
      <li>Given a bipartite graph, a <b>matching</b> is a subset of the edges for which every vertex belongs to exactly one of the edges.</li>
      <li>Suppose you have a bipartite graph \(G\). This will consist of two sets of vertices \(A\) and \(B\) with some edges connecting some vertices of \(A\) to some vertices in \(B\).</li>
      <li>A <b>matching of</b> \(A\) is a subset of the edges for which each vertex of \(A\) belongs to exactly one edge of the subset, and no vertex in \(B\) belongs to more than one edge in the subset.</li>
      <li>Say you have a set \(S \subseteq A\) of vertices. Define \(N(S)\) to be the set of all the <b>neighbors</b> of vertices in \(S\).</li>
      <li><b>Hall's Marriage Theorem:</b> A bipartite graph \(G = {"\\{A,B\\}"}\) has a matching of \(A\) if and only if \(|N(S)| \ge |S|\) for all \(S \subseteq A\).</li>
    </SubList></li>
  </ul>
</div>
</>