import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from './EducationalDetails.module.css'
import EducationalDocTable from './EducationalDocuments'
import { withRouter } from "react-router";
import { Table, Form, Button } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";

class EducationalDetails extends Component {
  state = {
    optionList: ["10th", "12th", "Graduation", "Post Graduation", "PhD"],
    statusList: ["Completed", "Ongoing"],
    timeList: ["2023", "2024", "2025", "2026"],
    percentList: ["Percentage Marks", "CPI/CGPA"],
    classList: ["First", "Second", "Third"],
    details: [{
      examination: "10th",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0,
      status: "",
      yearOfPassing: 0,
      percentOrCpi: "",
      acquiredMarks: 0,
      maxMarks: 0,
      class: "",
      specialization: "None"
    },
    {
      examination: "12th",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0,
      status: "",
      yearOfPassing: 0,
      percentOrCpi: "",
      acquiredMarks: 0,
      maxMarks: 0,
      class: "",
      specialization: "None"
    },
    {
      examination: "Graduation",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0,
      status: "",
      yearOfPassing: 0,
      percentOrCpi: "",
      acquiredMarks: 0,
      maxMarks: 0,
      class: "",
      specialization: "None"
    }]
  };

  // componentDidMount = () => {
  //   let optionList = this.props.optionList;
  //   // console.log(optionList);
  //   this.setState({
  //     optionList: optionList,
  //   });
  // };

  onChange = (val, index, label) => {
    let temp = this.state.details;
    temp[index][label] = val;

    this.setState({
      details: temp
    })
  }

  onAddEducation = () => {
    let tempEducationalList = this.state.details;
    let tempEducation = {
      examination: "",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0,
      status: "",
      yearOfPassing: 0,
      percentOrCpi: "",
      acquiredMarks: 0,
      maxMarks: 0,
      class: "",
      specialization: "None"
    };
    tempEducationalList.push(tempEducation);
    this.setState({
      details: tempEducationalList,
    });
  }

  deleteClicked = (i) => {
    let tempEducationalList = this.state.details;
    tempEducationalList = tempEducationalList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    })

    this.setState({
      details: tempEducationalList,
    });

  }

  render() {
    return (
      <div className={classes.ContainerDiv}>
        <h2 className={classes.MainHeading}>EDUCATIONAL DETAILS</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Examination</th>
              <th>Name of Examination Passed</th>
              <th>Board/Institute/University</th>
              <th>Duration of Degree/Diploma</th>
              <th>Qualification Status</th>
              <th>Expected Year of Passing</th>
              <th>Percentage Or CPI/CGPA Marks</th>
              <th>Acquired percentage Or CPI/CGPA Marks</th>
              <th>Maximum percentage Or CPI/CGPA Marks</th>
              <th>Class/Division</th>
              <th>Specialization (If Any)</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {!IsListEmpty(this.state.details)
                  ? this.state.details.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><Form.Select
                          onChange={(e) => this.onChange(e.target.value, index, "examination")}
                          value={item.examination}>
                          {this.state.optionList.map((obj, i) => {
                            return (
                              <option
                                key={i}
                              >
                                {obj}
                              </option>
                            );
                          })}
                        </Form.Select></td>
                        <td>
                          <Form.Control
                            value={item.nameOfExamPassed}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "nameOfExamPassed")
                            }
                            type="text"
                            required
                          />
                        </td>
                        <td>
                          <Form.Control
                            value={item.board}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "board")
                            }
                            type="text"
                            required
                          />
                        </td>
                        <td>
                          <Form.Control
                            value={item.duration}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "duration")
                            }
                            type="number"
                            required
                          />
                        </td>
                        <td><Form.Select
                          onChange={(e) => this.onChange(e.target.value, index, "status")}
                          value={item.status}>
                          {this.state.statusList.map((obj, i) => {
                            return (
                              <option
                                key={i}
                              >
                                {obj}
                              </option>
                            );
                          })}
                        </Form.Select></td>
                        <td><Form.Select
                          onChange={(e) => this.onChange(e.target.value, index, "yearOfPassing")}
                          value={item.yearOfPassing}>
                          {this.state.timeList.map((obj, i) => {
                            return (
                              <option
                                key={i}
                              >
                                {obj}
                              </option>
                            );
                          })}
                        </Form.Select></td>
                        <td><Form.Select
                          onChange={(e) => this.onChange(e.target.value, index, "percentOrCpi")}
                          value={item.percentOrCpi}>
                          {this.state.percentList.map((obj, i) => {
                            return (
                              <option
                                key={i}
                              >
                                {obj}
                              </option>
                            );
                          })}
                        </Form.Select></td>
                        <td>
                          <Form.Control
                            value={item.acquiredMarks}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "acquiredMarks")
                            }
                            type="number"
                            step="0.01"
                            required
                          />
                        </td>
                        <td>
                          <Form.Control
                            value={item.maxMarks}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "maxMarks")
                            }
                            type="number"
                            step="0.01"
                            required
                          />
                        </td>
                        <td><Form.Select
                          onChange={(e) => this.onChange(e.target.value, index, "class")}
                          value={item.class}>
                          {this.state.classList.map((obj, i) => {
                            return (
                              <option
                                key={i}
                              >
                                {obj}
                              </option>
                            );
                          })}
                        </Form.Select></td>
                        <td>
                          <Form.Control
                            value={item.specialization}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "specialization")
                            }
                            type="text"
                          />
                        </td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={(e) => this.deleteClicked(index)}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                          </svg>
                        </td>
                      </tr>
                    )
                  })
                  : null}
              </>
            }
          </tbody>
        </Table>
        <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.onAddEducation}>Add Qualification</Button>
          {/* <Button className={classes.AddButton} onClick={this.saveDetails}>SAVE</Button> */}
        </div>
        <EducationalDocTable />
      </div>
    )
  }
}

export default withRouter(EducationalDetails);
