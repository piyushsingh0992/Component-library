import React from "react";
import "./hero.css";
import cloud from "./images/cloud.png";
import moon from "./images/moon.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt=""
        className="moon"
      />
      <img
        className="stars"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png"
        alt="stars"
      />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png"
        className="twinkling"
        alt="twinkling"
      />
      <img className="clouds" src={cloud} alt="cloud" />
      {/* <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div> */}

      <div className="intro">
        <div className="hero-heading">
          <h1>
            <img src={moon} className="moonIcon" />
            Moonlight
          </h1>
        </div>
        <div className="intro-info">
          <p>
            MoonShoot is a component library that gives you the building blocks
            you need to build your own applications.
          </p>
        </div>
        <div className="intro-box-container">
          <Link to="/Documentation">
            <button className="intro-btn intro-primary">Documentation</button>
          </Link>
          <a href="https://github.com/piyushsingh0992/Component-library/tree/initial-commit" target="_blank">
          <button className="intro-btn intro-secondary">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
