import React, { Component } from "react";
import Styled from "styled-components";

const ProfileContainer = Styled.div`
p,b {
    font-size:30px;
}
`;

export default class Profile extends Component {
  render() {
    return (
      <ProfileContainer>
        <b>Hello I'm Carlo</b>
        <p>I am a software engineer</p>
      </ProfileContainer>
    );
  }
}
