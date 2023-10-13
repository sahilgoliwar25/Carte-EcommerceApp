import React, { useEffect, useState } from "react";
import "./DynamicProd.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import { AiFillStar } from "react-icons/ai";

const DynamicProd = () => {
  const prodId = useParams().Id;
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios("http://localhost:5000/api/products").then((data) => {
      // console.log(data.data);
      setApiData(data.data);
    });
  }, []);
  return (
    <div className="dynamicProdContainer">
      {apiData ? (
        <div>
          <div className="Title">Data</div>
          {apiData &&
            apiData
              .filter((item) => item.id === prodId)
              .map((data, index) => {
                return (
                  <div key={index}>
                    <div>{data.heading}</div>
                    <img src={data.image} alt="img not found" />
                    <div>
                      <div>₹{data.discount}</div>
                      <div>₹{data.price}</div>
                      <div>{data.percent}% off</div>
                    </div>
                    <div>
                      {data.ratings}
                      <AiFillStar />
                    </div>
                    <div>
                      Highlights:{" "}
                      <ul>
                        {data.highlights &&
                          data.highlights.map((subitems, index) => {
                            return <li key={index}>{subitems}</li>;
                          })}
                      </ul>
                    </div>
                    <div>Description: {data.description}</div>
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
