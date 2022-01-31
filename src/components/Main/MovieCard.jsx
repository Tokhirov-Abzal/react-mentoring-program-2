import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import editSvg from "../../assets/edit.svg";
import closePng from "../../assets/x.png";

import { NotificationModal, AddModal, Modal } from "..";

// redux
import { useDispatch } from "react-redux";

// Action creator
import {
  clickMovie,
  editClickedMovieById,
  deleteClickedMovie,
  showMovie,
} from "../../redux/action";

const MovieCard = ({
  id,
  title,
  poster_path,
  genres,
  release_date,
  overview,
  vote_average,
  runtime,
}) => {
  const [editMenu, setEditMenu] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const dispatch = useDispatch();

  const onClickEditIcon = (e) => {
    setEditMenu((prev) => !prev);
    e.stopPropagation();
  };

  const onClickOptions = (e) => {
    const string = e.target.innerText.toLowerCase();
    switch (string) {
      case "edit":
        setEditModal(true);
        setEditMenu(false);
        break;
      case "delete":
        setDeleteModal(true);
        setEditMenu(false);
        break;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Modal modalState={editModal} setModalState={setEditModal}>
        <AddModal modalTitle="Edit" setModalState={setEditModal} />
      </Modal>
      <Modal modalState={deleteModal} setModalState={setDeleteModal}>
        <NotificationModal
          title="Delete"
          info="Are you sure you want to delete this movie?"
          button="Delete"
          setDeleteModal={setDeleteModal}
        />
      </Modal>

      <div
        className="moviecard"
        onClick={() => {
          dispatch(
            clickMovie({
              id,
              title,
              poster_path,
              genres,
              release_date,
              overview,
              vote_average,
              runtime,
            })
          );
        }}
      >
        <img className="moviecard__poster" src={poster_path} alt="" />
        <div className="moviecard__info">
          <div>
            <h3>{title}</h3>
            <h4>{genres}</h4>
          </div>
          <div className="moviecard__info--date">
            <h3>{release_date.split("-")[0]}</h3>
          </div>
        </div>

        <img
          className="edit__icon"
          src={editSvg}
          alt="editIcon"
          onClick={(e) => onClickEditIcon(e)}
        />

        {editMenu && (
          <div className="mini__modal" onClick={(e) => e.stopPropagation()}>
            <img src={closePng} alt="x" onClick={() => setEditMenu(false)} />
            <div
              className="mini__modal--options"
              onClick={(e) => onClickOptions(e)}
            >
              <div
                onClick={() => {
                  dispatch(
                    editClickedMovieById({
                      id,
                      title,
                      poster_path,
                      genres,
                      release_date,
                      overview,
                      vote_average,
                      runtime,
                    })
                  );
                }}
              >
                Edit
              </div>
              <div
                onClick={() => {
                  dispatch(deleteClickedMovie(id));
                }}
              >
                Delete
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array,
  release_date: PropTypes.string,
};

export default MovieCard;
