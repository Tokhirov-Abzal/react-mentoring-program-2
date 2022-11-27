import React, { useEffect, useState } from "react";
import { Navbar } from "..";
import "./ClickedPoster.scss";

import { useParams } from "react-router-dom";

const ClickedPoster = () => {
  const param = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${param.id}`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [param.id]);

  return (
    <div className="clickedPoster">
      <Navbar searchIcon={true} />

      {movie && (
        <div className="clickedPoster__info">
          <div className="clickedPoster__image--container">
            <img
              className="clickedPoster__image"
              src={movie.poster_path}
              alt="clickedPoster"
            />
          </div>
          <div className="clickedPoster__detail">
            <div className="clickedPoster__title">
              <div className="clickedPoster__name">
                <h2>{movie.title}</h2>
                <h4>{movie.genres.join("/")}</h4>
              </div>
              <div className="clickedPoster__rate">{movie.vote_average}</div>
            </div>
            <div className="clickedPoster__timeinfo">
              <h3>{movie.release_date.split("-")[0]}</h3>
              <h3>
                {movie.runtime / 60 > 0
                  ? `${Math.floor(movie.runtime / 60)}h `
                  : "0 hour"}
                {movie.runtime % 60}min
              </h3>
            </div>
            <p className="clickedPoster__overview">{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickedPoster;
