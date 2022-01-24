import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../../thunk/thunk";
const NotificationModal = ({ title, info, button, setDeleteModal }) => {
  const dispatch = useDispatch();
  const { deleteClickedMovie } = useSelector((state) => state);
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <h3>{info}</h3>
      {button && (
        <button
          onClick={() => {
            dispatch(deleteMovie(deleteClickedMovie));
            setDeleteModal(false);
          }}
        >
          {button}
        </button>
      )}
    </React.Fragment>
  );
};

export default NotificationModal;
