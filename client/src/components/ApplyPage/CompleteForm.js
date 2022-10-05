import React, { Component } from "react";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EducationalDetails from "../EducationalDetails/EducationalDetails";
import EmploymentDetails from "../EmploymentDetails/EmploymentDetails";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ReferenceDetails from "../ReferenceDetails/ReferenceDetails";
import QualifyingDetails from "../QualifyingDetails/QualifyingDetails";
// import Header from "../Header/Header";

class CompleteForm extends Component {
  render() {
    return (
      <div>
        <PersonalDetails />
        <EducationalDetails />
        <EmploymentDetails />
        <QualifyingDetails />
        <ProjectDetails />
        <ReferenceDetails />
      </div>
    );
  }
}

export default CompleteForm;
