import SubList from "../../articleRelatedStuff/SubList";
import { CodePre } from "../../articleRelatedStuff/Code";

export const title = "C++ Programming Language notes";
export const sourcesColor = {64: null, 15: null};

export const content = <>
<h1>C++ Programming Language</h1>

<h2 id="c-only">C-only stuff</h2>
<div className="content" data-source={64}>
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}}>
		<ul>
			<li>Hello world:<SubList>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  printf("Hello world!\\n");
}
				`}</CodePre></li>
				<li><code>{"#include <stdio.h>"}</code> is known as a <b>hash-include</b>.</li>
				<li>The formatted print command <code>printf</code> is part of the <b>standard input-output</b> library, or <b>stdio</b> for short. So what this line does is to warn the compiler that the program needs the stdio library to be included as part of the compile process.</li>
				<li>C is a function-based language; every program is made up of a number of functions. Each function takes zero or more arguments, and returns a single value.</li>
				<li>Every C program has to include a function called <code>main</code>; when you run the compiled program, the main function is the first thing that executes.</li>
			</SubList></li>
			<li>Compiling your program:<SubList>
				<li>Let's say the "Hello World" program is written in <code>hello.c</code>. In the terminal, type:</li>
				<li><CodePre>{`
gcc -o myprog hello.c
				`}</CodePre></li>
				<li>It will create an executable output file called <code>myprog</code>, and typing <code>myprog</code> in the terminal will say:</li>
				<li><CodePre>{`
