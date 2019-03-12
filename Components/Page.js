import React from "react";
import styled from "styled-components";

const GlobalImage = styled.div`
  background-image: url("../static/backgroundimage.jpg");
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  color: white;
`;

export default class extends React.Component {
  render() {
    return <GlobalImage>{this.props.children}</GlobalImage>;
  }
}
