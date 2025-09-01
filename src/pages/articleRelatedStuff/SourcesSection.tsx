import { useEffect, useState } from "react";
import { OFFLINE_MODE, GET_SOURCES_LIST_LINK } from "./Article.tsx";

type SourcesSectionProps = {
  sourcesColor: any, 
  sourcesOrder: any, 
  additionalResources: any
}

export default function SourcesSection(props: SourcesSectionProps) {
  const [sourcesContent, changeSC] = useState("<h4>Main Sources:</h4><ol id='sources'><li>Loading sources...</li></ol>");

  useEffect(()=>{
    if (!OFFLINE_MODE) {
      if (props.sourcesColor) {
        if (import.meta.env.DEV)
          //@ts-ignore
          import("../../privateFuncs/private_json_input.ts")
          .then(res => setSourcesListInner(res.default({...props, password: ""}), changeSC));
        else {
          let strInput = JSON.stringify(props);
          setSourcesListInner(strInput, changeSC);
        }
      }
    }
  },[]);

  return <section dangerouslySetInnerHTML={{__html: sourcesContent}}></section>;
}

function setSourcesListInner(strInput: string, changeSC: React.Dispatch<React.SetStateAction<string>>) {
  fetch(GET_SOURCES_LIST_LINK, {
    method:"post", 
    body: strInput
  })
  .then(res=>res.text())
  .then(res=> changeSC(res))
  .catch((err)=> {
    console.log("There was an error getting the sources:");
    console.error(err);
    changeSC("<h4>Main Sources:</h4><ol><li>There was an error loading the sources. Please report this!</li></ol>");
  });
}