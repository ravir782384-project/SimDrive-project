import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product-card">

    
      <img src={props.image} alt={props.name} />
      <span className="product-tag">{props.category}</span>
      <h3 className="product-name">{props.name}</h3>
      <p className="product-price">₹{props.price}</p>
      
      <button
       className="add-to-cart-btn"
     onClick={() => {
      props.addtocart({
      name: props.name,
      price: props.price,
      image: props.image,
      category: props.category
    });
    alert(`${props.name} added to cart!`); 
  }}
      >
        ADD TO CART
      </button>

    </div>
  );
}

export default ProductCard;