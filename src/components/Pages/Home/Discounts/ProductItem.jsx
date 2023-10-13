import React from "react";
import "./ProductItem.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, ratings, cat }) => {
  return (
    <div className="product-item">
      <Link to={`/${cat}/${id}`}>
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-details">
          <div className="product-name">{name}</div>
          <div className="product-price">₹{price}</div>
          <div className="product-rating">Rating: {ratings}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
