import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import {
  mrpNameUpdate,
  mrpDateUpdate
} from "../../actions/formActions/actions";
import { Animated } from "react-animated-css";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { onOpen, onClose, getMrp } from "../../actions/formActions/actions";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const styles = theme => ({
  all: {
    display: "grid",
    justifyContent: "center",
    marginBottom: "4em"
  },
  root: {
    backgroundColor: "rgba(200, 200, 200, .8)",
    minWidth: 200,
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
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
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
  error: {
    fontSize: "0.7em",
    fontFamily: "Quicksand",
    color: "red",
    position: "absolute",
    top: 40
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
    backgroundColor: "#e040fb",
    position: "sticky"
  }
});

class MrpForm extends Component {
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
              <h1 className={classes.header}>Mars Rover Photos</h1>
            </Animated>
            <div className={classes.form}>
              <p className={classes.helper}>Please select a rover and a date</p>

              <Animated animationIn="fadeInUp" isVisible={true}>
                <div className={classes.root}>
                  <FormControl className={classes.formControl}>
                    <InputLabel>Select Rover</InputLabel>
                    <Select
                      value={this.props.name}
                      onClose={() => {
                        this.props.dispatch(onClose());
                      }}
                      onOpen={() => {
                        this.props.dispatch(onOpen());
                      }}
                      onChange={event => {
                        let value = event.target.value;
                        this.props.dispatch(mrpNameUpdate(value));
                      }}
                    >
                      <MenuItem value="curiosity">Curiosity</MenuItem>
                      <MenuItem value="opportunity">Opportunity</MenuItem>
                      <MenuItem value="spirit">Spirit</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <TextField
                      label="Select Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true
                      }}
                      value={this.props.date}
                      onClose={() => {
                        this.props.dispatch(onClose());
                      }}
                      onOpen={() => {
                        this.props.dispatch(onOpen());
                      }}
                      onChange={event => {
                        let value = event.target.value;
                        this.props.dispatch(mrpDateUpdate(value));
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
                      this.props.dispatch(getMrp());
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Animated>
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
    name: state.mrpForm.name,
    date: state.mrpForm.date,
    dialog_open: state.dialog_open
  };
};

MrpForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const withstyles = withStyles(styles)(MrpForm);
const mrpFormConnected = connect(mapStateToProps)(withstyles);
export default mrpFormConnected;
