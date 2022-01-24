import React from "react";

const InputForm = ({ field, ...props }) => {
  const { title, type } = props;

  return (
    <React.Fragment>
      <label>{title}</label>
      <input {...field} {...props} type={type} />
    </React.Fragment>
  );
};

export default InputForm;
