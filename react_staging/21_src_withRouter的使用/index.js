//引入react核心庫
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
//引入App
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
