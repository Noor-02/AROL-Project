import React, { Component } from "react";
import classes from "./Login.module.css"
import { Button, Form } from 'react-bootstrap';
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class Login extends Component {
  state = {};
  render() {
    return <div className={classes.LoginContainer}>
      <div>
        <span className={classes.LoginText}> LOGIN </span>
      </div>
      <div className={classes.FormDiv}>
        <Form.Group className="mb-3">
          <Form.Label className={classes.FormLabels}>User Name</Form.Label>
          <Form.Control type="text" required />
          <Form.Label className={classes.FormLabels}>Password</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Button className={classes.LoginButton} size="lg" variant="outline-info">LOGIN</Button>
      </div>
    </div>;
  }
}

export default withRouter(Login);

