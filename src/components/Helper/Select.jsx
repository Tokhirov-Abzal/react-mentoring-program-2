import React, { useRef, useEffect } from "react";
import "./Select.scss";

import { useSelector } from "react-redux";
import { Field } from "formik";

import arrow from "../../assets/arrow-up.svg";
const Select = ({ title, field, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const genreList = useSelector((state) => state.genreList);

  return (
    <div className="select">
      <label htmlFor="modal__checkbox">{title}</label>

      <div className="options">
        <div
          className="options__title"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Select Genre
          <img src={arrow} className={!isOpen ? "arrow-up" : ""} alt="" />
        </div>
        {isOpen && (
          <div className="options__container">
            {genreList.map((genre) => (
              <div key={genre.id} className="options__wrapper">
                <Field type="checkbox" name="genre" value={genre.title} />
                <label>{genre.title}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
