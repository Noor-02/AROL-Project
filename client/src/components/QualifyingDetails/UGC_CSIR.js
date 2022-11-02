import React, { Component } from "react";
import classes from "./QualifyingExams.module.css";
import { Table, Form, Button } from "react-bootstrap";

class UGC_CSIR extends Component {
    state = {
        details: {
            referenceNo: "",
            apValidity: "",
            jrfValidUpto: "",
            subjectCode: "",
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
                <div className={classes.CardHeading}>UGC_CSIR</div>
                <div className={classes.HorizontalSections}>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Reference Number
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.referenceNo}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "referenceNo")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    AP Validity
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.apValidity}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "apValidity")
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
                                    JRF Valid Upto
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.jrfValidUpto}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "jrfValidUpto")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Subject Code
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.subjectCode}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "subjectCode")
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

export default UGC_CSIR;