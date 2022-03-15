import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Select } from "../components";
import { FormikProvider } from "formik";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

test("Select test", () => {
  const { getByText, getByAltText, getByTestId } = render(
    <Provider store={store}>
      <Select title="test select" />
    </Provider>
  );

  const btn = getByText(/select genre/i);

  expect(getByText(/test select/i)).toBeInTheDocument();
  expect(getByAltText(/arrow/i)).toBeInTheDocument();
});
