import React, { useEffect, useState } from "react";

// import leftArrow from "./images/leftArrow.svg";
// import rightArrow from "./images/rightArrow.svg";


import "./slideShow.css";

const SlideShow = ({ bannerArray }) => {
  const [counter, counterSetter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (counter < bannerArray?.length - 1) {
        counterSetter((value) => value + 1);
      } else {
        counterSetter(0);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (counter < bannerArray?.length - 1) {
        counterSetter((value) => value + 1);
      } else {
        counterSetter(0);
      }
    }, 3000);
  }, [counter]);

  let newArray = bannerArray?.map((item, index) => {
    if (index === counter) {
      return {
        img: item,
        display: "block",
        opacity: 1,
      };
    }
    return {
      img: item,
      display: "none",
      opacity: 0,
    };
  });

  return (
    <div className="slideshow">
      {newArray?.map((data) => {
        return (
          <img
            src={data.img}
            className="banner"
            style={{ display: data.display, opacity: data.opacity }}
          />
        );
      })}
    </div>
  );
};

export default SlideShow;
