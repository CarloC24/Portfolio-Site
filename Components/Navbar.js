import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Appbar = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  .namecontainer {
    width: 30%;
    height: 100px;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    display: grid;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
      font-family: "radnika_next";
      font-weight: 500;
      font-size: 30px;
    }
  }
  .dropdowncontainer {
    display: grid;
    align-items: center;
    width: 100%;
    height: 70px;
    justify-items: end;
    .dropdown {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      p {
        font-size: 20px;
        font-family: "Roboto";
        color: white;
      }
      .dropdownicon {
        text-align: center;
      }
    }
  }
`;

export class Navbar extends Component {
  state = {
    dropdownOpen: false
  };
  render() {
    return (
      <Appbar>
        <div className="dropdowncontainer">
          <div className="dropdown">
            <p>Menu</p>
            <p className="dropdownicon">&equiv;</p>
            {this.state.dropdownOpen && (
              <div>
                <p>Im open</p>
              </div>
            )}
          </div>
        </div>
        <div className="namecontainer">
          <h1> Welcome</h1>
        </div>
      </Appbar>
    );
  }
}

export default Navbar;
