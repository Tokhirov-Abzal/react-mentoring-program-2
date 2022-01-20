import React from "react";
import "./Sort.scss";
import { useDispatch } from "react-redux";
import { sortBy } from "../../thunk/thunk";

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <div className="sort">
      <h3>SORT BY: </h3>
      <div className="sort__options">
        <h3
          onClick={() =>
            dispatch(sortBy("sortBy=release_date&sortOrder=desc&limit=6"))
          }
        >
          RELEASE DATE
        </h3>
        <h3
          onClick={() =>
            dispatch(sortBy("searchBy=genres&filter=Adventure&limit=6"))
          }
        >
          GENRE
        </h3>
        <h3
          onClick={() =>
            dispatch(sortBy("sortBy=vote_average&sortOrder=desc&limit=6"))
          }
        >
          RATING
        </h3>
      </div>
    </div>
  );
};

export default Sort;
