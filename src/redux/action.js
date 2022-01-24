export function showMovie(data) {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
}

export function clickMovie(movie) {
  return {
    type: "CLICK_MOVIE",
    payload: movie,
  };
}

export function resetClickedMovie() {
  return {
    type: "RESET_CLICKED_MOVIE",
  };
}

export function editClickedMovie(id) {
  return {
    type: "EDIT_CLICKED_MOVIE",
    payload: id,
  };
}

export function deleteClickedMovie(id) {
  return {
    type: "DELETE_CLICKED_MOVIE",
    payload: id,
  };
}

export function onSuccess() {
  return {
    type: "ON_SUCCESS",
  };
}

export function onError(err) {
  return {
    type: "ON_ERROR",
    payload: err,
  };
}
