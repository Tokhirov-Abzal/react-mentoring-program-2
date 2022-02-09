import React, { useState, useEffect } from "react";

import { useLocation, useParams, useSearchParams } from "react-router-dom";

function useFetch() {
  const [data, setData] = useState();
  const params = useParams();
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();
  const { genre, sortBy } = Object.fromEntries([...searchParams]);

  const fetchData = (params) => {
    return fetch("http://localhost:4000/movies" + params)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  };

  useEffect(() => {
    if (!search && location.pathname === "/search") {
      fetchData("?sortBy=vote_average&sortOrder=desc&limit=6");
    }

    if (genre) {
      fetchData(`?searchBy=genres&filter=${genre}&limit=6`);
    } else if (params.movieName && sortBy) {
      fetchData(
        `?sortBy=${sortBy}&sortOrder=desc&search=${params.movieName
          .split(" ")
          .join("%20")}&searchBy=title&limit=6`
      );
    } else {
      if (params.movieName) {
        fetchData(
          `?search=${params.movieName
            .split(" ")
            .join("&20")}&searchBy=title&limit=6`
        );
      }

      if (sortBy) {
        fetchData(`?sortBy=${sortBy}&sortOrder=desc&limit=6`);
      }
    }
  }, [pathname, search]);

  return [data, setData];
}

export default useFetch;

// useEffect(() => {
//   if (params.movieName && sortBy) {
//     fetch(
//       `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&search=${params.movieName
//         .split(" ")
//         .join("%20")}&searchBy=title&limit=6`
//     )
//       .then((res) => res.json())
//       .then((json) => setData(json.data));
//   }

//   if (genre) {
//     fetch(
//       `http://localhost:4000/movies?searchBy=genres&filter=${genre}&limit=6`
//     )
//       .then((res) => res.json())
//       .then((json) => setData(json.data));
//   }

//   if (params.movieName) {
//     fetch(
//       `http://localhost:4000/movies?search=${params.movieName
//         .split(" ")
//         .join("&20")}&searchBy=title&limit=6`
//     )
//       .then((res) => res.json())
//       .then((json) => setData(json.data));
//   }

//   if (sortBy) {
//     fetch(
//       `http://localhost:4000/movies`
//     )
//       .then((res) => res.json())
//       .then((json) => setData(json.data));
//   }
// }, [params.movieName, genre, sortBy]);
