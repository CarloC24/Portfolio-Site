import React from "react";
import styled from "styled-components";
import projects from "../assets/projects.json";
import logosswitch from "../assets/logosswitch";

const MyProjects = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
const ProjectCard = styled.div`
  background-color: white;
  margin-top: 10px;
  width: 400px;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    width: 400px;
  }
  .stacklogos {
    margin-left: 20px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 60px));
    grid-gap: 20px;
    img {
      width: 50px;
    }
    svg {
      width: 50px;
    }
  }
  .project-description {
    margin: 15px;
    word-break: break-word;
    text-align: center;
    font-family: "Noto Serif", serif;
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .my-logos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    img {
      width: 70px;
    }
  }
`;

export default function Projects() {
  return (
    <MyProjects className="mt-5">
      {projects.map((project) => (
        <ProjectCard>
          <img src={project.gif_link} />
          <div className="stacklogos">
            {project.stack_logos.map((item) => logosswitch(item))}
          </div>
          <p className="project-description">{project.description}</p>
          <div className="my-logos">
            {project.github_link && logosswitch("github", project.github_link)}
            {logosswitch("www", project.project_link)}
          </div>
        </ProjectCard>
      ))}
    </MyProjects>
  );
}
