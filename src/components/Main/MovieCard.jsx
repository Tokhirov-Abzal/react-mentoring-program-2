import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import editSvg from "../../assets/edit.svg";
import closePng from "../../assets/x.png";

import { NotificationModal, AddModal, Modal } from "..";

import MovieContext from "../../context/movieData";

const MovieCard = ({
  title,
  genre,
  date,
  genreList,
  imageUrl,
  onMovieCardClick,
  id,
}) => {
  const [editMenu, setEditMenu] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  const { setClickedMovieId, setHeaderPoster } = useContext(MovieContext);

  const onClickMovieCard = (id) => {
    setClickedMovieId(id);

    setHeaderPoster(true);
  };

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
          onClick={() => setEditMenu((prev) => !prev)}
        />

        {editMenu && (
          <div className="mini__modal">
            <img src={closePng} alt="x" onClick={() => setEditMenu(false)} />
            <div className="mini__modal--options">
              <div onClick={() => setEditModal(true)}>Edit</div>
              <div onClick={() => setDeleteModal(true)}>Delete</div>
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
