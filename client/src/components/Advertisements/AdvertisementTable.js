import React, { Component, Fragment } from "react";
import classes from './AdvertisementTable.module.css'
import { ReactDOM } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";

class AdvertisementCard extends Component {
    state = {
        adHome: false
    }

    componentDidMount() {
        let adHome = this.props.adHome
        this.setState({
            adHome: adHome
        })
    }

    render() {
        return (
            <>
                <table>
                    <th>Name</th>
                    <th className={classes.TableHeading}>Advertisements</th>
                    <th className={classes.TableHeading}>For Indian Applicants</th>
                    <th className={classes.TableHeading}>For International Applicants</th>
                    <th className={classes.TableHeading}>Apply Here</th>
                    <tbody>
                        <tr>
                            <td className={classes.SubHeading}><a href="http://cse.iiti.ac.in/">Computer Science and Engineering</a></td>
                            <td className={classes.SubHeading}><a href="http://cse.iiti.ac.in/">Advertisement from CSE</a></td>
                            <td className={classes.SubHeading}>6 Sept 2022</td>
                            <td className={classes.SubHeading}>6 Sept 2022</td>
                            <td className={classes.SubHeading}><a href={this.state.adHome ? "/" : "http://localhost:3000/post-login/complete-form"}>Apply</a></td>
                        </tr>
                        <tr>
                            <td className={classes.SubHeading}><a href="http://cse.iiti.ac.in/">Computer Science and Engineering</a></td>
                            <td className={classes.SubHeading}><a href="http://cse.iiti.ac.in/">Advertisement from CSE</a></td>
                            <td className={classes.SubHeading}>6 Sept 2022</td>
                            <td className={classes.SubHeading}>6 Sept 2022</td>
                            <td className={classes.SubHeading}><a href={this.state.adHome ? "/" : "http://localhost:3000/post-login/complete-form"}>Apply</a></td>

                        </tr>
                        <tr>
                            <td className={classes.SubHeading}><a href="http://cse.iiti.ac.in/">Computer Science and Engineering</a></td>
                            <td className={classes.SubHeading}><a href="http://cse.iiti.ac.in/">Advertisement from CSE</a></td>
                            <td className={classes.SubHeading}>6 Sept 2022</td>
                            <td className={classes.SubHeading}>6 Sept 2022</td>
                            <td className={classes.SubHeading}><a href={this.state.adHome ? "/" : "http://localhost:3000/post-login/complete-form"}>Apply</a></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default withRouter(AdvertisementCard)