import React from "react";
import styled from "styled-components";
import Snackbar from "./Snackbar";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <PageContainer>
        <Snackbar />
        {this.props.children}
      </PageContainer>
    );
  }
}
