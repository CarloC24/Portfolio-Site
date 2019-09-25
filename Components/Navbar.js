import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  linkedIn_logo,
  github_logo,
  email_logo,
  resume_logo
} from "../assets/logos";
import { Rotate, Fade, Slide } from "react-reveal";

const Appbar = styled.div`
  /* TRBL */
  margin-top: 10px;
  /* border: 1px solid red; */
  display: grid;
  justify-items: center;
  .pages {
    display: grid;
    font-family: "Open Sans", sans-serif;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    a {
      color: black;
      transition: 0.3s all;
      text-decoration: none;
    }
    a:hover {
      border-bottom: 1px solid black;
    }
    /* justify-content: center; */
  }
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
        <div className="pages">
          <Link href="/">
            <a>Introduction</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
