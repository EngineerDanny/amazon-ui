import React from "react";
import Product from "../../components/Product/Product";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
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
          key={0}
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={103.95}
          ratings={4}
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/51yb4HntK1L.jpg"
        />
        <Product
          key={1}
          title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={133.35}
          ratings={4}
          imgUrl="https://m.media-amazon.com/images/I/6186EOdL8eL._AC_UL640_FMwebp_QL65_.jpg"
        />
        <Product
          key={2}
          title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={3.35}
          ratings={4}
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/41tL2drLy3L.jpg"
        />
      </div>

      <div className="gen-product-container">
        <Product
          key={3}
          title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={23}
          ratings={4}
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/91Cx6VJTmtL._AC_UY879_.jpg"
        />
        <Product
          key={4}
          title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={35}
          ratings={4}
          imgUrl="https://m.media-amazon.com/images/I/6186EOdL8eL._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="gen-product-container">
        <Product
          key={5}
          title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
          culpa alias aliquid quo similique veritatis enim inventore explicabo
          dolores."
          price={545}
          ratings={4}
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/61A74GGbj5L._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
