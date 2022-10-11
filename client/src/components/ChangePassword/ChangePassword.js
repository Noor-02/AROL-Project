import React from "react";
import { Component } from "react";
import classes from "./ChangePassword.module.css";
import { Button, Form } from "react-bootstrap";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { ChangePasswordParser } from '../../WebServices/DataParser'

class ChangePassword extends Component {
  state = {
    oldPassword: "",
    newPassword: "",
    newPassword2: ""
  }

  onChange = (val, label) => {
    this.setState((prevState) => {
      let stateVal = prevState;
      stateVal[label] = val;
      return {
        ...stateVal,
      };
    });
  }

  ChangePassword = () => {
    let data = ChangePasswordParser(this.state);
    console.log("API CHANGE PASSWORD DETAILS =>", data);
    ResourceAPIController.ChangePassword(data).then(response => {
      console.log("CHANGE PASSWORD FOR POST API CALL=> ", response);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  }

  render() {
    return (
      <div className={classes.LoginContainer}>
        <div>
          <span className={classes.LoginText}> Change Password </span>
        </div>
        <div className={classes.FormDiv}>
          <Form.Group className="mb-3">
            <Form.Label className={classes.FormLabels}>Old Password</Form.Label>
            <Form.Control type="text" required onChange={(e) => this.onChange(e.target.value, "oldPassword")} />
            <Form.Label className={classes.FormLabels}>New Password</Form.Label>
            <Form.Control type="text" required onChange={(e) => this.onChange(e.target.value, "newPassword")} />
            <Form.Label className={classes.FormLabels}>
              Confirm New Password
            </Form.Label>
            <Form.Control type="text" required onChange={(e) => this.onChange(e.target.value, "newPassword2")} />
          </Form.Group>
          <Button
            onClick={this.ChangePassword}
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
