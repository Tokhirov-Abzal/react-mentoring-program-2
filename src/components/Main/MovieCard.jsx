import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import editSvg from "../../../public/edit.svg";
import closePng from "../../../public/x.png";

import { NotificationModal, AddModal, Modal } from "..";
import { useDispatch } from "react-redux";

import { editClickedMovieById, deleteClickedMovie } from "../../redux/action";
import styles from "./MovieCard.module.scss";
import { formSearchUrl } from "../../helpers";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MovieCard = (props) => {
  const {
    id,
    title,
    poster_path,
    genres,
    release_date,
    overview,
    vote_average,
    runtime,
    setSrc,
    src,
  } = props;

  const [editMenu, setEditMenu] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  // const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    router.replace(router.asPath);
  }, [src]);

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

  const onClickMovieCard = () => {
    const navigateToUrl = formSearchUrl({ title, id });
    router.push(navigateToUrl);
  };
  return (
    <React.Fragment>
      <Modal modalState={editModal} setModalState={setEditModal}>
        <AddModal
          modalTitle="Edit"
          setModalState={setEditModal}
          movieId={id}
          setSrc={setSrc}
        />
      </Modal>
      <Modal modalState={deleteModal} setModalState={setDeleteModal}>
        <NotificationModal
          title="Delete"
          info="Are you sure you want to delete this movie?"
          button="Delete"
          setDeleteModal={setDeleteModal}
          movieId={id}
          setSrc={setSrc}
        />
      </Modal>

      <div className={styles.moviecard} onClick={onClickMovieCard}>
        <div className={styles.moviecard__poster}>
          <Image
            className={styles.moviecard__poster}
            loader={() => poster_path}
            src={poster_path}
            alt="poster"
            width={10}
            height={10}
          />
        </div>
        <div className={styles.moviecard__info}>
          <div>
            <h3>{title}</h3>
            <h4 testid="genre-movie">{genres}</h4>
          </div>
          <div className={styles.moviecard__info__date}>
            <h3>{release_date.split("-")[0]}</h3>
          </div>
        </div>

        <Image
          className={styles.edit__icon}
          src={editSvg}
          data-testid="editIcon"
          alt="editIcon"
          onClick={(e) => onClickEditIcon(e)}
        />

        {editMenu && (
          <div
            className={styles.mini__modal}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={closePng} alt="x" onClick={() => setEditMenu(false)} />
            <div
              className={styles.mini__modal__options}
              data-testid="options"
              onClick={(e) => onClickOptions(e)}
            >
              <div
                data-testid="edit-test"
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
                data-testid="delete-test"
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
