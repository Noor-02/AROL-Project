import React, { Component, Fragment } from "react";
import classes from "./PostLogin.module.css";
import { Button } from "react-bootstrap";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class PostLoginHome extends Component {
  state = {
    projectList: []
  }
  componentDidMount = () => {
    ResourceAPIController.GetPersonalDetails().then(response => {
      this.setState({
        projectList: response.result.results[0],
        // console.log(this.projectList)
      })
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  };
  render() {
    console.log(this.state.projectList);
    return (
      <div className={classes.container}>
        <div className={classes.welcome}>WELCOME {this.state.projectList.fullName} !!</div>
        <div className={classes.details}>
          <div className={classes.detailsElements}>Name: {this.state.projectList.fullName}</div>
          {/* <div className={classes.detailsElements}>User Name:  {this.state.projectList.fullName}</div> */}
          <div className={classes.detailsElements}>Phone Number:  {this.state.projectList.contactNumber}</div>
          {/* <div className={classes.detailsElements}>Email ID:  {this.state.projectList.fullName}</div> */}
        </div>
      </div>
    );
  }
}

export default PostLoginHome;
