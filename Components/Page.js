import React from "react";
import styled from "styled-components";
import Snackbar from "./Snackbar";

const GlobalImage = styled.div``;

export default class extends React.Component {
  render() {
    return (
      <GlobalImage className="d-flex align-items-center">
        {" "}
        <Snackbar />
        {this.props.children}
      </GlobalImage>
    );
  }
}
