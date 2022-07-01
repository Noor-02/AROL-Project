import React, { Component } from "react";
import { ReactDOM } from "react";
import { IsListEmpty } from '../../utilities/CommonMethods'

class ApplyPage extends Component {

    state = {
        applicationsList: [],
    }

    onViewClicked = (i) => {
        alert("Application number clicked is : " + i + 1);
    }

    componentDidMount = () => {
        let applicationsList = !IsListEmpty(this.props.applicationsList) ? this.props.applicationsList : [];
        this.setState({
            applicationsList: applicationsList
        })

    }
    render() {
        return (
            <div>
                {!IsListEmpty(this.state.applicationsList) ? this.state.applicationsList.map((item, index) => {
                    return (<div>
                        <span>Applications number : {index + 1}</span>
                        <button onClick={() => this.onViewClicked(index)}>View</button>
                    </div>)
                }) : null}
            </div>
        );
    }
}

export default ApplyPage;
