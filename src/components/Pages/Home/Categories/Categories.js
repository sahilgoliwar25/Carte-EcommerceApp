import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categoriesContainer">
      <Link className="productLink" to="/Phones">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Phones
        </div>
      </Link>
      <Link className="productLink" to="/Tablets">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/312/312/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Tablets
        </div>
      </Link>
      <Link className="productLink" to="/Laptops">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Laptops
        </div>
      </Link>
      <Link className="productLink" to="/Cameras">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Cameras
        </div>
      </Link>
      <Link className="productLink" to="/Accesories">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/612/612/ktaeqvk0/speaker/mobile-tablet-speaker/c/8/t/rma2002-realme-original-imag6zdntg4zezpr.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Accesories
        </div>
      </Link>
    </div>
  );
}

export default Categories;
