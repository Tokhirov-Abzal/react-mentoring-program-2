import { showMovie } from "../redux/action";

export function fetchData() {
  return (dispatch) => {
    return fetch("http://localhost:4000/movies?&limit=6")
      .then((res) => res.json())
      .then((json) => dispatch(showMovie(json.data)))
      .catch((err) => console.log(err));
  };
}

// genre rating release data
export function sortByRating() {
  return (dispatch) => {
    return fetch(
      "http://localhost:4000/movies?sortBy=vote_average&sortOrder=desc&limit=6"
    )
      .then((res) => res.json())
      .then((json) => dispatch(showMovie(json.data)))
      .catch((err) => console.log(err));
  };
}

export function sortByGenre() {
  return (dispatch) => {
    return fetch(
      "http://localhost:4000/movies?searchBy=genres&filter=Adventure&limit=6"
    )
      .then((res) => res.json())
      .then((json) => dispatch(showMovie(json.data)))
      .catch((err) => console.log(err));
  };
}

export function sortByDate() {
  return (dispatch) => {
    return fetch(
      "http://localhost:4000/movies?sortBy=release_date&sortOrder=desc&limit=6"
    )
      .then((res) => res.json())
      .then((json) => dispatch(showMovie(json.data)))
      .catch((err) => console.log(err));
  };
}
