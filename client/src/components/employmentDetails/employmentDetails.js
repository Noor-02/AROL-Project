import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import { Button, Form, Table } from "react-bootstrap";
import classes from "./EmploymentDetails.module.css";
import { IsListEmpty } from "../../utilities/CommonMethods";
import EmploymentDetailsCard from "./EmploymentDetailsCard";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

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
        current: "No",
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
      current: "No",
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

  deleteClicked = (i) => {
    let tempEmploymentList = this.state.employmentList;
    tempEmploymentList = tempEmploymentList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    });

    this.setState({
      employmentList: tempEmploymentList,
    });
  };

  componentDidMount = () => {
    ResourceAPIController.GetEmploymentDetails().then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.log("Failed =>", error);
      })
  };

  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>EMPLOYMENT DETAILS</h2>
        {/* <Table striped bordered hover>
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
              <th>Currently Employed</th>
              <th>#</th>
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
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                            onClick={(e) => this.deleteClicked(index)}
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })
                  : null}
              </>
            }
          </tbody>
        </Table> */}
        <>
          {!IsListEmpty(this.state.employmentList) ? this.state.employmentList.map((item, index) => {
            return (<EmploymentDetailsCard details={this.state.employmentList[index]} optionList={this.state.optionList} index={index} onChange={this.onChange} onDelete={this.deleteClicked} />)
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
