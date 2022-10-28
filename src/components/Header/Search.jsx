import React, { useEffect, useState } from "react";
import "./Search.scss";

import { useNavigate, useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { formSearchUrl } from "../../helpers";

const Search = () => {
  const navigate = useNavigate();
  const { movieName } = useParams();
  const [searchInitial, setSearchInitial] = useState("");

  useEffect(() => {
    setSearchInitial(movieName);
  }, [movieName]);

  const submitHandler = (data) => {
    const inputUrlData = data.searchInput;

    if (inputUrlData) {
      const toSearchUrl = formSearchUrl({ inputUrlData });
      navigate(toSearchUrl);

      return;
    }

    navigate(formSearchUrl());
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
          <div className="search">
            <h2>Find your movie</h2>
            <div className="search__container">
              <Field
                name="searchInput"
                className="search__input"
                type="text"
                placeholder="Search movie"
                data-testid="searchInput"
              />
              <button
                type="submit"
                className="search__button"
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
