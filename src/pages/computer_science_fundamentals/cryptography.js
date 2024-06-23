
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import SubList from "../../articleRelatedStuff/SubList";

export const title = "Cryptography Notes";
export const sourcesColor = {33: null, 34: "rgb(204, 119, 153)"};
export const content = <>
  <h1>Cryptography</h1>
  {getSourcesOL(sourcesColor)}

  <h2 id="introduction">Introduction</h2>
  <div className="content">
	  <div style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
		  <ul>
			  <li className="Opened"><b>Cryptography:</b> process/technique(s) of converting data into unintelligible form in order to ensure: confidentiality, data integrity, and authentication<SubList>
				  <li><b>requirement 1:</b> no data should be lost during encryption</li>
				  <li><b>requirement 2:</b> decryption should ensure perfect data recovery</li>
			  </SubList></li>
			  <li className="Opened">Elements of Encryption System:<SubList>
				  <li><b>Plaintext:</b> original message that should be "protected"</li>
				  <li><b>Encryption algorithm:</b> performs various substitutions,
				  permutations and transformations on plaintext</li>
				  <li><b>Key:</b> variable data that is input into encryption algorithm
				  together with plaintext - determines exact substitutions, permutations and
				  transformations performed on plaintext</li>
				  <li><b>Ciphertext:</b> scrambled message produced as output</li>
				  <li><b>Decryption algorithm:</b> encryption algorithm run in
				  reverse</li>
			  </SubList></li>
			  <li><a href='https://en.wikipedia.org/w/index.php?title=Kerckhoffs%27s_principle&oldid=1137001231'><b>Kerckhoffs's principle:</b> The principle holds that a cryptosystem should be secure, even if everything about the system, except the key, is public knowledge.</a></li>
			  <li>In modern cryptography encryption/decryption algorithm
				  is not a secret.</li>
			  <TableLI><tbody><tr><td>Crypto-attack speed = n<sub>keys</sub> X t<sub>one-decryption</sub></td></tr></tbody></TableLI>
		  </ul>
	  </div>
	  <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}}>
		  <ul>
			  <li><a href='https://www.differencebetween.info/difference-between-cryptography-and-cryptanalysis'>Comparison between Cryptography and Cryptanalysis:</a></li>
			  <TableLI>
				  <thead><tr><th></th><th>Cryptography</th><th>Cryptanalysis</th></tr></thead>
				  <tbody>
					  <tr>
						  <th>
							  Defintion
						  </th>
						  <td>
							  The art or science of encrypting plain messages into cipher text for security of the messages especially while transmission.
						  </td>
						  <td>
							  The art of obtaining plain text from a cipher text without knowledge of key.
						  </td>
					  </tr>
					  <tr>
						  <th>
							  Practitioner
						  </th>
						  <td>
							  Cryptographer
						  </td>
						  <td>
							  Cryptanalyst
						  </td>
					  </tr>
					  <tr>
						  <th>
							  Focus
						  </th>
						  <td>
							  Secret writing
						  </td>
						  <td>
							  Breaking secrets
						  </td>
					  </tr>
				  </tbody>
			  </TableLI>
			  <li>Examples of Cryptanalysis Attack Models:<SubList>
				  <TableLI style={{width: "80%", marginLeft: "10%", marginRight: "10%"}}><thead><tr><th>Attacks</th><th>Goals</th></tr></thead>
				  <tbody>
					  <tr><td>Ciphertext Only</td><td>goal is to find the plaintext</td></tr>
					  <tr><td>Known Plaintext</td><td>goal is to find the key and then
						  apply it to the entire ciphertext</td></tr>
					  <tr><td>Chosen Plaintext</td><td>goal is to find the key</td></tr>
					  <tr><td>Chosen Ciphertext</td><td>goal is to find the key</td></tr>
				  </tbody></TableLI>
				  <li><a href='http://www.crypto-it.net/eng/attacks/known-plaintext.html'>During <b>known-plaintext attacks</b>, the attacker has an access to the ciphertext and its corresponding plaintext. His goal is to guess the secret key (or a number of secret keys) or to develop an algorithm which would allow him to decrypt any further messages.</a></li>
				  <li><a href='http://www.crypto-it.net/eng/attacks/chosen-plaintext.html'>During the <b>chosen-plaintext attack</b>, a cryptanalyst can choose arbitrary plaintext data to be encrypted and then he receives the corresponding ciphertext. He tries to acquire the secret encryption key or alternatively to create an algorithm which would allow him to decrypt any ciphertext messages</a></li>
				  <li><a href='http://www.crypto-it.net/eng/attacks/chosen-ciphertext.html'>During the <b>chosen-ciphertext attack</b>, a cryptanalyst can analyse any chosen ciphertexts together with their corresponding plaintexts. His goal is to acquire a secret key or to get as many information about the attacked system as possible.</a></li>
			  </SubList></li>
		  </ul>
	  </div>
  </div>

  <h2 id="classical">Classical Cryptography</h2>
  <div className="content">
		<div style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
				<ul>
						<li><b>Classical cryptography:</b> more of an art than science<SubList>
								<li>schemes were designed in an ad-hoc manner and then
								evaluated based on their perceived complexity/cleverness.</li>
								<li>true strength of these schemes was in secrecy of their
								respective protocols.</li>
						</SubList></li>
						<li><b>Modern cryptography:</b> based on scientific foundations<SubList>
								<li>the strength is NOT in secrecy of protocols but in sound
								mathematical and computational principles</li>
								<li>it is now possible to formally argue about the security
								protocols</li>
								<li>used for more than just data confidentiality - can protect
								data integrity, enable user authentication, etc.</li>
						</SubList></li>
						<li><b>Caesar Cipher:</b><SubList>
							<li>Monoalphabetic substitution cipher in
								which each letter in the plaintext is replaced by a letter
								some fixed number of positions down the alphabet.</li>
							<li><ImgComp src={require("./cryptography_pics/c4.jpg")} style={{width: "60%", marginLeft: "20%"}}/></li>
						</SubList></li>
						<li><b>Pigpen Cipher:</b><SubList>
							<li>Simple substitution cipher in which each letter is replaced with a graphical symbol.</li>
							<li><ImgComp src={require("./cryptography_pics/c5.jpg")} style={{width: "60%", marginLeft: "20%"}}/></li>
						</SubList> </li>
						<li><b>Polyalphabetic / Vigenere Cipher:</b><SubList>
							<li>Complex substitution
								cipher - instead of shifting each character by the same
								number, characters located at different positions are
								shifted by different numbers.</li>
							<li><ImgComp src={require("./cryptography_pics/c6.jpg")} style={{width: "60%", marginLeft: "20%"}}/></li>
						</SubList></li>
						<li>In <b>Substitution Cipher</b> techniques,
								a character's identity is changed
								while its position remains
								unchanged; in <b>Transposition Cipher</b> techniques,
								a character's position is changed
								while its identity remains
								unchanged.</li>
				</ul>
		</div>
		<div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}}>
			<ul>
				<li><b>Rail Fence Cipher:</b><SubList>
					<li>Transposition cipher in which the
						plaintext is written downwards and upwards on successive
						"rails" of an imaginary fence.</li>
					<li><ImgComp src={require("./cryptography_pics/c7.jpg")} style={{width: "60%", marginLeft: "20%"}}/></li>
				</SubList> </li>
				<li><b>Rotor Machines:</b> mechanical devices for implementing
						complex substitution cipher - most famous example
						is the <b>German Enigma machine</b> from World War II.</li>
			</ul>
			<ul data-source={34}>
				<li><b>Rectangular Transposition:</b><SubList>
					<li>Let's say we have this plaintext: "Challenger lands safely after a five day journey", and this key: CONDOR.</li>
					<li>The letter C is the lexicographically earliest in CONDOR, followed by D, N, O and R in that order. We can thus associate the permutation [1 4 3 2 5 6] to CONDOR based on that order. The two O's that appear are labelled 4 and 5 from left to right.</li>
					<li>Now the plaintext is written under this permutation rowwise:</li>
					<li><ImgComp src={require("./cryptography_pics/c20.jpg")} style={{width: "60%"}}/></li>
					<li>The last row is completed with dummy letters (in this case Q). The ciphertext is constructed by reading the text vertically in the order of the numbered columns: CNNEE EULRS AFYEA ESYAA NHGDL RDRLL AFIJY EAFTV OQ.</li>
					<li>Now, suppose that we have the following ciphertext based on the keyword <i>Georgia</i>.</li>
					<TableLI>
						<tbody>
							<tr><td>MTRDYHWAOWTYTTANLOAQEAUTREICWNELKNE</td></tr>
						</tbody>
					</TableLI>
					<li>The permutation corresponding to Georgia is [3 2 6 7 4 5 1].</li>
					<li>Thus the first five letters belong in the seventh column, the second five letters belong in the second column, the third set of five letters belong to the first column, etc. The result:</li>
					<li><ImgComp src={require("./cryptography_pics/c21.jpg")} style={{width: "60%"}}/></li>
					<li>This yields the message "The enemy will attack our town at dawn" with "eqry" arbitrarily added as extra letters.</li>
				</SubList></li>
			</ul>
		</div>
  </div>

  <h2 id="modern">Modern Cryptography</h2>
  <div className="content">
	  <div style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
		  <ul>           
			  <li>Symmetric Ciphers:<SubList>
				  <li><b>Symmetric Encryption:</b> private-key encryption - uses the
					  same secret/private key to encrypt & decrypt information.</li>
				  <li><b>Symmetric key:</b> shared secret - must only be known
					  to the communicating parties.</li>
				  <li>To ensure full confidentiality in a group of N users, each
					  pair of users must share a unique key; In a group of N users, total number of keys required =
					  (N-1) + (N-2) + (N-3) + ... + 1 = ((N-1)*N)/2.</li>
				  <li><ImgComp src={require("./cryptography_pics/c14.jpg")} style={{width: "60%", marginLeft: "20%"}}/></li>
				  <li><b>Confusion:</b> making the plaintext-ciphertext substitution (i.e., relationship between the key and the ciphertext) as complex and involved as possible.</li>
				  <li><b>Diffusion (permutation):</b> ensuring that the statistics of the plaintext is dissipated in the statistics of the ciphertext.</li>
				  <li>Categories of Symmetric Encryption:<SubList>
					  <li><b>Stream Cipher:</b> encrypt digits (bytes) of a message one at a time. Advantage: speed of transformation; disadvantage: low diffusion, sensitivity to tampering. Improvement: pseudo-randomized key, key changes in pseudo-random manner - hard for attacker to predict.</li>
					  <li><b>Block Cipher:</b><SubList>
						  <li>Data is divided into fixed length blocks - all block bits are then acted upon to produce an output.</li>
						  <li>Advantage: high diffusion - information from one
							  plaintext symbol is diffused into several ciphertext
							  symbols</li>
						  <li>Disadvantage: slowness of encryption.</li>
						  <li><b>Data Encryption Standard:</b> takes a 64-bit block of plaintext
							  and a 56-bit key to produce
							  a ciphertext block of 64 bits.</li>
						  <li><b>Advanced Encryption Standard:</b><SubList>
							  <li>Like DES, AES is an iterated block cipher in which a block
  of plaintext is subject to multiple rounds of processing, with
  each round applying the same overall function.</li>
							  <li>Unlike DES, AES applies transformation operation to the entire
  incoming block in each iteration, while in DES one-half of incoming
  block passes unchanged.</li>
							  <li>Unlike DES which is bit-oriented, AES is byte-oriented &Implies; allows
  convenient and fast software implementation.</li>
							  <li>Unlike DES, where 1/64 bits of a plaintext affected roughly 31/64
  bits of the ciphertext, in AES (due to shift-row and mix-column
  steps) each bit of the plaintext affects every bit of the ciphertext.</li>
						  </SubList></li>
					  </SubList></li>

				  </SubList></li>
			  </SubList></li>   
			  <li className="Opened">Asymmetric Ciphers:<SubList>
				  <li>Involves the use of two separate but related keys: <b>public key</b> and <b>private key</b>.</li>
				  <li>Public key is made public
					  for others to use, private key
					  is known only to its owner. Either key can encrypt a
					  message, the other key must be used for decryption.</li>
					  <li><ImgComp src={require("./cryptography_pics/c15.jpg")} style={{width: "100%"}}/></li>
					  <li><ImgComp src={require("./cryptography_pics/c16.jpg")} style={{width: "100%"}}/></li>
				  <li><b>Diffie-Hellman:</b><SubList>
					  <li><u>purpose:</u> enable two users to securely reach agreement
						  (i.e., generate) a secret key for subsequent symmetric
						  encryption without the involvement of a KDC.</li>
					  <li><u>property:</u> private key A and public key B generate the
						  same result as private key B and public key A.</li>
					  <li><ImgComp src={require("./cryptography_pics/c17.jpg")} style={{width: "100%"}}/></li>
				  </SubList></li>
				  <li><b>RSA:</b> Rivest, Shamir, Adleman:<SubList>
					  <li>DH is used to generate a secret key, while RSA is used to exchange a secret key for subsequent symmetric encryption.</li>
					  <li><ImgComp src={require("./cryptography_pics/c19.jpg")} style={{width: "100%"}}/></li>
				  </SubList></li>
				  <li><b>Digital Envelope:</b> use of asymmetric encryption
					  for fast exchange of confidential messages:<SubList>
						  <li>generate random symmetric key Ksymmetric</li>
						  <li>encrypt message using Ksymmetric - digital letter</li>
						  <li>encrypt Ksymmetric using receiver's public key K+ - protective
							  digital envelope</li>
						  <li>send the two together</li>
					  </SubList>
					  </li>
				  <li><b>Digital Signature:</b> use of asymmetric encryption to
					  protect message integrity + sender authenticity.</li>
				  <li><b>Certificate Authority:</b> a trusted government agency or a
					  for-profit institution that issues Digital Certificates.</li>
				  <li><b>Digital Certificate:</b> digital document that binds a public
					  key to an identity (person or organization) and contains:<SubList>
					  <li><b>Serial Number:</b> Used to uniquely identify the certificate.</li>
					  <li><b>Subject:</b> The person, or entity identified.</li>
					  <li><b>Signature Algorithm:</b> The algorithm used to create the signature.</li>
					  <li><b>Signature:</b> The actual signature to verify that it came from the issuer.</li>
					  <li><b>Issuer:</b> The entity that verified the information and issued the certificate.</li>
					  <li><b>Valid-From:</b> The date the certificate is first valid from.</li>
					  <li><b>Valid-To:</b> The expiration date.</li>
					  <li><b>Key-Usage:</b> Purpose of the public key (e.g. encipherment, signature, certificate signing...).</li>
					  <li><b>Public Key:</b> The public key.</li>
				  </SubList></li>
			  </SubList></li>
		  </ul>
	  </div>
	  <div style={{width: "49%",float: "right",marginLeft: "0.5%",marginRight: "0.5%"}} data-source={34}>
		  <ul>
			  <li><b>Primitive Roots:</b><SubList>
				  <li><ImgComp src={require("./cryptography_pics/c8.jpg")} style={{width:"80%",marginLeft:"10%"}}/></li></SubList></li>
			  <li><a href='https://en.wikipedia.org/w/index.php?title=Trapdoor_function&oldid=1132232623'>A <b>trapdoor function</b> is a function that is easy to compute in one direction, yet difficult to compute in the opposite direction (finding its inverse) without special information, called the "trapdoor".</a></li>
			  <li><b>The Euclidean Algorithm:</b><SubList>
				  <li><ImgComp src={require("./cryptography_pics/c9.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>
				  <li>15 divides 105; 15 divides 225; 15 divides 1680; 15 divides 1905; 15 divides 11205. Thus 15 is a common divisor of 11205 and 1905.</li>
				  <li><ImgComp src={require("./cryptography_pics/c10.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>
				  <li>The Euclidean Algorithm yields not only the greatest common divisor of a and b, d, but it also yields two constants h and k such that: d = ha + kb.</li>
			  </SubList></li>
			  <li><a href="https://www.doc.ic.ac.uk/~mrh/330tutor/ch05s02.html">The <b>totient \({"\\phi(n)"}\)</b> of a positive integer \({"n"}\) greater than 1 is defined to be the number of positive integers less than \({"n"}\) that are coprime to \({"n"}\).</a></li>
			  <li><b>Diffie-Hellman public key exchange:</b><SubList>
				  <li>Our collection of people p<sub>1</sub>, p<sub>2</sub>, ..., p<sub>k</sub> first agree on a modulus, p, in which they do their
					  computations. For example, let's say that they agree on the number 37.</li>
				  <li>They also agree on a common base, a, which they will raise to some powers later on. In this
					  case, they choose base 17. This base must be a primitive root of p.</li>
				  <li>Each person then secretly selects a number from 1 to p - 1. We will focus on two of these
					  people p<sub>3</sub> and p<sub>6</sub>. In this case, p<sub>3</sub> selects 10 and p<sub>6</sub> selects 9.</li>
				  <li>Now, p<sub>3</sub> and p<sub>6</sub> may create their own
					  common key, known by nobody else, without compromising their own secret number. To do this,
					  p<sub>3</sub> publicly sends p<sub>6</sub> the value 17<sup>10</sup> (mod 37) = 28, and tells p<sub>6</sub> to raise it to his secret number. Now, p<sub>6</sub> has the number 28<sup>9</sup>
					  (mod 37) = 36.</li>
				  <li>In return, p<sub>6</sub> sends p<sub>3</sub> the value
					  17<sup>9</sup>
					  (mod 37) = 6
					  and p<sub>3</sub> raises that to his secret number to get
					  6
					  <sup>10</sup> (mod 37) = 36</li>
				  <li>So p<sub>3</sub> and p<sub>6</sub> both have the number 36, known to nobody else and neither person gave away their
					  private key. This common key, 36, can now be used as the key for any secret communication
					  between p<sub>3</sub> and p<sub>6</sub>. For example, they may decide to encrypt with Vigenere, using the digits of the
					  key as shift values. Or they may use the <b>ElGamal Public Key System</b>.</li>
			  </SubList></li>
			  <li><b>ElGamal Public Key System:</b><SubList>
				  <li>Alice wants to send Bob a message X using his public key &beta; = a<sup>SB</sup> mod p, where SB is Bob's secret key. The values p and a are public.</li>
				  <li>Alice chooses at random a secret number SA in the interval \({"{1, \\ldots, p-1}"}\), and sends the
					  pair (Y, Z), where Y = a<sup>SA</sup> mod p, and Z = X &beta;<sup>SA</sup> mod p.</li>
				  <li>Bob can then get X back using his secret exponent SB: X = Z (Y<sup>SB</sup>)<sup>-1</sup> mod p.</li>
				  <li>This works because Z (Y<sup>SB</sup>)<sup>-1</sup> ≡ X &beta;<sup>SA</sup> (Y<sup>SB</sup>)<sup>-1</sup> ≡ X &beta;<sup>SA</sup> (a<sup>SA SB</sup>)<sup>-1</sup> ≡ X &beta;<sup>SA</sup> (&beta;<sup>SA</sup>)<sup>-1</sup> ≡ X.</li>
			  </SubList></li>
			  <li><b>The Huffman tree:</b><SubList>
				  <li>Lets create the Huffman tree from the labels A, B, C, D, E, F with the respective probabilities 1/24, 5/24, 1/12, 1/12, 5/24, 3/8.</li>
				  <li> Group the pair of nodes together with the smallest two probabilities and creating a new node with two branches and associating the sum of the probabilities to this new node.</li>
				  <li><ImgComp src={require("./cryptography_pics/c11.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>
				  <li><ImgComp src={require("./cryptography_pics/c12.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>
				  <li>Since there are now three nodes of weight 5, we have a choice.</li> 
				  <li><ImgComp src={require("./cryptography_pics/c13.jpg")} style={{width: "70%",marginLeft: "15%"}}/></li>    
			  </SubList></li>
			  <li><b>The RSA System:</b><SubList numbered>
				  <li>Choose p and q primes and let n = pq</li>
				  <li>Message space: \({"{1, 2, \\ldots , m - 1}"}\).</li>
				  <li>Key space: \({"{e | 1 ≤ e ≤ \\phi(m), gcd(e, \\phi(m)) = 1}"}\)</li>
				  <li>Encrypting transformation: C = M<sup>e</sup> mod m.</li>
				  <li>Decrypting transformation: M = C<sup>d</sup> mod m where ed ≡ 1 mod &phi;(m).</li>
			  </SubList></li>
		  </ul>
	  </div>
  </div>
</>