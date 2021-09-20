import React from "react";
import "./loader.css";
const Loader = ({ size }) => {
    
  let dimension = size
    ? {
        width: `${1.5 * size}rem`,
        height: `${1.5 * size}rem`,
      }
    : { width: `1.5rem`, height: `1.5rem` };

  return <div className="loader" style={dimension}></div>;
};

export default Loader;
