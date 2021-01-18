import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <Navbar />
      {/* CartDivider */}
      <div className="cart-divider">
        {/* CartLeftSection */}
        <div className="cart-left-section">
          {/* Image contains the advert */}
          <img src="" alt="" className="cart-banner-img" />

          <h1 className="header-text">Your Shopping Basket</h1>
          
        </div>
        <div className="cart-right-section"></div>
      </div>

      <h1>This is the CartPage</h1>
    </div>
  );
};

export default Cart;
