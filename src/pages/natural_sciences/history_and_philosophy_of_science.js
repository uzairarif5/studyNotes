import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "History And Philosophy Of Science Notes";
export const sourcesColor = {32:null};
export const content = <>
<h1>History And Philosophy Of Science Notes</h1>
<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
{getSourcesOL(sourcesColor)}
<h2 id="absK">Absolute Knowledge</h2>
<div className="content">
    <div style={{width: "48%", marginLeft: "1%", float: "left"}}>
        <ul>
            <h3>Three Cases</h3>
            <li className="Opened">First Case:<SubList>
                <MathStuff>$$1+2=3$$</MathStuff>
                <li>We don't need to conduct any
                    experiments or observations to ascertain that one plus two equals three at all times and in all places; the proposition is true by
                    virtue of the definitions of its terms.</li>
                <li><ImgComp src={require("./historyOfSciencePics/1.png")} style={{width: "80%"}}/></li>
            </SubList></li>
            <li>Second Case:<SubList>
                <li>"All swans are white." How do we know this?</li>
                <li>To establish that all swans are white, one should first observe the colours of
                    individual swans and record the results of these observations.</li>
                <TableLI><tbody>
                    <tr><td>Swan <i>a</i> is white</td></tr>
                    <tr><td>Swan <i>b</i> is white</td></tr>
                    <tr><td>Swan <i>c</i> is white</td></tr>
                </tbody></TableLI>
                <li>Based on the results of these observations, we generalize and conclude that all swans are white. This inference from individual instances to a general proposition is called <b>induction</b>.</li>
            </SubList></li>
            <li>Third Case:<SubList>
                <li>The law of universal gravitation:</li>
                <MathStuff>$$F=G\frac{"{m_1m_2}{r^2}"}$$</MathStuff>
                <li>If we pay attention to the concepts of "force", "mass", and "distance", there is nothing there that suggests that all objects should attract each other with a force proportional to the product of the masses and inversely proportional to the square of the distance. We could say that the force of gravity is proportional to the sum of the masses, or that it is inversely proportional to the cube of the distance, or that it increases with the distance. How do we know which one of these numerous possibilities is true?</li>
                <li>If we were to observe that it holds for the Earth
                    and a falling apple, and if we were also to observe that it holds for the Earth and the Moon, the Sun and Jupiter, as well as for any
                    two planets, then we could generalize and conclude that it holds between any two objects in the universe.</li>
            </SubList></li>
        </ul>
        <h3>Analytic vs. Synthetic</h3>
        <ul>
            <li><b>Analytic propositions</b> are either definitions or deducible from definitions, they can never contradict the results of experiments and observations.</li>
            <li>Analytic proposition necessarily holds in all possible worlds, i.e. its opposite is inconceivable.</li>
            <li><b>Synthetic propositions</b> are ones that are not deducible merely from the
                definitions of their concepts, so they can potentially
                contradict the results of observations and experiments.</li>
            <li>This is the same as to say that synthetic propositions do not hold in all
                possible worlds, for their opposites are conceivable/imaginable; we can imagine a world where gravity works differently.</li>
        </ul>
    </div>
    <div style={{width: "48%", marginRight: "1%", float: "right"}}>
        <h3>Formal vs. Empirical Sciences</h3>
        <ul>
            <li>While in <b>empirical sciences</b>, such as physics, chemistry, biology, psychology, sociology, or economics, there are both
                analytic and synthetic propositions, in <b>formal sciences</b>, such as logic or mathematics, all propositions are analytic.</li>
            <li>While some mathematical propositions don't usually strike us as definitions, they
                essentially define properties of mathematical objects that are studied by that specific mathematical theory, and thus are veiled
                definitions. What makes this possible is the fact that the objects of mathematical theories are all formal, i.e. they do not exist
                independently of those mathematical theories that define them with their postulates and definitions. Thus, Euclid's postulate
                remains an analytic proposition in the context of Euclidean geometry, whereas some other postulates would be analytic in
                Lobachevsky's and Riemann's non-Euclidean geometries. The same goes for the objects of any formal science.</li>
            <li>The objects of
                empirical science - natural or social - are all assumed to exist independently of the empirical theories that attempt to describe
                them. Thus, physical processes described by a physical theory are not defined/created by the physical theory. Similarly, a biological
                theory attempts to describe plants and animals that exist independently of that theory - the biological theory does not define/create
                organisms.</li>
            <li>Because the objects of empirical theories are not defined by empirical theories themselves, empirical theories cannot consist
                only of analytic propositions. They must contain at least some synthetic propositions that are hypotheses about the objects under
                study. For example, a physical theory cannot merely give us the definitions of "force of gravity", "mass", or "distance", without
                telling us how mass and distance affect the force of gravity. It is these relations between different features
                of natural or social objects (structures, systems, processes, etc.) that any empirical theory attempts to uncover</li>
        </ul>
        <h3>Two Questions of Absolute Knowledge</h3>
        <ul>
            <li>Can analytic propositions be absolutely certain? The short answer is "yes", because analytic propositions
                are either definitions or follow from definitions and, thus, they unfold what is already in a sense implicit in the definitions.</li>
            <li>Can synthetic propositions be absolutely certain? The short answer to this question is "no". To appreciate this, we have to consider
                how synthetic propositions are justified and what problems their mode of justification faces.</li>
            <li>Obstacles that prevent synthetic propositions from being established beyond any reasonable doubt:<SubList>
                <li><b>Sensations:</b> If we are going to claim that any of our hypotheses about the external world are absolutely certain, we have to prove that our sensations convey to our minds exact
                    images of the things as they really are.</li>
                <li><b>Induction:</b> Because general propositions refer to all objects within a given class, they attempt to say something not only about those objects
                    that we have already observed, but any object of that type. It would suffice to observe one counterexample and the whole generalization
                    would fall apart.</li>
                <li><b>Theory-Ladenness:</b> It is nowadays accepted that all observations are <i>theory-laden</i>, i.e. they depend on some accepted theories. Another way of
                    saying the same thing is that there are no pure statements of fact, in the sense that all statements of fact presuppose one theory or another.</li>
            </SubList></li>
            <li>Often scientists speak of having proven something in physics, or biology, or even social science, but strictly
                speaking proof is only achievable in formal sciences; empirical sciences don't prove anything.</li>
        </ul>
    </div>
</div>

<h2>Scientific Method</h2>
<div className="content">
    <div style={{width: "48%", marginLeft: "1%", float: "left"}}>
    </div>
    <div style={{width: "48%", marginRight: "1%", float: "right"}}>
    </div>
</div>
</>

//Source 1, Chapter 3