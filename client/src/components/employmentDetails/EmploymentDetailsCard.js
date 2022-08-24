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
        cardIndex: null,
        optionList: ["Regular", "Temporary", "Permanent", "Contract"],
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


    onChange = (val, index, label) => {
        this.props.onChange(val, this.cardIndex, label);
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

    deleteClicked = (i) => {
        this.props.onDelete(this.state.cardindex);
    };
    render() {
        return (
            <div className={classes.InnerContainerDiv}>
                <div className={classes.HorizontalSections}>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Organization
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.organization}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "organization")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Post Held
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.post}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "post")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Responsibility
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.Responsibility}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "Responsibility")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Duration
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.duration}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "duration")
                                    }
                                    type="number"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Emoluments
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.emoluments}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "emoluments")
                                    }
                                    type="number"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.SpecialRow}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Class/Division
                                </Form.Label>
                                <Form.Select value={this.props.details.class} onChange={(e) => this.onChange(e.target.value, "class")}>
                                    {this.state.classList.map((item, index) => {
                                        return (
                                            <option
                                                key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Board/Institute/University
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.board}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "board")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Qualification Status
                                </Form.Label>
                                <Form.Select value={this.props.details.status} onChange={(e) => this.onChange(e.target.value, "status")}>
                                    {this.state.statusList.map((item, index) => {
                                        return (
                                            <option
                                                key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Expected Year of Passing
                                </Form.Label>
                                <Form.Select value={this.props.details.yearOfPassing} onChange={(e) => this.onChange(e.target.value, "yearOfPassing")}>
                                    {this.state.timeList.map((item, index) => {
                                        return (
                                            <option
                                                key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Acquired percentage Or CPI/CGPA
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.acquiredMarks}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "acquiredMarks")
                                    }
                                    type="number"
                                    step={0.01}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Maximum percentage Or CPI/CGPA
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.maxMarks}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "maxMarks")
                                    }
                                    type="number"
                                    step={0.01}
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group controlId="formFile" className={classes.InputWidthSet}>
                                <Form.Label>Latest Marksheet</Form.Label>
                                <Form.Control type="file" required />
                            </Form.Group>
                            {this.props.details.status === "Pursuing" ? <Form.Group controlId="formFile" className={classes.InputWidthSet}>
                                <Form.Label>Certificate</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group> : <Form.Group controlId="formFile" className={classes.InputWidthSet}>
                                <Form.Label>Certificate</Form.Label>
                                <Form.Control type="file" required />
                            </Form.Group>}

                        </div>
                    </div>
                </div>
                <Button onClick={this.onDelete} className={classes.SaveButton}> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                </svg>DELETE QUALIFICATION</Button>
            </div>
        );
    }
}

export default withRouter(EmploymentDetails);
