import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";

import classes from "./ProjectDetails.module.css";
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";

class ProjectDetails extends Component {
  state = {
    projectList: [
      {
        title: "",
        university: "",
        supervisorName: "",
        degree: "Under Graduation",
        degreeList: ["Under Graduation", "Post Graduation","Other"],
        parentNameValidity: false,
        nameValidity: false,
        formValid: false,
        titleValidity: false,
        supervisorNameValidity: false,
        universityValidity: false,
      },
    ],
    isFormValid: true,
  };

  nameValidity = (val, index, label) => {
    let isValid = true;
    const validNameFormat = /^[a-z ,.'-]+$/i;
    isValid = validNameFormat.test(val) && isValid;
    let temp = this.state.projectList;

    if (label === "university") {
      temp[index]["universityValidity"] = isValid;
      this.setState({
        universityValidity: isValid,
        formValid: isValid,
      });
    } else if (label === "title") {
      temp[index]["titleValidity"] = isValid;
      this.setState({
        titleValidity: isValid,
        formValid: isValid,
      });
    } else if (label === "supervisorName") {
      temp[index]["supervisorNameValidity"] = isValid;
      this.setState({
        supervisorNameValidity: isValid,
        formValid: isValid,
      });
    }

    this.setState({
      projectList: temp,
      isFormValid: isValid,
    });
  };

  addProject = () => {
    let tempProject = {
      title: "",
      university: "",
      supervisorName: "",
      degree: "Under Graduation",
      degreeList: ["Under Graduation", "Post Graduation"],
      parentNameValidity: false,
      nameValidity: false,
      formValid: false,
      titleValidity: false,
      supervisorNameValidity: false,
      universityValidity: false,
    };

    let tempProjectList = this.state.projectList;
    tempProjectList.push(tempProject);
    this.setState({
      projectList: tempProjectList,
    });
  };

  onChange = (val, index, label) => {
    let temp = this.state.projectList;
    temp[index][label] = val;

    if (
      label === "supervisorName" ||
      label === "university" ||
      label === "title"
    ) {
      this.nameValidity(val, index, label);
    }

    this.setState({
      projectList: temp,
    });
  };

  checkBoxClicked = (index) => {
    let temp = this.state.projectList;
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
      projectList: temp,
    });
  };

  deleteClicked = (i) => {
    let tempProjectList = this.state.projectList;
    tempProjectList = tempProjectList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });

    this.setState({
      projectList: tempProjectList,
    });
  };

  onSave = () => {
    if (this.state.formValid) {
      alert("Save clicked");
    } else {
      alert("Please fill all required details correctly");
    }
  };

  render() {
    return (
        <div className={classes.DisplayDiv}>
            <h2 className={classes.MainHeading}>PROJECT DETAILS</h2>
      {!IsListEmpty(this.state.projectList)
        ? this.state.projectList.map((item, index) => {
          return (
            <div className={classes.ContainerDiv}>
              <h2 className={classes.SubHeading}>PROJECT {index+1}</h2>
              <div className={classes.Row}>
              <Form.Group className={classes.Title}>
              <Form.Label className={classes.FormLabels}>
                  Project Title
                </Form.Label>
                <Form.Control
                  value={item.title}
                  onChange={(e) =>
                    this.onChange(e.target.value, index, "title")
                  }
                  type="text"
                  required
                />
                <span className={classes.ErrorMessage}>
                  {!item.titleValidity
                    ? "* Please enter a valid title."
                    : null}
                </span>
              </Form.Group>
              <Form.Group className={classes.Degree}>
              <Form.Label className={classes.FormLabels}>
                  Degree
                </Form.Label>
                <Form.Select
                  value={item.degree}
                  onChange={(e) =>
                    this.onChange(e.target.value, index, "degree")
                  }
                >
                  {item.degreeList.map((item1, index1) => {
                    return <option key={index1}>{item1}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className={classes.CompletionYear}>
              <Form.Label className={classes.FormLabels}>
                  Completion Year
                </Form.Label>
                <Form.Control
                  value={item.admissionYear}
                  onChange={(e) =>
                    this.onChange(
                      e.target.value,
                      index,
                      "admissionYear"
                    )
                  }
                  type="number"
                  required
                />
              </Form.Group>
              </div>
              <div className={classes.Row}>
              <Form.Group className={classes.University}>
              <Form.Label className={classes.FormLabels}>
                  University
                </Form.Label>
                <Form.Control
                  value={item.university}
                  onChange={(e) =>
                    this.onChange(
                      e.target.value,
                      index,
                      "university"
                    )
                  }
                  type="text"
                  required
                />
                <span className={classes.ErrorMessage}>
                  {!item.universityValidity
                    ? "* Please enter a University."
                    : null}
                </span>
              </Form.Group>
              <Form.Group className={classes.SupervisorName}>
              <Form.Label className={classes.FormLabels}>
                  Supervisor Name
                </Form.Label>
                <Form.Control
                  value={item.supervisorName}
                  onChange={(e) =>
                    this.onChange(
                      e.target.value,
                      index,
                      "supervisorName"
                    )
                  }
                  type="text"
                  required
                />
                <span className={classes.ErrorMessage}>
                  {!item.supervisorNameValidity
                    ? "* Please enter a valid Supervisor Name."
                    : null}
                </span>
              </Form.Group>
              </div>
              <div className={classes.Row}>
              <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.addProject}>
            ADD PROJECT
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

export default withRouter(ProjectDetails);
