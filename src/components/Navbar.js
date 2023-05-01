import React, { useState } from "react";
// use this hook "useState" in our application
import Logo from "../assets/apple-10.png";
import { Link, useHref } from "react-router-dom";
// similar to a tag, a tag serve as a link

import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "../styles/Dropdown.css";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} height={150} />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Digital Maps") {
              return (
                <li key={item.id} className={item.cName}
                 onMouseEnter={() => setDropdown(true)}
                 onMouseLeave={() => setDropdown(false)}
                >
                  <Link 
                  to={item.path} 
                  
                >
                  {item.title}
                  </Link>
                  { dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
