import React, { Component } from "react";
import classes from "./QualifyingExams.module.css";
import { Table, Form, Button } from "react-bootstrap";

class JAM extends Component {
    state = {
        details: {
            registrationNo: "",
            paperCode: "",
            noOfCandidates: null,
            marks: null,
            air: null,
            yearOfAppearance: "",
            monthOfAppearance: "",
            validUpto: "",
            qualified: "",
            document: null
        }
    }

    onChange = (val, label) => {
        let temp = this.state.details;
        if (label === "document") {
            val = URL.createObjectURL(val.target.files[0])
        }

        temp[label] = val;

        this.setState({
            details: temp,
        });
    };

    render() {
        return (
            <div className={classes.InnerContainerDiv}>
                <div className={classes.CardHeading}>JAM</div>
                <div className={classes.HorizontalSections}>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Registration Number
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.registrationNo}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "registrationNo")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Paper Code
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.paperCode}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "paperCode")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    AIR
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.air}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "air")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Year of Appearance
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.yearOfAppearance}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "yearOfAppearance")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Qualified/Not Qualified
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.qualified}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "qualified")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>

                    </div>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    No of Candidates
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.noOfCandidates}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "noOfCandidates")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Marks
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.marks}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "marks")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Month of Appearance
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.monthOfAppearance}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "monthOfAppearance")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Valid Upto
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.validUpto}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "validUpto")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group controlId="formFile" className={classes.TypeOfApplicantInput}>
                                <div className={classes.FileHeaderDiv}>
                                    <Form.Label>Supporting Document</Form.Label>
                                    {
                                        this.state.details.document ?
                                            <a href={this.state.details.document} target="_blank">View</a> : null
                                    }
                                </div>
                                <Form.Control type="file" onChange={(e) => this.onChange(e, "document")} required />
                            </Form.Group>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default JAM;