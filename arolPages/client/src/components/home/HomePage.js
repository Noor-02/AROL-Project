import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class HomePage extends Component {
  state = {};
  render() {
    return <div>This is home page</div>;
  }
}

export default withRouter(HomePage);
