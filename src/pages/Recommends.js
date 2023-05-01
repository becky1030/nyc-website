import React from "react";
import "../styles/Recommends.css";

import SwipeDownIcon from "@mui/icons-material/SwipeDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pepe from "../assets/pepe.png";

// const dino = document.getElementById("dino");
// const cactus = document.getElementById("cactus");

// function jump() {
//   if (dino.classList != "jump") {
//     dino.classList.add("jump");

//     setTimeout(function () {
//       dino.classList.remove("jump");
//     }, 300);
//   }
// }

// let isAlive = setInterval(function () {
//   // get current dino Y position
//   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

//   // get current cactus X position
//   let cactusLeft = parseInt(
//     window.getComputedStyle(cactus).getPropertyValue("left")
//   );

//   // detect collision
//   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
//     // collision
//     alert("Game Over!");
//   }
// }, 10);

// document.addEventListener("keydown", function (event) {
//   jump();
// });

const Recommends = () => {
  return (
    <div className="container">
      <div>
        <h2>free</h2>
        <h1>NYC</h1>
        <p style={{ color: "red" }}>
          Archiving collection of FREE THINGS IN NYC
        </p>
      </div>

      <div className="icon">
        <SwipeDownIcon variant="contained"></SwipeDownIcon>
      </div>

      <div className="border1"></div>

      <div
        className="col1row1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div>
          Food
          <div className="row3-1">
            <ul>
              <li>
                <a
                  href="https://www.lostacos1.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Los Tacos No. 1</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.keens.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Keens Steak house</span>
                </a>
              </li>
              <li>
                <a
                  href="http://xianfoods.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span> Xi'an Famous Foods</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.joeshanghairestaurants.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Joe's Shanghai</span>
                </a>
              </li>
              <li>
                <a
                  href="http://grayspapaya.nyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Gray's Papaya</span>
                </a>
              </li>
              <li>
                <a
                  href="https://peterluger.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Peter Lugar</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          Tour
          <div className="row3-2">
            <ul>
              <li>
                <a
                  href="https://www.takeawalk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Tommy's New York</span>
                </a>
              </li>
              <li>
                <a
                  href="familyinnewyorktours.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Family in New York Sightseeing Tours</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.citysightseeingnewyork.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>City Sightseeing New York</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.911groundzero.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>9/11 Ground Zero Tours</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.we-venture.com/new-york/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>WeVenture New York</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {" "}
          Museum
          <div className="row3-3">
            <ul>
              <li>
                <a
                  href="metmuseum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>The MET</span>
                </a>
              </li>
              <li>
                <a
                  href="https://whitney.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Whitney Museum of American Art</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.moma.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>The Museum of Modern Art</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.amnh.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>American Museum of Natural History</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.intrepidmuseum.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Intrepid Sea, Air & Space Museum</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border2"></div>

      <div
        className="col2row2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div>
          Shows
          <div className="row3-4">
            <ul>
              <li>
                <a
                  href="https://www.westbankcafe.com/laurie-beechman-theatre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Laurie Beechman Theater</span>
                </a>
              </li>
              <li>
                <a
                  href="http://colbert.1iota.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>The Late Show with Stephen Colbert</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.dragqueenshow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Diva Royale</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.roundabouttheatre.org/theatres-and-venues/stephen-sondheim-theatre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Stephen Sondheim Theatre</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.thehudsonbroadway.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Hudson Theatre</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          Nature
          <div className="row3-5">
            <ul>
              <li>
                <a
                  href="https://www.centralparknyc.org/attractions/the-ramble"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>The Ramble</span>
                </a>
              </li>
              <li>
                <a
                  href="http://elizabethstreetgarden.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Elizabeth Street Garden</span>
                </a>
              </li>
              <li>
                <a
                  href="http://6bcgarden.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>6BC Botanical Garden</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          Hotels
          <div className="row3-6">
            <ul>
              <li>
                <a
                  href="https://www.mandarinoriental.com/en/new-york/manhattan?src=loc.yext.monyc.ggl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Mandarin Oriental, New York</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.ritzcarlton.com/en/hotels/new-york/central-park?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>The Ritz-Carlton</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.fourseasons.com/newyorkdowntown/?seo=google_local_nyd1_amer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Four Seasons Hotel</span>
                </a>
              </li>
              <li>
                <a
                  href="https://equinox-hotels.com/nyc/?utm_source=local-listings&utm_medium=organic&utm_campaign=local-listings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Equinox Hotel New York</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.marriott.com/en-us/hotels/nycwh-w-new-york-times-square/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>W New York - Times Square</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.publichotels.com/?utm_source=local-directories&utm_medium=organic&utm_campaign=travelclick-localconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>PUBLIC Hotel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottomtext">
        <p>
          To be continued...
          <img src={pepe} />
        </p>
      </div>
    </div>
  );
};

export default Recommends;
