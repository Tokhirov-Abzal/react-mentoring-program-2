import React from "react";
import { Genre, MovieList, Error } from "../";

const Main = ({ movieList }) => {
  return (
    <React.Fragment>
      <Genre />
      <Error>
        <MovieList movieList={movieList} />
      </Error>
    </React.Fragment>
  );
};

export default Main;
