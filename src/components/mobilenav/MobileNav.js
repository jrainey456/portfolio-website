import React, { useState, useEffect } from "react";
import "./MobileNav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BsBook, BsCodeSquare } from "react-icons/bs";

export default function MobileNav() {
  const [active, setActive] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id != "#") {
              setActive("#" + entry.target.id);
            } else {
              setActive(entry.target.id);
            }
            console.log(entry.target.id);
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <nav className="mobile-nav">
      <a
        href="#"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("#projects")}
        className={active === "#projects" ? "active" : ""}
      >
        <BsCodeSquare />
      </a>
    </nav>
  );
}

/*
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
*/
