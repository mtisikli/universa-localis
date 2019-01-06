import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  title: {
    color: "#E040FB",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "1.5em"
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center"
  },
  picture: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto"
  },
  text: {
    color: "#30323e",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "0.9em",
    backgroundColor: "rgba(216, 220, 242, 0.6)",
    maxWidth: "100%",
    padding: 20,
    alignSelf: "center",
    marginBottom: "5em",
    borderRadius: 20
  }
};

function IvlList(props) {
  const { classes } = props;
  return (
    <div>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.flex}>
        <img className={classes.picture} src={props.photo} alt="" />
        <h3 className={classes.text}>{props.description}</h3>
      </div>
    </div>
  );
}

export default withStyles(styles)(IvlList);
