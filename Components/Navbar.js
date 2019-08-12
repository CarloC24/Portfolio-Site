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
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;
  align-items: center;
  opacity: 0.8;
  background-color: #63b4d1;
  /* grid-template-areas: "logo logo empty empty empty empty empty empty linkedin github resume"; */
  grid-gap: 5px;
  .navbar-linkedin {
    /* grid-area: linkedin; */
    grid-column: 8;
  }
  .navbar-github {
    /* grid-area: github; */
    grid-column: 9;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .navbar-resume {
    grid-column: 10;
    img {
      width: 35px;
      height: 50px;
    }
  }
  .navbar-heading {
    padding: 0px 10px;
    width: 100px;
    height: 83px;
  }
`;

const store = `  <div className="namecontainer">
<h1>Site on maintenance due to style changes :)</h1>
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
    <h1>View my own Resume</h1>
  </div>
</a>
</Fade>`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <img className="navbar-heading" src="../static/other_logo.png" />
        <a
          className="navbar-linkedin"
          href="https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          target="_blank"
        >
          {linkedIn_logo()}
        </a>
        <a
          className="navbar-github"
          href="https://github.com/CarloC24"
          target="_blank"
        >
          {github_logo()}
        </a>
        <a
          className="navbar-resume"
          href="https://resume.creddle.io/resume/fwoe7ya3wlk"
          target="_blank"
        >
          {resume_logo()}
        </a>
      </Appbar>
    );
  }
}

export default Navbar;
