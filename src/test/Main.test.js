import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../components";

describe("Main component", () => {
  test("Render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  });
});
