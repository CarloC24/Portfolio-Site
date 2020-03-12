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
  background-color: #1f305e;
  /* border: 1px solid red; */
  display: grid;
  justify-items: center;
  .pages {
    display: grid;
    font-family: "Open Sans", sans-serif;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    a {
      color: white;
      margin: 10px;
      font-size: 1.4rem;
      text-decoration: none;
    }
    a:hover {
      background-color: cornflowerblue;
      opacity: 0.6;
    }
    /* justify-content: center; */
  }
`;

const HeroImage = styled.div`
  height: 250px;
  display: grid;
  grid-template-rows: 20px 50px 0px;
  justify-content: center;
  align-items: center;
  align-content: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 250px;
  }
  h1 {
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 1.8rem;
    color: white;
    z-index: 2;
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
      <>
        {/* <HeroImage>
          <img src="https://img.freepik.com/free-photo/ragged-crumpled-dark-black-paper-texture-background_8087-1872.jpg?size=626&ext=jpg" />
          <h1>Carlo Clamucha</h1>
          <h1>Software Engineer</h1>
        </HeroImage> */}
        <Appbar>
          <div className="pages">
            <Link href="/">
              <a>Introduction</a>
            </Link>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </Appbar>
      </>
    );
  }
}

export default Navbar;
