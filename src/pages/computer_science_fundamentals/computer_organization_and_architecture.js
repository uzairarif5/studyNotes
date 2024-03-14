import SubList from "../../articleRelatedStuff/SubList";
import { CodePre } from "../../articleRelatedStuff/Code";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";

export const title = "Computer Organization And Architecture Notes";
export const sourcesColor = {20: null, 23: null};
/*OpenDSA Chapter 3 and 4 only */
/*Basic Computer Architecture by Smruti R. Sarangi till 4.2.7 */
export const content = 
<>
	<h1>Computer Organization And Architecture Notes</h1>
	<div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	{getSourcesOL(sourcesColor)}
	<h2 id="introduction_to_computer_architecture">Introduction To Computer Architecture</h2>
	<div className="content">
			<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
					<ul>
							<li><b>Computer architecture</b> is the study of computers.</li>
							<TableLI><tbody><tr>
									<td><b>Architecture:</b> The view of a computer presented to software designers.</td>
									<td><b>Organisation:</b> The actual implementation of a computer in hardware.</td>
							</tr></tbody></TableLI>
							<li>A <b>computer</b> is a general purpose device that can be programmed to process information, and
									yield meaningful results.</li>
							<li>A typical <b>program</b> contains a set of instructions that tell the computer regarding the operations that need to be performed on the <b>information store</b>. The information store typically contains numbers and pieces of text that the program can use:<SubList>
							<li><ImgComp src={require("./computer_organization_and_architecture_pics/4.PNG")} style={{width: "40%"}}/></li>
							</SubList></li>
							<li>There are three main parts of a typical desktop computer:<SubList>
									<li>The <b>CPU (Central Processing Unit)</b> is the main part of the computer that takes a program as input, and executes it.</li>
									<li>The <b>main memory</b> is used to store data that a program might need during its execution (information store). When we turn off the power, the processor and main memory lose all their data.</li>
									<li>The <b>hard disk</b> represents permanent storage. We do not expect to lose our data when we shut down the system. This is because all our programs, data, photos, videos, and documents are safely backed up in the hard disk.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/5.PNG")} style={{width: "60%"}}/></li>
									<li>The processor has the central responsibility of executing programs, communicating with the main memory, hard disk, and peripherals. It is the only active unit in our entire system. The others are passive and only respond to requests. They do not have any computational capability of their own.</li>
							</SubList></li>
							<li>Peripheral components:<SubList>
									<li>Along with these main  components, there are a host of <i>peripheral components</i> that are connected to the computer. For example, the keyboard and mouse are connected to a computer. They take inputs from the user
											and communicate them to programs running on the processor.</li>
									<li><a href='https://study.com/learn/lesson/computer-peripherals.html#:~:text=A%20computer%20peripheral%2C%20technically%20speaking%2C%20is%20any%20device%20that%20connects%20to%20the%20computing%20unit%20but%20is%20not%20part%20of%20the%20core%20architecture%20of%20the%20computing%20unit.'>A <b>computer peripheral</b> is any device that connects to the computing unit but is not part of the core architecture of the computing unit.</a></li>
							</SubList></li>
					</ul>
			</div>
			<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
					<ul>
							<li>The language of instructions:<SubList>
									<li>To communicate with a computer, we need to speak its language. This language consists of a set of basic instructions that the computer can understand.</li>
									<li>It is necessary to convert high level thoughts and concepts to basic instructions that are machine understandable.</li>
									<li>Programmers typically write programs in a high level language such as C or Java. These languages contain complex constructs such as structures, unions, switch-case statements, classes and inheritance. These concepts are too complicated for a computer to handle. Hence, it is necessary to pass a program through a <i>compiler</i> that can convert it into a sequence of basic instructions.</li>
									<li>The compiler takes the high level program as input, and produces a program containing machine instructions. This program is typically called an <b>executable</b> or <b>binary</b>. Note, that the compiler itself is a program consisting of basic machine instructions.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/6.PNG")} style={{width: "60%"}}/></li>
									<li>The number of basic instructions/rudimentary commands
											that a processor can support have to be finite. This set of instructions is typically called the
											<b>instruction set</b>.</li>
									<li>Some examples of basic instructions are: add, subtract, multiply, logical or,
											and logical not.</li>
							</SubList></li>
							<li>Instruction Set:<SubList>
									<li>The semantics of all the instructions supported by a processor is known as the <b>instruction
											set architecture (ISA)</b>. This includes the semantics of the instructions themselves, along
											with their operands, and interfaces with peripheral devices.</li>
									<li>Note that each instruction needs to work on a set of variables and constants,
											and finally save the result in a variable. These variables are not programmer defined variables;
											they are internal locations within the computer.</li>
									<li>To run a C program on a certain architecture, we need to procure a
											compiler for that specific architecture, and then appropriately compile the C program.</li>
									<li>An ISA needs to have some necessary properties and some desirable properties for efficiency:<SubList>
											<li><b>Complete:</b> The ISA should be able to implement all user programs.</li>
											<li><b>Concise:</b> Limited size of the instruction set. Implementing a lot of instructions
													will unnecessarily increase the number of transistors in the processor and increase its complexity.</li>
											<li><b>Generic:</b> Instructions should capture the common case. It is not a good idea to have instructions that implement a very rarely used computation.</li>
											<li><b>Simple:</b> Instructions should be Simple</li>
									</SubList></li>
									<li>A <b>reduced instruction set computer (RISC)</b> implements simple instructions that have a
											simple and regular structure. The number of instructions is typically a small number (64
											to 128).</li>
									<li>A <b>complex instruction set computer (CISC)</b> implements complex instructions that are highly
											irregular, take multiple operands, and implement complex functionalities. Secondly, the
											number of instructions is large (typically 500+).</li>
							</SubList></li>
							<li><b>Turing Machine:</b><SubList>
									<li>A <b>Turing machine</b> contains an infinite tape that is an array of cells. Each cell can contain a symbol from a finite alphabet. A dedicated tape head points to a cell in the infinite tape. There is a small piece of storage to save the current state among a finite set of states. This storage element is called a <b>state register</b>.</li>
									<li>The operation of the Turing machine is very simple. In each step, the tape head reads the symbol in the current cell, its current state from the state register, and looks up a table that contains the set of actions for each combination of symbol and state. This dedicated table is called a <b>transition function table</b> or <b>action table</b>.</li>
									<li>Each entry in this table specifies three things: whether to move the tape head one step to the left or right, the next state, and the symbol that should be written in the current cell. Thus, in each step, the tape head can overwrite the value of the cell, change its state in the state register and move to a new cell. The only constraint is that the new cell needs to be to the immediate left or right of the current cell.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/7.PNG")} style={{width: "50%"}}/></li>
									<li><b>Church-Turing thesis:</b> Any real-world computation can be translated into an equivalent computation involving a Turing machine. In lay man's terms, any program that can be computed by deterministic algorithms on any computer known to man, is also computable by a Turing machine. This thesis has held its ground for the last half century. Researchers have up till now not been able to find a machine that is more powerful than a Turing machine.</li>
							</SubList></li>
							<li>Universal Turing Machine:<SubList>
									<li>The Turing machine described above contains an action table, which is specific to the function being computed by the machine.</li>
									<li>A true <b>universal machine</b> will have the same action table, symbols, and also the same set of
											states for every function. We can make a universal Turing machine, if we can design a Turing
											machine that can simulate another Turing machine. This Turing machine will be generic and
											will not be specific to the function that is being computed.</li>
									<li>Let the Turing machine that is being simulated be called \(M\), and the universal Turing
											machine be called \(U\). Let us first create a generic format for the action table of \(M\), and save it in a designated location on the tape of \(U\). This <i>simulated action table</i> contains a list of actions, and each action requires the five parameters: old state, old symbol, direction(left or right), new state, new symbol.</li>
									<li>We can use a common set of basic symbols that can be the 10 decimal digits (0-9). If a function requires more symbols then we can consider one symbol to be contained in a set of contiguous cells demarcated by special delimiters. Let such a symbol be called a <i>simulated symbol</i>. Likewise, the state in the simulated action table can also be encoded as a decimal number. For the direction, we can use 0 for left, and 1 for right.</li>
									<li>A single action table entry might look something like <code>(@1334@34@0@1335@10@)</code>. Here the \(@\) symbol is the delimiter which says that we are moving from state 1334 to 1335 if symbol 34 is encountered. We move left (0), and write a value of 10. Thus, we have found a way of encoding the action table, set of symbols, and states of a Turing machine designed to compute a certain function.</li>
									<li>Similarly, we can designate an area of the tape to contain the state register of \(M\). We call this the <i>simulated state register</i>. Let the tape of M be given a dedicated space in the tape of \(U\), and let us call this space the <i>work area</i>.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/11.PNG")} style={{width: "70%"}}/></li>
									<li>The universal Turing machine has a very simple action table and set of states. The idea
											is to find the right entry in the simulated action table that matches the value in the simulated
											state register and simulated symbol under the tape head. Then the universal Turing machine
											needs to carry out the corresponding action by moving to a new simulated state, and overwriting
											the simulated symbol in the work area if required.</li>
									<li>Any computing system that is equivalent to a Turing machine is said to be <b>Turing complete</b>. Any universal machine and ISA is thus Turing complete.</li>
							</SubList></li>
							<li>A Modified Universal Turing Machine:<SubList>
									<li>Let us now consider a variant of a universal Turing machine that is more amenable to practical implementations. Let it have the following features:<SubList numbered={true} opened={true}>
											<li>The tape is semi-infinite (extends to infinity in only one direction).</li>
											<li>The simulated state is a pointer to an entry in the simulated action table.</li>
											<li>There is one unique entry in the simulated action table for each state.</li>
											<li>An action directs the tape head to visit a set of locations in the work area, and based
											on their values computes a new value. It writes this new value into a new location in the work area.</li>
											<li>The default next state is the succeeding state in the action table.</li>
											<li>An action can also arbitrarily change the state if a symbol at a certain location on the
											tape is less than a certain value. "Changing the state" means that the simulated tape head
											will start fetching actions from a new area in the simulated action table.</li>
									</SubList></li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/12.PNG")} style={{width: "90%"}}/></li>
									<li>This Turing machine suggests a machine organisation of the following form:<SubList>
											<li>There is a large
											array of instructions (action table). This array of instructions is commonly referred to as the <b>program</b>.</li>
											<li>There is a state register that maintains a pointer to the current instruction in the
											array. We can refer to this register as the <b>program counter</b>.</li>
											<li>There is a large work area, where symbols can be stored, retrieved and modified. This work area is also known as the <b>data area</b>.</li>
											<li>The instruction table (program) and the work area (data) were saved on the tape in our modified Turing machine. In a practical machine, we call this infinite tape as the <b>memory</b>. The memory is a large array of memory cells, where a memory cell contains a basic symbol. A part of the memory contains the program, and another part of it contains data.</li>
											<li>Each instruction can read a set of locations in the memory, compute a small arithmetic function on them, and write the results back to the memory. It can also jump to any other instruction depending on values in the memory. There is a dedicated unit to compute these arithmetic functions, write to memory, and jump to other instructions. This is called the <b>CPU (Central Processing Unit)</b>.</li>
											<li><ImgComp src={require("./computer_organization_and_architecture_pics/13.PNG")} style={{width: "80%"}}/></li>
									</SubList></li>
									<li>We have summarised the basic structure of such a machine. Let us call this machine as the <b>concept machine</b>. Ideas similar to our concept machine were beginning to circulate in the computer science community after Alan Turing published his research paper proposing the Turing machine in 1936. Several scientists got inspired by his ideas, and started pursuing efforts to design practical machines.</li>
									<li>One of the earliest efforts in this direction was the Harvard Mark-I. The Harvard architecture is very similar to the concept machine described above.</li>
							</SubList></li>
							<li><b>Harvard Architecture:</b><SubList>
									<li><b>Harvard Architecture:</b> This contains separate structures for maintaining the <i>instruction table</i> and the <i>memory</i>. The former is also known as <b>instruction memory</b> because we can think of it as a specialised memory tailored to hold only instructions. The latter holds data values that programs need. Hence, it is known as the <b>data memory</b>. The engine for processing instructions is divided into two parts: control and ALU. The job of the <b>control unit</b> is to fetch instructions, process them, and co-ordinate their execution. <b>ALU</b> stands for arithmetic-logic-unit. It has specialised circuits that can compute arithmetic expressions or logical expressions (AND/OR/NOT etc.).</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/8.PNG")} style={{width: "60%"}}/></li>
							</SubList></li>
							<li><b>Von Neumann architecture:</b><SubList>
									<li>The basic <b>Von Neumann architecture</b> is pretty much the same as our concept machine. The instruction table is saved in memory. The processing engine that is akin to our modified Turing machine is called the <b>CPU (central processing unit)</b>. It contains the <i>program counter</i>. Its job is to fetch new instructions, and execute them. It has dedicated functional units to calculate the results of arithmetic functions, load and store values in memory locations, and compute the results of branch instructions. Lastly, like the Harvard architecture, the CPU is connected to the I/O subsystem.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/9.PNG")} style={{width: "60%"}}/></li>
									<li>The path breaking innovation in this machine was that the instruction table was stored in memory. It was possible to do so by encoding every instruction with the same set of symbols that are normally stored in memory. This idea is known as the stored <b>program concept</b>.</li>
									<li>The stored program concept tremendously simplifies the design of a computer.</li>
									<li>Since memory data and instructions are conceptually treated the same way, we can have one unified processing system and memory system that treats instructions and data the same way. From the point of view of the CPU, the program counter points to a generic memory location whose contents will be interpreted as that of an encoded instruction.</li>
									<li>It is easy to store, modify, and transmit programs. Programs can also dynamically change their behavior during runtime by modifying themselves and even other programs. This forms the basis of today's complex compilers that convert high level C programs into machine instructions.</li>
							</SubList></li>
							<li>Von-Neumann Machine with Registers:<SubList>
									<li>The memory is typically a very large structure. In modern processors, the entire memory can contain billions of storage locations. Any practical implementation of a memory of this size is fairly slow in practice.</li>
									<li>To enable fast operation, every processor has a small set of registers that can be quickly accessed. Since programs tend to use a small set of variables repeatedly at any point of time, using <b>registers</b> saves many memory accesses.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/10.PNG")} style={{width: "60%"}}/></li>
							</SubList></li>
							<li>Von-Neumann Machine with a Hardware Stack:<SubList>
									<li>A <b>stack</b> is a standard data structure that obeys the semantics: last in, first out. A
											stack based machine has a stack implemented in hardware.</li>
									<li>It is clearly visible that scheduling a computation to work on a stack is difficult. There will
											be many redundant loads and stores. Nonetheless, for machines that are meant to evaluate
											long mathematical expressions, and machines for which program size is an issue, typically opt
											for stacks.</li>
							</SubList></li>
							<li><b>Accumulator based machines</b> use a single register called an <b>accumulator</b>. Each instruction takes a single memory location as an input operand. Accumulators were able to reduce the number of memory accesses and speed up the program.</li>
							<li>Representing Information:<SubList>
									<li>A <b>transistor</b> can be visualised as a basic switch that has two states: on and off. If the switch is on, then it represents 1, otherwise it represents 0. Every single entity inclusive of numbers, text, instructions, programs, and complex software needs to be represented using a sequence of 0s and 1s.</li>
									<li>A variable/value that can either be 0 or 1, is known as a <b>bit</b>.</li>
									<li>Most computers typically store and process a set of 8 bits together. A set of 8 bits is known as a <b>byte</b>.</li>
									<li>A sequence of 4 bytes is known as a <b>word</b>.</li>
									<li><b>Assembly language</b> is a textual representation of an ISA. It is specific to the ISA. Since an instruction is a sequence of 0s and 1s, it is very difficult to study it in its bare form. Assembly language gives us a good handle to study the semantics of instructions in an ISA.</li>
							</SubList></li>
					</ul>
			</div>
	</div>

	<h2 id="architecture_software_interface">Architecture: Software Interface</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
				<h3>The Language Of Bits</h3>
				<ul>
						<li>A binary variable is also known as a <b>Boolean variable</b>, and an algebraic system of Boolean variables is known as <b>Boolean algebra</b>.</li>
						<li>Logical Operations:<SubList>
								<li>Truth tables:<SubList>
										<TableLI style={{minWidth: "150px"}}>
												<caption>Truth table for the NOT operator</caption>
												<thead><tr><th>\(A\)</th><th>\(\bar{"{A}"}\)</th></tr></thead>
												<tbody>
												<tr><td>0</td><td>1</td></tr>
												<tr><td>1</td><td>0</td></tr>
												</tbody>
										</TableLI>
										<TableLI>
												<thead><tr><th>\(A\)</th><th>\(B\)</th><th>\(A \text{"{ OR }"} B\)</th><th>\(A \text{"{ AND }"} B\)</th><th>\(A \text{"{ XOR }"} B\)</th></tr></thead>
												<tbody>
														<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
														<tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
														<tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
														<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
												</tbody>
										</TableLI>
										<li>The \(AND\) operator is represented by '\(.\)' or '\(∧\)' and the \(OR\) operator is represented by '\(+\)' and '\(\lor\)'.</li>
										<li>\(NAND\) is the logical complement of \(AND\) and \(NOR\) is the logical complement of \(OR\).</li>
										<TableLI>
												<thead><tr><th>\(A\)</th><th>\(B\)</th><th>\(A \text{"{ NAND }"} B\)</th><th>\(A \text{"{ NOR }"} B\)</th></tr></thead>
												<tbody>
														<tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>
														<tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
														<tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>
														<tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>
												</tbody>
										</TableLI>
										<li>We can use just the \(NAND\) operator or just the \(NOR\) operator to construct any other
												operator.</li>

								</SubList></li>
								<li>Some rules of Boolean algebra:<SubList>
										<li><b>Identity:</b> \(A + 0 = A\), and \(A.1 = A\)</li>
										<li><b>Annulment:</b> \(A + 1 = 1\), and \(A.0 = 0\)</li>
										<li><b>Idempotence:</b> \(A + A = A\), and \(A.A = A\)</li>
										<li><b>Complementarity:</b> \(A + A = 1\), and \(A.A = 0\)</li>
										<li><b>Commutativity:</b> \(A.B = B.A\), and \(A + B = B + A\)</li>
										<li><b>Associativity:</b> \(A + (B + C) = (A + B) + C\), and \(A.(B.C) = (A.B).C\)</li>
										<li><b>Distributivity:</b> \(A.(B + C) = A.B + A.C\), and \(A + B.C = (A + B).(A + C)\)</li>
										<li><b>De Morgan's Laws:</b> \(\overline{"{A + B}"} = \overline{"{A}"}.\overline{"{B}"}\), and \(\overline{"{AB}"} = \overline{"{A}"} + \overline{"{B}"} \)</li>
								</SubList></li>
								<li><b>Logic gate:</b> a device that implements a Boolean function:<SubList>
										<li><ImgComp src={require("./computer_organization_and_architecture_pics/14.PNG")} style={{width: "50%"}}/></li>
								</SubList></li>
								<li>Using the <b>canonical representation</b>:<SubList>
										<li>Suppose we want to implement some function \(f(A,B,C)\) using logic gates.</li>
										<li>Let's start with a truth table. Suppose these are the lines that evaluate to 1:</li>
										<TableLI>
												<thead><tr><th>\(A\)</th><th>\(B\)</th><th>\(C\)</th><th>\(f\)</th></tr></thead>
												<tbody>
														<tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
														<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
														<tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
												</tbody>
										</TableLI>
										<li>Let us consider the first line. It can be represented by the Boolean function \(A.B.\bar{"{C}"}\). Similarly, the second and third lines can be represented as \(A.B.C\) and \(A.\bar{"{B}"}.C\) respectively. Thus, the function can be represented as:</li>
										<MathStuff>$$f(A,B,C) = A.B.\bar{"{C}"} + A.B.C + A.\bar{"{B}"}.C$$</MathStuff>
										<li>We see that we have represented the function as an \(OR\) function of several terms. This
												representation is known as a <b>sum-of-products representation</b>, or a representation in the <b>canonical form</b>. Each such term is known as a <b>minterm</b>. Note that in a minterm, each variable appears only once. It is either in its original form or in its complemented form.</li>
								</SubList></li>
						</SubList></li>
						<li>Representing integers:<SubList>
								<li>A number system based on Indian numerals that uses a base equal to 2, is known as a <b>binary</b> number system.</li>
								<li>A number system based on Indian numerals that uses a base equal to 10, is known as a <b>decimal</b> number system.</li>
								<li>Numbers represented in base 8 are known as <b>octal</b> numbers.</li>
								<li><b>Hexadecimal</b> numbers use a base of 16. We can use the digits 0-9 for the first ten digits. The next six digits require special characters. These six characters are typically: A (10), B (11), C (12), D (13), E (14), and F (15).</li>
								<li>Adding binary Numbers:<SubList>
										<li>Adding binary numbers is as simple as adding decimal numbers. For adding decimal numbers, we start from the rightmost position and add digit by digit. If the sum exceeds 10, then we write the unit's digit at the respective position in the result, and carry the value at the ten's place to the next position in the result. We can do something exactly similar for binary numbers.</li>
										<li><ImgComp src={require("./computer_organization_and_architecture_pics/15.PNG")} style={{width: "40%"}}/></li>
										<TableLI>
												<thead><tr><th>\(A\)</th><th>\(B\)</th><th>\(C_{"{in}"}\)</th><th>\(Sum\)</th><th>\(C_{"{out}"}\)</th></tr></thead>
												<tbody>
														<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
														<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
														<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
														<tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
														<tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
														<tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
														<tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
														<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
												</tbody>
										</TableLI>
								</SubList></li>
								<li>Representing sign:<SubList>
										<li>We can reserve a bit for representing the sign of a number. If it is equal to 0, then the number is positive, else it is negative. This is known as the <b>sign-magnitude representation</b>.</li>
										<li>Let us consider an \(n\) bit integer. We can use the most significant bit as the designated signed bit, and use the rest of the number to represent the number's magnitude. The magnitude of a number is represented using \(n - 1\) bits. This is a simple and intuitive representation.</li>
										<li>Note that there are two zeros: a positive zero \((00 \dots 0)\) and a negative zero \((10 \ldots 0)\).</li>
										<li>The issue with this system is that it is difficult to perform arithmetic operations such as
												addition, subtraction, and multiplication</li>
										<li><a href='https://en.wikipedia.org/wiki/Ones%27_complement'>The <b>ones' complement</b> of a binary number is the value obtained by inverting (flipping) all the bits in the binary representation of the number.</a></li>
										<li>We represent the number 2 as \(0010\). Here the sign bit is 0, signifying that it is a positive number. To compute -2, we need to flip each bit. This process yields \(1101\). Note that the sign bit is 1 now.</li>
										<li>The 1's complement approach also suffers from similar deficiencies as the sign magnitude scheme. First, there are two representations for zero. There is a positive zero (\(0000\)), and a negative zero (\(1111\)). Secondly, -0 + 1 = \(1111\) + \(0001\) = \(0000\) (a contradiction).</li>
										<li><b>Bias-based Approach:</b><SubList>
												<li>Let us assume that the unsigned representation of a number (\(F(u)\)) is given by: \(F(u) = u + \text{"{ bias}"}\). Here, bias is a constant.</li>
												<li>Let us consider several examples using a 4-bit number system. The range of unsigned
														numbers is from 0 to 15. Let the bias be equal to 7. Then, the actual range of the number
														system is from -7 to +8.</li>
												<li>Let us try to add 2 and -2. 2 is represented as +9 or \(1001\). Likewise, -2, is represented as +5, or \(0101\). If we add 2 and -2, then 5 + 9 = 14. This is not the right answer. We can get the right answer by subtracting the bias, 14 - 7 = 7 (which represents 0).</li>
										</SubList></li>
										<li><a href='https://en.wikipedia.org/wiki/Two%27s_complement'><b>Two's complement</b> is achieved by:</a><SubList numbered={true}>
												<li>starting with the equivalent positive number.</li>
												<li>inverting all bits</li>
												<li>adding 1 to the entire inverted number, ignoring any overflow. Accounting for overflow will produce the wrong value for the result</li>
										</SubList></li>
										<li>An <b>overflow</b> occurs when a number is too large to be represented in a given number
												system.
												</li>
										<li>An <b>underflow</b> occurs when a number is too small to be represented in a given
												number system.</li>
										<li><figure>
												<ImgComp src={require("./computer_organization_and_architecture_pics/16.PNG")} style={{width: "50%"}}/>
												<figcaption>Signed 4-bit binary numbers</figcaption>
										</figure></li>
										<li>If the signs of the operands are the same, and the result has an opposite sign or is
												zero, then the addition has led to an overflow.</li>
								</SubList></li>
										<li>Let us assume that we want to convert a number's representation from a 16-bit number system
												to a 32-bit number system. If the number is positive, then we just need to prefix it with 16
												zeros. For a negative number, we need to prepend it with 16 ones.</li>
						</SubList></li>
						<li>Representing floating point numbers:<SubList>
								<li>A value such as 120.23 can be represented in binary as the binary representation of 12023. Here, the implicit assumption is that there are two digits after the decimal point. It is easy to add two numbers using this notation. It is also easy to subtract two numbers as long as the result is positive. However, multiplying or dividing such numbers is difficult.</li>
								<TableLI>
										<thead><tr><th>Number</th><th>Expansion</th><th>Binary Representation</th></tr></thead>
										<tbody>
												<tr><td>0.375</td><td>2<sup>-2</sup> + 2<sup>-3</sup></td><td>\(0.011\)</td></tr>
												<tr><td>1</td><td>2<sup>0</sup></td><td>\(1.0\)</td></tr>
												<tr><td>1.5</td><td>2<sup>0</sup> + 2<sup>-1</sup></td><td>\(1.1\)</td></tr>
												<tr><td>2.75</td><td>2<sup>1</sup> + 2<sup>-1</sup> + 2<sup>-2</sup></td><td>\(10.11\)</td></tr>
												<tr><td>17.625</td><td>2<sup>4</sup> + 2<sup>0</sup> + 2<sup>-1</sup> + 2<sup>-3</sup></td><td>\(10001.101\)</td></tr>
										</tbody>
								</TableLI>
								<li>The fractional part is traditionally known as the <b>mantissa</b>, whereas the entire number (both integer and fraction) is known as the <b>significand</b>.</li>
								<li>The significand of \(1.3829 \times 10^3\) is \(1.3829\) and the mantissa is \(0.3829\). Also, \(101110\) in binary can be represented as \(1.01110 \times 2^5\). The number \(1.01110\) is the significand. Using this notation, we can represent all floating point numbers as:</li>
								<MathStuff>$$A = P \times 2^X, (P = 1 + M, 0 ≤ M &lt; 1, X ∈ \mathbb{"{Z}"})$$</MathStuff>
								<li>Let us try to create a generic form for both positive and floating point numbers by introducing a sign bit, \(S\). The resulting form is refered to as the <b>normal form</b>:</li>
								<MathStuff>$$A = (-1)^S \times P \times 2^X$$</MathStuff>
								<li>We shall describe the IEEE 754 format, which is the de facto standard for representing floating point numbers in binary.</li>
								<li>
										<figure>
										<ImgComp src={require("./computer_organization_and_architecture_pics/17.PNG")} style={{width: "50%"}}/>
										<figcaption>IEEE 754 format for representing 32-bit floating point number</figcaption>
										</figure>
								</li>
								<li>The exponent can be positive, negative or zero and is represented using the biased representation with the bias is equal to 127.  The exponent (\(X\)) is represented by a number, \(E\), where: \(E = X + \text{"{ bias}"}\). The exponent can vary from -126 to 127.</li>
								<li><u>Example converting from IEEE 754 form:</u><SubList>
										<li>Example used: \(11000000110110011001100110011010\).</li>
										<li>First, we divide the bits into three groups: \(1\)-\(10000001\)-\(10110011001100110011010\).</li>
										<li>The sign bit is a \(1\), so the number is negative.</li>
										<li>To get the exponent, we simply convert the binary number \(10000001\) back to base-10 form, yielding 129.</li>
										<li>Then we must convert the fraction bits back into base 10:</li>
										<MathStuff>$${"\\begin{align}\
												&0.10110011001100110011010\\\\\
												&= 1/2+1/8+1/16+\\ldots\\\\\
												&= 0.7000000476837158\
										\\end{align}"}$$</MathStuff>
										<li>Remember, this number is most likely just an approximation of some other number.</li>
										<li>We have all the information we need. Now we just calculate the following expression:</li>
										<MathStuff>$${"\\begin{align}\
												&(-1)^{sign \\text{ } bit} \\times (1+fraction) \\times 2^{exponent -bias}\\\\\
												&=-1 \\times (1+fraction) \\times 2^{129 -127}\\\\\
												&=-6.800000190734863\
										\\end{align}"}$$</MathStuff>
								</SubList></li>
								<li>We reserved two values of \(E\), 0 and 255, to represent special numbers:</li>
								<TableLI>
										<thead><tr><th>\(E\)</th><th>\(M\)</th><th>Value</th></tr></thead>
										<tbody>
												<tr><td>255</td><td>0</td><td>∞ if S = 0</td></tr>
												<tr><td>255</td><td>0</td><td>−∞ if S = 1</td></tr>
												<tr><td>255</td><td>&ne; 0</td><td>NAN (Not a number)</td></tr>
												<tr><td>0</td><td>0</td><td>0</td></tr>
												<tr><td>0</td><td>&ne; 0</td><td>Denormal number</td></tr>
										</tbody>
								</TableLI>
								<li>Denormal numbers have a slightly different form:</li>
								<MathStuff>$$A = (-1)^S \times P \times 2^{-126}, (P = M, 0 ≤ M &lt; 1)$$</MathStuff>
								<li>There is no room to specify any exponent. This is because \(E=0\). The default exponent is -126. We can view denormal numbers as an extension of normal floating point numbers on both sides.</li>
								<li><ImgComp src={require("./computer_organization_and_architecture_pics/18.PNG")} style={{width: "50%"}}/></li>
								<li>Because of limited precision, floating point formats do not represent most numbers accurately.
										This is because, we are artificially constraining ourselves to expressing a generic real number
										as a sum of powers of 2, and restricting the number of mantissa bits to 23.</li>
						</SubList></li>
						<li>Representating string:<SubList>
								<li><b>ASCII</b> stands for "American Standard Code for Information Interchange". It is a format that
										assigns a 7 bit binary code for each English language character including punctuation marks. Since ASCII can represent only 128 symbols, it is suitable only for English.
										</li>
								<li><b>UTF (Universal character set Transformation Format)</b> can represent every character in
										the Unicode character set. The Unicode character set assigns a unsigned binary number to each
										character of most of the world's writing systems.</li>
								<li>UTF-8 encodes 1,112,064 characters defined in the Unicode character set.</li>
								<li>UTF-8 has been superseded by UTF-16, and UTF-32.</li>
						</SubList></li>
				</ul>
				<h3>Assembly Language</h3>
				<ul>
						<li><b>Compilers:</b><SubList>
								<li>We need an automatic converter that can convert programs written in high level languages such as C or Java to a sequence of zeros and ones known as <b>machine code</b>. Machine code contains a set of instructions known as <b>machine instructions</b>.</li>
								<li>Each machine instruction is a sequence of zeros and ones, and instructs the processor to perform a certain action.</li>
								<li>A <b>compiler</b> is an executable program that converts a program written in a high level
										language to a sequence of machine instructions that are encoded using a sequence of
										zeros and ones.</li>
								<li>A <b>cross compiler</b> is a program that runs on machine A, and generates machine code for machine B. It is possible that B has a different ISA.</li>
								<li>Smart programmers can sometimes produce machine code that is more optimal than a compiler because they are aware of some broad patterns of execution.</li>
								<li>Popular compilers such as <b>gcc (GNU compiler collection)</b> are fairly generic. They do not use all possible machine instructions that a processor provides while generating machine code.</li>
								<li>In some situations, it is necessary for programmers to manually embed a sequence of
										machine instructions in a program.</li>
								<li>Assembly language is a human readable form of machine code. Each assembly language statement typically corresponds to one machine instruction. Furthermore, it eases the burden on the programmer significantly by not forcing her to remember the exact sequence of zeros/ones that are needed to encode an instruction.</li>
								<li>A <b>low level programming language</b> uses simple statements that correspond to typically
								just one machine instruction. These languages are specific to the ISA.</li>
								<li>The term "assembly language" refers to a family of low level programming languages
										that are specific to each ISA. They have a generic structure that consists of a sequence
										of assembly statements. Typically, each assembly statement has two parts: (1) an
										instruction code that is a mnemonic for a basic machine instruction, and (2) a
										list of operands.
										</li>
								<li>From a practical standpoint, it is possible to write stand alone assembly programs and
										convert them to executables using a program called an <b>assembler</b>. Alternatively,
										it is also possible to embed snippets of assembly code in high level languages such as C or
										C++. The latter is more common.</li>
						</SubList></li>
						<li>CPU and registers:<SubList>
								<li>Assembly languages do not see the instruction memory and data memory as different entities. They assume an abstract Von Neumann machine augmented with registers.</li>
								<li><ImgComp src={require("./computer_organization_and_architecture_pics/10.PNG")} style={{width: "60%"}}/></li>
								<li>The program is stored in a part of the <b>main memory</b>. The <b>central processing unit (CPU)</b> reads out the program instruction by instruction, and executes the instructions appropriately. The <b>program counter</b> keeps track of the memory address of the instruction that a CPU is executing.</li>
								<li>Most instructions are expected to get their input operands from <b>registers</b>. Every CPU has a fixed number of registers. However, a large number of instructions, can also get their operands from the memory directly. It is the job of the CPU to co-ordinate the transfers to and from the main memory and registers. Secondly, the CPU also needs to perform all the arithmetic/logical calculations, and liaise with external input/output devices.</li>
								<li>Since another aim of using assembly language is to have more fine grained and intrusive control of hardware, there are a fair number of assembly instructions that are cognisant of the internals of the processor. These instructions typically modify the behaviour of the processor by changing the behaviour of some key internal algorithms; they modify built-in parameters such as power management settings, or read/write some internal data.</li>
								<li>In most ISAs, a return address register is used for function calls. Let us assume that a program starts executing a function. It needs to remember the memory address that it needs to come back to after executing the function. This address is known as the <b>return address</b>. Before jumping to the starting address of a function, we can save the value of the return address in this register.</li>
						</SubList></li>
						<li><b>Little Endian</b> and <b>Big Endian</b> Representations:<SubList>
								<li>Let us consider the problem of storing an integer in locations 0-3. Let the integer be 0x87654321. It can be broken into four bytes: 87, 65, 43, and 21. One option is to store the most significant byte, 87, in the lowest memory address 0. The next location can store 65, then 43, and then 21. This is called the <b>big endian representation</b> because we are starting from the position of the most significant byte.</li>
								<li>In comparison, we can save the least significant byte first in location 0, and then continue to save the most significant byte in location 3. This representation is called <b>little endian</b>. </li>
								<li>x86 processors use the little endian format. Early versions of ARM
										processors used to be little endian. However, now they are bi-endian. This means an ARM
										processor can work as both a little endian and a big endian machine depending on the settings
										set by the user.</li>
						</SubList></li>
						<li>Representing Arrays:<SubList>
								<li>Let us consider a simple array of integers, \(a\). If the array has 100 entries, then the total size of the array in memory is equal to (100 \(\times\) 4 =) 400 bytes.</li>
								<li>If the starting memory location of the array is <code>loc</code>. Then \(a[0]\) is stored in the locations (<code>loc + 0</code>), (<code>loc + 1</code>), (<code>loc + 2</code>) and (<code>loc + 3</code>). The next array entry, \(a[1]\), is saved in the locations (<code>loc + 4</code>) . . .(<code>loc + 7</code>).</li>
						</SubList></li>
						<li>Assembly Language Syntax:<SubList>
								<li>An assembly file is a regular text file, and it has a (<code>.s</code>) suffix. The reader can quickly generate an assembly file for a C program (<code>test.c</code>) by issuing the following command: <code>gcc -S test.c</code>.</li>
								<li>A bare bones assembly language statement specifies an assembly instruction and has two parts: the instruction and its list of operands:</li>
								<li><ImgComp src={require("./computer_organization_and_architecture_pics/19.PNG")} style={{width: "80%"}}/></li>
								<li>Example: <code>add r3, r1, r2</code>;  the name of the instruction is add, the destination register is <code>r3</code>, the operand registers are <code>r1</code> and <code>r2</code>.</li>
								<li>In computer architecture, a constant value specified in an instruction is also known as an <b>immediate</b>.</li>
								<li>A <b>label</b> in an assembly file uniquely identifies a given point or data item in the assembly program.</li>
								<li>The GNU assembler's two types of comments: <code>{"/* */"}</code> and <code>@</code>.</li>
								<li><CodePre language="armasm">{"\
label1: add r1, r2, r3  @ Add the values in r2 and r3 \n\
label2: add r3, r4, r5  @ Add the values in r4 and r5 \n\
add r5, r6, r7          /* Add the values in r6 and r7 */ \n\
								"}</CodePre></li>
						</SubList></li>
						<li><b>Addressing mode:</b><SubList>
								<li>The method of specifying and accessing an operand in an assembly statement is known as the <b>addressing mode</b>.</li>
								<li>Let us represent the value of an operand as \(V\). The expression such as \(V ← r1\) does not mean that we have a new storage location called \(V\) . It basically means that the value of an operand is specified by the RHS.</li>
								<TableLI><tbody>
										<tr><td><code>immediate</code> \(V ← imm\) <br/> Uses the constant imm as the value of the operand.</td></tr>
										<tr><td><code>register</code> \(V ← r1\)<br/>In this addressing mode, the processor uses the value contained in a register as the operand.</td></tr>
										<tr><td><code>register-indirect</code> \(V ← [r1]\)<br/>The register saves the address of the memory location that contains the value.</td></tr>
										<tr><td><code>base-offset</code> \(V ← [r1 + offset]\)<br/>offset is a constant. The processor fetches the base memory address from \(r1\), adds the constant offset to it, and accesses the new memory location to fetch the value of the
										operand. The offset is also known as the displacement.</td></tr>
										<tr><td><code>base-index</code> \(V ← [r1 + r2]\)<br/>\(r1\) is the base register, and \(r2\) is the index register. The memory address is equal to (\(r1 + r2\)).</td></tr>
										<tr><td><code>base-index-offset</code> \(V ← [r1 + r2 + offset]\)<br/>The memory address that contains the value is (\(r1 + r2 + offset\)), where offset is a constant.</td></tr>
										<tr><td><code>memory-direct</code> \(V ← addr\)<br/>The value is contained in memory starting from address \(addr\), which is a constant. In this case the memory address is directly embedded in the instruction.</td></tr>
										<tr><td><code>memory-indirect</code> \(V ← [[r1]]\)<br/>The value is present in a memory location, whose address is contained in the memory location, \(M\). Furthermore, the address of \(M\) is contained in the register, \(r1\).</td></tr>
										<tr><td><code>PC-relative</code> \(V ← [PC + offset]\)<br/>Here, offset is a constant. The memory address is computed to be \(PC + offset\), where \(PC\) represents the value contained in the \(PC\). This addressing mode is useful for branch
										instructions.</td></tr>
								</tbody></TableLI>
								<li>The memory address specified by an operand is known as the <b>effective memory address</b>.</li>
						</SubList></li>
						<li><b>SimpleRisc:</b><SubList>
								<li>The assembly language of <b>SimpleRisc</b> has just 21 instructions, and captures most
										of the features of full scale assembly languages.</li>
								<li>SimpleRisc assumes that we have 16 registers numbered \(r0 \ldots r15\). The first 14 registers are general purpose registers, and can be used for any purpose within the program. Register <code>r14</code> is known as the <b>stack pointer</b>. We shall also refer to it as \(sp\). Register <code>r15</code> is known as the <b>return address register</b>, and it will also be referred as \(ra\).</li>
								<li>We assume a special internal register called <b>flags</b>, which is not visible to the programmer. It contains two fields <code>flags.E</code> (equal) and <code>flags.GT</code> (greater than). <code>E</code> is set to 1 if the result of a comparison is equality, and <code>GT</code> is set to 1 if a comparison concludes that the first operand is greater than the second operand. The default values of both the fields are 0.</li>
								<li>Each instruction is encoded into a 32-bit value, and it requires 4 bytes of storage in memory.</li>
								<li>Register Transfer Instruction:<SubList>
										<li>The <code>mov</code> instruction is a 2-address format instruction that can transfer values from one register to another, or can load a register with a constant.</li>
										<li>Our convention is to always have the destination register at the beginning.</li>
										<TableLI>
												<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
												<tbody>
														<tr><td><code>mov r1, r2</code></td><td>r1 ← r2</td></tr>
														<tr><td><code>mov r1, 3</code></td><td>r1 ← 3</td></tr>
												</tbody>
										</TableLI>
								</SubList></li>
								<li>Arithmetic Instructions:<SubList>
										<TableLI><thead><tr><th>Example</th><th>Explanation</th></tr></thead><tbody>
