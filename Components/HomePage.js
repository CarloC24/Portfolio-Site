import React, { Component } from "react";
import styled from "styled-components";
import * as logos from "../assets/logos";
import projects from "../assets/projects.json";
import { Fade, Zoom } from "react-reveal";
import logoreturner from "../assets/logosswitch";

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
      /* height: 100%; */
      img {
        width: 90%;
        /* height: 100%; */
        /* height: 350px; */
      }
      :hover {
        /* background: black; */
        /* box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2); */
        /* transform: translateY(-5px); */
      }
    }
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
        <WorksContainer id="projects">
          <Zoom top cascade>
            {/* <button onClick={this.nextPage}>Next</button>
            <button onClick={this.prevPage}>Prev</button> */}
            <div className="project-container" key={projects[count].name}>
              <div className="project-image">
                <img
                  className="project-picture"
                  src={projects[count].gif_link}
                  alt={projects[count].name}
                />
              </div>
              <div className="project-details">
                <div className="project-heading">
                  <h1>{projects[count].name}</h1>
                </div>
                <div className="stack-icons">
                  {projects[count].stack_logos.map(item => logoreturner(item))}
                </div>
                <hr />
                <div className="project-description">
                  <p>{projects[count].description}</p>
                </div>
                {projects[count].logos && (
                  <div className="project-icons">
                    {projects[count].logos.map(item => {
                      if (item == "github" && projects[count].github_link) {
                        return (
                          <a href={projects[count].github_link} target="_blank">
                            {logoreturner(item, projects[count].github_link)}
                          </a>
                        );
                      } else if (
                        item == "www" &&
                        projects[count].project_link
                      ) {
                        return (
                          <a href={projects[count].github_link} target="_blank">
                            {logoreturner(item, projects[count].project_link)}
                          </a>
                        );
                      } else {
                        return logoreturner(item);
                      }
                    })}
                  </div>
                )}
              </div>
              {/* <div className="project-about">
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
                  )} */}
            </div>
          </Zoom>
        </WorksContainer>
        {/* <HomeContainer>
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
              <div className="stack-box">{logos.pugjs_logo()}</div>
            </div>
          </Zoom>
        </StacksContainer> */}
      </>
    );
  }
}
export default HomePage;
