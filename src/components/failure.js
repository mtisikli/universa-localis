import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import { relative } from "path";

const styles = {
  header: {
    color: "#E040FB",
    fontFamily: "Righteous",
    fontWeight: "bold",
    fontSize: "3rem"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center"
  },
  home: {
    color: "#d8dcf2",
    fontSize: "2rem",
    fontFamily: "Lobster, cursive",
    textDecoration: "underline",
    textDecorationColor: "#e040fb"
  },
  all: {
    backgroundColor: "#212127",
    opacity: 0.8,
    borderRadius: "5%",
    paddingTop: 20,
    margin: 30
  },
  info: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "30px"
  },
  button: {
    position: relative,
    top: 10,
    backgroundColor: "#e040fb"
  }
};

function Failure(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Toolbar>
        <Animated
          animationIn="fadeInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
          <Button className={classes.home} href="/">
            Universa Localis
          </Button>
        </Animated>
      </Toolbar>
      <div className={classes.all}>
        <div>
          <h1 className={classes.header}>We are sorry!</h1>
          <h3 className={classes.info}>There has been a problem.</h3>
          <h3 className={classes.info}>Please try again!</h3>
        </div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          style={{ marginBottom: 70 }}
          href="/"
        >
          Go Back
        </Button>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(Failure);
