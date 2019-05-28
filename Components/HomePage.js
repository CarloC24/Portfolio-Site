import React, { Component } from "react";
import styled from "styled-components";
import { redux_logo } from "../assets/logos";

const HomeContainer = styled.div`
  background: ${props => props.theme.offWhite};
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  justify-content: space-around;
  .home_img__container {
    display: grid;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
    }
  }
  .home_paragraph__container {
    display: grid;
    .logos {
      width: 10%;
      svg {
        width: 100%;
      }
    }
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
              src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/58442718_2680115618671522_8475970164536377344_o.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-1.xx&oh=d476e025788f681b65147f7cc0ff62e2&oe=5D946722"
              alt="mypicture"
              height="200px"
              width="200px"
              className="home_img__image"
            />
          </div>
          <div className="home_paragraph__container">
            <div className="logos">{redux_logo()}</div>
            <div className="logos">
              <p>Box 1</p>
            </div>
            <div className="logos">
              <p>Box 1</p>
            </div>
            <div className="logos">
              <p>Box 1</p>
            </div>
            <div className="logos">
              <p>Box 1</p>
            </div>
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
