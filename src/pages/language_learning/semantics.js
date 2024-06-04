import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableDiv, TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Semantics Notes";
export const sourcesColor = {27: null};
export const content = <>
<h1>Semantics</h1>
{getSourcesOL(sourcesColor)}

<h2 id="tom">Introduction/Theory of Meaning</h2>
<div className="content">
	<div style={{width: "48%",float: "left", marginLeft: "1%",marginRight: "1%"}}>
	<TableDiv><tbody>
		<tr><td><b>Semantics</b> is the study of the meaning of expressed by the elements of a language. The elements that contribute to the content of a linguistic expression can be syntactic (e.g., nouns, verbs, adjectives), morphological (e.g., tense, number), and even phonological (e.g., intonation, focus).</td><td><b>Pragmatics</b> is the study of the meaning of a linguistic expression when it is used by a speaker in a context.</td></tr>
		<tr><td colSpan="2">The division between semantics and pragmatics is often defined as the difference
			between <i>literal meaning</i> (what is said) and <i>non-literal meaning</i> (what is meant).</td></tr>
	</tbody></TableDiv>
	<h3>Two Kinds of Theory of Meaning</h3>
	<ul>
		<li><i>I distinguish two topics: first, the description of possible languages or grammars as abstract semantic systems whereby symbols are associated with aspects of the world; and, second, the description of the psychological and sociological facts whereby a particular one of these abstract semantic systems is the one used by a person or population. Only confusion comes of mixing these two topics.</i> - David Lewis</li>
		<li>What is the meaning of a linguistic expression? <b>Semantic Theory of Meaning</b>.</li>
		<li>What is it about an individual that gives a linguistic expression the particular meaning it has, rather than another? <b>Foundational Theory of Meaning</b>.</li>
		<li>A semantic theory describes meaning in terms of what linguistic expressions say about the
			world. A foundational theory explains why a meaning arises based on the predisposition of language users,
			their psychological or social states of being.</li>
	</ul>
	<TableDiv><tbody>
		<tr><th colSpan="2">What does it mean for a word to mean something?</th></tr>
		<tr><td><ul>
			<li><b>Words are conventional signs:</b> arbitrary sequence of sounds connected to a mutually agreed upon meaning. A word or phrase must be about something in order to have a
				meaning... must have a symbolic connection to something else</li>
			<li>All linguists agree that words are like <b>pointers</b>. When we say a word, it relates to something either in our minds or
				in the world. Here there is some disagreement.
			</li></ul></td><td><ul>
			<li>One option is the <b>dictionary</b>, but it can't simply be a game of words describing words - every word described using other words. That would be circular. Meaning must involve a connection between language and something other than language.</li>
			<li><b>Option 1: Language connects with concepts and ideas in the mind:</b> The cognitive approach to meaning. Meanings are associated with mental representations.</li>
			<li><b>Option 2: Language connects with the world:</b> The referential approach to meaning. A word points to real world things.</li>
		</ul></td></tr>
	</tbody></TableDiv>
	</div>
	<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>
		<h3>A Referential of Theory of Meaning</h3>
		<ul>
			<li><b>Reference</b> is the relation between linguistic expressions (i.e., words and
				phrases) and things in the world.</li>
			<li>Two versions of Reference:<SubList>
				<li>The first version depends on a speaker and is therefore an instance of
					language use (Speaker X uses an expression Y to identify an entity Z) [<b>performance</b>].</li>
				<li>The second version is independent of speakers and reflects language
					knowledge (Expression Y identifies entity Z) [<b>competence</b>].</li>
			</SubList></li>
			<li>John Stuart Mill:<SubList>
				<TableLI><tbody>
					<tr><th colSpan="2">Reference is not enough</th></tr>
					<tr>
						<td><b>Denotation:</b> What an expression denotes is what it
						applies to in the world.<br/>The denotation of the word <i>dog</i> includes all the entities in the world that are dogs or have been dogs, namely anything that can be called a dog.<br/>The simplest ways to determine the denotation for an expression is through <b>ostension</b>, i.e., pointing out examples.</td>
						<td><b>Connotation:</b> Necessary and sufficient properties that a term poses which determine its denotation.<br/>The word <i>dog</i> connotes having four legs, having a tail, having a snout, having fur, being man's best friend, among other properties. Every entity that satisfies these properties is included in the denotation of the word dog.<br/>Today, the word "connotation" implies that a word evokes an idea or feeling in addition to its literal meaning, due to political or social pressures.</td>
					</tr>
				</tbody></TableLI>
				<li>Mill made another important distinction. He denied that proper names have a connotation. He maintained that proper names are simply labels and therefore don't imply any particular properties. They simply denote the individual to which they are attached by virtue of being attached to that individual.</li>
			</SubList></li>
			<li>Gottlob Frege:<SubList>
				<li>Frege proposed a number of similar observations to Mill but the two disagreed on the treatment of
					proper names:<SubList>
						<li>a. Mark Twain is Mark Twain</li>
						<li>b. Mark Twain is Samuel Clemens</li>
						<li>The sentence "Mark Twain is Mark Twain" is self-evident.
							You can deduce that it is a true statement without knowing anything about the world. Statements of this kind are called <b>analytic</b>.</li>
						<li>The sentence "Mark Twain is Samuel Clemens" is not self-evident. It is informative. You cannot deduce that it is a true statement without knowing about the world.
							Statements of this kind are called <b>synthetic</b>.</li>
						<li>For Mill, however, (a) and (b) express exactly the same
							propositions because the proper names Mark Twain and Samuel Clemens are simply labels that refer to the
							same entity. This goes against native speaker intuitions.</li>
					</SubList></li>
				<li><b>Propositional attitude:</b> is the relation
					between a person and a mental attitude towards a proposition:<SubList>
						<li>a. John believes Mark Twain wrote Huckleberry Finn</li>
						<li>b. John believes Samuel Clemens wrote Huckleberry Finn</li>
						<li>Frege observed that there is a clear difference between (a) and (b). It is easy to imagine a
							situation in which one of these is true and the other is false. Again, for Mill, because proper names simply
							denote, there is no difference in meaning between (a) and (b) because Mark Twain and Samuel Clemens
							refer to the same entity. </li>
					</SubList></li>
				<li><b>Reference:</b> What an expression refers to is what it
					applies to in the world.</li>
				<li><b>Sense:</b> Mode of presentation of its referent. Each
					linguistic expression also has a sense which determines its reference. The proper name Aristotle refers to the well-known philosopher, so
					does the noun phrase <i>the teacher of Alexander the Great</i>. Each of these linguistic
					expressions refers to the same entity, however each one directs your attention in a different way.</li>
				<li><b>Principle of Compositionality:</b> The meaning of a sentence is a function of the
					meaning of its parts and their syntactic structure.</li>
				<li><b>Frege's idea:</b> the structure of the sentence serves as an image of the
					structure of the thought.</li>
			</SubList></li>
		</ul>
		<h3>Division Of Labour</h3>
		<ul>
			<li>Sentences:<SubList>
				<li>A well-formed arrangement of words in a phrase (S/TP/CP).</li>
				<li>Linguistic expression, language specific, internalized (abstract).</li>
			</SubList></li>
			<li>Propositions:<SubList>
				<li>The description of a possible state of affairs in the world, more like a
			claim than a fact.</li>
				<li>Logical expression (bears truth of falsity), object of an attitude,
			shareable.</li>
			</SubList></li>
			<li>A native
				speaker's competence includes matching a linguistic expression (like a sentence) with the appropriate content
				(a proposition).</li>
			<li>Utterances:<SubList>
				<li>A sentence used in a context.</li>
				<li>Linguistic expression, language specific, externalized (concrete).</li>
			</SubList></li>  
			<li>Examples:<SubList>
				<li><ImgComp src={require("./pics/sem1.jpg")} style={{width: "80%", marginLeft: "10%"}}/></li>
				<li><ImgComp src={require("./pics/sem2.jpg")} style={{width: "80%", marginLeft: "10%"}}/></li>
			</SubList></li>       
		</ul>
	</div>
