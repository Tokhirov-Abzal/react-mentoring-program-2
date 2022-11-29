import React from "react";

const Header = ({ children, nameClass }) => {
  return <div className={nameClass}>{children}</div>;
};

export default Header;
