import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import { Button, Form, Table } from "react-bootstrap";
import classes from "./EmploymentDetails.module.css";
import { IsListEmpty } from "../../utilities/CommonMethods";
import EmploymentDetailsCard from "./EmploymentDetailsCard";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { ParseBackEmploymentList } from '../../WebServices/DataParser'

class EmploymentDetails extends Component {
  state = {
    applicantId: "",
    optionList: ["Regular", "Temporary", "Permanent", "Contract"],
    employmentList: [
      // {
      //   organization: "",
      //   to: "",
      //   from: "",
      //   post: "",
      //   duration: 0,
      //   workType: "",
      //   responsibility: "",
      //   emoluments: 0,
      //   current: "No",
      //   applicantId: "",
      // id : ""
      // },
    ],
  };
  addEmployement = () => {
    let tempEmploymentList = this.state.employmentList;
    let tempEmployment = {
      organization: "",
      to: "",
      from: "",
      post: "",
      duration: 0,
      workType: "",
      responsibility: "",
      emoluments: 0,
      current: "No",
      applicantId: this.state.applicantId,
    };
    tempEmploymentList.push(tempEmployment);
    this.setState({
      employmentList: tempEmploymentList,
    });
  };

  onChange = (val, index, label) => {
    let temp = this.state.employmentList;
    console.log(index)
    temp[index][label] = val;

    this.setState({
      employmentList: temp,
    });
  };

  deleteClicked = (i) => {
    let tempEmploymentList = this.state.employmentList;
    tempEmploymentList = tempEmploymentList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });

    let data = ParseBackEmploymentList(this.state.employmentList)[i];
    console.log("POST API CALL FOR EMPLOYMENT DETAILS PAGE=>", data)
    ResourceAPIController.DeleteEmployment(data.id).then(response => {
      console.log("EMPLOYMENT DETAILS FOR POST API CALL=> ", response);
      alert("deleted employment")
    })
      .catch(error => {
        console.log("Failed =>", error);
      })


    this.setState({
      employmentList: tempEmploymentList,
    });
  };

  componentDidMount = () => {
    ResourceAPIController.GetEmploymentDetails().then(response => {
      console.log("EMPLOYMENT DETAILS=> ", response.result);
      this.setState({
        employmentList: response.result.results,
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

  saveDetails = () => {
    let data = ParseBackEmploymentList(this.state.employmentList);
    console.log("POST API CALL FOR EMPLOYMENT DETAILS PAGE=>", data)
    ResourceAPIController.EmploymentDetailsSubmit(data).then(response => {
      console.log("EMPLOYMENT DETAILS FOR POST API CALL=> ", response);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
    alert("Employment Details have been saved")

  }

  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>EMPLOYMENT DETAILS</h2>
        <>
          {!IsListEmpty(this.state.employmentList) ? this.state.employmentList.map((item, index) => {
            return (<EmploymentDetailsCard details={this.state.employmentList[index]} optionList={this.state.optionList} key={index} index={index} onChange={this.onChange} onDelete={this.deleteClicked} />)
          }) : null}
        </>
        <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.addEmployement}>
            Add Employment
          </Button>
          <Button className={classes.AddButton} onClick={this.saveDetails}>
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(EmploymentDetails);
