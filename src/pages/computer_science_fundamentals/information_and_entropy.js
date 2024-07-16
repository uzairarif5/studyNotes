import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { Questions } from "../../articleRelatedStuff/Questions";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Information And Entropy Notes";
export const sourcesColor = {40: null};
export const content = <>

  <h1>Information And Entropy Notes</h1>
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
  <div className="content">
		<div data-source={40} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul>
        <li>Symbol Space Size:<SubList>
          <li>The first question to address is the number of symbols that need to be encoded. This is called the symbol space size. We will consider symbol spaces of different sizes:<SubList opened>
            <li>1</li>
            <li>2</li>
            <li>Integral power of 2</li>
            <li>Finite</li>
            <li>Infinite, Countable</li>
            <li>Infinite, Uncountable</li>
          </SubList></li>
          <li><b><u>2:</u></b> If the number of symbols is 2, then the selection can be encoded in a single bit.</li>
          <li><u><b>Integral power of 2:</b></u> If the number of possible symbols is 4, 8, 16, 32, 64, or another integral power of 2, then the selection may be coded in the number of bits equal to the logarithm, base 2, of the symbol space size.</li>
          <li>2 bits can designate the suit (clubs, diamonds, hearts, or spades) of a playing card, and 5 bits can encode the selection of one student in a class of 32. As a special case, if there is only one symbol, no bits are required to specify it.</li>
          <li>A dreidel is a four-sided toy marked with Hebrew letters, and spun like a top in a children's game, especially at Hanukkah. The result of each spin could be encoded in 2 bits.</li>
          <li>If <b><u>the number of symbols is finite but not an integral power of 2</u></b>, then the number of bits that would work for the next higher integral power of 2 can be used to encode the selection, but there will be some unused bit patterns. Examples include the 10 digits and the six faces of a cubic die. In each case, there is spare capacity (6 unused patterns in the 4-bit representation of digits, 2 unused patterns in the 3-bit representation of a die, etc.)</li>
          <li>If the number of symbols is <b><u>infinite but countable</u></b> (able to be put into a one-to-one relation with the integers) then a bit string of a given length can only denote a finite number of items from this infinite set. The overflow condition would have to be handled in some way</li>
          <li>If the number of symbols is <b><u>infinite and uncountable</u></b> then some technique of "discretization" must be used to replace possible values by a finite number of selected values that are approximately the same.</li>
          <li>For example, if the numbers between 0
and 1 were the symbols and if 2 bits were available for the coded representation, one approach might be
to approximate all numbers between 0 and 0.25 by the number 0.125, all numbers between 0.25 and 0.5 by
0.375, and so on. The approximation is not reversible, in that there is no decoder which will recover the original symbol given
just the code for the approximate value.</li>
        </SubList></li>
        <li>Use of Spare Capacity:<SubList>
          <li>In many situations there are some unused code patterns, because the number of symbols is not an integral
          power of 2. There are many strategies to deal with this. Here are some:<SubList opened>
            <li>Ignore</li>
            <li>Map to other values</li>
            <li>Reserve for future expansion</li>
            <li>Use for control codes</li>
            <li>Use for common abbreviations</li>
          </SubList></li>
          <li><b>Binary Coded Decimal:</b> A common way to represent the digits 0 - 9 is by the ten four-bit patterns There are six bit patterns (for example 1010) that are not used, and the question is what to do with them. Here are a few ideas:<SubList>
            <li>The unused bit patterns might simply be ignored. If a decoder encounters one, perhaps as a result
            of an error in transmission or an error in encoding, it might return nothing, or might signal an output error.</li>
            <li>The unused patterns might be mapped into legal values. For example, the unused patterns might all
            be converted to 9.</li>
          </SubList></li>
          <li><b>IP Addresses:</b><SubList>
            <li>An example of the need to reserve capacity for future use is afforded by IP (Internet Protocol)
