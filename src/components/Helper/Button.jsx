import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  const { text, bgcolor, onModal } = props;
  return (
    <button
      style={{ backgroundColor: bgcolor }}
      className="btn__main"
      onClick={() => onModal(true)}
      {...props}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default Button;
