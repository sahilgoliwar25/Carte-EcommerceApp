import React, { useEffect, useState } from "react";
import CarouselComp from "./CarouselComp/CarouselComp";
import Categories from "./Categories/Categories";
import "./Home.css";
import ProductList from "./Discounts/ProductList";
import QuoteBanner from "./QuoteBanner/QuoteBanner";
import axios from "axios";
import TodaySpecial from "./TodaysSpecial/TodaySpecial";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

function Home() {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios("https://sg-carte-ecommerce-server.onrender.com/api/products").then(
      (data) => {
        // console.log(data.data);
        setApiData(data.data);
      }
    );
  }, []);

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default Home;
