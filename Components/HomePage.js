import React, { Component } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background: white;
`;

export class HomePage extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="home_img__container">
          <img
            src="https://avatars3.githubusercontent.com/u/41533016?s=80"
            alt="mypicture"
            className="home_img__image"
          />
        </div>
        <div className="home_paragraph__container">
          <p>Hi my name is Juan Carlo Clamucha</p>
          <p>Web Developer</p>
          <p>this is the homepage</p>
        </div>
      </HomeContainer>
    );
  }
}

export default HomePage;
