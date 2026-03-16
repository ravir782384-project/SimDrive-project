import React from "react";
import ProductCard from "./ProductCard";
import wheel1 from "./Wheel1.png";
import wheel2 from "./Wheel2.png";
import wheel3 from "./Wheel3.png";
import "./Plist.css";

function Wheels(props) {
  return (
    <div className="product-list">

      <ProductCard
        name="SimD S1 v1 Wheel"
        price="30,000"
        image={wheel1}
        category="WHEELS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD Pro Drift Wheel"
        price="52,000"
        image={wheel2}
        category="WHEELS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimDxFerrari Carbon F1 Wheel"
        price="80,000"
        image={wheel3}
        category="WHEELS"
        addtocart={props.addtocart}/>
</div>
  );
}

export default Wheels;