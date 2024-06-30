import React from "react";
import "./Home.css";
import Product from "./Product";
import {
  products_R1,
  products_R2,
  products_R3,
  products_R4,
  bannerImg,
} from "../products/products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={bannerImg} alt="" />
        <div className="home__row">
          {products_R1.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>

        <div className="home__row">
          {products_R2.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>

        <div className="home__row">
          {products_R3.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>

        <div className="home__row">
          {products_R4.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
