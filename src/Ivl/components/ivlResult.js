import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import IvlList from "./ivlList";

const styles = {
  header: {
    color: "#d8dcf2",
    fontFamily: "Righteous",
    fontWeight: "bold",
    fontSize: "8vmax",
    textDecoration: "underline",
    textDecorationColor: "#e040fb",
    marginBottom: "1em"
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
    margin: "0.1em",
    backgroundColor: "#212127d3",
    borderRadius: 30,
    marginBottom: 50,
    width: "96vw"
  },
  year: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "3vmax",
    position: "relative",
    bottom: "1.5em"
  },
  button1: {
    backgroundColor: "#e040fb",
    marginBottom: 70
  }
};

class ivlResult extends Component {
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
                {this.props.keyword.toUpperCase()}
              </h1>
              <h1 className={classes.year}>{this.props.year}</h1>
            </Animated>
            {this.props.receivedInfo.info.map(i =>
              i.data.map(u =>
                u.media_type === "image" ? (
                  <IvlList
                    key={i}
                    title={i.data.map(e =>
                      e.title.length < 100 ? e.title : null
                    )}
                    description={i.data.map(e => e.description)}
                    photo={i.links.map(e => e.href)}
                  />
                ) : null
              )
            )}

            <Button
              className={classes.button1}
              variant="contained"
              color="primary"
              href="/ivl"
            >
              Go Back
            </Button>
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
    keyword: state.ivlForm.keyword,
    year: state.ivlForm.year
  };
};

ivlResult.propTypes = {
  classes: PropTypes.object.isRequired
};

const withstyles = withStyles(styles)(ivlResult);
const ivlResultConnected = connect(mapStateToProps)(withstyles);
export default ivlResultConnected;
