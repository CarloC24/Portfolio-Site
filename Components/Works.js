import React from "react";
import projects from "../assets/projects.json";
import styled from "styled-components";
import * as logos from "../assets/logos";
import logoreturner, { loremipsum } from "../assets/logosswitch";

const WorksContainer = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  line-height: 25px;
  /* TWO DIVS */
  .project-picture {
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 700px) {
      margin: 10px;
    }
  }
  .project-details {
    height: 100%;
    background: #989898;
    .project-name {
      margin: 60px 30px 10px;
      font-family: "roboto";
      font-weight: 400;
    }
    .stack-icons {
      margin-left: 15px;
    }
  }
  /* END TWO DIVS */
  /* SVG IMGS LOGOS */
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
  /* WorksContainer Responsiveness */
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
class Works extends React.Component {
  state = {
    count: 0
  };
  render() {
    let { count } = this.state;
    return (
      <WorksContainer>
        <div class="project-picture">
          <img
            alt="projectpicturegoeshere"
            src={projects[count].gif_link}
          ></img>
        </div>
        <div className="project-details">
          <h1 className="project-name">Project Name</h1>
          <div className="stack-icons">
            {projects[count].stack_logos.map(item => logoreturner(item))}
          </div>
          <p>{loremipsum}</p>
          <p>Put the website logos in here</p>
        </div>
      </WorksContainer>
    );
  }
}

export default Works;
