import React, { Component } from "react";
import { ReactDOM } from "react";
import Login from "./components/login/login";
import HomePage from "./components/home/HomePage";
import Register from "./components/register/Register";
import PersonalDetails from "./components/personalDetails/personalDetails";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import QualifyingDetails from "./components/QualifyingDetails/QualifyingDetails";
import EducationalDetails from "./components/educationalDetails/educationalDetails";
import ReferenceDetails from "./components/ReferenceDetails/ReferenceDetails";
import Header from "./components/Header/Header"
import PostLogin from "./components/postLogin/postLogin";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/projectDetails" component={ProjectDetails} />
          <Route path="/qualifyingDetails" component={QualifyingDetails} />
          <Route path="/referenceDetails" component={ReferenceDetails} />
          <Route path="/educationalDetails" component={EducationalDetails} />
          <Route path="/post-login" component={PostLogin} />

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
