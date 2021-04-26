import React, { useState } from "react";
import "./sideNav2.css";
import menu from "./images/menu.svg";
import dog from "./images/dog.svg";
import search from "./images/search.svg";
const Sidenav2 = ({ optionArray, routeArray, brand }) => {
  const [mobileView, mobileViewSetter] = useState(true);

  console.log("optionArray->", optionArray);

  window.onclick = function (event) {
    var sidenav2 = document.querySelector(".sidenav2");
    var burger = document.querySelector(".sidenav2-dropdown-burger-icon");
    if (event.target !== sidenav2 && event.target !== burger) {
      mobileViewSetter(true);
    }
  };
  let section = [
    { name: "Installation", link: "installation" },
    { name: "Action button", link: "actionButton" },
    { name: "Alert", link: "alert" },
    { name: "Avatar", link: "avatar" },
    { name: "Badge", link: "badge" },
    { name: "Button", link: "button" },
    { name: "Card", link: "card" },
    { name: "Check-box", link: "checkBox" },
    { name: "Chip", link: "chip" },
    { name: "Dropdown", link: "dropdown" },
    { name: "Footer", link: "footer" },
    { name: "Loader", link: "loader" },
    { name: "Modal", link: "modal" },
    { name: "Navigation bar", link: "navbar" },
    { name: "Pagination", link: "pagination" },
    { name: "Rating", link: "rating" },
    { name: "Side Navgation bar 1", link: "sidenav21" },
    { name: "Side Navgation bar 2", link: "sidenav22" },
    { name: "Slider", link: "slider" },
    { name: "SlideShow", link: "slideShow" },
    { name: "Snackbar", link: "snackbar" },
    { name: "Stepper", link: "stepper" },
    { name: "Switch", link: "switch" },
    { name: "Text-Field", link: "textField" },
    { name: "Responsive-Images", link: "images" },
  ];

  return (
    <div className="sidenav2">
      <div className="sidenav2-brand-icon-container">
        {brand && brand?.img ? (
          <img src={brand.img} className="sidenav2-brand-icon" />
        ) : (
          <h1 className="sidenav2-heading">{brand?.text}</h1>
        )}

        <div className="sidenav2-search-bar">
          <img src={search} className="sidenav2-search-icon" />
          <input className="sidenav2-search-input" placeholder="Search here" />
        </div>
      </div>

      <div className="side-mobile-view-right">
        <div className="sidenav2-routes">
          {routeArray &&
            routeArray?.map((item) => {
              return (
                <div className="sidenav2-route">
                  <a href={item.link}> {item.text}</a>
                </div>
              );
            })}
          <div className="sidenav2-dropdown-burger-container">
            <img
              src={menu}
              className="sidenav2-dropdown-burger-icon"
              onClick={() => {
                mobileViewSetter((value) => !value);
              }}
            />
          </div>
        </div>

        <div className="sidenav2-dropdown-container">
          <div
            className={
              mobileView
                ? "sidenav2-options-container sidenav2-options-container-hide"
                : "sidenav2-options-container sidenav2-options-container-show"
            }
          >
            {optionArray?.map((item, index) => {
              return (
                <a
                  className={`sidenav2-option ${
                    index % 2 === 0 && "sidenav2-option-color"
                  }`}
                  href={item.link}
                >
                  {item.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav2;
