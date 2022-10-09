import React, { Component } from "react";
// import { ReactDOM } from "react";
import { withRouter } from "react-router";
import classes from "./QualifyingDetails.module.css";
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
// import ResourceAPIController from "../../WebServices/ResourceAPIController";

class QualifyingDetails extends Component {
  state = {
    qualifyingDetailsList: [
      {
        examinationName: "",
        yearOfApperance: "",
        regNumber: "",
        document: "",
        examinationNameValidity: false,
        regNumberValidity: false,
        formValid: false,
      },
    ],
    isFormValid: false,
  };

  nameValidity = (val, index, label) => {
    let isValid = true;
    const validNameFormat = /^[a-z ,.'-]+$/i;
    isValid = validNameFormat.test(val) && isValid;
    let temp = this.state.qualifyingDetailsList;

    if (label === "regNumber") {
      temp[index]["regNumberValidity"] = isValid;
      this.setState({
        regNumberValidity: isValid,
        formValid: isValid,
      });
    } else if (label === "examinationName") {
      temp[index]["examinationNameValidity"] = isValid;
      this.setState({
        examinationNameValidity: isValid,
        formValid: isValid,
      });
    }

    this.setState({
      qualifyingDetailsList: temp,
      isFormValid: isValid,
    });
  };

  addProject = () => {
    let tempDetails = {
      examinationName: "",
      yearOfApperance: "",
      regNumber: "",
      examinationNameValidity: false,
      regNumberValidity: false,
      formValid: false,
    };

    let tempDetailsList = this.state.qualifyingDetailsList;
    tempDetailsList.push(tempDetails);
    this.setState({
      qualifyingDetailsList: tempDetailsList,
    });
  };

  onChange = (val, index, label) => {
    let temp = this.state.qualifyingDetailsList;
    temp[index][label] = val;

    if (label === "regNumber" || label === "examinationName") {
      this.nameValidity(val, index, label);
    }

    this.setState({
      qualifyingDetailsList: temp,
    });
  };

  deleteClicked = (i) => {
    let tempDetailsList = this.state.qualifyingDetailsList;
    tempDetailsList = tempDetailsList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });

    this.setState({
      qualifyingDetailsList: tempDetailsList,
    });
  };

  onSave = () => {
    if (this.state.isFormValid) {
      alert("Save clicked");
    } else {
      alert("Please fill all required details correctly");
    }
  };

  // componentDidMount = () => {
  //   ResourceAPIController.GetQualifyingDetails().then(response => {
  //     console.log(response.data);
  //   })
  //     .catch(error => {
  //       console.log("Failed =>", error);
  //     })
  // }

  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>QUALIFYING EXAMINATION DETAILS</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Examination Name</th>
              <th>Year of Appearance</th>
              <th>Registration Number</th>
              <th>Document*</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {!IsListEmpty(this.state.qualifyingDetailsList)
                  ? this.state.qualifyingDetailsList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Form.Group className={classes.ExaminationName}>
                            <Form.Control
                              value={item.examinationName}
                              onChange={(e) =>
                                this.onChange(
                                  e.target.value,
                                  index,
                                  "examinationName"
                                )
                              }
                              type="text"
                              required
                            />
                            <span className={classes.ErrorMessage}>
                              {!item.examinationNameValidity
                                ? "* Please enter a valid title."
                                : null}
                            </span>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.Year}>
                            <Form.Control
                              value={item.yearOfApperance}
                              onChange={(e) =>
                                this.onChange(
                                  e.target.value,
                                  index,
                                  "yearOfApperance"
                                )
                              }
                              type="number"
                              required
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.RegNumber}>
                            <Form.Control
                              value={item.regNumber}
                              onChange={(e) =>
                                this.onChange(
                                  e.target.value,
                                  index,
                                  "regNumber"
                                )
                              }
                              type="text"
                              required
                            />
                            <span className={classes.ErrorMessage}>
                              {!item.regNumberValidity
                                ? "* Please enter a valid title."
                                : null}
                            </span>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.Document}>
                            <Form.Control
                              value={item.document}
                              onChange={(e) =>
                                this.onChange(
                                  e.target.value,
                                  index,
                                  "document"
                                )
                              }
                              type="file"
                              required
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                            onClick={(e) => this.deleteClicked(index)}
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })
                  : null}
              </>
            }
          </tbody>
        </Table>
        <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.addProject}>
            Add Employment
          </Button>
          <Button className={classes.AddButton} onClick={this.onSave}>
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(QualifyingDetails);
