import React, { Component } from "react";
import classes from "./Login.module.css"
import { Button, Form } from 'react-bootstrap';
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class Login extends Component {
  state = {
    email: "",
    pwd: "",
    passwordType: "password"
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

  showHidePassword = () => {
    if (this.state.passwordType === "password") {
      this.setState({ passwordType: "text" })
    }
    else {
      this.setState({ passwordType: "password" })
    }
  }

  loginInitiated = () => {
    let data = { email: this.state.email, password: this.state.pwd }
    ResourceAPIController.UserLogin(data).then(response => {
      console.log(response);
      this.props.history.push("/post-login");
    })
      .catch(error => {
        alert("Incorrect Username or Password");
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
            <div className={classes.TogglePassword}>
              <Form.Control name="pwd" type={this.state.passwordType} className={classes.Password} required onChange={(e) => this.inputFieldHandler(e)} />
              <button className={classes.Button} onClick={this.showHidePassword}>
                {this.state.passwordType === "password" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>}
              </button>
            </div>
          </Form.Group>
          <Button onClick={this.loginInitiated} className={classes.LoginButton} size="lg" variant="outline-info">LOGIN</Button>
        </div>
      </div>
    </div>;
  }
}

export default withRouter(Login);

