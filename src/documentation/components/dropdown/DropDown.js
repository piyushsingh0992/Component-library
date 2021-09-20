import React, { useState } from "react";
import "./dropDown.css";
import downArrow from "./images/downArrow.svg";

const Dropdown = ({ item }) => {
  let [show, showSetter] = useState(false);

  function showDropDownItem() {
    showSetter((value) => !value);
  }

  return (
    <div className="dropdown-container">
      <div onClick={showDropDownItem} className="dropdown-trigger">
        <p>menu</p> <img src={downArrow} />
      </div>
      <div
        className={`dropdown-items-container ${
          show ? "dropdown-show" : "dropdown-hide"
        }`}
      >
        {item &&
          item.map((item) => {
            return (
              <a className="dropdown-item" href={item?.link}>
                <p>{item?.text}</p>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
