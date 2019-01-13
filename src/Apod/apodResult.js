import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    fontSize: "5vmax",
    marginBottom: "1rem"
  },
  text: {
    color: "#30323e",
    fontFamily: "Quicksand",
    backgroundColor: "rgba(216, 220, 242, 0.6)",
    fontWeight: "bold",
    padding: 30,
    marginTop: 50
  },
  all: {
    backgroundColor: "#212127d3",
    borderRadius: 20,
    margin: "0.1em",
    marginBottom: 50
  },
  info: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "2.5vmax"
  },
  picture: {
    maxWidth: "100%",
    maxHeight: "100vh",
    margin: "auto"
  },
  about: {
    fontFamily: "Righteous"
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
    margin: 70,
    backgroundColor: "#e040fb"
  }
};

class ApodResult extends Component {
  render() {
    const { classes } = this.props;

    let renderedMedia;

    if (this.props.receivedInfo.media_type === "video") {
      renderedMedia = (
        <iframe
          title="video"
          className={classes.picture}
          src={this.props.receivedInfo.link}
          allowfullscreen="true"
          width="640"
          height="480"
        />
      );
    } else {
      renderedMedia = (
        <img
          className={classes.picture}
          src={this.props.receivedInfo.link}
          alt=""
        />
      );
    }

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

          <Animated animationIn="fadeInUp" isVisible={true}>
            <div className={classes.all}>
              <div>
                <h1 className={classes.header}>
                  {this.props.receivedInfo.title}
                </h1>
                <h3 className={classes.info}>
                  Date: {this.props.receivedInfo.date}
                </h3>
                <h3 className={classes.info}>
                  {this.props.receivedInfo.artist}
                </h3>
              </div>
              <div>
                {renderedMedia}
                <div className={classes.text}>
                  <h3 className={classes.about}>About the Work</h3>
                  <p>{this.props.receivedInfo.explanation}</p>
                </div>
              </div>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                href="/"
              >
                Go Back
              </Button>
            </div>
          </Animated>
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

const mapStateToProps = state => {
  return {
    receivedInfo: state.receivedInfo,
    url: state.url
  };
};

ApodResult.propTypes = {
  classes: PropTypes.object.isRequired
};

const withstyles = withStyles(styles)(ApodResult);
const apodResultConnected = connect(mapStateToProps)(withstyles);
export default apodResultConnected;
