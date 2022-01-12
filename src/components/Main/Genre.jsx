import React from "react";
import { Sort } from "..";

import "./Genre.scss";

const Genre = ({ genreList }) => {
  return (
    <div className="genre">
      <ul className="genre__list">
        {genreList &&
          genreList.map((genre) => <li key={genre.id}>{genre.title}</li>)}
      </ul>
      <Sort />
    </div>
  );
};

export default Genre;
