import { useState } from "react";
import SubList from "../../articleRelatedStuff/SubList";

export const title = "My Saved Resources";

function Content(){
  const [content, ChangeResult] = useState(null);
  
  if(content){ 
    const topics = ['language_learning','mathematics', 'statistics', 'natural_sciences', 'computer_science_fundamentals','electrical_engineering', 'computer_science_(advanced_topics)', 'tutorials', 'blog','miscellaneous'];
    const cutoff = Math.floor(topics.length/2) - 1;
    const topicList1 = topics.slice(0, cutoff);
    const topicList2 = topics.slice(cutoff);

    console.log(content);

    return <div className="content">
	    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
        <li>This is a list of sources I saved. All resources I make notes of, as well as resources I use(d) privately are saved here.</li>
        {topicList1.map((topic, i)=> <li key={i} style={{textTransform:"capitalize"}}>
          {topic.replaceAll("_"," ")}:<SubList>
            {/*@ts-ignore */}
            {content[topic].map((source, j) => <li
              key={j}
              dangerouslySetInnerHTML={{__html: source}}
              style={{textTransform:"none"}}
            ></li>)}
          </SubList>
        </li>)}
      </ul>
	    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
        {topicList2.map((topic, i)=> <li key={i} style={{textTransform:"capitalize"}}>
          {topic.replaceAll("_"," ")}: <SubList>
            {/*@ts-ignore */}
            {content[topic].map((source, j) => <li
              key={j}
              dangerouslySetInnerHTML={{__html: source}}
              style={{textTransform:"none"}}
            ></li>)}
          </SubList>
        </li>)}
      </ul>
    </div>
  }
  else {
    fetch("https://django-apps-dncy.onrender.com/study_notes_backend/allList")
    .then(res => res.json())
    .then(ChangeResult)
    .catch(err=> {
      console.error(err);
      console.log("This page won't work in localhost.")
    });
    return <div className="content">
      <ul>
        <li>Receiving content from backend...</li>
      </ul>
    </div>;
  }
}

export const content = 
<>
	<h1>Saved Resources</h1>
  <h2>List</h2>
  <Content/>
</>