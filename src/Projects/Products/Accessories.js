import React from "react";
import ProductCard from "./ProductCard";
import a1 from "./a1.png";
import a2 from "./a2.png";
import a3 from "./a3.png";
import a4 from "./a4.png";
import "./Plist.css";

function Accessories(props) {
  return (
    <div className="product-list">

      <ProductCard
        name="SimD SS Racing Gloves"
        price="3,500"
        image={a1}
        category="ACCESSORIES"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD SS Racing Shoes"
        price="6,000"
        image={a2}
        category="ACCESSORIES"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimDxMercedes Collab F1 merch"
        price="18,500"
        image={a3}
        category="ACCESSORIES"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD Triple Moniter stand"
        price="15,000"
        image={a4}
        category="ACCESSORIES"
        addtocart={props.addtocart}/>
   </div>
  );
}

export default Accessories;