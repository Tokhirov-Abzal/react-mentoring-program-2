import React, { useEffect, useState } from "react";
import "./MovieList.scss";
import { MovieCard } from "..";

import { fetchData, sortBy } from "../../thunk/thunk";

import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../custom hook/useFetch";

const MovieList = () => {
  const [src, setsrc] = useFetch();

  return (
    <div className="movielist">
      <h2>movies found: {src && src.length}</h2>

      <div className="movielist__container">
        {src &&
          src
            .slice(0, 6)
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} setSrc={setsrc} />
            ))}
      </div>
    </div>
  );
};

export default MovieList;
