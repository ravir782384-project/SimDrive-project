import React from "react";
import "./About.css";
import dev from "./dev.png";
import bhavesh from "./bhavesh.png";
import parth from "./parth.png";

function About() {
  return (
    <div className="about-page">
 {/* Story*/}
      <div className="about-section">
        <span className="about-tag">OUR STORY</span>
        <h2 className="about-heading">BORN FROM THE TRACK</h2>
        <p className="about-desc">
    SimDrive started in a small garage in 2018 — two friends, one sim rig, and a shared obsession with racing. Late nights, endless testing, and the constant frustration of gear that looked great but never truly felt like real racing pushed us to do something different. Instead of waiting for better equipment, we decided to build it ourselves. What began as a small passion project soon turned into something bigger than we imagined. Today, SimDrive is trusted by thousands of sim racers worldwide who share the same love for speed, precision, and the thrill of racing.
        </p>
      </div>

      <div className="about-divider"></div>

      {/* Team*/}
      <div className="about-section">
        <span className="about-tag">SIMDRIVE'S FACES</span>
        <h2 className="about-heading">PEOPLE BEHIND THE WHEELS</h2>
        <div className="team-container">

          <div className="team-card">
<img src={dev} alt="Dev" className="team-photo" />
            <h3>Dev Jain</h3>
            <p>Co-Founder & CEO</p>
          </div>

          <div className="team-card">
<img src={bhavesh} alt="Bhavesh" className="team-photo" />
            <h3>Bhavesh Rajpurohit</h3>
            <p>Head of Engineering</p>
          </div>

          <div className="team-card">
<img src={parth} alt="Parth" className="team-photo" />
                <h3>Parth Kadia</h3>
            <p>Head of Design</p>
          </div>

        </div>
      </div>

      <div className="about-divider"></div>

      {/* Mission */}
      <div className="about-section">
        <span className="about-tag">OUR MISSION</span>
        <h2 className="about-heading">BUILT FOR RACERS, BY RACERS</h2>
        <p className="about-desc">
Our mission is simple — bring professional-grade simulation hardware to every racer, at every level. We build gear that delivers precision, immersion, and the thrill of real racing. Designed for those who push limits and chase perfection on every lap. No compromises. No shortcuts. Just pure performance.
        </p>
      </div>

    </div>
  );
}

export default About;