import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MovieCard } from "../components";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("MovieCard test", () => {
  const movie = {
    id: 337167,
    title: "Fifty Shades Freed",
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: "2018-02-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    budget: 55000000,
    revenue: 136906000,
    genres: ["Drama", "Romance"],
    runtime: 106,
  };
  test("MovieCard content is in the page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieCard {...movie} />
        </BrowserRouter>
      </Provider>
    );

    const posterImage = screen.getByAltText("poster");
    expect(posterImage.className).toBe("moviecard__poster");

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText("DramaRomance")).toBeInTheDocument();
    expect(
      screen.getByText(movie.release_date.split("-")[0])
    ).toBeInTheDocument();
    expect(screen.queryByTestId("edit-test")).toBeNull();

    const editBtn = screen.getByTestId("editIcon");
    fireEvent.click(editBtn);
    const editSubBtn = screen.getByTestId("edit-test");
    const deleteSubBtn = screen.getByTestId("delete-test");
    expect(editSubBtn).toBeInTheDocument();
    expect(deleteSubBtn).toBeInTheDocument();
    fireEvent.click(screen.queryByTestId("options"), {
      target: { innerText: "edit" },
    });

    fireEvent.click(editBtn);
    expect(screen.getByTestId("modal-input")).toBeInTheDocument();
    expect(screen.getByTestId("form-test")).toBeInTheDocument();
  });
});
