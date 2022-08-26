import React, { Component } from "react";
import classes from "./PostLogin.module.css";
import LoginNav from "../LogInNav/LoginNav";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EducationalDetails from "../EducationalDetails/EducationalDetails";
import EmploymentDetails from "../EmploymentDetails/EmploymentDetails";
import ApplyPage from "../ApplyPage/ApplyPage";
import Applications from "../Applications/Applications";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import CompleteForm from "../ApplyPage/CompleteForm";
import PostLoginHome from "./PostLoginHome";
import ChangePassword from "../ChangePassword/ChangePassword";
import ResourceAPIController from "../../WebServices/ResourceAPIController";
import { GetFromLocalStorage } from "../../utilities/CommonMethods";

class PostLogin extends Component {
  state = {
    NavItem: [
      { label: "Post Login Home", type: "home" },
      { label: "Employment Details", type: "employment-details" },
      { label: "Change Password", type: "change-password" },
      { label: "Applications", type: "applications" },
      { label: "Personal Details", type: "personal-details" },
      { label: "Educational Details", type: "educational-details" },
      { label: "Apply", type: "apply" },
    ],
    name: "Full Name",
    username: "appicant1",
    activeItemType: "home",
    activeNavItem: 0,
  };

  onNavigationItemClick = (type) => {
    if (type === 7) {
      ResourceAPIController.UserLogout(GetFromLocalStorage("Token")).then(response => {
        console.log(response.data);
        this.props.history.push("/");
      })
        .catch(error => {
          console.log("Failed =>", error);
        })
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
                : this.props.location.pathname === this.props.match.url + "/apply"
                  ? this.setState({
                    activeNavItem: 6,
                    activeItemType: "apply",
                  })
                  : this.props.location.pathname === this.props.match.url + "/complete-form"
                    ? this.setState({
                      activeNavItem: 7,
                      activeItemType: "complete-form",
                    })
                    : this.props.location.pathname ===
                      this.props.match.url + "/change-password"
                      ? this.setState({
                        activeNavItem: 7,
                        activeItemType: "change-password",
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
        renderdata = <PostLoginHome />;
        break;
      case 1:
        renderdata = <EmploymentDetails />;
        break;
      case 2:
        renderdata = <ChangePassword />;
        break;
      case 3:
        renderdata = <Applications />;
        break;
      case 4:
        renderdata = <PersonalDetails />;
        break;
      case 5:
        renderdata = <EducationalDetails />;
        break;
      case 6:
        renderdata = <ApplyPage />;
        break;
      case 7:
        renderdata = <CompleteForm />;
        break;
      default:
        renderdata = <PostLoginHome />;
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
