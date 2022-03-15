import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { AddModal } from "../components";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("AddModal test", () => {
  test("AddModal Content", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddModal modalTitle="For test" />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("For test")).toBeInTheDocument();
    expect(screen.getByTestId("form-test")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input2")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input3")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input4")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input5")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input6")).toBeInTheDocument();
    expect(screen.getByTestId("modal-input7")).toBeInTheDocument();
    expect(screen.queryByTestId("submitBtn-test")).toBeInTheDocument();
    expect(screen.queryByTestId("editBtn-test")).toBeNull();
  });
});
