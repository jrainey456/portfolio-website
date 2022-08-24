import React from "react";
import "./Socials.css";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Socials() {
  return (
    <div className="socials-container">
      <a>
        <FaLinkedin />
      </a>
      <a>
        <BsGithub />
      </a>
    </div>
  );
}
