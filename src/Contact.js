import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { defaultBC } from './reducer';
import "./contact.scss";
import store from "./store";
import { FORM_COUNTER } from "./actions";

const NOT_SUBMITTING = "NOT_SUBMITTING";
const SUBMITTING = "SUBMITTING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

export function ContactComp() {
	const dialogRef = useRef();
	const [submissionState, changeSS] = useState(NOT_SUBMITTING);
	var formCounterVal = useSelector(state => state.formCounter); //variable not needed, only rerender

	useEffect(()=>{
		if(formCounterVal && !(dialogRef.current.open)) {
			dialogRef.current.showModal();
			dialogRef.current.firstChild.reset();
		}
		else if (!formCounterVal) dialogRef.current.close();
		else if(submissionState === SUCCESS) {
			store.dispatch({
				type: FORM_COUNTER,
				payload: 0
			});
			alert("Thank you for your submission");
			changeSS(NOT_SUBMITTING);
		}
		else if(submissionState === ERROR) alert("There was a problem with the submission");
	}, [formCounterVal, submissionState]);

	async function handleSubmit(e){
		const dataToSend = {
			"name": e.target.name.value,
			"email": e.target.email.value,
			"message": e.target.message.value
		}
		e.preventDefault();
		changeSS(SUBMITTING);
		const res = await fetch("https://django-apps-38uv.onrender.com/study_notes_backend/handleStudyNotesForm", {
			method: "POST",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify(dataToSend)
		})
		if(res.ok) changeSS(SUCCESS);
		else changeSS(ERROR);
	}

	return <dialog ref={dialogRef} id="contactDialog" style={{backgroundColor: defaultBC}}>
		<form onSubmit={handleSubmit} >
			<button
				onClick={()=>{ store.dispatch({
					type: FORM_COUNTER,
					payload: 0
				})}}
				type='button'
				style={{float:"right"}}
			>X</button>
			<div id="fieldContainer">
				<div>
					<label htmlFor="name">Name</label>
					<input id="name" type="name" name="name" required autoFocus/>
					<label htmlFor="email">Email Address</label>
					<input id="email" type="email" name="email" required/>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" style={{resize:"none"}} required/>
				</div>
			</div>
			<div style={{
				width:"100%",
				display:"flex",
				justifyContent:"center",
				borderTop: "solid 4px #612",
				backgroundColor: "#832"
			}}>{
				submissionState === SUBMITTING ?
				<button style={{cursor:"default"}} disabled>Submitting</button> :
				<button type="submit">Submit</button>
			}</div>
		</form>
	</dialog>
}

