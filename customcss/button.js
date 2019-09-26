import styled from "styled-components";

export default styled.div`
  .fill-button {
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 200px;
    height: 30px;
    border: 1px solid #35495e;
    text-align: center;
    box-sizing: border-box;
    color: #42b883;
    text-decoration: none;
    cursor: pointer;
    line-height: 28px;
    font-family: "arial";
    border-radius: 4px;
  }
  .fill-button > span {
    display: block;
  }
  .fill-button > .fill-button-hover:after,
  .fill-button > .fill-button-hover:before {
    position: absolute;
    top: 0;
    opacity: 0;
    display: block;
    content: "";
    width: 0;
    height: 30px;
  }
  .fill-button > .fill-button-hover:after {
    background-color: #35495e;
    transform: skewX(45deg);
    transform-origin: center center;
    transition: all 0.35s, opacity 0.4s;
    left: 50%;
  }
  .fill-button .fill-button-hover:before {
    background-color: #42b883;
    transition: opacity 1s;
  }

  .fill-button .fill-button-text {
    z-index: 1;
    position: relative;
    color: #42b883;
    transition: color 0.35s;
  }
  .fill-button:hover .fill-button-text {
    color: #42b883;
  }
  .fill-button .fill-button-hover:hover:after {
    opacity: 1;
    left: 2%;
    width: 95%;
    transform: skewX(45deg);
  }
  .fill-button > .fill-button-hover:hover:before {
    opacity: 1;
    left: 0;
    width: 100%;
  }
`;
