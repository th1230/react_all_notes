import React, { Component } from "react";
// const qs = require("query-string");

const DetailData = [
  { id: "01", content: "你好React" },
  { id: "02", content: "你好React!!!!!" },
  { id: "03", content: "你好React~~~~~" },
];

export default class index extends Component {
  render() {
    // 接收params參數
    // const { id, title } = this.props.match.params;

    // 接收search參數
    // const { search } = this.props.location;
    // const searchObj = qs.parse(search);
    // const { id, title } = searchObj;

    // 接收state參數
    console.log(this.props);
    const { id, title } = this.props.location.state || {};

    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id || {};
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
