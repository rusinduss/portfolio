
import { useState } from "react";
import menuIcon from "../../assets/menuIcon.png"
 import closeIcon from "../../assets/closeIcon.png" 

import "./NavBar.css";

export const NavBar = () => {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      <div className="menu">
        <img
          className="menubtn"
          src={
            menuopen
              ? menuIcon
              : closeIcon
          }
          alt="menu-button"
          onClick={()=>setMenuopen(!menuopen)}
        />
        <ul className= {menuopen ? "menuopen": "menuItems"} onClick={()=>setMenuopen(true)} >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Experience">Experiences</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
