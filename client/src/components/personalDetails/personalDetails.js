import React, { Component, Fragment } from "react";
import classes from './PersonalDetails.module.css'
import { ReactDOM } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";

class PersonalDetails extends Component {
  state = {
    admissionYear: "",
    typeOfApplicant: "Foreign Applicant",
    fullName: "",
    fatherSpouseName: "",
    dob: "",
    gender: "Male",
    caste: "GEN",
    maritalStatus: "Married",
    contactNumber: "",
    parentConatct: "",
    nationality: "",
    pwd: "No",
    typeOfDisability: "",
    correspondanceAddress: { address: "", state: "", city: "", pinCode: "" },
    permanentAddress: { address: "", state: "", city: "", pinCode: "" },
    addressSame: false,
    optionList: ["Indian Applicant", "Foreign Applicant"],
    casteList: ["GEN", "SC", "ST", "OBC", "Other"],
    maritalList: ["Married", "Not Married"],
    disabilityList: ["Yes", "No"],
    genderList: ["Male", "Female", "Other"]
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

  onAddressChange = (val, label, addressType) => {
    let tempAddress = this.state[addressType];
    tempAddress[label] = val;
    if (addressType === "correspondanceAddress") {
      this.setState({
        correspondanceAddress: tempAddress
      })
    }
    else {
      this.setState({
        permanentAddress: tempAddress
      })
    }
  }

  checkBoxClicked = () => {
    let temp = !this.state.addressSame;
    this.setState({
      addressSame: temp
    })
  }

  render() {
    return (
      <div className={classes.ContainerDiv}>
        <div className={classes.HorizontalSections}>
          <div className={classes.Sections}>
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
                <Form.Select value={this.state.typeOfApplicant} onChange={(e) => this.onChange(e.target.value, "typeOfApplicant")}>
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
              <Form.Group className={classes.NameInputWidth}>
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
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Caste Category
                </Form.Label>
                <Form.Select value={this.state.caste} onChange={(e) => this.onChange(e.target.value, "caste")}>
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
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Marital Status
                </Form.Label>
                <Form.Select value={this.state.maritalStatus} onChange={(e) => this.onChange(e.target.value, "maritalStatus")}>
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
              <Form.Group className={classes.InputWidthSet}>
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
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Person With Disablity (PwD)
                </Form.Label>
                <Form.Select value={this.state.pwd} onChange={(e) => this.onChange(e.target.value, "pwd")}>
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
          <div className={classes.Sections}>
            <div className={classes.Row}>
              <Form.Group className={classes.NameInputWidth}>
                <Form.Label className={classes.FormLabels}>
                  Full Name
                </Form.Label>
                <Form.Control
                  value={this.state.fullName}
                  onChange={(e) =>
                    this.onChange(e.target.value, "fullName")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Date Of Birth
                </Form.Label>
                <Form.Control
                  value={this.state.dob}
                  onChange={(e) =>
                    this.onChange(e.target.value, "dob")
                  }
                  type="date"
                  required
                />
              </Form.Group>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Gender
                </Form.Label>
                <Form.Select value={this.state.gender} onChange={(e) => this.onChange(e.target.value, "gender")}>
                  {this.state.genderList.map((item, index) => {
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
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Contact Number
                </Form.Label>
                <Form.Control
                  value={this.state.contactNumber}
                  onChange={(e) =>
                    this.onChange(e.target.value, "contactNumber")
                  }
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Parent Contact Number
                </Form.Label>
                <Form.Control
                  value={this.state.parentConatct}
                  onChange={(e) =>
                    this.onChange(e.target.value, "parentConatct")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.SpecialRow}>
              <Form.Group className={classes.DisabilityTypeInput}>
                <Form.Label className={classes.FormLabels}>
                  Type Of Disablity
                </Form.Label>
                <Form.Control
                  value={this.state.typeOfDisability}
                  onChange={(e) =>
                    this.onChange(e.target.value, "typeOfDisability")
                  }
                  type="text"
                  disabled={this.state.pwd === "Yes" ? false : true}
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className={classes.HorizontalSections}>
          <div className={classes.Sections}>
            <h4 className={classes.Heading1}>Address For Correspondence</h4>
            <div className={classes.Row}>
              <Form.Group className={classes.NameInputWidth}>
                <Form.Label className={classes.FormLabels}>
                  Address
                </Form.Label>
                <Form.Control
                  value={this.state.correspondanceAddress.address}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "address", "correspondanceAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.NameInputWidth}>
                <Form.Label className={classes.FormLabels}>
                  City
                </Form.Label>
                <Form.Control
                  value={this.state.correspondanceAddress.city}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "city", "correspondanceAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  State
                </Form.Label>
                <Form.Control
                  value={this.state.correspondanceAddress.state}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "state", "correspondanceAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Pin/Zip Code
                </Form.Label>
                <Form.Control
                  value={this.state.correspondanceAddress.pinCode}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "pinCode", "correspondanceAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className={classes.Sections}>
            <h4 className={classes.Heading}>Permanent Address</h4>
            <div className={`mb-3 ${classes.Checker}`}>
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Same as Correspondence Address"
                onClick={this.checkBoxClicked}
              />
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.NameInputWidth}>
                <Form.Label className={classes.FormLabels}>
                  Address
                </Form.Label>
                <Form.Control
                  value={this.state.addressSame ? this.state.correspondanceAddress.address : this.state.permanentAddress.address}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "address", "permanentAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.NameInputWidth}>
                <Form.Label className={classes.FormLabels}>
                  City
                </Form.Label>
                <Form.Control
                  value={this.state.addressSame ? this.state.correspondanceAddress.city : this.state.permanentAddress.city}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "city", "permanentAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
            <div className={classes.Row}>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  State
                </Form.Label>
                <Form.Control
                  value={this.state.addressSame ? this.state.correspondanceAddress.state : this.state.permanentAddress.state}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "state", "permanentAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
              <Form.Group className={classes.InputWidthSet}>
                <Form.Label className={classes.FormLabels}>
                  Pin/Zip Code
                </Form.Label>
                <Form.Control
                  value={this.state.addressSame ? this.state.correspondanceAddress.pinCode : this.state.permanentAddress.pinCode}
                  onChange={(e) =>
                    this.onAddressChange(e.target.value, "pinCode", "permanentAddress")
                  }
                  type="text"
                  required
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <Button className={classes.SaveButton}>SAVE</Button>
      </div>
    );
  }
}

export default withRouter(PersonalDetails);
