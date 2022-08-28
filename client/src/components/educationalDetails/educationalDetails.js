import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from "./EducationalDetails.module.css";
import { withRouter } from "react-router";
import { Table, Form, Button } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import EducationalDetailsCard from "./EducationalDetailsCard";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class EducationalDetails extends Component {
  state = {
    optionList: ["10th", "12th", "Graduation", "Post Graduation", "PhD", "Other"],
    timeList: ["2023", "2024", "2025", "2026"],
    statusList: ["Completed", "Ongoing"],
    percentList: ["Percentage Marks", "CPI/CGPA"],
    classList: ["First", "Second", "Third"],
    details: [
      {
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
        specialization: "None",
        marksheet: {},
        certificate: {}
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
        specialization: "None",
        marksheet: {},
        certificate: {}
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
        specialization: "None",
        marksheet: {},
        certificate: {}
      },
    ],
  };

  componentDidMount = () => {
    ResourceAPIController.GetEducationalDetails().then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  };

  onChange = (val, index, label) => {
    let temp = this.state.details;
    temp[index][label] = val;

    this.setState({
      details: temp,
    });
  };

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
      specialization: "None",
    };
    tempEducationalList.push(tempEducation);
    this.setState({
      details: tempEducationalList,
    });
  };

  deleteClicked = (i) => {
    let tempEducationalList = this.state.details;
    tempEducationalList = tempEducationalList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });

    this.setState({
      details: tempEducationalList,
    });
  };

  render() {
    return (
      <div className={classes.ContainerDiv}>
        <h2 className={classes.MainHeading}>EDUCATIONAL DETAILS</h2>
        {<>
          {!IsListEmpty(this.state.details) ? this.state.details.map((item, index) => {
            return (<EducationalDetailsCard
              key={index}
              timeList={this.state.timeList}
              optionList={this.state.optionList}
              index={index}
              details={this.state.details[index]}
              onDelete={this.deleteClicked}
              onChange={this.onChange} />)
          }) : null}
        </>}

        <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.onAddEducation}>
            Add Qualification
          </Button>
          <Button className={classes.AddButton} onClick={this.saveDetails}>SAVE</Button>
        </div>



      </div>
    );
  }
}

export default withRouter(EducationalDetails);
