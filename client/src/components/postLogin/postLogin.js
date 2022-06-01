import React, { Component } from "react";
import { Navbar, Container, Offcanvas, Nav, Form, Button, FormControl } from 'react-bootstrap';
import classes from "./PostLogin.module.css"
import { ReactDOM } from "react";
import { withRouter } from "react-router";

class PostLogin extends Component {
  state = {
    name: "Full Name",
    username: "appicant1",
  };
  render() {
    return <div>
      <Navbar bg="dark" expand="sm" className={classes.Navbar}>
        <Container fluid>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className={classes.NavLink} href="/">Personal Details</Nav.Link>
            <Nav.Link className={classes.NavLink} href="/">Applications</Nav.Link>
            <Nav.Link className={classes.NavLink} href="/">Change Password</Nav.Link>
            <Nav.Link className={classes.NavLink} href="/">Log-Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div >;
  }
}

export default withRouter(PostLogin);
