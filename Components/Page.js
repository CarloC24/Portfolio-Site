import React from "react";
import styled from "styled-components";

const GlobalImage = styled.div``;

export default class extends React.Component {
  render() {
    return <GlobalImage>{this.props.children}</GlobalImage>;
  }
}