Hello World!
				`}</CodePre></li>
				<li className="ownExplanation">If the output name is not mentioned, then the executable will be called <code>a.exe</code>.</li>
			</SubList></li>
			<li>Variables and arithmetic:<SubList>
				<li>In C, you need to have created it first, and at the time you create it, you have to set what type of value it's going to store.</li>
				<li>By doing the above, a block of memory of the correct size can be allocated by the compiler to hold the variable. This process of creating a variable is known as <b>declaration</b>.</li>
				<li>Integers:<SubList>
					<li>The most commonly used type is the <code>int</code> type, used to store an integer value.</li>
					<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
	int a;
	int b = 3;
	int c;
	a = 2;
	c = a + b;
	printf("The sum of adding %d and %d is %d\\n", a, b, c);
}
					`}</CodePre></li>
					<li>The top three lines are declarations.</li>
					<li>In the second line, we see an example of an <b>initialisation</b> at the same time as a declaration.</li>
					<li>Note that the values of <code>a</code> and <code>c</code> at this point are undefined.</li>
					<li>The three <code>%d</code> symbols inside the string are <b>format specifiers</b>.</li>
					<li>When the <code>printf</code> function is executed, each <code>%d</code> is replaced by a decimal representation (<code>d</code> for decimal integer) of the variable in the corresponding position in the list after the string. So the first <code>%d</code> will be replaced by the value of <code>a</code>, the second with the value of <code>b</code>, and the third with the value of <code>c</code>.</li>
				</SubList></li>
				<li>Floating-point numbers:<SubList>
					<li>To represent a variable like <code>a</code> as a floating-point, use the <code>float</code> type:</li>
					<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  float a;
  int b = 3;
  int c;
  a = 2;
  c = a + b;
  printf("The sum of adding %f and %d is %d\n", a, b, c);
}
					`}</CodePre></li>
					<li><code>%f</code> is the format specifier for floating-points.</li>
					<li>What happens if both <code>a</code> and <code>b</code> are non integer floats, while <code>c</code> is still an integer?</li>
					<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  float a;
  float b = 3.641;
  int c;
  a = 2.897;
  c = a + b;
  printf("The sum of adding %f and %d is %d\n", a, b, c);
}
					`}</CodePre></li>
					<li>Compiling and executing would give:</li>
					<li><CodePre>{`
The sum of adding 2.897000 and 3.641000 is 6
					`}</CodePre></li>
					<li>This is because since <code>c</code> is an integer, the compiler threw everything after the decimal point.</li>
					<li>You can set the number of decimal places to display for a floating-point type specifier in <code>printf</code> by putting a decimal point and the number of places between the <code>%</code> and the <code>f</code>: so <code>%.3f</code> will show a float value with three digits after the decimal point.</li>
				</SubList></li>
				<li>Character:<SubList>
					<li>The <code>char</code> type stores a single character.</li>
					<li>The ASCII character encoding uses a single value between 0 and 127 for each letter, number, and punctuation symbol, so a <code>char</code> is a single byte; it's really just an integer value which can only hold small numbers.</li>
					<li>The compiler allocates several bytes to store an integer or a float, but only allocates a single byte of memory to store a <code>char</code>.</li>
					<li>Both <code>char</code> and <code>int</code> can be used to store both positive and negative numbers, but by applying the unsigned modifier when one is declared, they can be restricted to only store positive values.</li>
					<li>So <code>char a</code> declares a variable which can hold values from -128 to 127, while <code>unsigned char a</code> declares a variable which can hold values from 0 to 255.</li>
					<li>If you have a <code>char</code> containing the value 100, and you add 30 to it, value your <code>char</code> will actually end up containing is -126, because values over 127 wrap around to the lowest value (-128) and start counting up from there.</li>
				</SubList></li>
				<li className="ownExplanation">To view other types and their format specifier, check the Wikipedia page: <a href='https://en.wikipedia.org/wiki/C_data_types'>C data types</a></li>
				<li>C allows shortcuts for some common operations; for example, instead of typing <code>a = a + 1</code>,  you can just enter <code>a++</code>. Or for <code>a = a * 3</code>, you can enter <code>a *= 3</code>.</li>
			</SubList></li>
			<li>Conditions and Comparisons:<SubList>
				<li>In C, the mechanism for controlling flow based on testing a condition is the if-else statement.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int a = 0;
  if (a == 0) {
    printf("a is equal to 0\\n");
  }
  else {
    printf ("a is not equal to 0\\n");
  }
}
				`}</CodePre></li>
				<li>Here, the keyword <code>if</code> is followed by a test enclosed in round brackets, in this case <code>(a == 0)</code>. If the test evaluates as true, the operations enclosed by the curly brackets after the test are executed.</li>
				<li>There's an <code>else</code> followed by another set of curly brackets; these contain the operations you want to execute if the original test evaluated as false.</li>
				<li>A single equals sign (=) assigns a variable; a double equals sign (==) tests a variable.</li>
				<li>The mathematical operators {">"} and {"<"} are used to test for "is greater than" and "is less than" respectively.</li>
				<li>You can combine tests with logical operators. The symbol <code>&&</code> is a Boolean AND (i.e. test whether both sides are true), and <code>||</code> is Boolean OR (i.e. test if either side is true). </li>
				<li>The operator <code>!</code> as a Boolean NOT.</li>
				<li>The <b>while</b> loop:<SubList>
					<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int a = 0;
  while (a < 5) {
    printf("a is equal to %d\\n", a);
    a++;
  }
  printf("a is equal to %d and I've finished\\n", a);
}
					`}</CodePre></li>
					<li>If the condition you test in a while loop never evaluates to false, your program will sit in the loop forever and never finish.</li>
					<li>Sometimes, we might want a loop which always runs at least once before a test is made.We can use the <b>do-while</b> loop here:</li>
					<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int a = 0;
  do {
    printf("a is equal to %d\\n", a);
    a++;
  } while (a < 5); 
  printf("a is equal to %d and I've finished\\n", a);
}
					`}</CodePre></li>
				</SubList></li>
			</SubList></li>
			<li>More flow control:<SubList>
				<li><b>For</b> loop example:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int a; 
  for (a = 0; a < 5; a++) {
    printf ("a is equal to %d\\n", a);
  } 
  printf ("a is equal to %d and I've finished\n", a);
}
				`}</CodePre></li>
				<li>First, <code>a</code> is set to 0. The test is then checked: is <code>a</code> (which is 0) less than 5? Yes it is, so the code inside the curly brackets is executed, and the value of a is printed. Finally, the increment is applied, meaning 1 is added to <code>a</code>.</li>
				<li>The test is then repeated. If true, the loop code is executed again, and the increment is again applied; this repeats over and over until the test is false, at which point execution continues after the closing curly bracket.</li>
				<li>You can initialise multiple variables in a for loop.</li>
				<li>A <b>switch</b> statement example:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main (void) {
  int a = 0;
  switch (a){
    case 0:
      printf("a is equal to 0\\n");
      break;
    case 1:
      printf("a is equal to 1\\n");
      break;
    default:
      printf("a is greater than 1\\n");               
  }
}
				`}</CodePre></li>
				<li>This works like multiple if statements.</li>
				<li>The final case is called <code>default</code>. every switch statement should include a default case as the final one in the list, and this is the code which is executed if none of the other cases matches.</li>
				<li>The keyword <code>break</code> tells the compiler that you want to "break out" of the switch statement at this point; that is, to stop executing code inside the switch and to resume execution after the closing curly bracket.</li>
				<li>. If you forget to include the <code>break</code> statements, every case after the one you wanted will execute, as well as the one you wanted.</li>
				<li>The <code>break</code> statement has one other use: it can be used inside while and for loops to break out of them.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main (void){   
  int a = 0;  
  while(1) {
    printf("a is equal to %d\\n", a);   
    a++;     
    if (a == 5){
      break;     
    }
  }
  printf("a is equal to %d and I've finished\n", a);
}
				`}</CodePre></li>
				<li>So we have a while loop in which the test is just the value 1; this is a non-zero value, and so is always true. If you enclose code inside curly brackets after a <code>while(1)</code> statement, the loop will never end; it will keep running forever.</li>
				<li>In the case above we test the value of <code>a</code> inside the loop itself in an if statement, and if <code>a</code> is equal to 5, we call <code>break</code>. This causes the loop to end and execution to continue with the statement after the loop.</li>
				<li>The keyword <code>continue</code> can be used in a loop instead of break, but instead of breaking out of the loop, it skips all the rest of the code in the current iteration, and returns to the test case at the start of the loop. </li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}}>
		<ul>
			<li>Pointers:<SubList>
				<li><CodePre language="c">{`
#include <stdio.h> 

void main (void){   
  int a;   
  int *ptr_to_a;  
  ptr_to_a = &a; 
  a = 5;   
  printf("The value of a is %d\\n", a);  
  *ptr_to_a = 6;   
  printf("The value of a is %d\\n", a);
  printf("The value of ptr_to_a is %d\\n", ptr_to_a);   
  printf("It stores the value %d\\n", *ptr_to_a);   
  printf("The address of a is %d\\n", &a); 
}
				`}</CodePre></li>
				<li>Look at the line <code>int *ptr_to_a;</code>: the asterisk (*) at the start of the variable name indicates that this is not declaring an integer variable, but a pointer to an integer variable.</li>
				<li><code>ptr_to_a</code> has no idea what (or where) <code>a</code> is, so we fix that with the next line (<code>{"ptr_to_a = &a;"}</code>).</li>
				<li> In C, the symbol <code>&</code> before a variable name means address of the variable, so <code>&a</code> means "the address in memory of the variable <code>a</code>".</li>
				<li>When declaring a variable, putting an asterisk before its name indicates that the variable is a pointer. But once the pointer exists, putting an asterisk in front of its name means "the variable pointed to by this pointer"; this is known as <b>dereferencing the pointer</b>.</li>
				<li>The line <code>*ptr_to_a = 6;</code> tells the compiler to set the variable pointed to by the pointer <code>ptr_to_a</code> to 6.</li>
				<li>In the line <code>printf("The value of ptr_to_a is %d\n", ptr_to_a);</code>, we're printing the value of <code>ptr_to_a</code>; not the value it's pointing at, but the value of the pointer itself. This prints a very large number, as it's the address in memory where a can be found. This is the same as <code>&a</code>.</li>
				<li>In the line <code>printf("It stores the value %d\\n", *ptr_to_a);</code>, we're printing the value pointed to by <code>ptr_to_a</code>; note the asterisk before the name. This prints the value of <code>a</code>.</li>
				<li>You can also define a pointer without saying what type of variable it's pointing to; this is a <b>void pointer</b>.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int intval = 255958283;   
  void *vptr = &intval;  
  printf("The value at vptr as an int: %d\\n", *((int *) vptr));   
  printf ("The value at vptr as a char: %d\\n", *((char *) vptr)); 
}
				`}</CodePre></li>
				<li>We initialise the void pointer <code>vptr</code> to point to an integer variable called <code>intval</code>. In the first <code>printf</code> statement, we insert (<code>int *</code>) in front of <code>vptr</code> before we dereference it using <code>*</code>. This casts <code>vptr</code> to an integer pointer, and so the value of <code>intval</code> is printed as an integer.</li>
				<li>In the second <code>printf</code> statement, we insert (<code>char *</code>) in front of <code>vptr</code> before we dereference it. This casts <code>vptr</code> to a char pointer, and so what's printed is the value of the char which makes up the first byte of <code>intval</code>.</li>
				<li className="ownExplanation">The last <code>printf</code> gives 11, because 255958283 % 256 = 11.</li>
				<li><code>(*a)++</code> increments the value pointed to by <code>a</code>, but <code>*(a++)</code> increments the pointer itself rather than the value it points <code>a</code>.</li>
				<li className="ownExplanation">Incrementing a pointer increments by the size of the variable rather than 1. For example, if <code>b</code> stores a <code>double</code> (which is of 8 bytes) and is at memory address <code>1673526400</code>, then <code>b+1</code> is at memory address <code>1673526408</code>.</li>
			</SubList></li>
			<li>Functions:<SubList>
				<li>Example of our own function:</li>
				<li><CodePre language="c">{`
