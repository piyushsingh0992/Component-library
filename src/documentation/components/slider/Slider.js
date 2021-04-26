import React, { useState } from "react";
import "./slider.css";
const Slider = ({ min, max }) => {
  let [value, valueSetter] = useState(50);

  function changeHandler(e) {
    valueSetter(e.target.value);
  }

  console.log(value);
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={changeHandler}
      class="slider"
      id="myRange"
    />
  );
};

export default Slider;
