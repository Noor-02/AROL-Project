import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from './ApplyPage.module.css'
import PersonalDetails from "../personalDetails/personalDetails";
import EducationalDetails from "../educationalDetails/educationalDetails";
import EmploymentDetails from "../employmentDetails/employmentDetails";

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
