import React from "react";
import "./MovieList.scss";

import { MovieCard } from "..";

const MovieList = () => {
  return (
    <div className="movielist">
      <h2>1 movies found</h2>
      <div className="movielist__container">
        <MovieCard
          title="Pulp Fiction"
          genre="Action & adventure"
          date={2004}
        />
        <MovieCard
          title="Pulp Fiction"
          genre="Action & adventure"
          date={2004}
        />
        <MovieCard
          title="Pulp Fiction"
          genre="Action & adventure"
          date={2004}
        />
        <MovieCard
          title="Pulp Fiction"
          genre="Action & adventure"
          date={2004}
        />
      </div>
    </div>
  );
};

export default MovieList;
