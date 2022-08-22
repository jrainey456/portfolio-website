import React, { useState } from "react";
import { FaCloudMoonRain } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  const [navColor, setNavColor] = useState(false);
  const [active, setActive] = useState("#");

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
      <a className="logo-text" href="#" onClick={() => setActive("#")}>
        <FaCloudMoonRain size={30} />
        Rainy Day Development
      </a>
      <div className="nav-menu">
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={() => setActive("#experience")}
          className={active === "#experience" ? "active" : ""}
        >
          Experience
        </a>
        <a
          href="#portfolio"
          onClick={() => setActive("#portfolio")}
          className={active === "#portfolio" ? "active" : ""}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
