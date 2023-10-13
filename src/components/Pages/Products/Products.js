import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import ProdItem from "../Cart/ProdItem";
import axios from "axios";
import Loading from "../Loading/Loading";

const Products = () => {
  const routeData = useParams().product;
  // console.log(routeData);
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios(`http://localhost:5000/api/products/${routeData}`).then((data) => {
      setApiData(data.data);
    });
  }, [routeData]);

  return (
    <>
      {apiData ? (
        <div className="productContainer">
          <div className="Title">{routeData}</div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {apiData &&
                apiData.map((item, index) => {
                  return (
                    <div key={index}>
                      <ProdItem
                        id={item.id}
                        title={item.heading}
                        image={item.image}
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

export default Products;
