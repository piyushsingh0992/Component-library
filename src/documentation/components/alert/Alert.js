import React, { useState } from "react";
import "./alert.css";
import Error from "./images/error.svg";
import Success from "./images/success.svg";
import Warning from "./images/warning.svg";
import Info from "./images/info.svg";
function Alert({ type, message, position, btnText }) {
  const [show, showSetter] = useState(false);

  if (show === true) {
    setTimeout(() => {
      showSetter(false);
    }, 3000);
  }

  function showIcon(type) {
    switch (type?.toLowerCase()) {
      case "error":
        return Error;
      case "success":
        return Success;
      case "warning":
        return Warning;
      case "info":
        return Info;
      default:
        return Info;
    }
  }

  function positionHandler(position) {
    switch (position) {
      case "top-left":
        return {position:"alert-top-left" ,hide:'hide-left' };

      case "top-right":
        return {position:"alert-top-right" ,hide:'hide-right'};

      case "bottom-left":
        return {position:"alert-bottom-left" ,hide:'hide-left'};

      case "bottom-right":
        return {position:"alert-bottom-right" ,hide:'hide-right'};

      default:
        return {position:"alert-bottom-right" ,hide:'hide-right'};
    }
  }

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          showSetter(true);
        }}
      >
        {btnText ? btnText : "Show Alert"}
      </button>
      <div
        className={`alert alert-${
          type ? type.toLowerCase() : "info"
        } ${positionHandler(position).position}  ${show ? "alert-slide" : `alert-${positionHandler(position).hide}`} `}
      >
        <div>
          <img className="alert-icon" src={showIcon(type)} alt={type} />
          <span>{type ? type : "Info"}</span>
        </div>
        <p>{message ? message : "message"}</p>
      </div>
    </div>
  );
}

export default Alert;
