import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123456"
            title="Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage)"
            price={13999}
            image="https://images-eu.ssl-images-amazon.com/images/I/51Fc-xm6bKL._AC_US160_.jpg"
            rating={4}
          />
          <Product
            id="123457"
            title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)"
            price={8999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Ki5S4HEoL._AC_US160_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123458"
            title="Samsung Galaxy M31s(6GB RAM, 128GB Storage)"
            price={19499}
            image="https://images-eu.ssl-images-amazon.com/images/I/41cVLRT2gyL._AC_US160_.jpg"
            rating={5}
          />
          <Product
            id="123459"
            title="Nokia 105 2019 (Single SIM, Black)"
            price={1499}
            image="https://images-eu.ssl-images-amazon.com/images/I/31Z2ee9oYQL._AC_US160_.jpg"
            rating={4}
          />
          <Product
            id="123460"
            title="boAt Sports Wireless Headset"
            price={1999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41j7VEAjdRL._AC_US160_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123461"
            title="pTron Bassbuds in-Ear True Wireless Bluetooth Headphones(Black)"
            price={1099}
            image="https://images-eu.ssl-images-amazon.com/images/I/418XVTLmVNL._AC_US160_.jpg"
            rating={3}
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
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
