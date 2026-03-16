import React from "react";
import "./Footer.css";
import { Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Myfooter() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo">
            SIM<span className="footer-logo-accent">DRIVE</span>
          </div>
          <p className="footer-tagline">
         Drive Beyond Reality.<br></br>
Experience next-level sim racing with professional hardware designed for true Car guys !!          </p>
          <div className="footer-socials">

           
      <a href="#" className="footer-social-icon" aria-label="Instagram">
  <Instagram size={25} />
</a>
          
       <a href="#" className="footer-social-icon" aria-label="Youtube">
  <Youtube size={25} />
</a>
          
         <a href="#" className="footer-social-icon" aria-label="X">
  <Twitter size={25} />
</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-column-title">Support</h4>
          <ul className="footer-link-list">
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <li><a href="#" className="footer-link">Shipping Policy</a></li>
            <li><a href="#" className="footer-link">Returns & Warranty</a></li>
            <li><a href="#" className="footer-link">Driver Downloads</a></li>
          </ul>
        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copyright">© 2026 SimDrive Store. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}