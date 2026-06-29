import React, { Component } from "react";
import Styled from "styled-components";

const ProfileContainer = Styled.section`
  padding: 5rem 1.5rem 3.5rem;
  display: flex;
  justify-content: center;

  .glass-card {
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    background: ${props => props.theme.glassBg};
    backdrop-filter: ${props => props.theme.blur};
    -webkit-backdrop-filter: ${props => props.theme.blur};
    border: 1px solid ${props => props.theme.glassBorder};
    border-radius: ${props => props.theme.radiusLg};
    box-shadow: ${props => props.theme.shadowMd};
    padding: 3rem 2rem;
    text-align: center;
  }

  .eyebrow {
    font-family: ${props => props.theme.fontBody};
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${props => props.theme.accentText};
    margin-bottom: 0.75rem;
  }

  .headline {
    font-family: ${props => props.theme.fontHeading};
    font-size: clamp(2.25rem, 6vw, 3.25rem);
    font-weight: 700;
    line-height: 1.1;
    color: ${props => props.theme.foreground};
    margin: 0;
  }

  .intro {
    font-family: ${props => props.theme.fontBody};
    font-size: clamp(1.05rem, 2.5vw, 1.3rem);
    font-weight: 400;
    line-height: 1.6;
    color: ${props => props.theme.secondary};
    max-width: 48ch;
    margin: 1.25rem auto 0;
  }

  .cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    min-height: 44px;
    padding: 0 1.5rem;
    font-family: ${props => props.theme.fontBody};
    font-weight: 600;
    font-size: 1rem;
    color: ${props => props.theme.onPrimary};
    background: ${props => props.theme.accent};
    border-radius: ${props => props.theme.radiusMd};
    box-shadow: ${props => props.theme.shadowSm};
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .cta:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadowMd};
  }
`;

export default class Profile extends Component {
  render() {
    return (
      <ProfileContainer>
        <div className="glass-card">
          <p className="eyebrow">Full-Stack Engineer</p>
          <h1 className="headline">Hello, I'm Carlo.</h1>
          <p className="intro">
            I design and ship full-stack web applications — React/Next.js front
            ends backed by Node, ASP.NET, or Java Spring Boot. Comfortable
            across the stack, I focus on clean code and dependable delivery.
          </p>
        </div>
      </ProfileContainer>
    );
  }
}
