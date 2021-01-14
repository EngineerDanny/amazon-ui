import React from "react";
import "./Product.css";

const Product = ({ title, price, ratings, imgUrl }) => {
  return (
    <div className="product">
      <div className="product-header">
        {/* title */}
        <p className="title">{title}</p>

        {/* price */}
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {/* stars */}
        <div className="ratings">
          {Array(ratings)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ) )}
        </div>
      </div>

      {/* img */}
      <img src={imgUrl} alt="Fuji" />
      {/* add-to-basket */}
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
