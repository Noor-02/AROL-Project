import React, { Component, Fragment } from "react";
import classes from "./HomePage.module.css";
import { Button } from "react-bootstrap";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
// import Backgroud from "../../../src/background.jpg";

class HomePage extends Component {
  state = {};

  loginClicked = () => {
    this.props.history.push("/login");
  };

  registerClicked = () => {
    this.props.history.push("/register");
  };
  render() {
    return (
      <div className={classes.HomeContainer}>
        <div className={classes.ButtonContainer}>
          <Button
            onClick={this.loginClicked}
            className={classes.LoginButton}
            size="lg"
            variant="outline-info"
          >
            LOGIN
          </Button>
          <Button
            onClick={this.registerClicked}
            className={classes.RegisterButton}
            size="lg"
            variant="outline-info"
          >
            REGISTER
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
