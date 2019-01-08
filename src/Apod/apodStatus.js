import React, { Component } from "react";
import ApodResult from "./apodResult";
import Loading from "../components/loading";
import Failure from "../components/failure";
import { connect } from "react-redux";
import { getApod } from "../actions/formActions/actions";

export class ApodStatus extends Component {
  componentDidMount() {
    this.props.dispatch(getApod());
  }

  render() {
    let renderedApod;

    if (this.props.loading) {
      renderedApod = <Loading />;
    }

    if (this.props.showResult) {
      renderedApod = <ApodResult receivedInfo={this.props.receivedInfo} />;
    }

    if (this.props.failure) {
      renderedApod = <Failure />;
    }

    return <div>{renderedApod}</div>;
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

const apodStatusConnected = connect(mapStateToProps)(ApodStatus);
export default apodStatusConnected;
