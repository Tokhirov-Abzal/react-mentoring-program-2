import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import editSvg from "../../assets/edit.svg";
import closePng from "../../assets/x.png";

import { NotificationModal, AddModal, Modal } from "..";

import MovieContext from "../../context/movieData";

const MovieCard = ({ title, genre, date, genreList, imageUrl, id }) => {
  const [editMenu, setEditMenu] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const { setClickedMovieId, setHeaderPoster } = useContext(MovieContext);

  const onClickMovieCard = (id) => {
    setClickedMovieId(id);

    setHeaderPoster(true);
  };

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

  // setEditModal(true)
  // setDeleteModal(true)
  return (
    <React.Fragment>
      <Modal modalState={editModal} setModalState={setEditModal}>
        <AddModal genreList={genreList} modalTitle="Edit" />
      </Modal>
      <Modal modalState={deleteModal} setModalState={setDeleteModal}>
        <NotificationModal
          title="Delete"
          info="Are you sure you want to delete this movie?"
          button="Delete"
        />
      </Modal>

      <div className="moviecard" onClick={() => onClickMovieCard(id)}>
        <img className="moviecard__poster" src={imageUrl} alt="" />
        <div className="moviecard__info">
          <div>
            <h3>{title}</h3>
            <h4>{genre}</h4>
          </div>
          <div className="moviecard__info--date">
            <h3>{date.split("-")[0]}</h3>
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
              <div>Edit</div>
              <div>Delete</div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.array,
  date: PropTypes.string,
};

export default MovieCard;
