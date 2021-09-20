import React, { useState } from "react";
import "./sideNav.css";
import menu from "./images/menu.svg";
import dog from "./images/moon.svg";
import search from "./images/search.svg";
import { Link } from "react-router-dom";
const SideNav = () => {
  const [mobileView, mobileViewSetter] = useState(true);

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    var sideNav = document.querySelector(".sidenav");
    var burger = document.querySelector(".sidenav-dropdown-burger-icon");
    if (event.target !== sideNav && event.target !== burger) {
      mobileViewSetter(true);
    }
  };
  let section = [
    { name: "Getting Started", link: "#gettingstarted" },
    { name: "Navigation bar", link: "#navbar" },
    { name: "Action button", link: "#actionButton" },
    { name: "Alert", link: "#alert" },
    { name: "Avatar", link: "#avatar" },
    { name: "Badge", link: "#badge" },
    { name: "Button", link: "#button" },
    { name: "Card", link: "#card" },

    { name: "Chip", link: "#chip" },
    { name: "Dropdown", link: "#dropdown" },
    { name: "Footer", link: "#footer" },
    { name: "Loader", link: "#loader" },
    { name: "Modal", link: "#modal" },

    { name: "Rating", link: "#rating" },
    { name: "Side Navgation bar 1", link: "#sidenav1" },
    { name: "Side Navgation bar 2", link: "#sidenav2" },
    { name: "Slider", link: "#slider" },
    { name: "SlideShow", link: "#slideShow" },
    { name: "Snackbar", link: "#snackbar" },
    { name: "Stepper", link: "#stepper" },
    { name: "Toggle Button", link: "#toggleButton" },
    { name: "Text-Field", link: "#textField" },
  ];

  return (
    <div className="sidenav">
      <div className="sidenav-brand-icon-container">
        <div className="Brand-moonlight">
          <img src={dog} className="sidenav-brand-icon" />
          <h1>Moonlight</h1>
        </div>
      </div>

      <div className="side-mobile-view-right">
        <div className="sidenav-routes">
          <Link to="/">
            <div className="sidenav-route">
              <a href=""> Home</a>
            </div>
          </Link>
          <a
            href="https://github.com/piyushsingh0992/Component-library/tree/initial-commit"
            target="_blank"
          >
            <div className="sidenav-route">
              <a>Github</a>
            </div>
          </a>

          <div className="sidenav-dropdown-burger-container">
            <img
              src={menu}
              className="sidenav-dropdown-burger-icon"
              onClick={() => {
                mobileViewSetter((value) => !value);
              }}
            />
          </div>
        </div>

        <div className="sidenav-dropdown-container">
          <div
            className={
              mobileView
                ? "sidenav-options-container sidenav-options-container-hide"
                : "sidenav-options-container sidenav-options-container-show"
            }
          >
            {section.map((item, index) => {
              return (
                <a
                  className={`sidenav-option ${
                    index % 2 === 0 && "sidenav-option-color"
                  }`}
                  href={item.link}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
