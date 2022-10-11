import React, { Component } from "react";
// import { ReactDOM } from "react";
import classes from "./EducationalDetails.module.css";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import EducationalDetailsCard from "./EducationalDetailsCard";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { ParseBackEducationList } from '../../WebServices/DataParser'

class EducationalDetails extends Component {
  state = {
    count: null,
    next: null,
    previous: null,
    optionList: ["10th", "12th", "Graduation", "Post Graduation", "PhD", "Other"],
    timeList: ["2023", "2024", "2025", "2026"],
    statusList: ["Completed", "Ongoing"],
    percentList: ["Percent of Marks", "CPI/CGPA"],
    classList: ["First", "Second", "Third"],
    applicantId: "",
    // details: [
    //   {
    //     examination: "10th",
    //     nameOfExamPassed: " ",
    //     board: " ",
    //     duration: 0,
    //     status: "",
    //     yearOfPassing: 0,
    //     percentOrCpi: "",
    //     acquiredMarks: 0,
    //     maxMarks: 0,
    //     class: "",
    //     specialization: "None",
    //     marksheet: {},
    //     certificate: {},
    //     applicantId: ""
    //   },
    //   {
    //     examination: "12th",
    //     nameOfExamPassed: " ",
    //     board: " ",
    //     duration: 0,
    //     status: "",
    //     yearOfPassing: 0,
    //     percentOrCpi: "",
    //     acquiredMarks: 0,
    //     maxMarks: 0,
    //     class: "",
    //     specialization: "None",
    //     marksheet: {},
    //     certificate: {},
    //     applicantId: ""
    //   },
    //   {
    //     examination: "Graduation",
    //     nameOfExamPassed: " ",
    //     board: " ",
    //     duration: 0,
    //     status: "",
    //     yearOfPassing: 0,
    //     percentOrCpi: "",
    //     acquiredMarks: 0,
    //     maxMarks: 0,
    //     class: "",
    //     specialization: "None",
    //     marksheet: {},
    //     certificate: {},
    //     applicantId: ""
    //   },
    // ],
    details: [],
  };

  componentDidMount = () => {
    ResourceAPIController.GetEducationalDetails().then(response => {
      // console.log("EDUCATIONAL DETAILS=> ", response.result);
      this.setState({
        details: response.result.results,
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

  onChange = (val, index, label) => {
    let temp = this.state.details;
    if (label === "marksheet" || label === "certificate") {
      val = URL.createObjectURL(val)
    }

    temp[index][label] = val;

    this.setState({
      details: temp,
    });
  };

  onAddEducation = () => {
    let tempCount = this.state.count;
    let tempEducationalList = this.state.details;
    let n = tempEducationalList.length;
    let tempEducation = {
      examination: "10th",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0,
      status: "Completed",
      yearOfPassing: 2023,
      percentOrCpi: "Percent of Marks",
      acquiredMarks: 0,
      maxMarks: 0,
      class: "First",
      specialization: "None",
      certificate: null,
      marksheet: null,
      applicantId: this.state.applicantId,
      id: n + 1
    };
    tempEducationalList.push(tempEducation);
    this.setState({
      count: tempCount + 1,
      details: tempEducationalList,
    });
  };

  deleteClicked = (i) => {
    let tempCount = this.state.count;
    let tempEducationalList = this.state.details;
    tempEducationalList = tempEducationalList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });

    this.setState({
      count: tempCount - 1,
      details: tempEducationalList,
    });
  };

  saveDetails = () => {

    let data = ParseBackEducationList(this.state.details);
    for (let i = 0; i < this.state.details.length; i++) {
      data[i].certificate = null
      data[i].marksheet = null
    }
    // let data = ParseBackEducationList(this.state.details)[i];
    // data.certificate = null
    // data.marksheet = null
    // data.applicant_id = 1
    // console.log(data);
    console.log("DATA FROM EDUCATIONAL DETAILS=>", data)
    ResourceAPIController.EducationalDetailsSubmit(data).then(response => {
      console.log("EDUCATIONAL DETAILS SUBMIT=> ", response);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
    // }

    alert("Educational Details have been saved")
  }

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
