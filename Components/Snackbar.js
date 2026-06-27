import React, { Component } from "react";
import Styled from "styled-components";
import logosSwitch from "../assets/logosswitch";

const SnackbarDiv = Styled.div`

img {
  width:50px;
}
`;

class Snackbar extends Component {
  render() {
    return (
      <>
        <SnackbarDiv className="d-md-flex d-none flex-column">
          {logosSwitch("email")}
          {logosSwitch(
            "linkedIn",
            "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          )}
          {logosSwitch("github", "https://github.com/CarloC24")}
          {logosSwitch(
            "resume",
            "/Juan_Carlo_Clamucha_Resume.pdf"
          )}
        </SnackbarDiv>
      </>
    );
  }
}

export default Snackbar;
