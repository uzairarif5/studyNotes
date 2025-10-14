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
      <li>Set notation:<SubList>
        <li>The symbol "\(\in\)" is read as "is an element of", while \(\notin\) is read as "is not an element of".</li>
        <li><u>Example:</u> \(a \in {"\\{a,b,c\\}"}\) means \(a\) is an element of the set \({"\\{a,b,c\\}"}\). and \(d \notin {"\\{a,b,c\\}"}\) means \(d\) is not in the set \({"\\{a,b,c\\}"}\).</li>
        <li>\(\emptyset\) is a set with no elements: \({"\\{\\}"}\).</li>
        <li>\(\mathbf{"{N}"}\) is a set of natural numbers: \({"\\{0,1,2,3, \\ldots\\}"}\).</li>
        <li>\(A \subseteq B\) asserts that \(A\) is a <b>subset</b> of \(B\): Every element of \(A\) is also an element of \(B\). They may be equal as well.</li>
        <li>\(A \subset B\) asserts that \(A\) is a <b>proper subset</b> of \(B\): Every element of \(A\) is also an element of \(B\), but \(A \neq B\).</li>
        <li>\(A \cap B\) is the <b>union</b> of \(A\) and \(B\): the set containing all elements in both \(A\) and \(B\).</li>
        <li>\(A \cup B\) is the <b>intersection</b> of \(A\) and \(B\): the set containing all elements in either \(A\) or \(B\).</li>
        <li>\(A \times B\) is the <b>Cartesian product</b> of \(A\) and \(B\): the set of all ordered pairs \((a,b)\) with \(a \in A\) and \(b \in B\).</li>
        <li>\(\overline{"{A}"}\) is the <b>complement</b> of \(A\): the set containing all elements not in \(A\).</li>
        <li>\(|A|\) is the <b>cardinality</b> of \(A\): the number of elements in \(A\).</li>
      </SubList></li>
      <li>Set builder notation:<SubList>
        <li><b>Set builder notation:</b> It tells us how to build a set by telling us precisely the condition elements must meet to gain access (the condition is the logical statement after the ":" symbol).</li>
        <li>Sometimes "|" is used instead of ":".</li>
        <li><u>Example:</u> \({"A=\\{x \\in \\mathbf{N} : x \\text{ is even}\\}"}\) is the set of all nartual numbers that are even.</li>
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
      <li>A function is <b>injective</b> \(or <b>one-to-one</b>\) provided every element of the codomain is the image of at most one element from the domain (i.e. two or more inputs don't map to the same output).</li>
      <li>A function is <b>surjective</b> (or <b>onto</b>) provided every element of the codomain is the image of at least one element from the domain.</li>
      <li>A <b>bijection</b> function is both injective and surjective.</li>
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

<h2>Counting</h2>
<div className="content">
  <ul data-source={5} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li>Pascal's triangle:<SubList>
      <li>Every number in the triangle is the sum of the two numbers above it.</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/8.jpeg"} width="75%"/>
      <li>The entry in row \(n\) and column \(k\) will be denoted as \({"\\binom{n}{k}"}\), where the first row and column are both 0.</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/9.jpeg"} width="75%"/>
      <li>We pronounce \(\binom n k\) as "\(n\) choose \(k\)".</li>
    </SubList></li>
    <li>Lattic paths:<SubList>
      <li>The <b>integer lattice</b> is the set of all points in the Cartesian plane for which both the \(x\) and \(y\) coordinates are integers.</li>
      <li>A <b>lattice path</b> is one of the shortest possible paths connecting two points on the lattice, moving only horizontally and vertically. For example, here are three possible lattice paths from the point \((0,0)\) to \((3,2)\):</li>
      <ImgComp src={"/articlePics/discrete_mathematics_pics/10.jpeg"} width="95%"/>
      <li>how many lattice paths are there between \((0,0)\) and \((3,2)\)? Let \(x\) mean one unit of travel in the horizontal direction and let \(y\) mean one unit of travel in the vertical direction. We would get the following ten paths:</li>
      <MathStuff>{"\\begin{gather} xxxyy \\quad xxyxy \\quad xyxxy \\quad yxxxy \\\\ yxxyx \\quad yxyxx \\quad yyxxx \\quad xyxyx \\quad xyyxx \\quad xxyyx \\end{gather}"}</MathStuff>
    </SubList></li>
    <li>Bit strings:<SubList>
      <li>A <b>bit string</b> is a string of binary digits. The binary digits are simply the numbers 0 and 1.</li>
      <li>A <b>n-bit string</b> is a bit string of length \(n\).</li>
      <li>The <b>weight</b> of a bit string is the number of 1's in it.</li>
      <li>\({"\\textbf{B}_k^n"}\) is the set of all n-bit strings of weight \(k\).</li>
      <li>How many 5-bit strings have weight 3? Here are all of them:</li>
      <MathStuff>{"\\begin{gather} 11100 \\quad 11010 \\quad 10110 \\quad 01110 \\\\ 11001 \\quad 10101 \\quad 01101 \\quad 10011 \\quad 01011 \\quad 00111 \\end{gather}"}</MathStuff>
      <li>Notice that the first row contains all bit strings \({"\\textbf{B}_3^5"}\) which starts with 0, and the second row contains all bit strings \({"\\textbf{B}_3^5"}\) which starts with 1.</li>
      <li>You may notice that:</li>
      <MathStuff>{"|\\textbf{B}_3^5| = |\\textbf{B}_3^4| + | \\textbf{B}_2^4 |"}</MathStuff>
      <li>We can generalize this and say that to find the number n-bit string with weight \(k\), we can use the number of n-bit string, weight \(k\), that starts with 0 and add it with the number of n-bit string, weight k, that start with 1.</li>
      <li>The number of n-bit string, weight \(k\), that starts with 0 is the number of (n-1)-bit string of weight \(k\).</li>
      <li>The number of n-bit string, weight \(k\), that starts with 1 is the number of (n-1)-bit string of weight \(k-1\).</li>
      <MathStuff>{"|\\textbf{B}^n_k| = |\\textbf{B}^{n-1}_k| + | \\textbf{B}^{n-1}_{k-1} |"}</MathStuff>
      <li>This indicates that we can use Pascal's triangle to count bit strings.</li>
    </SubList></li>
    <li>Subsets:<SubList>
      <li>A <b>subset</b> of a set \(A\) is any set all of whose elements are also in \(A\).</li>
      <li>Here is a list of subsets of \({"\\{1,2,3,4,5\\}"}\):</li>
      <MathStuff>{"\\begin{gather} \\{ 1,2,3 \\} \\quad \\{ 1,2,4 \\} \\quad \\{ 1,3,4 \\} \\quad \\{ 2,3,4 \\} \\\\ \\{1,2,5 \\} \\quad \\{1,3,5 \\} \\quad \\{2,3,5\\} \\quad \\{1,4,5\\} \\quad \\{2,4,5\\} \\quad \\{3,4,5\\} \\end{gather}"}</MathStuff>
      <li>Suppose we use 5-bit strings of weight 3 to represent the subsets. For example, 11010 can represent the subset \({"\\{1,2,4\\}"}\), where is 1's indicates that the number is included in the subset and 0's indicate that the number is not in the subset.</li>
      <MathStuff>{"\\begin{gather} 10101 \\quad \\{1,3,5\\} \\\\ 10011 \\quad \\{1,4,5\\} \\\\ 00111 \\quad \\{3,4,5\\} \\end{gather}"}</MathStuff>
      <li>The number of \(k\)-element subsets of a set with \(n\) elements is the same as the number of n-bit strings of weight \(k\), and that is the number in row \(n\), column \(k\) of the triangle: \(\binom n k\). This is why we pronounce \(\binom n k\) as "\(n\) choose \(k\)".</li>
    </SubList></li>
    <li>Combining Outcomes:<SubList>
      <li><u>Sum principle:</u> If an event \(A\) results in \(m\) outcomes, and event \(B\) results in \(n\) disjoint outcomes, then the event "\(A\) or \(B\)" results in \(m+n\) outcomes.</li>
      <li><u>Product Principle:</u> If event \(A\) can occur in \(m\) ways, and each possibility for \(A\) allows for exactly \(n\) ways for event \(B\), then the event "\(A\) and \(B\)" can occur in \(m * n\) ways.</li>
      <li>Given finite sets \(A\) and \(B\):</li>
      <MathStuff>|A \cup B| = |A| + |B| - |A \cap B|</MathStuff>
      <li>Given finite sets \(A\), \(B\) and \(C\):</li>
      <MathStuff>\begin{"{align}"} |A \cup B \cup C| =& |A| + |B| + |C| \\ &- |A \cap B| - |A \cap C| - |B \cap C| \\ & + |A \cap B + \cap C| \end{"{align}"}</MathStuff>
    </SubList></li>
    <li>Permutations and combinations:<SubList>
      <li>A <b>permutation</b> is a (possible) rearrangement of objects.</li>
      <li>There are \(n!\) permutations of \(n\) (distinct) elements.</li>
      <li>\(P(n,k)\) is the number of \(k\)-permutations of \(n\) elements, the number of ways to arrange \(k\) objects chosen from \(n\) distinct objects.</li>
      <MathStuff>P(n,k) = {"\\frac{n!}{(n-k)!}"} = n (n-1) (n-2) \cdots (n-(k-1))</MathStuff>
      <li>Let's consider another way to count sequences: First count sets, then arrange them.</li>
      <li>You have \(n\) objects, and you need to choose \(k\) of them. You can do that in \(\binom n k\) ways. After selecting \(k\) elements, we can arrange those elements in \(k!\) ways. Therefore:</li>
      <MathStuff>P(n,k) = \binom n k \cdot k!</MathStuff>
      <li>Which means:</li>
      <MathStuff>\binom n k = {"\\frac{n!}{(n-k)! k!}"}</MathStuff>
      <li>Another name for the collections of things that \(\binom n k\) counts is <b>combinations</b>.</li>
      <li>We should decide whether the outcomes we are counting are sets or sequences. If we are counting sets, think combination. If we are counting sequences, think permutation.</li>
    </SubList></li>
    <li>Counting Multisets:<SubList>
      <li>How many ways are there to distribute 7 coins into 4 buckets? We can represent the arrangements using bit strings, where we use 0's to represent the coins and 1's to divide the coins.</li>
      <li>The bit string 0001010100 represents the three coins in the first bucket, 1 coin in the second and third bucket, and two coins in the fourth bucket.</li>
      <li>The bit string 1000100100 represents the zero coins in the first bucket, three coins in the second bucket, and two coins in the third and fourth bucket.</li>
      <li>The bit string 1000000011 represents the zero coins in the first bucket, seven coins in the second bucket, and no coins in the third and fourth buckets.</li>
      <li>We can use combinations here, the number of ways to distribute 7 coins into 4 buckets is \(|\textbf B {"^ {10} _ 3"}| \), or \({"\\binom {10} 3"}\).</li>
      <li>Suppose we want to distribute 20 coins into 4 buckets, where each bucket contains at least 1 coin. We can start by putting 1 coin in each bucket, then figuring out how many ways to distribute 16 coins into 4 buckets.</li>
      <li>We can represent this issue using bit strings with sixteen 0's (coins) and three 1's (dividers). Since \(|\textbf B {"^ {19} _ 3 | = \\binom {19} {3}"} \), then there are 969 ways to divide 16 coins into 4 buckets, or 20 coins into 4 buckets with each bucket contain at least one coin.</li>
    </SubList></li>
  </ul>
  <ul data-source={5} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <MathStuff>{"\\binom n 0 + \\binom n 1 + \\binom n 2 + \\cdots + \\binom n n = 2^n"}</MathStuff>
    <li>Applications to Probability:<SubList>
      <li>The things we can assign probabilities to are called <b>random experiments</b>. These can have different possible <b>outcomes</b>.</li>
      <li>We will call the (finite) set of possible outcomes to a random experiment the <b>sample space</b>. An <b>event</b> is a subset of teh sample space.</li>
      <li>Suppose a random experiment has sample space \(S\). The <b>probability</b> of an event \(E\) is the number of outcomes in \(E\) divided by the number of outcomes in \(S\). We write this as \(P(E) = {"\\frac{|E|}{|S|}"}\).</li>
      <li>The probability of the complement of an event \(\overline E\) is: \(P(\overline E) = 1 - P(E)\).</li>
      <li>Suppose \(A\) and \(B\) are two events. Then the probability of either \(A\) or \(B\) happening is:</li>
      <MathStuff>P(A \cup B) = P(A) + P(B) - P(A \cap B)</MathStuff>
      <li>Given two events \(A\) and \(B\), the <b>conditional probability</b> of \(A\) given \(B\) is:</li>
      <MathStuff>P(A|B) = {"\\frac{P(A \\cap B)}{P(B)} = \\frac{|A \\cap B|}{|B|}"}</MathStuff>
      <li>If \(A\) and \(B\) are independent, then \(P(A|B)=P(A)\).</li>
    </SubList></li>
    <li>Counting Derangements:<SubList>
      <li>A <b>derangement</b> of \(n\) elements \({"\\{1,2,3, \\ldots,n\\}"}\) is a permutation in which no element is fixed.</li>
      <li>There are 6 permutations of the three elements \({"\\{1,2,3\\}"}\):</li>
      <MathStuff>123 \ 132 \ 213 \ 231 \ 312 \ 321</MathStuff>
      <li>123 has all three elements fixed (all three elements are in their original position). 132 has only the first element fixed. The only derangements are 231 and 312.</li>
    </SubList></li>
  </ul>
</div>

<h2>Sequences</h2>
<div className="content">
  <ul data-source={5} style={{width:" 49%",marginLeft: "0.5%",float: "left"}}>
    <li>Basics:<SubList>
      <li>A <b>sequence</b> is simply an ordered list of numbers.</li>
      <li>When we use variables to represent terms in a sequence they will look like this:</li>
      <MathStuff>\[ a_0, a_1, a_2, a_3, \ldots \]</MathStuff>
      <li>To refer to the entire sequence at once, we will write \((a_n)_{"{n \\in \\mathbb{N}}"}\) or \((a_n)_{"{n \\ge 0}"}\).</li>
      <li>The numbers in the subscripts are called <b>indices</b> (the plural of <b>index</b>).</li>
      <li>We might replace the \(a\) with another letter, and sometimes start with \(a_1\), in which case we would use \((a_n)_{"{n \\ge 1}"}\) to refer to the sequence as a whole.</li>
    </SubList></li>
    <li>Closed definition and recursive definition:<SubList>
      <li>A <b>closed formula</b> for a sequence \((a_n)_{"{n \\in \\mathbb{N}}"}\) is a formula for \(a_n\) using a fixed finite number of operations on \(n\).</li>
      <li><u>Example:</u> \(a_n = n^2\).</li>
      <li>A <b>recursive definition</b> (sometimes called an <b>inductive definition</b>) for a sequence \((a_n)_{"{n \\in \\mathbb{N}}"}\) consists of:<SubList>
        <li>A <b>recurrence relation</b>: an equation relating a term of the sequence to previous terms (terms with smaller index);</li>
        <li>and an <b>initial condition</b>: a list of a few terms of the sequence (one less than the number of terms in the recurrence relation).</li>
      </SubList></li>
      <li><u>Example:</u> \(a_n = {"2a_{n-1} - a_{n-2}"}\) with \(a_0 = 3\) and \(a_1 = 4\).</li>
    </SubList></li>
    <li>Partial Sums:<SubList>
      <li>Given any sequence \((a_n)_{"{n \\in \\mathbb{N}}"}\), we can always form a new sequence \((b_n)_{"{n \\in \\mathbb{N}}"}\) by:</li>
      <MathStuff>\[b_n = a_0 +a_1 +a_2 + \ldots +a_n\]</MathStuff>
      <li>Since the terms of \(b_n\) are the sums of the initial part of the sequence \(a_n\), we call \(b_n\) the <b>sequence of partial sums of</b> \(a_n\).</li>
    </SubList></li>
    <li>Sequence of differences:<SubList>
      <li>It is also often useful to look at the <b>sequence of differences</b> of a sequence \(a_n\). By this we just mean the sequence \(d_n\) where:</li>
      <MathStuff>\[ d_n = {"a_{n+1} - a_n"} \]</MathStuff>
      <li>The original sequence is the sequence of partial sums of the sequence of differences!</li>
    </SubList></li>
    <li>Arithmetic sequences:<SubList>
      <li>If the terms of a sequence differ by a constant, we say the sequence is <b>arithmetic</b>.</li>
      <li>Recursive definition: \(a_n = {"{a_{n-1}}"} +d\) with \(a_0 = a\).</li>
      <li>Closed formula: \(a_n = a + dn\).</li>
    </SubList></li>
    <li>Geometric sequences:<SubList>
      <li>A sequence is called <b>geometric</b> if the ratio between successive terms is constant.</li>
      <li>Recursive definition: \(a_n = r{"{a_{n-1}}"} \) with \(a_0 = a\).</li>
      <li>Closed formula: \(a_n = a \cdot r^n\).</li>
    </SubList></li>
  </ul>
  <ul data-source={5} style={{width:" 49%",marginRight: "0.5%",float: "right"}}>
    <li>Polynomial Sequences:<SubList>
      <li>Consider a sequence: \(1,5,14,30,55,\dots\). This sequence os not arithmetic or geometric.</li>
      <li>The sequence of differences is: \(4,9,16,25, \ldots\). This is not arithmetic as well.</li>
      <li>The sequence of <b>second differences</b> is \(5,7,9, \ldots\), which is arithmetic. We will call such a sequence \(\Delta ^3\)-constant.</li>
      <li>we will say a sequence is a \(\Delta ^k\)-constant sequence if the \(k\)th differences are constant.</li>
      <li>The \(\Delta^0\)-constant sequences are constants.</li>
      <li><b>Polynomial Fitting:</b> The closed formula for a sequence will be a degree \(k\) polynomial if and only if the sequence is \(\Delta ^k\)-constant (i.e., \(k\)th sequence of differences is constant).</li>
    </SubList></li>
    <li>Induction Proof Structure:<SubList>
      <li>Start by saying what the statement is that you want to prove: "Let \(P(n)\) be the statement \(\ldots\)."</li>
      <li>To prove that \(P(n)\) is true for all \(n \ge 0\), you must prove two facts:<SubList opened>
        <li><u>Base case:</u> Prove that \(P(0)\) is true.</li>
        <li><u>Inductive case:</u> Prove that \(P(k) \rightarrow P(k+1)\) for all \(k \ge 0\). That is, prove that for any \(k \ge 0\) if \(P(k)\) is true, then \(P(k+1)\) is true as well. This is the proof of an if … then … statement, so you can assume \(P(k)\) is true (\(P(k)\) is called the <b>inductive hypothesis</b>). You must then explain why \(P(k+1)\) is also true, given that assumption.</li>
      </SubList></li>
      <li>Example:<SubList>
        <li>Prove that for all \(n \in {"{\\mathbf{N}}"}\), \(6^n - 1\) is a multiple of 5.</li>
        <li>Let \(P(n)\) be the statment "\(6^n - 1\) is a multiple of 5".</li>
        <li>We can manually check that \(P(1)\) is true (base case).</li>
        <li>Assume \(P(k)\) is true, so \(6^k -1= 5j \), so \(6^k = 5j +1\).</li>
        <MathStuff>{"\\begin{align}6^{k+1} = 6 * 6^k = 6(5j + 1) = 30j + 6 \\\\ 6^{k+1} -1 = 30j + 5 \\end{align}"}</MathStuff>
        <li>Since \(30j + 5\) is divisible by 5, then \(P(k+1)\) is also true.</li>
      </SubList></li>
    </SubList></li>
    <li>Strong Induction Proof Structure:<SubList>
      <li>Start by saying what the statement is that you want to prove: "Let \(P(n)\) be the statement \(\ldots\)."</li>
      <li>Establish two facts:<SubList opened>
        <li><u>Base case:</u> Prove that \(P(0)\) is true.</li>
        <li><u>Inductive case:</u> Assume \(P(j)\) is true for all \(j \le k\). Prove that \(P(k+1)\) is true.</li>
      </SubList></li>
    </SubList></li>
    <li>The Characteristic Root Technique:<SubList>
      <li>Given a recurrence relation \(a_n + {"\\alpha a_{n-1} + \\beta a_{n-2} = 0"}\), the <b>characteristic polynomial</b> is:</li>
      <MathStuff>x^2 + \alpha x + \beta</MathStuff>
      <li>giving the <b>characteristic equation</b>:</li>
      <MathStuff>x^2 + \alpha x + \beta = 0</MathStuff>
      <li>If \(r_1\) and \(r_2\)  are the solutions to the characteristic equation, then the solution to the recurrence relation is:</li>
      <MathStuff>a_n = ar_1^n + br_2^n</MathStuff>
      <li>where \(a\) and \(b\) are constants determined by the initial conditions.</li>
      <li>Suppose the recurrence relation \(a_n = {"\\alpha a_{n-1} + \\beta a_{n-2}"}\) has a characteristic polynomial with only one root \(r\). Then the solution to the recurrence relation is:</li>
      <MathStuff>a_n = ar^n + bnr^n</MathStuff>
      <li>where \(a\) and \(b\) are constants determined by the initial conditions.</li>
    </SubList></li>
  </ul>
</div>

<h2>Generating Functions</h2>
<div className="content"></div>

</>