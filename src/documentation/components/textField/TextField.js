import React, { useState } from "react";
import "./textField.css";

const TextField = ({ label, type }) => {
  const [value, valueSetter] = useState("");
  const [empty, emptySetter] = useState(true);
  function inputValueHandler(e) {
    valueSetter(e.target.value);
    if (e.target.value.length > 0) {
      emptySetter(false);
      console.log("length ->", e.target.value.length);
    } else {
      emptySetter(true);
    }
  }

  return (
    <span className="textField">
      <input
        className={empty ? "empty" : "filled"}
        type={type ? type : "text"}
        value={value}
        onChange={(e) => {
          inputValueHandler(e);
        }}
        required
      />
      <label>{label}</label>
    </span>
  );
};

export default TextField;
