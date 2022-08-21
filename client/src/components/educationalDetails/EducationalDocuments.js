import React, { Component } from "react";
import classes from './EducationalDetails.module.css'
import { ReactDOM } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { IsListEmpty } from "../../utilities/CommonMethods";

class EducationalDocuments extends Component {

    render() {
        return <div className={classes.DocTableDiv}>
            <h2 className={classes.MainHeading}>EDUCATIONAL DOCUMENTS</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Examination</th>
                        <th>Document Name</th>
                        <th>Name of Examination Passed</th>
                        <th>Document (Only .JPEG, .JPG, .PNG files with size less than 1MB)</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    }
}

export default EducationalDocuments;