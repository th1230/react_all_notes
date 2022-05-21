import React, { Component } from "react";
import Detail from "./Detail";
import { Route, Link } from "react-router-dom";

export default class Message extends Component {
  state = {
    messageArr: [
      {
        id: "01",
        title: "消息1",
      },
      {
        id: "02",
        title: "消息2",
      },
      {
        id: "03",
        title: "消息3",
      },
    ],
  };
  replaceShow = (id, title) => {
    // replace跳轉+協帶params參數
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // replace跳轉+協帶search參數
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

    // replace跳轉+協帶state參數
    this.props.history.replace(`/home/message/detail/`, { id, title });
  };

  pushShow = (id, title) => {
    // push跳轉+協帶params參數
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    // push跳轉+協帶search參數
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

    // push跳轉+協帶state參數
    this.props.history.push(`/home/message/detail/`, { id, title });
  };

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
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由組件傳遞params參數 */}
                {/* <Link
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </Link> */}
                {/* 向路由組件傳遞search參數 */}
                {/* <Link
                  to={`/home/message/detail/?id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </Link> */}
                {/* 向路由組件傳遞state參數 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: {
                      id: message.id,
                      title: message.title,
                    },
                  }}
                >
                  {message.title}
                </Link>
                &nbsp;&nbsp;
                <button
                  onClick={() => {
                    this.pushShow(message.id, message.title);
                  }}
                >
                  push查看
                </button>
                <button
                  onClick={() => {
                    this.replaceShow(message.id, message.title);
                  }}
                >
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 聲明接收params參數 */}
        {/* <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}

        {/* search參數無需聲明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state參數無需聲明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>

        <button onClick={this.goback}>回退</button>
        <button onClick={this.goforward}>前進</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
