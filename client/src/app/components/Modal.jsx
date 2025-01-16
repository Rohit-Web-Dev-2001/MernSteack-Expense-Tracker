import React from "react";
import "./Modal.css"; // Make sure to create this CSS file

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
       
      </section>
    </div>
  );
};

export default Modal;
