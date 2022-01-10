import React from "react";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <h2>Find your movie</h2>
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};

export default Search;
