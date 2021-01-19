import "./CartProduct.css";
import { useStateValue } from "../../providers/StateProvider";

const CartProduct = ({ id, title, price, ratings, imgUrl }) => {
  const dispatch = useStateValue()[1];

  function removeFromBasket() {
    //for the action type, it contains the action
    //type and the obj item

    const action = {
      type: "REMOVE_FROM_BASKET",
      id: id,
    };
    dispatch(action);
  }

  return (
    <div className="cart-product">
      <img src={imgUrl} alt="Product" />

      <div className="cart-product-content">
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

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CartProduct;
