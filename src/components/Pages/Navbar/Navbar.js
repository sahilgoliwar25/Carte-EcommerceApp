import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
function Navbar() {
  const data = useSelector((state) => state.Cart.cart);
  // console.log(data);
  return (
    <div className="NavbarContainer">
      <div className="navbarContainerMain">
        <h2>Carte</h2>
        <input
          className="searchInput"
          type="text"
          placeholder="Search for Products, Brands or More"
        />
        <Link className="navbarLink" to="/cart">
          <div className="cartIcon">
            <LuShoppingCart /> <div className="cartCount">{data.length}</div>
          </div>
        </Link>
        <Link className="navbarLink" to="/login">
          <h3>Login</h3>
        </Link>
      </div>
      <div className="navbarRoutes">
        <Link className="navbarLink" to="/">
          Home
        </Link>
        <Link className="navbarLink" to="/Phones">
          Phones
        </Link>
        <Link className="navbarLink" to="/Tablets">
          Tablets
        </Link>
        <Link className="navbarLink" to="/Laptops">
          Laptops
        </Link>
        <Link className="navbarLink" to="/Cameras">
          Cameras
        </Link>
        <Link className="navbarLink" to="/Accessories">
          Accessories
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
