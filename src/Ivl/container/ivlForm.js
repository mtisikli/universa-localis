import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { ivlKeyUpdate, ivlYearUpdate } from "../../actions/formActions/actions";
import { Animated } from "react-animated-css";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { getIvl } from "../../actions/formActions/actions";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const styles = theme => ({
  all: {
    display: "grid",
    justifyItems: "center",
    marginBottom: "4em"
  },
  root: {
    backgroundColor: "rgba(200, 200, 200, .8)",
    minWidth: 250,
    maxWidth: 400,
    borderRadius: 20,
    padding: "2rem"
  },
  form: {
    position: "relative",
    bottom: 30
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "90%",
    minWidth: "13em"
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
  error: {
    fontSize: "0.7em",
    fontFamily: "Quicksand",
    color: "red",
    position: "absolute",
    top: 40
  },
  header: {
    fontFamily: "Righteous",
    color: "#E040FB",
    fontSize: "3rem",
    marginTop: "0.5em",
    marginBottom: "1em"
  },
  helper: {
    color: "#d8dcf2",
    fontSize: "1.5rem",
    fontFamily: "Quicksand"
  },
  footer: {
    position: "absolute",
    bottom: 0
  }
});

class IvlForm extends Component {
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
              <h1 className={classes.header}>NASA's Image Library</h1>
            </Animated>
            <div className={classes.form}>
              <p className={classes.helper}>
                Please enter a keyword and a year
              </p>

              <Animated animationIn="fadeInUp" isVisible={true}>
                <div className={classes.root}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Search"
                      placeholder="ex. Earth"
                      value={this.props.keyword}
                      onChange={event => {
                        let value = event.target.value;
                        this.props.dispatch(ivlKeyUpdate(value));
                      }}
                    />
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Select Year"
                      placeholder="ex. 2018"
                      value={this.props.year}
                      onChange={event => {
                        let value = event.target.value;
                        this.props.dispatch(ivlYearUpdate(value));
                      }}
                    />
                    <p className={classes.error}>{this.props.errorText}</p>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    onClick={() => {
                      this.props.dispatch(getIvl());
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Animated>
            </div>
          </div>
        </div>
        <BottomNavigation showLabels id="footer" className={classes.footer}>
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

IvlForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const withstyles = withStyles(styles)(IvlForm);
const mrpFormConnected = connect(mapStateToProps)(withstyles);
export default mrpFormConnected;
