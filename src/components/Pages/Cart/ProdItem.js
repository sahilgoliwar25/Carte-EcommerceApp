import React from "react";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";
import "./ProdItem.css";

const ProdItem = ({
  id,
  heading,
  image,
  cat,
  ratings,
  highlights,
  percent,
  price,
  discount,
  subcat,
}) => {
  return (
    <>
      <div className="prodContItem">
        <Link to={`/${cat}/${subcat}/${id}`}>
          <div className="prodContItemData">
            <div className="prodContItemInfo">
              <div className="prodContItemImage">
                <img src={image} alt="Product Img" />
              </div>
              <div className="prodContItemInfoDetails">
                <h3 className="prodContItemHeading">{heading}</h3>
                {ratings ? (
                  <div className="dyProductRatingsCont">
                    <div className="prodContRating">
                      {ratings} <AiFillStar />
                    </div>
                    Ratings
                  </div>
                ) : (
                  <div style={{ color: "blue", fontSize: "0.9rem" }}>
                    Be the first one to rate this product
                  </div>
                )}
                <div className="prodContItemHighlightsCont">
                  <ul>
                    {highlights &&
                      highlights.map((subitems, index) => {
                        return <li key={index}>{subitems}</li>;
                      })}
                  </ul>
                </div>
              </div>
            </div>
            {discount ? (
              <div>
                <div className="prodContItemPrice">
                  <div className="dyProductDiscount">₹{discount}</div>
                  <div className="dyProductOriPrice">₹{price}</div>
                  <div>
                    <div className="dyProductOriDiscountPer">
                      {percent}% off
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dyProductDiscount">₹{price}</div>
            )}
          </div>
        </Link>
      </div>
      <hr className="prodSeperator" />
    </>
  );
};

export default ProdItem;