addresses. These are (in version 4) of the form x.x.x.x where each x is
a number between 0 and 255, inclusive. Thus each Internet address can be coded in a total of 32 bits.</li>
            <li>In version 6, IPv6, each address is still of the form x.x.x.x, but each x is now a 32-bit number between 0 and 4,294,967,295 inclusive.</li>
            <li>The new allocations include large blocks which are reserved for future expansion.</li>
          </SubList></li>
          <li><b>ASCII:</b> ASCII (American Standard Code for Information
Interchange) reserves 33 of its 128 codes explicitly for control, and only 95 for
characters.</li>
        </SubList></li>
        <li>Fixed-Length and Variable-Length Codes:<SubList>
          <li><b>Fixed-length codes</b> are usually easier to deal with because both the coder and decoder know in advance how many bits are involved, and it is only a matter of setting or reading the values.</li>
          <li>With <b>variable-length codes</b>, the decoder needs a way to determine when the code for one symbol ends and the next one begins.</li>
          <li><b>Morse Code:</b> An example of a variable-length code, where the decoder tells the end of the code for a single character by noting the length of time before the next dot or dash.</li>
        </SubList></li>
      </ul>
    </div>
		<div data-source={40} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
      <ul>
        <li>Integer Codes:<SubList>
          <li>There are many ways to represent integers as bit patterns. All suffer from an inability to represent
arbitrarily large integers in a fixed number of bits.</li>
          <li>A computation which produces an out-of-range result is
said to <b>overflow</b>.</li>
          <li><b>Binary Gray Code:</b> This code is for nonnegative integers. For code of length \(n\), the \(2^n\) patterns represent integers \(0\) through \(2n-1\). The two bit patterns of adjacent integers differ in exactly one bit.</li>
          <li><b>Sign/Magnitude:</b> The MSB (most significant bit) is 0 for positive and 1 for negative
          integers; the other bits carry the magnitude</li>
          <li><b>1's Complement:</b> This code is for integers, both positive and negative. The MSB is 0 for positive integers; negative integers are formed by complementing each bit of the corresponding positive integer. However there are two representations of 0.</li>
          <li><b>2's Complement:</b> This code is for integers, both positive and negative. The LSB (least significant bit) is 0 for even and 1 for odd integers. This code is widely used.</li>
          <li><ImgComp src={require("./information_and_entropy_pics/1.png")} style={{width:"90%"}}/></li>
        </SubList></li>
        <li>Morse Code:<SubList>
          <li>Morse Code consists of a sequence of short and long pulses or tones (dots and dashes) separated by short periods of silence.</li>
          <li>A person generates Morse Code by making and breaking an electrical connection on a hand key, and the person on the other end of the line listens to the sequence of dots and dashes and converts
them to letters, spaces, and punctuation.</li>
          <li><ImgComp src={require("./information_and_entropy_pics/2.png")} style={{width:"90%"}}/></li>
          <li>If the duration of a dot is taken to be one unit of time then that of a dash is three units. The space between the dots and dashes within one character is one unit, that between characters is three units, and
that between words seven units.</li>
          <li>Space is not considered a character.</li>
        </SubList></li>
      </ul>
    </div>
  </div>

	<h2 id="Compression">Compression</h2>
  <div className="content">
		<div data-source={40} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul>
        <li>The role of data compression
is to convert the string of bits representing a succession of symbols into a shorter string for more economical
transmission, storage, or processing.</li>
        <li><ImgComp src={require("./information_and_entropy_pics/3.png")} style={{width:"100%"}}/></li>
      </ul>
    </div>
		<div data-source={40} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
      <ul>
        <li>Two types of compression:<SubList>
          <li><b>Lossy</b> or <b>irreversible</b> compression, in which the original symbol, or its coded representation, cannot
          be reconstructed from the smaller version exactly.</li>
          <li><b>Lossless</b> or <b>reversible</b> compression</li>
        </SubList></li>
        <li><b>Variable-Length Encoding:</b><SubList>
          <li>Morse code is an example of a code in which more frequently occurring
