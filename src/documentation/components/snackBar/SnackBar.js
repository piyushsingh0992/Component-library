import React, { useState } from "react";
import "./snackBar.css";
import cross from "./images/close.svg";
const SnackBar = ({ text, triggerText, triggerElement }) => {

  const [trigger, triggerHandler] = useState(false);
  function clickHandler() {
    triggerHandler((value) => !value);
  }

  return (
    <div>
      {triggerElement ? (
        <span style={{ cursor: "pointer" }} onClick={clickHandler}>
          {triggerElement}
        </span>
      ) : (
        <button className="btn btn-primary" onClick={clickHandler}>
          {triggerText ? triggerText : "show SnackBar"}
        </button>
      )}

      <div
        className={`snackBar ${trigger ? "show-snackbar" : "hide-snackbar"}`}
      >
        <p>{text}</p>
        <img src={cross} onClick={clickHandler} className="snackbar-close" />
      </div>
    </div>
  );
};

export default SnackBar;
