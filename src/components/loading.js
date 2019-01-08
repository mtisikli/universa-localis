import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    marginTop: "25vmax"
  }
};

function Loading(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <LinearProgress color="secondary" />
        <br />
        <LinearProgress color="secondary" />
        <br />
        <LinearProgress color="secondary" />
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(Loading);
