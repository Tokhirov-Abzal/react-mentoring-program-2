import React from "react";
import logoPng from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoPng} alt="footer" />
    </div>
  );
};

export default Footer;
