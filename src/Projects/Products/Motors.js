import React from "react";
import ProductCard from "./ProductCard";
import motor1 from "./motor1.png";
import motor2 from "./motor2.png";
import "./Plist.css";

function Motors(props) {
  return (
    <div className="product-list">

      <ProductCard
        name="SimD D1 Motor 6Nm"
        price="34,000"
        image={motor1}
        category="MOTORS"
        addtocart={props.addtocart}/>

      <ProductCard
        name="SimD DD2 Motor 12Nm"
        price="62,000"
        image={motor2}
        category="MOTORS"
        addtocart={props.addtocart}/></div>
  );
}

export default Motors;
