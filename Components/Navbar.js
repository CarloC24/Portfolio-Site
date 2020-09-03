import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";

const Appbar = styled.div`
  /* TRBL */
  background: aliceblue;
  .hero-image {
    max-width: 120px;
    max-height: 120px;
  }
  a {
    color: black;
    text-decoration: none;
    transition: font-weight 0.3s;
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
    padding: 0 20px;
    :hover {
      font-weight: normal;
    }
  }

  .logo-name {
    font-family: "Yellowtail", cursive;
    font-size: 28px;
  }

  .wave-div {
    /* margin-top: -13px;
    background: white;
    height: 30px;
    clip-path: url(#wave); */
  }
`;

export class Navbar extends Component {
  state = {
    linkedIn: false,
    github: false,
    resume: false
  };
  componentDidMount() {}
  render() {
    return (
      <Appbar>
        <div className="d-flex flex-row justify-content-between">
          <div className="mt-2 mb-4 mx-5 d-flex align-items-center justify-content-center">
            <p className="logo-name d-md-block d-none">Carlo Clamucha</p>
            <p className="logo-name d-md-none d-block">CC</p>
          </div>
          <div className="my-4 mx-3 d-flex">
            <div className="link">
              <a
                href="https://resume.creddle.io/resume/fwoe7ya3wlk"
                target="_blank"
              >
                Resume
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Appbar>
    );
  }
}

export default withRouter(Navbar);
