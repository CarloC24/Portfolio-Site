import React, { Component } from "react";
import styled from "styled-components";
import {
  linkedIn_logo,
  github_logo,
  email_logo,
  resume_logo
} from "../assets/logos";
import { Rotate, Fade, Slide } from "react-reveal";

const Appbar = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* position: sticky;
  top: 0; */
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
  /* justify-items: center; */
  .navbar-heading {
    margin: 20px 0px 0px 20px;
    .navbar-logo {
      height: 100px;
      width: 100px;
      margin-left: 20px;
    }
    h1 {
      font-family: "Roboto";
      font-size: 1rem;
      /* text-align: center;   */
      margin-left: 30px;
    }
  }
  .contact-info {
    margin: 20px 0px 0px 20px;
    display: grid;
    /* grid-gap: 20px; */
    justify-content: center;
    grid-template-columns: repeat(3, 100px);
    justify-items: center;
    .contact-logo {
      display: grid;
      grid-gap: 20px;
      justify-items: center;
      text-decoration: none;
      img {
        transition: all 0.3s;
        margin: auto;
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 13px;
        font-family: "Roboto";
        text-align: center;
        color: black;
      }
    }
  }
  /* TRBL */
`;

export class Navbar extends Component {
  state = {
    linkedIn: false,
    github: false,
    resume: false
  };
  render() {
    return (
      <Appbar>
        <div className="navbar-heading">
          <img className="navbar-logo" src="../static/other_logo.png" />
          <h1>Software Engineer</h1>
        </div>
        <div className="contact-info">
          <a
            className="navbar-linkedin contact-logo"
            href="https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
            target="_blank"
            onMouseEnter={() => {
              this.setState({ linkedIn: !this.state.linkedIn });
            }}
            onMouseLeave={() => {
              this.setState({ linkedIn: !this.state.linkedIn });
            }}
          >
            {linkedIn_logo()}
            {this.state.linkedIn && (
              <Slide bottom>
                <p>View My LinkedIn</p>
              </Slide>
            )}
          </a>
          <a
            className="navbar-github contact-logo"
            href="https://github.com/CarloC24"
            target="_blank"
            onMouseEnter={() => {
              this.setState({ github: !this.state.github });
            }}
            onMouseLeave={() => {
              this.setState({ github: !this.state.github });
            }}
          >
            {github_logo()}
            {this.state.github && (
              <Fade bottom>
                <p>View My Github</p>
              </Fade>
            )}
          </a>
          <a
            className="navbar-resume contact-logo"
            href="https://resume.creddle.io/resume/fwoe7ya3wlk"
            target="_blank"
            onMouseEnter={() => {
              this.setState({ resume: !this.state.resume });
            }}
            onMouseLeave={() => {
              this.setState({ resume: !this.state.resume });
            }}
          >
            {resume_logo()}
            {this.state.resume && (
              <Fade bottom>
                <p>View My Resume</p>
              </Fade>
            )}
          </a>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;

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
