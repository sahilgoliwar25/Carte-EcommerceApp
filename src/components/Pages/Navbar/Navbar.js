import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
function Navbar() {
  const data = useSelector((state) => state.Cart.cart);

  const logoutbtn = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  // useEffect(() => {
  //   console.log(localStorage.getItem("token"));
  // }, [localStorage.getItem("token")]);
  return (
    <div className="NavbarContainer">
      <div className="navbarContainerMain">
        <div className="brandLogo">
          <span className="LogoLetter1">C</span>
          <span className="LogoLetter2">A</span>
          <span className="LogoLetter3">R</span>
          <span className="LogoLetter4">T</span>
          <span className="LogoLetter5">E</span>
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Search for Products, Brands or More"
        />
        <div className="userActions">
          <Link className="" to="/cart">
            <div className="cartIcon">
              <LuShoppingCart /> <div className="cartCount">{data.length}</div>
            </div>
          </Link>
          {localStorage.getItem("token") ? (
            <button className="btnlogout" onClick={logoutbtn}>
              Logout
            </button>
          ) : (
            <Link className="" to="/login">
              <button className="btnlogout">Login</button>
            </Link>
          )}
        </div>
      </div>
      <div className="navbarRoutes">
        <NavLink activeclassname="activeNavLink" className="navbarLink" to="/">
          Home
        </NavLink>
        <NavLink
          activeclassname="activeNavLink"
          className="navbarLink"
          to="/Phones"
        >
          Phones
        </NavLink>
        <NavLink
          activeclassname="activeNavLink"
          className="navbarLink"
          to="/Tablets"
        >
          Tablets
        </NavLink>
        <NavLink
          activeclassname="activeNavLink"
          className="navbarLink"
          to="/Laptops"
        >
          Laptops
        </NavLink>
        <NavLink
          activeclassname="activeNavLink"
          className="navbarLink"
          to="/Cameras"
        >
          Cameras
        </NavLink>
        <NavLink
          activeclassname="active"
          className="navbarLink"
          to="/Accessories"
        >
          Accessories
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
