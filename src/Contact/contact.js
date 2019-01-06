import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Animated } from "react-animated-css";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";

const styles = theme => ({
  all: {
    display: "grid",
    justifyContent: "center",
    marginBottom: "4em"
  },
  root: {
    backgroundColor: "rgba(200, 200, 200, .6)",
    minWidth: 200,
    maxWidth: 400,
    borderRadius: 20,
    padding: 20
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
  header: {
    fontFamily: "Righteous",
    color: "#d8dcf2",
    fontSize: "3rem"
  },
  helper: {
    color: "#d8dcf2",
    fontSize: "1.5rem",
    fontFamily: "Quicksand"
  },
  form: {
    width: "15rem",
    justifySelf: "center",
    marginBottom: 30
  },
  button1: {
    marginTop: 20,
    backgroundColor: "#e040fb"
  },
  contact: {
    position: "relative",
    bottom: 20
  }
});

class Contact extends Component {
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
            </div>
          </Toolbar>

          <div className={classes.all}>
            <h1 className={classes.header}>Contact</h1>
            <Animated animationIn="fadeInUp" isVisible={true}>
              <div className={classes.contact}>
                <Animated animationIn="pulse" isVisible={true}>
                  <p className={classes.helper}>We'd like to hear from you!</p>
                </Animated>

                <form
                  action="https://formspree.io/mtisikli@gmail.com"
                  method="POST"
                >
                  <div className={classes.root}>
                    <FormControl required className={classes.form}>
                      <TextField required name="name" label="Name" />
                    </FormControl>
                    <FormControl required className={classes.form}>
                      <TextField required name="email" label="Email" />
                    </FormControl>
                    <FormControl required className={classes.form}>
                      <TextField
                        required
                        name="message"
                        label="Message"
                        multiline="true"
                        rows={5}
                      />
                    </FormControl>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button1}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Animated>
          </div>
        </div>
        <BottomNavigation showLabels id="footer">
          <p id="copyright">© copyright Mehmet Tansu Işıklı</p>
        </BottomNavigation>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Contact);
