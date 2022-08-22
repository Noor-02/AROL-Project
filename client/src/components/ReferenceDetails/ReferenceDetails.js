import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import classes from './ReferenceDetails.module.css'
import { Form, Button, Table } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/commonMethods";

class ReferenceDetails extends Component {
  state = {
    referenceDetailsList: [
      {
        refereeEmail: "",
        document:"",
        refereeEmailValidity:false,
        formValid:false,
      },
    ],
    isFormValid:false,
  };

  nameValidity = (val,index, label) => {
    let isValid = true;
    const validNameFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isValid = validNameFormat.test(val) && isValid;
    let temp = this.state.referenceDetailsList;

    if (label === "refereeEmail") {
      temp[index]["refereeEmailValidity"]= isValid;
      this.setState({
        refereeEmailValidity: isValid,
        formValid: isValid,
      })
    }

    this.setState({
        referenceDetailsList: temp,
        isFormValid: isValid,
    });
  }

  addProject = () => {
    let tempReferenceDetails = {
        refereeEmail: "",
        document:"",
        refereeEmailValidity:false,
        formValid:false,
    };

    let tempReferenceDetailsList = this.state.referenceDetailsList;
    tempReferenceDetailsList.push(tempReferenceDetails);
    this.setState({
        referenceDetailsList: tempReferenceDetailsList,
    });
  };

  onChange = (val, index, label) => {
    let temp = this.state.referenceDetailsList;
    temp[index][label] = val;

    if (label === "refereeEmail") {
      this.nameValidity(val,index, label)
    }

    this.setState({
        referenceDetailsList: temp,
    });
  };

  checkBoxClicked = (index) => {
    let temp = this.state.referenceDetailsList;
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
        referenceDetailsList: temp,
    });
  };

  deleteClicked = (i) => {
    let tempReferenceDetailsList = this.state.referenceDetailsList;
    tempReferenceDetailsList = tempReferenceDetailsList.filter((item, index) => {
      if (index !== i) {
        return item;
      }
    })

    this.setState({
        referenceDetailsList: tempReferenceDetailsList,
    });
  }

  onSave = () => {
    if (this.state.isFormValid) {
      alert("Save clicked");
    }
    else {
      alert("Please fill all required details correctly");
    }

  }

  render() {
    return (
      <div className={classes.DisplayDiv}>
        <h2 className={classes.MainHeading}>QUALIFYING EXAMINATION DETAILS</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Refree Email</th>
              <th>Document</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {!IsListEmpty(this.state.referenceDetailsList)
                  ? this.state.referenceDetailsList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Form.Group className={classes.RefereeEmail}>
                            <Form.Control
                              value={item.refereeEmail}
                              onChange={(e) =>
                                this.onChange(e.target.value, index, "refereeEmail")
                              }
                              type="email"
                              required
                            />
                            <span className={classes.ErrorMessage}>{!item.refereeEmailValidity ? "* Please enter a valid title." : null}</span>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group className={classes.Document}>
                            <Form.Control
                              value={item.document}
                              onChange={(e) =>
                                this.onChange(e.target.value, index, "document")
                              }
                              type="file"
                              required
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={(e) => this.deleteClicked(index)}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                          </svg>
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
          <Button className={classes.AddButton} onClick={this.addProject}>Add Employment</Button>
          <Button className={classes.AddButton} onClick={this.onSave}>SAVE</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(ReferenceDetails);