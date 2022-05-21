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
                    pathname: `/home/message/detail`,
                    state: {
                      id: message.id,
                      title: message.title,
                    },
                  }}
                >
                  {message.title}
                </Link>
                &nbsp;&nbsp;
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
      </div>
    );
  }
}
