import React from "react";
import "./Select.scss";

import arrow from "../../assets/arrow-up.svg";
const Select = ({ genreList, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="select">
      <label htmlFor="modal__checkbox">{title}</label>

      <div className="options">
        <div
          className="options__title"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Select Genre
          <img src={arrow} className={!isOpen && "arrow-up"} alt="" />
        </div>
        {isOpen && (
          <div className="options__container">
            {genreList.map((genre) => (
              <label htmlFor={`checkbox__${genre.id}`}>
                <input id={`checkbox__${genre.id}`} type="checkbox" />
                <span>{genre.title}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
