import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Gears.css";

function Gears() {
  return (
    <div className="gears-page">

      <div className="gears-top">
        <h1 className="gears-heading">
          THE FULL <span className="gears-accent">ARSENAL</span>
        </h1>
        <p className="gears-desc">
          Every component you need to build your ultimate sim rig — from wheels to cockpits.
        </p>
      </div>

      <div className="gears-filters">
        <Link to="/gears" className="filter-btn">ALL</Link>
        <Link to="/gears/wheels" className="filter-btn">WHEELS</Link>
        <Link to="/gears/motors" className="filter-btn">MOTORS</Link>
        <Link to="/gears/pedals" className="filter-btn">PEDALS</Link>
        <Link to="/gears/shifters" className="filter-btn">SHIFTERS</Link>
        <Link to="/gears/cockpits" className="filter-btn">COCKPITS</Link>
        <Link to="/gears/accessories" className="filter-btn">ACCESSORIES</Link>
      </div>
      <Outlet />

    </div>
  );
}

export default Gears;