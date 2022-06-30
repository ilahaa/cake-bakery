import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AppRouters from "./routers/AppRouters";
import "./sass/style.css";
// import Basic from "./basic/Basic";

class App extends Component {
  render() {
    return (
      <div>
        <AppRouters />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));