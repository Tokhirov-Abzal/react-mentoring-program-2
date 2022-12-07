import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../../thunk/thunk";
import Image from "next/image";
import successImg from "../../../public/success.svg";
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
      {success && (
        <Image
          className="notification__icon"
          src={successImg}
          alt="notification modal"
        />
      )}
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
