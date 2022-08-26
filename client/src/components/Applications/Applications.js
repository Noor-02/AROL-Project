import React, { Component } from "react";
import { ReactDOM } from "react";
import classes from "./Applications.module.css";
import { Card, Button } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";

class ApplyPage extends Component {
  state = {
    applicationsList: [
      { name: "Application1", status: "Incomplete" },
      { name: "Application2", status: "Complete" },
      { name: "Application3", status: "Recommendation Pending" },
    ],
  };

  onViewClicked = (i) => {
    alert("Application number clicked is : " + (i + 1));
  };

  onEditClicked = (i) => {
    alert("Application number edit clicked is : " + (i + 1));
  };

  // componentDidMount = () => {
  //     let applicationsList = !IsListEmpty(this.props.applicationsList) ? this.props.applicationsList : [];
  //     this.setState({
  //         applicationsList: applicationsList
  //     })

  // }

  render() {
    return (
      <div>
        {!IsListEmpty(this.state.applicationsList)
          ? this.state.applicationsList.map((item, index) => {
              return (
                <Card className={classes.CardClasses} key={index}>
                  <Card.Header>
                    <div className={classes.HeadingDivContainer}>
                      <span className={classes.HeaderClasses}>{item.name}</span>
                      <span
                        className={[
                          classes.StatusTextClasses,
                          item.status === "Complete"
                            ? classes.GreenText
                            : item.status === "Incomplete"
                            ? classes.RedText
                            : classes.YellowText,
                        ].join(" ")}
                      >
                        {item.status}
                      </span>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className={classes.DivCard}>
                      <span>This is an application card</span>
                      <div className={classes.DivCardButtons}>
                        <Button onClick={() => this.onViewClicked(index)}>
                          VIEW
                        </Button>
                        <Button onClick={() => this.onEditClicked(index)}>
                          EDIT
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
          : null}
      </div>
    );
  }
}

export default ApplyPage;
