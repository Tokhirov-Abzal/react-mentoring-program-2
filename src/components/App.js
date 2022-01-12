import React, { useState } from "react";
import { Header, Main, Footer } from ".";
import "../style/main.scss";

const genreList = [
  { id: 1, title: "All", checked: false },
  { id: 2, title: "Documentary", checked: false },
  { id: 3, title: "Comedy", checked: false },
  { id: 4, title: "Horror", checked: false },
  { id: 5, title: "Crime", checked: false },
];

const App = () => {
  return (
    <div className="container">
      <Header genreList={genreList} />
      <Main genreList={genreList} />
      <Footer />
    </div>
  );
};

export default App;
