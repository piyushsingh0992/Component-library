import React from "react";
import "./rating.css";
function Rating({ rating }) {
  const ratingHandler = (rating) => {
    let finalRating = [];
    if (rating > 5 || rating < 0) {
      return [];
    }
    for (let i = 0; i < rating; i++) {
      finalRating.push(<span class="fa fa-star checked"></span>);
    }

    for (let i = 0; i < 5 - rating; i++) {
      finalRating.push(<span class="fa fa-star "></span>);
    }

    return finalRating;
  };
  return (
    <div className="card-rating">
      {ratingHandler(rating).map((item) => item)}
    </div>
  );
}

export default Rating;
