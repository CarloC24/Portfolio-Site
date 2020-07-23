import React, { Component } from "react";
import Styled from "styled-components";

const ProfileContainer = Styled.div`
background:aliceblue;
padding:2rem 5rem;
font-family: 'Roboto', sans-serif;


.headline {
  font-size:3rem;
}

.intro {
font-size:1.5rem;
}
`;

export default class Profile extends Component {
  render() {
    return (
      <ProfileContainer>
        <p className="text-center font-weight-bold headline">Hello I'm Carlo</p>
        <p className="text-center font-weight-light intro mt-4">
          I am a young software engineer that is curious and always looking for
          something new to learn
        </p>
      </ProfileContainer>
    );
  }
}
