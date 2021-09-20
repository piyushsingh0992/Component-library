import React from "react";

import "./badge.css";
const Badge = ({ children, item, size, status }) => {
  return (
    <span className="badge-container">
      {item ? (
        <div
          className={`badge badge-item badge-item-${size ? size : "small"}`}
        >
          <span>{item}</span>
        </div>
      ) : (
        <div className={`badge badge-${status?status:'online'} badge-${size}`}></div>
      )}

      {children}
    </span>
  );
};

export default Badge;