#include <stdio.h> 

int sum (int a, int b) {
  int res;
  res = a + b;  
  return res; 
}

void main(void) {
  int y = 2; 
  int z = sum (5, y);
  printf("The sum of 5 and %d is %d\\n", y, z);
}
				`}</CodePre></li>
				<li>The definition of a function has three parts:<SubList opened>
					<li>The first part is the type of the value returned by the function: in this case, an <code>int</code>.</li>
					<li>The second part is the name of the function: in this case, <code>sum</code>.</li>
					<li>Finally, within round brackets are the arguments to the function, separated by commas, and each given with its type: in this case, two integer arguments, a and b.</li>
				</SubList></li>
				<li>The rest of the function is between the curly brackets.</li>
				<li>This declares a local variable for the function, an integer called <code>res</code>. This is a variable which can only be used locally, within the function itself.</li>
				<li>Variables declared within a function definition can only be used within that function; if you try to read or write <code>res</code> within the main function, you'll get an error. </li>
				<li>You could declare another <code>int</code> called <code>res</code> within the main function, but this would be a different variable called <code>res</code> from the one within the <code>sum</code> function.</li>
				<li>Note that <code>a</code> and <code>b</code> are the two defined arguments of the function. When a function is called, a local copy of the arguments is made and used within the function.</li>
				<li>If you change the values of <code>a</code> or <code>b</code> within the function (which is a perfectly valid thing to do), that only affects the value of <code>a</code> and <code>b</code> within this function; it doesn't change the values that the arguments had in the function from which it was called.</li>
				<li>The function was defined to return an integer, so it must call the <code>return</code> statement with an integer value.</li>
				<li>There's no need for a return statement in a function with a void return type: the function will return when it reaches the last line.</li>
				<li>If you declare a variable within a function, it's only usable within that function, not within any functions which call the function, or within functions called by the function. This is known as the <b>scope</b> of a variable: the parts of the code in which it's valid.</li>
				<li>Look at this next example:</li>
				<li><CodePre language="c">{`
