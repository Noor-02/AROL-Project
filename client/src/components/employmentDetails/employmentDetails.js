import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import { Button } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import ThreeInputForm from "../Forms/ThreeInputForm/ThreeInputForm";
import TwoInputForm from "../Forms/TwoInputForm/TwoInputForm";

class EmploymentDetails extends Component {
  state = {
    employmentList: [],
  };
  addEmployement = () => {
    let tempEmployment = {
      organisation: "",
      to: "",
      from: "",
      post: "",
      duration: 0,
      workType: "",
      responsibility: "",
      emoluments: 0,
      current: false,
    };
    let tempEmploymentList = this.state.employmentList;
    tempEmploymentList.push(tempEmployment);
    this.setState({
      employmentList: tempEmploymentList,
    });
  };
  render() {
    return (
      <div>
        This is Employement details page
        {!IsListEmpty(this.state.employmentList)
          ? this.state.employmentList.map((item, index) => {
            return (
              <div>
                <br />
                list not empty
                {/* <TwoInputForm
                    label={[this.state.labels[0], this.state.labels[1]]}
                    onChange={this.onChange}
                  /> */}
              </div>
            );
          })
          : null}
        <Button onClick={this.addEmployement}>Add Employment</Button>
      </div>
    );
  }
}

export default withRouter(EmploymentDetails);
