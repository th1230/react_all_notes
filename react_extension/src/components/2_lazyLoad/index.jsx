import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
// Loading是在Home和About還未異步請求回來時，先顯示的組件，所以不行使用lazyloading
import Loading from "./Loading";

// import Home from "./Home";
// import About from "./About";

// 使用懶加載獲取Home和About
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class Demo extends Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8"></div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading />}>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
