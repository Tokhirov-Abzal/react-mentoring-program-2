import React, { useContext } from "react";
import logoPng from "../../assets/logo.png";
import { Button } from "..";
import "./Navbar.scss";
import searchBtn from "../../assets/search-btn.svg";

import movieDataContext from "../../context/movieData";

const Navbar = ({ setModalState, button, searchIcon }) => {
  const { setClickedMovieId, setHeaderPoster } = useContext(movieDataContext);

  const reset = () => {
    setClickedMovieId(null);
    setHeaderPoster(false);
  };
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logoPng} alt="" />

      {button && (
        <Button
          text="+ ADD"
          bgcolor="rgba(96, 96, 96, 0.6)"
          onModal={setModalState}
        />
      )}
      {searchIcon && (
        <img
          className="search__icon"
          src={searchBtn}
          alt="search icon"
          onClick={reset}
        />
      )}
    </div>
  );
};

export default Navbar;
