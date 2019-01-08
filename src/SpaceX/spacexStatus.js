import React, { Component } from "react";
import SpacexResult from "./spacexResult";
import Loading from "../components/loading";
import Failure from "../components/failure";
import { connect } from "react-redux";
import { getSpacex } from "../actions/formActions/actions";

export class SpacexStatus extends Component {
  componentDidMount() {
    this.props.dispatch(getSpacex());
  }
  render() {
    let renderedSpacex;

    if (this.props.loading) {
      renderedSpacex = <Loading />;
    }

    if (this.props.showResult) {
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
    loading: state.isLoading,
    showResult: state.showResult,
    receivedInfo: state.receivedInfo,
    failure: state.isFailure
  };
};

const spacexStatusConnected = connect(mapStateToProps)(SpacexStatus);
export default spacexStatusConnected;
