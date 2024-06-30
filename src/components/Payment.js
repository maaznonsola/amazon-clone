import React, {useState} from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import TextField from "@mui/material/TextField";
import {useStateValue} from "../context-api/StateProvider";
import {Link, useNavigate} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../context-api/reducer";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [processing, setProcessing] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      dispatch({
        type: "EMPTY_BASKET",
      });
      navigate("/orders");
    }, 3000);
  };

  return (
    <div className="Payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/Checkout">{basket.length} items</Link>}</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user.email}</p>
            <p>Mumbai</p>
            <p>Maharashtra, IN</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* We can add Payment framework here (eg. stripe) */}
            <form onSubmit={handleSubmit}>
              <div className="card__element">
                <TextField
                  className="card__number"
                  label="Card Number"
                  variant="outlined"
                  value={"1234 1234 1234 1234"}
                  disabled
                  size="small"
                />
                <TextField
                  className="card__expiry"
                  label="Card Expiry"
                  variant="outlined"
                  value={"12/34"}
                  disabled
                  size="small"
                />
                <TextField
                  className="card__cvc"
                  label="Card CVC"
                  variant="outlined"
                  value={"123"}
                  disabled
                  size="small"
                />
              </div>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
