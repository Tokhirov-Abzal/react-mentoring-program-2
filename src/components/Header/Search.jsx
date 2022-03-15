import React, { useEffect, useState } from "react";
import "./Search.scss";

import { useNavigate, useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";

const Search = () => {
  const navigate = useNavigate();
  const { movieName } = useParams();
  const [searchInitial, setSearchInitial] = useState("");
  useEffect(() => {
    setSearchInitial(movieName);
  }, [movieName]);

  return (
    <Formik
      initialValues={{
        searchInput: searchInitial || "",
      }}
      enableReinitialize={true}
      onSubmit={(data) => {
        navigate(`/search/${data.searchInput}`);
      }}
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
