import React, { useState } from "react";
import "./card.css";

import heart1 from "./images/heart1.svg";
import heart2 from "./images/heart2.svg";

const Card = ({
  productImage,
  productName,
  price,
  off,
  productDes,
  addToCart,
  addToWishList,
  removeFromWishList,
  rating,
  outOfStock,
}) => {
  let newPrice = Math.floor(price - (price / 100) * off);

  const [wishlistButton, wishlistButtonSetter] = useState(false);

  const wishListButtonHandler = () => {
    if (wishlistButton) {
      wishlistButtonSetter(false);
      removeFromWishList && removeFromWishList();
    } else {
      wishlistButtonSetter(true);
      addToWishList && addToWishList();
    }
  };

  const ratingHandler = () => {
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
    <div class="card">
      {outOfStock && (
        <div class="out-of-stock">
          <p>Out of Stock</p>
          <p></p>
        </div>
      )}
      <div class="card-img-container">
        <img
          onClick={wishListButtonHandler}
          src={wishlistButton ? heart2 : heart1}
          class="card-add-to-wishlist"
          alt="Add toCart"
        />
        <img src={productImage} class="card-img" alt="product" />
      </div>
      <div class="card-description-container">
        <p class="card-heading">
          {productName && productName.length > 20
            ? `${productName?.slice(0, 20)}...`
            : productName}
        </p>
        <p class="card-description">
          {productDes && productDes.length > 24
            ? `${productDes?.slice(0, 24)}...`
            : productDes}
        </p>
        <div class="card-price-container">
          <p class="card-new-price">Rs {newPrice} </p>
          <p class="card-old-price">Rs {price}</p>
          <p class="card-percentage-off">{off}% off</p>
        </div>

        <div class="card-rating">{ratingHandler().map((item) => item)}</div>
      </div>
      <div class="card-btn-container">
        <button
          class="btn btn-primary"
          onClick={() => {
            addToCart && addToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
