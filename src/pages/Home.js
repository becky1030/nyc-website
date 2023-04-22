import React from "react"
import { Link } from "react-router-dom"
import BannerImage from "../assets/yellow-background.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      {/* add image directly in html, import image in the import section on top */}
      {/* can not show div image here!!! */}
      {/* how to type ˋ ˋ in english */}
  


        <h1>NYC Free Things</h1>
        <p>find free stuffs in NYC</p>
        <Link to="/menu">
          <button> EXPLOR YOUR FREE TRIPS </button>
        </Link>
      </div>
    </div>
  );
}

export default Home
