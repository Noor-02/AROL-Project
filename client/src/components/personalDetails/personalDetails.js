import React, { Component } from "react";
import { ReactDOM } from "react";
import ThreeInputForm from "../Forms/ThreeInputForm/ThreeInputForm";
import Dropdown from "../Forms/Dropdown/Dropdown";
import TwoInputForm from "../Forms/TwoInputForm/TwoInputForm";
import { withRouter } from "react-router";

class PersonalDetails extends Component {
  state = {
    dropdownlabels: [
      { label: "val1", selected: false },
      { label: "val2", selected: false },
      { label: "val3", selected: false },
      { label: "val4", selected: false },
    ],
    labels: [
      { label: "Full Name", val: "" },
      { label: "Father's/Spouse Name", val: "" },
      { label: "Indian Applicant", val: false },
      { label: "PWD", val: false },
      { label: "Nationality", val: "" },
      { label: "Photograph", val: "" },
      { label: "Date Of Birth", val: "" },
      { label: "Marital Status", val: false },
      { label: "Gender", val: "" },
      { label: "Caste Category", val: "" },
      { label: "Contact Number", val: 0 },
      { label: "Parent Contact Number", val: 0 },
      { label: "Disability", val: false },
      {
        label: "Correspondance Address", val:
          [{ label: "Address", val: "" },
          { label: "City", val: "" },
          { label: "State", val: "" },
          { label: "Pin Code", val: 0 }]
      },
      {
        label: "Permanent Address", val:
          [{ label: "Address", val: "" },
          { label: "City", val: "" },
          { label: "State", val: "" },
          { label: "Pin Code", val: 0 }]
      },
    ],
  };

  onSelect = (label) => {
    let initialLabels = this.state.dropdownlabels;
    initialLabels.map((item) => {
      if (item.label === label) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });

    this.setState({
      dropdownlabels: initialLabels,
    });
  };

  onChange = (val, label) => {
    let initialLabels = this.state.labels;
    initialLabels.map((item) => {
      if (item.label === label) {
        item.val = val;
      }
    });

    this.setState({
      labels: initialLabels,
    });
  };
  render() {
    let labelsList1 = [this.state.labels[0], this.state.labels[1], this.state.labels[2]];
    let typeArray1 = ["text", "text", "number"];
    let labelsList2 = [];
    return (
      <div>
        This is personal details page
        <div>
          <ThreeInputForm
            label={labelsList1}
            onChange={this.onChange}
          />
          <TwoInputForm
            label={[this.state.labels[0], this.state.labels[1]]}
            onChange={this.onChange}
          />
          <Dropdown
            optionList={this.state.dropdownlabels}
            typeArray={typeArray1}
            onSelect={this.onSelect}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PersonalDetails);
