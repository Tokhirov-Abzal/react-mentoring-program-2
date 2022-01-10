import React from "react";
import { Sort } from "..";

import "./Genre.scss";

const genreList = [
  { id: 1, title: "All" },
  { id: 2, title: "Documentary" },
  { id: 3, title: "Comedy" },
  { id: 4, title: "Horror" },
  { id: 5, title: "Crime" },
];

const Genre = () => {
  return (
    <div className="genre">
      <ul className="genre__list">
        {genreList.map((genre) => (
          <li key={genre.id}>{genre.title}</li>
        ))}
      </ul>
      <Sort />
    </div>
  );
};

export default Genre;
