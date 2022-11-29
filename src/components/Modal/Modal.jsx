import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetClickedMovie,
  resetSuccess,
  onSuccessEdit,
  onSuccessDelete,
} from "../../redux/action";
import Image from "next/image";
import cancelPng from "../../../public/x.png";

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
    <>
      <div
        className={modalState ? "modal active" : "modal"}
        data-testid="modal"
        onClick={() => {
          setModalState(false);
          dispatch(resetClickedMovie());
          dispatch(resetSuccess());
          dispatch(onSuccessEdit(false));
          dispatch(onSuccessDelete(false));
        }}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <Image
            src={cancelPng}
            alt="x"
            onClick={() => {
              setModalState(false);
              dispatch(resetClickedMovie());
              dispatch(resetSuccess());
              dispatch(onSuccessEdit(false));
              dispatch(onSuccessDelete(false));
            }}
            data-testid="modal-cancelBtn"
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
