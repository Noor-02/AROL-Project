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
      { label: "labelThree", val: "" },
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
    return (
      <div>
        This is personal details page
        <div>
          {/* <ThreeInputForm
            label={[
              this.state.labels[0],
              this.state.labels[1],
              this.state.labels[2],
            ]}
            onChange={this.onChange}
          /> */}
          <TwoInputForm
            label={[this.state.labels[0], this.state.labels[1]]}
            onChange={this.onChange}
          />
          <Dropdown
            optionList={this.state.dropdownlabels}
            onSelect={this.onSelect}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PersonalDetails);
