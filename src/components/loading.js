import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    width: "100vmax"
  }
});

function Loading(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}

export default withStyles(styles)(Loading);
