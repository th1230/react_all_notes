import React, { Component, Fragment } from "react";

export default class Demo extends Component {
  render() {
    return (
      <Fragment key={1}>
        <input type="text" placeholder="第一行的輸入框" />
        <input type="text" placeholder="第二行的輸入框" />
      </Fragment>
    );
  }
}
