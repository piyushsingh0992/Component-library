import React from "react";

import "./avatar.css";
import user from "./images/user.svg";

const Avatar = ({ image, name, size }) => {
  return (
    <div className={`avatar avatar-${size ? size : "small"}`}>
      {image ? (
        <img src={image} alt={name} className={`${size}`} />
      ) : (name?
        <p>{name[0].toUpperCase()}</p>:<img src={user}/>
      )}
    </div>
  );
};

export default Avatar;
