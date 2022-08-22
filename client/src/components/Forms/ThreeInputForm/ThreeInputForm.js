import React, { Component } from "react";
import { ReactDOM } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./ThreeInputForm.module.css";
import { IsListEmpty } from '../../../utilities/commonMethods'

class ThreeInputForm extends Component {
    state = {
        labelsList: [],
        typeArray: []
    }

    componentDidMount = () => {
        let labelsList = !IsListEmpty(this.props.label) ? this.props.label : [];
        let typeArray = !IsListEmpty(this.props.typeArray) ? this.props.typeArray : [];
        this.setState({
            labelsList: labelsList,
            typeArray: typeArray
        })
    }

    render() {
        // console.log(this.state.typeArray)
        return (
            <div className={classes.flexContainer}>
                {!IsListEmpty(this.state.labelsList) ? <> <Form.Group className={`mb-3 ${classes.flexItem}`}>
                    <Form.Label className={classes.FormLabels}>
                        {this.state.labelsList[0].label}
                    </Form.Label>
                    <Form.Control
                        value={this.state.labelsList[0].val}
                        onChange={(e) =>
                            this.props.onChange(e.target.value, this.state.labelsList[0].label)
                        }
                        type={this.state.typeArray[0]}
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
                            type={this.state.typeArray[1]}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${classes.flexItem}`}>
                        <Form.Label className={classes.FormLabels}>
                            {this.state.labelsList[2].label}
                        </Form.Label>
                        <Form.Control
                            value={this.state.labelsList[2].val}
                            onChange={(e) =>
                                this.props.onChange(e.target.value, this.state.labelsList[2].label)
                            }
                            type={this.state.typeArray[2]}
                            required
                        />
                    </Form.Group> </> : null}
            </div>
        );
    }
}

export default ThreeInputForm;
