import React, { Component, Fragment } from "react";
import classes from './PersonalDetails.module.css'
import { ReactDOM } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";

class PersonalDetails extends Component {
  state = {
    admissionYear: "",
    typeOfApplicant: "",
    fullName: "",
    fatherSpouseName: "",
    dob: "",
    gender: "",
    caste: "",
    maritalStatus: "",
    contactNumber: "",
    parentConatct: "",
    nationality: "",
    pwd: "",
    typeOfDisability: "",
    correspondanceAddress: [{ address: "", state: "", city: "", pinCode: "" }],
    permanentAddress: [{ address: "", state: "", city: "", pinCode: "" }],
    optionList: ["Indian Applicant", "Foreign Applicant"],
    casteList: ["GEN", "SC", "ST", "OBC", "Other"],
    maritalList: ["Married", "Not Married"],
    disabilityList: ["Yes", "No"]
  };

  onChange = (val, label) => {
    this.setState((prevState) => {
      let stateVal = prevState;
      stateVal[label] = val;
      return {
        ...stateVal,
      };
    });
  }

  render() {
    return (
      <div className={classes.ContainerDiv}>
        <div className={classes.TopContainer}>
          <div className={classes.TopLeftDiv}>
            <div className={classes.Row}>
              <Form.Group className={classes.AdmissionInput}>
                <Form.Label className={classes.FormLabels}>
                  Admission For The Year
                </Form.Label>
                <Form.Control
                  value={this.state.admissionYear}
                  onChange={(e) =>
                    this.onChange(e.target.value, "admissionYear")
                  }
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className={classes.TypeOfApplicantInput}>
                <Form.Label className={classes.FormLabels}>
                  Type Of Applicant
                </Form.Label>
                <Form.Select onChange={(e) => this.onChange(e.target.value, "typeOfApplicant")}>
                  {this.state.optionList.map((item, index) => {
                    return (
                      <option
                        key={index}>
                        {item}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.FatherSpouseNameInout}>
                <Form.Label className={classes.FormLabels}>
                  Father's/Spouse Name
                </Form.Label>
                <Form.Control
                  value={this.state.fatherSpouseName}
                  onChange={(e) =>
                    this.onChange(e.target.value, "fatherSpouseName")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.CasteInput}>
                <Form.Label className={classes.FormLabels}>
                  Caste Category
                </Form.Label>
                <Form.Select onChange={(e) => this.onChange(e.target.value, "caste")}>
                  {this.state.casteList.map((item, index) => {
                    return (
                      <option
                        key={index}>
                        {item}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className={classes.MaritalStatusInput}>
                <Form.Label className={classes.FormLabels}>
                  Marital Status
                </Form.Label>
                <Form.Select onChange={(e) => this.onChange(e.target.value, "maritalStatus")}>
                  {this.state.maritalList.map((item, index) => {
                    return (
                      <option
                        key={index}>
                        {item}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.NationalityInput}>
                <Form.Label className={classes.FormLabels}>
                  Nationality
                </Form.Label>
                <Form.Control
                  value={this.state.nationality}
                  onChange={(e) =>
                    this.onChange(e.target.value, "nationality")
                  }
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className={classes.PwdInput}>
                <Form.Label className={classes.FormLabels}>
                  Person With Disablity (PwD)
                </Form.Label>
                <Form.Select onChange={(e) => this.onChange(e.target.value, "pwd")}>
                  {this.state.disabilityList.map((item, index) => {
                    return (
                      <option
                        key={index}>
                        {item}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          <div className={classes.TopRightDiv}>

          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default withRouter(PersonalDetails);