</div>

<h2 id="st">Set Theory</h2>
<div className="content">
	<div style={{width: "48%", float: "left", marginRight: "1%", marginLeft: "1%"}}>
		<ul>
			<li>You can think of a set as an abstract collection of objects, which may correspond to things
				in the world or to concepts, virtually anything. A <b>set</b> is sometimes also called a <b>collection</b>. The objects that are collected in a set are called its <b>members</b>, alternatively its <b>elements</b>.</li>
			<li>x ∈ A: x is an element of the set A.</li>
			<li>The principal concept of <b>Set Theory</b> is belonging: for any given object, either it is a member or it is not. There is no concept of frequency.</li>
			<li>{"{1, {Bill, Sue}, 2}"}: The set has exactly three members: the number 1, the number 2, and the
				set {"{Bill, Sue}"}.</li>
			<li>{"{x | x is a natural number}"}: The set of x's such that x is a natural number.</li>
			<li>A ⊆ B: A is a subset of B.</li>
			<li>Russell's Paradox: Let X = {"{"} y | y ∉ y {"}"}. Is the set X a member of itself?
				<SubList>
					<li>Assume X ∉ X. This implies that X ∈ X, which contradicts our assumption</li>
					<li>Assume X ∈ X. This implies that X ∉ X, which contradicts our assumption… paradox!</li>
				</SubList>
			</li>
			<li>Venn Diagrams:<SubList>
				<li>{"{a, e, i, o, u}"}:</li>
				<li><ImgComp src={require("./pics/sem3.jpg")} style={{width: "50%", marginLeft: "25%"}}/></li>
				<li>Using a Venn Diagram, the universe D is depicted as a box that contains every circle. A ⊆ B, A ⊆ D and B ⊆ D:</li>
				<li><ImgComp src={require("./pics/sem4.jpg")} style={{width: "70%", marginLeft: "15%"}}/></li>
			</SubList></li>
			<li>The <b>union</b> of the set A and the set B is the set that contains all the elements that belong to A or to B, written A ⋃ B.</li>
			<li>The <b>intersection</b> of the set A and the set B is the set that contains all the elements that belong to both A and B, written A ⋂ B.</li>
			<li>The <b>difference</b> between the set A and the set B is the set that contains all the elements that belong to A but not to B.</li>
			<li><b>Complement of A:</b> It contains those elements in the universe set that are not in A. It is written A' (or <span className='overline'>A</span>).</li>
			<li><b>Empty set or null set:</b> Contains no elements; written as ∅; a subset of every set.</li>
		</ul>
	</div>
	<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>
		<h3>Ordered Pair/Triples</h3>
		<ul>
		<li>An <b>ordered pair</b> is a sequence of two elements; the order of the
			elements matters.</li>
		<li>Suppose we have two sets A and B and we form ordered pairs by taking an element of A as the first
			member of the pair and an element of B as the second member. The set containing all such ordered pairs is
			called the <b>Cartesian Product</b> of A and B, written A x B.</li>
		<li>Let K = {"{a, b, c}"} and L = {"{1,2}"}, then K x L = {"{"}⟨a, 1⟩, ⟨a, 2⟩, ⟨b, 1⟩, ⟨b, 2⟩, ⟨c, 1⟩, ⟨c, 2⟩{"}"}.</li>
		<li>The notion of an ordered pair can be extended to an ordered triple:<SubList>
			<li><ImgComp src={require("./pics/sem5.jpg")} style={{width: "70%", marginLeft: "15%"}}/></li>
		</SubList></li>
		</ul>
		<h3>Relations and Functions</h3>
		<ul>
			<li>Formally a <b>relation</b> is defined as a set of ordered pairs. We sometimes write <i>Rab</i> or <i>aRb</i> to mean <i>a bears the
				relation R to b</i>, but officially we write ⟨a, b⟩ ∈ R. When a relation describes a relationship between two
				objects, we call it a <b>binary relation</b>.</li>
			<li>If A and B are sets and R ⊆ A x B, we call R <i>a binary relation between A and B</i>.</li>
			<li>A relation R ⊆ A x A is called a <i>binary relation on A</i>.</li>
			<li>A set from all the first coordinates called the <b>domain of R</b> and a set
				from all the second coordinates called the <b>range of R</b>.</li>
			<li>A relation can be represented visually in a diagram. Arrows are used to associate the elements of the two sets (possibly the same set). This is sometimes called a <b>mapping</b> or an <b>association</b>:<SubList>
				<li><ImgComp src={require("./pics/sem6.jpg")} style={{width: "80%", marginLeft: "10%"}}/></li>
			</SubList></li>
			<li>For a relation to be a <b>function</b>, it must be the case that every element in its domain is associated to one and only one element in its range.</li>
		</ul>
	</div>
