import React from "react";
import Manhattan from "../assets/manhattan.jpg";


function MenuItem({ image, name, address }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Manhattan})` }}
      > </div>
      <h1> {name} </h1>
      <p> {address} </p>
    </div>
  );
}

export default MenuItem;