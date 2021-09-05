import React,{ useState } from 'react';
import ErrorModal from './ErrorModal';

import Button from './Button'
import classes from "./Form.module.css"

const Form = (props) => {
 const [enteredImg, setEnteredImg] = useState("")
 const [enteredName, setEnteredName] = useState("")
 const [error, setError] = useState(false)

 const changeImgHandler = e => {
  setEnteredImg(e.target.value)
 }
 const changeNameHandler = e => {
  setEnteredName(e.target.value)
 }

 const submitDataHandler = (e) => {
  e.preventDefault()
  
  if (enteredImg.trim().length === 0 || enteredName.trim().length === 0) {
   setError({
    title: "Input is empty",
    message: "please fill in Inputs"
   })
   return;
  }
  
  props.onAddImg(enteredImg, enteredName)
  setEnteredImg("")
  setEnteredName("")

 }

 const errorHandler = () => {
  setError(null)
 }

 return (
  <React.Fragment>
   {
    error && (
     <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
    )
   }
   <form className={classes.form} onSubmit={submitDataHandler}>
    <label htmlFor="img-link" className={classes.label}>Enter Image Link</label>
    <input type="text" id="img-link" className={classes.input} onChange={changeImgHandler} value={enteredImg} />
    <label htmlFor="img-name" className={classes.label}>Enter Name</label>
    <input type="text" id="img-name" className={classes.input} onChange={changeNameHandler} value={enteredName} />

    <Button type="submit">Submit</Button>
   </form>
  </React.Fragment>
 )
}

export default Form
