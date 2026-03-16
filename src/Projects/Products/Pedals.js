import React from "react";
import ProductCard from "./ProductCard";
import pedal1 from "./Pedal1.png";
import pedal2 from "./Pedal2.png";
import "./Plist.css";

function Pedals(props) {
  return (
    <div className="product-list">

      <ProductCard
        name="SimD 2-Pedal Set"
        price="18,000"
        image={pedal1}
        category="PEDALS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD Load Cell 3-Pedals Set"
        price="26,000"
        image={pedal2}
        category="PEDALS"
        addtocart={props.addtocart}/>
</div>
  );
}

export default Pedals;
