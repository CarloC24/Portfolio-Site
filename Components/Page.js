import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
`;

export default class extends React.Component {
  render() {
    return <PageContainer>{this.props.children}</PageContainer>;
  }
}
