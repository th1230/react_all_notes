import React from "react";
import ReactDOM from "react-dom";

// 此為類式組件
/* class Demo extends React.Component {
  state = {
    count: 1,
  };

  myRef = React.createRef();

  add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  show = () => {
    alert(this.myRef.current);
  };

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>現在的總和是{count}</h1>
        <input ref={this.myRef} placeholder="請輸入內容" />
        <button onClick={this.add}>點我加1</button>
        <button onClick={this.unmount}>銷毀組件</button>
        <button onClick={this.show}>顯示輸入內容</button>
      </div>
    );
  }
} */

// 此為函數組件
function Demo() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState(",Mike");
  const myRef = React.useRef();

  function add() {
    // setCount第一種寫法，傳入新值
    // setCount(count + 1);
    // setCount第二種寫法，傳入函數(會獲取到當前的值，需返回一個新值)
    setCount((count) => {
      return count + 1;
    });
  }

  function changeName() {
    setName(name + "~");
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  function show() {
    alert(myRef.current.value);
  }

  React.useEffect(() => {
    // 當前的回調函數相當於生命週期函數中的componentDidMount()和componentDidUpdate()
    // 若有填寫第二個參數( [] )，且指定某個狀態，那麼只有當該狀態變動時會重新調用此回調，假如未指定狀態([]空array)，則只會執行初次渲染的一次
    let time = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // 返回的函數相當於componentWillUnmount()生命週期函數
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div>
      <h1>現在的總和是{count}</h1>
      <h2>我的名字式{name}</h2>
      <input ref={myRef} placeholder="請輸入內容" />
      <button onClick={add}>點我加1</button>
      <button onClick={changeName}>點我改名</button>
      <button onClick={unmount}>銷毀組件</button>
      <button onClick={show}>顯示輸入內容</button>
    </div>
  );
}

export default Demo;