#include <stdio.h> 

int sum_and_diff(int a, int b, int * res) {
  int sum = a + b;  
  *res = a - b;   
  return sum;
}

void main(void) {   
  int b = 2;   
  int diff;  
  printf("The sum of 5 and %d is %d\\n", b, sum_and_diff(5, b, &diff));   
  printf ("The difference of 5 and %d is %d\\n", b, diff); 
}

				`}</CodePre></li>
				<li>By passing a pointer, the function doesn't change the value of the pointer itself, but it can change the value in the variable to which it's pointing.</li>
				<li>So we call the function with the same two arguments as before, but we add a third one, a pointer to the variable where we want to write the difference calculated by the function. </li>
				<li>In the function, we have this line: <code>*res = a - b;</code>. The difference is written to the variable to which <code>res</code> is a pointer.</li>
				<li>In the <code>main</code> function, we call the <code>sum_and_diff</code> function like this: <code>sum_and_diff(5, b, &diff)</code> We provide the address of the integer <code>diff</code> as the pointer argument to the <code>sum_and_diff</code> function; when the difference is calculated, it's written into the variable <code>diff</code> in the <code>main</code> function.</li>
				<li>The compiler reads files from top to bottom, and you need to tell it about a function before you can use it.</li>
				<li>C allows you to declare functions before they are used. Example: <code>int sum_and_diff (int a, int b, int *res);</code>.</li>
			</SubList></li>
			<li>Arrays and strings:<SubList>
				<li>An <b>array</b> is a single variable which stores multiple different values of the same type; the individual values are accessed by indexing the array.</li>
				<li>An array can have one or more dimensions; a <b>one-dimensional array</b> is a single list of values, while a <b>two-dimensional array</b> is a list of lists of values, and so on.</li>
				<li>An array is declared in C by putting the size of each dimension in square brackets after the variable name. So, <code>int a[10];</code> is a list of ten integers, while <code>int b[5][6];</code> is a list of five lists, each of which contains six integers.</li>
				<li>So the ten integers contained within array <code>a</code> above are referred to as <code>a[0]</code>, <code>a[1]</code>, <code>a[2]</code>, and so on up to <code>a[9]</code>. The compiler will quite happily allow you to read or write <code>a[10]</code> or <code>a[11]</code>, but these are all outside the memory which was allocated when the array was declared, so writing to them is a really bad idea!</li>
				<li>The name of an array is effectively a pointer to the first element of the array. Remember that a pointer is the address of a variable in memory?</li>
				<li>Well, an array is a contiguous block of memory which contains all the elements of the array in order, so you can use a pointer to access it. In fact, even if you use values in square brackets to access it, the compiler treats those as a pointer anyway.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main (void) {
  int a[10]; 
  int count; 
  for (count = 0; count < 10; count++) {
    a[count] = count * 10 + count;   
  }
  printf("The first and second elements of a are %d and %d\\n", a[0], a[1]);   
  printf("Or, as pointers, %d and %d\\n", *a, *(a+1)); 
}
				`}</CodePre></li>
				<li>This fills the ten values of a with the numbers 0, 11, 22, 33, and so on, and then reads <code>a[0]</code> and <code>a[1]</code>. It then reads the same values using <code>a</code> as a pointer, and you can see if you run the code that they are identical.</li>
				<li><a href='https://qr.ae/p2Rh4U'>The operators operate on the address in the pointer in units of the number of bytes of the type of the pointer. So if a pointer is of type  <code>double*</code> then increments will be in units of 8 bytes.</a></li>
				<li>You can initialise an array at the same time as you declare it by putting the values in curly brackets: <code>{"int a[10] = { 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 };"}</code>.</li>
				<li>Note that this only works when the array is first declared; once it exists, you can't use this shortcut and will need to iterate through the array indices, setting each value in turn.</li>
				<li>In C, a string is just another array; it's an array of single characters.</li>
				<li>A string with ten characters would be: <code>char mystring[10];</code> Or, to initialise it at the same time: <code>char mystring[10] = "thestring";</code></li>
				<li>The memory required to hold the final zero (called the <b>string terminator</b>) must be allocated when you declare the string. So <code>mystring</code>, which is declared as an array of ten chars, can only actually hold text of nine or fewer letters.</li>
				<li>Here's an example of using pointers to join two strings together:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main (void) {
  char str1[10] = "first";
  char str2[10] = "second";
  char str3[20];
  char *src, *dst;  
  
  src = str1;   
  dst = str3;
  while (*src != 0) {  
    *dst = *src;     
    src++;     
    dst++;    
  }   
  
  src = str2; 
  while (*src != 0) {     
    *dst = *src;     
    src++;     
    dst++;    
  }   
  *dst = 0;  
  printf ("%s + %s = %s\\n", str1, str2, str3); 
}
				`}</CodePre></li>
				<li>The <code>sprintf</code> function is a version of the <code>printf</code> function which writes arbitrary text to string variables. The only difference is that the first argument it takes is the name of a string variable, and it writes to that instead of to the terminal:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main (void) {  
  int val = 12;   
  char string[50];  
  sprintf(string, "The value of val is %d\\n", val);  
  printf("%s", string); 
}
				`}</CodePre></li>
				<li>The <code>sprintf</code> function will automatically add the terminating zero at the end of any string you create with it.</li>
			</SubList></li>
			<li>String library:<SubList>
				<li>C provides a library of useful string functions, which save a lot of typing!</li>
				<li><CodePre language="c">{`
#include <stdio.h>
#include <string.h>

void main(void) {
  char str1[10] = "first";
  char str2[10] = "second";
  char str3[20];
  strcpy(str3, str1);
  strcat(str3, str2);
  printf("%s + %s = %s\\n", str1, str2, str3);
}
				`}</CodePre></li>
				<li><code>strcpy</code> (string copy) copies the string at the second argument to the start of string at the first argument.</li>
				<li><code>strcat</code> (string concatenate) does the same thing, but instead of copying to the start of the first argument, it finds the terminating zero of the first argument and starts copying to its location, thus joining the two strings together.</li>
				<li>The source and destination buffers for <code>strcpy</code> and <code>strcat</code> must be completely separate areas of memory; if not, their behaviour is unpredictable.</li>
				<li><code>strcmp</code> takes two strings as arguments, and returns a 0 if they're the same; it returns a non-zero value if not.</li>
				<li><CodePre language="c">{`
#include <stdio.h>
#include <string.h>

void main(void) {
  char str1[10] = "fire";
  char str2[10] = "first";
  int val = strcmp(str1, str2);
  if (val == 0) {
    printf("The two strings are identical.\\n");
  } else {
    printf("The two strings are different.\\n");
    printf("Return val: %d\\n", val);
  }
}
				`}</CodePre></li>
				<li><code>strncmp</code> (for 'string numbered compare') works in exactly the same way as <code>strcmp</code>, but it takes a third argument, an integer giving the number of characters to compare. So <code>strncmp("first", "fire", 4)</code> would return a non-zero value, while <code>strncmp("first", "fire", 3)</code> would return a 0.</li>
				<li>There are versions of <code>strcmp</code> and <code>strncmp</code> which ignore the case of the letters in the strings being compared; they're called <code>strcasecmp</code> and <code>strncasecmp</code>, respectively. </li>
				<li>We saw in the previous chapter that we can use <code>sprintf</code> to write variables into a string; what about being able to read variables back out of a string? The function <code>sscanf</code> ('string scan formatted') does that:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int val;
  char string[10] = "250";
  sscanf(string, "%d", &val);
  printf("The value in the string is %d\\n", val);
}
				`}</CodePre></li>
				<li><code>sscanf</code> uses exactly the same format specifiers as <code>printf</code>. One important difference, though, is that the arguments to <code>sscanf</code> must all be pointers to variables.</li>
				<li><code>sscanf</code> returns the number of values it successfully read.</li>
				<li>The format string supplied to sscanf can contain multiple format specifiers and even other text:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  int val;
  char result[10];
  char string[25] = "The first number is 1";
  if (sscanf(string, "The %s number is %d", result, &val) == 2) {
    printf("String: %s\\tValue: %d\\n", result, val);
  } else {
    printf("I couldn't find two values in that string.\\n");
  }
}
				`}</CodePre></li>
				<li>Note that, slightly inconsistently, the <code>%s</code> format specifier denotes a pointer to a string in both <code>printf</code> and <code>sscanf</code>, while the <code>%d</code> specifier denotes a variable in <code>printf</code> but a pointer in <code>sscanf</code>.</li>
				<li>One final useful string handling function is <code>strlen</code> (for 'string length'); as the name suggests, this tells you how many characters there are in a string, counting from the start to the terminating zero character.</li>
				<li><CodePre language="c">{`
#include <stdio.h>
#include <string.h>

void main(void) {
  char str1[10] = "first";
  printf(
    "The length of the string '%s' is %d\\n",
    str1,
    strlen(str1)
  );
}
				`}</CodePre></li>
			</SubList></li>
			<li>User input:<SubList>
				<li><code>scanf</code> reads values directly from the console:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  char input[256];
  int age;
  printf("What is your name, user?\\n");
  scanf("%s", input);
  printf("Hello, %s. How old are you?\\n", input);
  scanf("%d", &age);
  printf("Well, %s, you look young for %d...\\n", input, age);
}
				`}</CodePre></li>
				<li>If the user types in 257 characters when asked for their name, they will overflow the space allocated for the input string, and bad things may happen.</li>
				<li>A better approach is to read each line the user enters into a buffer string, and then use <code>sscanf</code> to read values from that string. The C library function <code>fgets</code> is useful for this. Have a look at this example: </li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  char input[256], name[256];
  int age;
  printf("What is your name, user?\\n");
  fgets(input, 256, stdin);
  sscanf(input, "%s", name);
  printf("Hello, %s. How old are you?\\n", name);
  while (1) {
    fgets(input, 256, stdin);
    if (sscanf(input, "%d", &age) == 1) break;
    printf("I don't recognise that as an age - try again!\\n");
  }
  printf("Well, %s, you look young for %d...\\n", name, age);
}
				`}</CodePre></li>
				<li><code>fgets</code> takes three arguments. The first is the buffer into which it should store the input. The second is the maximum number of bytes it will write into that buffer. Finally, it takes an argument telling it where to read from; in this case, this is set to <code>stdin</code> (short for 'standard input'), which tells it to read from the console.</li>
			</SubList></li>
		</ul>
	</div>
