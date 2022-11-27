import React from "react";
import { Genre, MovieList, Error } from "../";

import { Routes, Route, Navigate } from "react-router-dom";
import { DICTIONARY } from "../../dictionary";

const Main = () => {
  return (
    <React.Fragment>
      <Genre />
      <Error>
        <Routes>
          <Route
            path={`${DICTIONARY.search.baseSearchUrl}/*`}
            element={<MovieList />}
          >
            <Route path=":movieName" />
            <Route path=":movieName/:id" />
          </Route>

          <Route
            path="/"
            element={<Navigate to={DICTIONARY.search.baseSearchUrl} />}
          />
          <Route
            path="/*"
            element={
              <div
                style={{
                  paddingTop: "30px",
                  fontSize: "70px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>404</h1>
              </div>
            }
          />
        </Routes>
      </Error>
    </React.Fragment>
  );
};

export default Main;
