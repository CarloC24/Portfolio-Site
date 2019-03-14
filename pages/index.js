import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Homepage from "../Components/HomePage";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default HomePage;
