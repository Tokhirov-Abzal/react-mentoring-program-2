import React from "react";
import logoPng from "../../assets/logo.png";
import { Button } from "..";
import "./Navbar.scss";
import searchBtn from "../../assets/search-btn.svg";

import { useDispatch } from "react-redux";
// action creator for reset header poster
import { resetClickedMovie } from "../../redux/action";

const Navbar = ({ setModalState, button, searchIcon }) => {
  const dispatch = useDispatch();
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
          onClick={() => dispatch(resetClickedMovie())}
        />
      )}
    </div>
  );
};

export default Navbar;
