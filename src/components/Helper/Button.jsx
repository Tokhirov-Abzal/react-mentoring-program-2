import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, bgcolor }) => {
  return (
    <button style={{ backgroundColor: bgcolor }} className="btn__main">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default Button;
