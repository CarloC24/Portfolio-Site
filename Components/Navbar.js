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
  grid-template-areas: "logo logo empty empty empty empty empty empty linkedin github resume";
  grid-gap: 5px;
  .navbar-heading {
    grid-area: logo;
  }
  .navbar-linkedin {
    grid-area: linkedin;
  }
  .navbar-github {
    grid-area: github;
  }
  .navbar-resume {
    grid-area: resume;
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
        <h1 className="navbar-heading">START HERE</h1>
        <h1 className="navbar-linkedin">LinkedIn</h1>
        <h1 className="navbar-github">Github</h1>
        <h1 className="navbar-resume">Resume</h1>
      </Appbar>
    );
  }
}

export default Navbar;