</div>
<h2 id="pl">Propositional Logic</h2>
<div className="content">
	<div style={{width: "48%", float: "left", marginRight: "1%", marginLeft: "1%"}}>
		<ul>
			<li>Language can function as an object, something studied and explained, called the <b>object language</b>. Language can also serve as a descriptive tool used to talk about the object language, called the <b>metalanguage</b>.</li>
		</ul>
		<h3>Arguments</h3>
		<ul>
			<li><b>Logic</b> is the study of arguments.</li>
			<li>An <b>argument</b> is a series of facts that support a conclusion. An argument is defined as a set of propositions consisting of (i) a set of premises and (ii) a conclusion.</li>
			<li>A <b>valid argument</b> is one in which, if the premises are all true, then the conclusion must be true.</li>
			<li><ImgComp src={require("./pics/sem7.jpg")} style={{width: "80%", marginLeft: "10%"}}/></li>
			<li><a href="https://en.wikipedia.org/wiki/Logical_consequence"><b>Logical consequence</b> (also <b>entailment</b>) is a fundamental concept in logic which describes the relationship between statements that hold true when one statement logically follows from one or more statements.</a></li>
			<li><a href="https://www.butte.edu/departments/cas/tipsheets/thinking/reasoning.html#:~:text=Deductive%20reasoning%20starts%20with%20the%20assertion%20of%20a%20general%20rule%20and%20proceeds%20from%20there%20to%20a%20guaranteed%20specific%20conclusion."><b>Deductive reasoning</b> starts with the assertion of a general rule and proceeds from there to a guaranteed specific conclusion. Deductive reasoning moves from the general rule to the specific application.</a></li>
			<li><a href="https://www.butte.edu/departments/cas/tipsheets/thinking/reasoning.html#:~:text=Inductive%20reasoning%20begins%20with%20observations%20that%20are%20specific%20and%20limited%20in%20scope%2C%20and%20proceeds%20to%20a%20generalized%20conclusion%20that%20is%20likely%2C%20but%20not%20certain%2C%20in%20light%20of%20accumulated%20evidence."><b>Inductive reasoning</b> begins with observations that are specific and limited in scope, and proceeds to a generalized conclusion that is likely, but not certain, in light of accumulated evidence.</a></li>
			<li><a href="https://www.butte.edu/departments/cas/tipsheets/thinking/reasoning.html#:~:text=Abductive%20reasoning%20typically%20begins%20with%20an%20incomplete%20set%20of%20observations%20and%20proceeds%20to%20the%20likeliest%20possible%20explanation%20for%20the%20set"><b>Abductive reasoning</b> typically begins with an incomplete set of observations and proceeds to the likeliest possible explanation for the set.</a></li>
		</ul>
	</div>
	<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>
		<h3>Propositional Logic</h3>
		<ul>
			<li><b>Propositional logic</b> is the logical language of propositions. PL has both a syntax and a semantics. The syntax consists of a set of basic
				items (i.e., the lexicon) and a set of construction rules (i.e., syntactic rules) which determine the well-formed
				expressions in our logical language.</li>
			<li>A <b>well-formed formula (wff)</b> is a string of lexical items in (A) that satisfies the syntactic rules of the
				language in (B). A proposition is defined as a wff of PL:</li>
			<li><ImgComp src={require("./pics/sem8.jpg")} style={{width: "90%", marginLeft: "5%"}}/></li>
			<li>The basic terms of PL are called <b>atomic propositions</b> (also <b>atomic sentences</b>). They correspond to
				simple declarative sentences in the object language, e.g., it is raining, Mary is intelligent, Bob slept, etc.</li>
			<li>The lexicon also includes a
				set of logical connectives: ¬ (negation), ∧ (conjunction), ∨ (disjunction), → (conditional), ↔ (biconditional).
				The purpose of these connectives is to combine propositions together to form compound propositions.</li>
			<li><b>Correspondence Theory of Truth:</b> This theory sets
			   up a correspondence between the content of a sentence (logical meaning) and the outside world.</li>
			<li>An atomic proposition is true if and only if it correctly describes a state of affairs
				in the world.</li>
			<li>Propositions that are always true, are called <b>tautologies</b>. Propositions that are always false, are called <b>contradictions</b>. Propositions that may be true or false, depending on the conditions of the outside world, are called <b>contingencies</b>.</li>
			<li><b>Truth-conditions:</b> These are conditions that the outside world must satisfy (what it has to
				be like) for the proposition expressed by a sentence to be true.</li>
			<li><b>Principle of Compositionality:</b> The meaning of the whole is determined from the meaning of its parts and the way they combine.</li>
			<li><ImgComp src={require("./pics/sem9.jpg")} style={{width: "50%", marginLeft: "25%"}}/></li>
			<li>If two propositions do have the same truth-conditions,
				we say that the propositions are <b>logically equivalent</b> (or just <b>equivalent</b>),  represented with ↔.</li>
			<li><b>Logical Validity (entailment)</b> is written φ ⊨ ψ: φ entails ψ if and only if whenever φ is true, ψ is true. </li>
			<li>Semantics of Propositional Logic:<SubList>
				<li>Because we do not know every aspect of the world, we avoid evaluating truth with respect to
					the whole world; instead we evaluate the truth of a sentence with respect to a <b>model</b> of the
					world (M): a small, fully-specified, logical representation of a piece of the world.</li>
				<li>The <b>valuation function V<sub>M</sub></b> assigns to each proposition a truth value (relative to a model M)
					and it obeys the semantic rules. The valuation function assigns the value 1 (true) to an
					atomic proposition if and only if the atomic proposition corresponds to the model M.</li>
				<li>Semantic Rules of Composition:<SubList>
					<li>If p is an atomic proposition, then V<sub>M</sub>(p) = 1 if and only if p correctly describes M</li>
					<li>V<sub>M</sub>(¬φ) = 1 iff V<sub>M</sub>(φ) = 0</li>
					<li>V<sub>M</sub>(φ ∨ ψ) = 1 iff V<sub>M</sub>(φ) = 1 and V<sub>M</sub>(ψ) = 1</li>
					<li>V<sub>M</sub>(φ ∧ ψ) = 1 iff V<sub>M</sub>(φ) = 1 or V<sub>M</sub>(ψ) = 1</li>
					<li>V<sub>M</sub>(φ → ψ) = 1 iff V<sub>M</sub>(φ) = 0 or V<sub>M</sub>(ψ) = 1</li>
					<li>V<sub>M</sub>(φ ↔ ψ) = 1 iff V<sub>M</sub>(φ) = V<sub>M</sub>(ψ)</li>
				</SubList>
				</li>
			</SubList></li>
			<li>Denotion function:<SubList>
				<li>For any expression α, we write the denotation of α with respect to the model M as 〚α〛<sup>M</sup>, where 〚α〛<sup>M</sup> = V<sub>M</sub>(α)</li>
			</SubList></li>
		</ul>
	</div>
