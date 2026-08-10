import { useEffect, useState } from "react";
import { OFFLINE_MODE } from "./Article.tsx";

const GET_SOURCES_LIST_LINK = 1 ? //Change this to 0 if you want to use other link
  "https://django-apps-dncy.onrender.com/study_notes_backend/getList":
  "http://127.0.0.1:8000/study_notes_backend/getList";

type SourcesSectionProps = {
  sourcesColor: any, 
  sourcesOrder: any, 
  additionalResources: any
}

export default function SourcesSection(props: SourcesSectionProps) {
  const [sourcesContent, changeSC] = useState("");

  useEffect(()=>{
    if ((!OFFLINE_MODE) && props.sourcesColor) {
      if (import.meta.env.DEV) {
        const privatePath: string = "../../privateFuncs/private_json_input";
        // @ts-ignore
        import(/* @vite-ignore */ privatePath)
        .then(res => setSourcesListInner(res.default({...props, password: ""}), changeSC));
      }
      else {
        let strInput = JSON.stringify(props);
        setSourcesListInner(strInput, changeSC);
      }
    }
  },[]);

  return <section dangerouslySetInnerHTML={{__html: sourcesContent}}></section>;
}

async function setSourcesListInner(strInput: string, changeSC: React.Dispatch<React.SetStateAction<string>>) {
  try{
    const fetchRes = await fetch(GET_SOURCES_LIST_LINK, { method:"post", body: strInput });
    const resText = await fetchRes.text();
    changeSC(resText);
  }
  catch {
    console.log("There was an error getting the sources.");
    changeSC("<h4>Main Sources:</h4><ol><li>There was an error loading the sources. Please report this!</li></ol>");
  };
}