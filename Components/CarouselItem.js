import React, { Component } from "react";
import styled from "styled-components";
import logosswitch from "../assets/logosswitch";

const ProjectCard = styled.div`
  .main-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 9fr 2fr 1fr 7fr;
    justify-content: start;
    .project-image {
      margin-top: 10px;
      width: 100%;
      transition: 0.3s;
      height: 100%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      :hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    }
    .stacklogos {
      margin: 0 auto;
      display: grid;
      grid-template-rows: repeat(auto-fit, minmax(50px, 60px));
      grid-gap: 20px;
      align-content: center;
      img {
        width: 60px;
        border: none;
      }
      svg {
        width: 60px;
      }
      @media (max-width: 993px) {
        grid-template-rows: none;
        grid-template-columns: repeat(auto-fit, minmax(50px, 60px));
        margin: 0;
        justify-items: center;
        justify-content: center;
      }
    }
    .vertical-line {
      width: 50px;
      position: relative;
      text-align: center;
    }
    .vertical-line:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: 1px solid #333;
      transform: translate(-50%);
    }
    .description-container {
      font-family: "Roboto", sans-serif;
      .project-description {
        margin: 15px;
        word-break: break-word;
        text-align: center;
        font-size: 1.3rem;
      }
      h1 {
        font-size: 2.4rem;
      }
      .description-logos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        justify-items: center;
        grid-gap: 10px;
        img {
          width: 70px;
        }
      }
    }

    @media (max-width: 993px) {
      grid-template-rows: 1fr 150px 50px 200px;
      grid-template-columns: none;
    }
  }
`;

class CarouselItem extends Component {
  componentDidMount() {
    // this.props.handleMount();
  }

  render() {
    const { project, ...props } = this.props;
    return (
      <ProjectCard {...props}>
        <div className="main-container">
          <img className="project-image" src={project.gif_link} />
          <div className="stacklogos">
            {project.stack_logos.map(item => logosswitch(item))}
          </div>
          <div className="vertical-line d-none d-lg-block"></div>
          <hr className="d-block d-lg-none w-100 border-top border-dark" />
          <div className="description-container">
            <h1 className="text-center font-weight-bold">{project.name}</h1>
            <p className="project-description font-weight-lighter">
              {project.description}
            </p>
            <div className="description-logos">
              {project.github_link &&
                logosswitch("github", project.github_link)}
              {logosswitch("www", project.project_link)}
            </div>
          </div>
        </div>
      </ProjectCard>
    );
  }
}

export { CarouselItem };
