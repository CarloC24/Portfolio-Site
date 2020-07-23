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
    font-weight: normal;
    transition: font-weight 0.3s;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
  }
  .dot {
    height: 13px;
    width: 13px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    padding-top: 1px;
    transition: all 0.1s ease-in;
    opacity: 0;
  }

  .link {
    transition: all 1s;
    margin-bottom: 6px;
    &:hover {
      span {
        opacity: 1;
      }
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
              <Link href="/">
                <a>All Works</a>
              </Link>
              <span className="ml-2 dot"></span>
            </div>
            <div className="link">
              <Link href="/profile">
                <a>About Me</a>
              </Link>
              <span className="ml-2 dot"></span>
            </div>
          </div>
        </div>
      </Appbar>
    );
  }
}

export default withRouter(Navbar);
