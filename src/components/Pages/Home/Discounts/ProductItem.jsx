import React from "react";
import "./ProductItem.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";

const ProductItem = ({ _id, image, heading, price, ratings, cat }) => {
  // console.log(_id);
  return (
    <div className="product-item">
      <Link to={`/${cat}/${_id}`}>
        <div className="product-image">
          <img src={image} alt={cat} />
        </div>
        <div className="product-details">
          <div className="product-name">{cat}</div>
          <div className="product-price">₹{price}</div>
          <div className="product-rating">Rating: {ratings}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
