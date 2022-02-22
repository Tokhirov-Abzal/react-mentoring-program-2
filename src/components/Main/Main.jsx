import React from "react";
import { useSelector } from "react-redux";
import { Genre, MovieList, Error, Search, MovieCard } from "../";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import useFetch from "../../custom hook/useFetch";

const Main = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Genre />
      <Error>
        <Routes>
          {/* <Route path="/search/:movieName" element={<MovieList />} />
          <Route path="/search/:movieName/:id" element={<MovieList />} /> */}
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
