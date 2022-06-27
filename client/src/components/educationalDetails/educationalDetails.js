import React, { Component } from "react";
import { ReactDOM } from "react";
import { withRouter } from "react-router";
import { Table, Form } from "react-bootstrap";
import { IsListEmpty } from "../../utilities/CommonMethods";

class EducationalDetails extends Component {
  state = {
    optionList: ["10th", "12th", "Graduation", "Post Graduation", "PhD"],
    details: [{
      examination: "10th",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0
    },
    {
      examination: "12th",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0
    },
    {
      examination: "Graduation",
      nameOfExamPassed: " ",
      board: " ",
      duration: 0
    }]
  };

  // componentDidMount = () => {
  //   let optionList = this.props.optionList;
  //   // console.log(optionList);
  //   this.setState({
  //     optionList: optionList,
  //   });
  // };

  onChange = (val, index, label) => {
    let temp = this.state.details;
    temp[index][label] = val;

    this.setState({
      details: temp
    })
  }
  render() {
    return <div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Examination</th>
              <th>Name of Examination Passed</th>
              <th>Board/Institute/University</th>
              <th>Duration of Degree/Diploma</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {!IsListEmpty(this.state.details)
                  ? this.state.details.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><Form.Select
                          onChange={(e) => this.onChange(e.target.value, index, "examination")}
                          value={item.examination}>
                          {this.state.optionList.map((obj, i) => {
                            return (
                              <option
                                key={i}
                              >
                                {obj}
                              </option>
                            );
                          })}
                        </Form.Select></td>
                        <td>
                          <Form.Control
                            value={item.nameOfExamPassed}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "nameOfExamPassed")
                            }
                            type="text"
                            required
                          />
                        </td>
                        <td>
                          <Form.Control
                            value={item.board}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "board")
                            }
                            type="text"
                            required
                          />
                        </td>
                        <td>
                          <Form.Control
                            value={item.duration}
                            onChange={(e) =>
                              this.onChange(e.target.value, index, "duration")
                            }
                            type="number"
                            required
                          />
                        </td>
                      </tr>
                    )
                  })
                  : null}
              </>
            }
          </tbody>
        </Table>

        <br />
      </div>
    </div>;
  }
}

export default withRouter(EducationalDetails);
