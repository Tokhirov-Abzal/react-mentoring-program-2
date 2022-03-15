import React from "react";
import "./MovieList.scss";
import { MovieCard } from "..";

import useFetch from "../../custom hook/useFetch";
import { Outlet } from "react-router-dom";
const MovieList = () => {
  const [src, setSrc] = useFetch();
  return (
    <div className="movielist">
      <h2>{src && src.length} movies found</h2>

      <div className="movielist__container">
        {src &&
          src
            .slice(0, 6)
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} setSrc={setSrc} />
            ))}
        <Outlet />
      </div>
    </div>
  );
};

export default MovieList;
