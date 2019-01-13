import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { starNameUpdate, getFinalQuery } from "../actions/formActions/actions";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const styles = {
  header: {
    color: "#E040FB",
    fontFamily: "Righteous",
    fontWeight: "bold",
    fontSize: "5vmax",
    marginBottom: "5rem"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center"
  },
  about: {
    fontFamily: "Righteous"
  },
  text: {
    color: "#30323e",
    fontFamily: "Quicksand",
    backgroundColor: "rgba(216, 220, 242, 0.6)",
    fontWeight: "bold",
    padding: 30
  },
  all: {
    backgroundColor: "#212127d3",
    borderRadius: 30,
    margin: "0.5vmax",
    marginBottom: "4em"
  },
  formControl: {
    alignSelf: "center",
    width: "30vmax",
    backgroundColor: "#d8dcf2ce",
    padding: 10,
    borderRadius: 5
  },
  info: {
    color: "#d8dcf2",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: "3vmax"
  },
  picture: {
    maxWidth: "90%",
    maxHeight: "auto",
    margin: "auto"
  },
  button1: {
    backgroundColor: "#e040fb",
    maxWidth: "100%",
    height: "auto"
  },
  button2: {
    backgroundColor: "#e040fb",
    maxWidth: "100%",
    height: "auto",
    margin: "3em"
  },
  query: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30
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

class StarmapResult extends Component {
  render() {
    const { classes } = this.props;

    let renderedMap;
    if (this.props.showResult) {
      renderedMap = (
        <iframe
          className={classes.picture}
          title="skymap"
          src={this.props.finalQuery}
          width="100%"
          height="500vh"
        />
      );
    } else {
      renderedMap = (
        <iframe
          className={classes.picture}
          title="skymap"
          src="https://server7.sky-map.org/skywindow?object=alnitak&ra=5.59&de=-5.45&zoom=4&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=0&show_galaxies=1&img_source=DSS2"
          width="100%"
          height="500vh"
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
          <div className={classes.all}>
            <div className={classes.body}>
              <Animated animationIn="zoomIn" isVisible={true}>
                <h1 className={classes.header}>The Sky Map</h1>
              </Animated>
              <div className={classes.grid}>
                <div className={classes.query}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Enter a star name"
                      placeholder="ex. M43"
                      value={this.props.starName}
                      onChange={event => {
                        let value = event.target.value;
                        this.props.dispatch(starNameUpdate(value));
                      }}
                    />
                  </FormControl>
                  <Button
                    className={classes.button1}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => {
                      this.props.dispatch(getFinalQuery());
                    }}
                  >
                    Go!
                  </Button>
                </div>
                {renderedMap}
              </div>
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
          <p id="copyright">© copyright 2018 Mehmet Tansu Işıklı</p>
        </BottomNavigation>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    starName: state.starForm.starName,
    showResult: state.showResult,
    finalQuery: state.finalQuery,
    sdss: state.sdss
  };
};

StarmapResult.propTypes = {
  classes: PropTypes.object.isRequired
};

const withstyles = withStyles(styles)(StarmapResult);
const mrpFormConnected = connect(mapStateToProps)(withstyles);
export default mrpFormConnected;
