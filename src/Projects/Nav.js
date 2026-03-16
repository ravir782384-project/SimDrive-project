import React from "react";
import "./Nav.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom"; 
function Nav(props) {
  return (
    <nav className="navbar">
    <Link to="/">
  <div className="nav-logo">
    SIM<span className="nav-accent">DRIVE</span>
  </div>
</Link>

      <ul className="nav-links">
       <Link to="/" className="nav-link active">HOME</Link> 
    <Link to="/gears" className="nav-link active ">GEAR'S</Link>       
    <Link to="/about" className="nav-link active">ABOUT</Link>
        <Link to="/contact" className="nav-link active">CONTACT</Link>
      </ul>

 <div className="nav-cart">
    <Link to="/cart">
    <ShoppingCart size={22} color="white" />
    {props.cartcount > 0 && <span className="cart-badge">{props.cartcount}</span>}
  </Link>
</div>

    </nav>
  );
}

export default Nav;