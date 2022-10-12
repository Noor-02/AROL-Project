import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import classes from "./ProjectDetails.module.css";
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import { ParseBackprojectList, ParseProjectList } from '../../WebServices/DataParser'

class ProjectDetails extends Component {
  state = {
    applicantId: "",
    degreeList: ["Bachelors", "Masters", "Other"],
    projectList: [
      {
        applicantId: "",
        title: "",
        university: "",
        supervisorName: "",
        completionYear: null,
        degree: "Bachelors",
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
      applicantId: this.state.applicantId,
      title: "",
      university: "",
      supervisorName: "",
      degree: "Bachelors",
      completionYear: null,
      // degreeList: ["Under Graduation", "Post Graduation"],
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

    let data = ParseBackprojectList(this.state.projectList)[i];
    console.log("POST API CALL FOR PROJECT DETAILS PAGE=>", data)
    ResourceAPIController.DeleteProject(data.id).then(response => {
      console.log("PROJECT DETAILS FOR POST API CALL=> ", response);
      alert("deleted project")
    })
      .catch(error => {
        console.log("Failed =>", error);
      })

    this.setState({
      projectList: tempProjectList,
    });
  };

  onSave = () => {
    let data = ParseBackprojectList(this.state.projectList);
    console.log("API POST PROJECT DETAILS =>", data);
    ResourceAPIController.ProjectDetailsSubmit(data).then(response => {
      console.log("PROJECT DETAILS FOR POST API CALL=> ", response);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
    // }
    alert("Project Details have been saved")
  };

  componentDidMount = () => {
    ResourceAPIController.GetProjectDetails().then(response => {
      console.log("PROJECT LIST GET DETAILS =>", response.result.results);
      this.setState({
        projectList: response.result.results,
        applicantId: response.result.results[0].applicantId,
        count: response.result.count,
        next: response.result.next,
        previous: response.result.previous,
      })
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  };

  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>PROJECT DETAILS</h2>
        {!IsListEmpty(this.state.projectList)
          ? this.state.projectList.map((item, index) => {
            return (
              <div className={classes.ContainerDiv}>
                <h2 className={classes.SubHeading}>PROJECT {index + 1}</h2>
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
                      {!IsListEmpty(this.state.degreeList) ? this.state.degreeList.map((item1, index1) => {
                        return <option key={index1}>{item1}</option>;
                      }) : <></>}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className={classes.CompletionYear}>
                    <Form.Label className={classes.FormLabels}>
                      Completion Year
                    </Form.Label>
                    <Form.Control
                      value={item.completionYear}
                      onChange={(e) =>
                        this.onChange(
                          e.target.value,
                          index,
                          "completionYear"
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
                    <Button className={classes.AddButton} onClick={(e) => this.onSave()}>
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

export default withRouter(ProjectDetails);