<tr><td><code>add r1, r2, r3</code></td><td>r1 ← r2 + r3</td></tr>
<tr><td><code>sub r1, r2, r3</code></td><td>r1 ← r2 - r3</td></tr>
<tr><td><code>mul r1, r2, r3</code></td><td>r1 ← r2 x r3</td></tr>
<tr><td><code>div r1, r2, r3</code></td><td>r1 ← r2/r3 (quotient)</td></tr>
<tr><td><code>mod r1, r2, r3</code></td><td>r1 ← r2 mod r3 (remainder)</td></tr>
<tr><td><code>cmp r1, r2</code></td><td>set flags</td></tr>
										</tbody></TableLI>
										<li>The <code>cmp</code> instruction is a 2-address instruction that takes two source operands. The first source operand needs to be a register, and the second one can be an immediate or a register. If the operands are equal then it sets <code>flags.E</code> to 1. If the first operand is greater than the second operand, then the <code>cmp</code> instruction sets <code>flags.GT</code> to 1.</li>
								</SubList></li>
								<li>Data Transfer Instructions:<SubList>
										<li>The load instructions loads values from memory into registers, and the store instruction saves values in registers to memory locations.</li>
										<TableLI><thead><tr><th>Example</th><th>Explanation</th></tr></thead><tbody>
