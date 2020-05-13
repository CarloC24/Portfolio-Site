import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
import Projects from "../Components/Projects";
import HorizontalSnackbar from "../Components/HorizontalSnackbar";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentCount: 1,
    };
  }
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
