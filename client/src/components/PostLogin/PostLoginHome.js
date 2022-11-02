import React, { Component, Fragment } from "react";
import classes from "./PostLogin.module.css";
import { Button } from "react-bootstrap";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { IsStringEmpty } from "../../utilities/CommonMethods";

class PostLoginHome extends Component {
  state = {
    details: []
  }
  componentDidMount = () => {
    ResourceAPIController.GetPersonalDetails().then(response => {
      this.setState({
        details: response.result.results[0],
        // console.log(this.details)
      })
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  };
  render() {
    console.log(this.state.details);
    return (
      <div className={classes.container}>
        <div className={classes.welcome}>WELCOME {this.state.details ? this.state.details.fullName : null} !!</div>
        <div className={classes.details}>
          {this.state.details && !IsStringEmpty(this.state.details.fullName) ? <div className={classes.detailsElements}>Name: {this.state.details.fullName}</div> : null}
          {
            this.state.details && !IsStringEmpty(this.state.details.contactNumber) ?
              <div className={classes.detailsElements}>Phone Number: {this.state.details.contactNumber}</div>
              : null
          }
          <div className={classes.detailsElements}>Email ID:  {this.state.details ? this.state.details.fullName : null}</div>
        </div>
      </div>
    );
  }
}

export default PostLoginHome;
