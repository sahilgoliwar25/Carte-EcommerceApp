import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import ProdItem from "../Cart/ProdItem";
import axios from "axios";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

const SubProducts = () => {
  const routeData = useParams().product;
  const routeSubData = useParams().subcat;

  // console.log(routeData, routeSubData);
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios(
      `https://sg-carte-ecommerce-server.onrender.com/api/products/${routeData}/${routeSubData}`
    ).then((data) => {
      setApiData(data.data);
    });
  }, [routeData, routeSubData]);

  return (
    <>
      <Navbar />
      {apiData ? (
        <div className="productContainer">
          <div className="Title">
            {routeData} &gt; {routeSubData}
          </div>
          <div>
            <div>
              {apiData &&
                apiData.map((item, index) => {
                  // console.log(item);
                  return (
                    <div key={index}>
                      <ProdItem
                        id={item._id}
                        heading={item.heading}
                        image={item.image}
                        ratings={item.ratings}
                        highlights={item.highlights}
                        percent={item.percent}
                        price={item.price}
                        discount={item.discount}
                        cat={item.cat}
                        subcat={item.subcat}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SubProducts;
