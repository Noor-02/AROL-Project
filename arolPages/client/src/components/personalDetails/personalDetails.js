import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class PersonalDetails extends Component {
  state = {};
  render() {
    return <div>This is personal details page</div>;
  }
}

export default withRouter(PersonalDetails);