</div>
<h2 id="Presupposition">Presupposition</h2>
<div className="content">
	<div style={{width: "48%", float: "left", marginRight: "1%", marginLeft: "1%"}}>
		<ul>
			<li>Intuitively, a <b>presupposition</b> constitutes a crucial assumption required to
				understand the meaning of a sentence. Examples are provided below: the presupposition of each sentence is marked by <b>≫</b>:<SubList><li><ImgComp src={require("./pics/sem10.jpg")} style={{ marginLeft: "15%",width: "70%"}}/></li></SubList></li>
			<li>If we negate the sentences, we
				recover the same presuppositions:<SubList><li><ImgComp src={require("./pics/sem11.jpg")} style={{ marginLeft: "15%",width: "70%"}}/></li></SubList></li>
			<li>Presuppositions are preserved under negation. It can easily be shown that entailments are not:<SubList><li><ImgComp src={require("./pics/sem12.jpg")} style={{ marginLeft: "15%",width: "70%"}}/></li></SubList></li>
			
			<li>Whenever a speaker expresses a proposition and commits to the truth of that proposition, we say that the
				speaker is <b>asserting</b> the proposition.</li>
			<li>Questioning does not express a proposition; so questions have
				no truth conditions and do not entail. Instead, questioning prompts the addressee to assert an answer.</li>
			<li><b>Denial Test:</b>
				Assert <b>α</b>, then deny <b>β</b>. If this results in a contradiction, then <b>α ⊨ β</b>. </li>
			<li><b>Existential Presupposition:</b> If anything is asserted there is always an obvious presupposition that the simple or compound proper
			   names used have a reference.</li>
			<li><b>Entailment</b> indicates logical consequence, i.e., if p is true, then q must be true. <b>Presupposition</b> indicates a background assumption that functions as a precondition, i.e., if p is true or false, then q must be true.</li>
		</ul>
	</div>
	<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>
		<ul>
			<li>The acid test for presuppositions is constancy under negation.<SubList><li><ImgComp src={require("./pics/sem13.jpg")} style={{width: "90%"}}/></li></SubList></li>
			<li>Presuppositions are also preserved in questions.<SubList><li><ImgComp src={require("./pics/sem14.jpg")} style={{width: "90%"}}/></li></SubList></li>
			<li>Presuppositions also survive when they are embedded in the antecedent of a conditional, i.e., the if clause.<SubList><li><ImgComp src={require("./pics/sem15.jpg")} style={{width: "90%"}}/></li></SubList></li>
			<TableLI><tbody>
				<tr><th colSpan="2">Presupposition Triggers</th></tr>
				<tr><td>Definite Descriptions</td><td>the X, that X, ...</td></tr>
				<tr><td>Verbs, Factive</td><td>regret, be aware, realize, be odd, ...</td></tr>
				<tr><td>Verbs, Implicative</td><td>manage, forget, happen, avoid, ...</td></tr>
				<tr><td>Verbs, Change of State</td><td>stop, start, continue, finish, take, leave, enter, come, go, arrive, ...</td></tr>
				<tr><td>Iteratives</td><td>again, anymore, return, another time, ...</td></tr>
				<tr><td>Temporal clauses</td><td>before X, since X, after X, ...</td></tr>
				<tr><td>Cleft sentences</td><td>it was X that Y (cleft), what X V was Y (pseudo-cleft)</td></tr>
				<tr><td>Contrastives</td><td>contrastive intonation, too, back, in return; comparative as-clause</td></tr>
				<tr><td>Counterfactuals</td><td>conditional or modal expressions stating facts contrary to how the world is</td></tr>
			</tbody></TableLI>
			<li>Presuppositions are liable to vanish - some linguists take this to be a defining property of
				presuppositions called <b>defeasibility</b>. We say that presuppositions are defeasible because in certain contexts
				they can be eliminated.<SubList><li><ImgComp src={require("./pics/sem16.jpg")} style={{ marginLeft: "15%",width: "70%"}}/></li></SubList>
			</li>
			<li>When presuppositions are embedded under certain kinds of verbs, namely verbs of saying (say, mention, tell,
				ask, announce, ...) and verbs of propositional attitude (believe, think, imagine, dream, want, ...), they also
				disappear.<SubList>
				<li><ImgComp src={require("./pics/sem17.jpg")} style={{marginLeft: "20%",width: "60%"}}/></li>
				</SubList></li>
			<li>These verbs, called <b>world-building verbs</b>, have the property of evaluating the embedded proposition
				in worlds other than the actual world. It may be here that the presupposition does not vanish but is, instead,
				trapped below the level of the verb embedding it.</li>
		</ul>
	</div>
