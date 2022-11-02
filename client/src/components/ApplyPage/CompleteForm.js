import React, { Component } from "react";
import { Button } from "react-bootstrap";
import classes from "./ApplyPage.module.css"
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EducationalDetails from "../EducationalDetails/EducationalDetails";
import EmploymentDetails from "../EmploymentDetails/EmploymentDetails";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ReferenceDetails from "../ReferenceDetails/ReferenceDetails";
import QualifyingDetails from "../QualifyingDetails/QualifyingDetails";
import PreviewPage from "./PreviewPage"
// import Header from "../Header/Header";

class CompleteForm extends Component {
  state = {
    show: false,
  }

  showSet = (showVal) => {
    this.setState({
      show: showVal
    })
  }

  render() {
    return (
      <div>
        <PersonalDetails />
        <EducationalDetails />
        <EmploymentDetails />
        <QualifyingDetails />
        <ProjectDetails />
        <ReferenceDetails />
        <div className={classes.ButtonDiv}>
          <Button onClick={(e) => this.showSet(true)} className={classes.AddButton}>SAVE APPLICATION</Button>
        </div>
        {this.state.show ? <PreviewPage show={this.state.show} showSet={this.showSet} /> : null}
      </div>
    );
  }
}

export default CompleteForm;
