import React, { Component } from "react";
import { ReactDOM } from "react";
import ThreeInputForm from "../Forms/ThreeInputForm/ThreeInputForm";
import TwoInputForm from "../Forms/TwoInputForm/TwoInputForm";
import { withRouter } from "react-router";

class PersonalDetails extends Component {
  state = {
    labels: [
      { label: "labelOne", val: "" },
      { label: "labelTwo", val: "" },
      { label: "labelThree", val: "" },
    ]
  };

  onChange = (val, label) => {
    let initialLabels = this.state.labels;
    initialLabels.map(item => {
      if (item.label === label) {
        item.val = val;
      }
    })

    this.setState({
      labels: initialLabels
    })
  }
  render() {
    return <div>
      This is personal details page
      <div>
        <ThreeInputForm label={[this.state.labels[0], this.state.labels[1], this.state.labels[2]]} onChange={this.onChange} />
        <TwoInputForm label={[this.state.labels[0], this.state.labels[1]]} onChange={this.onChange} />
      </div>
    </div>;
  }
}

export default withRouter(PersonalDetails);
