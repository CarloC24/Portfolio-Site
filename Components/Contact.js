import styled from "styled-components";
import React from "react";
import logosSwitch from "../assets/logosswitch";

const Contactcontainer = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 1.5rem 5rem;
  font-family: ${props => props.theme.fontBody};
  display: grid;
  grid-gap: 1.25rem;
  justify-items: center;

  h2 {
    font-family: ${props => props.theme.fontHeading};
    font-size: clamp(1.6rem, 4vw, 2.25rem);
    font-weight: 700;
    color: ${props => props.theme.foreground};
    text-align: center;
  }

  .lead {
    text-align: center;
    color: ${props => props.theme.secondary};
    font-size: 1.1rem;
  }
  .lead a {
    color: ${props => props.theme.accentText};
    font-weight: 500;
    text-decoration: none;
  }
  .lead a:hover {
    text-decoration: underline;
  }

  .logos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    justify-items: center;
  }

  .contact-logo {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1.25rem;
    background: ${props => props.theme.glassBg};
    backdrop-filter: ${props => props.theme.blur};
    -webkit-backdrop-filter: ${props => props.theme.blur};
    border: 1px solid ${props => props.theme.glassBorder};
    border-radius: ${props => props.theme.radiusMd};
    box-shadow: ${props => props.theme.shadowSm};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .contact-logo:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadowMd};
  }
  .contact-logo a {
    display: inline-flex;
    align-items: center;
    min-width: 44px;
    min-height: 44px;
    border-radius: ${props => props.theme.radiusSm};
  }
  .contact-logo img {
    width: 44px;
    height: 44px;
  }
  .contact-logo p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.foreground};
  }
`;

export default function Contact() {
  return (
    <Contactcontainer>
      <h2>Let's Connect!</h2>
      <p className="lead">
        email:{" "}
        <a href="mailto:carlo.clamucha@gmail.com">carlo.clamucha@gmail.com</a>
      </p>
      <div className="logos">
        <div className="contact-logo">
          {logosSwitch(
            "linkedIn",
            "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          )}
          <p>View my LinkedIn</p>
        </div>
        <div className="contact-logo">
          {logosSwitch("github", "https://github.com/CarloC24")}
          <p>View my Github</p>
        </div>
        <div className="contact-logo">
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
