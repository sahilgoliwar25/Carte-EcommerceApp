import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const TodaySpecial = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <div className="forUserContainer container">
        <div className="Title">Today's Trending Products</div>
        <div className="forUserContents">
          {products &&
            products
              .filter((data) => data.ratings >= 4.5)
              .slice(0, 8)
              // .sort((a,
              .reverse()
              .map((item, index) => {
                return (
                  <div className="items" key={index}>
                    <Link to={`/${item.cat}/${item._id}`}>
                      <div className="imgCont">
                        <img
                          className="image"
                          src={item.image}
                          alt="Img not found"
                        />
                      </div>
                      <div className="product-details">
                        <div className="product-name">{item.heading}</div>
                        <div className="productPriceCont">
                          <div className="product-discount">
                            ₹{item.discount}
                          </div>
                          <div className="product-price">₹{item.price}</div>
                          <div className="product-rating">
                            {item.ratings} <AiFillStar />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;
