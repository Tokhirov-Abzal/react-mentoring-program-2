import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "../components";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("Search component", () => {
  test("search input value", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const input = getByTestId("searchInput");

    await act(async () => {
      fireEvent.change(input, { target: { value: "Titanic" } });
    });

    expect(input.value).toBe("Titanic");
  });

  test("search input onClick seatch button", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
    const button = getByTestId("searchBtn");
    const input = getByTestId("searchInput");
    await act(async () => {
      fireEvent.change(input, { target: { value: "Titanic" } });
      fireEvent.click(button);
    });

    expect(input.value).toBe("Titanic");
  });
});
