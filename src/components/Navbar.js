import React, { useState } from "react";
// use this hook "useState" in our application
import Logo from "../assets/apple-10.png";
import { Link } from "react-router-dom";
// similar to a tag, a tag serve as a link

import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  // initially, you don't want to show the links -->false
  // what is this syntax for state? -->setOpenLinks

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    // alternate between true & false
  };

  return (
    <div className="navbar">
      <div className="rightSide" id={openLinks ? "open" : "close"}>
        {/* if open links = true, lets give the id of open // if false, give id of close */}
        {/* if openlinks=true, "then" make id=open, "else" make id=close */}
        <img src={Logo} />
        <div className="hiddenLinks">
          {/* hide links only shrink to certain size??--> need to use "state" */}
          {/* whenever click on button , it will determine when we want to show or hide the link--> state--> true/false */}
          {/* if true: show the link, remove logo if false: show logo, remove link */}

            <Link to="/"> Home </Link>
            <Link to="/menu"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="leftSide">
            {/* why make two same link groups */}
        <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
          {/* reorder icon can only be seen when page shrink to certain size */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
