import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  goback = () => {
    this.props.history.goBack();
  };

  goforward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go(2);
  };

  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.goback}>回退</button>
        <button onClick={this.goforward}>前進</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default withRouter(Header);
