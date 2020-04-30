import React, { Component } from "react";
import Styled from "styled-components";
import logosSwitch from "../assets/logosswitch";

const SnackbarDiv = Styled.div`
position:absolute;
img {
  width:50px;
}
`;

class Snackbar extends Component {
  render() {
    return (
      <>
        <SnackbarDiv className="d-flex flex-column">
          {logosSwitch("email")}
          {logosSwitch(
            "linkedIn",
            "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          )}
          {logosSwitch("github", "https://github.com/CarloC24")}
          {logosSwitch(
            "resume",
            "https://resume.creddle.io/resume/fwoe7ya3wlk"
          )}
        </SnackbarDiv>
      </>
    );
  }
}

export default Snackbar;
