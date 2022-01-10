import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = ({ title, genre, date }) => {
  return (
    <div className="moviecard">
      <img src="https://place-hold.it/322x455" alt="" />
      <div className="moviecard__info">
        <div>
          <h3>{title}</h3>
          <h4>{genre}</h4>
        </div>
        <div className="moviecard__info--date">
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string,
  date: PropTypes.number,
};

export default MovieCard;
