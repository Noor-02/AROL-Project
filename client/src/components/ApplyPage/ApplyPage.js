import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from "./ApplyPage.module.css";
import PersonalDetails from "../personalDetails/personalDetails";
import EducationalDetails from "../educationalDetails/educationalDetails";
import EmploymentDetails from "../employmentDetails/employmentDetails";
import { Button, Card } from "react-bootstrap";

class ApplyPage extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} className={classes.Heading}>
          Admission to IIT Indore
        </Card>
        <div className={classes.Admissions}>
          <Button
            href="/post-login/complete-form"
            style={{ width: "18rem" }}
            className={classes.Heading}
            variant="dark"
          >
            MSc Program
          </Button>
          <Button
            href="/post-login/complete-form"
            style={{ width: "18rem" }}
            className={classes.Heading}
            variant="dark"
          >
            MTech Program
          </Button>
          <Button
            href="/post-login/complete-form"
            style={{ width: "18rem" }}
            className={classes.Heading}
            variant="dark"
          >
            MS Research Program
          </Button>
          <Button
            href="/post-login/complete-form"
            style={{ width: "18rem" }}
            className={classes.Heading}
            variant="dark"
          >
            PhD Program
          </Button>
        </div>
      </div>
    );
  }
}

export default ApplyPage;
