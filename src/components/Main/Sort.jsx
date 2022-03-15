import React, { useState } from "react";
import "./Sort.scss";
import { useDispatch } from "react-redux";
import { sortBy } from "../../thunk/thunk";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = Object.fromEntries([...searchParams]);

  const [active, setActive] = useState(null);
  const options = [
    { id: 1, title: "RATING", toBack: "vote_average" },
    { id: 3, title: "RELEASE DATE", toBack: "release_date" },
  ];
  return (
    <div className="sort">
      <h3>SORT BY: </h3>
      <div className="sort__options">
        {options.map((item) => (
          <h3
            key={item.id}
            className={
              searchParam.sortBy &&
              options.find((obj) => obj.toBack === searchParam.sortBy).id ===
                item.id
                ? "active"
                : ""
            }
            onClick={() => {
              setSearchParams({
                ...searchParam,
                sortBy: item.toBack,
              });

              setActive(item.id);
            }}
          >
            {item.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Sort;
