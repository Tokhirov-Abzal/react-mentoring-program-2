import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Sort.module.scss";

const Sort = () => {
  const { query, push } = useRouter();
  const searchParam = Object.fromEntries([]);

  const [active, setActive] = useState(null);
  const options = [
    { id: 1, title: "RATING", toBack: "vote_average" },
    { id: 3, title: "RELEASE DATE", toBack: "release_date" },
  ];
  return (
    <div className={styles.sort}>
      <h3>SORT BY: </h3>
      <div className={styles.sort__options}>
        {options.map((item) => (
          <h3
            key={item.id}
            className={
              query.sortBy &&
              options.find((obj) => obj.toBack === query.sortBy).id === item.id
                ? styles.active
                : null
            }
            onClick={() => {
              push(
                `/search?sortBy=${item.toBack}&sortOrder=desc&searchBy=title&limit=6`
              );

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
