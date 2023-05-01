import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "../styles/Discounts.css";
import { Link } from "react-router-dom";
import pepe from "../assets/pepe.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discounts() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Discounts">
      <Slider {...settings}>
        <div>
          <h3>vbrejvblenvlenvl</h3>
          <img src={pepe} style={{ width: 50, height: 60 }} />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Discounts;
