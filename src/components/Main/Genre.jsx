import React from "react";
import { Sort } from "..";
import { useSelector } from "react-redux";

import { formSearchUrl } from "../../helpers";
import { DICTIONARY } from "../../dictionary";
import { useRouter } from "next/router";
import styles from "./Genre.module.scss";

const Genre = () => {
  const genreList = useSelector((state) => state.genreList);
  const { query, push } = useRouter();

  return (
    <div className={styles.genre}>
      <ul className={styles.genre__list}>
        <li
          className={!query.genre ? styles.active : null}
          onClick={() => push(formSearchUrl())}
        >
          All
        </li>
        {genreList &&
          genreList.map((genreItem) => (
            <li
              className={
                query?.genre === genreItem.title.toLowerCase()
                  ? styles.active
                  : null
              }
              key={genreItem.id}
              data-testid="genreName"
              onClick={() =>
                push(
                  `${
                    DICTIONARY.search.baseSearchUrl
                  }?genre=${genreItem.title.toLowerCase()}`
                )
              }
            >
              {genreItem.title}
            </li>
          ))}
      </ul>
      <Sort />
    </div>
  );
};

export default Genre;
