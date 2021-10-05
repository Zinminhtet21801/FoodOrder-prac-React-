import React, { useState } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom"

const Backdrop = (props) =>{
  return <div className={classes.backdrop} onClick={props.onClose} />
}
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    // {showModal}
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  )
};

export default Modal;
