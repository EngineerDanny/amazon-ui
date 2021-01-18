import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";

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

          {/* The list of checkout products will be shown here */}
          <CartProduct
            id={1}
            title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
            price={133.35}
            ratings={4}
            imgUrl="https://m.media-amazon.com/images/I/6186EOdL8eL._AC_UL640_FMwebp_QL65_.jpg"
          />
          
        </div>
        <div className="cart-right-section"></div>
      </div>

      <h1>This is the CartPage</h1>
    </div>
  );
};

export default Cart;
