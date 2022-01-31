import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onSuccess,
  resetClickedMovie,
  resetSuccess,
  onSuccessEdit,
  onSuccessDelete,
} from "../../redux/action";

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
        dispatch(resetSuccess());
        dispatch(onSuccessEdit(false));
        dispatch(onSuccessDelete(false));
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img
          src={cancelPng}
          alt="x"
          onClick={() => {
            setModalState(false);
            dispatch(resetClickedMovie());
            dispatch(resetSuccess());
            dispatch(onSuccessEdit(false));
            dispatch(onSuccessDelete(false));
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
