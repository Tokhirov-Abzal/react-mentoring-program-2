import React, { useEffect, useState } from "react";
import "./Search.scss";

import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

const Search = () => {
  const [searchState, setSearchState] = useState("");
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        searchInput: "",
      }}
      onSubmit={(data, { resetForm }) => {
        navigate(`/search/${data.searchInput}`);

        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <div className="search">
            <h2>Find your movie</h2>
            <div className="search__container">
              <Field
                name="searchInput"
                className="search__input"
                type="text"
                placeholder="Search movie"
              />
              <button type="submit" className="search__button">
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
