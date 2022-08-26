import React from "react";
import "./Socials.css";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Socials() {
  return (
    <div className="socials-container">
      <a href="https://www.linkedin.com/in/john-rainey-a324309a/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/jrainey456">
        <BsGithub />
      </a>
    </div>
  );
}
