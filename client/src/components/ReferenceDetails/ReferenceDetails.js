import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import classes from "./ReferenceDetails.module.css";
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { ParseBackRefereeDetails } from '../../WebServices/DataParser'


class ReferenceDetails extends Component {
  state = {
    applicationId: "",
    referenceDetailsList: [
      {
        refereeEmail: "",
        refereeName: "",
        designation: "",
        organization: "",
        refereeEmailValidity: false,
        refereeNameValidity: false,
        formValid: false,
        number: null,
        applicationId: ""
      },
    ],
    isFormValid: false,
  };

  nameValidity = (val, index, label) => {
    let isValid = true;
    const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validNameFormat = /^[a-z ,.'-]+$/i;
    let temp = this.state.referenceDetailsList;

    if (label === "refereeEmail") {
      isValid = validEmailFormat.test(val) && isValid;
      temp[index]["refereeEmailValidity"] = isValid;
      this.setState({
        refereeEmailValidity: temp,
        formValid: temp,
      });
    }
    else if (label === "refereeName") {
      isValid = validNameFormat.test(val) && isValid;
      temp[index]["refereeNameValidity"] = isValid;
      this.setState({
        refereeNameValidity: temp,
        formValid: temp,
      });
    }

    this.setState({
      referenceDetailsList: temp,
      isFormValid: isValid,
    });
  };

  addProject = () => {
    let tempReferenceDetails = {
      refereeEmail: "",
      refereeName: "",
      designation: "",
      organization: "",
      refereeNameValidity: false,
      refereeEmailValidity: false,
      formValid: false,
      number: null,
      applicationId: this.state.applicationId
    };

    let tempReferenceDetailsList = this.state.referenceDetailsList;
    tempReferenceDetailsList.push(tempReferenceDetails);
    this.setState({
      referenceDetailsList: tempReferenceDetailsList,
    });
  };

  onChange = (val, index, label) => {
    let temp = this.state.referenceDetailsList;
    temp[index][label] = val;

    if (label === "refereeEmail") {
      this.nameValidity(val, index, label);
    }
    else if (label === "refereeName") {
      this.nameValidity(val, index, label)
    }

    this.setState({
      referenceDetailsList: temp,
    });
  };

  checkBoxClicked = (index) => {
    let temp = this.state.referenceDetailsList;
    if (temp[index]["current"] === false) {
      for (let i = 0; i < temp.length; i++) {
        if (i === index) {
          temp[i]["current"] = true;
        } else {
          temp[i]["current"] = false;
        }
      }
    } else {
      temp[index]["current"] = false;
    }

    this.setState({
      referenceDetailsList: temp,
    });
  };

  deleteClicked = (i) => {
    let tempReferenceDetailsList = this.state.referenceDetailsList;
    tempReferenceDetailsList = tempReferenceDetailsList.filter(
      (item, index) => {
        if (index !== i) {
          return item;
        }
      }
    );

    this.setState({
      referenceDetailsList: tempReferenceDetailsList,
    });
  };

  onSave = () => {
    // if (this.state.isFormValid) {
    //   alert("Save clicked");
    // } else {
    //   alert("Please fill all required details correctly");
    // }
    for (let i = 0; i < this.state.referenceDetailsList.length; i++) {
      let data = ParseBackRefereeDetails(this.state.referenceDetailsList)[i];
      console.log("API POST REFEREE DETAILS =>", data);
      ResourceAPIController.RefereeDetailsSubmit(data).then(response => {
        console.log("REFEREE DETAILS FOR POST API CALL=> ", response);
      })
        .catch(error => {
          console.log("Failed =>", error);
        })
    }
    alert("Project Details have been saved")

  };

  componentDidMount() {
    ResourceAPIController.GetRefereeDetails().then(response => {
      // console.log("EDUCATIONAL DETAILS=> ", response.result);
      this.setState({
        referenceDetailsList: response.result.results,
        applicationId: response.result.results[0].applicationId,
        count: response.result.count,
        next: response.result.next,
        previous: response.result.previous,
      })
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  }

  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>REFERRALS</h2>
        {!IsListEmpty(this.state.referenceDetailsList)
          ? this.state.referenceDetailsList.map((item, index) => {
            return (
              <div className={classes.ContainerDiv}>
                <h2 className={classes.SubHeading}>REFEREE {index + 1}</h2>
                <div className={classes.Row}>
                  <Form.Group className={classes.RefereeName}>
                    <Form.Label className={classes.FormLabels}>
                      Referee Name
                    </Form.Label>
                    <Form.Control
                      value={item.refereeName}
                      onChange={(e) =>
                        this.onChange(e.target.value, index, "refereeName")
                      }
                      type="text"
                      required
                    />
                    <span className={classes.ErrorMessage}>
                      {!item.refereeNameValidity
                        ? "* Please enter a valid Name."
                        : null}
                    </span>
                  </Form.Group>

                  <Form.Group className={classes.Organization}>
                    <Form.Label className={classes.FormLabels}>
                      Referee Organization
                    </Form.Label>
                    <Form.Control
                      value={item.organization}
                      onChange={(e) =>
                        this.onChange(e.target.value, index, "organization")
                      }
                      type="text"
                      required
                    />
                  </Form.Group>

                  <Form.Group className={classes.Designation}>
                    <Form.Label className={classes.FormLabels}>
                      Referee Designation
                    </Form.Label>
                    <Form.Control
                      value={item.designation}
                      onChange={(e) =>
                        this.onChange(e.target.value, index, "designation")
                      }
                      type="text"
                      required
                    />
                  </Form.Group>

                </div>
                <div className={classes.Row}>

                  <Form.Group className={classes.RefereeEmail}>
                    <Form.Label className={classes.FormLabels}>
                      Referee Email
                    </Form.Label>
                    <Form.Control
                      value={item.refereeEmail}
                      onChange={(e) =>
                        this.onChange(
                          e.target.value,
                          index,
                          "refereeEmail"
                        )
                      }
                      type="email"
                      required
                    />
                    <span className={classes.ErrorMessage}>
                      {!item.refereeEmailValidity
                        ? "* Please enter a valid Email."
                        : null}
                    </span>
                  </Form.Group>

                  <Form.Group className={classes.Document}>
                    <Form.Label className={classes.FormLabels}>
                      Referee Phone Number
                    </Form.Label>
                    <Form.Control
                      value={item.number}
                      onChange={(e) =>
                        this.onChange(
                          e.target.value,
                          index,
                          "number"
                        )
                      }
                      type="number"
                      required
                    />
                  </Form.Group>

                </div>

                <div className={classes.Row}>
                  <div className={classes.ButtonsDiv}>
                    <Button className={classes.AddButton} onClick={this.addProject}>
                      ADD REFERRAL
                    </Button>
                    <Button className={classes.AddButton} onClick={(e) => this.deleteClicked(index)}>
                      DELETE
                    </Button>
                    <Button className={classes.AddButton} onClick={(e) => this.onSave(e)}>
                      SAVE
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
          : null
        }
      </div>
    );
  }
}

export default withRouter(ReferenceDetails);
