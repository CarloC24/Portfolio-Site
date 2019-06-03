import React, { Component } from "react";
import styled from "styled-components";
import * as logos from "../assets/logos";
import projects from "../assets/projects.json";

console.log(projects);
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
    font-size: 15px;
    line-height: 1.4;
    word-break: break-word;
    text-align: center;
    p {
      word-spacing: 5px;
    }
  }
`;

const WorksContainer = styled.div`
  background: ${props => props.theme.babypowder};
  height: 1000px;
  display: grid;
  margin-top: 10px;
  grid-gap: 50px;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  .project-container {
    height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s all;
    :hover {
      /* background: black; */
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    .project-picture {
      height: 200px;
      width: 181px;
    }
    .project-about {
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
    grid-gap: 20px;
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

//Working on it
export class HomePage extends Component {
  render() {
    return (
      <>
        <HomeContainer>
          <img
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/58442718_2680115618671522_8475970164536377344_o.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-1.xx&oh=d476e025788f681b65147f7cc0ff62e2&oe=5D946722"
            alt="mypicture"
            height="200px"
            width="200px"
            className="home_img__image"
          />
          <div className="about-header">
            <h1>Hi! I am Carlo, Nice to meet you</h1>
          </div>
          <div className="textcontainer">
            <p>
              I am a web developer residing in Texas and currently looking for a
              job in software development/web development. I studied computer
              science in my local community college for a year and a half then i
              shifted to Lambda school.Now ,I am a graduate of their computer
              science/web development course. I love developing applications and
              learning new technologies! I am currently proficient at HTML,
              CSS3, Javascript, React, VueJS, NodeJS, MongoDB, Prisma, GraphQL,
              Django and I studied Computer Science fundamentals using Python
              and C.
            </p>
          </div>
        </HomeContainer>
        <StacksContainer>
          <div className="stacks-heading">
            <h1>Technologies that I've studied or worked on</h1>
          </div>
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
        </StacksContainer>
        <WorksContainer>
          {projects.map(project => {
            return (
              <div className="project-container">
                <div className="project-picture">
                  <img
                    alt={project.name}
                    src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  />
                </div>
                <div className="project-about">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </WorksContainer>
      </>
    );
  }
}

export default HomePage;
