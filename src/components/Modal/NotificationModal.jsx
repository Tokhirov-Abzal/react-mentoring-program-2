import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchData } from "../../thunk/thunk";

import useFetch from "../../custom hook/useFetch";

import successImg from "../../assets/success.svg";
import { useNavigate } from "react-router-dom";
const NotificationModal = ({
  title,
  info,
  button,
  setDeleteModal,
  success,
  setSrc,
  movieId,
}) => {
  const dispatch = useDispatch();
  const { deleteClickedMovie } = useSelector((state) => state);

  return (
    <React.Fragment>
      {success && <img className="notification__icon" src={successImg} />}
      <h2 className="notification__title">{title}</h2>
      <h3>{info}</h3>
      {button && (
        <button
          onClick={() => {
            dispatch(deleteMovie(deleteClickedMovie));
            setDeleteModal(false);
            setSrc((prev) => prev.filter((item) => item.id !== movieId));
          }}
        >
          {button}
        </button>
      )}
    </React.Fragment>
  );
};

export default NotificationModal;
