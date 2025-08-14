import { useState } from "react";
import menuIcon from "../../assets/menuIcon.png";
import closeIcon from "../../assets/closeIcon.png";

import "./NavBar.css";

export const NavBar = () => {
  const [menuopen, setMenuopen] = useState(false);

  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>

      <div className="menu">
        {/* Menu button for mobile */}
        <img
          className="menubtn"
          src={menuopen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuopen(!menuopen)}
        />

        {/* Menu items */}
        <ul
          className={`menuItems ${menuopen ? "menuopen" : ""}`}
          onClick={() => setMenuopen(false)} // close menu when a link is clicked
        >
          <li><a href="#about">About</a></li>
          <li><a href="#Experience">Experiences</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
