import React from "react";
import "./Body.css";
import { Zap, Trophy, Shield } from "lucide-react";
function Mybody() {
  return (
    <div className="features-bar">

      <div className="feature-item">
       <div className="feature-icon">
<Zap size={29} color="#6d39e6" />
</div>
        <div className="feature-text">
          <h4>PURE FORCE</h4>
          <p>Instant response feedback</p>
        </div>
      </div>

      <div className="feature-item">
    <Trophy size={29} color="#6d39e6"/>

        <div className="feature-text">
          <h4>ESPORTS READY</h4>
          <p>Used by serious racers</p>
        </div>
      </div>

      <div className="feature-item">
      <Shield size={29} color="#6d39e6"/>
        <div className="feature-text">
          <h4>RACE-GRADE BUILD</h4>
          <p>Aluminum & Carbon Fiber</p>
        </div>
      </div>

    </div>
  );
}

export default Mybody;