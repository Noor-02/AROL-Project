import React, { Component } from "react";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EducationalDetails from "../EducationalDetails/EducationalDetails";
import EmploymentDetails from "../EmploymentDetails/EmploymentDetails";
import Header from "../Header/Header";

class CompleteForm extends Component {
  render() {
    return (
      <div>
        <PersonalDetails />
        <EducationalDetails />
        <EmploymentDetails />
      </div>
    );
  }
}

export default CompleteForm;
