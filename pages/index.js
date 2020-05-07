import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
import Projects from "../Components/Projects";
import HorizontalSnackbar from "../Components/HorizontalSnackbar";

export class HomePage extends Component {
  render() {
    return (
      <div className="w-100">
        <Projects />
        <HorizontalSnackbar />
      </div>
    );
  }
}

export default HomePage;
