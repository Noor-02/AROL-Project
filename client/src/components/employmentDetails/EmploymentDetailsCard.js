import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import { Button, Form, Table } from "react-bootstrap";
import classes from "./EmploymentDetails.module.css";
import { IsListEmpty } from "../../utilities/CommonMethods";

class EmploymentDetails extends Component {
    state = {
        cardIndex: null,
        optionList: [],
        currentList: ["Yes", "No"],
        current: ""
        // organization: "",
        // to: "",
        // from: "",
        // post: "",
        // duration: 0,
        // workType: "",
        // responsibility: "",
        // emoluments: 0,
        // current: "No",
        // regularity: "",
    };


    onChange = (val, label) => {
        this.props.onChange(val, this.state.cardIndex, label);
        if (label === "current") {
            this.setState({
                current: val
            })
        }
    };

    deleteClicked = (i) => {
        this.props.onDelete(this.state.cardIndex);
    };

    componentDidMount = () => {
        let optionList = this.props.optionList;
        let cardIndex = this.props.index;

        this.setState({
            optionList: optionList,
            cardIndex: cardIndex
        })
    }

    render() {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return (
            <div className={classes.InnerContainerDiv}>
                <div className={classes.HorizontalSections}>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Name of Organization
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
                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Regularity
                                </Form.Label>
                                <Form.Select value={this.props.details.regularity} onChange={(e) => this.onChange(e.target.value, "regularity")}>
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
                            <Form.Group className={classes.InputWidthSet}>
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
                                    Gross Emoluments
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
                    </div>
                    <div className={classes.Sections}>
                        <div className={classes.Row}>
                            <Form.Group className={classes.NameInputWidth}>
                                <Form.Label className={classes.FormLabels}>
                                    Responsibility
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.responsibility}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "responsibility")
                                    }
                                    type="text"
                                    required
                                />
                            </Form.Group>

                        </div>
                        <div className={classes.Row}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    From:
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.from}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "from")
                                    }
                                    type="date"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    To:
                                </Form.Label>
                                <Form.Control
                                    value={this.props.details.to}
                                    onChange={(e) =>
                                        this.onChange(e.target.value, "to")
                                    }
                                    type="date"
                                    required
                                />
                            </Form.Group>
                        </div>
                        <div className={classes.SpecialRow}>
                            <Form.Group className={classes.InputWidthSet}>
                                <Form.Label className={classes.FormLabels}>
                                    Currently Employed
                                </Form.Label>
                                <Form.Select value={this.props.details.current} onChange={(e) => this.onChange(e.target.value, "current")}>
                                    {this.state.currentList.map((item, index) => {
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
                        {/* <div className={classes.Row}>
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
                        </div> */}
                        {/* <div className={classes.Row}>
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

                        </div> */}
                    </div>
                </div>
                <Button onClick={this.deleteClicked} className={classes.SaveButton}> <svg
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

export default withRouter(EmploymentDetails);
