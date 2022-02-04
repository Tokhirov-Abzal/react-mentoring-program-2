import React, { useEffect, useState } from "react";
import "./MovieList.scss";
import { MovieCard } from "..";
import {
  useLocation,
  Routes,
  Route,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { fetchData } from "../../thunk/thunk";

import { useSelector, useDispatch } from "react-redux";

const MovieList = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { genre, sortBy } = Object.fromEntries([...searchParams]);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (params.movieName && sortBy) {
      fetch(
        `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&search=${params.movieName
          .split(" ")
          .join("%20")}&searchBy=title&limit=6`
      )
        .then((res) => res.json())
        .then((json) => setData(json.data));
    } else if (genre) {
      fetch(
        `http://localhost:4000/movies?searchBy=genres&filter=${genre}&limit=6`
      )
        .then((res) => res.json())
        .then((json) => setData(json.data));
    } else if (params.movieName) {
      fetch(
        `http://localhost:4000/movies?search=${params.movieName
          .split(" ")
          .join("&20")}&searchBy=title&limit=6`
      )
        .then((res) => res.json())
        .then((json) => setData(json.data));
    } else if (sortBy) {
      fetch(
        `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&limit=6`
      )
        .then((res) => res.json())
        .then((json) => setData(json.data));
    } else {
      fetch(
        `http://localhost:4000/movies?sortBy=vote_average&sortOrder=desc&limit=6`
      )
        .then((res) => res.json())
        .then((json) => setData(json.data));
    }
  }, [params.movieName, genre, sortBy]);

  const { movies } = useSelector((state) => state);

  return (
    <div className="movielist">
      <h2>movies found: {data.length}</h2>

      <div className="movielist__container">
        {/* {params.movieName
          ? searchedData &&
            searchedData.map((movie) => <MovieCard key={movie.id} {...movie} />)
          : movies.map((movie) => <MovieCard key={movie.id} {...movie} />)} */}
        {data.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
