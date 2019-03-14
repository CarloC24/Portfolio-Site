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
    border-top: 5px solid ${props => props.theme.offWhite};
    border-bottom: 5px solid ${props => props.theme.offWhite};
    display: grid;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.offWhite};
    h1 {
      font-family: "radnika_next";
      font-weight: 500;
      font-size: 30px;
    }
  }
  .dropdowncontainer {
    display: grid;
    align-items: center;
    width: 100%;
    height: 70px;
    justify-items: end;
    .dropdown {
      display: grid;
      width: 25%;
      grid-gap: 20px;
      justify-content: space-around;
      position: absolute;
      grid-template-columns: repeat(3, 1fr);
      p {
        font-size: 20px;
        font-family: "Roboto";
        color: ${props => props.theme.offWhite};
      }
      .dropdownicon {
        text-align: center;
        color: ${props => props.theme.offWhite};
      }
    }
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <div className="dropdowncontainer">
          <div className="dropdown">
            <p>About</p>
            <p>Works</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="namecontainer">
          <h1> Welcome</h1>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
