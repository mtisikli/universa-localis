import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  camera: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "3vmax",
    position: "relative",
    bottom: "60px"
  },
  picture: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto",
    marginBottom: 40,
    position: "relative",
    bottom: 80
  }
};

function MrpList(props) {
  const { classes } = props;

  return (
    <div>
      <h3 className={classes.camera}>Camera: {props.camera}</h3>
      <img className={classes.picture} src={props.img_src} alt="" />
    </div>
  );
}

export default withStyles(styles)(MrpList);
