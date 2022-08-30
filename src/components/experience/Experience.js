import React from "react";
import "./Experience.css";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h1>Experience</h1>
      <div className="experience-card-container">
        <div className="experience-card">
          <div className="experience-card-header">
            <FaNodeJs />
            <h1>Node.js</h1>
            <h6>2+ years</h6>
          </div>
          <div className="experience-card-body">
            <p> Express API's </p>
            <p> Database Connections </p>
            <p> LDAP authentication</p>
            <p> RESTweb services</p>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-card-header">
            <FaReact />
            <h1>React</h1>
            <h6>3+ years</h6>
          </div>
          <div className="experience-card-body">
            <p> Live Dashboards </p>
            <p> Web Applications </p>
            <p> React Router </p>
            <p> React Bootstrap </p>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-card-header">
            <AiOutlineConsoleSql />
            <h1>SQL Database</h1>
            <h6>4+ years</h6>
          </div>
          <div className="experience-card-body">
            <p>Environment Setup</p>
            <p> Table Design </p>
            <p>Complex Queries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
