import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
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
        <NavLink activeclassname="active" className="navbarLink" to="/">
          Home
        </NavLink>

        <div class="subnav">
          <NavLink activeclassname="active" className="navbarLink" to="/Phones">
            Phones <FaChevronDown />
          </NavLink>
          <div class="subnav-content">
            <Link to="/Phones/SAMSUNG">SAMSUNG</Link>
            <Link to="/Phones/APPLE">APPLE</Link>
            <Link to="/Phones/OnePlus">OnePlus</Link>
            <Link to="/Phones/Google">Google</Link>
          </div>
        </div>

        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/Tablets"
          >
            Tablets <FaChevronDown />
          </NavLink>
          <div class="subnav-content">
            <Link to="/Tablets/OnePlus">OnePlus</Link>
            <Link to="/Tablets/Redmi">Redmi</Link>
            <Link to="/Tablets/SAMSUNG">SAMSUNG</Link>
            <Link to="/Tablets/APPLE">APPLE</Link>
          </div>
        </div>

        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/Laptops"
          >
            Laptops <FaChevronDown />
          </NavLink>
          <div class="subnav-content">
            <Link to="/Laptops/ASUS">ASUS</Link>
            <Link to="/Laptops/HP">HP</Link>
            <Link to="/Laptops/APPLE">APPLE</Link>
          </div>
        </div>

        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/Cameras"
          >
            Cameras <FaChevronDown />
          </NavLink>
          <div class="subnav-content">
            <Link to="/Cameras/NIKON">NIKON</Link>
            <Link to="/Cameras/Canon">Canon</Link>
            <Link to="/Cameras/SONY">SONY</Link>
          </div>
        </div>

        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/Accessories"
          >
            Accessories <FaChevronDown />
          </NavLink>
          <div class="subnav-content">
            <Link to="/Accessories/Mobile Accessories">Mobile Accessories</Link>
            <Link to="/Accessories/Laptop Accessories">Laptop Accessories</Link>
            <Link to="/Accessories/Other">Other</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
