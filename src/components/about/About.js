import React from "react";
import Socials from "../socials/Socials";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h1> About Me </h1>
        <div className="text-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros
            id nisl sagittis facilisis. Quisque dapibus pharetra mattis. Aliquam
            ut velit erat. Pellentesque non metus a nulla imperdiet vulputate.
            Duis fermentum ex neque, eget viverra felis sagittis quis. Aliquam
            tristique, metus vel gravida vehicula, purus augue varius nulla,
            placerat suscipit dui purus sit amet sapien. Nunc placerat in augue
            non tincidunt. Maecenas mollis lectus orci, et faucibus libero
            scelerisque eu. Curabitur at suscipit eros, sed tempus velit.
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
}
