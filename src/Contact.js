import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { useForm } from '@formspree/react';
import { defaultBC } from './reducer';
import "./contact.scss";
import store from "./store";
import { FORM_COUNTER } from "./actions";

export function ContactComp() {
  const [state, handleSubmit] = useForm("mvoeqezw");
	const dialogRef = useRef();
	var formCounterVal = useSelector(state => state.formCounter); //variable not needed, only state rerender

	useEffect(()=>{
		if(formCounterVal && !(dialogRef.current.open)) {
			dialogRef.current.showModal();
			dialogRef.current.firstChild.reset();
		}
		else if (formCounterVal === 0) dialogRef.current.close();
		else if(state.succeeded) {
			store.dispatch({
				type: FORM_COUNTER,
				payload: 0
			});
			alert("Thank you for your submission");
		}
		else if(state.errors) alert("There was a problem with the submission");
	}, [formCounterVal, state.succeeded, state.errors]);

	return <dialog
		ref={dialogRef}
		id="contactDialog"
		style={{backgroundColor: defaultBC}}
	><form onSubmit={handleSubmit}>
		<button
			onClick={()=>{ store.dispatch({
				type: FORM_COUNTER,
				payload: 0
			})}}
			type='button'
			formNoValidate={true}
			style={{padding:"10px auto",float:"right"}}
		>X</button>
		<div style={{padding: "20px",clear:"both"}}>
			<div style={{float:"left"}}>
				<label htmlFor="name">Name</label>
				<input id="name" type="name" name="name" required/>
				<label htmlFor="email">Email Address</label>
				<input id="email" type="email" name="email" required/>
			</div>
			<div style={{float:"right"}}>
				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" style={{resize:"none"}} required/>
			</div>
			<div style={{width:"100%",clear:"both"}}></div>
		</div>
		<div style={{
			width:"100%",
			display:"flex",
			justifyContent:"center",
			borderTop: "solid 4px #612",
			backgroundColor: "#832"
		}}><button
			type="submit"
			disabled={state.submitting}
			formMethod="post"
			style={{padding:"10px auto"}}
		>Submit</button></div>
	</form></dialog>
}

