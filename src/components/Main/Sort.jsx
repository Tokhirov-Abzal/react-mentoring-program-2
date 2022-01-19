import React from "react";
import "./Sort.scss";
import { useDispatch } from "react-redux";
import { sortByDate, sortByRating, sortByGenre } from "../../thunk/thunk";

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div className="sort">
      <h3>SORT BY: </h3>
      <div className="sort__options">
        <h3 onClick={() => dispatch(sortByDate())}>RELEASE DATE</h3>
        <h3 onClick={() => dispatch(sortByGenre())}>GENRE</h3>
        <h3 onClick={() => dispatch(sortByRating())}>RATING</h3>
      </div>
    </div>
  );
};

export default Sort;
