import React, { useContext } from "react";
import "./Sort.scss";

import movieDataContext from "../../context/movieData";

const Sort = () => {
  const { setToggle } = useContext(movieDataContext);
  return (
    <div className="sort">
      <h3>SORT BY</h3>
      <div className="sort__options">
        <h3 onClick={() => setToggle((prev) => !prev)}>RELEASE DATE</h3>
      </div>
    </div>
  );
};

export default Sort;
