import React, { Component } from "react";
import styled from "styled-components";
import * as logos from "../assets/logos";
import projects from "../assets/projects.json";
import { Fade, Zoom } from "react-reveal";

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
  background: #353b3f;
  height: 100%;

  display: grid;
  margin-top: 10px;
  grid-gap: 50px;
  justify-content: space-evenly;
  justify-items: center;
  /* changing to single card layout! grid-template-columns: repeat(auto-fit, minmax(600px, 1fr)); */
  .project-container {
    height: 400px;
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.8);
    transition: 0.3s all;
    background: white;
    width: 60%;
    margin: 20px;
    padding-bottom: 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
      "img img info info"
      "img img info info"
      "logo logo info info";
    /* grid-template-columns: 2fr 1fr; */
    :hover {
      /* background: black; */
      /* box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2); */
      transform: translateY(-5px);
    }
    .project-picture {
      grid-area: img;
      img {
        width: 50%;
        margin: 20px;
        height: 50px;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
      }
    }
    .project-about {
      grid-area: info;
      width: 50%;
      height: 50px;
      .about-heading {
        height: 50px;
        h1 {
          text-align: center;
          font-weight: 200;
          font-family: "Roboto";
        }
      }
      p {
        height: 50px;
        word-break: break-word;
        font-family: "Roboto";
        font-size: 16px;
        line-height: 1.6;
        text-align: justify;
      }
    }
    .project-icons {
      grid-area: logo;
      height: 70px;
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .project-icons--single {
      height: 70px;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

//Working on it
export class HomePage extends Component {
  render() {
    return (
      <>
        <HomeContainer>
          {/* Change Layout?? */}
          <img
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/58442718_2680115618671522_8475970164536377344_o.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-1.xx&oh=d476e025788f681b65147f7cc0ff62e2&oe=5D946722"
            alt="mypicture"
            height="200px"
            width="200px"
            className="home_img__image"
          />
          <Fade top cascade>
            <div className="about-header">
              <h1>Hi! I am Carlo, Nice to meet you</h1>
            </div>
            <div className="textcontainer">
              <p>
                I am a texas based web developer / software developer looking
                for a job in web development / software development / fullstack
                role with a great company. Check out my projects down below and
                Feel free to reach out at any of my links.{" "}
              </p>
            </div>
          </Fade>
        </HomeContainer>
        <StacksContainer>
          <div className="stacks-heading">
            <h1>Technologies that I've studied or worked on</h1>
          </div>
          <Zoom top cascade>
            <div className="stacks-logos">
              <div className="stack-box">{logos.html_logo()}</div>
              <div className="stack-box">{logos.css_logo()}</div>
              <div className="stack-box">{logos.less_logo()}</div>
              <div className="stack-box">{logos.react_logo()}</div>
              <div className="stack-box">{logos.apollo_logo()}</div>
              <div className="stack-box">{logos.redux_logo()}</div>
              <div className="stack-box">{logos.vue_logo()}</div>
              <div className="stack-box">{logos.nodejs_logo()}</div>
              <div className="stack-box">{logos.sql_logo()}</div>
              <div className="stack-box">{logos.prisma_logo()}</div>
              <div className="stack-box">{logos.mongodb_logo()}</div>
              <div className="stack-box">{logos.django_logo()}</div>
              <div className="stack-box">{logos.javascript_logo()}</div>
              <div className="stack-box">{logos.python_logo()}</div>
              <div className="stack-box">{logos.c_logo()}</div>
            </div>
          </Zoom>
        </StacksContainer>
        <WorksContainer id="projects">
          <Zoom top cascade>
            {projects.map(project => {
              return (
                <div className="project-container">
                  <div className="project-picture">
                    <a href={project.project_link} target="_blank">
                      <img src={project.gif_link} alt={project.name} />
                    </a>
                  </div>
                  <div className="project-about">
                    <div className="about-heading">
                      <h1>{project.name}</h1>
                    </div>
                    <p>{project.description}</p>
                  </div>
                  {project.github_link ? (
                    <div className="project-icons">
                      <a href={project.github_link}>{logos.github_logo()}</a>
                      <a href={project.project_link}>{logos.www_logo()}</a>
                    </div>
                  ) : (
                    <div className="project-icons--single">
                      <a href={project.project_link}>{logos.www_logo()}</a>
                    </div>
                  )}
                </div>
              );
            })}
          </Zoom>
        </WorksContainer>
      </>
    );
  }
}

export default HomePage;
