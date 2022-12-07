import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddModal } from "../components";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("AddModal test", () => {
  const mockData = {
    id: "1",
    title: "Test title",
    release_date: "01/10/2011",
    poster_path: "test-url.com",
    vote_average: 5,
    genres: ["Horror"],
    runtime: 120,
    overview: "test overview",
  };

  test("AddModal Content", () => {
    render(
      <Provider store={store}>
        <AddModal modalTitle="For test" />
      </Provider>
    );

    expect(screen.getByText("For test")).toBeInTheDocument();
    expect(screen.getByTestId("form-test")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input")).toBeInTheDocument();

    for (let i = 2; i < 8; i++) {
      expect(screen.getByTestId(`modal-input${i}`)).toBeInTheDocument();
    }

    expect(screen.queryByTestId("submitBtn-test")).toBeInTheDocument();
    expect(screen.queryByTestId("editBtn-test")).toBeNull();

    fireEvent.click(screen.queryByTestId("modal-resetBtn"));
    expect(screen.getByTestId("modal-input").value).toBeFalsy();
  });

  test("Edit click", () => {
    store.dispatch({ type: "EDIT_CLICKED_MOVIE", payload: mockData });
    render(
      <Provider store={store}>
        <AddModal modalTitle="For test" />
      </Provider>
    );

    fireEvent.click(screen.queryByTestId("editBtn-test"));
  });
});
