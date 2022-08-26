import React, { Component } from "react";
import { ReactDOM } from "react";

import Login from "./components/Login/Login";
import HomePage from "./components/Home/HomePage";
import Register from "./components/Register/Register";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import QualifyingDetails from "./components/QualifyingDetails/QualifyingDetails";
import EducationalDetails from "./components/EducationalDetails/EducationalDetails";
import ReferenceDetails from "./components/ReferenceDetails/ReferenceDetails";
import Header from "./components/Header/Header";
import PostLogin from "./components/PostLogin/PostLogin";
// import ApplyPage from "./components/ApplyPage/ApplyPage";

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

          {/* <Route path="/post-login/apply" exact component={ApplyPage} />
          <Route path="/post-login/completeForm" component={CompleteForm} /> */}
          {/* <Route path="/projectDetails" component={ProjectDetails} /> */}
          {/* <Route path="/educationalDetails" component={EducationalDetails} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
