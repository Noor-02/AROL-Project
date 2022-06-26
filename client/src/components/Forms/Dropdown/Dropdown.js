import React, { Component } from "react";
import { ReactDOM } from "react";
import { Button, Form } from 'react-bootstrap';
import classes from './Dropdown.module.css'

class Dropdown extends Component {

    state = {
        optionList: [],
    }

    componentDidMount = () => {
        let optionList = this.props.optionList;
        this.setState({
            optionList: optionList,
        })
    }
    render() {
        return <div>
            <Form.Select>
                {this.state.optionList.map(item => {
                    <option onClick={() => this.props.onSelect(item.label)} >{item.label}</option>
                })}
            </Form.Select>
            <br />
        </div>;
    }
}

export default Dropdown;
