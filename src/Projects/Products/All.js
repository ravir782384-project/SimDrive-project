import React from "react";
import ProductCard from "./ProductCard";
import "./Plist.css";

import wheel3 from "./Wheel3.png";
import motor1 from "./motor1.png";
import pedal1 from "./Pedal1.png";
import shifter2 from "./Shifter2.png";
import seat1 from "./seat1.png";
import a1 from "./a1.png";
import a3 from "./a3.png";
import a4 from "./a4.png";

function All(props) {
  return (
    <div className="product-list">

        <ProductCard
        name="SimDxFerrari Carbon F1 Wheel"
        price="80,000"
        image={wheel3}
        category="WHEELS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD D1 Motor 6Nm"
        price="34,000"
        image={motor1}
        category="MOTORS"
        addtocart={props.addtocart}/>

        <ProductCard
        name="SimDxMercedes Collab F1 merch"
        price="18,500"
        image={a3}
        category="ACCESSORIES"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD 2-Pedal Set"
        price="18,000"
        image={pedal1}
        category="PEDALS"
        addtocart={props.addtocart}/>

     <ProductCard
        name="SimD H-Pattern Pro 7 speed"
        price="27,500"
        image={shifter2}
        category="SHIFTERS"
        addtocart={props.addtocart}/>


      <ProductCard
        name="SimD Racing Seat Pro"
        price="50,000"
        image={seat1}
        category="COCKPITS"
        addtocart={props.addtocart}/>

      <ProductCard
         name="SimD SS Racing Gloves"
        price="3,500"
        image={a1}
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

export default All;