</div>

<h2 id="more_c_only">More C-Only Stuff</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}} data-source={64}>
		<ul>
			<li>Strict definition of <code>main</code>:<SubList>
				<li>The strict definition of <code>main</code> looks like this:</li>
				<li><CodePre language="c">{`
int main (int argc, char *argv[])
				`}</CodePre></li>
				<li>We can see that main returns an integer; this is a success or failure code which some operating systems can use for processing in a shell script or the like.</li>
				<li>Traditionally, if a program succeeds, <code>main</code> returns 0, and if it fails, it returns a non-zero error code.</li>
				<li><code>argc</code> is an integer, and this is the number of parameters which were provided on the command line when the program was started. Strangely, the number includes the program name itself, so this value is always 1 or more; if parameters were provided, it will be 2 or more.</li>
				<li><code>char *argv[]</code> is actually an array of pointers to characters; each element of the array is a string, and each string is one of the parameters provided to the program.</li>
				<li>Run this code to get better understanding:</li>
				<li><CodePre language="c">{`
#include <stdio.h>

int main(int argc, char * argv[]) {
  printf("%d\\n",argc);
  int paramNum = 0;
  while (paramNum < argc){
    printf("%s\\n",argv[paramNum]);
    paramNum++;
  }
  return  0;
}
				`}</CodePre></li>
			</SubList></li>
			<li>Reading a file:<SubList>
				<li>In C, files are accessed by use of <b>file pointers</b>.</li>
				<li>A file pointer contains all the information required to access a file: both its name and location on the file system, and the current position within the file at which data will be read or written.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  FILE *fp;
  int value;
  fp = fopen("C:/c_folder/input.txt", "rb");
  if (fp) {
    while (1) {
      value = fgetc(fp);
      if (value == EOF)
        break;
      else
        printf("%c", value);
    }
    fclose(fp);
  }
}
				`}</CodePre></li>
				<li>First, we declare a file pointer variable called <code>fp</code>, which has the type <code>FILE *</code>.</li>
				<li>We also declare an integer which we'll use to hold the characters read in from the file.</li>
				<li>We then create the file pointer using the command <code>fopen</code> (for 'file open'). We open the file at <code>C:/c_folder/input.txt</code>, and we set the mode to "rb", which indicates "read binary". This creates the file pointer and initialises it to the beginning of the file.</li>
				<li>We then check to see if the file pointer is non-zero; if the pointer is returned as zero, the file wasn't successfully opened. For a read, this usually indicates that the file doesn't exist.</li>
				<li>If the file pointer does exist, we call the function <code>fgetc</code> (for 'file get character') in a loop; each time this function is called, it reads a single byte from the file, and then advances the file pointer to the next byte in the file. When the file pointer reaches the end of the file, it returns the special value <code>EOF</code> (for 'end of file').</li>
				<li>Once we have finished reading the file, we finish access to it by calling <code>fclose</code> (for 'file close'), which frees the file pointer and allows you to reuse it to access another file.</li>
			</SubList></li>
			<li>Writing a file:<SubList>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  FILE *fp;
  int value;
  fp = fopen("C:/c_folder/input.txt", "wb");
  if (fp) {
    for (value = 48; value < 58; value++) {
      fputc(value, fp);
    }
    fclose(fp);
  }
}
				`}</CodePre></li>
				<li>In this case, we open the file with the mode "wb", which indicates 'write binary'. This opens the file for writing; if this file already exists, the contents are deleted.</li>
				<li>We then call the function <code>fputc</code> (for 'file put character') in a loop, writing the bytes 48, 49, ..., 57 to the file. These are the character codes for the text characters for the ten digits 0, 1, ..., 9.</li>
				<li>On some systems, when writing to the file system, the write doesn't actually complete until <code>fclose</code> is called; if your program doesn't call <code>fclose</code>, you might find that you write to files and nothing shows up.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  FILE *fp;
  int value;
  fp = fopen("C:/c_folder/input.txt", "wb");
  if (fp) {
    fprintf(fp, "This is some text.\n");
    fclose(fp);
  }
}
				`}</CodePre></li>
				<li><code>fprintf</code> works in exactly the same way as <code>sprintf</code>, but the first argument is a file pointer rather than a string.</li>
				<li>To append to a file instead of overwriting it, use the "ab" mode (short for 'append binary').</li>
				<li>The <code>fseek</code> (for 'file seek') function can be used to reposition the file pointer within the file.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  FILE *fp;
  int value;
  fp = fopen("C:/c_folder/input.txt", "rb");
  if (fp) {
    fseek(fp, 10, SEEK_CUR);
    while (1) {
      value = fgetc(fp);
      if (value == EOF)
        break;
      else
        printf("%c", value);
    }
    fclose(fp);
  }
}
				`}</CodePre></li>
				<li>The line <code>fseek(fp, 10, SEEK_CUR)</code> moves the file pointer 10 bytes ahead of the current position, so this program will print all but the first ten characters in the file.</li>
				<li>The third argument to <code>fseek</code> allows you to choose a position relative to the start of the file (SEEK_SET) or the end of the file (SEEK_END) rather than the current position (SEEK_CUR).</li>
				<li><code>fseek(fp, -17, SEEK_END)</code> positions it 17 bytes back from the end of the file.</li>
			</SubList></li>
			<li>Global variables:<SubList>
				<li>C also allows <code>global variables</code>; that is, variables which are defined outside all functions.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

