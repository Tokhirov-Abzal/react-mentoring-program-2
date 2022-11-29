import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { formSearchUrl } from "../../helpers";
import { useRouter } from "next/router";
import styles from "./Search.module.scss";

const Search = () => {
  const { query, push } = useRouter();
  const movieName = query.movieName;
  const [searchInitial, setSearchInitial] = useState("");

  useEffect(() => {
    setSearchInitial(movieName);
  }, [movieName]);

  const submitHandler = (data) => {
    const inputUrlData = data.searchInput;

    if (inputUrlData) {
      const toSearchUrl = formSearchUrl({ inputUrlData });
      push(toSearchUrl);

      return;
    }

    push(formSearchUrl());
  };

  return (
    <Formik
      initialValues={{
        searchInput: searchInitial || "",
      }}
      enableReinitialize={true}
      onSubmit={submitHandler}
    >
      {() => (
        <Form>
          <div className={styles.search}>
            <h2>Find your movie</h2>
            <div className={styles.search__container}>
              <Field
                name="searchInput"
                className={styles.search__input}
                type="text"
                placeholder="Search movie"
                data-testid="searchInput"
              />
              <button
                type="submit"
                className={styles.search__button}
                data-testid="searchBtn"
              >
                Search
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
