import React from "react";
import "./button.css";
function Button({ text, type, clickFunction }) {
  function clickHandler() {
    clickFunction && clickFunction();
  }
  return (
    <button
      onClick={clickHandler}
      className={`btn btn-${type ? type : "primary"}`}
    >
      {text}
    </button>
  );
}

export default Button;