letters of the English alphabet were represented by shorter codewords, and less frequently occurring letters
by longer codewords. On average, messages sent using these codewords are shorter than they would be if all
codewords had the same length.</li>
        </SubList></li>
        <li><b>Run Length Encoding:</b><SubList>
          <li>The message "a B B B B B a a a B B a a a a" could be encoded as "a 1 B 5 a 3 B 2 a 4".</li>
        </SubList></li>
        <li><b>Static Dictionary:</b><SubList>
          <li>If a code has unused codewords, these may be assigned, as abbreviations, to frequently occurring sequences of symbols.</li>
          <li>For example, if English text is being encoded in ASCII and the DEL character is regarded as
          unnecessary, then it might make sense to assign its codeword 127 to the common word "the".</li>
          <li>The compression technique considered here uses a dictionary which is <b>static</b> in the
          sense that it does not change from one message to the next.<Questions>
            <li>Is Morse Code considered "static"?</li>
          </Questions></li>
        </SubList></li>
        <li><b>Semi-adaptive Dictionary:</b><SubList>
          <li>The static-dictionary approach requires one dictionary, defined in advance, that applies to all messages.</li>
          <li>Doing so would have several drawbacks:<SubList numbered>
            <li>The new dictionary would have to be transmitted along with the encoded message, resulting in increased overhead.</li>
            <li>The message would have to be analyzed to discover the best set of dictionary entries, and therefore the entire message would have to be available for analysis before any part of it could be encoded.</li>
            <li>The computer calculating the dictionary would need to have enough memory to store the entire message.</li>
          </SubList></li>
          <li>These disadvantages have limited the use of semi-adaptive dictionary compression schemes.</li>
        </SubList></li>
        <li><b>LZW Compression:</b><SubList>
          <li>What would be best for many applications would be an encoding scheme using a dictionary that is
calculated on the fly, as the message is processed, does not need to accompany the message, and can be
used before the end of the message has been processed.</li>
          <li>On first consideration, this might seem impossible.
