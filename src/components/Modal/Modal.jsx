import React, { useEffect, useCallback } from "react";

import "./Modal.scss";
import cancelPng from "../../assets/x.png";

const Modal = ({ children, modalState, setModalState }) => {
  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalState]);

  return (
    <div
      className={modalState ? "modal active" : "modal"}
      onClick={() => setModalState(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img src={cancelPng} alt="x" onClick={() => setModalState(false)} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
