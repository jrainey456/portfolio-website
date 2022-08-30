import React from "react";
import Socials from "../socials/Socials";
import "./About.css";

export default function About() {
  return (
    <section className="about-container" id="about">
      <h1> About Me </h1>
      <div className="text-box">
        <p>
          Hello, my name is John and I'm a fullstack developer. I have a
          Computer Science degree from Mississippi College and I have 4+ years
          of development experience plus 6+ years of IT experience. I've been
          working in manufacturing for a few years now and I am looking to
          expand my career in a different environment. I hope you consider me
          for a position and I look forward to hearing from you.
        </p>
        <Socials />
      </div>
    </section>
  );
}

/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros
            id nisl sagittis facilisis. Quisque dapibus pharetra mattis. Aliquam
            ut velit erat. Pellentesque non metus a nulla imperdiet vulputate.
            Duis fermentum ex neque, eget viverra felis sagittis quis. Aliquam
            tristique, metus vel gravida vehicula, purus augue varius nulla,
            placerat suscipit dui purus sit amet sapien. Nunc placerat in augue
            non tincidunt. Maecenas mollis lectus orci, et faucibus libero
            scelerisque eu. Curabitur at suscipit eros, sed tempus velit.
*/
