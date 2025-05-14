import { useEffect, useRef } from 'react';
import { Q_COUNTER } from "../../reduxStuff/actions";
import { useSelector } from "react-redux";
import "./questions.scss";
import { defaultBC, type StateType } from '../../reduxStuff/reducer';

//@ts-ignore
import store from "../../reduxStuff/store";

var curContent: any = null;
var payloadVal: number = 0;
export function Questions(props: any) {
  return (
    <span
      onClick={()=>{
        curContent = props.children;
        payloadVal += 1;
        store.dispatch({
          type: Q_COUNTER,
          payload: payloadVal
        });
      }}
    >
			&nbsp;
      <img className="questionsSymbol" src="/articlePics/circle-question-solid.svg" alt=""/>
    </span>
  )
}

export function QuestionsBox(){
	const dialogRef: React.Ref<HTMLDialogElement> | null = useRef(null);
	var qCounterVal = useSelector((state: StateType) => state.qCounter); //variable not needed, only state rerender

	useEffect(()=>{
		if (qCounterVal && !(dialogRef.current!.open)) {
			dialogRef.current!.showModal();
		}
		else dialogRef.current!.close();
	}, [qCounterVal]);
  
  return <dialog ref={dialogRef} id="questionsBox" style={{backgroundColor: defaultBC}}>
    <button
      onClick={()=>{
        payloadVal += 1;
        store.dispatch({
          type: Q_COUNTER,
          payload: payloadVal
        });
      }}
      type='button'
      style={{padding:"10px auto",float:"right"}}
    >X</button>
    <div id='textContent'>
      <h4>My Questions:</h4>
      <ul>{curContent}</ul>
    </div>
  </dialog>;
}