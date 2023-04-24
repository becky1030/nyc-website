import React, { useState} from 'react';
import {digitalmapsDropdown} from "./NavItems";
import {Link} from "react-router-dom";
import "../styles/Dropdown.css";

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul 
      className={dropdown ?
      "digitalmapsDropdown clicked" : "digitalmapsDropdown"}
       onClick={() =>setDropdown(!dropdown)}
       >
        {digitalmapsDropdown.map((item) => {
            return (
                <li key={item.id}>
                    <Link 
                    to={item.path} 
                    className={item.cName}
                    onClick={ () =>setDropdown(false)}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        })}
      </ul>
      </>
  );
}

export default Dropdown
