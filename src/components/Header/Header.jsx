import React from "react";

import "./Header.scss";

import backgroundImg from "../../assets/Header.png";

import { Navbar, Search } from "../";

const Header = () => {
  return (
    <div className="header">
      <img className="background-image" src={backgroundImg} alt="" />
      <Navbar />
      <Search />
    </div>
  );
};

export default Header;
