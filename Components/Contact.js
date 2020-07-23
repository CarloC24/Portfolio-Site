import styled from "styled-components";
import React from "react";
import logosSwitch from "../assets/logosswitch";

const Contactcontainer = styled.div`
  background-color: aliceblue;
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-gap: 10px;
  .logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    justify-content: space-evenly;
    justify-items: center;
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
    }
  }
  p {
    font-size: 1rem;
    transition: 0.8s;
    font-weight: lighter;
    @media (min-width: 993px) {
      font-size: 1.3rem;
    }
  }
`;

export default function Contact() {
  return (
    <Contactcontainer>
      <h1 className="text-center">Lets Connect!</h1>
      <p className="text-center">
        email:{" "}
        <a href="mailto:carlo.clamucha@gmail.com" target="_blank">
          carlo.clamucha@gmail.com
        </a>
      </p>
      <div className="logos">
        {/* <div className="contact-logo p-3">
          {logosSwitch("email")}
          <p>carlo.clamucha@gmail.com</p>
        </div> */}
        <div className="contact-logo p-3">
          {logosSwitch(
            "linkedIn",
            "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          )}
          <p>View my LinkedIn</p>
        </div>
        <div className="contact-logo p-3">
          {logosSwitch("github", "https://github.com/CarloC24")}
          <p>View my Github</p>
        </div>
        <div className="contact-logo p-3">
          {logosSwitch(
            "resume",
            "https://resume.creddle.io/resume/fwoe7ya3wlk"
          )}
          <p>View my resume</p>
        </div>
      </div>
    </Contactcontainer>
  );
}
