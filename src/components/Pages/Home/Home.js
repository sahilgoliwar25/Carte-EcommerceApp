import React, { useEffect, useState } from "react";
import CarouselComp from "./CarouselComp/CarouselComp";
import Categories from "./Categories/Categories";
import "./Home.css";
import ProductList from "./Discounts/ProductList";
import QuoteBanner from "./QuoteBanner/QuoteBanner";
import axios from "axios";
import TodaySpecial from "./TodaysSpecial/TodaySpecial";
import Loading from "../Loading/Loading";

function Home() {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios("http://localhost:5000/api/products").then((data) => {
      // console.log(data.data);
      setApiData(data.data);
    });
  }, []);

  return (
    <div className="homeContainer">
      {apiData ? (
        <>
          <CarouselComp />
          <Categories />
          <ProductList products={apiData} />
          <TodaySpecial products={apiData} />
          <QuoteBanner />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Home;
