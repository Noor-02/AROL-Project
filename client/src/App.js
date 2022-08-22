import React, { Component } from "react";
import { ReactDOM } from "react";

import Login from "./components/Login/Login";
import HomePage from "./components/Home/HomePage";
import Register from "./components/Register/Register";
// import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// import EducationalDetails from "./components/EducationalDetails/EducationalDetails";
// import CompleteForm from "./components/ApplyPage/CompleteForm";
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
          {/* <<<<<<< HEAD
          <Route path="/projectDetails" component={ProjectDetails} />
          <Route path="/educationalDetails" component={EducationalDetails} />
          <Route path="/post-login" component={PostLogin} />
======= */}
          <Route path="/post-login" component={PostLogin} />
          {/* <Route path="/post-login/apply" exact component={ApplyPage} />
          <Route path="/post-login/completeForm" component={CompleteForm} /> */}
          {/* <Route path="/projectDetails" component={ProjectDetails} /> */}
          {/* <Route path="/educationalDetails" component={EducationalDetails} /> */}
          {/* >>>>>>> 57d7a528e8ef4155c6799d3087b289fbd70b7ebb */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
