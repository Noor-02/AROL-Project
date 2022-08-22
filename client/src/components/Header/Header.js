import React, { Component, Fragment } from "react";
import classes from "./Header.module.css";
import { Button, Navbar, Container } from "react-bootstrap";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import Logo from "../../../src/logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Navbar
          expand="lg"
          bg="#e6f8ff"
          variant="light"
          className={classes.Navbar}
        >
          <Container>
            <Navbar.Brand href="/">
              <div className={classes.LeftContainer}>
                <img
                  alt=""
                  src={Logo}
                  width="100"
                  height="100"
                  className="align-top"
                />{" "}
                <div>
                  <span className={classes.InstiName}>
                    Indian Institute of Technology Indore
                  </span>
                  <br />
                  <span className={classes.HeadingName}>Admissions</span>
                </div>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default withRouter(Header);
