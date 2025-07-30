import { useState } from "react";
import SubList from "../../articleRelatedStuff/SubList";

export const title = "My Saved Resources";

function Content(){
  const [content, ChangeResult] = useState(null);
  
  if(content){ 
    const keyList = Object.keys(content);
    const cutoff = Math.floor(keyList.length/2) - 1;
    const keyList1 = keyList.slice(0, cutoff);
    const keyList2 = keyList.slice(cutoff);

    return <div className="content">
	    <ul style={{width: "49%",float: "left",marginLeft: "0.5%", marginRight: "0.5%"}}>
        <li>This is a list of sources I saved. All resources I make notes of, as well as resources I use(d) privately are saved here.</li>
        {keyList1.map((topic, i)=> <li key={i} style={{textTransform:"capitalize"}}>
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
	    <ul style={{width: "49%",float: "right",marginLeft: "0.5%", marginRight: "0.5%"}}>
        {keyList2.map((topic, i)=> <li key={i} style={{textTransform:"capitalize"}}>
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
    .then(res=> res.json())
    .then(res=> ChangeResult(res))
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