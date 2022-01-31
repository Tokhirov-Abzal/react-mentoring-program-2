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

export function editClickedMovieById(id) {
  return {
    type: "EDIT_CLICKED_MOVIE",
    payload: id,
  };
}

export function onSuccessEdit(state) {
  return {
    type: "ON_SUCCESS_TOGGLE",
    payload: state,
  };
}

export function deleteClickedMovie(id) {
  return {
    type: "DELETE_CLICKED_MOVIE",
    payload: id,
  };
}

export function onSuccessDelete(state) {
  return {
    type: "ON_SUCCESS_DELETE",
    payload: state,
  };
}

export function onSuccess() {
  return {
    type: "ON_SUCCESS",
  };
}

export function resetSuccess() {
  return {
    type: "RESET_SUCCESS",
  };
}

export function onError(err) {
  return {
    type: "ON_ERROR",
    payload: err,
  };
}
