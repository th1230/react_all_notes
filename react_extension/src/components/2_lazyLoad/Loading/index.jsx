import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          width: "300px",
          color: "orange",
          fontSize: "5rem",
          backgroundColor: "gray",
        }}
      >
        Loading....
      </div>
    );
  }
}
