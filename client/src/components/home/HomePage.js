import React, { Component, Fragment } from "react";
import classes from "./HomePage.module.css"
import { Button } from 'react-bootstrap';
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class HomePage extends Component {
  state = {};
  render() {
    return <div className={classes.HomeContainer}>
      <div className={classes.ButtonContainer}>
        <Button className={classes.LoginButton} size="lg" variant="outline-info">LOGIN</Button>{' '}
        <Button className={classes.RegisterButton} size="lg" variant="outline-info">REGISTER</Button>{' '}
      </div>
    </div>;
  }
}

export default withRouter(HomePage);
