import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "next/router";

const Appbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${props => props.theme.glassBgStrong};
  backdrop-filter: ${props => props.theme.blurNav};
  -webkit-backdrop-filter: ${props => props.theme.blurNav};
  border-bottom: 1px solid ${props => props.theme.glassBorder};

  .nav-inner {
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
  }

  .logo-name {
    font-family: "Yellowtail", cursive;
    font-size: 28px;
    color: ${props => props.theme.foreground};
    margin: 0;
  }

  .nav-links {
    display: flex;
    gap: 0.25rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 1rem;
    color: ${props => props.theme.secondary};
    text-decoration: none;
    font-family: ${props => props.theme.fontBody};
    font-weight: 500;
    font-size: 0.95rem;
    border-radius: ${props => props.theme.radiusSm};
    /* color/background hover — no font-weight reflow */
    transition: color 0.2s ease, background 0.2s ease;
  }
  a:hover {
    color: ${props => props.theme.accentText};
    background: rgba(37, 99, 235, 0.08);
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <div className="nav-inner d-flex flex-row justify-content-between align-items-center">
          <p className="logo-name d-md-block d-none">Carlo Clamucha</p>
          <p className="logo-name d-md-none d-block">CC</p>
          <nav className="nav-links" aria-label="Primary">
            <a
              href="/Juan_Carlo_Clamucha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </Appbar>
    );
  }
}

export default withRouter(Navbar);
