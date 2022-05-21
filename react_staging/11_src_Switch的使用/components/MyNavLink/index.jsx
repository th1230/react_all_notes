import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    //   標籤體內容，一樣會透過props傳遞，其值會放在children屬性中
    console.log(this.props);
    return (
      <NavLink
        activeClassName="active"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
