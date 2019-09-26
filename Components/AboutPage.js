import React, { Component } from "react";
import Link from "next/link";
import logosSwitch from "../assets/logosswitch";
import styled from "styled-components";
import FillButton from "../customcss/button";

const IntroContainer = styled.div`
  background-color: #003152;
  font-family: "Open Sans", sans-serif;
  display: grid;
  grid-template-rows: 1fr 100px 100px 210px 75px;
  justify-items: center;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 100px 100px 300px 75px;
  }
  .intro-pic {
    width: 25%;
    margin: 1rem;
    border: 5px solid white;
    border-radius: 50%;
  }
  .name-heading {
    margin: 20px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
  }
  .description {
    text-align: center;
    font-size: 1.3rem;
    color: white;
    font-style: italic;
  }
  .about-container {
    width: 30%;
    p {
      color: white;
      font-weight: 100;
      text-align: center;
      line-height: 1.6;
    }
    @media (max-width: 1000px) {
      width: 80%;
    }
  }
  .about-logos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    img {
      width: 50px;
    }
  }
`;

export class AboutPage extends Component {
  render() {
    return (
      <IntroContainer>
        <img
          className="intro-pic"
          src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/58379527_2680115615338189_7794670604862357504_n.jpg?_nc_cat=102&_nc_oc=AQnrtpxw7TPlIo28gStXSsDpU2G29Mklw1-zwsyWZqvakbLdF24cgRo2b14SEpN_Psg&_nc_ht=scontent-dfw5-1.xx&oh=d65166c247e44089e5cd23cfc7128a63&oe=5DF7B80A"
        />
        <h1 className="name-heading">Carlo Clamucha</h1>
        <p className="description">
          Christian. Web Developer. Tech Enthusiast. Software Engineer.
          Basketball Player.
        </p>
        <div className="about-container">
          <p className="about">
            Hello! My name is Juan Carlo Clamucha and I love to working on cool
            ideas with people because developing software is fun and you learn
            alot everytime! Talking to people about software like how its built
            and how does it solve a problem always gets me excited and You can
            click this link to go to my contact page where I have everything
            listed if you want to talk about it!
          </p>
        </div>
        <Link href="/projects">
          <FillButton>
            <a class="fill-button">
              <span class="fill-button-hover">
                <span class="fill-button-text">Check My Projects</span>
              </span>
            </a>
          </FillButton>
        </Link>
        <div className="about-logos">
          {logosSwitch(
            "linkedIn",
            "https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          )}
          {logosSwitch("github", "https://github.com/CarloC24")}
          {logosSwitch(
            "resume",
            "https://resume.creddle.io/resume/fwoe7ya3wlk"
          )}
        </div>
      </IntroContainer>
    );
  }
}

export default AboutPage;
