import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";

export const title = "Information And Entropy Notes";

export const sourcesColor = {40: null};
export const content = <>

  <h1>Calculus Notes</h1>
  {getSourcesOL(sourcesColor)}
	<h2 id="bits">Bits</h2>
  <div className="content">
		<div data-source={40} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul>
        <li>Information is measured in <b>bits</b>:<SubList>
          <li>Consider a situation that could have any of several possible outcomes (like flipping a coin or selecting a card from a deck). How compactly could Alice tell Bob the outcome?</li>
          <li>Flipping a coin:<SubList>
            <li>First consider the case of the two outcomes of flipping a coin. If Alice wants to tell Bob the result of the coin toss, she could use several possible techniques (saying "heads" or "tails" or to saying 0 or 1). We say that the information so conveyed is one bit.</li>
            <li>If Alice flipped two coins, she could say which of the four possible outcomes actually happened, by saying 0 or 1 twice. Similarly, the result of an experiment with eight equally likely outcomes could be conveyed with three bits, and more generally \(2^n\) outcomes with \(n\) bits. Thus the amount of information is the logarithm (to the base 2) of the number of equally likely outcomes.</li>
          </SubList></li>
          <li>Phases of conveying information:<SubList>
            <li>First is the "setup" phase, in which Alice and Bob agree on what they will communicate about, and exactly what each sequence of bits means. This common understanding is called the <b>code</b>. For example, to convey the suit of a card chosen from a deck, their code might be that 00 means clubs, 01 diamonds, 10 hearts, and 11 spades.</li>
            <li>The setup phase can include informing the recipient that there is new information.</li>
            <li>Then, there is the "outcome" phase, where actual sequences of 0 and 1 representing the outcomes are sent.</li>
            <li>After Bob knows that a card is drawn but before receiving Alice's message, he is uncertain about the suit. His uncertainty, or lack of information, can be expressed in bits. Upon hearing the result, his uncertainty is reduced by the information he receives.</li>
          </SubList></li>
        </SubList></li>
        <li>The Boolean Bit: Read <a href='../computer_science_fundamentals/computer_organization_and_architecture#architecture_software_interface'>Architecture: Software Interface, The Language Of Bits</a>.</li>
        <li>The Physical Bit:<SubList>
          <li>If a bit is to be stored or transported, it must have a physical form. Whatever object stores the bit has two distinct states, one of which is interpreted as 0 and the other as 1.</li>
          <li>If the object has moved from one location to another without changing its state then communications has occurred. If the object has persisted over some time in its same state then it has served as a memory. If the object has had its state changed in a random way then its original value has been forgotten.</li>
        </SubList></li>
      </ul>
    </div>
		<div data-source={40} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
      <ul>
        <li>The Quantum Bit:<SubList>
          <li>The <b>quantum bit</b>, or <b>qubit</b>, is a model of an object that can store a single bit but is so small that it is subject to the limitations quantum mechanics places on measurements.</li>
          <li>According to quantum mechanics, it is possible for a small object to have two states which can be measured. The two values are often denoted \(\ket{"{0}"}\) and \(\ket{"{1}"}\).</li>
          <li>There are three features of quantum mechanics that make qubits or collections of qubits different from Boolean bits.</li>
        </SubList></li> 
        <li>The Classical Bit:<SubList>
          <li>In today’s electronic systems, a bit of information is carried by many objects. In a semiconductor memory a single bit is represented by the presence or absence of perhaps 60,000 electrons (stored on a 10 fF capacitor charged to 1V ). Similarly, a large number of photons are used in radio communication.</li>
          <li>Because many objects are involved, measurements on them are not restricted to a simple yes or no, but instead can range over a continuum of values. Thus the voltage on a semiconductor logic element might be anywhere in a range from, say, 0V to 1V . The voltage might be interpreted to allow a margin of error, so that voltages between 0V and 0.2V would represent logical 0, and voltages between 0.8V and 1V a logical 1.</li>
          <li>Circuits of this sort display what is known as “restoring logic” since small deviations in voltage from the ideal values of 0V and 1V are eliminated as the information is processed. The robustness of modern computers depends on the use of restoring logic.</li>
        </SubList></li>
      </ul>
    </div>
  </div>
  <h2 id="codes">Codes</h2>

</>