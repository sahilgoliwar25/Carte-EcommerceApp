import React from "react";
import "./ProductItem.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
// import { AiFillStar } from "react-icons/ai";

const ProductItem = ({
  _id,
  image,
  heading,
  price,
  cat,
  percent,
  discount,
  subcat,
}) => {
  // console.log(_id);
  return (
    <div className="product-item">
      <Link to={`/${cat}/${subcat}/${_id}`}>
        <div className="product-image">
          <img src={image} alt={cat} />
        </div>
        <div className="product-details">
          <div className="product-name">{heading}</div>
          <div className="productPriceCont">
            <div className="product-discount">₹{discount}</div>
            <div className="product-price">₹{price}</div>
            <div
              style={{ color: "green", fontWeight: "600", fontSize: "0.9rem" }}
            >
              {percent}%
            </div>
            {/* <div className="product-rating">
              {ratings} <AiFillStar />
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
