import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  const [hamClick, setHamClick] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => setHamClick(!hamClick);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={navColor ? "nav nav-scroll" : "nav"}>
      <a className="logo-text" onclick="window.location.href='#';" href="#">
        Rainy Day Development
      </a>
      <div className={hamClick ? "nav-menu active" : "nav-menu"}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {hamClick ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}
