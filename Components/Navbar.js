import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Appbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 20px;
  p {
    font-size: 30px;
    font-family: "radnika_next";
  }
  .contact {
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <p>Icon </p>
        <nav>
          <a>Home</a>
          <a>Work</a>
          <a>Contact</a>
        </nav>
        <div className="contact">
          <p>Twitter</p>
          <p>Github</p>
          <p>Instagram</p>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
