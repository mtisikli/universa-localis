import React, { Component } from "react";
import TechportResult from "./techportResult";
import Failure from "../components/failure";
import { connect } from "react-redux";

export class TechportStatus extends Component {
  render() {
    let renderedTechport;

    if (!this.props.default) {
      renderedTechport = <TechportResult />;
    }

    if (this.props.error) {
      renderedTechport = <Failure />;
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
    failure: state.isFailure,
    error: state.error
  };
};

const techportStatusConnected = connect(mapStateToProps)(TechportStatus);
export default techportStatusConnected;
