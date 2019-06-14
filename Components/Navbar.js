import React, { Component } from "react";
import styled from "styled-components";
import {
  linkedIn_logo,
  github_logo,
  email_logo,
  resume_logo
} from "../assets/logos";
import { Rotate, Fade } from "react-reveal";

const Appbar = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  height: 400px;
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
    height: 60px;
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
  .email-container {
    width: 24%;
    display: grid;
    /* justify-items: center; */
    justify-content: space-around;
    grid-template-columns: repeat(2, 1fr);
    margin-top: -50px;
    padding: 20px 0;
    h1 {
      font-family: "Roboto";
      font-size: 20px;
      color: ${props => props.theme.offWhite};
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
  .resume-link {
    width: 24%;
    .resume-container {
      width: 100%;
      display: grid;
      /* justify-items: center; */
      grid-template-columns: 77px 1fr;
      margin-top: -50px;
      /* justify-items: start; */
      padding: 20px 0;
      h1 {
        font-family: "Roboto";
        font-size: 20px;
        /* margin-right: -10px; */
        color: ${props => props.theme.offWhite};
      }
      .resume-image {
        width: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
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
        <Fade top cascade duration={700}>
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
          <div className="email-container">
            <div className="email-image">{email_logo()}</div>
            <h1>carlo.clamucha@gmail.com</h1>
          </div>
          <a
            className="resume-link"
            target="_blank"
            href="https://resume.creddle.io/resume/fwoe7ya3wlk"
          >
            <div className="resume-container">
              <div className="resume-image">{resume_logo()}</div>
              <h1>My Resume</h1>
            </div>
          </a>
        </Fade>
      </Appbar>
    );
  }
}

export default Navbar;
