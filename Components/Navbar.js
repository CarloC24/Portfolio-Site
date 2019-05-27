import React, { Component } from "react";
import styled from "styled-components";

// const Appbar = styled.div`
//   display: grid;
//   grid-gap: 20px;
//   grid-template-rows: repeat(2, 1fr);
//   justify-items: center;
//   margin: 20px 0;
//   .namecontainer {
//     width: 40%;
//     height: 120px;
//     border-top: 5px solid ${props => props.theme.offWhite};
//     border-bottom: 5px solid ${props => props.theme.offWhite};
//     display: grid;
//     justify-content: center;
//     align-content: center;
//     align-items: center;
//     color: ${props => props.theme.offWhite};

//     h1 {
//       font-family: "radnika_next";
//       font-weight: 500;
//       font-size: 30px;
//     }
//   }
//   .dropdowncontainer {
//     display: grid;
//     align-items: center;
//     width: 100%;
//     height: 70px;
//     justify-items: end;
//     .dropdown {
//       display: grid;
//       width: 25%;
//       grid-gap: 20px;
//       justify-content: space-around;
//       position: absolute;
//       grid-template-columns: repeat(2, 1fr);
//       a {
//         font-size: 20px;
//         font-family: "Roboto";
//         color: ${props => props.theme.offWhite};
//       }
//       a:active {
//         border-bottom: 2px solid black;
//       }
//       .dropdownicon {
//         text-align: center;
//         color: ${props => props.theme.offWhite};
//       }
//     }
//   }
// `;
const Appbar = styled.div`
  display: grid;
  justify-items: center;
  .namecontainer {
    border-bottom: 5px solid ${props => props.theme.offWhite};
    text-align: center;
    font-family: "radnika_next";
    font-size: 20px;
    width: 40%;
    h1 {
      color: ${props => props.theme.offWhite};
    }
  }
  .link-container {
    margin-top: 20px;
    font-size: 25px;
    color: ${props => props.theme.offWhite};
    a {
      text-decoration: none;
      font-family: "Roboto";
      padding: 0 10px;
      color: ${props => props.theme.offWhite};
    }
  }
`;

export class Navbar extends Component {
  render() {
    return (
      <Appbar>
        <div className="namecontainer">
          <h1>Carlo Clamucha</h1>
        </div>
        <div className="link-container">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/"
          >
            LinkedIn
          </a>
          |
          <a target="_blank" href="https://github.com/CarloC24">
            Github
          </a>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
