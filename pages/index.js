import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

export class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <p>this is my portfolio site</p>
      </div>
    );
  }
}

export default HomePage;
