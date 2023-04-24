import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";


function Button() {
  return (
    // <div className="la">
    <Link to="signup">
      <button className="btn">Sign up/in</button>
    </Link>

/* <div className="la"><h1>NYC Free Things</h1></div> */



    // </div>
  );
}

export default Button;


