import React, { Component } from "react";

class CustomArrow extends Component {
  render() {
    const { className, style, onClick } = this.props;

    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "none" }}
      ></div>
    );
  }
}

export { CustomArrow };
