import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Appbar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  p {
    font-size: 1ß0px;
    font-family: "Roboto";
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <p>Icon goes here</p>
        <Button color="danger">Danger!</Button>
        {this.props.children}
      </Appbar>
    );
  }
}

export default Navbar;
