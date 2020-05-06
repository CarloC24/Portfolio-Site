import React, { Component } from "react";
import styled from "styled-components";
import logosSwitch from "../assets/logosswitch";

const HorizontalSnackbarContainer = styled.div`
  display: grid;

  img {
    width: 35px;
  }
  .logo-container {
    padding: 20px;
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 25%;
    .logo {
      display: grid;
      grid-template-columns: 9fr 1fr;
      p {
        padding-top: 10px;
      }
    }
    @media (max-width: 768px) {
      justify-self: stretch;
    }
  }
`;

export default class HorizontalSnackbar extends Component {
  render() {
    return (
      <HorizontalSnackbarContainer>
        <div className="logo-container">
          <div className="logo">
            {logosSwitch("email")}
            <p>Email</p>
          </div>
          <div className="logo">
            {logosSwitch(
              "linkedIn",
              "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
            )}
            <p>LinkedIn</p>
          </div>
          <div className="logo">
            {logosSwitch("github", "https://github.com/CarloC24")}
            <p>Github</p>
          </div>
          <div className="logo">
            {logosSwitch(
              "resume",
              "https://resume.creddle.io/resume/fwoe7ya3wlk"
            )}
            <p>Resume</p>
          </div>
        </div>
      </HorizontalSnackbarContainer>
    );
  }
}
