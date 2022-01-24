import React from "react";

const InputTextarea = ({ field, ...props }) => {
  const { title } = props;
  return (
    <React.Fragment>
      <label>{title}</label>
      <textarea {...field} {...props} />
    </React.Fragment>
  );
};

export default InputTextarea;
