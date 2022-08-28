import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from "./EducationalDetails.module.css";
import { withRouter } from "react-router";
import { Table, Form, Button } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";
import { nationalitiesList } from "../PersonalDetails/NationalitiesList";

class EducationalDetails extends Component {
    state = {
        cardIndex: null,
        optionList: [],
        statusList: ["Completed", "Pursuing"],
        timeList: [],
        percentList: ["Percentage Marks", "CPI/CGPA"],
        classList: ["First", "Second", "Third", "Not Applicable"],
    };

    componentDidMount = () => {

        let optionList = this.props.optionList;
        let timeList = this.props.timeList;
        let cardIndex = this.props.index;

        this.setState({
            optionList: optionList,
            timeList: timeList,
            cardIndex: cardIndex,
        })
    };

    onFileUpload = (e, label) => {
        this.props.onChange(e.target.files[0], this.state.cardIndex, label);
    }

    onDelete = () => {
        this.props.onDelete(this.state.cardIndex)
    }

    onChange = (val, label) => {
        this.props.onChange(val, this.state.cardIndex, label);
    };

    render() {
        return (
            <div className={classes.InnerContainerDiv}>
                <div className={classes.HorizontalSections}>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Examination
                                </Form.Label>
                                <Form.Select value={this.props.details.examination} onChange={(e) => this.onChange(e.target.value, "examination")}>
                                    {this.state.optionList.map((item, index) => {
                                        return (
                                            <option
                                                key={index}>
                                                {item}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Name of Examination Passed
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.nameOfExamPassed}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "nameOfExamPassed")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Specialization (If Any)
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.specialization}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "specialization")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Duration of Degree/Diploma (In yrs)
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
                                    Percentage or CGPA/CPI Marks
                                </Form.Label>
                                <Form.Select value={this.props.details.percentOrCpi} onChange={(e) => this.onChange(e.target.value, "percentOrCpi")}>
                                    {this.state.percentList.map((item, index) => {
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
                                <Form.Control type="file" onChange={(e) => this.onFileUpload(e, "marksheet")} required />
                            </Form.Group>
                            {this.props.details.status === "Pursuing" ? <Form.Group controlId="formFile" className={classes.InputWidthSet}>
                                <Form.Label>Certificate</Form.Label>
                                <Form.Control type="file" onChange={(e) => this.onFileUpload(e, "certificate")} />
                            </Form.Group> : <Form.Group controlId="formFile" className={classes.InputWidthSet}>
                                <Form.Label>Certificate</Form.Label>
                                <Form.Control type="file" onChange={(e) => this.onFileUpload(e, "certificate")} required />
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
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                </svg>DELETE QUALIFICATION</Button>
            </div>
        );
    }
}

export default withRouter(EducationalDetails);
