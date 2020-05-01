import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
import Projects from "../Components/Projects";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Projects />
      </div>
    );
  }
}

export default HomePage;
