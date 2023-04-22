// import React from "react";
// import { MenuList } from "../helpers/MenuList";
// {} for importing variable, diff from import sth from default

// import MenuItem from "../components/MenuItem";
// import "../styles/Menu.css";

// function Menu() {
//   return (
//     <div className="menu">
//       <h1 className="menuTitle">Our Menu</h1>
//       <div className="menuList">
//         {MenuList.map((menuItem, key) => {
//           return (
//             <MenuItem
//               key={key}
//               image={menuItem.image}
//               name={menuItem.name}
//               address={menuItem.address}
//             />
//           );
//         })}
//       </div>
//       {/* will be use a lot--> map function */}
//     </div>
//   );
// }

// export default Menu;

import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              address={menuItem.address}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
