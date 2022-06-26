import React, { Component } from "react";
import { ReactDOM } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./TwoInputForm.module.css";
import { IsListEmpty } from '../../../utilities/CommonMethods'

class TwoInputForm extends Component {
  state = {
    labelsList: []
  }

  componentDidMount = () => {
    let labelsList = !IsListEmpty(this.props.label) ? this.props.label : [];
    this.setState({
      labelsList: labelsList
    })
  }

  render() {
    return (
      <div className={classes.flexContainer}>
        {!IsListEmpty(this.state.labelsList) ? <><Form.Group className={`mb-3 ${classes.flexItem}`}>
          <Form.Label className={classes.FormLabels}>
            {this.state.labelsList[0].label}
          </Form.Label>
          <Form.Control
            value={this.state.labelsList[0].val}
            onChange={(e) =>
              this.props.onChange(e.target.value, this.state.labelsList[0].label)
            }
            type="text"
            required
          />
        </Form.Group>
          <Form.Group className={`mb-3 ${classes.flexItem}`}>
            <Form.Label className={classes.FormLabels}>
              {this.state.labelsList[1].label}
            </Form.Label>
            <Form.Control
              value={this.state.labelsList[1].val}
              onChange={(e) =>
                this.props.onChange(e.target.value, this.state.labelsList[1].label)
              }
              type="text"
              required
            />
          </Form.Group> </> : null}
      </div>
    );
  }
}

export default TwoInputForm;