However, such a scheme is known and in wide use. It is the <b>LZW</b> compression technique, named after
Abraham Lempel, Jacob Ziv, and Terry Welch.</li>
          <li><u>Example:</u><SubList>
            <li>Consider the text message "itty bitty bit bin".</li>
            <li>The initial set of dictionary entries is 8-bit character code with code points 0-255, with ASCII as the first 128 characters.</li>
            <li>Dictionary entry 256 is defined as "clear dictionary" or "start", and 257 as "end of transmission" or "stop". The encoded message is a sequence of numbers, the codes representing dictionary entries. Initially most dictionary entries consist of a single character, but as the message is analyzed new entries are defined that stand for strings of two or more characters.</li>
            <li><ImgComp src={require("./information_and_entropy_pics/4.png")} style={{width:"100%"}}/></li>
            <li><u>Encoding algorithm:</u><SubList>
              <li>Define a place to keep new dictionary entries while they are being constructed and call it <b>new-entry</b>.</li>
              <li>Start with new-entry empty, and send the start code.</li>
              <li>Append to the new-entry the characters, one by one, from the string being compressed.</li>
              <li>As soon as new-entry fails to match any existing dictionary entry, put new-entry into the dictionary, using the next available code point, and <span className="research">send the code for the string without the last character (this entry is already in the dictionary).</span></li>
              <li>Use the last character received as the first character of the next new-entry.</li>
              <li>When the input string ends, send the code for whatever is in new-entry followed by the stop code.</li>
            </SubList></li>
            <li>In this example the codes are sent to a receiver which is expected to decode the message and produce as output the original string. The receiver does not have access to the encoder's dictionary and therefore the decoder must build up its own copy.</li>
            <li><u>Decoding algorithm:</u><SubList>
              <li>If the start code is received, clear the dictionary and set new-entry empty. For the next received code, output the character represented by the code and also place it in new-entry.</li>
              <li>For subsequent codes received, append the first character of the string represented by the code to new-entry, insert the result in the dictionary, then output the string for the received code and also place it in new-entry to start the next dictionary entry.</li>
              <li>When the stop code is received, nothing needs to be done; new-entry can be abandoned.</li>
            </SubList></li>
          </SubList></li>
        </SubList></li>
        <li><b>Discrete Cosine Transformation:</b><SubList>
          <li>Consider a very small image of six pixels, three rows of two pixels each, or two columns of three pixels each. A number representing some property of each pixel (such as its brightness on a scale of 0 to 1) could form a 3*2 matrix:</li>
          <MathStuff>$${`
          \\begin{bmatrix}i_{1,1} & i_{1,2}\\\\i_{2,1} & i_{2,2}\\\\i_{3,1} & i_{3,2}\\end{bmatrix}
          `}$$</MathStuff>
          <li>The most general linear transformation that leads to a 3*2 output matrix would require 36 coefficients. When the arrangement of the elements in a matrix reflects the underlying object being represented, a less general set of linear transformations, that operate on the rows and columns separately, using different matrices \({"\\mathbb{C}"}\) and \({"\\mathbb{D}"}\), may be useful:</li>
          <MathStuff>$${`\\displaylines{
          \\begin{bmatrix}c_{1,1} & c_{1,2} & c_{1,3}\\\\c_{2,1} & c_{2,2} & c_{2,3}\\\\c_{3,1} & c_{3,2} & c_{1,3}\\end{bmatrix}
          \\begin{bmatrix}i_{1,1} & i_{1,2}\\\\i_{2,1} & i_{2,2}\\\\i_{3,1} & i_{3,2}\\end{bmatrix}
          \\begin{bmatrix}d_{1,1} & d_{1,2}\\\\d_{2,1} & d_{2,2}\\end{bmatrix}
          \\\\ \\implies
          \\begin{bmatrix}o_{1,1} & o_{1,2}\\\\o_{2,1} & o_{2,2}\\\\o_{3,1} & o_{3,2}\\end{bmatrix}
          }`}$$</MathStuff>
          <li>In matrix notation \({"\\mathbb{O = CID}"}\).</li>
          <li>The formula \({"\\mathbb{Y} = \\mathbb{CXD}"}\) represents a transformation of the matrix \({"\\mathbb{X}"}\) into a matrix of coefficients \({"\\mathbb{Y}"}\). Assuming that the transformation matrices \({"\\mathbb{C}"}\) and \({"\\mathbb{D}"}\) have inverses \({"\\mathbb{C}^{-1}"}\) and \({"\\mathbb{D}^{-1}"}\) respectively, the original matrix can be reconstructed from the coefficients by the reverse transformation: \({"\\mathbb{X} = \\mathbb{C}^{-1} \\mathbb{Y} \\mathbb{D}^{-1}"}\).</li>
          <li>The <b>Discrete Cosine Transformation</b> is a Discrete Linear Transformation of the type \({"\\mathbb{Y} = \\mathbb{C}^{T} \\mathbb{X} \\mathbb{C}"}\) where the matrices are all of size N*N and the two transformation matrices are transposes of each other.</li>
          <li>The transformation is called the <b>Cosine transformation</b> because the matrix C is defined as</li>
          <MathStuff>$${`\\displaylines{
            \\{ \\mathbb{C}_{m,n} \\} = k_n cos \\left[ \\frac{(2m+1) n \\pi}{2N} \\right]
            \\\\ \\text{ where } k_n \\begin{cases} \\sqrt{1/N} & \\text{ if } n = 0 \\\\ \\sqrt{2/N} & \\text{otherwise}\\end{cases}
          }`}$$</MathStuff>
          <li>This matrix C has an inverse which is equal to its transpose, so \({"\\mathbb{X} = \\mathbb{C} \\mathbb{Y} \\mathbb{C}^{T}"}\)</li>
        </SubList></li>
      </ul>
    </div>
  </div>

	<h2 id="Errors">Errors</h2>
  <div className="content">
		<div data-source={40} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul>
        <li>Our model for information handling will be extended to include "channel coding". The new channel encoder adds bits to the message so that in case it gets corrupted in some way, the channel encoder will know that and possibly even be able to repair the damage.</li>
        <li><ImgComp src={require("./information_and_entropy_pics/5.png")} style={{width:"100%"}}/></li>
      </ul>
    </div>
		<div data-source={40} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
      <ul>
        <li><b>Hamming Distance:</b><SubList>
          <li>A useful definition of the difference between two bit patterns is the number of bits that are different between the two. This is called the <b>Hamming distance</b>, after Richard W. Hamming.</li>
          <li>0110 and 1110 are separated by Hamming distance of one.</li>
          <li>Note that a Hamming distance can only be defined between two bit patterns with the same number of
          bits.</li>
          <li>If two errors occur, this generally means a Hamming distance of two. However, if the two errors happen to the same bit, the second would cancel the first, and the Hamming distance would be zero.</li>
        </SubList></li>
        <li>Single Bits:<SubList>
          <li>The way to protect a single bit is to send it more than once, and expect that more often than not each bit sent will be unchanged. The simplest case is to send it twice. Thus the message 0 is replaced by 00 and 1 by 11 by the channel encoder. The decoder can then raise an alarm if the two bits are different.</li>
          <li>If two errors both happen on the same bit, then that bit gets restored to its original value and it is as though no error happened.</li>
          <li>If two errors happen on different bits then they end up the same, although wrong,
          and the error is undetected.</li>
          <li>If there are more errors, then an odd number of errors would be detected but an even number would not.</li>
          <li>To detect double errors, you can send the single bit three times. Unless all three are the same when received by the channel decoder, it is known that an error has occurred, but it is not known how many errors there might have been. Of course, triple errors may go undetected.</li>
          <li>If a single bit is sent three times, then the channel decoder can tell whether an error has occurred (if the three bits are not all the same) and it can also tell what the original value was - the process used is sometimes called "majority logic". This technique, called <b>triple redundancy</b>.</li>
          <li>Triple redundancy can be used either to correct single errors or to detect double errors, but
          not both. If you need both, you can use <b>quadruple redundancy</b> - send four identical copies of the bit.</li>
          <li><b>Code rate:</b> number of bits before channel coding divided by the number after the encoder.</li>
        </SubList></li>
        <li>Multiple Bits:<SubList>
          <li>Parity:<SubList>
            <li>Consider a byte, which is 8 bits. To enable detection of single errors, a <b>parity</b> bit (also called a "check bit") can be added, changing the 8-bit string into 9 bits. The added bit would be 1 if the number of bits
