import { useSelector } from "react-redux";
import {
  showMovie,
  onSuccess,
  onError,
  resetClickedMovie,
} from "../redux/action";

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

// Add movie

export function postMovie(obj) {
  const {
    modalTitle: title,
    modalReleaseDate: release_date,
    modalUrl: poster_path,
    modalRating: vote_average,
    genre: genres,
    modalRuntime: runtime,
    modalOverview: overview,
  } = obj;

  console.log(
    JSON.stringify({
      title,
      release_date,
      poster_path,
      vote_average,
      genres,
      runtime,
      overview,
    })
  );

  return (dispatch) => {
    return fetch("http://localhost:4000/movies", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title,
        release_date,
        poster_path,
        vote_average,
        genres,
        runtime,
        overview,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          dispatch(onSuccess());
        } else {
          console.log(res);
          dispatch(onError("Something went wrong!"));
        }
      })
      .catch((err) => {
        dispatch(onError(err));
      });
  };
}

// Edit the movie by id

export function editMovie(obj, id) {
  const {
    modalTitle: title,
    modalReleaseDate: release_date,
    modalUrl: poster_path,
    modalRating: vote_average,
    genre: genres,
    modalRuntime: runtime,
    modalOverview: overview,
  } = obj;

  return (dispatch) => {
    return fetch("http://localhost:4000/movies", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id,
        title,
        release_date,
        poster_path,
        vote_average,
        genres,
        runtime,
        overview,
      }),
    })
      .then((res) => {
        if (res.ok === true) {
          console.log("SUCCESS");
          dispatch(resetClickedMovie());
        } else {
          console.log("FAILURE");
        }
      })
      .catch((err) => console.log(err));
  };
}

// Delete movie by id

export function deleteMovie(id) {
  return (dispatch) => {
    return fetch(`http://localhost:4000/movies/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok === true) {
        console.log("SUCCESS");
      } else {
        console.log("SOMETHING WENT WRONG!");
      }
    });
  };
}
