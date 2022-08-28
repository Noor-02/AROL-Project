import React, { Component } from "react";
import classes from "./Login.module.css"
import { Button, Form } from 'react-bootstrap';
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class Login extends Component {
  state = {
    email: "",
    pwd: ""
  };

  inputFieldHandler = (event) => {
    this.setState((prevState) => {
      let stateVal = prevState;
      stateVal[event.target.name] = event.target.value;
      return {
        ...stateVal,
      };
    });
  }

  loginInitiated = () => {
    let data = { email: this.state.email, password: this.state.pwd }
    ResourceAPIController.UserLogin(data).then(response => {
      console.log(response);
      this.props.history.push("/post-login");
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  }
  render() {
    return <div className={classes.MainContainer} >
      <div className={classes.LoginContainer}>
        <div>
          <span className={classes.LoginText}> LOGIN </span>
        </div>
        <div className={classes.FormDiv}>
          <Form.Group className="mb-3">
            <Form.Label className={classes.FormLabels}>User Email</Form.Label>
            <Form.Control name="email" type="text" required onChange={(e) => this.inputFieldHandler(e)} />
            <Form.Label className={classes.FormLabels} >Password</Form.Label>
            <Form.Control name="pwd" type="text" required onChange={(e) => this.inputFieldHandler(e)} />
          </Form.Group>
          <Button onClick={this.loginInitiated} className={classes.LoginButton} size="lg" variant="outline-info">LOGIN</Button>
        </div>
      </div>
    </div>;
  }
}

export default withRouter(Login);

