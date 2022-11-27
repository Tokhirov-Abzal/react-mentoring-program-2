import { useState, useEffect } from "react";

import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { DICTIONARY } from "../dictionary";

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
    if (
      (!search && location.pathname === DICTIONARY.search.baseSearchUrl) ||
      location.pathname === `${DICTIONARY.search.baseSearchUrl}/`
    ) {
      fetchData("?sortBy=vote_average&sortOrder=desc");
    } else {
      if (genre) {
        fetchData(`?searchBy=genres&filter=${genre}`);
      } else if (params.movieName && sortBy) {
        fetchData(
          `?sortBy=${sortBy}&sortOrder=desc&search=${params.movieName
            .split(" ")
            .join("%20")}&searchBy=title&limit=6`
        );
      } else if (params.movieName) {
        fetchData(
          `?search=${params.movieName.split(" ").join("&20")}&searchBy=title`
        );
      } else if (sortBy) {
        fetchData(`?sortBy=${sortBy}&sortOrder=desc`);
      }
    }
  }, [pathname, search]);

  return [data, setData];
}

export default useFetch;