equal to 1 is odd, and 0 otherwise. Thus the string of 9 bits would always have an even number of bits equal
to 1.</li>
            <li>Then the decoder would simply count the number of 1 bits and if it is odd, know there is an error (or, more generally, an odd number of errors).</li>
            <li>The decoder could not repair the damage, and indeed could not
even tell if the damage might by chance have occurred in the parity bit, in which case the data bits would
still be correct.</li>
            <li>The use of parity bits is efficient, since the code rate is 8/9, but of limited effectiveness.</li>
          </SubList></li>
          <li>Rectangular Codes:<SubList>
            <li>Rectangular codes can provide single error correction and double error detection simultaneously.</li>
            <li>Suppose we wish to protect a byte of information, the eight data bits D0 D1 D2 D3 D4 D5 D6 D7. Let us arrange these in a rectangular table and add parity bits for each of the two rows and four columns:</li>
            <TableLI>
              <tbody>
                <tr><td>D0</td><td>D1</td><td>D2</td><td>D3</td><td><b>PR0</b></td></tr>
                <tr><td>D4</td><td>D5</td><td>D6</td><td>D7</td><td><b>PR1</b></td></tr>
                <tr><td><b>PC0</b></td><td><b>PC1</b></td><td><b>PC2</b></td><td><b>PC3</b></td><td><b>P</b></td></tr>
              </tbody>
            </TableLI>
            <li>The idea is that each of the parity bits PR0 PR1 PC0 PC1 PC2 PC3 is set so that the overall parity
            of the particular row or column is even.</li>
            <li>The total parity bit P is then set so that the right-hand column consisting only of parity bits has itself even parity.</li>
            <li>The 15 bits can be sent through the channel and the decoder analyzes the received bits.</li>
            <li>If there is a single error in any one of the bits, then one of the three row parities and one of the five column parities will be wrong. The offending bit can thereby be identified (it lies at the intersection of the row and column with incorrect parity) and changed.</li>
            <li>If there are two errors, there will be a different pattern of parity failures; double errors can be detected but not corrected.</li>
          </SubList></li>
          <li className="research">Hamming Codes</li>
        </SubList></li>
        <li><b>Block Codes:</b><SubList>
          <li>It is convenient to think in terms of providing error-correcting protection to a certain amount of data and then sending the result in a block of length n. If the number of data bits in this block is \(k\), then the number of parity bits is \(n-k\), and it is customary to call such a code an \((n, k)\) block code.</li>
          <li>It is also customary to include in the parentheses the minimum Hamming distance d between any two valid codewords, or original data items, in the form \((n, k, d)\). The Hamming Code that we just described can then be categorized as a \((7, 4, 3)\) block code.</li>
        </SubList></li>
        <li><b>Check Digits:</b><SubList>
          <li>Credit Cards:<SubList>
            <li>Credit card numbers have an extra check digit calculated in a way specified in 1954 by H. P. Luhn of IBM. It is designed to guard against a common type of error, which is transposition of two adjacent digits</li>
            <li>Credit card numbers typically contain 15 or 16 digits (Luhn's algorithm actually works for any number of digits). The first six digits denote the organization that issued the card.</li>
            <li>Of those six digits, the first denotes the economic sector associated with the card, for example
1 and 2 for airlines, 3 for travel and entertainment, and 4, 5, and 6 for banks and stores.</li>
            <li>The last digit is the check digit, and the other digits denote the individual card account.</li>
            <li>The Luhn procedure:<SubList numbered>
              <li>First, select those digits from the card number that appear in alternate positions, starting with the next-to-last digit. For example, if the card number is 1234 4567 7891, those digits would be 9, 7, 6, 4, 3, and 1.</li>
              <li>Note how many of those digits are greater than 4 (in this case 3 of them).</li>
              <li>Then add those digits together (for the example, 9 + 7 + 6 + 4 + 3 + 1 = 30).</li>
              <li>Then add all the digits in the card number (in this example, 57).</li>
              <li>Look at the sum of those three numbers (in this case 3 + 30 + 57 = 90).</li>
              <li>If the result is a multiple of 10, as in this example, the card number passes the test and may be valid. Otherwise, it is not.</li>
            </SubList></li>
            <li>This procedure detects all single-digit errors, and almost all transpositions of adjacent digits (such as typing "1243" instead of "1234"), but there are many other possible transcription errors that are not caught, for example "3412" instead of "1234".</li>
            <li>It has a high code rate (only one check digit added to 14 or 15 payload digits) and is simple to use. It cannot be used to correct the error.</li>
          </SubList></li>
          <li>ISBN:<SubList>
            <li>The International Standard Book Number (ISBN) is a 13-digit number that uniquely identifies a book
            or something similar to a book.</li>
            <li>The system was created by the British bookseller W. H. Smith in 1966 using 9-digit numbers, then
upgraded in 1970 for international use by prepending 0 to existing numbers, and then upgraded in 2007 to
13-digit numbers by prepending 978 and recalculating the check digit.</li>
            <li>There are five parts to an ISBN (four prior to 2007), of variable length, separated by hyphens:<SubList numbered>
              <li>First is the prefix 978 (missing prior to 2007). When the numbers using this prefix are exhausted, the prefix 979 will be used.</li>
              <li>Next is a country identifier (or groups of countries or areas sharing a common language).</li>
              <li>Next is a number that identifies a particular publisher.</li>
              <li>Then is the identifier of the title</li>
              <li>Finally, the single check digit.</li>
            </SubList></li>
            <li>Consider ISBN 0-9764731-0-0 (which is in the pre-2007 format).</li>
            <li>The language area code of 0 represents English speaking countries. The publisher 9764731 is the Department of Electrical Engineering and Computer Science, MIT. The item identifier 0 represents the book "The Electron and the Bit".</li>
            <li>The identifier is 0 resulted from the fact that this book is the first published using an ISBN by this publisher.</li>
            <li>Books published in 2007 and later have a 13-digit ISBN which is designed to be compatible with UPC
(Universal Product Code) barcodes widely used in stores. The procedure for finding UPC check digits is
used for 13-digit ISBNs:<SubList numbered>
              <li>Start with the 12 digits (without the check digit).</li>
              <li>Add the first, third, fifth, and other digits in odd-number positions together.</li>
              <li>Multiply the sum by 3.</li>
              <li>Then add the result to the sum of digits in the even-numbered positions (2, 4, 6, 8 10, and 12).</li>
              <li>Subtract the result from the next higher multiple of 10.</li>
              <li>The result, a number between 0 and 9, inclusive, is the desired check digit.</li>
            </SubList></li>
            <li>For books published prior to 2007, the check digit can be calculated by the following procedure:<SubList>
              <li>Start with the nine-digit number (without the check digit).</li>
              <li>Multiply each by its position, with the left-most position being 1, and the right-most position 9.</li>
              <li>Add those products, and find the sum's residue modulo 11.</li>
              <li>The result is a number between 0 and 10. That is the check digit.</li>
              <li>For example, for ISBN 0-9764731-0-0, (1 * 0) + (2 * 9) + (3 * 7) + (4 * 6) + (5 * 4) + (6 * 7) + (7 * 3) + (8 * 1) + (9 * 0) = 154 which is 0 mod 11.</li>
              <li>This technique yields a code with a large code rate (0.9) that is effective in detecting the transposition of two adjacent digits or the alteration of any single digit.</li>
            </SubList></li>
          </SubList></li>
        </SubList></li>
      </ul>
    </div>
  </div>
</>