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
export function sortBy(val) {
  return (dispatch) => {
    return fetch(`http://localhost:4000/movies?${val}`)
      .then((res) => res.json())
      .then((json) => dispatch(showMovie(json.data)))
      .catch((err) => console.log(err));
  };
}
