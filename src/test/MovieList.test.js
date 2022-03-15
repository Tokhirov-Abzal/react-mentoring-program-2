import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MovieList } from "../components";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("MovieList test", () => {
  test("movieList Content", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieList />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("movies found")).toBeInTheDocument();
  });
});
