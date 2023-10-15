import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

const TodaySpecial = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <div className="forUserContainer container">
        <div className="Title">Todays For You!</div>
        <div className="forUserContents">
          {products &&
            products.slice(0, 6).map((item, index) => {
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
                    <div>{item.cat}</div>
                    <div>₹{item.price}</div>
                    <div>{item.ratings}</div>
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
