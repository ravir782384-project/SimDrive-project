import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="content-section">
      <div className="content-top">
        <span className="content-tag">WHO WE ARE</span>
        <h2 className="content-heading">
          THE SIMDRIVE <br />
          <span className="content-accent">EXPERIENCE</span>
        </h2>
        <p className="content-desc">
          SimDrive was built by racers, for racers. We obsess over every detail —
          from the weight of a steering wheel to the resistance of a pedal —
          so you can focus on what matters most. Pushing the limit.
        </p>
      </div>
      <div className="content-divider"></div>

      <div className="content-stats">

        <div className="stat-item">
          <h3>10,000+</h3>
          <p className="stat-title">Racers Worldwide</p>
          <p className="stat-desc">Trusted by sim racers across the globe</p>
        </div>

        <div className="stat-item">
          <h3>4.9★</h3>
          <p className="stat-title">Average Rating</p>
          <p className="stat-desc">Rated by verified customers</p>
        </div>

        <div className="stat-item">
          <h3>2-Day</h3>
          <p className="stat-title">Fast Shipping</p>
          <p className="stat-desc">Quick delivery to your doorstep</p>
        </div>
      </div>
    </div>
  );
}

export default Content;