import React, { Component } from "react";
import styled from "styled-components";

const Appbar = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  margin: 20px 0;
  .namecontainer {
    width: 40%;
    height: 120px;
    border-top: 5px solid ${props => props.theme.offWhite};
    border-bottom: 5px solid ${props => props.theme.offWhite};
    display: grid;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.offWhite};
    div {
      margin: 20px auto;
      h1 {
        font-family: "radnika_next";
        font-weight: 500;
        font-size: 30px;
      }
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
      a {
        font-size: 20px;
        font-family: "Roboto";
        color: ${props => props.theme.offWhite};
      }
      a:active {
        border-bottom: 2px solid black;
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
            <a>About</a>
            <a>Works</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="namecontainer">
          <div>
            <h1>Juan Carlo Clamucha</h1>
          </div>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
