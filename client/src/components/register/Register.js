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
    confirmPwd: ""
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
    let data = { email: this.state.email, full_name: this.state.fullName, password1: this.state.pwd, password2: this.state.confirmPwd }
    ResourceAPIController.UserRegistration(data).then(response => {
      console.log(response.data);
      this.props.history.push("/post-login");
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  }

  render() {
    return (
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
            <Form.Control name="pwd" onChange={(e) => this.inputFieldHandler(e)} type="text" required />
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
    );
  }
}

export default withRouter(Register);
