import React, { Component } from "react";
import styled from "styled-components";
import * as logos from "../assets/logos";
import projects from "../assets/projects.json";
import { Fade, Zoom } from "react-reveal";
import logoreturner from "../assets/logosswitch";
import Works from "./Works";

const HomeContainer = styled.div`
  background: ${props => props.theme.babypowder};
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
  img {
    margin-top: 50px;
    border-radius: 50%;
  }
  .about-header {
    font-family: "Roboto";
    font-weight: 100;
    width: 100%;
    text-align: center;
  }
  .textcontainer {
    width: 70%;
    font-family: "Noto Serif", serif;
    font-size: 18px;
    line-height: 1.4;
    word-break: break-word;
    text-align: center;
    p {
      word-spacing: 5px;
      margin: 20px auto;
    }
  }
`;

const StacksContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr, 2fr;
  margin-top: 40px;
  padding-bottom: 40px;
  justify-items: center;
  background-color: ${props => props.theme.coolblack};
  .stacks-heading {
    padding: 40px 0px;
    h1 {
      font-family: "Roboto";
      font-weight: 100;
    }
    text-align: center;
  }
  .stacks-logos {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;
    width: 83%;
    svg {
      height: 150px;
      width: 150px;
    }
    img {
      height: 150px;
      width: 150px;
    }
    .stack-box {
      height: 150px;
      width: 150px;
    }
  }
`;
const WorksContainer = styled.div`
  /* background: #353b3f; */
  .overlay {
    width: 90%;
    height: 300px;
    .overlaypic {
      opacity: 0.3;
      width: 90%;
      height: 300px;
    }
  }
  font-family: "Roboto";
  height: 100px;
  margin-top: 30px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  /* changing to single card layout! grid-template-columns: repeat(auto-fit, minmax(600px, 1fr)); */
  .project-container {
    /* height: 700px; */
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    transition: 0.3s all;
    display: grid;
    grid-template-rows: 1fr 350px;
    justify-items: center;
    align-items: center;
    /* background: black; */
    width: 90%;
    /* height: 20px; */
    /* margin: 20px; */
    /*  put this in the picture clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%); */
    .project-image {
      display: grid;
      justify-items: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 2px;
      /* height: 100%; */
      img {
        width: 100%;
        /* height:500px; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /* height: 100%; */
        /* height: 350px; */
      }
      :hover {
        /* background: black; */
        /* box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2); */
        /* transform: translateY(-5px); */
      }
    }

    @media (max-width: 800px) {
      .project-details {
        display: grid;
        width: 90%;
        justify-items: center;
        align-items: center;
        .project-description {
          /* margin: 10px; */
          text-align: center;
          word-break: break-word;
          line-height: 1.3;
        }
      }
    }
    .project-icons svg,
    .project-icons img {
      height: 50px;
      width: 50px;
      margin: 8px;
      transition: 0.2s all;
    }
    .project-icons svg:hover,
    .project-icons img:hover {
      transform: translateY(-5px);
    }
    .stack-icons svg,
    .stack-icons img {
      height: 50px;
      width: 50px;
      margin: 8px;
      transition: 0.2s all;
    }
    .stack-icons svg:hover,
    .stack-icons img:hover {
      transform: translateY(-5px);
    }
    hr {
      width: 90%;
    }
  }
  .asd {
    width: 500px;
    /* background: black; */
    height: 500px;
    img {
      background: black;
    }
  }
`;

//Working on it
export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  nextPage = e => {
    let nextIndex = this.state.count + 1;
    if (projects.length === nextIndex) {
      nextIndex = 0;
    }
    this.setState({ count: nextIndex });
  };
  prevPage = e => {
    let nextIndex = this.state.count - 1;
    if (0 > nextIndex) {
      nextIndex = projects.length - 1;
    }
    this.setState({
      count: nextIndex
    });
  };
  render() {
    let { count } = this.state;
    console.log(count);
    return (
      <>
        <Works></Works>
      </>
    );
  }
}
export default HomePage;
