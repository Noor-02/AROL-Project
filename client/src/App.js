import React, { Component } from "react";
import { ReactDOM } from "react";
import Login from "./components/login/login";
import HomePage from "./components/home/HomePage";
import Register from "./components/register/Register";
import PersonalDetails from "./components/personalDetails/personalDetails";
import ProjectDetails from "./components/projectDetails/projectDetails";
import EducationalDetails from "./components/educationalDetails/educationalDetails";
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
          <Route path="/personalDetails" component={PersonalDetails} />
          <Route path="/projectDetails" component={ProjectDetails} />
          <Route path="/educationalDetails" component={EducationalDetails} />
          <Route path="/post-Login" component={PostLogin} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
