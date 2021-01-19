import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useStateValue } from "../../providers/StateProvider";
const Cart = () => {
  //Here we want to access the current basket length
  //And make changes the ui (0 for empty basket otherwise the items in the basket is shown)
  const [{ basket }] = useStateValue();

  return (
    <div>
      <Navbar />
      {basket.length === 0 ? (
        <div>
          <h2 className="header-text">Your Shopping Basket is Empty </h2>
          <p>You have no shopping items in your list</p>
        </div>
      ) : (
        <div>
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
              {basket.map((item) => {
                return (
                  <CartProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    ratings={item.ratings}
                    imgUrl={item.imgUrl}
                  />
                );
              })}
            </div>
            <div className="cart-right-section">
              <div className="sub-total-section">
                <h1>
                  Subtotal (1 items) : <strong>$11.96</strong>
                </h1>
                <div className="checkbox-gift-section">
                  <input type="checkbox" name="Gift" id="" />
                  <small>This order contains a gift</small>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
