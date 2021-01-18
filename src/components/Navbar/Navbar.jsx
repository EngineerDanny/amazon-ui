import React from "react";
import "./Navbar.css";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../providers/StateProvider";

const Navbar = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="navbar">
      {/* amazon-logo */}
      <Link to="/" className="logo-link">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* search-input */}
      <input type="text" className="search-input" />

      {/* search-icon-btn */}
      <Search className="search-icon" />

      {/* sign */}

      <Link to="/login" className="wlc-section-link">
        <div className="wlc-section">
          <span className="line-1">Hello,</span>
          <span className="line-2">Sign In</span>
        </div>
      </Link>

      {/* orders */}
      <div className="wlc-section">
        <span className="line-1">Returns</span>
        <span className="line-2">& Orders</span>
      </div>

      {/* prime */}
      <div className="wlc-section">
        <span className="line-1">Your</span>
        <span className="line-2">Prime</span>
      </div>

      <div className="cart-section">
        <Link to="/cart" className="wlc-section-link">
          <ShoppingBasket />
        </Link>

        <span className="cart-count">{basket.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
