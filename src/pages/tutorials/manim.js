import SubList from "../../articleRelatedStuff/SubList";
import { ImgComp } from "../../articleRelatedStuff/ImgComp";
import { CodePre } from "../../articleRelatedStuff/Code";

export const title = "Manim Tutorial notes";

export const content = <>
<h1>Manim Tutorial</h1>

<h2 id="officialTutorial1">docs.manim.community/en/stable/tutorials/</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}}>
		<h3>Quickstart</h3>
		<ul>
			<li><code>Scene</code>: the class through which Manim generates videos</li>
			<li>Animating a circle using <code>Scene</code> in the file "first.py":</li>
			<li><CodePre language="python">{`
from manim import *

class CreateCircle(Scene):
	def construct(self):
		circle = Circle()  # create a circle
		circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
		self.play(Create(circle))  # show the circle on screen
			`}</CodePre></li>
			<li>Most of the time, the code for scripting an animation is entirely contained within the <code>construct()</code> method of a <code>Scene</code> class. Inside <code>construct()</code>, you can create objects, display them on screen, and animate them.</li>
			<li><code>self.play(Create(circle))</code> uses the animation <code>Create</code> to display the circle on your screen.</li>
			<li>Open the command line, navigate to your project folder, and execute the following command: <code>manim -pql first.py CreateCircle</code>. Manim will output rendering information, then create an MP4 file. Your default movie player will play the MP4 file, displaying the following animation:</li>
			<li><ImgComp  src={require("./manimPics/1.gif")}style={{width: "60%"}}/></li>

			<li>In first.py, and add the following code snippet below the <code>SquareToCircle</code> method:</li>
			<li><CodePre language="python">{`
class SquareAndCircle(Scene):
	def construct(self):
		circle = Circle()  # create a circle
		circle.set_fill(PINK, opacity=0.5)  # set the color and transparency

		square = Square()  # create a square
		square.set_fill(BLUE, opacity=0.5)  # set the color and transparency

		square.next_to(circle, RIGHT, buff=0.5)  # set the position
		self.play(Create(circle), Create(square))  # show the shapes on screen
			`}</CodePre></li>
			<li>Render <code>SquareAndCircle</code> by running the following command in the command line: <code>manim -pql scene.py SquareAndCircle</code>.</li>
			<li><ImgComp  src={require("./manimPics/2.gif")}style={{width: "60%"}}/></li>
			<li>We first specified the pink circle as the square's reference point by passing circle as <code>next_to</code>'s first argument. The second argument is used to specify the direction. In this case, we set the direction to RIGHT, telling Manim to position the square to the right of the circle. Finally, <code>buff=0.5</code> applied a small distance buffer between the two objects. If <code>square.next_to(circle, DOWN, buff=0)</code> is used instead:</li>
			<li><ImgComp  src={require("./manimPics/3.gif")}style={{width: "60%"}}/></li>

			<li>Transforming a square into a circle:</li>
			<li><CodePre language="python">{`
class SquareToCircle(Scene):
	def construct(self):
		circle = Circle()  # create a circle
		circle.set_fill(PINK, opacity=0.5)  # set color and transparency

		square = Square()  # create a square
		square.rotate(PI / 4)  # rotate a certain amount

		self.play(Create(square))  # animate the creation of the square
		self.play(Transform(square, circle))  # interpolate the square into circle
		self.play(FadeOut(square))  # fade out animation
			`}</CodePre></li>
			<li>Render <code>SquareToCircle</code> by running the following command in the command line: <code>manim -pql scene.py SquareToCircle</code>.</li>
			<li><ImgComp  src={require("./manimPics/4.gif")}style={{width: "60%"}}/></li>
			<li>When you CodePrepend <code>.animate</code> to any method call that modifies the square, the method becomes an animation which can be played using <code>self.play</code>. For example:</li>
			<li><CodePre language="python">{`
class AnimatedSquareToCircle(Scene):
	def construct(self):
		circle = Circle()  # create a circle
		square = Square()  # create a square

		self.play(Create(square))  # show the square on screen
		self.play(square.animate.rotate(PI / 4))  # rotate the square
		self.play(ReplacementTransform(square, circle))  # transform into a circle
		self.play(circle.animate.set_fill(PINK, opacity=0.5))  # color the circle
			`}</CodePre></li>
			<li>We change <code>square.rotate(PI / 4)</code> to <code>self.play(square.animate.rotate(PI / 4))</code>. This will render:</li>
			<li><ImgComp  src={require("./manimPics/5.gif")}style={{width: "60%"}}/></li>
		</ul>
	</div>
	<div style={{width: "49%",float: "right",marginRight: "0.5%"}}>
		<h3>Output Settings</h3>
		<ul>
		<li>When you execute <code>manim -pql first.py SquareToCircle</code>, manim to play the scene once it's rendered because of the <code>-p</code> flag.</li>
		<li>The <code>-ql</code> flag tells manim to render the scene in low quality. For high quality, use <code>-qh</code>.</li>
		<li>If you run all the animation in quickstart, you will have a project structure like this:</li>
		<li><CodePre>{`
first.py
media
└─videos
   └─first
	  └─480p15
		 ├─AnimatedSquareToCircle.mp4
		 ├─CreateCircle.mp4
		 ├─SquareAndCircle.mp4
		 ├─SquareToCircle.mp4
		 └─partial_movie_files
		`}</CodePre></li>
		<li>If you execute <code>manim -pqh first.py SquareToCircle</code></li>
		<li><CodePre>{`
first.py
media
└─videos
   └─first
	  ├─480p15
	  |  ├─AnimatedSquareToCircle.mp4
	  |  ├─CreateCircle.mp4
	  |  ├─SquareAndCircle.mp4
	  |  ├─SquareToCircle.mp4
	  |  └─partial_movie_files
	  └─1080p60
		 ├─SquareToCircle.mp4
		 └─partial_movie_files
		`}</CodePre></li>
		<li>Manim has the option to output the last frame of a scene, when adding the flag <code>-s</code>. The frame will be saved in the <code>images</code> folder in the <code>media</code> folder.</li>
		<li><CodePre>{`
first.py
media
├─images
|  └─first
└─videos
   └─first
	  ├─480p15
	  |  ├─AnimatedSquareToCircle.mp4
	  |  ├─CreateCircle.mp4
	  |  ├─SquareAndCircle.mp4
	  |  ├─SquareToCircle.mp4
	  |  └─partial_movie_files
	  └─1080p60
		 ├─SquareToCircle.mp4
		 └─partial_movie_files
		`}</CodePre></li>
		<li>In addition to the movie output file one can use <b>sections</b>. Each section produces its own output video. The cuts between two sections can be set like this:</li>
		<li><CodePre language="python">{`
class showSections(Scene):
	def construct(self):
		# play the first animations...
		# you don't need a section in the very beginning as it gets created automatically
		circle = Circle()
		square = Square()
		self.play(Create(circle), Create(square))
		self.next_section("this is an optional name that doesn't have to be unique")
		# play more animations...
		self.play(square.animate.rotate(PI / 4))
		self.next_section("this is a section without any animations, it will be removed")
		`}</CodePre></li>
		<li>All the animations between two of these cuts get concatenated into a single output video file, but if I execute <code>manim -ql --save_sections first.py showSections</code>, I will get the <code>sections</code> folder in the <code>480p15</code> folder.</li>
		<li><CodePre>{`
first.py
media
├─images
|  └─first
└─videos
   └─first
	  ├─480p15
	  |  ├─sections
	  |  |   ├─showSections.json
	  |  |   ├─showSections_0000.mp4
	  |  |   └─showSections_0001.mp4
	  |  ├─AnimatedSquareToCircle.mp4
	  |  ├─CreateCircle.mp4
	  |  ├─SquareAndCircle.mp4
	  |  ├─SquareToCircle.mp4
	  |  └─partial_movie_files
	  └─1080p60
		 ├─SquareToCircle.mp4
		 └─partial_movie_files
		`}</CodePre></li>
		<li>The <code>showSections_0000.mp4</code> file and the <code>showSections_0001.mp4</code> file have these animations:</li>
		<li style={{listStyleType: "none"}}><div>
			<ImgComp  src={require("./manimPics/6.gif")}style={{width: "50%", float: "left"}}/>
			<ImgComp  src={require("./manimPics/7.gif")}style={{width: "50%", float: "right"}}/>
		</div></li>
		<li>The JSON file in here contains some useful information for each section. This data can be used by third party applications, like a CodePresentation system or automated video editing tool.</li>
		</ul>
		<h3>Manim's building blocks</h3>
		<ul>
			<li><b>Mobjects</b> are the basic building blocks for all manim animations. Each class that derives from Mobject reCodePresents an object that can be displayed on the screen. For example, simple shapes such as <b>Circle</b> are mobjects.</li>
			<li>If you try to display an instance of Mobject on the screen, you will only see an empty frame. The reason is that the Mobject class is an abstract base class. It is only the skeleton of a thing that could be displayed. Therefore, you will rarely need to use plain instances of Mobject; instead, you will most likely create instances of its derived classes. One of these derived classes is <b>VMobject</b>. The V stands for Vectorized Mobject. It is a mobject that uses vector graphics to be displayed.</li>
			<li>Usually all of the code in a manim script is put inside the <code>construct()</code> method of a <code>Scene</code> class. Call the <code>add()</code> to display a mobject on the screen when it is not being animated. To remove a mobject from the screen, simply call the <code>remove()</code> method. By default, mobjects are placed at the center of coordinates, or origin, when they are first created. They are also given some default colors.</li>
			<li><CodePre language="python">{`
class Shapes(Scene):
	def construct(self):
		circle = Circle()
		square = Square()
		triangle = Triangle()

		circle.shift(LEFT)
		square.shift(UP)
		triangle.shift(RIGHT)

		self.add(circle, square, triangle)
		self.wait(1)
			`}</CodePre></li>
			<li>The <code>Shapes</code> scene places the mobjects by using the <code>shift()</code> method.</li>
			<li><ImgComp  src={require("./manimPics/8.png")}style={{width: "60%"}}/></li>
			<li>By default, any animation passed to <code>play()</code> lasts for exactly one second. Use the <code>run_time</code> argument to control the duration.</li>
			<li><CodePre language="python">{`
class RunTime(Scene):
	def construct(self):
		square = Square()
		self.add(square)
		self.play(square.animate.shift(UP), run_time=3)
		self.wait(1)
			`}</CodePre></li>
			<li><ImgComp  src={require("./manimPics/9.gif")}style={{width: "60%"}}/></li>
			<li>To define your own custom animation, you can start by extending the Animation class and overriding its <code>interpolate_mobject()</code>. The method receives <code>alpha</code> as a parameter that starts at 0 and changes throughout the animation. So, you just have to manipulate <code>self.mobject</code> inside <code>Animation</code> according to the <code>alpha</code> value in its <code>interpolate_mobject</code> method. Then you get all the benefits of <code>Animation</code> such as playing it for different run times.</li>
			<li><CodePre language="python">{`
class Count(Animation):
	def __init__(self, number: DecimalNumber, start: float, end: float):
		# Pass number as the mobject of the animation
		super().__init__(number)
		# Set start and end
		self.start = start
		self.end = end

	def interpolate_mobject(self, alpha: float):
		# Set value of DecimalNumber according to alpha
		value = self.start + (alpha * (self.end - self.start))
		self.mobject.set_value(value)

class CountingScene(Scene):
	def construct(self):
		# Create Decimal Number and add it to scene
		number = DecimalNumber().set_color(WHITE).scale(5)
		self.add(number)
		self.wait(1)

		# Play the Count Animation to count from 0 to 100 in 4 seconds
		self.play(Count(number, 0, 100), run_time=4)
		self.wait(1)
			`}</CodePre></li>
			<li>The <code>Count</code> class extends <code>Animation</code>. The class can have a constructor with three arguments, a <code>DecimalNumber</code> Mobject, start, and end. The constructor will pass the <code>DecimalNumber</code> Mobject to the super constructor (in this case, the <code>Animation</code> constructor) and will set start and end.</li>
			<li><ImgComp  src={require("./manimPics/10.gif")}style={{width: "60%"}}/></li>
			<li>If you use <code>number.add_updater(lambda number: number.move_to(ORIGIN))</code> like shown, then the <code>DecimalNumber</code> stays centered.</li>
			<li><CodePre language="python">{`
class CountingScene(Scene):
	def construct(self):
		number = DecimalNumber().set_color(WHITE).scale(5)
		number.add_updater(lambda number: number.move_to(ORIGIN))
		self.add(number)
		self.wait(1)
		self.play(Count(number, 0, 100), run_time=4)
		self.wait(1)
			`}</CodePre></li>
			<li><ImgComp  src={require("./manimPics/11.gif")}style={{width: "60%"}}/></li>
		</ul>
	</div>
