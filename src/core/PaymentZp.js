import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { cartEmpty } from "./handle/CartHandler";
import { getmeToken, processPayment } from "./handle/PaymentHandler";
import { createOrder } from "./handle/OrderHandler";
import { isAuthenticated, signout } from "../auth/handle";


const PaymentZp = ({
    products,
    reload = undefined,
    setReload = (f) => f,
  }) => {
    const [info, setInfo] = useState({
      loading: false,
      success: false,
      clientToken: null,
      error: "",
      instance: {},
});
const userId = isAuthenticated && isAuthenticated().user.id;
const token = isAuthenticated && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token)
      .then((info) => {
        if (info.error) {
          setInfo({
            ...info,
            error: info.error,
          });
          signout(() => {
            return <Navigate to="/" />;
          });
        } else {
          const clientToken = info.clientToken;
          setInfo({ clientToken });
        }
      });
  };

  useEffect(() => {
    getToken(userId, token);
  }, []);
  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + parseInt(p.price);
    });
    return amount;
  };
  
  const showbtnDropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0
          ? (
            <div>
              <p
                options={{ authorization: info.clientToken }}
                onInstance={(instance) => (info.instance = instance)}
              >
              </p>
              <button className="btn btn-block btn-success">Buy Now</button>
            </div>
          )
          : (
            <h3>Please login first or add something in cart</h3>
          )}
      </div>
    );
  };

  return (
    <div>
      <h3>Your bill is {getAmount()} </h3>
      {showbtnDropIn()}
    </div>
  );
};

export default PaymentZp;
