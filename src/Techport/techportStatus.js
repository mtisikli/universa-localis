import React, { Component } from "react";
import TechportResult from "./techportResult";
import Loading from "../components/loading";
import Failure from "../components/failure";
import { connect } from "react-redux";
import { getTechport } from "../actions/formActions/actions";

export class TechportStatus extends Component {
  componentDidMount() {
    this.props.dispatch(getTechport());
  }
  render() {
    let renderedTechport;

    if (!this.props.default) {
      renderedTechport = <Loading />;
    }

    if (this.props.showResult) {
      renderedTechport = (
        <TechportResult receivedInfo={this.props.receivedInfo} />
      );
    }

    if (this.props.failure) {
      renderedTechport = <Failure />;
    }

    return <div>{renderedTechport}</div>;
  }
}

const mapStateToProps = state => {
  return {
    default: state.default,
    loading: state.isLoading,
    showResult: state.showResult,
    receivedInfo: state.receivedInfo,
    failure: state.isFailure
  };
};

const techportStatusConnected = connect(mapStateToProps)(TechportStatus);
export default techportStatusConnected;
