import React from "react";
import { Navbar } from "..";
import styles from "./ClickedPoster.module.scss";

const ClickedPoster = (movie) => {
  return (
    <div className={styles.clickedPoster}>
      <Navbar searchIcon={true} />

      {movie && (
        <div className={styles.clickedPoster__info}>
          <div className={styles.clickedPoster__image_container}>
            <img
              className={styles.clickedPoster__image}
              src={movie.poster_path}
              alt="clickedPoster"
            />
          </div>
          <div className={styles.clickedPoster__detail}>
            <div className={styles.clickedPoster__title}>
              <div className={styles.clickedPoster__name}>
                <h2>{movie.title}</h2>
                <h4>{movie.genres.join("/")}</h4>
              </div>
              <div className={styles.clickedPoster__rate}>
                {movie.vote_average}
              </div>
            </div>
            <div className={styles.clickedPoster__timeinfo}>
              <h3>{movie.release_date.split("-")[0]}</h3>
              <h3>
                {movie.runtime / 60 > 0
                  ? `${Math.floor(movie.runtime / 60)}h `
                  : "0 hour "}
                {movie.runtime % 60}min
              </h3>
            </div>
            <p className={styles.clickedPoster__overview}>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickedPoster;