</div>

<h2 id="officialTutorial2">docs.manim.community/en/stable/guides/</h2>
<div className="content">
	<div style={{width: "49%",float: "left",marginLeft: "0.5%"}}>
		<h3>Configuration</h3>
		<ul>
			<li>The <code>render</code> is used to render scene(s) to an output file. Usage: <code>manim render [OPTIONS] FILE [SCENE_NAMES]...</code>. However, Manim defaults to the <code>render</code> command whenever no command is specified (<code>manim [OPTIONS] FILE [SCENES]</code>).</li>
			<li>Use the <code>-o</code> flag to specify the output, use the <code>-n</code> flag to specify the number of animations to render, use the <code>-c</code> to specify the background color and use the <code>--format=</code> flag to specify the output format. For example, the command <code>manim -qh first.py AnimatedSquareToCircle</code> creates an mp4 file which shows this:</li>
			<li><ImgComp  src={require("./manimPics/12.gif")}style={{width: "60%"}}/></li>
			<li>The command <code>manim -qh --format=gif first.py AnimatedSquareToCircle</code> creates the same thing, but in gif rather than mp4.</li>
			<li>The command <code>manim -o testing -n 1,2 --format=gif first.py AnimatedSquareToCircle</code> creates a gif called "testing.gif", but only the second and the third animation (rotate square and tranform to circle):</li>
			<li><ImgComp  src={require("./manimPics/13.gif")}style={{width: "60%"}}/></li>
			<li>Run <code>manim --help</code> to get a list of all CLI flags.</li>
			<li>Manim has a global <code>config</code> object, which is an instance of <code>ManimConfig</code>. Each property of this class is a config option that can be accessed either with standard attribute syntax or with dict-like syntax:</li>
			<li><CodePre language="python">{`
from manim import *
config.background_color = BLUE
config.CodePreview = True
config["format"] = "gif"
config["output_file"] = "myscene"

class AnimatedSquareToCircle(Scene):
	def construct(self):
		circle = Circle()  # create a circle
		square = Square()  # create a square

		self.play(Create(square)) 
		self.play(square.animate.rotate(PI / 4)) 
		self.play(ReplacementTransform(square, circle)) 
		self.play(circle.animate.set_fill(PINK, opacity=0.5)) 
			`}</CodePre></li>
			<li><ImgComp  src={require("./manimPics/14.gif")}style={{width: "60%"}}/></li>
		</ul>
		<h3>A deep dive into Manim's internals (CodePreliminaries)</h3>
		<ul>
			<li>For <code>from manim import *</code>, Manim makes use of the practice described in <a href='https://docs.python.org/3/tutorial/modules.html#importing-from-a-package'>Section 6.4.1</a> of the Python tutorial.</li>
			<li>In the file <code>__init__.py</code> (see <a href='https://github.com/ManimCommunity/manim/blob/main/manim/__init__.py'>here</a>), there is one particular import at the beginning of the file: <code>from ._config import *</code>. This initializes Manim's global configuration system, which is used in various places throughout the library. After the library runs this line, the current configuration options are set. The code in there takes care of reading the options in your <code>.cfg</code> files and correctly handling command line arguments.</li>
			<li><CodePre language="python">{`
class ToyExample(Scene):
	def construct(self):
		orange_square = Square(color=ORANGE, fill_opacity=0.5)
		blue_circle = Circle(color=BLUE, fill_opacity=0.5)
		self.add(orange_square)
		self.play(ReplacementTransform(orange_square, blue_circle, run_time=3))
		small_dot = Dot()
		small_dot.add_updater(lambda mob: mob.next_to(blue_circle, DOWN))
		self.play(Create(small_dot))
		self.play(blue_circle.animate.shift(RIGHT))
		self.wait()
		self.play(FadeOut(blue_circle, small_dot))

with tempconfig({"quality": "medium_quality", "CodePreview": True}):
	scene = ToyExample()
	scene.render()
			`}</CodePre></li>
			<li>Even if you have not seen Manim's <code>tempconfig</code> before, it's name already suggests what it does: it creates a copy of the current state of the configuration, applies the changes to the key-value pairs in the passed dictionary, and upon leaving the context the original version of the configuration is restored.</li>
			<li>Inside the context manager, two things happen: an actual <code>ToyExample</code>-scene object is instantiated, and the <code>render</code> method is called.</li>
			<li>When instantiating our scene object <code>scene = ToyExample()</code>, the <code>Scene.__init__</code> method is called. Inspecting the corresponding code (see <a href='https://github.com/ManimCommunity/manim/blob/main/manim/scene/scene.py'>here</a>) reveals that <code>Scene.__init__</code> first sets several attributes of the scene objects that do not depend on any configuration options set in <code>config</code>. Then the scene inspects the value of <code>config.renderer</code>, and based on its value, either instantiates a <code>CairoRenderer</code> or an <code>OpenGLRenderer</code> object and assigns it to its <code>renderer</code> attribute. The scene then asks its renderer to initialize the scene by calling <code>self.renderer.init_scene(self)</code>. Inspecting both the default Cairo renderer and the OpenGL renderer shows that the <code>init_scene</code> method effectively makes the renderer instantiate a <code>SceneFileWriter</code> object, which basically is Manim's interface to <code>ffmpeg</code> and actually writes the movie file.</li>
			<li>After the renderer has been instantiated and initialized its file writer, the scene populates further initial attributes.</li>
			<li>Inspecting the <a href='https://github.com/ManimCommunity/manim/blob/df1a60421ea1119cbbbd143ef288d294851baaac/manim/scene/scene.py#L211'>implementation of the render method</a> reveals that there are several hooks that can be used for CodePre- or postprocessing a scene. <code>Scene.render()</code> describes the full render cycle of a scene. During this life cycle, there are three custom methods whose base implementation is empty and that can be overwritten to suit your purposes. In the order they are called, these customizable methods are:<SubList>
				<li><code>Scene.setup()</code>: which is intended for CodePreparing and, well, setting up the scene for your animation.</li>
				<li><code>Scene.construct()</code>: which is the script for your screen play and contains programmatic descriptions of your animations.</li>
				<li><code>Scene.tear_down()</code>: which is intended for any operations you might want to run on the scene after the last frame has already been rendered.</li>
			</SubList></li>
			<li>After these three methods are run, the animations have been fully rendered, and Manim calls <code>CairoRenderer.scene_finished()</code> to gracefully complete the rendering process. This checks whether any animations have been played - and if so, it tells the <code>SceneFileWriter</code> to close the pipe to <code>ffmpeg</code>. If not, Manim assumes that a static image should be output which it then renders using the same strategy by calling the render loop once.</li>
		</ul>
		<h3>A deep dive into Manim's internals (Mobject Initialization)</h3>
		<ul>
			<li></li>
		</ul>
		<div style={{width: "49%",float: "right",marginRight: "0.5%"}}>
		</div>
	</div>
</div>
</>