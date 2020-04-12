import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
