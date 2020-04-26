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
  .hero-image {
    max-width:120px;
    max-height:120px;
  }  
  a {
    color:black;
    text-decoration:none;
    font-weight:normal;
    transition:font-weight 0.3s;
    font-family: 'Open Sans', sans-serif;
    font-weight:bold;
  }
  .dot {
    height: 13px;
    width: 13px;
    background-color: black;
    border-radius: 50%;
    display:inline-block;
    padding-top:1px;
    transition:all 0.1s ease-in;
    opacity:0;
  }
 
  .link {
    transition:all 1s;
    margin-bottom:6px;
     &:hover {
       span{
        opacity:1
       }
     }
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
          <div className="d-flex flex-row">
          <img className=" w-25 mt-2 mb-4 mx-5 hero-image" src="../static/my_logo.png"></img>
          <div className=" w-75 my-4 mx-3 d-flex flex-column">
            <div className="link">
            <Link href="/" >
              <a>All Works</a>
            </Link>
            <span className="ml-2 dot"></span>
            </div>
            <div className="link">
            <Link href="/profile" >
              <a>About Me</a>
            </Link>
            <span className="ml-2 dot" ></span>
            </div>
          </div>
          </div>
        </Appbar>
    );
  }
}

export default Navbar;
