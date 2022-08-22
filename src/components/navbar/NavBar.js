import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { FaBars, FaTimes, FaCloudMoonRain } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  const [navColor, setNavColor] = useState(false);


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
      <a className="logo-text" href="#">
        <FaCloudMoonRain size={30} />
        Rainy Day Development
      </a>
      <div className="nav-menu">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
