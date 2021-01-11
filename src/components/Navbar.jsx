import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* amazon-logo */}
      <img
        className="logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />

      <input type="text" />
      <SearchIcon className="search-icon" />
      {/* search-input */}
      {/* search-icon-btn */}
      {/* sign */}
      {/* orders */}
      {/* prime */}
    </div>
  );
};

export default Navbar;
