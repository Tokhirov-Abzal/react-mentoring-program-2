import React from "react";
import { Genre, MovieList, Error } from "../";

const Main = () => {
  return (
    <React.Fragment>
      <Genre />
      <Error>
        <MovieList />
      </Error>
    </React.Fragment>
  );
};

export default Main;
