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
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="BannerImage"
            className="cart-banner-img"
          />
          <h2 className="header-text">Your Shopping Basket</h2>

          {/* The list of checkout  products will be shown here */}
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
        <div className="cart-right-section">
          <div className="sub-total-section">
            <h3>Subtotal (1 items) : $11.96</h3>
            <div className="checkbox-gift-section">
              <input type="checkbox" name="Gift" id="" />
              <small>This order contains a gift</small>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
