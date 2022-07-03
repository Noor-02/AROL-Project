import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import { Button, Form, Table } from "react-bootstrap";
import classes from "./EmploymentDetails.module.css";
import { IsListEmpty } from "../../utilities/CommonMethods";
import ThreeInputForm from "../Forms/ThreeInputForm/ThreeInputForm";
import TwoInputForm from "../Forms/TwoInputForm/TwoInputForm";

class EmploymentDetails extends Component {
  state = {
    optionList: ["Regular", "Temporary", "Permanent", "Contract"],
    employmentList: [
      {
        organization: "",
        to: "",
        from: "",
        post: "",
        duration: 0,
        workType: "",
        responsibility: "",
        emoluments: 0,
        current: false,
        regularity: "",
      },
    ],
  };
  addEmployement = () => {
    let tempEmployment = {
      organization: "",
      to: "",
      from: "",
      post: "",
      duration: 0,
      workType: "",
      responsibility: "",
      emoluments: 0,
      current: false,
      regularity: "",
    };
    let tempEmploymentList = this.state.employmentList;
    tempEmploymentList.push(tempEmployment);
    this.setState({
      employmentList: tempEmploymentList,
    });
  };
  onChange = (val, index, label) => {
    let temp = this.state.employmentList;
    temp[index][label] = val;

    this.setState({
      employmentList: temp,
    });
  };
  checkBoxClicked = (index) => {
    let temp = this.state.employmentList;
    if (temp[index]["current"] === false) {
      for (let i = 0; i < temp.length; i++) {
        if (i === index) {
          temp[i]["current"] = true;
        } else {
          temp[i]["current"] = false;
        }
      }
    } else {
      temp[index]["current"] = false;
    }
    this.setState({
      employmentList: temp,
    });
  };
  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>EMPLOYMENT DETAILS</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name of Organization</th>
              <th>Post Held</th>
              <th>Regularity</th>
              <th>From</th>
              <th>To</th>
              <th>Period of Employment (in yrs)</th>
              <th>Nature of Responsibilities</th>
              <th>Gross Emoluments</th>
              <th>Current</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {!IsListEmpty(this.state.employmentList)
                  ? this.state.employmentList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Form.Control
                            onChange={(e) =>
                              this.onChange(
                                e.target.value,
                                index,
                                "organization"
                              )
                            }
                            value={item.organization}
                            type="text"
                            required
                          ></Form.Control>
                        </td>
                        <td>
                          <Form.Control
                            value={item.post}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "post")
                            }
                            type="text"
                            required
                          />
                        </td>
                        <td>
                          <Form.Select
                            onChange={(e) =>
                              this.onChange(
                                e.target.value,
                                index,
                                "regularity"
                              )
                            }
                            value={item.regularity}
                          >
                            {this.state.optionList.map((obj, i) => {
                              return <option key={i}>{obj}</option>;
                            })}
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Control
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "from")
                            }
                            value={item.from}
                            type="date"
                            required
                          ></Form.Control>
                        </td>
                        <td>
                          <Form.Control
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "to")
                            }
                            value={item.to}
                            type="date"
                            required
                          ></Form.Control>
                        </td>
                        <td>
                          <Form.Control
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "duration")
                            }
                            value={item.duration}
                            step="0.1"
                            type="number"
                            required
                          ></Form.Control>
                        </td>
                        <td>
                          <Form.Control
                            onChange={(e) =>
                              this.onChange(
                                e.target.value,
                                index,
                                "responsibility"
                              )
                            }
                            value={item.responsibility}
                            type="text"
                            required
                          ></Form.Control>
                        </td>
                        <td>
                          <Form.Control
                            onChange={(e) =>
                              this.onChange(
                                e.target.value,
                                index,
                                "emoluments"
                              )
                            }
                            value={item.emoluments}
                            type="number"
                            required
                          ></Form.Control>
                        </td>
                        <td>
                          <Form.Check
                            checked={item.current}
                            type="checkbox"
                            onChange={() => this.checkBoxClicked(index)}
                          />
                        </td>
                      </tr>
                    );
                  })
                  : null}
              </>
            }
          </tbody>
        </Table>
        <div className={classes.ButtonsDiv}>
          <Button className={classes.AddButton} onClick={this.addEmployement}>Add Employment</Button>
          <Button className={classes.AddButton} onClick={this.saveDetails}>SAVE</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(EmploymentDetails);
