import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Appbar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <Button>Hi there</Button>
      </Appbar>
    );
  }
}

export default Navbar;
