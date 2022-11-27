import React from "react";
import logoPng from "../../assets/logo.png";
import { Button } from "..";
import "./Navbar.scss";
import searchBtn from "../../assets/search-btn.svg";

import { useDispatch } from "react-redux";
import { resetClickedMovie } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import { formSearchUrl } from "../../helpers";

const Navbar = ({ setModalState, button, searchIcon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toSearchUrl = formSearchUrl();

  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src={logoPng}
        alt="logo"
        data-testid="logo"
      />

      {button && (
        <Button
          text="+ ADD"
          bgcolor="rgba(96, 96, 96, 0.6)"
          onModal={setModalState}
          data-testid="addBtn"
        />
      )}
      {searchIcon && (
        <img
          className="search__icon"
          src={searchBtn}
          alt="search icon"
          onClick={() => {
            dispatch(resetClickedMovie());
            navigate(toSearchUrl);
          }}
          data-testid="search-icon"
        />
      )}
    </div>
  );
};

export default Navbar;
