import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetClickedMovie } from "../../redux/action";

import "./Modal.scss";
import cancelPng from "../../assets/x.png";

const Modal = ({ children, modalState, setModalState }) => {
  const dispatch = useDispatch();
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
      onClick={() => {
        setModalState(false);
        dispatch(resetClickedMovie());
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          src={cancelPng}
          alt="x"
          onClick={() => {
            setModalState(false);
            dispatch(resetClickedMovie());
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
