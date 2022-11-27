import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Navbar test", () => {
  test("Navbar", () => {
    const onModal = jest.fn();
    const { getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    expect(getByAltText("logo")).toBeInTheDocument();
  });

  test("Existence button", () => {
    const onModal = jest.fn();
    const { getByRole, getByAltText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar button={true} searchIcon={true} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByRole("button")).toBeInTheDocument();
    expect(getByText(/Add/i)).toBeInTheDocument();
    expect(getByAltText(/search icon/i)).toBeInTheDocument();
  });

  test("Existence button", () => {
    const onModal = jest.fn();
    const { queryByAltText, queryByRole, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar button={false} searchIcon={false} />
        </BrowserRouter>
      </Provider>
    );

    expect(queryByRole("button")).toBeNull();
    expect(queryByAltText(/search icon/i)).toBe(null);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("Non existence button", () => {
    const onModal = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar button={true} searchIcon={true} />
        </BrowserRouter>
      </Provider>
    );
    const btn = screen.getByTestId("addBtn");
    expect(btn).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();

    expect(screen.queryByTestId("modal")).toBeNull();
  });
});
