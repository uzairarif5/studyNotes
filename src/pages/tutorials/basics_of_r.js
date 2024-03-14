import SubList from "../../articleRelatedStuff/SubList";
import { getSourcesOL } from "../../articleRelatedStuff/sourcesManager";
import { CodePre } from "../../articleRelatedStuff/Code";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";

export const title = "Data Mining With R";
export const sourcesColor = {38: null, 39: null};
export const content = <>
  <h1>Data Mining With R</h1>
  <div id="date"><b>Last Edit:</b> {document.lastModified}</div>
	{getSourcesOL(sourcesColor)}
	<h2 id="introduction">Introduction</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul>
        <li>The entities that R creates and manipulates are known as <b>objects</b>. These may be variables, arrays of numbers, character strings, functions, or more general structures built from such components.</li>
      </ul>
      <h3>Vectors</h3>
      <ul>
        <li>Vectors and assignment:<SubList>
          <li>R operates on named data structures. The simplest such structure is the numeric <b>vector</b>, which is a single entity consisting of an ordered collection of numbers. To set up a vector named <code>x</code>, say, consisting of five numbers, namely 10.4, 5.6, 3.1, 6.4 and 21.7, use the R command:</li>
          <li><CodePre language="r">{'x <- c(10.4, 5.6, 3.1, 6.4, 21.7)'}</CodePre></li>
          <li>This is an <i>assignment</i> statement using the function <code>c()</code>. Assignments can also be made in the other direction:</li>
          <li><CodePre language="r">{'c(10.4, 5.6, 3.1, 6.4, 21.7) -> x'}</CodePre></li>
          <li>An equivalent way of making the same assignment as above is with:</li>
          <li><CodePre language="r">{'assign("x", c(10.4, 5.6, 3.1, 6.4, 21.7))'}</CodePre></li>
          <li>If an expression is used as a complete command, the value is printed. So now if we were to use the command:</li>
          <li><CodePre language="r" startingLineNumber={2}>{'1/x'}</CodePre></li>
          <li>the reciprocals of the five values would be printed at the terminal.</li>
          <li><CodePre>{'[1] 0.09615385 0.17857143 0.32258065 0.15625000 0.04608295'}</CodePre></li>
          <li>A number occurring by itself in an expression is taken as a vector of length one. The further assignment <code>{"y <- c(x, 0, x)"}</code> would create a vector <code>y</code> with 11 entries consisting of two copies of x with a zero in the middle place.</li>
        </SubList></li>
        <li>Vector arithmetic:<SubList>
          <li>Vectors can be used in arithmetic expressions, in which case the operations are performed element by element. Shorter vectors in the expression are <i>recycled</i> until they match the length of the longest vector.</li>
          <li><CodePre language="r" startingLineNumber={4}>{'v <- 2*x + y + 1'}</CodePre></li>
          <li>This above command generates a new vector <code>v</code> of length 11 constructed by adding together, element by element, <code>2*x</code> repeated 2.2 times, y repeated just once, and 1 repeated 11 times.</li>
          <li>The elementary arithmetic operators are the usual +, -, *, / and ^ for raising to a power. <code>log</code>, <code>exp</code>, <code>sin</code>, <code>cos</code>, <code>tan</code>, <code>sqrt</code>, and so on, all have their usual meaning. <code>max</code> and <code>min</code> select the largest and smallest elements of a vector respectively. <code>sort(x)</code> returns a vector of the same size as x with the elements arranged in increasing order.</li>
          <li>Two statistical functions are <code>mean(x)</code> which calculates the sample mean and <code>var(x)</code> which gives <code>sum((x-mean(x))^2)/(length(x)-1)</code>.</li>
        </SubList></li>
        <li>Generating regular sequences:<SubList>
          <li><code>1:30</code> is the vector <code>c(1, 2, …, 29, 30)</code>.</li>
          <li><code>seq(1,30)</code>, <code>seq(from=1, to=30)</code> and <code>seq(to=30, from=1)</code> are all the same as <code>1:30</code>. The arguments to <code>seq()</code> may be named <code>by=value</code> and <code>length=value</code>, which specify a step size and a length for the sequence respectively. If neither of these is given, the default <code>by=1</code> is assumed.</li>
          <li><CodePre language="r">{`
seq(-1, 3, by=.5) 
seq(length=12, from=-5, by=.2) 
          `}</CodePre></li>
          <li><CodePre>{`
[1] -1.0 -0.5  0.0  0.5  1.0  1.5  2.0  2.5  3.0 
[1] -5.0 -4.8 -4.6 -4.4 -4.2 -4.0 -3.8 -3.6 -3.4 -3.2
          `}</CodePre></li>
          <li>A related function is <code>rep()</code> which can be used for replicating an object:</li>
          <li><CodePre language="r">{`
x = c(1,2,5)
rep(x, times=5) 
rep(x, each=5)
          `}</CodePre></li>
          <li><CodePre>{`
[1] 1 2 5 1 2 5 1 2 5 1 2 5 1 2 5
[1] 1 1 1 1 1 2 2 2 2 2 5 5 5 5 5
          `}</CodePre></li>
        </SubList></li>
        <li>Logical vectors:<SubList>
          <li>As well as numerical vectors, R allows manipulation of logical quantities. The elements of a logical vector can have the values <code>TRUE</code>, <code>FALSE</code>, and <code>NA</code> ("not available").</li>
          <li>Logical vectors are generated by conditions. For example: <code>{"temp <- x > 13"}</code> sets temp as a vector of the same length as <code>x</code> with values <code>FALSE</code> corresponding to elements of <code>x</code> where the condition is not met and <code>TRUE</code> where it is.</li>
          <li>In addition if <code>c1</code> and <code>c2</code> are logical expressions, then <code>c1 & c2</code> is their intersection ("and"), <code>c1 | c2</code> is their union ("or"), and <code>!c1</code> is the negation of <code>c1</code>.</li>
        </SubList></li>
        <li>Missing values:<SubList>
          <li>When an element or value is "not available", a place within a vector may be reserved for it by assigning it the special value <code>NA</code>. Any operation on an <code>NA</code> becomes an <code>NA</code>.</li>
          <li>There is a second kind of "missing" values which are produced by numerical computation, the so-called <i>Not a Number</i>, <code>NaN</code>, values. For example, <code>0/0</code> gives <code>NaN</code>.</li>
          <li>The function <code>is.na(x)</code> gives a logical vector of the same size as x with value <code>TRUE</code> if and only if the corresponding element in <code>x</code> is <code>NA</code> or <code>NaN</code>. <code>is.nan(x)</code> is only <code>TRUE</code> for <code>NaN</code>s.</li>
        </SubList></li>
        <li>Character vectors:<SubList>
          <li>Character strings are entered using either matching double (") or single (') quotes.</li>
          <li>Character vectors may be concatenated into a vector by the <code>c()</code> function.</li>
          <li>The <code>paste()</code> function takes an arbitrary number of arguments and concatenates them one by one into character strings. The command <code>paste(c("X","Y"), 1:10, sep="-")</code> gives:</li>
          <li><CodePre>{`
[1] "X-1"  "Y-2"  "X-3"  "Y-4"  "X-5"  "Y-6"  "X-7"  "Y-8"  "X-9"  "Y-10"
          `}</CodePre></li>
        </SubList></li>
        <li>Vectors are known as "atomic" structures since their components are all of the same type, or <i>mode</i>.</li>
      </ul>
      <h3>Intrinsic Attributes</h3>
      <ul>
        <li>Mode and length:<SubList>
          <li>By the <b>mode</b> of an object we mean the basic type of its fundamental constituents. This is a special case of a "property" of an object. Another property of every object is its length. The functions <code>mode(object)</code> and <code>length(object)</code> can be used to find out the mode and length of any defined structure</li>
          <li>An "empty" object may still have a mode.</li>
        </SubList></li>
        <li>Recursive structures:<SubList>
          <li>R also operates on objects called <b>lists</b>, which are of mode <i>list</i>. These are ordered sequences of objects which individually can be of any mode. lists are known as "recursive" rather than atomic structures since their components can themselves be lists in their own right.</li>
          <li>The other recursive structures are those of mode <i>function</i> and <i>expression</i>.</li>
        </SubList></li>
        <li>The class of an object:<SubList>
          <li>A special attribute known as the <b>class</b> of the object is used to allow for an object-oriented style of programming in R.  For example if an object has class "data.frame", it will be printed in a certain way, the <code>plot()</code> function will display it graphically in a certain way, and other so-called generic functions such as <code>summary()</code> will react to it as an argument in a way sensitive to its class.</li>
        </SubList></li>
      </ul>
      <h3>Factors</h3>
      <ul>
        <li>Basics:<SubList>
          <li><b>Factors</b> are similar to vectors but where each element is categorical, i.e. one of a fixed number of possibilities (or <b>levels</b>). <code>factor()</code> transforms a vector into a factor.</li>
          <li><CodePre language="r">{`
factor(c("yes","no","yes","maybe","maybe","no","maybe","no","no"))
          `}</CodePre></li>
          <li><CodePre>{`
[1] yes   no    yes   maybe maybe no    maybe no    no   
Levels: maybe no yes
          `}</CodePre></li>
          <li>A factor can also be ordered with the option <code>ordered=TRUE</code> or the function <code>ordered()</code>.</li>
          <li><CodePre language="r">{`
factor(c("yes","no","yes","maybe","maybe","no","maybe","no","no"), ordered = TRUE)
          `}</CodePre></li>
          <li><CodePre>{`
[1] yes   no    yes   maybe maybe no    maybe no    no   
Levels: maybe < no < yes
          `}</CodePre></li>
        </SubList></li>
        <li><code>tapply()</code>:<SubList>
          <li>Suppose, for example, we have a sample of 30 tax accountants from Australia and their individual state of origin is specified by a character vector:</li>
          <li><CodePre language="r">{`
state <- c("tas", "sa",  "qld", "nsw", "nsw", "nt",  "wa",  "wa",
"qld", "vic", "nsw", "vic", "qld", "qld", "sa",  "tas",
"sa",  "nt",  "wa",  "vic", "qld", "nsw", "nsw", "wa",
"sa",  "act", "nsw", "vic", "vic", "act")
statef <- factor(state)
          `}</CodePre></li>
          <li>Suppose we have the incomes of the same tax accountants in another vector:</li>
          <li><CodePre language="r">{`
incomes <- c(60, 49, 40, 61, 64, 60, 59, 54, 62, 69, 70, 42, 56,
61, 61, 61, 58, 51, 48, 65, 49, 49, 41, 48, 52, 46,
59, 46, 58, 43)
          `}</CodePre></li>
          <li>To calculate the sample mean income for each state we can now use the special function <code>tapply()</code>:</li>
          <li><CodePre language="r">{`
incmeans <- tapply(incomes, statef, mean)
          `}</CodePre></li>
          <li><CodePre>{`
act      nsw       nt      qld       sa      tas      vic       wa 
44.50000 57.33333 55.50000 53.60000 55.00000 60.50000 56.00000 52.25000 
          `}</CodePre></li>
          <li>The function <code>tapply()</code> is used to apply a function, here <code>mean()</code>, to each group of components of the first argument, here <code>incomes</code>, defined by the levels of the second component, here <code>statef</code>.</li>
        </SubList></li>
        <li>Frequency tables:<SubList>
          <li>Use <code>table()</code> to get frequency tables, so <code>table(statef)</code> gives:</li>
          <li><CodePre>{`
statef
act nsw  nt qld  sa tas vic  wa 
  2   6   2   5   4   2   5   4
          `}</CodePre></li>
        </SubList></li>
      </ul>
    </div>
    <div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
      <h3>Matrices And Arrays</h3>
      <ul>
        <li>Matrix:<SubList>
          <li>If you want to create a new matrix, one way is to use the <code>matrix()</code> function. You have to enter a vector of data, the number of rows and/or columns and finally you can specify if you want R to read your vector by row or by column (the default option).</li>
          <li><CodePre language="r">{`
matrix(data = 1:15, nrow = 5, ncol = 5, byrow = TRUE)
          `}</CodePre></li>
          <li><CodePre>{`
     [,1] [,2] [,3] [,4] [,5]
[1,]    1    2    3    4    5
[2,]    6    7    8    9   10
[3,]   11   12   13   14   15
[4,]    1    2    3    4    5
[5,]    6    7    8    9   10
          `}</CodePre></li>
          <li>Functions <code>cbind()</code> and <code>rbind()</code> combine vectors into matrices in a column by column or row by row mode:</li>
          <li><CodePre language="r">{`
v1 <- 1:5
v2 <- 5:1
cbind(v1,v2)
rbind(v1,v2)
          `}</CodePre></li>
          <li><CodePre>{`
     v1 v2
[1,]  1  5
[2,]  2  4
[3,]  3  3
[4,]  4  2
[5,]  5  1
   [,1] [,2] [,3] [,4] [,5]
v1    1    2    3    4    5
v2    5    4    3    2    1
          `}</CodePre></li>
          <li>The dimension of a matrix can be obtained using the <code>dim()</code> function. Alternatively <code>nrow()</code> and <code>ncol()</code> returns the number of rows and columns in a matrix.</li>
          <li>Function <code>t()</code> transposes a matrix.</li>
          <li>The operator <code>%*%</code> is used for matrix multiplication. If, for example, <code>A</code> and <code>B</code> are square matrices of the same size, then <code>A*B</code> is the matrix of element by element products and <code>A %*% B</code> is the matrix product.</li>
          <li><code>A^{-1}</code> denotes the inverse of <code>A</code>.</li>
        </SubList></li>
        <li>Arrays:<SubList>
          <li><b>Arrays</b> are similar to matrices but can have more than 2 dimensions. A three dimensional array - 3 by 3 by 3 - may be created as follows.</li>
          <li><CodePre language="r">{`
z <- array(1:27,dim=c(3,3,3))
z
          `}</CodePre></li>
          <li><CodePre>{`
, , 1

     [,1] [,2] [,3]
[1,]    1    4    7
[2,]    2    5    8
[3,]    3    6    9

, , 2

     [,1] [,2] [,3]
[1,]   10   13   16
[2,]   11   14   17
[3,]   12   15   18

, , 3

     [,1] [,2] [,3]
[1,]   19   22   25
[2,]   20   23   26
[3,]   21   24   27
          `}</CodePre></li>
          <li>Arrays indexing:</li>
          <li><CodePre>{`
> z[,,3]
     [,1] [,2] [,3]
[1,]   19   22   25
[2,]   20   23   26
[3,]   21   24   27

> z[,3,3]
[1] 25 26 27

> z[3,3,3]
[1] 27

> z[,c(2,3),c(2,3)]
, , 1

     [,1] [,2]
[1,]   13   16
[2,]   14   17
[3,]   15   18

, , 2

     [,1] [,2]
[1,]   22   25
[2,]   23   26
[3,]   24   27
`}</CodePre></li>
        </SubList></li>
      </ul>

      <h3>Lists</h3>
      <ul>
        <li>Basics:<SubList>
          <li>An R <b>list</b> is an object consisting of an ordered collection of objects known as its <b>components</b>.</li>
          <li>Components are always numbered, and may also be named. Here is a simple example of how to make a list:</li>
          <li><CodePre>{`
Lst <- list(name="Fred", wife="Mary", no.children=3,
child.ages=c(4,7,9))
          `}</CodePre></li>
        </SubList></li>
        <li>Referencing:<SubList>
          <li>If <code>Lst</code> is the name of a list with four components, these may be individually referred to as <code>Lst[[1]]</code>, <code>Lst[[2]]</code>, <code>Lst[[3]]</code> and <code>Lst[[4]]</code>. If, further, <code>Lst[[4]]</code> is a vector subscripted array then <code>Lst[[4]][1]</code> is its first entry.</li>
          <li>Components can also be referenced by name:</li>
          <li><CodePre>{`
> Lst$name
[1] "Fred"
> Lst$child.ages[1]
[1] 4
          `}</CodePre></li>
          <li><code>[[…]]</code> is the operator used to select a single element, whereas <code>[…]</code> is a general subscripting operator. Thus the former is the first object in the list <code>Lst</code>, and if it is a named list the name is not included. The latter is a sublist of the list <code>Lst</code> consisting of the first entry only. If it is a named list, the names are transferred to the sublist.</li>
          <li><CodePre>{`
> Lst[[1]]
[1] "Fred"
> Lst[1]  
$name
[1] "Fred"
          `}</CodePre></li>
        </SubList></li>
      </ul>

      <h3>Data Frames</h3>
      <ul>
        <li>Basics:<SubList>
          <li>A <b>dataframe</b> is like a matrix but does not assume that all columns have the same type.</li>
          <li><CodePre language="r">{`
v1 <- 1:5
v2 <- c(T,T,F,F,T)
df <- data.frame(v1,v2)
          `}</CodePre></li>
          <li><CodePre>{`
  v1    v2
1  1  TRUE
2  2  TRUE
3  3 FALSE
4  4 FALSE
5  5  TRUE
          `}</CodePre></li>
          <li>The columns of the data frame can be accessed using integer subscripts or the column name:</li>
          <li><CodePre>{`
> df[,1]
[1] 1 2 3 4 5
> df$v2
[1]  TRUE  TRUE FALSE FALSE  TRUE
          `}</CodePre></li>
          <li>Naming each vector:</li>
          <li><CodePre language="r">{`
df <- data.frame(foo=1:5,bar=c(T,T,F,F,T))
          `}</CodePre></li>
          <li><CodePre>{`
  foo   bar
1   1  TRUE
2   2  TRUE
3   3 FALSE
4   4 FALSE
5   5  TRUE
          `}</CodePre></li>
        </SubList></li>
      </ul>
      <h3>Functions</h3>
      <ul>
        <li>Basics:<SubList>
          <li><code>functions</code> are also objects in R.</li>
          <li><CodePre language='r'>{`
square <- function(x){
  x2 <- x^2
  return(x2)
}
          `}</CodePre></li>
          <li><CodePre>{`
> square(x=5)
[1] 25
          `}</CodePre></li>
        </SubList></li>
      </ul>
      <h3>Control Flow</h3>
      <ul>
        <li>Conditional statements:<SubList>
          <li><CodePre language='r'>{`
x <- 2  # x gets the value 2
if(x==3){
  print("This is true")
} else {
  print("This is false")
}
// result is "This is false"
          `}</CodePre></li>
          <li>The <code>ifelse()</code> command takes as first argument the condition, as second argument the treatment if the condition is true and as third argument the treatment if the condition is false.</li>
          <li><CodePre language='r'>{`
x <- 1:10             
ifelse(x<5 | x>8, x, 0)  
          `}</CodePre></li>
          <li><CodePre>{`
[1]  1  2  3  4  0  0  0  0  9 10
          `}</CodePre></li>
        </SubList></li>
        <li>Implicit loops:<SubList>
          <li>R has support for implicit loops, which is called <b>vectorization</b>. This is built-in to many functions and standard operators.</li>
          <li><code>apply()</code> can apply a function to elements of a matrix or an array.</li>
          <li><code>lapply()</code> applies a function to each column of a dataframe and returns a list.</li>
          <li><code>sapply()</code> is similar but the output is simplified. It may be a vector or a matrix depending on the function.</li>
          <li><code>tapply()</code> applies the function for each level of a factor.</li>
        </SubList></li>
        <li>Explicit loops:<SubList>
          <li>R provides three ways to write loops: <code>for</code>, <code>repeat</code> and <code>while</code>.</li>
          <li><CodePre language='r'>{`
for (k in 1:5){
  print(k)
}
          `}</CodePre></li>
          <li><CodePre>{`
[1] 1
[1] 2
[1] 3
[1] 4
[1] 5
          `}</CodePre></li>
          <li><CodePre language='r'>{`
g <- 0
while (g < 1){
  g <- rnorm(1) #random sampling from the normal distribution
  print(g)
}
          `}</CodePre></li>
          <li><CodePre>{`
[1] -1.647396
[1] 0.9659088
[1] 0.5818814
[1] 1.708554 
          `}</CodePre></li>
          <li>Use <code>break</code> to break out of a loop:</li>
          <li><CodePre language='r'>{`
repeat { 
  g <- rnorm(1) 
  print(g)
  if (g > 1.0) break 
}
          `}</CodePre></li>
          <li><CodePre>{`
[1] -0.3810773
[1] -0.7393373
[1] 2.459242
          `}</CodePre></li>
          <li>The <code>next</code> keyword allows you to skip one cycle:</li>
          <li><CodePre language='r'>{`
for (k in 1:10) { 
  if(k==8) {
    print("skipped")
    next
  }
  print(k)
}
          `}</CodePre></li>
          <li><CodePre>{`
[1] 1
[1] 2
[1] 3
[1] 4
[1] 5
[1] 6
[1] 7
[1] "skipped"
[1] 9
[1] 10
          `}</CodePre></li>
        </SubList></li>
      </ul>
      <h3>Model Formula</h3>
      <ul>
        <li>The operator ~ is used to define a <i>model formula</i> in R:<SubList>
          <li>The form, for an ordinary linear model, is: <code>response ~ op_1 term_1 op_2 term_2 op_3 term_3 ...</code></li>
          <li><code>response</code> is a vector or matrix, (or expression evaluating to a vector or matrix) defining the response variable(s).</li>
          <li><code>op_i</code> is an operator, either + or -, implying the inclusion or exclusion of a term in the model, (the first is optional).</li>
          <li><code>I(M)</code>: Insulate M. Inside M all operators have their normal arithmetic meaning, and that term appears in the model matrix.</li>
        </SubList></li>
      </ul>
    </div>
  </div>
  <h2 id="data_visualization">Data Visualization</h2>
  <div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul>
        <li><a href='https://cran.r-project.org/web/packages/lattice/lattice.pdf'>The <b>lattice</b> package is a powerful and elegant high-level data visualization system with an emphasis on multivariate data.</a></li>
      </ul>
      <ul className="ownExplanation">
        <li>Loading CSVs, making bivariate plots and saving to a png:<SubList>
          <li>I am going to use this data: (<a href='https://www.kaggle.com/datasets/rashikrahmanpritom/heart-attack-analysis-prediction-dataset'>https://www.kaggle.com/datasets/rashikrahmanpritom/heart-attack-analysis-prediction-dataset</a>). You can read what the column values mean.</li>
          <li>We can load the lattice package and the play store data like this:</li>
          <li><CodePre language='r'>{`
library(lattice) #use lattice package
data <- read.csv("heart.csv") #read csv file
          `}</CodePre></li>
          <li>For the sex, 0 = female and 1 = male.</li>
          <li><code>table(data$cp)</code> gives us:</li>
          <li><CodePre>{`
  0   1   2   3
143  50  87  23
          `}</CodePre></li>

          <li>We can plot a barchart using <code>barchart(table(data$cp))</code>. For a larger font, use <code>barchart(table(data$cp), scales=list(cex=c(2,2)))</code>.</li>
          <li><ImgComp src={require("./basics_of_r_pics/1.png")} style={{width: "60%"}}/></li>
          <li><code>table(data$cp,data$sex)</code> will give this output:</li>
          <li><CodePre>{`
    0   1
0  39 104
1  18  32
2  35  52
3   4  19
          `}</CodePre></li>
          <li><code>barchart(table(data$cp,data$sex), scales=list(cex=c(2,2)))</code> will produce:</li>
          <li><ImgComp src={require("./basics_of_r_pics/2.png")} style={{width: "60%"}}/></li>
          <li>For different colors, we can use <code>barchart(table(data$cp,data$sex), scales=list(cex=c(2,2)), col=c("red","purple"))</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/3.png")} style={{width: "60%"}}/></li>
          <li>You can add more setting like <code>groups=FALSE</code> and <code>horizontal=FALSE</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/4.png")} style={{width: "60%"}}/></li>
          <li>The <code>png()</code> function allows you to plot on a custom png image. I can be used like this:</li>
          <li><CodePre language='r'>{`
library(lattice) #use lattice package
data <- read.csv("heart.csv")

png(filename = "output.png",width = 400, height = 400, units = "px")
barchart(table(data$cp,data$sex), groups=FALSE, horizontal=FALSE)
dev.off() #shuts off a graphic device   
          `}</CodePre></li>
          <li>The <code>dev.off()</code> is needed at the end. The above program results in this:</li>
          <li><ImgComp src={require("./basics_of_r_pics/12.png")} style={{width: "70%"}}/></li>
          <li><code>xyplot</code> produces a bivariate scatterplots.</li>
          <li>The input formula of the form <code>y ~ x | g1 * g2 * ...</code> (or equivalently, <code>y ~ x | g1 + g2 + ...</code>), indicating that plots of <code>y</code> versus <code>x</code> should be produced conditional on the variables <code>g1</code>, <code>g2</code>, ....</li>
          <li>Let's use this dataset: <a href='https://www.kaggle.com/datasets/aravindpcoder/obesity-or-cvd-risk-classifyregressorcluster'>https://www.kaggle.com/datasets/aravindpcoder/obesity-or-cvd-risk-classifyregressorcluster</a>. If we do <code>xyplot(Height~Age,data=data)</code>, then we get:</li>
          <li><ImgComp src={require("./basics_of_r_pics/9.png")} style={{width: "60%"}}/></li>
          <li>We can separate by gender (<code>xyplot(Height~Age | Gender,data=data)</code>)</li>
          <li><ImgComp src={require("./basics_of_r_pics/10.png")} style={{width: "70%"}}/></li>
          <li>We can also make box plots: <code>bwplot(Weight~MTRANS, data=data)</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/11.png")} style={{width: "70%"}}/></li>
          <li>We can use R's <code>plot()</code> function is also useful for generic plotting. Read more <a href='https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/plot'>here</a>.</li>
        </SubList></li>
      </ul>
    </div>
		<div style={{width: "49%",marginLeft: "0.5%",float: "right"}}>
      <ul className="ownExplanation">
        <li>Histogram:<SubList>
          <li>Let's go back to our heart attack analysis dataset.</li>
          <li>To see a histogram based on age, use <code>histogram(data$age)</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/5.png")} style={{width: "60%"}}/></li>
          <li>A formula of the form <code>~ x | g1 * g2 * ...</code> indicates that the histogram estimates should be produced conditioned on the levels of the variables <code>g1</code>, <code>g2</code>, .... We can use this features in functions like <code>histogram</code>. The command <code>histogram(~age|sex,data=data)</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/6.png")} style={{width: "60%"}}/></li>
          <li>We can use a different layout <code>histogram(~age|sex, data=data, layout=c(1,2))</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/7.png")} style={{width: "60%"}}/></li>
          <li>If you want to label the sexes. Use <code>labeledSex = ifelse(data$sex == 1, "male", "female")</code>, then <code>histogram(~age|labeledSex, data=data, layout=c(1,2))</code>:</li>
          <li><ImgComp src={require("./basics_of_r_pics/8.png")} style={{width: "60%"}}/></li>
        </SubList></li>
        <li>Levelplots:<SubList>
          <li>Using our obesity dataset, I will introduce the <code>cut()</code> function. <code>cut(data$Height, breaks= 10)</code> can make a factor from the height column and breaks it into 10 intervals:</li>
          <li><CodePre>{`
10 Levels: (1.45,1.5] (1.5,1.56] (1.56,1.61] (1.61,1.66] ... (1.93,1.98]
          `}</CodePre></li>
          <li>The program below will create a level plot, and it uses the <code>cut</code> functions.</li>
          <li><CodePre language='r'>{`
library(lattice) #use lattice package
data <- read.csv("ObesityDataSet.csv")

png(filename = "output.png", width = 500, height = 500, units = "px")

dataHeight = cut(data$Height, breaks= 10)
dataAge = cut(data$Age, breaks= 10)

levelplot(data$Weight ~ dataHeight * dataAge)  

dev.off() #shuts off a graphic device
          `}</CodePre></li>
          <li>This produces:</li>
          <li><ImgComp src={require("./basics_of_r_pics/13.png")} style={{width: "60%"}}/></li>
          <li>We can rotate the x labels like so:</li>
          <li><CodePre language='r'>{`
levelplot(data$Weight ~ dataHeight * dataAge, scales=list(x=list(rot=90)))
          `}</CodePre></li>
          <li><ImgComp src={require("./basics_of_r_pics/14.png")} style={{width: "60%"}}/></li>
        </SubList></li>
      </ul>
    </div>
  </div>

  <h2>Basics Statistics</h2>
  <div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
      <ul className="ownExplanation">
        <li></li>
      </ul>
    </div>
    
		<div style={{width: "49%",marginLeft: "0.5%",float: "right"}}>
      <ul className="ownExplanation">
        <li></li>
      </ul>
    </div>
  </div>

</>;
