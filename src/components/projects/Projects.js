import React from "react";
import "./Projects.css";
import WordlePic from "../../assets/img/wordlePic.png";
import PortfolioPic from "../../assets/img/portfolioPic.PNG";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-card-container">


      <div className="projects-card">
          <div className="projects-card-body">
            <h1>Portfolio</h1>
            <div className="projects-display">
              <img src={PortfolioPic} />
            </div>
            <a>A code link to this website</a>
            <div className="projects-button-container">
              <a href="https://github.com/jrainey456/portfolio-website" target="_blank" className="btn">CODE</a>
            </div>
          </div>
        </div>


        <div className="projects-card">
          <div className="projects-card-body">
            <h1>Wordle</h1>
            <div className="projects-display">
              <img src={WordlePic} />
            </div>
            <a>A word guessing game based off of Wordle</a>
            <div className="projects-button-container">
              <a href="https://github.com/jrainey456/wordle" target="_blank" className="btn">CODE</a>
              <a href="https://wordle.rainydaydevelopment.com/" target="_blank" className="btn">DEMO</a>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
