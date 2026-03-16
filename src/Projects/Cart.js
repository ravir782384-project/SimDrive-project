import React from "react";
import "./Cart.css";
import Citems from "./Citems";

function Cart(props) {
  return (
    <div className="cart-page">

      <h2 className="cart-heading">YOUR CART</h2>

      {props.cartitems.length === 0 ? (
        <p className="cart-empty">Cart khali h Aapka </p> ) : (
        <div className="cart-list">
          {props.cartitems.map((item, index) => (
            <Citems key={index} item={item} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Cart;