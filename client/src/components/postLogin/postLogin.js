import React, { Component } from "react";
import classes from "./PostLogin.module.css";
import LoginNav from "../LogInNav/LoginNav";
import PersonalDetails from "../personalDetails/personalDetails";
import EducationalDetails from "../educationalDetails/educationalDetails";
import EmploymentDetails from "../employmentDetails/employmentDetails";
import { ReactDOM } from "react";
import { Switch, withRouter, Route } from "react-router";

class PostLogin extends Component {
  state = {
    NavItem: [
      { label: "Post Login Home", type: "home" },
      { label: "Employment Details", type: "employment-details" },
      { label: "Change Password", type: "change-password" },
      { label: "Applications", type: "applications" },
      { label: "Personal Details", type: "personal-details" },
      { label: "Educational Details", type: "educational-details" },
    ],
    name: "Full Name",
    username: "appicant1",
    activeItemType: "home",
    activeNavItem: 0,
  };

  onNavigationItemClick = (type) => {
    if (type == 6) {
      this.props.history.push("/");
    } else {
      let activeType = "";
      if (type !== this.state.activeNavItem) {
        activeType = this.state.NavItem[type].type;
        this.setState({
          activeNavItem: type,
          activeItemType: activeType,
        });
      }

      this.props.history.push("/post-login/" + activeType);
    }
  };

  componentDidMount() {
    this.props.location.pathname === this.props.match.url + "/home"
      ? this.setState({
          activeNavItem: 0,
          activeItemType: "home",
        })
      : this.props.location.pathname ===
        this.props.match.url + "/change-password"
      ? this.setState({
          activeNavItem: 2,
          activeItemType: "change-password",
        })
      : this.props.location.pathname === this.props.match.url + "/applications"
      ? this.setState({
          activeNavItem: 3,
          activeItemType: "applications",
        })
      : this.props.location.pathname ===
        this.props.match.url + "/personal-details"
      ? this.setState({
          activeNavItem: 4,
          activeItemType: "personal-details",
        })
      : this.props.location.pathname ===
        this.props.match.url + "/educational-details"
      ? this.setState({
          activeNavItem: 5,
          activeItemType: "educational-details",
        })
      : this.props.location.pathname ===
        this.props.match.url + "/employment-details"
      ? this.setState({
          activeNavItem: 1,
          activeItemType: "employment-details",
        })
      : this.setState({
          activeNavItem: 0,
          activeItemType: "home",
        });
  }
  render() {
    let renderdata;
    switch (this.state.activeNavItem) {
      case 0:
        renderdata = <div> this is post login </div>;
        break;
      case 1:
        renderdata = <EmploymentDetails />;
        break;
      case 2:
        renderdata = <div> this is change password </div>;
        break;
      case 3:
        renderdata = <div> this is applications</div>;
        break;
      case 4:
        renderdata = <PersonalDetails />;
        break;
      case 5:
        renderdata = <EducationalDetails />;
        break;
      default:
        renderdata = <div> this is post login </div>;
        break;
    }

    return (
      <div>
        <LoginNav
          onNavigationItemClick={this.onNavigationItemClick}
          activeItem={this.state.activeNavItem}
        />
        <div>{renderdata}</div>
      </div>
    );
  }
}

export default withRouter(PostLogin);
