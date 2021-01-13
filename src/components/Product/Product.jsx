import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product-header">
        {/* title */}
        <p className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores, minima porro magni molestiae esse atque animi, ipsum quos!
          Iste.
        </p>

        {/* price */}
        <p>
          <small>$</small>
          <strong>23.35</strong>
        </p>

        {/* stars */}
        <span>⭐️⭐️⭐️⭐️⭐️</span>
      </div>

      {/* img */}
      <img
        src="https://m.media-amazon.com/images/I/6186EOdL8eL._AC_UL640_FMwebp_QL65_.jpg"
        alt="Fuji"
      />
      {/* add-to-basket */}
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
