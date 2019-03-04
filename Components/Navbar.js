import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Appbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 20px;
  p {
    font-size: 10px;
    font-family: "Roboto";
  }
  .contact {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
