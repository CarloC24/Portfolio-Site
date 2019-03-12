import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Appbar = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  .namecontainer {
    width: 30%;
    height: 100px;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    display: grid;
    justify-content: center;
    align-items: center;
    h1 {
      font-family: "radnika_next";
      font-weight: 500;
      font-size: 30px;
    }
  }
  .dropdown {
    display: grid;
    align-items: end;
    width: 100%;
    justify-items: end;
    background: #333;
    opacity: 0.8;
    .dropdownicon {
      color: white;
    }
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <div className="dropdowncontainer">
          <div className="dropdown" />
          <p className="dropdownicon">&equiv;</p>
          <p>Menu</p>
        </div>
        <div className="namecontainer">
          <h1> Welcome</h1>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
