import React, { Component } from "react";
import styled from "styled-components";
import { redux_logo } from "../assets/logos";

const HomeContainer = styled.div`
  background: ${props => props.theme.babypowder};
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 40px;
  img {
    margin-top: 50px;
  }
  h1 {
    font-family: "Roboto";
    font-weight: 100;
  }
  .textcontainer {
    width: 70%;
    font-family: "Noto Serif", serif;
    font-size: 15px;
    line-height: 1.4;
    word-break: break-word;
    text-align: center;
    p {
      word-spacing: 5px;
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
          <img
            src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/58442718_2680115618671522_8475970164536377344_o.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-1.xx&oh=d476e025788f681b65147f7cc0ff62e2&oe=5D946722"
            alt="mypicture"
            height="200px"
            width="200px"
            className="home_img__image"
          />
          <h1>Hi! I am Carlo, Nice to meet you</h1>
          <div className="textcontainer">
            <p>
              I am a web developer out of texas and currently looking for a job
              in software development/web development. I recently studied
              computer science in my local community college and made a switch
              and tried to get in lambda school and the rest is history! Now I
              am a graduate of their computer science/web development course. I
              love developing applications and learning new technologies! I am
              currently proficient at HTML, CSS3, Javascript, React, VueJS,
              NodeJS, MongoDB, Prisma, GraphQL, Django and I studied computer
              science fundamentals using Python and C.
            </p>
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
