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
