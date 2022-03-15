import React from "react";
import { Sort } from "..";
import { useSelector } from "react-redux";

import { useSearchParams, useNavigate } from "react-router-dom";

import "./Genre.scss";

const Genre = () => {
  const genreList = useSelector((state) => state.genreList);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { genre } = Object.fromEntries([...searchParams]);
  return (
    <div className="genre">
      <ul className="genre__list">
        <li
          className={!genre ? "active" : ""}
          onClick={() => navigate("/search")}
        >
          All
        </li>
        {genreList &&
          genreList.map((genreItem) => (
            <li
              className={
                genre === genreItem.title.toLowerCase() ? "active" : ""
              }
              key={genreItem.id}
              data-testid="genreName"
              onClick={() =>
                navigate(`/search?genre=${genreItem.title.toLowerCase()}`)
              }
            >
              {genreItem.title}
            </li>
          ))}
      </ul>
      <Sort />
    </div>
  );
};

export default Genre;
