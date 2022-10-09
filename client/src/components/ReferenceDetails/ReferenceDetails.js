import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import classes from "./ReferenceDetails.module.css";
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";

class ReferenceDetails extends Component {
  state = {
    referenceDetailsList: [
      {
        refereeEmail: "",
        refereeName: "",
        designation: "",
        organization: "",
        document: "",
        refereeEmailValidity: false,
        refereeNameValidity: false,
        formValid: false,
        number: null
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
      document: "",
      refereeNameValidity: false,
      refereeEmailValidity: false,
      formValid: false,
      number: null
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
    if (this.state.isFormValid) {
      alert("Save clicked");
    } else {
      alert("Please fill all required details correctly");
    }
  };

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
