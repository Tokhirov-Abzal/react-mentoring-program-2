import React from "react";

import { useSelector } from "react-redux";
import { Field } from "formik";
import styles from "./Select.module.scss";

import Image from "next/image";
import arrow from "../../../public/arrow-up.svg";
const Select = ({ title, field, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const genreList = useSelector((state) => state.genreList);

  return (
    <div className={styles.select}>
      <label htmlFor="modal__checkbox">{title}</label>

      <div className={styles.options}>
        <div
          className={styles.options__title}
          data-testid="selectBtn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Select Genre
          <Image
            src={arrow}
            className={!isOpen ? styles.arrow_up : null}
            alt="arrow"
          />
        </div>
        {isOpen && (
          <div className={styles.options__container}>
            {genreList.map((genre) => (
              <div key={genre.id} className={styles.options__wrapper}>
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