<tr><td><code>ld r1, 12[r2] </code></td><td>r1 ← [r2 + 12]</td></tr>
<tr><td><code>st r1, 12[r2]</code></td><td>[r2 + 12] ← r1</td></tr>
										</tbody></TableLI>
										<li>Let us consider the load instruction: <code>ld r1, 12[r2]</code>. Here, we are computing the memory address as the sum of the contents of <code>r2</code> and the number <code>12</code>. The <code>ld</code> instructions accesses this memory address, fetches the stored integer and stores it in <code>r1</code>.</li>
								</SubList></li>
								<li>Branch Instructions:<SubList>
										<li>SimpleRisc has one unconditional branch instruction, <code>b</code>, which makes the program counter jump to the address corresponding to a label in the code.</li>
										<li>SimpleRisc has two conditional branch instructions: <code>beq</code> and <code>bgt</code>.</li>
										<li>The <code>beq</code> instruction stands for "branch if equal". This means that if any preceding <code>cmp</code> instruction has set the <code>E</code> flag, then the <code>PC</code> will branch to the label specified in this instruction.</li>
										<TableLI><thead><tr><th>Example</th><th>Explanation</th></tr></thead><tbody>
<tr><td><code>b .foo</code></td><td>branch to .foo</td></tr>
<tr><td><code>beq .foo</code></td><td>branch to .foo if flags.E = 1</td></tr>
<tr><td><code>bgt .foo</code></td><td>branch to .foo if flags.GT = 1</td></tr>
										</tbody></TableLI>
								</SubList></li>
								<li>Functions:<SubList>
										<li>Let us assume that an instruction with address \(A\) calls a function <code>foo</code>. After executing function <code>foo</code>, we need to come back to the instruction immediately after the instruction at \(A\). The address of this instruction is \(A + 4\) (if we assume that the instruction at A is 4 bytes long). This process is known as <i>returning from a function</i>, and the address (\(A + 4\)) is known as the <b>return address</b>.</li>
										<li>We can associate a label with every function. The label should be associated with the first instruction in a function. Calling a function is as simple as branching to the label at the beginning of a function.</li>
										<li>Assume that a function <code>foo</code> invokes a function <code>foobar</code>. <code>foo</code> is called the <b>caller</b>, and <code>foobar</code> is called the <b>callee</b>. Both the caller and the callee see the same view of registers. Consequently, we can pass arguments through the registers, and likewise pass the return values through registers also.</li>
										<li><b>Space Problem:</b> We need extra space to send and return more arguments. If we need to transfer a few values between the caller and the callee or vice versa, we can use registers. However, if the arguments/return values do not fit in the set of available registers, then we need to transfer them through memory. The notion of saving registers in memory and later restoring them is known as <b>register spilling</b>.</li>
										<li><b>Overwrite Problem:</b> We need to ensure that the callee does not overwrite the registers of the caller. There are two solutions. The first is that the caller can save the set of registers it requires in a dedicated location in memory. It can later retrieve its set of registers after the callee finishes, and returns control to the caller. The second solution is for the callee to save and restore the registers that it will require.</li>
										<li><ImgComp src={require("./computer_organization_and_architecture_pics/28.png")} style={{width: "60%"}}/></li>
										<li>The process of passing arguments to and from a function, and saving/restoring the
												registers using dedicated locations in memory was found to be inflexible
												and it can be quite complex to implement for large real world programs.</li>
										<li>It is best to save all of these pieces of information contiguously in a single region of memory.
												This is known as the <b>activation block</b> of the function. The activation block contains the arguments, return address, register spill area, and the local variables.  Once a function terminates, it is possible to get rid of the activation block entirely.</li>
										<li>We can have one memory region where all the activation blocks are stored in contiguous
												regions as a stack. This means that the
												activation block of the main function starts at a very high location and new activation blocks
												are added just below.</li>
										<li><ImgComp src={require("./computer_organization_and_architecture_pics/20.PNG")} style={{width: "60%"}}/></li>
										<li>The <b>stack pointer register</b> (<code>sp</code>) maintains a pointer to the top of the stack.</li>
								</SubList></li>
								<li>Call/Return Instructions:<SubList>
										<li>SimpleRisc has two instructions for functions: <code>call</code> and <code>ret</code>.</li>
										<li>The <code>call</code> instructions takes a single argument: the label of the first instruction of the function. It transfers control to the label and saves the return address in register \(ra\).</li>
										<li>The <code>ret</code> instructions transfers the contents of \(ra\) to the \(PC\). It is a 0-address instruction because it does not require any operands.</li>
								</SubList></li>
								<li>The <code>nop</code> instruction does nothing.</li>
								<li>Modifiers:<SubList>
										<li>By <u>default</u>, we assume that when we load a 16-bit immediate into a 32-bit register, the processor automatically performs sign extension. This means that it sets each of the 16 MSB bits to the sign of the immediate.</li>
										<li> For example, if our immediate is equal to -2, then its hexadecimal representation is <code>0x FF FE</code>. If we try to store it in a register, then in effect, we are storing: <code>0x FF FF FF FE</code>.</li>
										<li>The <u>suffix 'u'</u> to an instruction makes it interpret the immediate as an unsigned number. For example, the instruction <code>movu r0, 0x FEAB</code>, will load <code>0x 00 00 FE AB</code> into register <code>r0</code>.</li>
										<li>The <u>suffix 'h'</u> to an instruction to instruct it to load the 16-bit immediate into the upper half of a register. For example, <code>movh r0, 0x FEAB</code>, effectively loads <code>0x FE AB 00 00</code>, into <code>r0</code>.</li>
								</SubList></li>
								<li>Encoding the SimpleRisc Instruction Set:<SubList>
										<li>The code for an instruction is also known as its <b>opcode</b>. An opcode is a unique identifier for each machine instruction and is specified by the five most significant bits.</li>
										<TableLI>
										<thead><tr><th>Instruction</th><th>Code</th><th>Instruction</th><th>Code</th><th>Instruction</th><th>Code</th></tr></thead>
										<tbody>
										<tr><td>add</td><td>00000</td><td>not</td><td>01000</td><td>beq</td><td>10000</td></tr>
										<tr><td>sub</td><td>00001</td><td>mov</td><td>01001</td><td>bgt</td><td>10001</td></tr>
										<tr><td>mul</td><td>00010</td><td>lsl</td><td>01010</td><td>b</td><td>10010</td></tr>
										<tr><td>div</td><td>00011</td><td>lsr</td><td>01011</td><td>call</td><td>10011</td></tr>
										<tr><td>mod</td><td>00100</td><td>asr</td><td>01100</td><td>ret</td><td>10100</td></tr>
										<tr><td>cmp</td><td>00101</td><td>nop</td><td>01101</td><td></td><td></td></tr>
										<tr><td>and</td><td>00110</td><td>ld</td><td>01110</td><td></td><td></td></tr>
										<tr><td>or</td><td>00111</td><td>st</td><td>01111</td><td></td><td></td></tr>
										</tbody>
										</TableLI>
										<li><figure>
												<ImgComp src={require("./computer_organization_and_architecture_pics/23.PNG")} style={{width: "70%"}}/>
												<figcaption>Encoding the <code>ret</code> instruction.</figcaption>
										</figure></li>
										<li><figure>
												<ImgComp src={require("./computer_organization_and_architecture_pics/24.PNG")} style={{width: "70%"}}/>
												<figcaption>Encoding of 1-address instructions.</figcaption>
										</figure></li>
										<li>Let us consider a generic 3-address instruction. It has a destination register, one input source register, and a second source operand that can either be a register or an immediate.</li>
										<li>We need to devote one bit to find out if the second source operand is a register or an immediate.</li>
										<li>Let us call this the \(I\) bit and specify it just after the opcode in the instruction. If \(I = 0\), the second source operand is a register</li>
										<li><figure>
												<ImgComp src={require("./computer_organization_and_architecture_pics/25.PNG")} style={{width: "70%"}}/>
												<figcaption>Encoding 3-address instructions with register operands.</figcaption>
										</figure></li>
										<li>Since we have 16 registers, we require 4 bits to uniquely specify each register.</li>
										<li>If we assume that the second source operand is an immediate, then out of 32 bits, we are left with 18 bits.</li>
										<li>We propose to divide the 18 bits into two parts: 2 bits (modifier) + 16 bits (constant part).</li>
										<li><figure>
												<ImgComp src={require("./computer_organization_and_architecture_pics/26.PNG")} style={{width: "70%"}}/>
												<figcaption>Encoding 3-address instructions with an immediate source operand.</figcaption>
										</figure></li>
										<li>The modifier bits can take three values: <code>00</code> (default), <code>01</code> ('u') and <code>10</code> ('h').</li>
										<li>The <code>cmp</code> instruction has two source operands. We will use the standard 3-address register or immediate formats for encoding. The destination register field will remain empty.</li>
										<li>The <code>not</code> and <code>mov</code> instructions have one destination register, and one source operand. In the 3-address format, we keep the field for the first source register empty for both of these instructions.</li>
										<li>For a <code>ld</code> instruction, there are three unique pieces of information that need to be encoded: destination register, base register, and offset. In this case, we propose to use the three address immediate format.</li>
										<li>The \(I\) bit is set to 1, because we need to specify an offset. The first source register represents the base register, and the immediate represents the offset.</li>
								</SubList></li>
						</SubList></li>
				</ul>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<h3>ARM<sup>&#x24C7;</sup> Assembly Language</h3>
			<ul>
				<li>Machine model:<SubList>
						<li>The ARM instruction set is a 32-bit instruction set. This means that the sizes of all registers are 32 bits, and the size of the memory address is equal to 32 bits.</li>
						<li>The registers are numbered from \(r0\) to \(r15\). Registers \(r11 \ldots r15\) are known by certain mnemonics:</li>
						<TableLI>
								<thead><tr><th>Register</th><th>Abbrv.</th><th>Name</th></tr></thead>
								<tbody>
										<tr><td>\(r11\)</td><td><code>fp</code></td><td>frame pointer</td></tr>
										<tr><td>\(r12\)</td><td><code>ip</code></td><td>intra-procedure-call scratch register</td></tr>
										<tr><td>\(r13\)</td><td><code>sp</code></td><td>stack pointer</td></tr>
										<tr><td>\(r14\)</td><td><code>lr</code></td><td>link register</td></tr>
										<tr><td>\(r15\)</td><td><code>pc</code></td><td>program counter</td></tr>
								</tbody>
						</TableLI>
						<li>The frame-pointer points to the top of the activation block.</li>
						<li><code>lr</code> is the return address register.</li>
				</SubList></li>
				<li>Intructions:<SubList>
					<li>Basic Assembly Instructions:<SubList>
							<li>Register Transfer Instructions:<SubList>
									<TableLI>
											<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
											<tbody>
													<tr><td><code>mov r1, r2</code></td><td>r1 ← r2</td></tr>
													<tr><td><code>mov r1, #3</code></td><td>r1 ← 3</td></tr>
													<tr><td><code>mvn r1, r2</code></td><td>r1 ← ~ r2</td></tr>
													<tr><td><code>mvn r1, #3</code></td><td>r1 ← ~ 3</td></tr>
											</tbody>
									</TableLI>
									<li>The register based <code>mov</code> instruction simply moves the contents of \(r2\) to register \(r1\). Alternatively, it can store an immediate in a register.</li>
									<li>The <code>mvn</code> instruction flips every bit in the 32-bit register \(r2\), and then transfers the contents of the result to \(r1\).</li>
									<li> The ~ symbol represents logical complement. The complement of 0110 is 1001.</li>
							</SubList></li>
							<li>Arithmetic Instructions:<SubList>
									<li>The simplest instructions in this class are <code>add</code>, <code>sub</code>, <code>rsb</code> (reverse subtract).</li>
									<TableLI>
											<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
											<tbody>
													<tr><td><code>add r1, r2, r3</code></td><td>r1 ← r2 + r3</td></tr>
													<tr><td><code>sub r1, r2, r3</code></td><td>r1 ← r2 - r3</td></tr>
													<tr><td><code>rsb r1, r2, r3</code></td><td>r1 ← r3 - r2</td></tr>
											</tbody>
									</TableLI>
							</SubList></li>
							<li>Logical Instructions:<SubList>
									<TableLI>
											<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
											<tbody>
													<tr><td><code>and r1, r2, r3</code></td><td>r1 ← r2 AND r3</td></tr>
													<tr><td><code>eor r1, r2, r3</code></td><td>r1 ← r2 XOR r3</td></tr>
													<tr><td><code>orr r1, r2, r3</code></td><td>r1 ← r2 OR r3</td></tr>
													<tr><td><code>bic r1, r2, r3</code></td><td>r1 ← r2 AND (~ r3)</td></tr>
											</tbody>
									</TableLI>
									<li>The <code>bic</code> (bit-clear) instruction clears off the bits in r2 that are specified in r3.</li>
							</SubList></li>
							<li>Multiplication Instructions:<SubList>
									<li>The fundamental issue with multiplication is that if we are multiplying two 32-bit numbers, then the result will require 64 bits.</li>
									<li>ARM has two 32-bit multiplication instructions that truncate the result to 32 bits: <code>mul</code> and <code>mla</code>.</li>
									<li><code>mul</code> multiplies the values in two registers and stores the result in a third register.</li>
									<li><code>mla</code> (multiply and accumulate) is in the 4-address format. It multiplies the values of two registers, and adds the result to the value stored in a third register.</li>
									<li>The advantage of the <code>mla</code> instruction is that it makes it possible to represent code sequences of the form \(d = a+b \times c\) with one instruction.</li>
									<TableLI>
											<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
											<tbody>
													<tr><td><code>mul r1, r2, r3</code></td><td>r1 ← r2 x r3</td></tr>
													<tr><td><code>mla r1, r2, r3, r4</code></td><td>r1 ← r2 x r3 + r4</td></tr>
													<tr><td><code>smull r0, r1, r2, r3</code></td><td>r1 r0 ← r2 x r3</td></tr>
													<tr><td><code>umull r0, r1, r2, r3</code></td><td>r1 r0 ← r2 x r3</td></tr>
											</tbody>
									</TableLI>
									<li>The <code>smull</code> and <code>umull</code> instructions perform signed and unsigned multiplication respectively on two 32-bit values to produce a 64-bit result. \(r0\) contains the lower 32 bits, and \(r1\) contains the upper 32 bits.</li>
							</SubList></li>
							<li>Division Instructions:<SubList>
									<TableLI>
											<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
											<tbody>
													<tr><td><code>sdiv r1, r2, r3</code></td><td>r1 ← r2 ÷ r3 (signed)</td></tr>
													<tr><td><code>udiv r1, r2, r3</code></td><td>r1 ← r2 ÷ r3 (unsigned)</td></tr>
											</tbody>
									</TableLI>
									<li>Both of them compute the quotient. The remainder can be computed by subtracting the product of the dividend and the quotient from the dividend.</li>
							</SubList></li>
					</SubList></li>
					<li>Advanced Data-Processing Instructions:<SubList>
							<li>3-address data-processing instructions: <code>instruction &lt;destination register&gt; &lt;register operand 1&gt; &lt;operand 2&gt;</code></li>
							<li>2 address data processing instructions: <code>instruction &lt;register operand 1&gt; &lt;operand 2&gt;</code></li>
							<li><code>&lt;operand 2&gt;</code> can be a register operand, an immediate, or a special class of operands called <b>shifter operands</b>.</li>
							<li>A shifter operand contains two parts. This first part is a register, and the latter part specifies an operation to be performed on the value in the register.</li>
							<li>The ARM instruction set defines four such operations: <code>lsl</code> (logical shift left), <code>lsr</code> (logical shift right), <code>asr</code> (arithmetic shift right), and <code>ror</code> (rotate right). These operations are collectively called shift and rotate instructions.</li>
							<li>Note that shifting a word (4 byte number) by \(k\) positions to the left is equivalent to multiplying it by \(2^k\).</li>
							<li><CodePre language="armasm">{"\
mov r1, r2, asr #2      //Computes r1 = r2 / 4\n\
add r1, r2, r3, lsl #2  //Computes r1 = r2 + r3 x 4\n\
							"}</CodePre></li>
							<li><ImgComp src={require("./computer_organization_and_architecture_pics/27.PNG")}/></li>
					</SubList></li>
					<li>The CPSR Flags:<SubList>
						<li>ARM has four compare instructions (<code>cmp</code>, <code>cmn</code>, <code>tst</code>, and <code>teq</code>) in the 2-address format. These instructions compare the values in the two registers and save some properties of the result of the comparison in a dedicated internal register called the CPSR register.</li>
						<li>The <b>CPSR (Current Program Status Register)</b> maintains some state regarding the execution of the program. It is a 32-bit register like the other register, but we are only concerned about the last four. The bits in positions [29-32] are \(N\) (Negative), \(Z\) (Zero), \(C\) (Carry), and \(V\) (Overflow).</li>
						<li>The \(Z\) flag is set to 1 if the result is zero. In a comparison operation, if the operands are equal, then this flag is set to 1.</li>
						<li>\(V\) is set to 1 when an actual signed overflow/underflow occurs.</li>
						<li>ARM has four compare instructions: <code>cmp</code>, <code>cmn</code>, <code>tst</code> and <code>teq</code>. All four of them update the CPSR flags.</li>
						<TableLI>
							<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
							<tbody>
								<tr><td><code>cmp r1, r2</code></td><td>Set flags after computing (r1 - r2)</td></tr>
								<tr><td><code>cmn r1, r2</code></td><td>Set flags after computing (r1 + r2)</td></tr>
								<tr><td><code>tst r1, r2</code></td><td>Set flags after computing (r1 AND r2)</td></tr>
								<tr><td><code>teq r1, r2</code></td><td>Set flags after computing (r1 XOR r2)</td></tr>
							</tbody>
						</TableLI>
						<li>It is possible to make any data processing instruction set the flags by adding the suffix - 's' - to it. For example, the <code>adds</code> and <code>subs</code> instructions do the regular jobs of addition and subtraction respectively, and additionally also set the CPSR flags.</li>
						<li>There are three simple data processing instructions that use the CPSR flags: <code>sbc</code>, <code>rsc</code>, and <code>adc</code>.</li>
						<TableLI>
								<thead><tr><th>Example</th><th>Explanation</th></tr></thead>
								<tbody>
										<tr><td><code>adc r1, r2, r3</code></td><td>r1 = r2 + r3 + Carry Flag</td></tr>
										<tr><td><code>sbc r1, r2, r3</code></td><td>r1 = r2 - r3 - NOT (Carry Flag)</td></tr>
										<tr><td><code>rsc r1, r2, r3</code></td><td>r1 = r3 - r2 - NOT (Carry Flag)</td></tr>
								</tbody>
						</TableLI>   
						<li><CodePre language="armasm">{"\
//Adding two long (64 bits) values stored in r2,r1 and r4,r3 \n\
adds r5, r1, r3\n\
adc r6, r2, r4\n\
//Result in r6,r5\n\
						"}</CodePre></li>
						<li><CodePre language="armasm">{"\
//Subtracting two long values stored in r2,r1 and r4,r3 \n\
subs r5, r1, r3\n\
sbc r6, r2, r4\n\
//Result in r6,r5\n\
						"}</CodePre></li>
					</SubList></li>
					<li>Branch Intructions:<SubList>
						<TableLI>
							<caption>ARM programs primarily use three branch</caption>
							<thead>
								<tr><th>Example</th><th>Explanation</th></tr>
							</thead>
							<tbody>
								<tr><td><code>b .foo</code></td><td>Jump unconditionally to label <code>.foo</code></td></tr>
								<tr><td><code>beq .foo</code></td><td>Branch to <code>.foo</code> if the last flag setting instruction has resulted in an equality and (\(Z\) flag is 1)</td></tr>
								<tr><td><code>bne .foo</code></td><td>Branch to <code>.foo</code> if the last flag setting instruction has resulted in an inequality and (\(Z\) flag is 0)</td></tr>
							</tbody>
						</TableLI>
						<li>An ARM assembly program to compute the factorial of a positive number (&gt; 1) stored in <code>r0</code>. Save the result in <code>r1</code>:</li>
						<li><CodePre language="armasm">{"\
mov r1, #1 /* prod = 1 */ \n\
mov r3, #1 /* idx = 1 */ \n\
.loop: \n\
	mul r1, r3, r1 /* prod = prod * idx */\n\
	cmp r3, r0 /* compare idx, with the input (num) */\n\
	add r3, r3, #1 /* idx ++ */\n\
	bne .loop /* loop condition */ \n\
						"}</CodePre></li>
						<li>We can use the simple branch instructions to implement for loops and if statements. However, we need a stronger variant of the branch instruction to implement function calls. Function calls are different than regular branches because we need to remember the point in the program that the function needs to return to. ARM provides the <code>bl</code> (branch-and-link) instruction for this purpose:</li>
						<TableLI>
							<thead>
								<tr><th>Example</th><th>Explanation</th></tr>
							</thead>
							<tbody>
								<tr><td><code>bl .foo</code></td><td>(1) Jump unconditionally to the function at <code>.foo</code><br/>(2) Save the next PC (PC + 4) in the <code>lr</code> register</td></tr>
							</tbody>
						</TableLI>
						<li>We need to add 4 over here because the size of an instruction in ARM is exactly equal to 4 bytes.</li>
						<li>Once a function starts executing, it is expected that it will preserve the value of the return address saved in the <code>lr</code> register unless it invokes other functions. If a function invokes other functions, it needs to spill and restore registers.</li>
						<li>When we wish to return from a function, we need to move the value in the <code>lr</code> register to the <code>pc</code> register (<code>r15</code>). The PC will point to the instruction at the return address and execution will proceed from that point.</li>
						<li>Nowadays, there is a simpler method is used to return from a function. We can use the <code>bx</code> instruction that jumps to an address contained in a register.</li>
						<TableLI>
							<thead>
								<tr><th>Example</th><th>Explanation</th></tr>
							</thead>
							<tbody>
								<tr><td><code>bx r2</code></td><td>Jump unconditionally to the address contained in register, <code>r2</code></td></tr>
							</tbody>
						</TableLI>
					</SubList></li>
					<li>Conditional Instructions:<SubList>
						<li>Let us consider the instructions <code>beq</code> and <code>bne</code> again. We note that they are variants of the basic <code>b</code> instruction. They are distinguished by their suffixes (<code>eq</code> and <code>ne</code>). These suffixes are known as <b>condition codes</b>.</li>
						<li>There are 16 condition codes in ARM. Each condition code has a unique number, and suffix.</li>
						<TableLI style={{width:"600px"}}>
							<thead>
								<tr><th>Suffix</th><th>Code</th><th>Meaning</th><th>Flags</th></tr>
							</thead>
							<tbody>
								<tr><td><code>eq</code></td><td>0000</td><td>Equal</td><td>\(Z=1\)</td></tr>
								<tr><td><code>ne</code></td><td>0001</td><td>Not equal</td><td>\(Z=0\)</td></tr>
								<tr><td><code>cs</code></td><td>0010</td><td>Carry set</td><td>\(C=1\)</td></tr>
								<tr><td><code>cc</code></td><td>0011</td><td>Carry clear</td><td>\(C=0\)</td></tr>
								<tr><td><code>mi</code></td><td>0100</td><td>Minus</td><td>\(N=1\)</td></tr>
								<tr><td><code>pl</code></td><td>0101</td><td>Plus</td><td>\(N=0\)</td></tr>
								<tr><td><code>vs</code></td><td>0110</td><td>Overflow</td><td>\(V=1\)</td></tr>
								<tr><td><code>vc</code></td><td>0111</td><td>No overflow</td><td>\(V=0\)</td></tr>
								<tr><td><code>hi</code></td><td>1000</td><td>Unsigned higher</td><td>\(C=1 \land Z=0\)</td></tr>
								<tr><td><code>ls</code></td><td>1001</td><td>Unsigned lower or same</td><td>\(C=0 \lor Z=1\)</td></tr>
								<tr><td><code>ge</code></td><td>1010</td><td>Signed greater than or equal</td><td>\(N=0\)</td></tr>
								<tr><td><code>lt</code></td><td>1011</td><td>Signed less than</td><td>\(N=1\)</td></tr>
								<tr><td><code>gt</code></td><td>1100</td><td>Signed greater than</td><td>\(Z=0 \land N=0\)</td></tr>
								<tr><td><code>le</code></td><td>1101</td><td>Signed less than or equal</td><td>\(Z=1\lor N=1\)</td></tr>
								<tr><td><code>al</code></td><td>1110</td><td>Always</td><td></td></tr>
								<tr><td>-</td><td>1111</td><td>Never</td><td></td></tr>
							</tbody>
						</TableLI>
						<li>The expectation is that an earlier <code>cmp</code> or <code>subs</code> instruction would have set these flags, so the <code>eq</code> and <code>ne</code> conditions can be tested by considering the \(Z\) flag alone.</li>
						<li>The <code>ge</code> condition code simply tests the \(N\) flag. It should be equal to 0. This means that a preceding <code>cmp</code> or <code>subs</code> instruction has subtracted two numbers, where the first operand was greater than or equal to the second operand.</li>
						<li>Condition codes are not just restricted to branches. We can use condition codes with normal instructions such as add and sub also. For example, the instruction addeq performs an addition if the \(Z\) flag in the flags register is set to true. If the last comparison instruction concluded that its operands are unequal, then the ARM processor treats the addeq instruction as a <code>nop</code> instruction (no operation).</li>
					</SubList></li>
					<li>Load-Store instructions:<SubList>
						<li>The simplest load and store instructions are <code>ldr</code> and <code>str</code> respectively. Here, is an example:</li>
						<li>The instruction <code>ldr r1, [r0]</code> directs the processor to load the value in register <code>r1</code>, from the memory location stored in <code>r0</code>:</li>
						<li><ImgComp src={require("./computer_organization_and_architecture_pics/29.png")} style={{width: "30%"}}/></li>
						<li>Note that in this case, <code>r0</code>, contains the starting address of the data in memory. The <code>ldr</code> instructions loads 4 bytes in a register. If the value contained in <code>r0</code> is <code>v</code>, then we need to fetch the bytes from <code>v</code> to <code>v + 3</code>. These 32 bits (4 bytes), are brought from memory and saved in register <code>r1</code>.</li>
						<li>The <code>str</code> instruction performs the reverse process. It reads the value in a register and saves it in a memory location.</li>
						<li>We can specify load and store instructions with a base register, and an optional offset. In the instruction <code>ldr r1, [r0, #4]</code>, the memory address is equal to the value in <code>r0</code> plus 4.</li>
						<li>It is possible to specify a register in place of an immediate operand. In the expression <code>ldr r1, [r0, r2]</code>, <code>r0</code> and <code>r2</code> refer to the values stored in them.</li>
						<li>We can also do <code>ldr reg, [reg, reg, shift imm]</code>, for example <code>ldr r1, [r0, r2, lsl #2]</code> which means <code>r1 ← [r0 + r2 ≪ 2]</code>.</li>
						<li>The <code>ldr</code> and <code>str</code> instructions load/store 4 bytes of data. However, it is possible to also load and store 1 and 2 bytes of data. 2 bytes is also known as a half-word, where a word is equal to 4 bytes.</li>
						<TableLI style={{width:"600px"}}>
							<thead>
								<tr><th>Semantics</th><th>Example</th><th>Explanation</th></tr>
							</thead>
							<tbody>
								<tr><td><code>ldrb reg, [reg, imm]</code></td><td><code>ldrb r1, [r0, #2]</code></td><td>r1 ← [r0 + 2] (1 unsigned byte)</td></tr>
								<tr><td><code>ldrh reg, [reg, imm]</code></td><td><code>ldrh r1, [r0, #2]</code></td><td>r1 ← [r0 + 2] (2 unsigned bytes)</td></tr>
								<tr><td><code>ldrsb reg, [reg, imm]</code></td><td><code>ldrsb r1, [r0, #2]</code></td><td>r1 ← [r0 + 2] (1 signed byte)</td></tr>
								<tr><td><code>ldrsh reg, [reg, imm]</code></td><td><code>ldrsh r1, [r0, #2]</code></td><td>r1 ← [r0 + 2] (2 signed bytes)</td></tr>
								<tr><td><code>strb reg, [reg, imm]</code></td><td><code>strb r1, [r0, #2]</code></td><td>[r0 + 2] ← r1 (1 unsigned byte)</td></tr>
								<tr><td><code>strh reg, [reg, imm]</code></td><td><code>strh r1, [r0, #2]</code></td><td>[r0 + 2] ← r1 (2 unsigned bytes)</td></tr>
							</tbody>
						</TableLI>
						<li><code>ldrb</code> loads an unsigned byte to a register. It places the byte in the least significant 8 bits. The rest of the 24 bits are set to 0. <code>ldrh</code> similarly loads an unsigned half-word (16 bits). <code>ldrsb</code>, and <code>ldrsh</code> load a signed byte and half-word respectively.</li>
						<li>Note that unlike loads, there are no ARM instructions to extend the sign of the operand while saving it in memory.</li>
					</SubList></li>
				</SubList></li>
				<li>Arrays:<SubList>
					<li>Note that the starting memory location of entry \(i\) <span className="ownExplanation">(assuming that \(i=0\) in the first entry)</span> is equal to the base address of the array plus \(4i\) in an array with word (4 byte) sized elements.</li>
					<li>In the load instruction <code>ldr r0, [r1, r2, lsl #2]</code>, the base address is stored in register <code>r1</code> and the offset is equal to <code>r2 ≪ 2</code> or \(4 * r2\). The advantage here is that we do not need a separate instruction to multiply the index by 4.</li>
					<li>There are other optimisations that can make our life easier. Consider the following <code>addNumbers</code> function:</li>
					<li><CodePre language="c">{`
void addNumbers(int a[100]) {
	int idx;
	int sum = 0;
	for (idx = 0; idx < 100; idx++){
		sum = sum + a[idx];
	}
}
					`}</CodePre></li>
					<li>Let's try to convert this to assembly (assume that the base address of the array is stored in <code>r0</code>):</li>
					<li><CodePre language="armasm">{`
/* base address of array a in r0 */
mov r1, #0 /* sum = 0 */
mov r2, #0 /* idx = 0 */

.loop:
	ldr r3, [r0, r2, lsl #2]
	add r2, r2, #1 /* idx ++ */
	add r1, r1, r3 /* sum += a[idx] */
	cmp r2, #100 /* loop condition */
	bne .loop
					`}</CodePre></li>
					<li>The ARM architecture adds two extra addressing modes for the load and store instructions to shorten line 6 and 7 into one line. They are called <i>pre-indexed</i> and <i>post-indexed</i> with auto-update:<SubList>
						<li>In the preindexed addressing mode (with auto-update), the base address is updated first, and then the effective memory address is computed.</li>
						<li>The pre-indexed addressing mode with auto-update is implemented by adding a '!' sign after the address.</li>
						<li><CodePre language="armasm">{`
ldr r3, [r0, #4]! /* r3 = [r0+4]; r0 = r0 + 4*/
ldr r3, [r0, r1, lsl #2]! /* r3 = [r0 + r1 << 2];
					r0 = r0 + r1 << 2; */			
						`}</CodePre></li>
						<li>In a post-indexed scheme, the base address is updated after the effective address is computed.</li>
						<li>The post-indexed addressing mode is implemented by encapsulating the base address within '[' and ']', and writing the offset arguments separated by commas after it.</li>
						<li><CodePre language="armasm">{`
ldr r3, [r0], #4 /* r3 = [r0], r0 = r0 + 4 */
ldr r3, [r0], r1, lsl #2 /* r3 = [r0], r0 = r0 + r1 << 2 */	
						`}</CodePre></li>
					</SubList></li>
					<li>We can make changes to the ARM code for <code>addNumbers</code>:</li>
					<li><CodePre language="armasm">{`
/* base address of array a in r0 */
mov r1, #0 /* sum = 0 */
add r4, r0, #400 /* address of a[100]*/

.loop:
	ldr r3, [r0], #4
	add r1, r1, r3 /* sum += a[idx] */
	cmp r0, r4 /* loop condition */
	bne .loop
					`}</CodePre></li>
				</SubList></li>
			</ul>
		</div>
	</div>

	<h2 id="file_processing">File Processing</h2>
	<div className="content">
			<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
					<h3>Primary Versus Secondary Storage</h3>
					<ul>
							<li><b>Primary memory</b> usually refers to <b>Random Access Memory (RAM)</b>. They are faster but more expensive memory in a computer.</li>
							<li><b>Secondary storage</b> refers to slower but cheaper means of storing data. <u>Examples:</u> hard disk drives; solid state drives; removable "USB" drives; CDs; and DVDs.</li>
							<li>Disk, flash, and optical media are <b>persistent</b>, meaning that they are not erased from the media when the power is turned off. In contrast, RAM used for main memory is usually <b>volatile</b> - all information is lost with the power.</li>
							<li>The relative speeds in access time between RAM and a disk drive have remained the same for over several decades, in the range between a factor of 100,000 and 1,000,000. There are generally two approaches to minimizing disk accesses:<SubList>
									<li>The first is to arrange information so that if you do access data from secondary memory, you will get what you need in as few accesses as possible, and preferably on the first access. <b>File structure</b> is the term used for a data structure that organizes data stored in secondary memory</li>
									<li>The other way to minimize disk accesses is to save information previously retrieved (or retrieve additional data with each access at little additional cost) that can be used to minimize the need for future accesses. This requires the ability to guess accurately what information will be needed later and store it in primary memory now. This is referred to as <b>caching</b>.</li>
							</SubList></li>
							<li>The <b>file manager</b>, a part of the operating system, is responsible for taking requests for data from a <b>logical file</b> and mapping those requests to the physical location of the data on disk:<SubList>
									<li>A programmer typically views a random access file stored on disk as a contiguous series of bytes, with those bytes possibly combining to form data records. This is called the <b>logical file</b>.</li>
									<li>The <b>physical file</b> actually stored on disk is usually not a contiguous series of bytes. It could well be in pieces spread all over the disk.</li>
							</SubList></li>
					</ul>
					<h3>Disk Drives</h3>
					<ul>
							<li>Disk drives are often referred to as <b>direct access storage devices</b>. This means that it takes roughly equal time to access any record in the file. This is in contrast to <b>sequential access storage devices</b> such as tape drives, which require the tape reader to process data from the beginning of the tape until the desired position has been reached.</li>
							<li>Disk Drive Architecture (<a href='https://cdn.ttgtmedia.com/rms/onlineImages/disk_drive_components.jpg'>good reference image</a> from this <a href='https://www.techtarget.com/searchstorage/definition/hard-disk-drive'>webpage</a>):<SubList>
									<li>A hard disk drive is composed of one or more round <b>platters</b>, stacked one on top of another and attached to a central <b>spindle</b>.</li>
									<li>Platters spin continuously at a constant rate. Each usable surface of each platter is assigned a <b>read/write head</b> or <b>I/O head</b> through which data are read or written, somewhat like the arrangement of a phonograph player's arm "reading" sound from a phonograph record.</li>
									<li>Unlike a phonograph needle, the disk read/write head does not actually touch the surface of a hard disk. Instead, it remains slightly above the surface, and any contact during normal operation would damage the disk.</li>
									<li>A hard disk drive typically has several platters and several read/write heads. Each head is attached to an <b>arm</b>.</li>
									<li>The data on a single platter that are accessible to any one position of the head for that platter are collectively called a <b>track</b>.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/1.PNG")} style={{width: "30%"}}/></li>
									<li>The collection of all tracks that are a fixed distance from the spindle is called a <b>cylinder</b>.</li>
									<li>Each track is subdivided into <b>sectors</b>. Between each sector there are <b>inter-sector gaps</b> in which no data are stored. These gaps allow the read head to recognize the end of a sector.</li>
									<li><figure><ImgComp src={require("./computer_organization_and_architecture_pics/2.png")} style={{width: "85%"}}/><figcaption>(a) Nominal arrangement of tracks showing decreasing data density when moving outward from the center of the disk. (b) A "zoned" arrangement with the sector size and density periodically reset in tracks further away from the center.</figcaption></figure></li>
									<li>In contrast to the physical layout of a hard disk, a <b>CD-ROM</b> consists of a single spiral track. Bits of information along the track are equally spaced, so the information density is the same at both the outer and inner portions of the track.</li>
									<li>Three separate steps take place when reading a particular byte or series of bytes of data from a hard disk:<SubList numbered={true}>
											<li>The I/O head moves so that it is positioned over the track containing the data. This movement is called a <b>seek</b>.</li>
											<li>The sector containing the data rotates to come under the head. The time spent waiting for the desired sector to come under the I/O head is called <b>rotational delay</b> or <b>rotational latency</b>.</li>
											<li>The actual transfer (i.e., reading or writing) of data. It takes relatively little time to read information once the first byte is positioned under the I/O head, simply the amount of time required for it all to move under the head.</li>
									</SubList></li>
									<li>Disk drives are designed not to read one byte of data, but rather to read an entire sector of data at each request. Thus, a sector is the minimum amount of data that can be read or written at one time.</li>
									<li>It is desirable to keep all sectors for a file together on as few tracks as possible:<SubList numbered={true}>
											<li>Seek time is slow (it is typically the most expensive part of an I/O operation).</li>
											<li>If one sector of the file is read, the next sector will probably soon be read.</li>
									</SubList></li>
									<li>Contiguous sectors are often grouped to form a <b>cluster</b>:<SubList>
											<li>A <b>cluster</b> is the smallest unit of allocation for a file, so all files are a multiple of the cluster size. The cluster size is determined by the operating system.</li>
											<li>A group of physically contiguous clusters from the same file is called an <b>extent</b>. Ideally, all clusters making up a file will be contiguous on the disk.</li>
											<li>A file might consist of several extents widely spaced on the disk. The fuller the disk, and the more that files on the disk change, the worse this file fragmentation (and the resulting seek time) becomes.</li>
											<li>In Microsoft Windows systems, there is a designated portion of the disk called the <b>File Allocation Table</b>, which stores information about which sectors belong to which file. In contrast, Unix does not use clusters. The smallest unit of file allocation and the smallest unit that can be read/written is a sector, which in Unix terminology is called a <b>block</b>.</li>
									</SubList></li>
									<li>When the file's logical record size does not match the sector size, records will not fit evenly within a sector. Either the extra space is wasted, or else records are allowed to cross sector boundaries:<SubList>
									<li>If a record crosses a sector boundary, two disk accesses might be required to read it.</li> 
									<li>If the space is left empty instead, such wasted space is called <b>internal fragmentation</b>.</li>
									</SubList></li>
									<li>The <b>sector header</b>:<SubList>
											<li>It's a piece of information at the start of a sector that allows the I/O head to recognize the identity (or equivalently, the address) of the current sector.</li>
											<li>It contains address marks and information about the condition (whether usable or not) for each sector, and gaps between sectors.</li>
											<li>The sector header also contains error detection codes to help verify that the data have not been corrupted.</li>
											<li><ImgComp src={require("./computer_organization_and_architecture_pics/3.PNG")} style={{width: "80%"}}/></li>
									</SubList></li>
							</SubList></li>
							<li>Disk Access Costs:<SubList>
									<li>When a seek is required, it is usually the primary cost when accessing information on disk.</li>
									<li>Two numbers to consider:<SubList>
											<li>One is the track-to-track cost, or the minimum time necessary for the I/O head to move from a track to an adjacent track. This is appropriate when you want to analyze access times for files that are well placed on the disk.</li>
											<li>The second number is the average seek time for a random access. These two numbers are often provided by disk manufacturers.</li>
									</SubList></li>
									<li>Once under the I/O head, a sector of data can be transferred as fast as that sector rotates under the head.</li>
							</SubList></li>
					</ul>       
			</div>
			<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
					<h3>Buffer Pools</h3>
					<ul>
							<li>Nearly all disk drives automatically read or write an entire sector's worth of information whenever the disk is accessed, even when only one byte of information is requested.</li>
							<li><b>Buffering:</b><SubList>
									<li>Once a sector is read, its information is stored in main memory. This is known as <b>Buffering</b> or <b>caching</b> the information.</li>
									<li>Caching is the concept of keeping selected data in main memory. The goal is to have in main memory the data values that are most likely to be used in the near future.</li>
									<li className="research">In practice most disk requests are close to the location (in the logical file at least) of the previous request, a concept referred to as <b>locality of reference</b>.</li>
									<li>Sector-level buffering is normally provided by the operating system and is often built directly into the disk drive controller hardware.</li>
									<li>Most operating systems maintain at least two buffers, one for input and one for output. Consider what would happen if there were only one buffer during a byte-by-byte copy operation:<SubList>
											<li>The sector containing the first byte would be read into the I/O buffer.</li>
											<li>The output operation would need to destroy the contents of the single I/O buffer to write this byte.</li>
											<li>Then the buffer would need to be filled again from disk for the second byte, only to be destroyed during output.</li>
									</SubList></li>
									<li><b>Double buffering:</b><SubList>
											<li><b>Double buffering:</b> The idea of using multiple buffers to allow the CPU to operate in parallel with a peripheral storage device (like disk drive).</li>
											<li>Imagine that a file is being processed sequentially. While the first sector is being read, the CPU cannot process that information and so must wait or find something else to do in the meantime.</li>
											<li>Once the first sector is read, the CPU can start processing while the disk drive (in parallel) begins reading the second sector.</li>
											<li>If the time required for the CPU to process a sector is approximately the same as the time required by the disk controller to read a sector, it might be possible to keep the CPU continuously fed with data from the file.</li>
									</SubList></li>
									<li>The information stored in a buffer is often called a <b>page</b>, and the collection of buffers is called a <b>buffer pool</b>.</li>
							</SubList></li>
							<li>Replacement Strategies:<SubList>
									<li>When an application continues to read new information from disk, eventually all of the buffers in the buffer pool will become full. Once this happens, some decision must be made about what information in the buffer pool will be sacrificed to make room for newly requested information.</li>
									<li>When replacing information contained in the buffer pool, the goal is to select a buffer that has "unnecessary" information, that is, the information least likely to be requested again.</li>
									<li>Because the buffer pool cannot know for certain what the pattern of future requests will look like, a decision based on some <i>heuristic</i>, or best guess, must be used:<SubList>
											<li>One heuristic is <b>first-in, first-out</b>. This scheme simply orders the buffers in a queue.</li>
											<li>In this way, the buffer to be replaced is the one that has held its information the longest, in hopes that this information is no longer needed.</li>
											<li>However, many programs work with certain key pieces of information over and over again, and the importance of information has little to do with how long ago the information was first accessed.</li>
											<li>Another approach is called <b>least frequently used (LFU)</b>. LFU tracks the number of accesses to each buffer in the buffer pool. When a buffer must be reused, the buffer that has been accessed the fewest number of times is considered to contain the "least important" information, and so it is used next.</li>
											<li>LFU, while it seems intuitively reasonable, has many drawbacks. First, it is necessary to store and update access counts for each buffer. Second, what was referenced many times in the past might now be irrelevant.</li>
											<li>The third approach is called <b>least recently used (LRU)</b>. LRU simply keeps the buffers in a list. Whenever information in a buffer is accessed, this buffer is brought to the front of the list.</li>
									</SubList></li>
							</SubList></li>
							<li><b>The Dirty Bit:</b><SubList>
									<li>The main purpose of a buffer pool is to minimize disk I/O.</li>
									<li>When the contents of a block (a unit of storage, usually referring to storage on a disk drive) are modified, we could write the updated information to disk immediately. But what if the block is changed again? If we write the block's contents after every change, that might be a lot of disk write operations that can be avoided. It is more efficient to wait until either the file is to be closed, or the contents of the buffer containing that block is to be flushed from the buffer pool.</li>
									<li>A Boolean variable with the buffer (often referred to as the <b>dirty bit</b>) is turned on when the buffer's contents are modified by the client. At the time when the block is flushed from the buffer pool, it is written to disk if and only if the dirty bit has been turned on.</li>
							</SubList></li>
							<li>Modern operating systems support <b>virtual memory</b>:<SubList>
									<li><b>Virtual memory</b> is a technique that allows the programmer to write programs as though there is more of the faster main memory than actually exists.</li>
									<li>The disk stores the complete contents of the virtual memory. Blocks are read into main memory as demanded by memory accesses.</li>
									<li>Naturally, programs using virtual memory techniques are slower than programs whose data are stored completely in main memory. The advantage is reduced programmer effort because a good virtual memory system provides the appearance of larger main memory without modifying the program.</li>
							</SubList></li>
							<li>Implementing Buffer Pools:<SubList>
									<li>When implementing buffer pools, there are two basic approaches that can be taken regarding the transfer of information between the user of the buffer pool and the buffer pool class itself.</li>
									<li>The first approach is to pass "messages" between the two. This approach is illustrated by the following abstract class:</li>
									<li><CodePre language="java">{"\
// ADT for buffer pools using the message-passing style\n\
public interface BufferPoolADT {\n\
	// Copy \"sz\" bytes from \"space\" to position \"pos\" in the buffered storage\n\
	public void insert(byte[] space, int sz, int pos);\n\
	// Copy \"sz\" bytes from position \"pos\" of the buffered storage to \"space\"\n\
	public void getbytes(byte[] space, int sz, int pos);\n\
}\n\
									"}</CodePre></li>
									<li>An alternative interface is to have the buffer pool provide to the user a direct pointer to a buffer that contains the requested information. Such an interface might look as follows:</li>
									<li><CodePre language="java">{"\
// ADT for buffer pools using the buffer-passing style\n\
public interface BufferPoolADT {\n\
	// Return pointer to the requested block\n\
	public byte[] getblock(int block);\n\
	// Set the dirty bit for the buffer holding \"block\"\n\
	public void dirtyblock(int block);\n\
	// Tell the size of a buffer\n\
	public int blocksize();\n\
};\n\
									"}</CodePre></li>
									<li>A variation on this approach is to have the <code>getblock</code> function take another parameter to indicate the "mode":<SubList>
											<li>If the mode is READ then the buffer pool assumes that no changes will be made to the buffer's contents (and so no write operation need be done when the buffer is reused to store another block).</li>
											<li>If the mode is WRITE then the buffer pool assumes that the client will not look at the contents of the buffer and so no read from the file is necessary.</li>
											<li>If the mode is READ AND WRITE then the buffer pool would read the existing contents of the block in from disk, and write the contents of the buffer to disk when the buffer is to be reused.</li>
											<li>Using the "mode" approach, the dirtyblock method is avoided.</li>
									</SubList></li>
									<li><b>Stale pointers:</b><SubList>
											<li><b>Stale pointer</b> is a reference to a buffer or memory location that is no longer valid.</li>
											<li>A program might make a memory request to a buffer pool, and be given a reference to the buffer holding the requested data. Over time, due to inactivity, the contents of this buffer might be flushed. If the program holding the buffer reference then tries to access the contents of that buffer again, then the data contents will have changed.</li>
											<li>We can solve this problem by introducing the concept of a user (or possibly multiple users) gaining access to a buffer, and then releasing the buffer when done. We will add method <code>acquireBuffer</code> and <code>releaseBuffer</code> for this purpose.</li>
											<li>Method <code>acquireBuffer</code> takes a block ID as input and returns a pointer to the buffer that will be used to store this block. The buffer pool will keep a count of the number of requests currently active for this block.</li>
											<li>Method <code>releaseBuffer</code> will reduce the count of active users for the associated block. Buffers associated with active blocks will not be eligible for flushing from the buffer pool.</li>
											<li><CodePre language="java">{"\
// Improved ADT for buffer pools using the buffer-passing style.\n\
// Most user functionality is in the buffer class,\n\
//not the buffer pool itself.\n\
// A single buffer in the buffer pool\n\
public interface BufferADT {\n\
	// Read the associated block from disk (if necessary) and return a\n\
	// pointer to the data\n\
	public byte[] readBlock();\n\
	// Return a pointer to the buffer's data array\n\
	//(without reading from disk)\n\
	public byte[] getDataPointer();\n\
	// Flag buffer's contents as having changed, so that flushing the\n\
	// block will write it back to disk\n\
	public void markDirty();\n\
	// Release the block's access to this buffer. Further accesses to\n\
	// this buffer are illegal\n\
	public void releaseBuffer();\n\
}\n\
public interface BufferPoolADT {\n\
	// Relate a block to a buffer, returning a pointer to a buffer object\n\
	Buffer acquireBuffer(int block);\n\
}\n\
											"}</CodePre></li>
											<li>Again, a mode parameter could be added to the <code>acquireBuffer</code> method, eliminating the need for the <code>readBlock</code> and <code>markDirty</code> methods.</li>
									</SubList></li>
							</SubList></li>
							<li>In a buffer pool, the user decides where a given record will be stored but has no control over the precise mechanism by which data are transferred to the backing storage.</li>
					</ul> 
					<h3>The Programmer's View of Files</h3>
					<ul>
							<li>A <b>random access</b> procedure processes records in an order independent of their logical order within the file.</li>
							<li><b>Sequential access</b> processes
									records in order of their logical appearance within the file.</li>
							<li>The Java programmer's logical view of a random access file is a single stream
									of bytes.</li>
							<li>Interaction with a file can be viewed as a communications channel for issuing one of three instructions:<SubList>
									<li>Read bytes from the current position in the file</li>
									<li>Write bytes to the current position in the file</li>
									<li>Move the current position within
									the file</li>
									</SubList></li>
							<li>You do not normally see how the bytes are stored in sectors, clusters, and
									so forth. The mapping from logical to physical addresses is done by the file system,
									and sector-level buffering is done automatically by the disk controller.</li>
							<li>Java provides several mechanisms for manipulating disk files. One of the most
									commonly used is the <code>RandomAccessFile</code> class:<SubList>
											<li><code>RandomAccessFile(String name, String mode)</code>: Class constructor, opens a disk file for processing.</li>
											<li><code>read(byte[] b)</code>: Read some bytes from the current position in the file. The current position moves forward as the bytes are read.</li>
											<li><code>write(byte[] b)</code>: Write some bytes at the current position in the file (overwriting the bytes already at that position). The current position moves forward as the bytes are written.</li>
											<li><code>seek(long pos)</code>: Move the current position in the file to pos. This allows bytes at arbitrary places within the file to be read or written.</li>
											<li><code>close()</code>: Close a file at the end of processing.</li>
									</SubList></li>
					</ul>
			</div>
	</div>

	<h2 id="memory_management">Memory Management</h2>
	<div className="content">
			<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
					<ul>
							<li>Memory manager:<SubList>
									<li><b>Memory pool:</b> Memory that is logically viewed as an array of memory positions. Memory requests are issued for some amount of space in the pool.</li>
									<li>A <b>memory manager</b> has the job of finding a contiguous block of locations of at least the requested size from somewhere within the memory pool. Honoring such a request is called <b>memory allocation</b>.</li>
									<li>The memory manager will typically return some piece of information that the requestor can hold on to so that later it can recover the data that were just stored by the memory manager. This piece of information is called a <b>handle</b>.</li>
									<li>At some point, space that has been requested might no longer be needed, and this space can be returned to the memory manager so that it can be reused. This is called a <b>memory deallocation</b>.</li>
									<li><CodePre language="java">{"\
// Memory Manager abstract class\n\
public interface MemManager {\n\
	// Store a record and return a handle to it\n\
	public MemHandle insert(byte[] info);\n\
\n\
	// Release the space associated with a record\n\
	public void release(MemHandle h);\n\
\n\
	// Get back a copy of a stored record\n\
	public byte[] getRecord(MemHandle h);\n\
}\n\
									"}</CodePre></li>
									<li>The user of the <code>MemManager</code> ADT provides a pointer (in parameter info) to space that holds some message to be stored or retrieved.</li>
									<li>The fundamental idea is that the client gives messages to the memory manager for safe keeping. The memory manager returns a receipt for the message in the form of a <code>MemHandle</code> object. The client holds the <code>MemHandle</code> until it wishes to get the message back.</li>
							</SubList></li>
							<li>Dynamic Storage Allocation:<SubList>
									<li>For the purpose of <b>dynamic storage allocation</b>, we view memory as a single array broken into a series of variable-size blocks, where some of the blocks are <i>free blocks</i> and some are <i>reserved blocks</i> (already allocated).</li>
									<li>The free blocks are linked together to form a freelist used for servicing future memory requests.</li>
									<li>When a memory request is received by the memory manager, some block on the freelist must be found that is large enough to service the request. If no such block is found, then the memory manager must resort to a <b>failure policy</b> (which may include expanding the memory pool, reorganizing the memory pool, etc.).</li>
							</SubList></li>
							<li><a href='https://www.geeksforgeeks.org/difference-between-static-and-dynamic-memory-allocation-in-c/'>In the <b>static memory allocation</b>, variables get allocated permanently, till the program executes or function call finishes. Static Memory Allocation is done before program execution.</a></li>
							<li>Two types of fragmentation:<SubList>
									<li>External fragmentation occurs when a series of memory requests result in lots of small free blocks, no one of which is useful for servicing typical requests.</li>
									<li>Internal fragmentation occurs when more than \(m\) words are allocated to a request for \(m\) words, wasting free storage.</li>
									<li><ImgComp src={require("./computer_organization_and_architecture_pics/21.PNG")} style={{width: "80%"}}/></li>
							</SubList></li>
							<li><b>Sequential-Fit Methods:</b><SubList>
									<li>Sequential-fit methods attempt to find a "good" block to service a storage request. Let's assume that the free blocks are organized into a doubly linked list.</li>
									<li>A simple linked-list implementation can be used, where each node of the linked list contains a pointer to a single free block in the memory pool. This is fine if there is space available for the linked list itself, separate from the memory pool.</li>
									<li>Another approach to storing the freelist is more complicated but saves space. Because the free space is free, it can be used by the memory manager to help it do its job; that is, the memory manager temporarily "borrows" space within the free blocks to maintain its doubly linked list.</li>
									<li>To do so, each unallocated block must be large enough to hold these pointers. In addition, it is usually worthwhile to let the memory manager add a few bytes of space to each reserved block for its own purposes.</li>
									<li><figure>
											<ImgComp src={require("./computer_organization_and_architecture_pics/22.png")} style={{width: "80%"}}/>
											<figcaption>(a) A <b>free block</b> contains the tag bit field, the block size field, and two pointers for the freelist. The end of the block contains a second tag field and a second block size field.<br/>(b) A <b>reserved block</b> with a tag bit field and a block size field at the beginning of the block, and a second tag field at the end of the block.</figcaption>
									</figure></li>
									<li>When a block \(F\) is freed, it must be merged into the freelist. The memory manager first checks the unit of memory immediately preceding block \(F\) to see if the preceding block (call it \(P\)) is also free. If it is, then the memory unit before \(P\)'s tag bit stores the size of \(P\), thus indicating the position for the beginning of the block in memory. \(P\) can then simply have its size extended to include block \(F\).</li>
									<li>We also check the bit following the end of block \(F\). If this bit indicates that the following block (call it \(S\)) is free, then \(S\) is removed from the freelist and the size of \(F\) is extended appropriately.</li>
							</SubList></li>
							<li><u>Selecting a suitable free block:</u><SubList>
									<li>Assume that we have a memory pool with 200 units of storage. After some series of allocation requests and releases, we have reached a point where there are four free blocks on the freelist of sizes 25, 35, 32, and 45 (in that order). Assume that a request is made for 30 units of storage.</li>
									<li>The simplest method for selecting a block would be to move down the free block list until a block of size at least 30 is found.</li>
									<li>Any remaining space in this block is left on the freelist. If we begin at the beginning of the list and work down to the first free block at least as large as 30, we select the block of size 35. 30 units of storage will be allocated, leaving a free block with 5 units of space. Because this approach selects the first block with enough space, it is called <b>first fit</b>.</li>
									<li>On the next search, instead of always beginning at the head of the freelist, remember the last position reached in the previous search and start from there. When the end of the freelist is reached, search begins again at the head of the freelist.</li>
									<li>This modification reduces the number of unnecessary searches through small blocks that were passed over by previous requests.</li>
									<li>A strategy that avoids using large blocks unnecessarily is called <b>best fit</b>. Best fit looks at the entire list and picks the smallest block that is at least as large as the request .</li>
									<li>In our example, the best fit for a request of 30 units is the block of size 32, leaving a remainder of size 2.</li>
									<li>A strategy contrary to best fit might make sense because it tends to minimize the effects of external fragmentation. This is called <b>worst fit</b>, which always allocates the largest block on the list hoping that the remainder of the block will be useful for servicing a future request.</li>
									<li>In our example, the worst fit is the block of size 45, leaving a remainder of size 15.</li>
									<li>If the requests are of widely ranging size, best fit might work well. If the requests tend to be of similar size, with rare large and small requests, first or worst fit might work well.</li>
							</SubList></li>
					</ul>
			</div>
			<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
					<ul>
							<li><b>Buddy Methods:</b><SubList>
									<li>Sequential-fit methods rely on a linked list of free blocks, which must be searched for a suitable block at each memory request. Thus, the time to find a suitable free block would be \(\Theta(n)\) in the worst case for a freelist containing \(n\) blocks.</li>
									<li>We must either use additional space for the linked list, or use space within the memory pool to support the memory manager operations. In the second option, both free and reserved blocks require tag and size fields. Fields in free blocks do not cost any space (because they are stored in memory that is not otherwise being used), but fields in reserved blocks create additional overhead.</li>
									<li>The <b>buddy system</b> assumes that memory is of size \(2^N\) for some integer \(N\). Both free and reserved blocks will always be of size \(2^k\) for \(k \lt N\). At any given time, there might be both free and reserved blocks of various sizes.</li>
									<li>When a request comes in for \(m\) words, we first determine the smallest value of \(k\) such that \(2^k\ge m\). A block of size \(2k\) is selected from the free list for that block size if one exists. The buddy system does not worry about internal fragmentation: The entire block of size \(2k\) is allocated.</li>
									<li>If no block of size \(2^k\) exists, the next larger block is located. This block is split in half (repeatedly if necessary) until the desired block of size \(2^k\) is created. Any other blocks generated as a by-product of this splitting process are placed on the appropriate freelists.</li>
									<li><a href='https://en.wikipedia.org/wiki/Buddy_memory_allocation'>If memory is to be freed:</a><SubList numbered={true}>
											<li>Free the block of memory</li>
											<li>Look at the neighboring block - is it free too?</li>
											<li>If it is, combine the two, and go back to step 2 and repeat this process until either the upper limit is reached (all memory is freed), or until a non-free neighbour block is encountered.</li>
									</SubList></li>
							</SubList></li>
							<li>If the application is sufficiently complex, it might be desirable to break available memory into several memory "zones", where each zone has a different memory management scheme.</li>
							<li>Another approach to memory management is to impose a standard size on all memory requests.</li>
							<li>In some situations, there might be nothing that can be done: There simply might not be enough free memory to service the request, and the application may require that the request be serviced immediately:<SubList>
									<li>In many cases there are alternatives to simply returning an error. The possible options are referred to collectively as <b>failure policies</b>.</li>
									<li>In some cases, there might be sufficient free memory to satisfy the request, but it is scattered among small blocks. In this case, it might be possible to compact memory by moving the reserved blocks around so that the free space is collected into a single block.</li>
									<li>A problem with this approach is that the application must somehow be able to deal with the fact that all of its data have now been moved to different locations. If the application program relies on the absolute positions of the data in any way, this would be disastrous. One approach for dealing with this problem is the use of <b>handles</b>.</li>
									<li>A handle is a second level of indirection to a memory location. The memory allocation routine does not return a pointer to the block of storage, but rather a pointer to a variable that in turn points to the storage. This variable is the handle. The handle never moves its position, but the position of the block might be moved and the value of the handle updated.</li>
									<li>Another failure policy that might work in some applications is to defer the memory request until sufficient memory becomes available. While such a delay might be annoying to the user, it is better than halting the entire system. The assumption here is that other processes will eventually terminate, freeing memory.</li>
									<li>Another option might be to allocate more memory to the memory manager. In a C++ program that implements its own memory manager, it might be possible to get more memory from the system-level <code>new</code> operator.</li>
									<li>The last failure policy that we will consider is <b>garbage collection</b>:<SubList>
											<li><CodePre language="cpp">
Integer p = new Integer[5];
Integer q = new Integer[10];
p = q;
											</CodePre></li>
											<li>This would be considered bad form because the original space allocated to p is lost as a result of the third assignment. This space cannot be used again by the program. Such lost memory is referred to as <b>garbage</b>, also known as a <b>memory leak</b>.</li>
											<li>In LISP, Garbage collection consists of examining the managed memory pool to determine which parts are still being used and which parts are garbage. In particular, a list is kept of all program variables, and any memory locations not reachable from one of these variables are considered to be garbage. When the garbage collector executes, all unused memory locations are placed in free store for future access.</li>
											<li>It has the disadvantage, from a user's point of view, that every so often the system must halt while it performs garbage collection.</li>
											<li>As in LISP, it is common practice in Java to allocate dynamic memory as needed, and to later drop all references to that memory. The garbage collector is responsible for reclaiming such unused space as necessary. This might require extra time when running the program.</li>
											<li><b>Reference count algorithm:</b> Here, every dynamically allocated memory block includes space for a count field. Whenever a pointer is directed to a memory block, the reference count is increased. Whenever a pointer is directed away from a memory block, the reference count is decreased. If the count ever becomes zero, then the memory block is considered garbage and is immediately placed in free store.</li>
											<li>This approach has the advantage that it does not require an explicit garbage collection phase, because information is put in free store immediately when it becomes garbage. The disadvantage is when garbage contains cycles.</li>
											<li><b>Mark/sweep algorithm:</b> Each memory object needs only a single mark bit rather than a reference counter field. When free store is exhausted, a separate garbage collection phase takes place as follows:<SubList numbered={true}>
													<li>Clear all mark bits</li>
													<li>Perform depth-first search (DFS) following pointers from each variable on the system's list of variables. Each memory element encountered during the DFS has its mark bit turned on.</li>
													<li>A "sweep" is made through the memory pool, visiting all elements. Unmarked elements are considered garbage and placed in free store.</li>
											</SubList></li>
											<li>DFS is a recursive algorithm: Either it must be implemented recursively, in which case the compiler's runtime system maintains a stack, or else the memory manager can maintain its own stack.</li>
											<li>A clever technique allows DFS to be performed without requiring additional space for a stack.  At each step deeper into the traversal, instead of storing a pointer on the stack, we "borrow" the pointer being followed. This pointer is set to point back to the node we just came from in the previous step.</li>
											<li>Each borrowed pointer stores an additional bit to tell us whether we came down the left branch or the right branch of the link node being pointed to. At any given instant we have passed down only one path from the root, and we can follow the trail of pointers back up.</li>
											<li>As we return (equivalent to popping the recursion stack), we set the pointer back to its original position so as to return the structure to its original condition. This is known as the <b>Deutsch-Schorr-Waite garbage collection algorithm</b>.</li>
									</SubList></li>
							</SubList></li>
					</ul>
			</div>
	</div>
</>