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
    fontSize: "3vmax",
    marginBottom: "2rem"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center"
  },
  text: {
    color: "#30323e",
    fontFamily: "Quicksand",
    backgroundColor: "rgba(216, 220, 242, 0.6)",
    fontWeight: "bold",
    padding: "1em",
    marginTop: "1em",
    borderRadius: 20
  },
  all: {
    backgroundColor: "#212127d3",
    borderRadius: 30,
    margin: "0.1em",
    marginBottom: "4em"
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
  button1: {
    backgroundColor: "#e040fb",
    marginBottom: "2em",
    margin: 30
  },
  button2: {
    marginBottom: "2em",
    margin: 30
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
    marginTop: 20,
    backgroundColor: "#e040fb"
  }
};
class TechportResult extends Component {
  render() {
    const { classes } = this.props;

    let description;
    if (this.props.receivedInfo.description === undefined) {
      description = null;
    } else {
      description = (
        <div className={classes.text}>
          <h3 className={classes.about}>About the Project</h3>
          <p>{this.props.receivedInfo.description}</p>
        </div>
      );
    }

    let benefits;
    if (this.props.receivedInfo.benefits === undefined) {
      benefits = null;
    } else {
      benefits = (
        <div className={classes.text}>
          <h3 className={classes.about}>Benefits</h3>
          <p>{this.props.receivedInfo.benefits}</p>
        </div>
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

          <div className={classes.all}>
            <div className={classes.body}>
              <div>
                <Animated animationIn="zoomIn" isVisible={true}>
                  <h1 className={classes.header}>
                    {this.props.receivedInfo.title}
                  </h1>
                  <h3 className={classes.info}>
                    End Date: {this.props.receivedInfo.endDate}
                  </h3>
                </Animated>
              </div>
              <div className={classes.grid}>
                <img
                  className={classes.picture}
                  src={this.props.receivedInfo.img_src}
                  alt=""
                />
                {description}
                {benefits}
              </div>
              <div />
              <Button
                className={classes.button1}
                variant="contained"
                color="primary"
                href="techport"
              >
                Show Another Project
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
        </div>

        <BottomNavigation showLabels id="footer">
          <BottomNavigationAction id="link" label="Home" href="/" />
          <BottomNavigationAction id="link" label="About" href="about" />
          <BottomNavigationAction id="link" label="Contact" href="contact" />
          <p id="copyright">© copyright Mehmet Tansu Işıklı</p>
        </BottomNavigation>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    receivedInfo: state.receivedInfo
  };
};

TechportResult.propTypes = {
  classes: PropTypes.object.isRequired
};

const withstyles = withStyles(styles)(TechportResult);
const techportResultConnected = connect(mapStateToProps)(withstyles);
export default techportResultConnected;
