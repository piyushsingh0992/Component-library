import React, { useState } from "react";
import "./sidenav1.css";

import menu from "./images/menu.svg";
const Sidenav1 = ({ optioArray, brand }) => {

  const [phoneView, phoneViewSetter] = useState(false);

  function phoneViewHandler() {
    phoneViewSetter((value) => !value);
  }

  return (
    <div
      className={
        phoneView ? "mobilview-sidenav1 transition" : "sidenav1 transition"
      }
    >
      <img
        src={menu}
        className="sidenav1-menu-icon"
        onClick={phoneViewHandler}
      />

      {brand && brand.brandImg ? (
        <img src={`${brand.brandImg}`} className="sidenav1-brand-icon" />
      ) : (
        <h1 className="heading">{brand?.text}</h1>
      )}

      <div className="sidenav1-item-container">
        {optioArray?.map((item,index) => {
          return (
            <a className="sidenav1-item" href={item.link} key={index}>
              {item.img && (
                <img src={item.img} className="sidenav1-item-icon" />
              )}
              <p>{item?.text}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav1;
