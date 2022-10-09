import { React, Component } from "react";
import classes from "./Register.module.css";
import { Button, Form } from "react-bootstrap";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class Register extends Component {
  state = {
    fullName: "",
    email: "",
    pwd: "",
    confirmPwd: "",
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
    let data = { email: this.state.email, full_name: this.state.fullName, password1: this.state.pwd, password2: this.state.confirmPwd }
    ResourceAPIController.UserRegistration(data).then(response => {
      // console.log(response.data);
      alert("A verification email has been sent to your registered account. Verfiy account to log in.")
      this.props.history.push("");
    })
      .catch(error => {
        console.log("Failed =>", error);
        if (error.err.request.response === "{\"error\":[\"This password is too common.\"]}") {
          alert("This password is too common. Try another one.")
        }
      })
  }

  render() {
    return (
      <div className={classes.MainContainer}>
        <div className={classes.RegisterConatiner}>
          <div>
            <span className={classes.RegisterText}> REGISTER </span>
          </div>
          <div className={classes.FormDiv}>
            <Form.Group className="mb-3">
              <Form.Label className={classes.FormLabels}>Full Name</Form.Label>
              <Form.Control name="fullName" onChange={(e) => this.inputFieldHandler(e)} type="text" required />
              <Form.Label className={classes.FormLabels}>Email Id</Form.Label>
              <Form.Control name="email" onChange={(e) => this.inputFieldHandler(e)} type="text" required />
              <Form.Label className={classes.FormLabels}>Password</Form.Label>
              <p style={{ fontSize: "0.7rem" }}> Password must be of minimum 8 characters and contain atleast one number and one letter</p>
              <div className={classes.TogglePassword}>
                <Form.Control className={classes.Password} name="pwd" onChange={(e) => this.inputFieldHandler(e)} type={this.state.passwordType} required />
                <button className={classes.Button} onClick={this.showHidePassword}>
                  {this.state.passwordType === "password" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                  </svg>}
                </button>
              </div>
              <Form.Label className={classes.FormLabels}>
                Confirm Password
              </Form.Label>
              <Form.Control name="confirmPwd" onChange={(e) => this.inputFieldHandler(e)} type="text" required />
            </Form.Group>
            <Button
              onClick={this.loginInitiated}
              className={classes.RegisterButton}
              size="lg"
              variant="outline-info"
            >
              REGISTER
            </Button>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
