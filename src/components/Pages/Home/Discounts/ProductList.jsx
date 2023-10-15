import React, { useRef, useState } from "react";
import "./ProductList.css"; // Create a CSS file for styling
import ProductItem from "./ProductItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductList = ({ products }) => {
  const listRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);
  const handleScroll = (direction) => {
    const list = listRef.current;

    if (direction === "next") {
      list.scrollLeft += list.offsetWidth;
    } else if (direction === "prev") {
      list.scrollLeft -= list.offsetWidth;
    }

    setScrollPosition(list.scrollLeft);
  };
  // console.log(products);

  return (
    <>
      <div className="container">
        <div className="Title">Todays Discounts!</div>
        <div className="product-list-container">
          <div
            className="scroll-button left"
            onClick={() => handleScroll("prev")}
          >
            <IoIosArrowBack />
          </div>

          <div className="product-list-wrapper" ref={listRef}>
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>

          <div
            className="scroll-button right"
            onClick={() => handleScroll("next")}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
