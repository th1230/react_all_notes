import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    /*    
     // 對象式setState
    // 1. 獲取count直
    const { count } = this.state;
    // 2. 更新狀態
    this.setState({ count: count + 1 }, () => {
      // 此回調函數會再count異步完成更新後調用
      // react的setState是採用異步的方式，等待主要程序完成執行後才執行更新
      console.log(count);
    });
    // 在此處得count由於異步更新，值還並沒有改變
    console.log(count);
    */

    // 函數式setState
    this.setState(
      (state, props) => {
        // 函數式的setState可以獲得state和props直接使用
        console.log(state, props);

        return { count: state.count + 1 };
      },
      () => {
        // 此處回調同上
      }
    );
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>當前的總和是:{count}</h1>
        <button onClick={this.add}>點擊總和加1</button>
      </div>
    );
  }
}
