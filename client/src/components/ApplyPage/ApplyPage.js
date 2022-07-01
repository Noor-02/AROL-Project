import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from './ApplyPage.module.css'
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EducationalDetails from "../EducationalDetails/EducationalDetails";
import EmploymentDetails from "../EmploymentDetails/EmploymentDetails";

class ApplyPage extends Component {

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

export default ApplyPage;
