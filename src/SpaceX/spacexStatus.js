import React, { Component } from "react";
import SpacexResult from "./spacexResult";
import Failure from "../components/failure";
import { connect } from "react-redux";
import { getSpacex } from "../actions/formActions/actions";

export class SpacexStatus extends Component {
  componentDidMount() {
    this.props.dispatch(getSpacex());
  }
  render() {
    let renderedSpacex;

    if (!this.props.default) {
      renderedSpacex = <SpacexResult receivedInfo={this.props.receivedInfo} />;
    }

    if (this.props.failure) {
      renderedSpacex = <Failure />;
    }

    return <div>{renderedSpacex}</div>;
  }
}

const mapStateToProps = state => {
  return {
    default: state.default,
    failure: state.isFailure,
    receivedInfo: state.receivedInfo
  };
};

const spacexStatusConnected = connect(mapStateToProps)(SpacexStatus);
export default spacexStatusConnected;
