import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
import Projects from "../Components/Projects";
import HorizontalSnackbar from "../Components/HorizontalSnackbar";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yOffset: 0,
    };
  }
  componentDidMount() {
    // add incremeting scroll downs here........
    window.onscroll = () => {
      if (window.pageYOffset === this.state.yOffset) {
        alert("user has scrolled to the bottom");
      } else {
        this.setState((prevState) => ({
          ...prevState,
          yOffset: window.pageYOffset,
        }));
      }
      // if (
      //   window.scrollTop() + window.height() >
      //   window.document.height() - 100
      // ) {
      //   alert("scrolled at the bottom");
      // }
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
