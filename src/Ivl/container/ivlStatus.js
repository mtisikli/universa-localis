import React, { Component } from "react";
import { connect } from "react-redux";
import IvlForm from "./ivlForm";
import IvlResult from "../components/ivlResult";
import Loading from "../../components/loading";
import Failure from "../../components/failure";

class IvlStatus extends Component {
  render() {
    let renderedIvl;

    if (!this.props.default) {
      renderedIvl = <IvlForm />;
    }

    if (this.props.error) {
      renderedIvl = (
        <IvlForm errorText="Sorry! There are no pictures available for your criteria." />
      );
    }

    if (this.props.loading) {
      renderedIvl = <Loading />;
    }

    if (this.props.showResult) {
      renderedIvl = <IvlResult receivedInfo={this.props.receivedInfo} />;
    }

    if (this.props.failure) {
      renderedIvl = <Failure />;
    }

    return <div>{renderedIvl}</div>;
  }
}

const mapStateToProps = state => {
  return {
    default: state.default,
    error: state.error,
    loading: state.isLoading,
    showResult: state.showResult,
    receivedInfo: state.receivedInfo,
    failure: state.isFailure
  };
};

const IvlConnected = connect(mapStateToProps)(IvlStatus);
export default IvlConnected;
