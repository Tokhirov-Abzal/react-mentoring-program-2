import React, { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "..";
import styles from "./MovieList.module.scss";

const MovieList = ({ movieList }) => {
  const [src, setSrc] = useState(movieList);

  return (
    <div className={styles.movielist}>
      <h2>{src.length || 0} movies found</h2>

      <div className={styles.movielist__container}>
        {movieList &&
          movieList.map((movie) => (
            <MovieCard key={movie.id} {...movie} src={src} setSrc={setSrc} />
          ))}
      </div>
    </div>
  );
};

MovieList.defaultProps = {
  movieList: [],
};

export default MovieList;
