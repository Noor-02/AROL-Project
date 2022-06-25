import React, { Component } from "react";
import { ReactDOM } from "react";
import { Button, Form } from 'react-bootstrap';
import classes from './ThreeInputForm.module.css'

class ThreeInputForm extends Component {
    render() {
        return <div>
            <Form.Group className="mb-3">
                <Form.Label className={classes.FormLabels}>{this.props.label[0].label}</Form.Label>
                <Form.Control value={this.props.label[0].val} onChange={(e) => this.props.onChange(e.target.value, this.props.label[0].label)} type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className={classes.FormLabels}>{this.props.label[1].label}</Form.Label>
                <Form.Control value={this.props.label[1].val} onChange={(e) => this.props.onChange(e.target.value, this.props.label[1].label)} type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className={classes.FormLabels}>{this.props.label[2].label}</Form.Label>
                <Form.Control value={this.props.label[2].val} onChange={(e) => this.props.onChange(e.target.value, this.props.label[2].label)} type="text" required />
            </Form.Group>
        </div>;
    }
}

export default ThreeInputForm;
