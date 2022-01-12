import React from "react";
import { Genre, MovieList, Error } from "../";

const Main = ({ genreList }) => {
  return (
    <React.Fragment>
      <Genre genreList={genreList} />
      <Error>
        <MovieList genreList={genreList} />
      </Error>
    </React.Fragment>
  );
};

export default Main;
