import React from "react";
import { Component } from "react";
import classes from "./ChangePassword.module.css";
import { Button, Form } from "react-bootstrap";

class ChangePassword extends Component {
  render() {
    return (
      <div className={classes.LoginContainer}>
        <div>
          <span className={classes.LoginText}> Change Password </span>
        </div>
        <div className={classes.FormDiv}>
          <Form.Group className="mb-3">
            <Form.Label className={classes.FormLabels}>Old Password</Form.Label>
            <Form.Control type="text" required />
            <Form.Label className={classes.FormLabels}>New Password</Form.Label>
            <Form.Control type="text" required />
            <Form.Label className={classes.FormLabels}>
              Confirm New Password
            </Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Button
            onClick={this.loginInitiated}
            className={classes.LoginButton}
            size="md"
            variant="outline-info"
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
