import React from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import About from "./components/about/About.js";
import Contact from "./components/contact/Contact.js";
import Experience from "./components/experience/Experience.js";
import Footer from "./components/footer/Footer.js";
import NavBar from "./components/navbar/NavBar.js";
import Projects from "./components/projects/Projects.js";
import MobileNav from "./components/mobilenav/MobileNav";



function App() {
  return (
    <>
      <NavBar />
      <Header />
      <MobileNav />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;


/*
 <img src={image} alt="background" className="scroll-background" />
*/
