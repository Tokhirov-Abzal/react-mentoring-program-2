import React from "react";
import logoPng from "../../assets/logo.png";
import { Button } from "..";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logoPng} alt="" />
      <Button text="+ ADD" bgcolor="rgba(96, 96, 96, 0.6)" />
    </div>
  );
};

export default Navbar;
