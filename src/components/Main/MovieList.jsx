import React, { useContext } from "react";
import "./MovieList.scss";
import { MovieCard } from "..";

// Context
import MovieDataContext from "../../context/movieData";

const MovieList = ({ genreList }) => {
  const { data } = useContext(MovieDataContext);

  return (
    <div className="movielist">
      <h2>1 movies found</h2>
      <div className="movielist__container">
        {data &&
          data.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              genre={movie.genres}
              date={movie.release_date}
              genreList={genreList}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
