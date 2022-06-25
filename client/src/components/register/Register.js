import { React, Component } from "react";
import classes from "./Register.module.css";
import { Button, Form } from 'react-bootstrap';
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class Register extends Component {
  state = {};

  loginInitiated = () => {
    this.props.history.push("/post-login");
  }
  render() {
    return <div className={classes.RegisterConatiner}>
      <div>
        <span className={classes.RegisterText}> REGISTER </span>
      </div>
      <div className={classes.FormDiv}>
        <Form.Group className="mb-3">
          <Form.Label className={classes.FormLabels}>Full Name</Form.Label>
          <Form.Control type="text" required />
          <Form.Label className={classes.FormLabels}>User Name</Form.Label>
          <Form.Control type="text" required />
          <Form.Label className={classes.FormLabels}>Password</Form.Label>
          <Form.Control type="text" required />
          <Form.Label className={classes.FormLabels}>Confirm Password</Form.Label>
          <Form.Control type="text" required />
          <Form.Label className={classes.FormLabels}>Phone Number</Form.Label>
          <Form.Control type="text" required />
          <Form.Label className={classes.FormLabels}>Email Id</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Button onClick={this.loginInitiated} className={classes.RegisterButton} size="lg" variant="outline-info">REGISTER</Button>{' '}
      </div>
    </div>;
  }
}

export default withRouter(Register);