int result;

void add(int a, int b) {
  result = a + b;
}

void main(void) {
  add(3, 4);
  printf("The result is %d\n", result);
}
				`}</CodePre></li>
				<li>The variable result is <b>global</b>. It can therefore be read or written within both functions.</li>
				<li>Local variables in functions are temporarily allocated space while the function is running, and the memory is freed up as soon as the function ends.</li>
				<li>Global variables are allocated space when the program starts, and that space isn't freed until the program ends; if you allocate enough of them, you can run out of memory on some systems.</li>
			</SubList></li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}} data-source={64}>
		<ul>
			<li>More on types:<SubList>
				<li>C allows you to define your own types, with what is known as a <b>typedef</b>.</li>
				<li>A typedef is a line of the format <code>{"typedef <existing type> <new name>"}</code>, usually put at the start of a program. For example: <code>{"typedef unsigned char BYTE;"}</code></li>
				<li>When we say this defines a new type, what it really does is to create an alias to an existing type.</li>
				<li>By convention, user-defined types are usually given names in capital letters. It's not compulsory, but it does help to distinguish them from variables when reading the code.</li>
				<li>Often, there's a use for a variable which can only take one of a few possible values. C provides a type called <code>enum</code> for this purpose, which defines an integer with a fixed set of named values.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

typedef enum {
  false,
  true
} BOOLEAN;

void main(void) {
  BOOLEAN b_var;
  b_var = false;
  if (b_var == true) {
    printf("TRUE\\n");
  } else {
    printf("FALSE\\n");
  }
}
				`}</CodePre></li>
				<li>When you create an enum, the compiler assigns a numeric value to each of the possible values. By default, it numbers the first in the list as 0 and counts up from there. You can override this by putting an equals sign after each named value and setting it to the value you want.</li>
				<li>The other really useful thing you can do with a typedef is to use it to define a <b>data structure</b>. This is a collection of individual variables which are grouped together, allowing you to pass the structure between functions rather than the individual variables.</li>
				<li><CodePre language="c">{`
#include <stdio.h>

typedef struct {
  int inval1;
  int inval2;
  int outval;
} MY_DATA;

void add(MY_DATA *d) {
  d->outval = d->inval1 + d->inval2;
}

void main(void) {
  MY_DATA data;
  data.inval1 = 5;
  data.inval2 = 7;
  add(&data);
  printf("The sum of %d and %d is %d", data.inval1, data.inval2, data.outval);
}
				`}</CodePre></li>
				<li>The definition of the structure consists of the keyword <code>struct</code> with a list of variables enclosed by curly brackets; in this case, the structure consists of three integer variables.</li>
				<li>A structure can contain other new types (plain types, enums, or indeed other structures); just make sure the typedefs for them occur before the typedef of the structure in which you want to include them.</li>
				<li>In the main function, we declare an instance of the structure as a variable called <code>data</code> of type <code>MY_DATA</code>. We then access the individual elements of the structure by giving the name of the structure variable (<code>data</code>), a full stop (.), and the name of the specific element. So the line <code>data.inval1 = 5</code> sets the value of the element <code>inval1</code> of <code>data</code> to 5.</li>
				<li>To access the elements of a structure from a pointer to it, we replace the full stop with an arrow {"(->)"}.</li>
				<li data-source={15}><b>Unions</b> are like structs, but the member occupy the same memory.</li>
				<li data-source={15}><CodePre language="c">{`
union {
	int i;
	double d;
} u;
				`}</CodePre></li>
				<li data-source={15}>The programmer can access either <code>u.i</code> or <code>u.d</code>, but not both at the same time. Since <code>u.i</code> and <code>u.d</code> occupy the same area of memory, modifying one modifies the value of the other.</li>
				<li data-source={15}>The size of a union is the size of its largest member.</li>
			</SubList></li>
			<li>Header files:<SubList>
				<li><code>gcc</code> actually does two things: first, it compiles your C source file into what's called an <b>object file</b>, and then it links the object file with all the library functions to create the executable. This second step is performed by a program called a <b>linker</b>; <code>gcc</code> actually does both jobs.</li>
				<li>If you've separated your code into separate files (usually referred to as <b>modules</b>), you'll have some files which make calls to functions in other files in order to work.</li>
				<li>These files don't find out about each other until the linker operates on them; the files are compiled individually, and the compiler will complain if you use functions in a file it doesn't know about.</li>
				<li>We fix this using <b>header files</b>. These are files with the extension <code>.h</code> which hold the declarations of functions (and global variables) defined in a module, so that the compiler can be told about them when they're used by another module.</li>
				<li><CodePre language="c">{`	
//function.c
int add_vals (int a, int b, int c) { return a + b + c; }

//function.h
extern int add_vals (int a, int b, int c);

//main.c
#include <stdio.h>
#include "function.h"

void main (void) {   
  printf ("The total is %d", add_vals (1, 2, 3)); 
}
				`}</CodePre></li>
				<li>To use all three files in the same directory and run gcc: <code>gcc -o myprog main.c function.c</code>.</li>
				<li>The word <b>extern</b> tells the compiler that this function is to be found externally to the file, i.e. in another C file.</li>
				<li>In "include" part of <code>main.c</code>, the {"<>"} signs tell the compiler to look for the file in the directory where the system's include files are stored; the "" signs indicate that the file is local and is in the same directory as the <code>.c</code> files you're building.</li>
				<li>If you have a project with tens or hundreds of C files, typing all their names in the call to <code>gcc</code> every time would be a bit tedious! Large projects are built with a tool called <b>make</b>, which stores build instructions in a <b>Makefile</b>.</li>
			</SubList></li>
			<li>The preprocessor:<SubList>
				<li><code>#include</code> an instruction to the <b>preprocessor</b>, which is the first stage of compiling; it substitutes text within source files before passing them to the compiler itself.</li>
				<li>The preprocessor is controlled with what are called directives; these are easy to spot, as they all start with a # sign.</li>
				<li>The <code>#include</code> directive instructs the preprocessor to replace the line with the file which it's including. So in our example above, the line <b>#include "function.h"</b> in the <code>.c</code> file gets replaced with the contents of the file <b>function.h</b>.</li>
				<li><code>#define</code>:<SubList>
					<li>Another useful directive is #define, which can be used to define constant values.</li>
					<li><CodePre language="c">{`
#include <stdio.h>

#define PI 3.14159

void main(void) {
  float rad = 3;
  float circ = rad * 2 * PI;
  float area = rad * rad * PI;
  printf("The circumference of a circle radius %f is %f\\n", rad, circ);
  printf("The area of a circle radius %f is %f", rad, area);
}					
					`}</CodePre></li>
					<li>The directive <code>#define</code> is used to set the value of pi. The important thing to remember is that <code>PI</code> isn't a variable; it's text that will be substituted by the preprocessor.</li>
					<li>You can also <code>#define</code> functions:</li>
					<li><CodePre language="c">{`
	#include <stdio.h>

#define ADD(a, b) (a + b)

void main(void) {
  printf("The sum of %d and %d is %d\\n", 5, 2, ADD(5, 2));
  printf("The sum of %d and %d is %d\\n", 3, 7, ADD(3, 7));
}
					`}</CodePre></li>
					<li>Again, this does a text substitution; whenever <code>ADD(a,b)</code> appears in the code, it's replaced by <code>(a+b)</code>, with the values of <code>a</code> and <code>b</code> replaced by the arguments to <code>ADD</code>.</li>
					<li>If you use #define for text strings, they should be enclosed in double quotes, otherwise the replaced text will end at the first space.</li>
				</SubList></li>
				<li><code>#if</code>:<SubList>
					<li><CodePre language="c">{`
#include <stdio.h>

void main(void) {
  #if 0 printf("Some code\\n");
  #else printf("Some other code");
  #endif
}
					`}</CodePre></li>
					<li>With a 0 after the <code>#if</code>, the code between the <code>#if</code> and the <code>#else</code> doesn't get called, but the code between the <code>#else</code> and the <code>#endif</code> does.</li>
					<li>If you change the value after the <code>#if</code> to a 1, the code between the <code>#if</code> and the <code>#else</code> does get called, but the code between the <code>#else</code> and the <code>#endif</code> doesn't. This is a really useful trick to temporarily remove or replace a piece of code when you're debugging.</li>
					<li><a href='https://stackoverflow.com/questions/16438721/if-and-if-which-one-is-better-to-use'>If you use the normal <code>if</code> statement, the condition is evaluated at runtime, and the code for both branches exists within the compiled program. The condition can be based on runtime information, such as the state of a variable. <code>if</code> is for standard flow control in a program.</a></li>
					<li><a href='https://stackoverflow.com/questions/16438721/if-and-if-which-one-is-better-to-use'>If you use the preprocessor's <code>#if</code>, the condition is evaluated at compile-time, and the code for the false branch is not included in the compiled program.</a></li>
				</SubList></li>
			</SubList></li>
		</ul>
	</div>
</div>


</>