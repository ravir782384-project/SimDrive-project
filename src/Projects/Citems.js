import React, { useState } from "react";
 import "./Cart.css";
import { Trash2 } from "lucide-react";

function Citems(props) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cart-item">

      <img src={props.item.image} alt={props.item.name} />

      <div className="cart-item-info">
        <h3>{props.item.name}</h3>
        <p className="cart-item-price">₹{props.item.price}</p>

        <div className="cart-quantity">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>

      <div>
        <Trash2 size={22} color="#888" />
      </div>

    </div>
  );
}

export default Citems;