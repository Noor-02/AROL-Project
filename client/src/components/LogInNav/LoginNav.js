import React, { Component } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import classes from "./LoginNav.module.css";
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class LoginNav extends Component {
  state = {
    name: "Full Name",
    username: "appicant1",
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="sm" className={classes.Navbar}>
          <Container fluid>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(0)}
              >
                Home
              </button>
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(4)}
              >
                Personal Details
              </button>
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(5)}
              >
                Educational Details
              </button>
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(1)}
              >
                Employment Details
              </button>
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(3)}
              >
                Applications
              </button>
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(6)}
              >
                Apply
              </button>
              <button
                className={classes.NavLink}
                onClick={() => this.props.onNavigationItemClick(2)}
              >
                Change Password
              </button>
              <button
                className={classes.LastNavLink}
                onClick={() => this.props.onNavigationItemClick(7)}
              >
                Log-Out
              </button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(LoginNav);
