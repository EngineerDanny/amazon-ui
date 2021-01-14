import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <div className="banner-container">
        <img
          className="banner-img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
          alt="Banner"
        />
      </div>
      {/* products */}
      <div className="gen-product-container">
        <Product
          title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={23.35}
          starCount={4}
          imgUrl="https://m.media-amazon.com/images/I/6186EOdL8eL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product />
        <Product />
      </div>

      <div className="gen-product-container">
        <Product />
        <Product />
      </div>

      <div className="gen-product-container">
        <Product />
      </div>
    </div>
  );
}

export default App;
