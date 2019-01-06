import React, { Component } from "react";
import { connect } from "react-redux";
import MrpForm from "./mrpForm";
import MrpResult from "../components/mrpResult";
import Failure from "../../components/failure";

class MrpStatus extends Component {
  render() {
    let renderedMrp;

    if (!this.props.submitted) {
      renderedMrp = <MrpForm />;
    }

    if (this.props.error) {
      renderedMrp = (
        <MrpForm
          errorText={
            "Sorry! There are no pictures taken by this rover on this date."
          }
        />
      );
    }

    if (this.props.showResult) {
      renderedMrp = <MrpResult receivedInfo={this.props.receivedInfo} />;
    }

    if (this.props.failure) {
      renderedMrp = <Failure />;
    }

    return <div>{renderedMrp}</div>;
  }
}

const mapStateToProps = state => {
  return {
    default: state.default,
    error: state.error,
    showResult: state.showResult,
    receivedInfo: state.receivedInfo,
    failure: state.isFailure
  };
};

const mrpStatusConnected = connect(mapStateToProps)(MrpStatus);
export default mrpStatusConnected;
