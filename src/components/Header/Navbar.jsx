import React from "react";
import logoPng from "../../assets/logo.png";
import { Button } from "..";
import "./Navbar.scss";

const Navbar = ({ setModalState }) => {
  return (
    <div className="navbar">
      <img src={logoPng} alt="" />
      <Button
        text="+ ADD"
        bgcolor="rgba(96, 96, 96, 0.6)"
        onModal={setModalState}
      />
    </div>
  );
};

export default Navbar;
