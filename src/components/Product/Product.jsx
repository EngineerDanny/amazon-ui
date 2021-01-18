import React from "react";
import "./Product.css";
import { useStateValue } from "../../providers/StateProvider";

const Product = ({ id, title, price, ratings, imgUrl }) => {
  const dispatch = useStateValue()[1];

  function addToBasket() {
    //for the action type, it contains the action
    //type and the obj item

    const action = {
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        ratings: ratings,
        imgUrl: imgUrl,
      },
    };
    dispatch(action);
  }

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
              <small>⭐️</small>
            ))}
        </div>
      </div>

      {/* img */}
      <img src={imgUrl} alt="Fuji" />
      {/* add-to-basket */}
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
