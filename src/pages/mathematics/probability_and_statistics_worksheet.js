import { getFullWidthBlankLI } from "../../Worksheet";

export const titles = ["Sampling and Data", "Descriptive Statistics"]

export const content = [
    <>
        <h2>Determine the key terms</h2>
        <p className="question">We want to know the average (mean) amount of money first year college students spend at ABC College on school supplies that do not include books. We randomly surveyed 100 first year students at the college. Three of those students spent $150, $200, and $225, respectively.</p>
        {getFullWidthBlankLI([
            "Population: ",
            "Sample: ",
            "Parameter: ",
            "Statistic: ",
            "Variable: ",
            "Data: "
        ],[
            "All first year students attending ABC College this term.",
            "All students enrolled in one section of a beginning statistics course at ABC College (although this sample may not represent the entire population).",
            "The average (mean) amount of money spent (excluding books) by first year college students at ABC College this term.",
            "The average (mean) amount of money spent (excluding books) by first year college students in the sample.",
            "The variable could be the amount of money spent (excluding books) by one first year student. Let X = the amount of money spent (excluding books) by one first year student attending ABC College.",
            "The dollar amounts spent by the first year students. Examples of the data are $150, $200, and $225."
        ])}
        <p className="question">An insurance company would like to determine the proportion of all medical doctors who have been involved in one or more malpractice lawsuits. The company selects 500 doctors at random from a professional directory and determines the number in the sample who have been involved in a malpractice lawsuit.</p>
        {getFullWidthBlankLI([
            "Population: ",
            "Parameter: ",
            "Sample: ",
            "Statistic: ",
            "Variable: ",
            "Data: "
        ],[
            "All medical doctors listed in the professional directory.",
            "The proportion of medical doctors who have been involved in one or more malpractice suits in the population.",
            "The 500 doctors selected at random from the professional directory.",
            "The proportion of medical doctors who have been involved in one or more malpractice suits in the sample.",
            "The variable X = the number of medical doctors who have been involved in one or more malpractice suits.",
            "Either: yes (was involved in one or more malpractice lawsuits) or no."
        ])}
        <p className="question">Determine the correct data type (quantitative or qualitative). Indicate whether quantitative data are continuous or discrete:</p>
        <ol type="a">
            <li>the number of pairs of shoes you own</li>
            <li>the type of car you drive</li>
            <li>the distance it is from your home to the nearest grocery store</li>
            <li>the number of classes you take per school year</li>
            <li>the type of calculator you use</li>
            <li>weights of sumo wrestlers</li>
            <li>number of correct answers on a quiz</li>
            <li>IQ scores</li>
        </ol>
        <p className="boxAnswer">Items a, d, and g are quantitative discrete.<br/>Items c, f, and h are quantitative continuous.<br/>Items b and e are qualitative, or categorical.</p>
        <p className="question">A study is done to determine the average tuition that San Jose State undergraduate students pay per semester. Each student in the following samples is asked how much tuition he or she paid for the Fall semester. What is the type of sampling in each case?</p>
        <ol type="a">
            <li>A sample of 100 undergraduate San Jose State students is taken by organizing the student's names by classification (freshman, sophomore, junior, or senior), and then selecting 25 students from each.</li>
            <li>A random number generator is used to select a student from the alphabetical listing of all undergraduate students in the Fall semester. Starting with that student, every 50th student is chosen until 75 students are included in the sample.</li>
            <li>A completely random method is used to select 75 students. Each undergraduate student in the fall semester has the same probability of being chosen at any stage of the sampling process.</li>
            <li>The freshman, sophomore, junior, and senior years are numbered one, two, three, and four, respectively.</li>
            <li>An administrative assistant is asked to stand in front of the library one Wednesday and to ask the first 100 undergraduate.</li>
        </ol>
        <p className="boxAnswer">a. stratified; b. systematic; c. simple random; d. cluster; e. convenience</p>

        <h2>Answer The Questions</h2>
        <p className="question">The Smell & Taste Treatment and Research Foundation conducted a study to investigate whether smell can affect learning. Subjects completed mazes multiple times while wearing masks.<br/>They completed the pencil and paper mazes three times wearing floral-scented masks, and three times with unscented masks.<br/>Participants were assigned at random to wear the floral mask during the first three trials or during the last three trials. For each trial, researchers recorded the time it took to complete the maze and the subject's impression of the mask's scent: positive, negative, or neutral.</p>
        <ol type="a">
            <li>Describe the explanatory and response variables in this study.</li>
            <li>What are the treatments?</li>
            <li>Identify any lurking variables that could interfere with this study.</li>
            <li>Is it possible to use blinding in this study?</li>
        </ol>
        <p className="boxAnswer">
        The explanatory variable is scent, and the response variable is the time it takes to complete the maze.<br/>
        There are two treatments: a floral-scented mask and an unscented mask.<br/>
        All subjects experienced both treatments. The order of treatments was randomly assigned so there were no differences between the treatment groups. Random assignment eliminates the problem of lurking variables.<br/>
        Subjects will clearly know whether they can smell flowers or not, so subjects cannot be blinded in this study. Researchers timing the mazes can be blinded, though.
        </p>
    </>,
    <>
    </>
]