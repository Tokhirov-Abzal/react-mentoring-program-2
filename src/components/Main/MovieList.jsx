import React, { useContext } from "react";
import "./MovieList.scss";
import { MovieCard } from "..";

import { useSelector } from "react-redux";

const MovieList = () => {
  const data = useSelector((state) => state.movies);
  return (
    <div className="movielist">
      <h2>{data.length} movies found</h2>
      <div className="movielist__container">
        {data && data.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
