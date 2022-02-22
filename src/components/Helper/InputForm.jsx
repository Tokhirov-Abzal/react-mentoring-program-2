import React from "react";

const InputForm = ({ field, placeholder, ...props }) => {
  const { title, type } = props;

  return (
    <React.Fragment>
      <label>{title}</label>
      <input {...field} {...props} type={type} placeholder={placeholder} />
    </React.Fragment>
  );
};

export default InputForm;
