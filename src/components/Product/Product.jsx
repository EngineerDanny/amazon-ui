import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-header">
        {/* title */}
        <p className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at.
        </p>
        {/* price */}
        <span>23.35</span>
        {/* stars */}
        <span>⭐️⭐️⭐️⭐️⭐️</span>
      </div>

      {/* img */}
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
        alt="Fuji"
      />
      {/* add-to-basket */}
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
