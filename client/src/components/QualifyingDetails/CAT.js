import React, { Component } from "react";
import classes from "./QualifyingExams.module.css";
import { Table, Form, Button } from "react-bootstrap";

class CAT extends Component {
    state = {
        details: {
            registrationNo: "",
            dateofAppearance: "",
            verbalPercentile: "",
            dataPercentile: "",
            quantitativePercentile: "",
            overallPercentile: "",
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
                <div className={classes.CardHeading}>CAT</div>
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
                                    Date of Appearance
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.dateofAppearance}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "dateofAppearance")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Verbal Ability and Reading Comprehension Percentile
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.verbalPercentile}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "verbalPercentile")
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


                    </div>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Data Interpretation and Logical Reasoning Percentile
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.dataPercentile}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "dataPercentile")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                        </div>

                        <div className={classes.Row}>
                            <Form.Group className={classes.AdmissionInput}>
                                <Form.Label className={classes.FormLabels}>

                                    Quantitative Ability Percentile
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.quantitativePercentile}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "quantitativePercentile")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.TypeOfApplicantInput}>
                                <Form.Label className={classes.FormLabels}>
                                    Overall Percentile
                                </Form.Label>
                                <Form.Control
                                    value={this.state.details.overallPercentile}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "overallPercentile")
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

export default CAT;