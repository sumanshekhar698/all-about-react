import React from "react";
// Adding the asterisk or checking the default export often solves Parcel's object issue
// import logo from "../assets/images/swiggy_logo_white.avif";
import logo from "url:../assets/images/swiggy_logo_white.avif";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Header = () => {
  const isScrolled = useScrollDirection();

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
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