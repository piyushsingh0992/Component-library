import React from "react";
import "./toggleButton.css";

const ToggleButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="toggleButton round" />
    </label>
  );
};

export default ToggleButton;
