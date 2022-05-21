import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from 'axios'

export default class Search extends Component {
  search = async () => {
    //獲取用戶的輸入(連續解構賦值+重命名)
    const {
      keyWordElement: { value: keyWord },
    } = this;
    //發送請求前通知List更新狀態
    PubSub.publish("atguigu", { isFirst: false, isLoading: true });
    //#region 發送網絡請求---使用axios發送
    /* axios.get(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				//請求成功後通知List更新狀態
				PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
			},
			error => {
				//請求失敗後通知App更新狀態
				PubSub.publish('atguigu',{isLoading:false,err:error.message})
			}
		) */
    //#endregion

    //發送網絡請求---使用fetch發送（未優化）
    /* fetch(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				console.log('聯繫服務器成功了');
				return response.json()
			},
			error => {
				console.log('聯繫服務器失敗了',error);
				return new Promise(()=>{})
			}
		).then(
			response => {console.log('獲取數據成功了',response);},
			error => {console.log('獲取數據失敗了',error);}
		) */

    //發送網絡請求---使用fetch發送（優化）
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`);
      const data = await response.json();
      console.log(data);
      PubSub.publish("atguigu", { isLoading: false, users: data.items });
    } catch (error) {
      console.log("請求出錯", error);
      PubSub.publish("atguigu", { isLoading: false, err: error.message });
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用戶</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="輸入關鍵詞點擊搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
