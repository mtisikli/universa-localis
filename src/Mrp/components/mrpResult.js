import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import MrpList from "./mrpList";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = {
  header: {
    color: "#E040FB",
    fontFamily: "Righteous",
    fontWeight: "bold",
    fontSize: "8vmax"
  },
  home: {
    color: "#d8dcf2",
    fontSize: "2rem",
    fontFamily: "Lobster, cursive",
    textDecoration: "underline",
    textDecorationColor: "#e040fb",
    float: "left"
  },
  buttonContainer: {
    width: "95%",
    display: "block"
  },
  button: {
    marginTop: 20,
    backgroundColor: "#e040fb"
  },
  button1: {
    backgroundColor: "#e040fb",
    marginBottom: 70
  },
  all: {
    backgroundColor: "#212127d3",
    borderRadius: 30,
    margin: "0.1em",
    marginBottom: 50
  },
  info: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "3vmax",
    position: "relative",
    bottom: "40px"
  },
  picture: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto"
  },
  date: {
    color: "#E040FB"
  }
};

class MrpResult extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div id="container">
          <Toolbar className={classes.buttonContainer}>
            <Animated
              animationIn="fadeInRight"
              animationOut="fadeOut"
              isVisible={true}
            >
              <Button id="home" className={classes.home} href="/">
                Universa Localis
              </Button>
            </Animated>
            <div id="bb">
              <Button id="buttons" className={classes.buttons} href="/">
                Home
              </Button>
              <Button id="buttons" className={classes.buttons} href="about">
                About
              </Button>
              <Button id="buttons" className={classes.buttons} href="contact">
                Contact
              </Button>
            </div>
          </Toolbar>

          <div className={classes.all}>
            <Animated animationIn="zoomIn" isVisible={true}>
              <h1 className={classes.header}>
                {this.props.receivedInfo.name[0]}
              </h1>
              <h3 className={classes.info}>
                Date: {this.props.receivedInfo.earth_date[0]}
              </h3>
            </Animated>
            <br />

            {this.props.receivedInfo.photos.map(i => (
              <MrpList camera={i.camera.full_name} img_src={i.img_src} />
            ))}

            <Button
              className={classes.button1}
              variant="contained"
              color="primary"
              href="/mrp"
            >
              Go Back
            </Button>
          </div>
        </div>

        <BottomNavigation showLabels id="footer">
          <BottomNavigationAction id="link" label="Home" href="/" />
          <BottomNavigationAction id="link" label="About" href="about" />
          <BottomNavigationAction id="link" label="Contact" href="contact" />
          <p id="copyright">© copyright 2018 Mehmet Tansu Işıklı</p>
        </BottomNavigation>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MrpResult);
