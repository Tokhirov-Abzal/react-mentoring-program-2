import React from "react";
import { Genre, MovieList, Error } from "../";

import { Routes, Route, Navigate } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <Genre />
      <Error>
        <Routes>
          <Route path="/search/*" element={<MovieList />}>
            <Route path=":movieName" />
            <Route path=":movieName/:id" />
          </Route>

          <Route path="/" element={<Navigate to="/search" />} />
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
