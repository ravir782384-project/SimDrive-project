import React from "react";
import ProductCard from "./ProductCard";
import shifter1 from "./Shifter1.png";
import shifter2 from "./Shifter2.png";
import handbrake from "./handbrake.png";
import "./Plist.css";

function Shifters(props) {
  return (
    <div className="product-list">

      <ProductCard
        name="SimD Sequential Shifter 6 speed"
        price="13,500"
        image={shifter1}
        category="SHIFTERS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD H-Pattern Pro 7 speed"
        price="27,500"
        image={shifter2}
        category="SHIFTERS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD H1 Handbrake "
        price="16,000"
        image={handbrake}
        category="SHIFTERS"
        addtocart={props.addtocart}/>
 </div>
  );
}

export default Shifters;