import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../App";
import ApodStatus from "../Apod/apodStatus";

class Condition extends Component {
  render() {
    let renderedPage;

    if (!this.props.default) {
      renderedPage = <App />;
    }

    if (this.props.showResult) {
      renderedPage = <ApodStatus />;
    }
    return renderedPage;
  }
}

const mapStateToProps = state => {
  state = state.FormReducer;
  return {
    default: state.default,
    showResult: state.showResult
  };
};

const conditionConnected = connect(mapStateToProps)(Condition);
export default conditionConnected;
