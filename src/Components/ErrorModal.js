import React from 'react'
import classes from "./ErrorModal.module.css"
import ReactDOM from 'react-dom';


import Button from "./Button"


const Backdrop = (props) => {
 return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const Overlay = (props) => {
 return (
  <div className={classes.modal}>
   <header>
    <h3>{props.title}</h3>
   </header>
   <div className={classes.content}>
    <p>{props.message}</p>
    <Button onClick={props.onConfirm}>Ok</Button>
   </div>
  </div>
 )
}


const ErrorModal = (props) => {
 return (
  <React.Fragment>
   {ReactDOM.createPortal(
    <Backdrop onConfirm={props.onConfirm} />,
    document.getElementById('backdrop-root')
   )}
   {ReactDOM.createPortal(
    <Overlay
     title={props.title}
     message={props.message}
     onConfirm={props.onConfirm}
    />,
    document.getElementById('overlay-root')
   )}
  </React.Fragment>

 )
}

export default ErrorModal
