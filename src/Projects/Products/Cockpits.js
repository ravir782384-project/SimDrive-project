import React from "react";
import ProductCard from "./ProductCard";
import seat1 from "./seat1.png";
import seat2 from "./seat2.png";
import stand from "./stand.png";
import "./Plist.css";

function Cockpits(props) {
  return (
    <div className="product-list">

      <ProductCard
        name="SimD Racing Seat Pro"
        price="50,000"
        image={seat1}
        category="COCKPITS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD Racing Seat Elite"
        price="75,000"
        image={seat2}
        category="COCKPITS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD Rig Stand"
        price="21,000"
        image={stand}
        category="COCKPITS"
        addtocart={props.addtocart}/>
        </div>
  );
}

export default Cockpits;
