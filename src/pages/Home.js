import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Car from "../assets/car.png";
import Wheel1 from "../assets/wheel.png";
import Wheel2 from "../assets/wheel.png";
import Web1 from "../assets/guide.png";
import Web2 from "../assets/love.png";
import Web3 from "../assets/secret.png";
import secret from "../assets/secret.png";
import love from "../assets/love.png";
import guide from "../assets/guide.png";


function Home() {
  return (
    <div className="home" style={{ backgroundColor: "#fff200" }}>

      <div className="headerContainer">
        <div class="hero">
          <div class="highway">

          </div>
          <div class="city">
            
          </div>

          <div class="car">
            <img src={Car} />
          </div>
          <div class="wheel">
            <img src={Wheel1} class="back-wheel" />
            <img src={Wheel2} class="front-wheel" />
          </div>
        </div>

        </div>



{/* line 60=row */}

        <div class="flexbox"> 
{/* two columns added in the row */}
          <div class="col1">
            {/* <div className="la"> */}
              <h1>NYC Free Things</h1>
            {/* </div> */}

            {/* <div className="krungthep"> */}
              <p>find free stuffs in NYC</p>
            {/* </div> */}
            {/* <Link to="/recommends">
              <button> EXPLOR YOUR FREE TRIPS </button>
            </Link> */}

            <Link to="/recommends">
      <button className="btn">EXPLOR YOUR FREE TRIPS</button>
    </Link>

          </div>

{/* column 2 */}
          <div class="col2">
      <div className="img-wrapper">
      <a href="https://secretnyc.co/" target="_blank" rel="noreferrer">
        <img
                    className="hover-zoom1"

            src={secret}
            alt="secret nyc logo"
            style={{ width: 200, height: 70}}
        />
              </a>

              <a href="https://www.iloveny.com/" target="_blank" rel="noreferrer">
        <img
                    className="hover-zoom2"

            src={love}
            alt="love nyc logo"
            style={{ width: 90, height: 70}}
        />
              </a>
              <a href="https://www.nycgo.com/" target="_blank" rel="noreferrer">
        <img
                    className="hover-zoom3"

            src={guide}
            alt="nycgo logo"
            style={{ width: 150, height: 70}}
        />
              </a>

    </div>


    



            </div>

        </div>
    </div>
  );
}

export default Home;
