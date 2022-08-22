import React, { Component, Fragment } from "react";
import classes from "./PostLogin.module.css";
import { Button } from "react-bootstrap";
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class PostLoginHome extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.welcome}>WELCOME Name !!</div>
        <div className={classes.details}>
          <div className={classes.detailsElements}>Name:</div>
          <div className={classes.detailsElements}>User Name:</div>
          <div className={classes.detailsElements}>Phone Number:</div>
          <div className={classes.detailsElements}>Email ID:</div>
        </div>
      </div>
    );
  }
}

export default PostLoginHome;