</div>

<h2 id="ci">Conversational Implicatures</h2>
<div className="content">
	<div style={{width: "48%", float: "left", marginRight: "1%", marginLeft: "1%"}}>
	<ul>
		<li>This kind of inference also describes a relation between propositions but is distinct from entailments and presuppositions. </li>
		<li>Conversational implicatures are <b>pragmatic inferences</b>. Unlike entailments and presuppositions, implicatures are not tied to the particular words or phrases that make up an utterance. Instead, implicatures arise from conversational factors, including the context, the speaker's intention, a mutual understanding of how conversations unfold.<SubList>
			<TableLI style={{width: "90%", marginLeft: "5%"}}><tbody>
				<tr><th>Example</th></tr>
				<tr><td>Alice and Bob are going to a birthday party. They got the birthday boy two presents, a <i>stuffed elephant</i> and a <i>stuffed giraffe</i>. Alice asks Bob to wrap both presents while she is at work. When she gets home, she asks Bob if he wrapped the presents.</td></tr>
				<tr><td>Alice: "Did you wrap the presents?"<br/>Bob: "I wrapped the giraffe"</td></tr>
				<tr><td>Bob asserts the proposition <i>Bob wrapped the stuffed giraffe</i>. Whether Bob wrapped the stuffed elephant or not is immaterial to the truth of what he said. However, Bob's reply seems to convey an additional proposition: <i>Bob didn't wrap the stuffed elephant</i>, which Alice infers from the context and from what Bob did not say.</td></tr>
				<tr><td>Alice: "Did you wrap the presents?"<br/>Bob: "No. The boy is twelve."</td></tr>
				<tr><td>Bob asserts the proposition <i>Bob did not wrap the stuffed elephant or the stuffed giraffe</i>, expressed by the answer "No". He also asserts the proposition <i>The boy is twelve years old</i>, which is irrelevant to the question Alice asked. However, Bob's reply seems to convey an additional meaning, namely Bob thinks gift-wrapping is inappropriate for a twelve-year old. Bob doesn't literally say this. Alice infers it based on his oblique answer to her question and what she thinks he must mean.</td></tr>
			</tbody></TableLI>
		</SubList></li>
		<li>We represent this inference using the symbol +{String.fromCharCode(62)}, e.g: <i>John ate some of the cookies</i>
			+{String.fromCharCode(62)} <i>John didn't eat all of the cookies</i>.</li>
	</ul>
	<h3>Grice's Theory of Conversational Implicatures</h3>
	<ul>
		<li><a href='https://en.wikipedia.org/w/index.php?title=Cooperative_principle&oldid=1143263991#:~:text=the%20cooperative%20principle%20describes,which%20you%20are%20engaged.'>The <b>cooperative principle</b> describes how people achieve effective conversational communication in common social situations - that is, how listeners and speakers act cooperatively and mutually accept one another to be understood in a particular way. The philosopher of language Paul Grice introduced the concept in his pragmatic theory, argued such: "Make your contribution such as is required, at the stage at which it occurs, by the accepted purpose or direction of the talk exchange in which you are engaged."</a></li>
		<li>This cooperative principle is an umbrella term for nine components that guide how we communicate.
			These nine components are grouped together into four categories, called <b>the Maxims of Conversation</b>:<SubList>     
			<TableLI style={{width: "100%"}}><tbody>
				<tr><th colSpan="2">The Maxims of Conversation</th></tr>
				<tr><td rowSpan="2">The Maxim of Quality</td><td>Do not say what you believe to be false.</td></tr>
				<tr><td>Do not say that for which you lack adequate evidence.</td></tr>
				<tr><td rowSpan="2">The Maxim of Quantity</td><td>Make you contribution as informative as is required (for the current purposes of the exchange).</td></tr>
				<tr><td>Do not make your contribution more informative than is required.</td></tr>
				<tr><td>The Maxim of Relation</td><td>Be relevant</td></tr>
				<tr><td rowSpan="4">The Maxim of Manner</td><td>Avoid obscurity of expression</td></tr>
				<tr><td>Avoid ambiguity</td></tr>
				<tr><td>Be brief (avoid unnecessary prolixity)</td></tr>
				<tr><td>Be orderly</td></tr>
			</tbody></TableLI>
			</SubList></li>
		<li>If the addressee assumes the speaker is following the maxims, but that this is not
			evident at a literal level, then the addressee infers additional meaning (in the form of an implicature) to make
			up the difference. In other words, what is literally said + the implicature together satisfy the maxims.</li>
	</ul>
	<h3>Examples of Standard Implicatures</h3>
	<ul>
		<li><a href='https://glossary.sil.org/term/standard-implicature#:~:text=A%20standard%20implicature%20is%20a%20conversational%20implicature%20based%20on%20an%C2%A0addressee%27s%20assumption%20that%20the%C2%A0speaker%C2%A0is%20being%20cooperative%20by%20directly%20observing%20the%C2%A0conversational%20maxims.'>A <b>standard implicature</b> is a conversational implicature based on an addressee's assumption that the speaker is being cooperative by directly observing the conversational maxims.</a></li>
		<li><b>Quality Implicatures:</b> Does your farm contain 400 acres? +{String.fromCharCode(62)} I don't know that your farm does contain 400 acres, and I want to know if it does.</li>
		<li><b>Quantity Implicatures:</b> Nigel has fourteen children +{String.fromCharCode(62)} Nigel has no more than fourteen children</li>
		<li><b>Relation Implicatures:</b> Can you tell me the time? Well, the milkman has come +{String.fromCharCode(62)} The time now is after the time the milkman arrived 
		   </li>
		<li><b>Manner Implicatures:</b> How do I get into you apartment? Walk up to the front door, turn the door handle clockwise as far as it will go, and then pull gently towards you. +{String.fromCharCode(62)} Pay particular attention and care to each step of the instructions I've given you.</li>
		<li><u><b>A:</b> Where's Bill? <b>Y:</b> There's a yellow VW outside Sue's house +{String.fromCharCode(62)} Bill might be at Sue's house:</u><SubList>
			<li>A assumes Y is cooperating and
				observing the <b>maxim of relation</b>. So, A infers that Y's answer is relevant to Bill's whereabouts, the location of the yellow VW (outside Sue's house) is related Bill's location</li>
			<li>A assumes Y is observing the <b>maxim of quality</b>. So, A infers that Y does not believe or does not have enough evidence to state that Bill is outside of Sue's house - otherwise he would have.</li>
			<li>A assumes that Y is observing the <b>maxim of quantity</b>. Since Y used the less informative phrase a yellow VW rather than the more informative phrase Bill's yellow VW, A infers that Y does not know for sure that the VW outside Sue's house is Bill's.</li>
			<li>Taken together, the implicature is that Y thinks Bill might be at Sue's house.</li>
		</SubList></li>
		<li><u>Mechanics of Implicatures (<b>S</b> = Speaker, <b>A</b> = Addressee, let <b>p</b> and <b>q</b> be propositions):</u><SubList numbered={true}>
			<li>S has said p.</li>
			<li>If by saying p, S does not appear to be observing the maxims (cooperating), A nevertheless assumes S is observing the maxims (cooperating).</li>
			<li>For S to say p and be observing the maxims, S must be thinking q (and A knows this).</li>
			<li>S has done nothing to stop A from inferring q.</li>
			<li>Therefore S intends A to infer that q: so by saying p, S has implicated q.</li>
		</SubList></li>
	</ul>
</div>
<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>
	<h3>Scalar Implicatures</h3>
	<ul>
		<li><b>Generalized Quantity Implicatures (GQIs):</b> implicatures that arise
			from the Maxim of Quantity that are independent of a particular context (hence general). There are two
			subclassNamees of GQI: <b>scalar implicatures</b> and <b>clausal implicatures</b>.</li>
		<li>A <b>linguistic scale</b> consists of a set of linguistic alternates, or contrastive expressions of the same
			grammatical category, which can be arranged in a linear order by their degree of informativeness
			(semantic strength) from the most informative on the left (strongest) down to least informative on the
			right (weakest).</li>
		<li>A linguistic scale has the general ordered form &lt;e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, ..., e<sub>n</sub>{String.fromCharCode(62)}, where each e<sub>i</sub> is a distinct linguistic
			expression called a <b>scalar predicate</b>. Each successive predicate e<sub>i+1</sub> is less informative than the last e<sub>i</sub>. Example: &lt;all, most, some{String.fromCharCode(62)}.</li>
		<li><b>Sentential Frame:</b> Given a sentence which contains a scalar predicate, we write A(e<sub>i</sub>) to represent the sentence and we treat e<sub>i</sub> as the scalar predicate and A as the sentence template for the purposes of substitution. <u>Example:</u> A = <i>John ate ___ of the cookies</i>, A(all) -{String.fromCharCode(62)} <i>John ate all the cookies</i>.</li>
		<li><b>Scalar Entailment:</b>
			Given a scale of the form &lt;e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, ..., e<sub>n</sub>{String.fromCharCode(62)} and a sentential frame A, a statement containing a more
		   informative scalar predicate entails all statements containing less informative scalar predicates. For
		   example, A(e<sub>5</sub>) entails A(e<sub>6</sub>), A(e<sub>7</sub>), ..., A(e<sub>n</sub>).</li>
		<li>Asserting A(e<sub>3</sub>) implicates ¬A(e<sub>2</sub>) and ¬A(e<sub>1</sub>).</li>
	</ul>
	<h3>Hedges and Flouting</h3>
	<ul>
		<li><b>Hedge:</b> a phrase that eliminates or at least mitigates one of the maxims:<SubList>
			<li><b>Quality:</b> As far as I know...; I'm not sure if this is true...; I may be wrong... .</li>
			<li><b>Quantity:</b> As you probably already know...; I can't say any more...; I probably don't need to say this, but... .</li>
			<li><b>Relation:</b> Oh, by the way; I'm not sure if this is relevant, but...; I don't want to change the subject, but... .</li>
			<li><b>Manner:</b> I'm not sure if this is clear, but...; I don't know if this makes sense, but...; this may be a bit tedious, but... .</li>
		</SubList></li>
		<li>A speaker who makes it clear that they are not following the conversational maxims is said to be <b>flouting</b> the maxims and this too gives rise to an implicature. That is, the addressee understands the
		speaker flouted the maxims for a reason and infers further meaning from this breach of convention.<SubList>
			<li><b>Flouting Quality:</b> Tehran's in Turkey, isn't it, teacher? And London's in Armenia, I suppose +{String.fromCharCode(62)} Tehran is not in Turkey.</li>
			<li><b>Flouting Quantity:</b> Either John will come or he won't +{String.fromCharCode(62)} I don't care whether or not John comes.</li>
			<li><b>Flouting Relation: A:</b> Susan can be such a cow sometimes! <b>B:</b> Lovely weather, isn't it? +{String.fromCharCode(62)} B finds A's comment inappropriate (for some reason or other).</li>
			<li><b>Flouting Manner:</b> The Corner of John's lips turned slightly upwards +{String.fromCharCode(62)} John did not exactly smile.</li>
		</SubList></li>
	</ul>
	<h3>Properties of Conversational Implicatures</h3>
	<ul>
		<li><b>Defeasibility (Cancelability):</b> Implicatures are inferences but weaker inferences than entailments. They do not
			necessarily follow from what is said and can be cancelled out by enriching the context or the
			discourse itself.</li>
		<li><b>Non-detachability:</b> Implicatures are attached to what is said, not how it is said (with the exception of the Maxim of Manner). In other words, implicatures are not attached to particular words or phrases used in the
			linguistic expression of an utterance, unlike presuppositions. Substituting one word for its
			synonym won't detach an implicature.</li>
		<li><b>Calculability:</b>  Explaining how the addressee gets from the literal meaning p of an utterance to its
			implicated meaning q.</li>
		<li><b>Non-conventionality:</b> Implicatures are not part of the conventional meaning associated with the linguistic form, i.e., its
			truth-conditional meaning. Since the literal meaning of a sentence must be known before any
			implicatures can be calculated in a given context, no implicature can be part of the literal
			meaning. In addition, it is possible for an utterance to be true even when its implicature is false.</li>
		<li><b>Reinforceability:</b> Conversational implicatures can be made explicit without producing (too much of) a sense of
			redundancy.</li>
		<li><b>Universality:</b> Conversational implicatures are motivated by the expectation on the part of the speaker and
			addressee for rational cooperation in conversation.</li>
	</ul>
</div>
</div>

<h2 id="sspl">Syntax And Semantics Predicate Logic</h2>
<div className="content">
	<div style={{width: "48%", float: "left", marginRight: "1%", marginLeft: "1%"}}>
		<h3>Syntax</h3>
		<ul>
			<li>In Propositional Logic,<b> atomic propositions</b> correspond to simple declarative sentences in the object language.</li>
			<li><b>Predicate
				Logic</b> is an extension of Propositional Logic and it retains the central tenet of Propositional Logic: namely,
				that sentences express propositions and propositions denote truth values.</li>
			<li>Its basic elements correspond to things in the world (entities) and their properties (sets).</li>
			<li>The difference between these logical
				systems is that the basic building blocks of Predicate Logic are more like the building blocks of natural
				language. The smallest sentence is formed by combining a verb with a subject. In Predicate Logic, the
				smallest proposition is formed by combining a predicate with an argument. Predicates correspond to verbs
				and arguments correspond to subjects and objects.<SubList>
					<li><ImgComp src={require("./pics/sem18.jpg")} style={{width: "50%", marginLeft: "25%"}}/></li>
					<li><ImgComp src={require("./pics/sem19.jpg")} style={{marginLeft: "10%", width: "80%"}}/></li>
				</SubList></li>
			<li>In Predicate Logic, each variable combines with and is bound by a single quantifier.
				Predicate Logic has two such quantifiers: ∀ (the universal quantifier) and ∃ (the existential quantifier).<SubList>
					<li><ImgComp src={require("./pics/sem20.jpg")} style={{marginLeft: "10%", width: "80%"}}/></li>
				</SubList></li>
			
			<li>The syntax of predicate logic:<SubList>
				<li>Lexicon:<SubList>
					<li>Individual terms - Individual constants: j, m, s, … - Individual variables: x, y, z, … (also x1, x2, …, xn)</li>
					<li>Predicate constants: P, Q, R, …</li>
					<li>A binary identity predicate: =</li>
					<li>Logical connectives: ¬, ∧, ∨, →, ↔</li>
					<li>Quantifiers: ∀, ∃</li>
					<li>Brackets: (, ), [, ]</li>
				</SubList></li>
				<li>The Syntactic Rules:<SubList numbered={true}>
					<li>If t1 and t2 are individual terms, then t1 = t2 is a wff</li>
					<li>If P is an n-place predicate, and t1, t2, …, tn are terms, then P(t1, t2, …, tn) is a wff</li>
					<li>If φ and ψ are wffs, then ¬φ, (φ ∧ ψ), (φ ∨ ψ), (φ → ψ), (φ ↔ ψ) are wffs</li>
					<li>If φ is a wff and x is an individual variable, then ∀x φ and ∃x φ are wffs</li>
					<li>Nothing else is a wff</li>
				</SubList></li>
			</SubList></li>
			<li>In the expressions ∀x φ, the wff φ is called the scope of the quantifier ∀x. In the expressions ∃x φ, the wff φ is called the scope of the quantifier ∃x.</li>
			<li>A wff φ is a proposition iff it has no free variables in it.<SubList>
				<li><ImgComp src={require("./pics/sem21.jpg")} style={{marginLeft: "20%",width: "60%"}}/></li>
			</SubList>
			</li>
			<li><ImgComp src={require("./pics/sem22.jpg")} style={{marginLeft: "10%", width: "80%"}}/></li>
		</ul>
	</div>
	<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>
		<h3>Semantics</h3>
		<ul>
			<li>MAN(a): "Aristotle is a man" ⇒ The semantics assigns a meaning to the individual <i>a</i> and to the predicate MAN.</li>
			<li>The outside world can be described as a collection of objects. So we can represent it
				as a set, called the <b>Domain of Discourse D</b>, whose elements are called <b>entities</b>.</li>
			<li>There are three distinct levels of representations now:<SubList numbered={true} style={{listStyleType: "lower-roman"}}>
				<li>The proper name Aristotle, used in the object language</li>
				<li>The individual constant <i>a</i>, used in the metalanguage</li>
				<li>The entity α (to represent Aristotle), used in the semantic representation of the world.</li>
			</SubList></li>
			<li>A simple predicate denotes a set of entities, i.e., a subset of D. This captures the intuition that a verb phrase like <i>is a man</i> refers to a collection of things in the outside world, each of which we can point to and say "that's a man".</li>
			<li>The function that associates individuals and
				predicates to the their meanings is called the <b>Interpretation Function I</b>. It associates each individual constant to a unique entity (a unique element in D) and it
				associates each predicate constant to a unique collection of entities (a unique subset of D).</li>
			<li><ImgComp src={require("./pics/sem23.jpg")} style={{width: "70%"}}/></li>
			<li>An <b>ordered pair</b> is a sequence of two elements. In an ordered pair, the order of the
				elements matters.</li>
			<li>Given any two sets, A and B, an ordered pair ⟨a, b⟩ is formed by combining an element from each set,
				a ∈ A and b ∈ B. The set of all such ordered pairs is the <b>Cartesian Product of A and B</b>, written A X B.</li>
			<li>Any set R ⊆ A X B is called a <b>relation</b>.<SubList numbered={true} style={{listStyleType: "lower-roman"}}>
				<li>R is <b>reflexive</b> if and only if for all x ∈ D, ⟨x, x⟩ ∈ R</li>
				<li>R is <b>symmetric</b> if and only iffor every x, y ∈ D, if ⟨x, y⟩ ∈ R then ⟨y, x⟩ ∈ R</li>
				<li>R is <b>transitive</b> if and only if for every x, y, z ∈ D, if ⟨x, y⟩ ∈ R and ⟨y, z⟩ ∈ R then ⟨x, z⟩ ∈ R</li>
				<li>The relation R' is the <b>converse</b> of the relation R if and only if for every x, y ∈ D, if ⟨x, y⟩ ∈ R then ⟨y, x⟩ ∈ R' and vice versa</li>
			</SubList></li>
			<li>John is as big as himself (reflexive). John is married to Sue. So Sue is married to John (symmetric). John is older than Sue. Sue is older than Bill. So John is older than Bill (transitive).</li>
			<li>In Predicate Logic, we express the pronoun he as a variable. Like a variable, the pronoun he has no
				meaning of its own. It only stands in for something else. To represent this, the sentence "He is a philosopher" is expressed
				as the well-formed formula PHILOSOPHER(x). This is not a proposition because of the free variable.</li>
			<li><b>Variable assignment function</b> g associates each variable x, y, z, with an entity in D.</li>
			<li>The <b>variable assignment function g</b> is different from I in three ways:<SubList numbered={true}>
				<li>It operates on variables
					(not individuals).</li>
				<li>It can associate more than one variable to the same entity.</li>
				<li>It is not part of the
				model so it is not uniquely specified by the model.</li>
			</SubList></li>
			<li>There is a family of assignment functions g, one for every
				possible association. So without knowing which particular function g we are dealing with, the value could be
				anything. That's where the context comes in. The context can specify g; e.g. PHILOSOPHER(x) is true iff g(x) ∈ I(PHILOSOPHER).</li>
			<li><b>Denotation function ⟦α⟧<sup>M, g</sup></b> represents
				the meaning of an expression α with respect to a model M and an assignment function g:<SubList numbered={true}>
					<li>If α is an individual constant or a predicate constant, then ⟦α⟧<sup>M, g</sup> = I(α).</li>
					<li>If α is an individual variable, then ⟦α⟧<sup>M, g</sup> = g(α).</li>
					<li>If α is an wff, then ⟦α⟧<sup>M, g</sup> = V<sub>M,g</sub>(α).</li>
				</SubList></li>
			<li>If X is an n-place predicate and t1, ...,tn are terms, such that X(t1, ...,tn) is a wff, then<SubList numbered={true}>
				<li>V<sub>M,g</sub>(X(t1, ...,tn)) = 1 iff ⟨⟦t1⟧
					<sup>M,g</sup>, ..., ⟦tn⟧
					<sup>M,g</sup> ⟩ ∈ ⟦X⟧<sup>M, g</sup></li>
				<li>V<sub>M,g</sub>(t1 = t2) = 1 iff ⟦t1⟧
					<sup>M,g</sup> = ⟦t2⟧
					<sup>M,g</sup></li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="quan">Quantification</h2>
<div className="content">
	<div style={{width: "48%", float: "left", marginRight: "1%", marginLeft: "1%"}}>

	</div>
	<div style={{width: "48%", float: "right", marginRight: "1%", marginLeft: "1%"}}>

	</div>
</div>
</>