import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import classes from './projectDetails.module.css'
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/commonMethods";

class ProjectDetails extends Component {
  state = {
    projectList: [
      {
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
      }
    ],
    isFormValid:true,
  };

  nameValidity = (val,index, label) => {
    let isValid = true;
    const validNameFormat = /^[a-z ,.'-]+$/i;
    isValid = validNameFormat.test(val) && isValid;
    let temp = this.state.projectList;

    if (label === "university") {
      temp[index]["universityValidity"]= isValid;
      this.setState({
        universityValidity: isValid,
        formValid: isValid,
      })
    }
    else if (label === "title") {
      temp[index]["titleValidity"]= isValid;
      this.setState({
        titleValidity: isValid,
        formValid: isValid
      })
    }
    else if (label === "supervisorName") {
      temp[index]["supervisorNameValidity"]= isValid;
      this.setState({
        supervisorNameValidity: isValid,
        formValid: isValid
      })
    }

    this.setState({
      projectList: temp,
      isFormValid: isValid,
    });
  }

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

    if (label === "supervisorName" || label === "university" || label === "title") {
      this.nameValidity(val,index, label)
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
    })

    this.setState({
      projectList: tempProjectList,
    });
  }

  onSave = () => {
    if (this.state.formValid) {
      alert("Save clicked");
    }
    else {
      alert("Please fill all required details correctly");
    }

  }


  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>EMPLOYMENT DETAILS</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Degree</th>
              <th>University</th>
              <th>Supervisor Name</th>
              <th>Completion Year</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {!IsListEmpty(this.state.projectList)
                  ? this.state.projectList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Form.Group className={classes.Title}>
                            <Form.Control
                              value={item.title}
                              onChange={(e) =>
                                this.onChange(e.target.value, index, "title")
                              }
                              type="text"
                              required
                            />
                            <span className={classes.ErrorMessage}>{!item.titleValidity ? "* Please enter a valid title." : null}</span>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.Degree}>
                            <Form.Select value={item.degree} onChange={(e) => this.onChange(e.target.value, index, "degree")}>
                              {item.degreeList.map((item1, index1) => {
                                return (
                                  <option
                                    key={index1}>
                                    {item1}
                                  </option>
                                );
                              })}
                            </Form.Select>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.University}>
                            <Form.Control
                              value={item.university}
                              onChange={(e) =>
                                this.onChange(e.target.value, index, "university")
                              }
                              type="text"
                              required
                            />
                            <span className={classes.ErrorMessage}>{!item.universityValidity ? "* Please enter a University." : null}</span>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.SupervisorName}>
                            <Form.Control
                              value={item.supervisorName}
                              onChange={(e) =>
                                this.onChange(e.target.value, index, "supervisorName")
                              }
                              type="text"
                              required
                            />
                            <span className={classes.ErrorMessage}>{!item.supervisorNameValidity ? "* Please enter a valid Supervisor Name." : null}</span>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.CompletionYear}>
                            <Form.Control
                              value={item.admissionYear}
                              onChange={(e) =>
                                this.onChange(e.target.value, index, "admissionYear")
                              }
                              type="number"
                              required
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={(e) => this.deleteClicked(index)}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
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
          <Button className={classes.AddButton} onClick={this.addProject}>Add Employment</Button>
          <Button className={classes.AddButton} onClick={this.onSave}>SAVE</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetails);