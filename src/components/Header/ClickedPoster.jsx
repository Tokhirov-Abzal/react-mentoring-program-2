import React from "react";
import { Navbar } from "..";
import "./ClickedPoster.scss";

const ClickedPoster = ({
  poster_path,
  title,
  genres,
  vote_average,
  release_date,
  runtime,
  overview,
}) => {
  return (
    <div className="clickedPoster">
      <Navbar searchIcon={true} />
      <div className="clickedPoster__info">
        <img className="clickedPoster__image" src={poster_path} alt="" />
        <div className="clickedPoster__detail">
          <div className="clickedPoster__title">
            <div>
              <h2>{title}</h2>
              <h4>{genres.join("/")}</h4>
            </div>
            <div className="clickedPoster__rate">{vote_average}</div>
          </div>
          <div className="clickedPoster__timeinfo">
            <h3>{release_date.split("-")[0]}</h3>
            <h3>
              {runtime / 60 > 0 ? `${Math.floor(runtime / 60)}h` : "0hour"}
              {runtime % 60}min
            </h3>
          </div>
          <p className="clickedPoster__overview">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ClickedPoster;
