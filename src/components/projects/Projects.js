import React from "react";
import "./Projects.css";
import WordlePic from "../../assets/img/wordlePic.png";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        <div className="card">
          <h1>Wordle</h1>
          <div className="display">
            <img src={WordlePic} />
          </div>
          <div className="card-body">
            <a>A word guessing game based off of Wordle</a>
            <div className="button-container">
              <a className="btn">CODE</a>
              <a className="btn">DEMO</a>
            </div>
          </div>
        </div>

        <div className="card">
          <h1>Wordle</h1>
          <div className="display">
            <img src={WordlePic} />
          </div>
          <div className="card-body">
            <a>A word guessing game based off of Wordle</a>
            <div className="button-container">
              <a className="btn">CODE</a>
              <a className="btn">DEMO</a>
            </div>
          </div>
        </div>

        <div className="card">
          <h1>Wordle</h1>
          <div className="display">
            <img src={WordlePic} />
          </div>
          <div className="card-body">
            <a>A word guessing game based off of Wordle</a>
            <div className="button-container">
              <a className="btn">CODE</a>
              <a className="btn">DEMO</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
