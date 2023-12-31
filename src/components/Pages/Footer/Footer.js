import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-comp">
      <div className="company-info-comp">
        <div className="company-logo-comp">
          <div className="footer-nav-logo">
            <Link to="/">
              <span className="LogoLetter1">C</span>
              <span className="LogoLetter2">A</span>
              <span className="LogoLetter3">R</span>
              <span className="LogoLetter4">T</span>
              <span className="LogoLetter5">E</span>
            </Link>
          </div>
        </div>
        <div className="company-desc">
          Carte is India's leading Ecommerce Webapp providing latest and
          greatest Discounts on the products.
        </div>
        <div className="company-social">
          <FaLinkedin />
          <FaTwitterSquare />
          <FaFacebookSquare />
          <PiInstagramLogoFill />
        </div>
      </div>
      <div className="footer-actions-container">
        <div>
          <h2>Services</h2>
          <div className="footer-service-nav">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            {/* <Link to="/">Food</Link> */}
          </div>
        </div>
        <div>
          <h2>Resources</h2>
          <div className="footer-service-nav">
            <Link to="/HelpCenter">Help Centre</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
        </div>
        <div className="footer-company-info">
          <h1>Need Assistance?</h1>
          {/* <button className="css-button-arrow--black">Book a demo</button> */}
          <div className="footer-company-align">
            <FaMobile /> +91-9111001089
          </div>
          <div className="footer-company-align">
            <BiLogoGmail /> support@shopping.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
