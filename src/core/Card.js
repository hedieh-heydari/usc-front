import React, { useState } from "react";
import ImageHandler from "./handle/ImageHandler";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/handle";
import { addItemToCart, removeItemFromCart } from "./handle/CartHandler";
import { TbShoppingCartPlus, TbShoppingCartX } from "react-icons/tb";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload = (f) => f,
  // function(f){return f}
}) => {
  const [redirect, setRedirect] = useState(false);
  const cartTitle = product ? product.name : "Default photo ";
  const cartDescription = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "Default";

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => setRedirect(true));
      console.log("به سبدکالا اضافه شد");
    } else {
      // if sombothy is not login you can write here methode to redirct him to page
      console.log("لطف ابتدا به سایت وارد شوید.!");
    }
  };
  const getAredirect = (redirect) => {
    if (redirect) {
      return <Navigate to="/cart" />;
    }
  };
  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        <button class="btn btn-outline-success ms-1" onClick={addToCart}>
          {" "}
          <TbShoppingCartPlus />{" "}
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          class="btn btn-outline-danger "
          onClick={() => {
            removeItemFromCart(product.id);
            setReload(!reload);
            console.log("Product removed from cart");
          }}
        >
          <TbShoppingCartX />
        </button>
      )
    );
  };
  return (
    <div class="card">
      {getAredirect(redirect)}
      <ImageHandler product={product} />
      <div class="card-body">
        <h5 class="card-title">{cartTitle}</h5>
        <h3>{cartDescription}</h3>
        <p class="card-text">{cartPrice}</p>
      </div>
      <div className="w-100 d-flex justify-content-end align-items-center px-2">
        {showAddToCart(addToCart)}
        {showRemoveFromCart(removeFromCart)}
      </div>
    </div>
  );
};
export default Card;
