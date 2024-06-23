import React, { useEffect, useRef } from 'react';
import store from "../store";
import { Q_COUNTER } from "../actions";
import { useSelector } from "react-redux";
import "./questions.scss";
import { defaultBC } from '../reducer';

var curContent = null;
var payloadVal = 0;
export function Questions(props) {
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
      <img className="questionsSymbol" src="/webPics/circle-question-solid.svg" alt=""/>
    </span>
  )
}

export function QuestionsBox(){
	const dialogRef = useRef();
	var qCounterVal = useSelector(state => state.qCounter); //variable not needed, only state rerender

	useEffect(()=>{
		if (!dialogRef.current.open) {
			dialogRef.current.showModal();
		}
		else dialogRef.current.close();
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