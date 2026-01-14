import React from "react";
// Adding the asterisk or checking the default export often solves Parcel's object issue
// import logo from "../assets/images/swiggy_logo_white.avif";
import logo from "url:../assets/images/swiggy_logo_white.avif";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {/* REMOVE THE QUOTES HERE */}
        <img src={logo} alt="Swiggy Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="#">LogIn</a></li>
          <li><a href="#">Sign Up</a></li>
          <li className="cart-item">
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;