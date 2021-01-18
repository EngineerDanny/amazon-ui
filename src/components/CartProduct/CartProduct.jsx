import "./CartProduct.css";

const CartProduct = ({ id, title, price, ratings, imgUrl }) => {
  return (
    <div className="cart-product">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51yb4HntK1L.jpg"
        alt="Product"
      />

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

        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CartProduct;
