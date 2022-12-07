import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Genre } from "../components";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("test Genre component", () => {
  test("genre item", () => {
    const genreList = [
      { id: 2, title: "All", checked: false },
      { id: 2, title: "Documentary", checked: false },
      { id: 3, title: "Comedy", checked: false },
      { id: 4, title: "Horror", checked: false },
      { id: 5, title: "Crime", checked: false },
    ];

    render(
      <Provider store={store}>
        <Genre />
      </Provider>
    );

    const genres = [
      "All",
      ...screen.getAllByTestId("genreName").map((item) => item.textContent),
    ];

    expect(genres).toMatchInlineSnapshot(
      genreList.map((item) => item.title),
      `
Array [
  "All",
  "Documentary",
  "Comedy",
  "Horror",
  "Crime",
]
`
    );

    expect(screen.getByText(/rating/i)).toBeInTheDocument();
  });
});
