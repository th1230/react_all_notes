import React, { Component } from "react";

const DetailData = [
  { id: "01", content: "你好React" },
  { id: "02", content: "你好React!!!!!" },
  { id: "03", content: "你好React~~~~~" },
];

export default class index extends Component {
  render() {
    const { id, title } = this.props.match.params;

    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id;
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
