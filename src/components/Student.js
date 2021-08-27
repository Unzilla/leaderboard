import React from "react";
import "./stylesheet.css";
class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      failure: false
    };
  }
  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }
  addScore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({
            success: true,
            failure: false
          });
        }
      }
    );
  }
  subScore() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score < 350) {
          this.setState({
            failure: true,
            success: false
          });
        }
      }
    );
  }
  render() {
    let success = this.state.success;
    let failure = this.state.failure;

    let text = "";
    if (success) {
      text = <span className="success">Success</span>;
    }
    if (failure) {
      text = <span className="failure">Failure</span>;
    }
    return (
      <div className="student">
        <div className="left">
          <h2 className="studentname">
            {this.props.name}
            <button className="add" onClick={() => this.addScore()}>
              +
            </button>
            <button className="sub" onClick={() => this.subScore()}>
              -
            </button>
          </h2>
          <p className="uni">
            {this.props.uni} {text}
          </p>
        </div>
        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}
export default Student;
