import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./DynamicProd.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import { AiFillStar } from "react-icons/ai";
import { AddtoCart } from "../../ReduxCart/CartSlice";

const DynamicProd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prodId = useParams().Id;
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios("http://localhost:5000/api/products").then((data) => {
      // console.log(data.data);
      setApiData(data.data);
    });
  }, []);
  const onAddCart = () => {
    apiData
      .filter((item) => item.id === prodId)
      .map((dataprod) => {
        // console.log(dataprod);
        const { id, image, heading } = dataprod;
        // console.log(id, image, heading);
        dispatch(AddtoCart({ id, image, heading }));

        return null;
      });
  };
  const onBuyNow = () => {
    apiData
      .filter((item) => item.id === prodId)
      .map((dataprod) => {
        // console.log(dataprod);
        const { id, image, heading } = dataprod;
        // console.log(id, image, heading);
        dispatch(AddtoCart({ id, image, heading }));
        navigate("/cart");
        return null;
      });
  };
  return (
    <div className="dynamicProdContainer">
      {apiData ? (
        <div>
          {apiData &&
            apiData
              .filter((item) => item.id === prodId)
              .map((data, index) => {
                return (
                  <div key={index} className="dyProductCont">
                    <div className="dyProductCont1">
                      <div className="dyProductImgCont">
                        <img
                          className="dyProductImg"
                          src={data.image}
                          alt="img not found"
                        />
                      </div>
                      <div className="dyProductBtns">
                        <button className="btnAddCart" onClick={onAddCart}>
                          Add to Cart
                        </button>
                        <button className="btnBuyNow" onClick={onBuyNow}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                    <div className="dyProductDesc">
                      <div className="dyProductHead">{data.heading}</div>
                      {data.ratings ? (
                        <div className="dyProductRatingsCont">
                          <div className="dyProductRating">
                            {data.ratings} <AiFillStar />
                          </div>
                          Ratings
                        </div>
                      ) : (
                        <div style={{ color: "blue", fontSize: "0.9rem" }}>
                          Be the first one to rate this product
                        </div>
                      )}
                      {data.discount ? (
                        <div className="dyProductAmountCont">
                          <div className="dyProductDiscount">
                            ₹{data.discount}
                          </div>
                          <div className="dyProductOriPrice">₹{data.price}</div>
                          <div className="dyProductOriDiscountPer">
                            {data.percent}% off
                          </div>
                        </div>
                      ) : (
                        <div className="dyProductDiscount">₹{data.price}</div>
                      )}
                      <div>+ ₹69 Secured Packaging Fee </div>

                      <div className="dyProductHighlightsCont">
                        Highlights:
                        <ul>
                          {data.highlights &&
                            data.highlights.map((subitems, index) => {
                              return <li key={index}>{subitems}</li>;
                            })}
                        </ul>
                      </div>
                      {data.description ? (
                        <div className="dyProductDesciption">
                          <span className="dyProductDesciptionHead">
                            Description:{" "}
                          </span>
                          {data.description}
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DynamicProd;