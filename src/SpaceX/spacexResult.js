import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = {
  header: {
    color: "#E040FB",
    fontFamily: "Righteous",
    fontWeight: "bold",
    fontSize: "3.5vmax",
    marginBottom: "2rem"
  },
  about: {
    fontFamily: "Righteous"
  },
  text: {
    color: "#30323e",
    fontFamily: "Quicksand",
    backgroundColor: "rgba(216, 220, 242, 0.6)",
    fontWeight: "bold",
    padding: "1em"
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
  all: {
    backgroundColor: "#212127d3",
    borderRadius: 30,
    margin: "1vmax",
    marginBottom: "4em"
  },
  info: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "3vmax"
  },
  picture: {
    maxWidth: "90%",
    maxHeight: "100vh",
    marginBottom: "2em"
  },
  button1: {
    backgroundColor: "#e040fb",
    margin: "3rem 3rem"
  },
  button2: {
    margin: 30
  },
  links: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridRowGap: "4rem",
    justifyItems: "center",
    marginBottom: "3rem"
  },
  urls: {
    fontFamily: "Righteous",
    color: "#d8dcf2",
    fontSize: "3rem",
    marginTop: "3rem"
  }
};

class SpacexResult extends Component {
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
            <div className={classes.body}>
              <Animated animationIn="zoomIn" isVisible={true}>
                <h1 className={classes.header}>
                  Mission {this.props.receivedInfo.flight_number}:{" "}
                  {this.props.receivedInfo.mission_name}
                </h1>
                <h3 className={classes.info}>
                  Launch Year: {this.props.receivedInfo.launch_year}
                </h3>
                <h3 className={classes.info}>
                  Rocket Name: {this.props.receivedInfo.rocket_name}
                </h3>
              </Animated>
              <img
                className={classes.picture}
                src={this.props.receivedInfo.mission_patch}
                alt=""
              />
              <div className={classes.text}>
                <h3 className={classes.about}>Mission Details </h3>
                <p>{this.props.receivedInfo.details}</p>
              </div>
              <div className={classes.links}>
                <h1 className={classes.urls}>Links</h1>
                <iframe
                  className={classes.link}
                  id="frame"
                  title="article"
                  width="70%"
                  height="500"
                  src={this.props.receivedInfo.article_link}
                />
                <iframe
                  className={classes.link}
                  id="frame"
                  title="wiki"
                  width="70%"
                  height="500"
                  src={this.props.receivedInfo.wikipedia}
                />
              </div>
            </div>
            <Button
              className={classes.button1}
              variant="contained"
              color="primary"
              href="spacex"
            >
              Show Another Mission
            </Button>
            <Button
              className={classes.button2}
              variant="contained"
              color="primary"
              href="/"
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

export default withStyles(styles)(SpacexResult);
