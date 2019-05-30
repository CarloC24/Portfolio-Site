import React, { Component } from "react";
import styled from "styled-components";
import { linkedIn_logo, github_logo } from "../assets/logos";

const Appbar = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  height: 300px;
  .namecontainer {
    border-bottom: 5px solid ${props => props.theme.offWhite};
    text-align: center;
    font-family: "radnika_next";
    font-size: 20px;
    width: 250px;
    display: grid;
    align-items: end;
    h1 {
      color: ${props => props.theme.offWhite};
    }
  }
  .link-container {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    font-size: 25px;
    color: ${props => props.theme.offWhite};
    .linkimage {
      display: grid;
      justify-items: end;
      img {
        margin-top: -12px;
      }
    }
    .linkimagegithub {
      height: 100px;
      width: 100px;
      margin-top: -30px;
      img {
        width: 75px;
        height: 75px;
      }
    }
    a {
      text-decoration: none;
      font-family: "Roboto";
      padding: 0 10px;
      color: ${props => props.theme.offWhite};
    }
    .githublink {
      margin-left: -35px;
    }
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <div className="namecontainer">
          <h1>Carlo Clamucha</h1>
        </div>
        <div className="link-container">
          <div className="linkimage">{linkedIn_logo()}</div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          >
            LinkedIn
          </a>
          <div className="linkimagegithub">{github_logo()}</div>
          <a
            target="_blank"
            href="https://github.com/CarloC24"
            className="githublink"
          >
            Github
          </a>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
