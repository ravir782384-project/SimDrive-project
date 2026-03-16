import React from "react";
import headerimg from "./headerimg.png";  
import "./Header.css";
import { Link } from "react-router-dom";

function Myheader() {
  return (
    <div>
      <div className="header-container">
  <img src={headerimg} alt="header" />
 <div className="hero-text">
        <h1>WELCOME TO THE GRID</h1>
        <h2>SECOND PLACE IS JUST FIRST LOSER</h2>
        <h4>Professional-grade simulation hardware engineered for precision, delivering the most realistic track experience from the comfort of your home.</h4>
        {/* <button>SHOP GEAR</button> */}
      <div className="hero-buttons">
  <Link to="/gears" className="btn-primary">SHOP</Link>
<Link to="/about" className="btn-secondary">OUR STORY</Link></div>
</div>
      </div>

    </div>
  );
}

export default Myheader;