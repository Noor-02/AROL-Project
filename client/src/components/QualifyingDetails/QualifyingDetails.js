import React, { Component } from "react";
// import { ReactDOM } from "react";
import { withRouter } from "react-router";
import classes from "./QualifyingDetails.module.css";
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import GATE from "./GATE.js"
import GRE from "./GRE.js"
import CAT from "./CAT.js"
import JAM from "./JAM.js"
import UGC_CSIR from "./UGC_CSIR.js"
// import ResourceAPIController from "../../WebServices/ResourceAPIController";

class QualifyingDetails extends Component {
  state = {
    GRE: false,
    GATE: false,
    CAT: false,
    JAM: false,
    UGC_CSIR: false
  };

  clicked = (event) => {
    this.setState((prevState) => {
      let stateValue = prevState;
      stateValue[event.target.name] = !stateValue[event.target.name];
      return {
        ...stateValue,
      }
    }
    )
  }


  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>QUALIFICATION EXAM DETAILS</h2>
        <Form.Group>
          <div className={classes.ChechBoxDiv}>
            <Form.Check name="GATE" onClick={(e) => this.clicked(e)} type="checkbox" label="GATE" />
            <Form.Check name="GRE" onClick={(e) => this.clicked(e)} type="checkbox" label="GRE" />
            <Form.Check name="CAT" onClick={(e) => this.clicked(e)} type="checkbox" label="CAT" />
            <Form.Check name="JAM" onClick={(e) => this.clicked(e)} type="checkbox" label="JAM" />
            <Form.Check name="UGC_CSIR" onClick={(e) => this.clicked(e)} type="checkbox" label="UGC CSIR" />
          </div>
        </Form.Group>
        {this.state.GATE ? <GATE /> : null}
        {this.state.GRE ? <GRE /> : null}
        {this.state.CAT ? <CAT /> : null}
        {this.state.JAM ? <JAM /> : null}
        {this.state.UGC_CSIR ? <UGC_CSIR /> : null}
        <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.saveDetails}>
            SAVE
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(QualifyingDetails);
