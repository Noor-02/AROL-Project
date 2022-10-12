import React, { Component, Fragment } from "react";
import classes from './PostLoginAdPage.module.css'
import { ReactDOM } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import AdvertisementTable from "./AdvertisementTable";

class PostLoginAdPage extends Component {

    render() {
        return <div style={{ margin: "3rem 8rem" }}>
            <h2 className={classes.Heading}>Advertisement for admission to Ph.D. Program</h2>
            <h3 className={classes.SubHeading}> IITI/Acad/PhD Admissions/2022-23 </h3>
            <AdvertisementTable />
        </div>
    }

}

export default withRouter(PostLoginAdPage);