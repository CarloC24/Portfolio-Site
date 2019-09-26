import styled from "styled-components";
import React from "react";
import logosSwitch from "../assets/logosswitch";

const Contactcontainer = styled.div`
  background-color: #003152;
  font-family: "Open Sans", sans-serif;
  display: grid;
  grid-gap: 50px;
  justify-content: center;
  .fill {
    height: 10px;
  }
  .contact-logo {
    display: grid;
    align-items: center;
    grid-template-columns: 100px 175px;
    img {
      width: 50px;
      transition: 0.3s;
    }
    img:hover {
      background-color: cornflowerblue;
      opacity: 0.6;
    }
    p {
      color: white;
      font-size: 1.6rem;
      transition: 0.8s;
    }
  }
`;

export default function Contact() {
  return (
    <Contactcontainer>
      <div className="fill"></div>
      <div className="contact-logo">
        {logosSwitch("email")}
        <p>carlo.clamucha@gmail.com</p>
      </div>
      <div className="contact-logo">
        {logosSwitch(
          "linkedIn",
          "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
        )}
        <p>My LinkedIn</p>
      </div>
      <div className="contact-logo">
        {logosSwitch("github", "https://github.com/CarloC24")}
        <p>My Github @CarloC24</p>
      </div>
      <div className="contact-logo">
        {logosSwitch("resume", "https://resume.creddle.io/resume/fwoe7ya3wlk")}
        <p>My Resume</p>
      </div>
    </Contactcontainer>
  );
}
