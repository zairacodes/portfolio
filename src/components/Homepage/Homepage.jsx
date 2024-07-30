import React from "react";
import Intro from "./Main/Intro";
import Projects from "./Main/Projects/Projects";
import "./Homepage.css";

function Homepage() {
  return (
    <main className="main-container">
      <Intro />
      <Projects />
    </main>
  );
}

export default Homepage;
