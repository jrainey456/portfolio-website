import React from "react";
import "./Header.css";
import rain from "../../assets/mp4/bridge.mp4";

export default function Header() {
  return (
    <section className="header-container" id="home">
      <div className="scroll-background">
        <video autoPlay muted loop>
          <source src={rain} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h5>Hello I'm</h5>
        <h1>John Rainey</h1>
        <h5>Fullstack Developer</h5>
        <a href="#portfolio" className="btn">
          PORTFOLIO
        </a>
        <a href="#about" className="btn">
          ABOUT
        </a>
      </div>
    </section>
  );
}
