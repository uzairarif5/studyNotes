import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import SubList from "../../articleRelatedStuff/SubList";
import { MathStuff } from "../../articleRelatedStuff/MathStuff";
import { TableLI } from "../../articleRelatedStuff/tableManager";
import { CodePre } from "../../articleRelatedStuff/Code";

export const title = "Deep Learning Notes";
export const sourcesColor = {8: "#c45645", 9: "#4f94ac"};
export const content = <>
	<h1>Deep Learning Notes</h1>
	<ol id="additionalResources">
		<li><a href='https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf'>Pattern Recognition and Machine Learning</a> by Christopher M. Bishop</li>
	</ol>
	<h2 id="introduction">Introduction</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul data-source={9}>
				<li>In order to develop a formal mathematical system of learning machines, we need to have formal measures of how good (or bad) our models are. In machine learning, and optimization more generally, we call these <b>objective functions</b>. By convention, we usually define objective functions so that lower is better. Because we choose lower to be better, these functions are sometimes called <b>loss functions</b>.</li>
				<li>When a model performs well on the training set but fails to generalize to unseen data, we say that it is <b>overfitting</b> to the training data.</li>
				<li>Kinds of Machine Learning Problems:<SubList>
					<li><b>Supervised learning</b> describes tasks where we are given a dataset containing both features and labels and asked to produce a model that predicts the labels when given input features:<SubList>
						<li>Any <i>how much? </i>or <i>how many?</i> problem is likely to be <b>regression</b>.</li>
						<li>The kinds of <i>which one?</i> problems are called <b>classification</b>.</li>
						<li>The problem of learning to predict classes that are not mutually exclusive is called <b>multi-label classification</b>. <b>Auto-tagging</b> problems are typically best described in terms of multi-label classification.</li>
						<li><b>Search:</b> The goal is less to determine whether a particular page is relevant for a query, but rather which, among a set of relevant results, should be shown most prominently to a particular user</li>
						<li><b>Recommender systems</b> are another problem setting that is related to search and ranking. The problems are similar insofar as the goal is to display a set of items relevant to the user. The main difference is the emphasis on personalization to specific users in the context of recommender systems.</li>
						<li><b>Sequence learning:</b> They require a model either to ingest sequences of inputs or to emit sequences of outputs (or both).</li>
					</SubList></li>
					<li><a href='https://cloud.google.com/discover/what-is-unsupervised-learning'>Unsupervised learning in artificial intelligence is a type of machine learning that learns from data without human supervision.</a></li>
					<li>A further development in unsupervised learning has been the rise of <b>self-supervised learning</b>, techniques that leverage some aspect of the unlabeled data to provide supervision. For text, we can train models to "fill in the blanks" by predicting randomly masked words using their surrounding words (contexts) in big corpora without any labeling effort.</li>
					<li><b>Reinforcement learning</b> gives a very general statement of a problem in which an agent interacts with an environment over a series of time steps. At each time step, the agent receives some observation from the environment and must choose an action that is subsequently transmitted back to the environment via some mechanism (sometimes called an <b>actuator</b>), when, after each loop, the agent receives a reward from the environment.</li>
				</SubList></li>
			</ul>
		</div>
		<div data-source={8} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<ul>
				<li><b>Intelligence:</b> the ability to process information such that we canuse it to inform some future decision or action that we take. Doing this using artificial algorithms is <b>artificial intelligence</b>.</li>
				<li><b>Machine leaning</b> is a subset of AI focused on teaching a machine how to do this using prior data.</li>
				<li><b>Deep learning</b> is a subset of machine learning focused specifically on neural networks.</li>
				<li><ImgComp src={require("./deep_learning_pics/1.png")} style={{width:"100%"}}/></li>
			</ul>
		</div>
	</div>

	<h2 id="lnn">Linear Neural Networks</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<div data-source={9}>
				<h3>Linear Neural Networks for Regression</h3>
				<ul>
						<li>Linear regression flows from a few simple assumptions:<SubList>
							<li>We assume that the relationship between features \(X\) and target \(Y\) is approximately linear, i.e., that the conditional mean \(E[Y|X=x]\) can be expressed as a weighted sum of the features \(x\). This setup allows that the target value may still deviate from its expected value on account of observation noise.</li>
							<li>Next, we can impose the assumption that any such noise is well behaved, following a Gaussian distribution.</li>
						</SubList></li>
						<li>Model:<SubList>
							<li>The assumption of linearity means that the expected value of the target (price) can be expressed as a weighted sum of the features (area and age): \({`\\textrm{price} = w_{\\textrm{area}} \\cdot \\textrm{area} + w_{\\textrm{age}} \\cdot \\textrm{age} + b`}\). Here \(w_{"{area}"}\) and \(w_{"{age}"}\) are called <b>weights</b>, and is called a <b>bias</b>.</li>
							<li>When our inputs consist of \(d\) features, we can express our prediction \(\hat y\) (the "hat" symbol denotes an estimate) as \(\hat y = w_1 x_1 + \cdots + w_d x_d + b\).</li>
							<li>Collecting all features into a vector \(\mathbf{"{x}"} \in \mathbb{"{R}"}^d\) and \(\mathbf{"{w}"} \in \mathbb{"{R}"}^d\) all weights into a vector, we can express our model compactly via the dot product between \(\mathbf{"{x}"}\) and \(\mathbf{"{w}"}\): \(\hat{"{y}"} = \mathbf{"{w}"}^\top \mathbf{"{x}"} + b\).</li>
							<li>We will often find it convenient to refer to features of our entire dataset of examples via the design matrix \({`\\mathbf{X} \\in \\mathbb{R}^{n \\times d}`}\). Here, \({`\\mathbf{X}`}\) contains one row for every example and one column for every feature. For a \({`\\mathbf{X}`}\) collection of features, the predictions \({`\\hat{\\mathbf{y}} \\in \\mathbb{R}^n`}\) can be expressed via the matrix-vector product: \({`\\hat{\\mathbf{y}} = \\mathbf{X} \\mathbf{w} + b`}\).</li>
							<li>Given features of a training dataset \({`\\mathbf{X}`}\) and corresponding (known) labels \({"\\mathbf{y}"}\), the goal of linear regression is to find the weight vector \({`\\mathbf{w}`}\) and the bias term \(b\) such that, given features of a new data example sampled from the same distribution as, the new example's label will (in expectation) be predicted with the smallest error.</li>
						</SubList></li>
						<li>Loss Function:<SubList>
							<li><b>Loss functions</b> quantify the distance between the real and predicted values of the target.</li>
							<li>When our prediction for an example \(i\) is \({`\\hat{y}`}\) and the corresponding true label is \({`\\hat{y}^{(i)}`}\), the squared error is: \({`l^{(i)}(\\mathbf{w}, b) = \\frac{1}{2} \\left(\\hat{y}^{(i)} - y^{(i)}\\right)^2`}\).</li>
							<li>The constant \({`\\frac{1}{2}`}\) makes no real difference but proves to be notationally convenient, since it cancels out when we take the derivative of the loss.</li>
							<li>To measure the quality of a model on the entire dataset of examples, we simply average (or equivalently, sum) the losses on the training set:</li>
							<MathStuff>{`\\begin{aligned}
								L(\\mathbf{w}, b) &= \\frac{1}{n}\\sum_{i=1}^n l^{(i)}(\\mathbf{w}, b) \\\\
								&= \\frac{1}{n} \\sum_{i=1}^n \\frac{1}{2}\\left(\\mathbf{w}^\\top \\mathbf{x}^{(i)} + b - y^{(i)}\\right)^2
							\\end{aligned}`}</MathStuff>
							<li>When training the model, we seek parameters (\({"\\mathbf{w}^*, b^*"}\)) that minimize the total loss across all training examples:</li>
							<MathStuff>$${"\\mathbf{w}^*, b^* = \\operatorname*{argmin}_{\\mathbf{w}, b} \\  L(\\mathbf{w}, b)"}$$</MathStuff>
						</SubList></li>
						<li>We can find the optimal parameters (as assessed on the training data) analytically by applying a simple formula as follows:<SubList>
							<li>First, we can subsume the bias \(b\) into the parameter \({"\\mathbf{w}"}\) by appending a column to the design matrix consisting of all 1s.</li>
							<li className="ownExplanation"><ImgComp src={require("./deep_learning_pics/15.jpg")} width="90%"/></li>
							<li>Then our prediction problem is to minimize \({"\\|\\mathbf{y} - \\mathbf{X}\\mathbf{w}\\|^2"}\).</li>
							<li>As long as the design matrix \({"\\mathbf{X}"}\) has full rank (no feature is linearly dependent on the others), then there will be just one critical point on the loss surface.</li>
							<MathStuff>
								$${`\\partial_{\\mathbf{w}} \\|\\mathbf{y} - \\mathbf{X}\\mathbf{w}\\|^2 =
								2 \\mathbf{X}^\\top (\\mathbf{X} \\mathbf{w} - \\mathbf{y}) = 0`}$$
								$${`\\textrm{ and hence } \\mathbf{X}^\\top \\mathbf{y} = \\mathbf{X}^\\top \\mathbf{X} \\mathbf{w}`}$$
								$${"\\mathbf{w}^* = (\\mathbf X^\\top \\mathbf X)^{-1}\\mathbf X^\\top \\mathbf{y}"}$$
							</MathStuff>
							<li>Note that this solution will only be unique when the matrix \(\mathbf X^\top \mathbf X\) is invertible, i.e., when the columns of the design matrix are linearly independent.</li>
						</SubList></li>
						<li>Minibatch Stochastic Gradient Descent:<SubList>
							<li>The key technique for optimizing nearly every deep learning model consists of iteratively reducing the error by updating the parameters in the direction that incrementally lowers the loss function. This algorithm is called <b>gradient descent</b>.</li>
							<li>The most naive application of gradient descent consists of taking the derivative of the loss function, which is an average of the losses computed on every single example in the dataset. In practice, this can be extremely slow: we must pass over the entire dataset before making a single update.</li>
							<li>The other extreme is to consider only a single example at a time and to take update steps based on one observation at a time. The resulting algorithm, <b>stochastic gradient descent (SGD)</b> can be an effective strategy, even for large datasets.</li>
							<li>One problem arises from the fact that processors are a lot faster multiplying and adding numbers than they are at moving data from main memory to processor cache. It is up to an order of magnitude more efficient to perform a matrix-vector multiplication than a corresponding number of vector-vector operations. </li>
							<li>The solution to both problems is to pick an intermediate strategy: rather than taking a full batch or only a single sample at a time, we take a minibatch of observations. The specific choice of the size of the said minibatch depends on many factors, such as the amount of memory, the number of accelerators, the choice of layers, and the total dataset size. This leads us to <b>minibatch stochastic gradient descent</b>.</li>
							<li>In its most basic form:<SubList>
								<li>In each iteration \(t\), we first randomly sample a minibatch \({"\\mathcal{B}_t"}\) consisting of a fixed number \({"|\\mathcal{B}|"}\) of training examples.</li>
								<li>We then compute the derivative (gradient) of the average loss on the minibatch with respect to the model parameters.</li>
								<li>Finally, we multiply the gradient by a predetermined small positive value \(\eta\), called the learning rate, and subtract the resulting term from the current parameter values.</li>
								<MathStuff>$${"(\\mathbf{w},b) \\leftarrow (\\mathbf{w},b) - \\frac{\\eta}{|\\mathcal{B}|} \\sum_{i \\in \\mathcal{B}_t} \\partial_{(\\mathbf{w},b)} l^{(i)}(\\mathbf{w},b)"}$$</MathStuff>
							</SubList></li>
							<li>In summary, minibatch SGD proceeds as follows:<SubList>
								<li>Initialize the values of the model parameters, typically at random.</li>
								<li>Iteratively sample random minibatches from the data, updating the parameters in the direction of the negative gradient.</li>
								<li>For quadratic losses and affine transformations, this has a closed-form expansion:</li>
								<MathStuff>$${"\\begin{aligned} \\mathbf{w} & \\leftarrow \\mathbf{w} - \\frac{\\eta}{|\\mathcal{B}|} \\sum_{i \\in \\mathcal{B}_t} \\partial_{\\mathbf{w}} l^{(i)}(\\mathbf{w}, b) \\\\ & = \\mathbf{w} - \\frac{\\eta}{|\\mathcal{B}|} \\sum_{i \\in \\mathcal{B}_t} \\mathbf{x}^{(i)} \\left(\\mathbf{w}^\\top \\mathbf{x}^{(i)} + b - y^{(i)}\\right)\\\\ b &\\leftarrow b -  \\frac{\\eta}{|\\mathcal{B}|} \\sum_{i \\in \\mathcal{B}_t} \\partial_b l^{(i)}(\\mathbf{w}, b) \\\\ & = b - \\frac{\\eta}{|\\mathcal{B}|} \\sum_{i \\in \\mathcal{B}_t} \\left(\\mathbf{w}^\\top \\mathbf{x}^{(i)} + b - y^{(i)}\\right) \\end{aligned}"}$$</MathStuff>
							</SubList></li>
							<li>Frequently minibatch size and learning rate are user-defined. Such tunable parameters that are not updated in the training loop are called <b>hyperparameters</b>.</li>
							<li>After training for some predetermined number of iterations (or until some other stopping criterion is met), we record the estimated model parameters, denoted \({"\\hat{\\mathbf{w}}, \\hat{b}"}\).</li>
							<li>Linear regression happens to be a learning problem with a global minimum. However, the loss surfaces for deep networks contain many saddle points and minima. Fortunately, we typically do not care about finding an exact set of parameters but merely any set of parameters that leads to accurate predictions (and thus low loss).</li>
						</SubList></li>
						<li>The Normal Distribution:<SubList>
							<li>One way to motivate linear regression with squared loss is to assume that observations arise from noisy measurements, where the noise follows the normal distribution \({"\\mathcal{N}(0, \\sigma^2)"}\):</li>
							<MathStuff>$${"y = \\mathbf{w}^\\top \\mathbf{x} + b + \\epsilon \\textrm{ where } \\epsilon \\sim \\mathcal{N}(0, \\sigma^2)"}$$</MathStuff>
							<li className="research">Thus, we can now write out the likelihood of seeing a particular \(y\) for a given \({"\\mathbf{x}"}\) via:</li>
							<MathStuff>$${"P(y \\mid \\mathbf{x}) = \\frac{1}{\\sqrt{2 \\pi \\sigma^2}} \\exp\\left(-\\frac{1}{2 \\sigma^2} (y - \\mathbf{w}^\\top \\mathbf{x} - b)^2\\right)"}$$</MathStuff>
							<li>According to the principle of maximum likelihood, the best values of parameters \({"\\mathbf{w}"}\) and \(b\) are those that maximize the likelihood of the entire dataset:</li>
							<MathStuff>$${"P(\\mathbf y \\mid \\mathbf X) = \\prod_{i=1}^{n} p(y^{(i)} \\mid \\mathbf{x}^{(i)})"}$$</MathStuff>
							<li>For historical reasons, optimizations are more often expressed as minimization rather than maximization. So, without changing anything, we can minimize the negative log-likelihood, which we can express as follows:</li>
							<MathStuff>$${"-\\log P(\\mathbf y \\mid \\mathbf X) = \\sum_{i=1}^n \\frac{1}{2} \\log(2 \\pi \\sigma^2) + \\frac{1}{2 \\sigma^2} \\left(y^{(i)} - \\mathbf{w}^\\top \\mathbf{x}^{(i)} - b\\right)^2"}$$</MathStuff>
							<li>If we assume that \(\sigma\) is fixed, we can ignore the first term, because it does not depend on \({"\\mathbf{w}"}\) or \(b\).</li>
							<li>The second term is identical to the squared error loss introduced earlier, except for the multiplicative constant \({"\\frac{1}{\\sigma^2}"}\). Fortunately, the solution does not depend on \(\sigma\) either. It follows that minimizing the mean squared error is equivalent to the maximum likelihood estimation of a linear model under the assumption of additive Gaussian noise.</li>
						</SubList></li>
						<li>Generalization:<SubList>
							<li>The phenomenon of fitting closer to our training data than to the underlying distribution is called <b>overfitting</b>, and techniques for combatting overfitting are often called <b>regularization methods</b>.</li>
							<li>Cross-Validation:<SubList>
								<li>When training data is scarce, we might not even be able to afford to hold out enough data to constitute a proper validation set.</li>
								<li>One popular solution to this problem is to employ <b>\(K\)-fold cross-validation</b>.</li>
								<li> Here, the original training data is split into \(K\) non-overlapping subsets. Then model training and validation are executed \(K\) times, each time training on \(K-1\) subsets and validating on a different subset (the one not used for training in that round).</li>
								<li>Finally, the training and validation errors are estimated by averaging over the results from the \(K\) experiments.</li>
							</SubList></li>
						</SubList></li>
						<li>Norms and Weight Decay:<SubList>
							<li><a href='https://machinelearningmastery.com/introduction-to-weight-constraints-to-reduce-generalization-error-in-deep-learning/'>Smaller weights in a neural network can result in a model that is more stable and less likely to overfit the training dataset.</a></li>
							<li><b>Weight decay</b> restricts the values that the parameters can take.</li>
							<li>The most common method for ensuring a small weight vector is to add its norm as a penalty term to the problem of minimizing the loss. Thus we replace our original objective, <i>minimizing the prediction loss on the training labels</i>, with new objective, <i>minimizing the sum of the prediction loss and the penalty term</i>.</li>
							<li>The \({"\\ell_2"}\) norm measures the (Euclidean) length of a vector. The \({"\\ell_1"}\) norm is also common and the associated measure is called the Manhattan distance.</li>
							<li>Now, if our weight vector grows too large, our learning algorithm might focus on minimizing the weight norm \({"\\| \\mathbf{w} \\|^2"}\) rather than minimizing the training error.</li>
							<MathStuff>$${"L(\\mathbf{w}, b) + \\frac{\\lambda}{2} \\|\\mathbf{w}\\|^2."}$$</MathStuff>
							<li>For \({"\\lambda = 0"}\), we recover our original loss function. For \({"\\lambda > 0"}\), we restrict the size of \({"\\| \\mathbf{w} \\|"}\). We divide by \(2\) by convention: when we take the derivative of a quadratic function, the \(2\) and \(1/2\) cancel out.</li>
							<li>Minibatch stochastic gradient descent updates for \({"\\ell_2"}\)-regularized regression as follows:</li>
							<MathStuff>$${"\\mathbf{w} \\leftarrow \\left(1- \\eta\\lambda \\right) \\mathbf{w} - \\frac{\\eta}{|\\mathcal{B}|} \\sum_{i \\in \\mathcal{B}} \\mathbf{x}^{(i)} \\left(\\mathbf{w}^\\top \\mathbf{x}^{(i)} + b - y^{(i)}\\right)"}$$</MathStuff>
						</SubList></li>
				</ul>
			</div>
		</div>
		<div style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<div data-source={9}>
				<h3>Linear Neural Networks for Classification</h3>
				<ul>
					<li>Let's start with a simple image classification problem:<SubList>
						<li>Each input consists of a \(2\times2\) grayscale image.</li>
						<li>We can represent each pixel value with a single scalar, giving us four features \(x_1, x_2, x_3, x_4\).</li>
						<li>Let's assume that each image belongs to one among the categories "cat", "chicken", and "dog".</li>
						<li>Statisticians long ago invented a simple way to represent categorical data: the <b>one-hot encoding</b>. A one-hot encoding is a vector with as many components as we have categories. The component corresponding to a particular instance's category is set to 1 and all other components are set to 0.</li>
						<li>In our case, a label would be a three-dimensional vector, \((1, 0, 0)\) with corresponding to "cat", \((0, 1, 0)\) to "chicken", and \((0, 0, 1)\) to "dog":</li>
						<MathStuff>$${"y \\in \\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\\}"}$$</MathStuff>
						<li>If the categories had some natural ordering among them, say if we were trying to predict \({"\\{\\textrm{baby}, \\textrm{toddler}, \\textrm{adolescent}, \\textrm{young adult}, \\textrm{adult}, \\textrm{geriatric}\\}"}\), then it might even make sense to cast this as an <b>ordinal regression</b> problem and keep the labels in this format: \({"y \\in \\{1, 2, 3, 4, 5, 6\\}"}\).</li>
					</SubList></li>
					<li>Linear Model:<SubList>
						<li>To address classification with linear models, we will need as many affine functions as we have outputs.</li>
						<MathStuff>$${`\\begin{aligned}
						o_1 &= x_1 w_{11} + x_2 w_{12} + x_3 w_{13} + x_4 w_{14} + b_1 \\\\
						o_2 &= x_1 w_{21} + x_2 w_{22} + x_3 w_{23} + x_4 w_{24} + b_2 \\\\
						o_3 &= x_1 w_{31} + x_2 w_{32} + x_3 w_{33} + x_4 w_{34} + b_3
						\\end{aligned}`}$$</MathStuff>
					</SubList></li>
					<li>The Softmax:<SubList>
						<li>Assuming a suitable loss function, we could try, directly, to minimize the difference between \({"\\mathbf{o}"}\) and the labels \({"\\mathbf{y}"}\). While it turns out that treating classification as a vector-valued regression problem works surprisingly well, it is nonetheless unsatisfactory in the following ways:<SubList>
							<li>There is no guarantee that the outputs \(o_i\) sum up to \(1\) in the way we expect probabilities to behave.</li>
							<li>There is no guarantee that the outputs \(o_i\) are even nonnegative, even if their outputs sum up to \(1\), or that they do not exceed \(1\).</li>
						</SubList></li>
						<li>As such, we need a mechanism to "squish" the outputs.</li>
						<li>If use an exponential function \(P(y = i) \propto \exp o_i\). This does indeed satisfy the requirement that the conditional class probability increases with increasing \(o_i\), it is monotonic, and all probabilities are nonnegative.</li>
						<li>We can then transform these values so that they add up to \(1\) by dividing each by their sum. This process is called normalization.</li>
						<li>Putting these two pieces together gives us the softmax function:</li>
						<MathStuff>
							$${"\\hat{\\mathbf{y}} = \\mathrm{softmax}(\\mathbf{o}) \\quad \\textrm{where}\\quad \\hat{y}_i = \\frac{\\exp(o_i)}{\\sum_j \\exp(o_j)}"}$$
							$${"\\operatorname*{argmax}_j \\hat y_j = \\operatorname*{argmax}_j o_j"}$$
						</MathStuff>
					</SubList></li>
					<li>Vectorization:<SubList>
						<li>Assume that we are given a minibatch \({"\\mathbf{X} \\in \\mathbb{R}^{n \\times d}"}\) of \(n\) examples with dimensionality (number of inputs) \(d\).</li>
						<li>Moreover, assume that we have \(q\) categories in the output. Then the weights satisfy \({"\\mathbf{W} \\in \\mathbb{R}^{d \\times q}"}\) and the bias satisfies \({"\\mathbf{b} \\in \\mathbb{R}^{1\\times q}"}\):</li>
						<MathStuff>$${"\\begin{aligned} \\mathbf{O} &= \\mathbf{X} \\mathbf{W} + \\mathbf{b}, \\\\ \\hat{\\mathbf{Y}} & = \\mathrm{softmax}(\\mathbf{O})\\end{aligned}"}$$</MathStuff>
						<li>Since each row in \({"\\mathbf{X}"}\) represents a data example, the softmax operation itself can be computed rowwise: for each row of \({"\\mathbf{O}"}\), exponentiate all entries and then normalize them by the sum.</li>
					</SubList></li>
					<li>Log-Likelihood:<SubList>
						<li>The softmax function gives us a vector \({"\\hat{\\mathbf{y}}"}\), which we can interpret as the (estimated) conditional probabilities of each class, given any input \({"\\mathbf{x}"}\), such as \({"\\hat{y}_1 = P(y=\\textrm{cat} \\mid \\mathbf{x})"}\).</li>
						<li>In the following we assume that for a dataset with features \({"\\mathbf{X}"}\) the labels \({"\\mathbf{Y}"}\) are represented using a one-hot encoding label vector.</li>
						<li>We can compare the estimates with reality by checking how probable the actual classes are according to our model, given the features:</li>
						<MathStuff>$${"P(\\mathbf{Y} \\mid \\mathbf{X}) = \\prod_{i=1}^n P(\\mathbf{y}^{(i)} \\mid \\mathbf{x}^{(i)})"}$$</MathStuff>
						<li>We take the negative logarithm to obtain the equivalent problem of minimizing the negative log-likelihood:</li>
						<MathStuff>$${"-\\log P(\\mathbf{Y} \\mid \\mathbf{X}) = \\sum_{i=1}^n -\\log P(\\mathbf{y}^{(i)} \\mid \\mathbf{x}^{(i)}) = \\sum_{i=1}^n l(\\mathbf{y}^{(i)}, \\hat{\\mathbf{y}}^{(i)})"}$$</MathStuff>
						<li className="research">For any pair of label \({"\\mathbf{y}"}\) and model prediction \({"\\hat{\\mathbf{y}}"}\) over \(q\) classes, the loss function \(l\) is:</li>
						<MathStuff>$${"l(\\mathbf{y}, \\hat{\\mathbf{y}}) = - \\sum_{j=1}^q y_j \\log \\hat{y}_j"}$$</MathStuff>
						<li>Using the definition of the softmax we obtain:</li>
						<MathStuff>$${`\\begin{aligned}
						l(\\mathbf{y}, \\hat{\\mathbf{y}}) &=  - \\sum_{j=1}^q y_j \\log \\frac{\\exp(o_j)}{\\sum_{k=1}^q \\exp(o_k)} \\\\
						&= \\sum_{j=1}^q y_j \\log \\sum_{k=1}^q \\exp(o_k) - \\sum_{j=1}^q y_j o_j \\\\
						&= \\log \\sum_{k=1}^q \\exp(o_k) - \\sum_{j=1}^q y_j o_j
						\\end{aligned}`}$$</MathStuff>
						<li>The derivative with respect to \({"o_j"}\):</li>
						<MathStuff>$${"\\partial_{o_j} l(\\mathbf{y}, \\hat{\\mathbf{y}}) = \\frac{\\exp(o_j)}{\\sum_{k=1}^q \\exp(o_k)} - y_j = \\mathrm{softmax}(\\mathbf{o})_j - y_j"}$$</MathStuff>
					</SubList></li>
				</ul>
			</div>
		</div>
	</div>

	<h2 id="intro_to_deep_learning_and_rnn">Introduction to Deep Learning And RNN</h2>
	<div className="content">
		<div style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<ul data-source={8}>
				<li>A single neuron in a neural network is called the <b>perceptron</b>:<SubList>
					<li><ImgComp src={require("./deep_learning_pics/2.png")} style={{width:"100%"}}/></li>
					<li>It takes \(m\) different <b>inputs</b> (blue circle) where each one is multiplied by a <b>weight</b>, and then all of them are added.</li>
					<li>We take that single added number and pass it through a non-linear <b>activation function</b> to produce the output \(\hat y\).</li>
					<li>There is also a bais term (green) with input 1 and weight \(w_0\).</li>
					<li>This can be represented using a dot product:</li>
					<li><ImgComp src={require("./deep_learning_pics/3.png")} style={{width:"50%%"}}/></li>
					<li>Purpose of the activation function is to introduce <b>non-linearity</b> to our neural network, because a lot of real world data is non-linear.</li>
					<li>Common examples of an activation function:</li>
					<MathStuff>$$\begin{"{align}"} & \text {"{Sigmoid: }"} g(x) = \frac{"{1}{1+e^{-x}}"} \\ \\ & \text {"{Rectified Linear Unit: }"} g(x) = max(0,x) \end{"{align}"}$$</MathStuff>
					<li>Multi output Preceptron:<SubList>
						<li><ImgComp src={require("./deep_learning_pics/4.png")} style={{width:"60%"}}/></li>
						<li>Because all inputs are densely connected to all outputs, these layers are called <b>Dense</b> layers.</li>
					</SubList></li>
				</SubList></li>
				<li>Neural network:<SubList>
					<li><ImgComp src={require("./deep_learning_pics/5.png")} style={{width:"60%"}}/></li>
					<li>You can create a deeper neural network by having many hidden layers.</li>
					<li><ImgComp src={require("./deep_learning_pics/6.png")} style={{width:"70%"}}/></li>
					<li><b>Empirical loss</b> measures the total loss over our entire dataset.</li>
					<li><ImgComp src={require("./deep_learning_pics/7.png")} style={{width:"70%"}}/></li>
					<li><b>Mean squared error loss:</b></li>
					<li><ImgComp src={require("./deep_learning_pics/8.png")} style={{width:"70%"}}/></li>
					<li><b>Cross entropy loss:</b></li>
					<li><ImgComp src={require("./deep_learning_pics/9.png")} style={{width:"80%"}}/></li>
					<li>We want to find weights that minimize our loss:</li>
					<li><ImgComp src={require("./deep_learning_pics/10.png")} style={{width:"70%"}}/></li>
				</SubList></li>
				<li>Gradient descent:<SubList>
					<li><ImgComp src={require("./deep_learning_pics/11.gif")} style={{width:"100%"}}/></li>
					<li>Algorithm:<SubList numbered={true} >
						<li>Initialize weights randomly ~ \({"\\mathcal{N} (0, \\sigma ^2)"}\)</li>
						<li>Loop until converge:<SubList numbered={true} opened={true}>
							<li>Compute gradient, \({"\\frac{\\delta J(W)}{\\delta W}"}\)</li>
							<li>Update weights, \({"W \\leftarrow W - \\eta \\frac{\\delta J(W)}{\\delta W}"}\)</li>
							</SubList></li>
						<li>Return weights</li>
					</SubList></li>
					<li>The \({"\\eta"}\) in the algorithm is the <b>learning rate</b> (more on that later).</li>
				</SubList></li>
				<li>Backpropagation:<SubList>
					<li>In a simple neural network below, how does a change in \(w_2\) affect the final loss \(J(W)\)?</li>
					<li><ImgComp src={require("./deep_learning_pics/12.png")} style={{width:"100%"}}/></li>
					<li>Let's use the chain rule:</li>
					<MathStuff>$${"\\frac{\\delta J(W)}{\\delta w_2} = \\frac{\\delta J(W)}{\\delta \\hat y} \\times \\frac{\\delta \\hat y}{\\delta w_2}"}$$</MathStuff>
					<li>Similarly for \(w_1\):</li>
					<MathStuff>$${"\\frac{\\delta J(W)}{\\delta w_1} = \\frac{\\delta J(W)}{\\delta \\hat y} \\times \\frac{\\delta \\hat y}{\\delta \\hat z_1} \\times \\frac{\\delta \\hat z_1}{\\delta w_1}"}$$</MathStuff>
					<li>Repeat this for every weight in the network.</li>
				</SubList></li>
				<li>Setting the learning rate:<SubList>
					<li>Small &eta; can get stuck in a local minima.</li>
					<li>Large &eta; overshoot and diverge from the solution.</li>
					<li>Instead of trying many different learning rates to find a good one, we can make an <b>adaptive learning rate</b>, which can be made larger or smaller depending on:<SubList opened={true}>
						<li>how large gradient is</li>
						<li>how fast learning is happening</li>
						<li>size of particular weights</li>
						<li>etc...</li>
					</SubList></li>
				</SubList></li>
				<li>Stochastic gradient descent:<SubList>
					<li>The gradient descent algorithm:<SubList numbered={true} >
						<li>Initialize weights randomly ~ \({"\\mathcal{N} (0, \\sigma ^2)"}\)</li>
						<li>Loop until converge:<SubList numbered={true} opened={true}>
							<li>Compute gradient, \({"\\frac{\\delta J(W)}{\\delta W}"}\)</li>
							<li>Update weights, \({"W \\leftarrow W - \\eta \\frac{\\delta J(W)}{\\delta W}"}\)</li>
							</SubList></li>
						<li>Return weights</li>
					</SubList></li>
					<li><a href='https://realpython.com/gradient-descent-algorithm-python/#stochastic-gradient-descent-algorithms'><b>Stochastic gradient descent</b> algorithms are a modification of gradient descent. In stochastic gradient descent, you calculate the gradient using just a random small part of the observations instead of all of them.</a> <a href='https://www.google.com/search?client=opera-gx&hs=uF9&sca_esv=592900765&sxsrf=AM9HkKmOifpVoJ0p1VuBA4tP-YGmb7cEXA:1703190117816&q=stochastic&si=ALGXSlbK6dNKc3P-z0hratVoTzWIpWq-yiO10h-h8_fZKgc5VdYzLlXvG6LMtarQYmOqvMmSqW6cV_fWHbRrZGnjSUuCbehJmuqyq9u-MPC1nG7aGimZV9g%3D&expnd=1&sa=X&ved=2ahUKEwjc_NPPraGDAxWLADQIHUWhCggQ2v4IegQIChAQ&cshid=1703190250142040&biw=1366&bih=627&dpr=1'>Stochastic means randomly determined.</a></li>
					<li>Let gardient \({"\\frac{\\delta J_i(W)}{\\delta W}"}\) be the gradient for just one example, \(i\), from the whole data set:<SubList numbered={true} >
						<li>Initialize weights randomly ~ \({"\\mathcal{N} (0, \\sigma ^2)"}\)</li>
						<li>Loop until converge:<SubList numbered={true} opened={true}>
							<li>Pick a single point \({"i"}\)</li>
							<li>Compute gradient, \({"\\frac{\\delta J_i(W)}{\\delta W}"}\)</li>
							<li>Update weights, \({"W \\leftarrow W - \\eta \\frac{\\delta J_i(W)}{\\delta W}"}\)</li>
							</SubList></li>
						<li>Return weights</li>
					</SubList></li>
					<li>Instead of one or all the points, we can take a mini-batch of points:<SubList>
						<li>Initialize weights randomly ~ \({"\\mathcal{N} (0, \\sigma ^2)"}\)</li>
						<li>Loop until converge:<SubList numbered={true} opened={true}>
							<li>Pick batch of \(B\) data points</li>
							<li>Compute gradient, \({"\\frac{\\delta J(W)}{\\delta W} = \\frac{1}{B} \\Sigma^B_{k=1} \\frac{\\delta J_k(W)}{\\delta W}"}\)</li>
							<li>Update weights, \({"W \\leftarrow W - \\eta \\frac{\\delta J(W)}{\\delta W}"}\)</li>
							</SubList></li>
						<li>Return weights</li>
					</SubList></li>
				</SubList></li>
				<li><b>Overfitting:</b><SubList>
					<li><ImgComp src={require("./deep_learning_pics/13.png")} style={{width:"100%"}}/></li>
					<li><b>Regularization:</b> Techniques that constrains our optimization problem to discourage complex models.</li>
					<li><b>Regularization 1 (Dropout):</b> Randomly set some activations to 0, so network doesn't rely on any 1 node.</li>
					<li><ImgComp src={require("./deep_learning_pics/14.png")} style={{width:"90%"}}/></li>
					<li><b>Regularization 2 (Early stopping):</b> Stop training before chance of overfitting.</li>
				</SubList></li>
			</ul>
		</div>
		<ul data-source={8} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li>Sequence Modeling Problem:<SubList>
				<li>Predict the next word: "This morning I took my cat for a _" (ans: "walk").</li>
				<li>Sequence modeling design criteria:<SubList>
					<li>Handle <b>variable-length</b> sequences</li>
					<li>Track <b>long-term</b> dependencies</li>
					<li>Maintain informaiton about <b>order</b></li>
					<li><b>Share parameters</b> across the sequence</li>
				</SubList></li>
				<li><b>Share parameters property:</b><SubList>
					<li>Things we learn about the sequence should tranfer if they apepar elsewhere.</li>
					<TableLI><tbody>
						<tr><td><b>This morning</b> I took the cat</td></tr>
						<tr><td>I took the cat <b>this morning</b></td></tr>
					</tbody></TableLI>
				</SubList></li>
			</SubList></li>
			<li><b>Recurrent Neural Networks:</b><SubList>
				<li>Used when we are using sequences of input.</li>
				<li><ImgComp src={require("./deep_learning_pics/18.png")} width="90%"/></li>
				<li>RNN's maintain an internal state \({"h_t"}\), where at each step a function (parameterized by \({"\\mathbf{W}"}\)) updates this state based on the previous state \({"h_{t-1}"}\) and the current input of the sequence. Note that the same function is used at every step.</li>
				<li><ImgComp src={require("./deep_learning_pics/19.png")} width="70%"/></li>
				<li>Example:<SubList>
					<li><ImgComp src={require("./deep_learning_pics/20.png")} width="70%"/></li>
					<li>Note that the three \({"\\mathbf{W}"}\)'s are different matrices, but those three matrices remain unchanged for all the inputs.</li>
				</SubList></li>
				<li><figure>
					<ImgComp src={require("./deep_learning_pics/21.png")} width="80%"/>
					<figcaption>Unwinding the recurrence</figcaption>
				</figure></li>
				<li>For the total loss, we simply sum the losses:</li>
				<li><ImgComp src={require("./deep_learning_pics/22.png")} width="80%"/></li>
				<li>Backpropagation:<SubList>
					<li>For backpropagation, we have to backpropagate at each individual time step and across all time steps:</li>
					<li><ImgComp src={require("./deep_learning_pics/23.png")} width="80%"/></li>
					<li>Vanishing gradients:<SubList>
						<li>As you keep doing repeated multiplication, the gradients keep getting smaller.</li>
						<li>Errors further back in time steps have smaller gradients, so the parameters are baised to capture short-term dependencies.</li>
					</SubList></li>
				</SubList></li>
				<li><b>Long short-term memory:</b><SubList>
					<li>In a standard RNN, repeating modules contain a simple computation node:</li>
					<li><ImgComp src={require("./deep_learning_pics/24.png")} width="90%"/></li>
					<li>LSTM modules contain computational blocks that control information flow:</li>
					<li><ImgComp src={require("./deep_learning_pics/25.png")} width="90%"/></li>
					<li><a href='https://en.wikipedia.org/wiki/Long_short-term_memory'>A common LSTM unit is composed of a <b>cell</b>, an <b>input gate</b>, an <b>output gate</b> and a <b>forget gate</b>:</a><SubList>
						<li>The cell remembers values over arbitrary time intervals and the three gates regulate the flow of information into and out of the cell.</li>
						<li><b>Forget gates</b> decide what information to discard from a previous state by assigning a previous state, compared to a current input, a value between 0 and 1. A (rounded) value of 1 means to keep the information, and a value of 0 means to discard it.</li>
						<li><b>Input gates</b> decide which pieces of new information to store in the current state, using the same system as forget gates.</li>
						<li><b>Output gates</b> control which pieces of information in the current state to output by assigning a value from 0 to 1 to the information, considering the previous and current states. </li>
						<li>Selectively outputting relevant information from the current state allows the LSTM network to maintain useful, long-term dependencies to make predictions, both in current and future time-steps.</li>
					</SubList></li>
				</SubList></li>
			</SubList></li>
			<li><b>Attention:</b><SubList>
				<li><a href='https://en.wikipedia.org/wiki/Attention_(machine_learning)'>Machine learning-based attention is a mechanism mimicking cognitive attention. It calculates "soft" weights for each word. "Soft" weights can change during each runtime, in contrast to "hard" weights, which are (pre-)trained and fine-tuned and remain frozen afterwards.</a></li>
				<li><a href='https://en.wikipedia.org/wiki/Attention_(machine_learning)'>Attention was developed to address the weaknesses of recurrent neural networks, where words in a sentence are slowly processed one at a time. Recurrent neural networks favor more recent words at the end of a sentence while earlier words fade away in volatile neural activations.</a></li>
			</SubList></li>
		</ul>
	</div>

	<h2 id="multilayer_perceptrons">Multilayer Perceptrons</h2>
	<div className="content">
		<ul data-source={9} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>Hidden Layers:<SubList>
				<li>Linearity implies the weaker assumption of monotonicity, i.e., that any increase in our feature must either always cause an increase in our model's output (if the corresponding weight is positive), or always cause a decrease in our model's output (if the corresponding weight is negative).</li>
				<li>What about classifying images of cats and dogs? Should increasing the intensity of the pixel at location (13, 17) always increase (or always decrease) the likelihood that the image depicts a dog? Reliance on a linear model corresponds to the implicit assumption that the only requirement for differentiating cats and dogs is to assess the brightness of individual pixels. This approach is doomed to fail in a world where inverting an image preserves the category.</li>
				<li>We can overcome the limitations of linear models by incorporating one or more hidden layers.</li>
				<figure>
					<ImgComp width="80%" src={require("./deep_learning_pics/16.jpg")}/>
					<figcaption>This MLP has four inputs, three outputs, and its hidden layer contains five hidden units. The number of layers in this MLP is two (hidden + output).</figcaption>
				</figure>
				<li>Let \({"\\mathbf{X} \\in \\mathbb{R}^{n \\times d}"}\) a minibatch of examples where each example has inputs (features).</li>
				<li>For a one-hidden-layer MLP whose hidden layer has \({"h"}\) hidden units, let \({"\\mathbf{H} \\in \\mathbb{R}^{n \\times h}"}\) be the outputs of the hidden layer.</li>
				<li>We have hidden-layer weights \({"\\mathbf{W}^{(1)} \\in \\mathbb{R}^{d \\times h}"}\) and biases \({"\\mathbf{b}^{(1)} \\in \\mathbb{R}^{1 \\times h}"}\) and output-layer weights \({"\\mathbf{W}^{(2)} \\in \\mathbb{R}^{h \\times q}"}\) and biases \({"\\mathbf{b}^{(2)} \\in \\mathbb{R}^{1 \\times q}"}\).</li>
				<li>his allows us to calculate the outputs \({"\\mathbf{O} \\in \\mathbb{R}^{n \\times q}"}\):</li>
				<MathStuff>$${`\\begin{aligned}
				\\mathbf{H} & = \\mathbf{X} \\mathbf{W}^{(1)} + \\mathbf{b}^{(1)} \\\\
				\\mathbf{O} & = \\mathbf{H}\\mathbf{W}^{(2)} + \\mathbf{b}^{(2)}
				\\end{aligned}`}$$</MathStuff>
				<li>The hidden units above are given by an affine function of the inputs, and the outputs (pre-softmax) are just an affine function of the hidden units.</li>
				<li>An affine function of an affine function is itself an affine function. A linear model is capable of representing any affine function:<SubList>
					<li>To see this formally we can just collapse out the hidden layer in the above definition, yielding an equivalent single-layer model with parameters \({"\\mathbf{W} = \\mathbf{W}^{(1)}\\mathbf{W}^{(2)}"}\) and \({"\\mathbf{b} = \\mathbf{b}^{(1)} \\mathbf{W}^{(2)} + \\mathbf{b}^{(2)}"}\):</li>
					<MathStuff>$${`\\begin{aligned}\\mathbf{O} &= (\\mathbf{X} \\mathbf{W}^{(1)} + \\mathbf{b}^{(1)})\\mathbf{W}^{(2)} + \\mathbf{b}^{(2)} \\\\ &= \\mathbf{X} \\mathbf{W}^{(1)}\\mathbf{W}^{(2)} + \\mathbf{b}^{(1)} \\mathbf{W}^{(2)} + \\mathbf{b}^{(2)} \\\\ &= \\mathbf{X} \\mathbf{W} + \\mathbf{b}\\end{aligned}`}$$</MathStuff>
				</SubList></li>
				<li>In order to realize the potential of multilayer architectures, we need one more key ingredient: a nonlinear activation function \({"\\sigma"}\) to be applied to each hidden unit following the affine transformation.</li>
				<li>A popular choice is the ReLU (rectified linear unit) activation function \({"\\sigma(x) = \\mathrm{max}(0, x)"}\) operating on its arguments elementwise.</li>
				<li>In general, with activation functions in place, it is no longer possible to collapse our MLP into a linear model:</li>
				<MathStuff>$${`\\begin{aligned}
					\\mathbf{H} & = \\sigma(\\mathbf{X} \\mathbf{W}^{(1)} + \\mathbf{b}^{(1)}) \\\\
					\\mathbf{O} & = \\mathbf{H}\\mathbf{W}^{(2)} + \\mathbf{b}^{(2)}\\\\
				\\end{aligned}`}$$</MathStuff>
				<li>To build more general MLPs, we can continue stacking hidden layers, one atop another, yielding ever more expressive models.</li>
				<li>Just because a single-hidden-layer network can learn any function does not mean that you should try to solve all of your problems with one. We can approximate many functions much more compactly by using deeper (rather than wider) networks.</li>
			</SubList></li>
			<li>Activation Functions:<SubList>
				<li>They are differentiable operators for transforming input signals to outputs, while most of them add nonlinearity.</li>
				<li>ReLU:<SubList>
					<MathStuff>$${`\\operatorname{ReLU}(x) = \\max(x, 0)`}$$</MathStuff>
					<li>Informally, the ReLU function retains only positive elements and discards all negative elements by setting the corresponding activations to 0.</li>
					<li>When the input is negative, the derivative of the ReLU function is 0, and when the input is positive, the derivative of the ReLU function is 1. Note that the ReLU function is not differentiable when the input takes value precisely equal to 0.</li>
					<li>In these cases, we default to the left-hand-side derivative and say that the derivative is 0 when the input is 0.</li>
				</SubList></li>
				<li>Sigmoid:<SubList>
					<MathStuff>$${`\\operatorname{sigmoid}(x) = \\frac{1}{1 + \\exp(-x)}`}$$</MathStuff>
					<li>The sigmoid function transforms those inputs whose values lie in the domain \({"\\mathbb{R}"}\), to outputs that lie on the interval (0, 1).</li>
					<li><ImgComp src={require("./deep_learning_pics/17.png")}/></li>
					<li>The derivative of the sigmoid function is given by the following equation:</li>
					<MathStuff>$${`\\begin{align}\\frac{d}{dx} \\operatorname{sigmoid}(x) &= \\frac{\\exp(-x)}{(1 + \\exp(-x))^2} \\\\ &= \\operatorname{sigmoid}(x)\\left(1-\\operatorname{sigmoid}(x)\\right)\\end{align}`}$$</MathStuff>
				</SubList></li>
				<li>Tanh:<SubList>
					<li>The tanh (hyperbolic tangent) function also squashes its inputs, transforming them into elements on the interval between \(-1\) and \(1\):</li>
					<MathStuff>$${`\\operatorname{tanh}(x) = \\frac{1 - \\exp(-2x)}{1 + \\exp(-2x)}`}$$</MathStuff>
					<li>The derivative of the tanh function is:</li>
					<MathStuff>$${`\\frac{d}{dx} \\operatorname{tanh}(x) = 1 - \\operatorname{tanh}^2(x)`}$$</MathStuff>
					<li></li>
					<li></li>
				</SubList></li>
			</SubList></li>
			<li>Forward propagation:<SubList>
			<li>Let's assume that the input example is \({"\\mathbf{x}\\in \\mathbb{R}^d"}\) and that our hidden layer does not include a bias term. Here the intermediate variable is:</li>
				<MathStuff>$${"\\mathbf{z}= \\mathbf{W}^{(1)} \\mathbf{x}"}$$</MathStuff>
				<li>Where \({"\\mathbf{W}^{(1)} \\in \\mathbb{R}^{h \\times d}"}\) is the weight parameter of the hidden layer. After running the intermediate variable \({"\\mathbf{z}\\in \\mathbb{R}^h"}\) through the activation function \({"\\phi"}\) we obtain our hidden activation vector of length h:</li>
				<MathStuff>$${"\\mathbf{h}= \\phi (\\mathbf{z})"}$$</MathStuff>
				<li>The hidden layer output \({"\\mathbf{h}"}\) is also an intermediate variable. Assuming that the parameters of the output layer possess only a weight of \({"\\mathbf{W}^{(2)} \\in \\mathbb{R}^{q \\times h}"}\), we can obtain an output layer variable with a vector of length \(q\):</li>
				<MathStuff>$${"\\mathbf{o}= \\mathbf{W}^{(2)} \\mathbf{h}"}$$</MathStuff>
				<li>Assuming that the loss function is \(l\) and the example label is \(y\), we can then calculate the loss term for a single data example:</li>
				<MathStuff>$${"L = l(\\mathbf{o}, y)"}$$</MathStuff>
				<li>Given the hyperparameter \({"\\lambda"}\), the regularization term is</li>
				<MathStuff>$${`s = \\frac{\\lambda}{2} \\left(\\|\\mathbf{W}^{(1)}\\|_\\textrm{F}^2 + \\|\\mathbf{W}^{(2)}\\|_\\textrm{F}^2\\right),`}$$</MathStuff>
				<li>Finally, the model's regularized loss is:</li>
				<MathStuff>$${`J = L + s.`}$$</MathStuff>
			</SubList></li>
			<li>Backpropagation:<SubList>
				<li><b>Backpropagation</b> refers to the method of calculating the gradient of neural network parameters. In short, the method traverses the network in reverse order, from the output to the input layer, according to the chain rule from calculus.</li>
				<li>Assume that we have functions \({"\\mathsf{Y}=f(\\mathsf{X})"}\) and \({"\\mathsf{Z}=g(\\mathsf{Y})"}\). By using the chain rule, we can compute the derivative \({"\\mathsf{Z}"}\) of with respect to \({"\\mathsf{X}"}\):</li>
				<MathStuff>$${`\\frac{\\partial \\mathsf{Z}}{\\partial \\mathsf{X}} = \\textrm{prod}\\left(\\frac{\\partial \\mathsf{Z}}{\\partial \\mathsf{Y}}, \\frac{\\partial \\mathsf{Y}}{\\partial \\mathsf{X}}\\right)`}$$</MathStuff>
				<li>The first step is to calculate the gradients of the objective function \({"J=L+s"}\) with respect to the loss term \({"L"}\) and the regularization term \({"s"}\):</li>
				<MathStuff>$${`\\frac{\\partial J}{\\partial L} = 1 \\; \\textrm{and} \\; \\frac{\\partial J}{\\partial s} = 1`}$$</MathStuff>
				<li>Next, we compute the gradient of the objective function with respect to variable of the output layer \({"\\mathbf{o} "}\) according to the chain rule:</li>
				<MathStuff>$${`\\frac{\\partial J}{\\partial \\mathbf{o}} = \\textrm{prod}\\left(\\frac{\\partial J}{\\partial L}, \\frac{\\partial L}{\\partial \\mathbf{o}}\\right) = \\frac{\\partial L}{\\partial \\mathbf{o}} \\in \\mathbb{R}^q`}$$</MathStuff>
				<li>Next, we calculate the gradients of the regularization term with respect to both parameters:</li>
				<MathStuff>$${`\\frac{\\partial s}{\\partial \\mathbf{W}^{(1)}} = \\lambda \\mathbf{W}^{(1)} \\; \\textrm{and} \\frac{\\partial s}{\\partial \\mathbf{W}^{(2)}} = \\lambda \\mathbf{W}^{(2)}`}$$</MathStuff>
				<li>Using the chain rule yields:</li>
				<MathStuff>$${`\\begin{align}\\frac{\\partial J}{\\partial \\mathbf{W}^{(2)}} &= \\textrm{prod}\\left(\\frac{\\partial J}{\\partial \\mathbf{o}}, \\frac{\\partial \\mathbf{o}}{\\partial \\mathbf{W}^{(2)}}\\right) + \\textrm{prod}\\left(\\frac{\\partial J}{\\partial s}, \\frac{\\partial s}{\\partial \\mathbf{W}^{(2)}}\\right) \\\\ &= \\frac{\\partial J}{\\partial \\mathbf{o}} \\mathbf{h}^\\top + \\lambda \\mathbf{W}^{(2)}\\end{align}`}$$</MathStuff>
				<li>The gradient with respect to the hidden layer output \({"\\partial J/\\partial \\mathbf{h} \\in \\mathbb{R}^h"}\) is given by:</li>
				<MathStuff>$${`\\frac{\\partial J}{\\partial \\mathbf{h}} = \\textrm{prod}\\left(\\frac{\\partial J}{\\partial \\mathbf{o}}, \\frac{\\partial \\mathbf{o}}{\\partial \\mathbf{h}}\\right) = {\\mathbf{W}^{(2)}}^\\top \\frac{\\partial J}{\\partial \\mathbf{o}}`}$$</MathStuff>
				<li>Since the activation function \({"\\phi"}\) applies elementwise, calculating the gradient \({"\\partial J/\\partial \\mathbf{z} \\in \\mathbb{R}^h"}\) of the intermediate variable \({"\\mathbf{z}"}\) requires that we use the elementwise multiplication operator, denoted by \({"\\odot"}\):</li>
				<MathStuff>$${`\\frac{\\partial J}{\\partial \\mathbf{z}} = \\textrm{prod}\\left(\\frac{\\partial J}{\\partial \\mathbf{h}}, \\frac{\\partial \\mathbf{h}}{\\partial \\mathbf{z}}\\right) = \\frac{\\partial J}{\\partial \\mathbf{h}} \\odot \\phi'\\left(\\mathbf{z}\\right)`}$$</MathStuff>
				<li>Finally, we can obtain the gradient \({"\\partial J/\\partial \\mathbf{W}^{(1)} \\in \\mathbb{R}^{h \\times d}"}\) of the model parameters closest to the input layer. According to the chain rule, we get:</li>
				<MathStuff>$${`\\begin{align}\\frac{\\partial J}{\\partial \\mathbf{W}^{(1)}} &= \\textrm{prod}\\left(\\frac{\\partial J}{\\partial \\mathbf{z}}, \\frac{\\partial \\mathbf{z}}{\\partial \\mathbf{W}^{(1)}}\\right) + \\textrm{prod}\\left(\\frac{\\partial J}{\\partial s}, \\frac{\\partial s}{\\partial \\mathbf{W}^{(1)}}\\right) \\\\ &= \\frac{\\partial J}{\\partial \\mathbf{z}} \\mathbf{x}^\\top + \\lambda \\mathbf{W}^{(1)}\\end{align}`}$$</MathStuff>
			</SubList></li>
		</ul>
		<ul data-source={9} style={{width: "49%",marginRight: "0.5%",float: "right"}}>
			<li>Initialization:<SubList>
				<li>The choice of initialization scheme plays a significant role in neural network learning.  Moreover, these choices can be tied up in interesting ways with the choice of the nonlinear activation function.</li>
				<li>Which function we choose and how we initialize parameters can determine how quickly our optimization algorithm converges. Poor choices here can cause us to encounter exploding or vanishing gradients while training.</li>
				<li>Gradients of unpredictable magnitude also threaten the stability of our optimization algorithms. We may be facing parameter updates that are either:<SubList opened={true}>
					<li>excessively large, destroying our model (the exploding gradient problem);</li>
					<li>or excessively small (the vanishing gradient problem), rendering learning impossible as parameters hardly move on each update.</li>
				</SubList></li>
				<li>One frequent culprit causing the vanishing gradient problem is the choice of the activation function \({"\\sigma"}\) that is appended following each layer's linear operations.</li>
				<li>Vanishing Gradients:<SubList>
					<li>The sigmoid function's gradient vanishes both when its inputs are large and when they are small. Moreover, when backpropagating through many layers, unless we are in the Goldilocks zone, where the inputs to many of the sigmoids are close to zero, the gradients of the overall product may vanish. When our network boasts many layers, unless we are careful, the gradient will likely be cut off at some layer.</li>
					<li>Consequently, ReLUs, which are more stable (but less neurally plausible), have emerged as the default choice for practitioners.</li>
				</SubList></li>
				<li>Symmetry:<SubList>
					<li>Consider a one-hidden-layer MLP with two hidden units, and suppose that the output layer transforms the two hidden units into only one output unit.</li>
					<li>What would happen if we initialized all the parameters of the hidden layer as \({"\\mathbf{W}^{(1)} = c"}\) for some constant \({"c"}\)?</li>
					<li>During forward propagation either hidden unit takes the same inputs and parameters producing the same activation which is fed to the output unit.</li>
					<li>During backpropagation, differentiating the output unit with respect to parameters \({"\\mathbf{W}^{(1)}"}\) gives a gradient all of whose elements take the same value. Thus, after gradient-based iteration, all the elements of \({"\\mathbf{W}^{(1)}"}\) still take the same value. </li>
					<li>Such iterations would never "break the symmetry" on their own. The hidden layer would behave as if it had only a single unit.</li>
					<li>While minibatch stochastic gradient descent would not break this symmetry, dropout regularization would!</li>
				</SubList></li>
			</SubList></li>
			<li>Generalization in Deep Learning:<SubList>
				<li><a href='https://en.wikipedia.org/wiki/Inductive_bias'>The <b>inductive bias</b> (also known as learning bias) of a learning algorithm is the set of assumptions that the learner uses to predict outputs of given inputs that it has not encountered.</a></li>
				<li>With machine learning models encoding inductive biases, our approach to training them typically consists of two phases:<SubList opened={true}>
					<li>fit the training data;</li>
					<li>and estimate the generalization error (the true error on the underlying population) by evaluating the model on holdout data.</li>
				</SubList></li>
				<li>The difference between our fit on the training data and our fit on the test data is called the <b>generalization gap</b> and when this is large, we say that our models <b>overfit</b> to the training data.</li>
				<li>Early Stopping:<SubList>
					<li>While deep neural networks are capable of fitting arbitrary labels, even when labels are assigned incorrectly or randomly, this capability only emerges over many iterations of training.</li>
					<li>A new line of work has revealed that in the setting of label noise, neural networks tend to fit cleanly labeled data first and only subsequently to interpolate the mislabeled data.</li>
					<li>This finding helps to motivate early stopping, rather than directly constraining the values of the weights, one constrains the number of epochs of training.</li>
				</SubList></li>
			</SubList></li>
			<li>Dropout:<SubList>
				<li>Classical generalization theory suggests that to close the gap between train and test performance, we should aim for a simple model.</li>
				<li><b>Dropout:</b> involves injecting noise while computing each internal layer during forward propagation.</li>
				<li>On each iteration, standard dropout consists of zeroing out some fraction of the nodes in each layer before calculating the subsequent layer.</li>
				<li>The key challenge is how to inject this noise. One idea is to inject it in an unbiased manner so that the expected value of each layer equals the value it would have taken absent noise. In standard dropout regularization, one zeros out some fraction of the nodes in each layer and then debiases each layer by normalizing by the fraction of nodes that were retained (not dropped out).</li>
				<li>However, there are some exceptions: some researchers use dropout at test time as a heuristic for estimating the uncertainty of neural network predictions: if the predictions agree across many different dropout outputs, then we might say that the network is more confident.</li>
			</SubList></li>
		</ul>
	</div>

	<h2 id="conv_nn">Convolutional Neural Networks</h2>
	<div className="content">
		<ul data-source={8} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li>Tasks in computer vision:<SubList>
				<li><b>Regression:</b> output variable takes continuous value.</li>
				<li><b>Classification:</b> output variable takes class label (produces probability of belonging to a particular class).</li>
			</SubList></li>
			<li>Learning visual features:<SubList>
				<li>Using a fully connected neural network:<SubList>
					<li>2D image has to be changed to a vector of pixel values for our input.</li>
					<li>Neuron in hidden layer connects to all neurons in the input layer.</li>
					<li>No spatial information and many parameters.</li>
				</SubList></li>
				<li>Using spatial structure:<SubList>
					<li>Connect patches of input to neurons in hidden layer.</li>
					<li><ImgComp width="90%" src={require("./deep_learning_pics/26.png")}/></li>
					<li>Each patch from the input layer influences a single neuron in the next layer.</li>
					<li>The patch window "slides" across the whole input.</li>
					<li>We can apply a set of weights (or a <b>filter</b>) to the patch to extract features, and use multiple filters to extract different features.</li>
					<li>This "patchy" operation is <b>convolution</b>:<SubList>
						<li>Suppose we want to apply this filter to a 5 by 5 image:</li>
						<li><ImgComp width="95%" src={require("./deep_learning_pics/27.png")}/></li>
						<li>We slide the filter over the input image, element-wise multiply and add the output:</li>
						<li><ImgComp width="95%" src={require("./deep_learning_pics/28.gif")}/></li>
					</SubList></li>
				</SubList></li>
			</SubList></li>
			<li>Convolutional neural network:<SubList>
				<li>Use convolution to apply filters and generate feature maps.</li>
				<li><figure>
					<ImgComp width="60%" src={require("./deep_learning_pics/29.png")}/>
					<figcaption>The depth here represents the number of filters</figcaption>
				</figure></li>
				<li>Add some non-linearity like ReLU.</li>
				<li>Use <b>pooling</b> (down size your image). One way to do this is by taking the maximum value from a patch, and using that one value instead of whole patch:</li>
				<li><figure>
					<ImgComp width="80%" src={require("./deep_learning_pics/30.png")}/>
					<figcaption><b>Stride</b> means the step size</figcaption>
				</figure></li>
				<li>By repeated applying convolution, non-linearity and pooling, we can learn hierarchies of features:</li>
				<li><ImgComp width="90%" src={require("./deep_learning_pics/31.png")}/></li>
				<li>Convolution and pooling layers output high level features, and the neural network uses these for classification (the output is expressed as a probability).</li>
				<li><ImgComp width="90%" src={require("./deep_learning_pics/32.png")}/></li>
			</SubList></li>
			<li>Object detection with R-CNNs:<SubList>
				<li><a href='https://en.wikipedia.org/wiki/Region_Based_Convolutional_Neural_Networks'><b>Region-based Convolutional Neural Networks (R-CNN)</b> are a family of machine learning models for computer vision and specifically object detection.</a></li>
				<li><figure>
						<ImgComp width="90%" src={require("./deep_learning_pics/33.png")}/>
						<figcaption>Using R-CNN with regions we suspect might have the object.</figcaption>
				</figure></li>
				<li><u>Problem:</u> too slow</li>
			</SubList></li>
		</ul>
	</div>

	<h2 id="Unsupervised_Learning">Unsupervised Learning</h2>
	<div className="content" >
		<ul data-source={8} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li><b>Generative Modeling:</b><SubList>
				<li>Take as input training samples from some distribution and learn a model that represents that distribution.</li>
			</SubList></li>
			<li>Latent Variable Models:<SubList>
				<li><a href='https://en.wikipedia.org/wiki/Latent_and_observable_variables'>In statistics, <b>latent variables</b> are variables that can only be inferred indirectly through a mathematical model from other observable variables that can be directly observed or measured</a>.</li>
				<li><a href='https://en.wikipedia.org/wiki/Latent_variable_model'>A <b>latent variable model</b> is a statistical model that relates a set of observable variables to a set of latent variables.</a></li>
				<li><b>Autoencoders:</b><SubList>
					<li>Take raw input data, pass it through a neural network and output a <i>low dimensional latent space</i>. The output should be an efficient low dimensional ocmpact encoding of the input. The higher the dimensions, the better the reconstruction.</li>
					<li><ImgComp src={require("./deep_learning_pics/34.png")} style={{width:"100%"}}/></li>
					<li>Encoder maps \({"x"}\) to \({"z"}\), and decoder maps to a reconstructed version \({"\\hat{x}"}\).</li>
					<li>The loss funciton doesn't use separate label data:</li>
					<MathStuff>{`\\begin{aligned}
						L(x, \\hat{x}) &= \\|x-\\hat{x}\\|^2
					\\end{aligned}`}</MathStuff>
					<li><b>Variational autoencoders:</b> generates new data instances similar to the input data but not forced to be strict reconstructions.</li>
					<li><ImgComp src={require("./deep_learning_pics/35.png")} style={{width:"100%"}}/></li>
				</SubList></li>
				<li><b>Generative Adversarial Networks:</b><SubList>
					<li>Used when sampling from complex distribution directly is too difficult. Solution is to sample from something simple, like noise, then learn a transformation to the data distribution.</li>
					<li>GAN's make two neural network compete with each other.</li>
					<li><ImgComp src={require("./deep_learning_pics/36.png")} style={{width:"100%"}}/></li>
				</SubList></li>
			</SubList></li>
			<li><b>Reinforcement Learning:</b><SubList>
				<li>Data is in the form of <i>state-action</i> piars. States is what the agent observes, and the action is the behaviour the agent would take. The goal is to maximize rewards.</li>
				<li>The action space \({"A"}\) is the set of possible actions the agent can make in the environment.</li>
				<li><ImgComp src={require("./deep_learning_pics/37.png")} style={{width:"100%"}}/></li>
				<li>The \({"Q"}\)-function captures the total future reward an agent in state \({"s"}\) can recieve by executing action \({"a"}\):</li>
				<MathStuff>$${"Q(s_t,a_t)= \\mathbb{E}[R_t|s_t,a_t]"}$$</MathStuff>
				<li>The agent needs a policy \({"\\pi(s)"}\) to infer the best action:</li>
				<MathStuff>$${"\\pi^*(s)= \\underset{a}{\\operatorname{argmax}} Q(s|a)"}$$</MathStuff>
				<li><b>Value Learning:</b><SubList>
					<li>It can be difficult for humans to estimate the \({"Q"}\) values.</li>
					<li>Use NN to learn \({"Q"}\) values. The NN takes the state as the input and outputs \({"n"}\) different actions.</li>
					<li><ImgComp src={require("./deep_learning_pics/39.png")} style={{width:"100%"}}/></li>
					<li>\({"Q"}\) learning cannot handle continous action spaces.</li>
				</SubList></li>
				<li><b>Policy Learning:</b><SubList>
					<li><ImgComp src={require("./deep_learning_pics/40.png")} style={{width:"100%"}}/></li>
					<li>This enables modelling continous action spaces.</li>
					<li><ImgComp src={require("./deep_learning_pics/41.png")} style={{width:"100%"}}/></li>
					<li>Training Algorithm:</li>
					<li><CodePre language="plaintext">{`
Initialize the agent
Run a policy until termination
Record all states, actions and rewards
Decrease the probability of actions that resulted in low reward
Increase the probability of actions that resulted in high reward
					`}</CodePre></li>
				</SubList></li>
				<li><ImgComp src={require("./deep_learning_pics/38.png")} style={{width:"100%"}}/></li>
			</SubList></li>
		</ul>
	</div>

	<h2 id="Limitations">Limitations</h2>
	<div className="content">
		<ul data-source={8} style={{width: "49%",marginLeft: "0.5%",float: "left"}}>
			<li><b>Universal Approximatation Theorem:</b> A feedforward network with a single layer can approximate (to an arbitrary precision) any continous function. <u>Caveats:</u> The resulting may not generalize and the number of hidden units may be very infeasibly large.</li>
			<li>Neural networks are excellent function approximators... when they have hhave training data.</li>
			<li>Neural networks limitations:<SubList>
				<li>Very data hungry (eg. often millions of examples)</li>
				<li>Computationally intensive to train and deploy</li>
				<li>Easily fooled by adversarial examples</li>
				<li>Can be subject to algorithmic bias</li>
				<li>Poor at representing uncertainty</li>
				<li>Uninterpretable black boxes, difficult to trust</li>
				<li>Often require expert knowledge to design, fine tune architectures</li>
				<li>Difficult to encode structure and prior knowledge during learning</li>
				<li>Extrapolation: struggle to go beyond the data</li>
			</SubList></li>
			<li>Encoding structure into Deep Learning:<SubList>
				<li>Convolutional Neural Networks</li>
				<li>Graph Convolutional Networks</li>
			</SubList></li>
			<li>Diffusion Models and Generative AI:<SubList>
				<li><ImgComp src={require("./deep_learning_pics/42.png")} style={{width:"100%"}}/></li>
			</SubList></li>
		</ul>
	</div>
</>










