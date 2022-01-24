import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Main, Footer } from ".";
import "../style/main.scss";

// thunk
import { fetchData } from "../thunk/thunk";

const App = () => {
  // redux
  const dispatch = useDispatch();
  const { movies, onSuccess, editClickedMovie } = useSelector((state) => state);

  const posterStatus = useSelector((state) => state.clickedMovie);
  useEffect(() => {
    // fetch data with thunk
    dispatch(fetchData());
  }, []);

  console.log(editClickedMovie);

  return (
    <div className={posterStatus ? "container active" : "container"}>
      {onSuccess && alert("SUCCESS!")}
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
