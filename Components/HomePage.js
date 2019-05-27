import React, { Component } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background: ${props => props.theme.coolblack};
  margin-top: 50px;
  .home_paragraph__container {
  }
`;

const WorksContainer = styled.div`
  height: 800px;
  background: ${props => props.theme.black};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;
//Working on it
export class HomePage extends Component {
  render() {
    return (
      <>
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
        <WorksContainer>
          <h1>Bonafind</h1>
          <h1>Foodie Fun</h1>
          <h1>Now Thats Delicious</h1>
          <h1>Sick Fits</h1>
        </WorksContainer>
      </>
    );
  }
}

export default HomePage;
