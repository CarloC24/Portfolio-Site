import React, { Component } from "react";
import styled from "styled-components";
import logosswitch from "../assets/logosswitch";

const ProjectCard = styled.div`
  padding: 0 0.5rem;

  .main-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 9fr 2fr 1fr 7fr;
    align-items: center;
    gap: 1rem;
    background: ${props => props.theme.glassBg};
    backdrop-filter: ${props => props.theme.blur};
    -webkit-backdrop-filter: ${props => props.theme.blur};
    border: 1px solid ${props => props.theme.glassBorder};
    border-radius: ${props => props.theme.radiusLg};
    box-shadow: ${props => props.theme.shadowMd};
    padding: 1.75rem;

    .project-image {
      width: 100%;
      border-radius: ${props => props.theme.radiusMd};
      box-shadow: ${props => props.theme.shadowSm};
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-image:hover {
      transform: translateY(-3px);
      box-shadow: ${props => props.theme.shadowLg};
    }

    .stacklogos {
      margin: 0 auto;
      display: grid;
      grid-template-rows: repeat(auto-fit, minmax(50px, 60px));
      grid-gap: 20px;
      align-content: center;
      img {
        width: 52px;
        border: none;
      }
      svg {
        width: 52px;
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
      z-index: 0;
      top: 0;
      bottom: 0;
      left: 50%;
      border-left: 1px solid ${props => props.theme.border};
      transform: translate(-50%);
    }

    .description-container {
      font-family: ${props => props.theme.fontBody};
      h3 {
        font-family: ${props => props.theme.fontHeading};
        font-size: clamp(1.6rem, 4vw, 2.2rem);
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.foreground};
        margin-bottom: 0.75rem;
      }
      .project-description {
        margin: 0 auto 1.25rem;
        max-width: 42ch;
        word-break: break-word;
        text-align: center;
        font-size: 1.05rem;
        line-height: 1.6;
        color: ${props => props.theme.secondary};
      }
      .description-logos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(64px, 70px));
        justify-content: center;
        justify-items: center;
        grid-gap: 10px;
        a {
          display: inline-flex;
          border-radius: ${props => props.theme.radiusSm};
          transition: transform 0.2s ease;
        }
        a:hover {
          transform: translateY(-3px);
        }
        img {
          width: 64px;
        }
      }
    }

    @media (max-width: 993px) {
      grid-gap: 24px;
      grid-template-columns: none;
    }
  }
`;

class CarouselItem extends Component {
  render() {
    const { project, ...props } = this.props;
    return (
      <ProjectCard {...props}>
        <div className="main-container">
          <img
            className="project-image"
            src={project.gif_link}
            alt={`${project.name} project preview`}
          />
          <div className="stacklogos">
            {project.stack_logos.map((item, i) => (
              <React.Fragment key={item + i}>
                {logosswitch(item)}
              </React.Fragment>
            ))}
          </div>
          <div className="vertical-line d-none d-lg-block"></div>
          <div className="description-container">
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
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
