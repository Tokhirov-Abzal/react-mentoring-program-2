import React from "react";
import { Provider } from "react-redux";
import "../styles/main.scss";
import "../styles/_colors.scss";
import "../src/components/Modal/Modal.scss";
import store from "../src/redux/store";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
