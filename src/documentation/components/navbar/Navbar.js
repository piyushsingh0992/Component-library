import React, { useEffect, useState } from "react";
import dog from "./images/dog.svg";
import menu from "./images/menu.svg";
import search from "./images/search.svg";
import cross from "./images/close.svg";

import "./navbar.css";
const Navbar = ({ brandImg,item1, item2, login }) => {
  const [phoneView, phoneViewSetter] = useState(false);

  function phoneViewHandler() {
    phoneViewSetter((value) => !value);
    console.log("clicked");
  }

  function item1ClickHandler() {
    item1 && item1.clickHandler && item1.clickHandler();
  }

  function item2ClickHandler() {
    item2 && item2.clickHandler && item2.clickHandler();
  }

  function loginClickHandler() {
    login && login.clickHandler && login.clickHandler();
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        {brandImg && <img src={brandImg} className="navbar-brand-icon" />}

        <div className="navbar-search">
          <img src={search} className="navbar-search-icon" />
          <input placeholder="Search" />
        </div>
      </div>
      <div
        className={
          phoneView ? "navbar-right navbar-show" : "navbar-right navbar-hide"
        }
      >
        {/* <img src ={cross} className={phoneView?"navbar-close-icon":"navbar-close-icon icon-hide"} onClick={phoneViewHandler}/>
         */}
        <div className="navbar-link-container">
          {item1 && (
            <div className={"navbar-link"} onClick={item1ClickHandler}>
              {item1?.element ? item1.element : <p>{item1?.text}</p>}
            </div>
          )}
          {item2 && (
            <div className={"navbar-link"} onClick={item2ClickHandler}>
              {item2?.element ? item2.element : <p>{item2?.text}</p>}
            </div>
          )}
        </div>

        <div className="navbar-logout-link-container">
          {login && (
            <div className={"navbar-link"} onClick={loginClickHandler}>
              {login?.element ? login.element : <p>{login?.text}</p>}
            </div>
          )}
        </div>
      </div>

      <img
        src={menu}
        className={" navbar-menu-icon"}
        onClick={phoneViewHandler}
      />
    </div>
  );
};

export default Navbar;
