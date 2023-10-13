import React from "react";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../../ReduxCart/CartSlice";
import { Link } from "react-router-dom";

const ProdItem = ({ id, title, image, cat }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={`/${cat}/${id}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={image} alt="Product Img" height={150} width={150} />
            <h3 style={{ textAlign: "center" }}>{title}</h3>
          </div>
        </Link>
        <button
          onClick={() =>
            dispatch(
              AddtoCart({
                id,
                image,
                title,
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProdItem;
