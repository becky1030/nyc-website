import React from "react";
import "../styles/About.css";
import Sheet from "../assets/about.png";

function About() {
  return (
    <div className="home" style={{ backgroundColor: "#fff200" }}>
      <div class="sheet">
        <img src={Sheet} />
      </div>
    </div>
  );
}

export default About;
