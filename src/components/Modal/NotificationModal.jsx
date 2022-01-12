import React from "react";

const NotificationModal = ({ title, info, button }) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <h3>{info}</h3>
      {button && <button>{button}</button>}
    </React.Fragment>
  );
};

export default NotificationModal;
