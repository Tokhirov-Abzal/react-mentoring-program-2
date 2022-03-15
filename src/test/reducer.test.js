import React from "react";
import "@testing-library/jest-dom";
import movieReducer from "../redux/reducer";
import { initialState } from "../redux/reducer";
import {
  showMovie,
  clickMovie,
  resetClickedMovie,
  editClickedMovieById,
  onSuccessEdit,
  deleteClickedMovie,
  onSuccessDelete,
  onSuccess,
  resetSuccess,
  onError,
} from "../redux/action";

describe("reducer test", () => {
  const movie = [
    {
      id: 1,
      title: "movie title",
      poster_path: "poster path",
      genres: "genre",
      release_date: "releaseDate",
      overview: "overview",
      vote_average: 10,
      runtime: 100,
    },
  ];

  test("state", () => {
    expect(initialState).toEqual({
      movies: [],
      clickedMovie: null,
      genreList: [
        { id: 2, title: "Documentary", checked: false },
        { id: 3, title: "Comedy", checked: false },
        { id: 4, title: "Horror", checked: false },
        { id: 5, title: "Crime", checked: false },
      ],
      editClickedMovie: null,
      onSuccessEdit: false,
      deleteClickedMovie: null,
      onSuccessDelete: false,
      onSuccess: false,
      onError: { state: false, msg: null },
    });
  });

  test("initial state", () => {
    expect(movieReducer(initialState, { type: undefined })).toEqual(
      initialState
    );
  });

  test("fetch reducer", () => {
    expect(movieReducer(initialState, showMovie(movie))).toEqual({
      ...initialState,
      movies: [...movie],
    });
  });

  test("clickMovie reducer initial state", () => {
    expect(movieReducer(initialState, clickMovie())).toEqual({
      ...initialState,
      clickedMovie: undefined,
    });
  });

  test("clickMovie reducer with movieId", () => {
    expect(movieReducer(initialState, clickMovie(movie))).toEqual({
      ...initialState,
      clickedMovie: movie,
    });
  });

  test("reset reducer", () => {
    expect(movieReducer(initialState, resetClickedMovie(movie))).toEqual({
      ...initialState,
      clickedMovie: null,
      editClickedMovie: null,
    });
  });

  test("edit reducer", () => {
    const id = 2;
    expect(movieReducer(initialState, editClickedMovieById(id))).toEqual({
      ...initialState,
      editClickedMovie: id,
    });
  });

  test("onsuccess toggle reducer", () => {
    expect(movieReducer(initialState, onSuccessEdit(false))).toEqual({
      ...initialState,
      onSuccessEdit: false,
    });
  });

  test("delete clicked movie reducer", () => {
    expect(movieReducer(initialState, deleteClickedMovie(2))).toEqual({
      ...initialState,
      deleteClickedMovie: 2,
    });
  });

  test("onsuccess delete reducer", () => {
    expect(movieReducer(initialState, onSuccessDelete(true))).toEqual({
      ...initialState,
      onSuccessDelete: true,
    });
  });

  test("onsuccess reducer", () => {
    expect(movieReducer(initialState, onSuccess())).toEqual({
      ...initialState,
      onSuccess: true,
      onError: { state: false, msg: null },
    });
  });

  test("resetSuccess reducer", () => {
    expect(movieReducer(initialState, resetSuccess())).toEqual({
      ...initialState,
      onSuccess: false,
    });
  });

  test("onError reducer", () => {
    expect(movieReducer(initialState, onError("error message"))).toEqual({
      ...initialState,
      onSuccess: false,
      onError: { state: true, msg: "error message" },
    });
  });
});
