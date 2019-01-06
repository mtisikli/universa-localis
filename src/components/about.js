import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(300px, 1fr)",
    gridTemplateRows: "1fr 40px",
    backgroundColor: "#212127",
    borderRadius: 20,
    opacity: 0.8,
    marginBottom: "3em",
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
  header: {
    fontFamily: "Righteous",
    color: "#d8dcf2",
    fontSize: "3rem",
    marginTop: "1em"
  },
  about: {
    display: "grid",
    backgroundColor: "#212127",
    borderRadius: 20,
    opacity: 0.8,
    marginLeft: "0.1em",
    marginRight: "0.1em"
  },
  project: {
    maxWidth: 500,
    justifySelf: "center",
    fontFamily: "Quicksand",
    fontWeight: "bold",
    color: "#d8dcf2",
    padding: "1em"
  },
  text: {
    gridColumnStart: 3,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 3,
    maxWidth: 400,
    minWidth: 200,
    fontFamily: "Quicksand",
    fontSize: "1em",
    fontWeight: "bold",
    color: "#d8dcf2",
    padding: "1em"
  },
  image: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    height: 200,
    width: 200,
    borderRadius: "100%",
    padding: 20,
    justifySelf: "center"
  },
  icons: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 2,
    gridRowEnd: 3
  },
  iconLink: {
    height: 20,
    width: "auto",
    position: "relative",
    bottom: 6,
    marginRight: 10
  },
  iconGit: {
    height: 30,
    width: "auto"
  },
  linkTexts: {
    color: '#d8dcf2',
    '&:hover': {
      color: "white"
    },
    textDecoration: 'none',
  }
});

class About extends Component {
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
              <Button id="buttons" className={classes.buttons} href="contact">
                Contact
              </Button>
            </div>
          </Toolbar>
          <Animated animationIn="zoomIn" isVisible={true}>
            <h1 className={classes.header}>About the Project</h1>
          </Animated>
          <Animated animationIn="fadeInUp" isVisible={true}>
            <div className={classes.about}>
              <p className={classes.project}>
                Universa Localis is a project co-founded by Mehmet Tansu Işıklı
                and Alican Akyüz for people who want to get a daily glimpse of
                the beauty of the universe and the ever-growing projects to
                explore more of it. We use public APIs provided by NASA, Spacex
                (Unofficial) and WikiSky to offer a full-blown experience. We
                hope you enjoy spending time on Universa Localis which is
                designed by two space enthusiasts to inspire more to become
                aware of the magnificence surrounding us.
              </p>
            </div>
          </Animated>
          <h1 className={classes.header}>About the Creators</h1>
          <div id="root" className={classes.root}>
            <img
              className={classes.image}
              src="https://avatars3.githubusercontent.com/u/43027842?s=460&v=4"
              alt="Tansu"
            />
            <div className={classes.icons}>
              {/* ICON 1 /////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <a
                href="https://www.linkedin.com/in/mehmet-tansu-i%C5%9F%C4%B1kl%C4%B1-5a27b114b/"
                title="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.iconLink}
                  src="https://www.mentoring.org/new-site/wp-content/uploads/2018/03/linkedin-white-logo-png-14.png"
                  alt=""
                />
              </a>

              {/* ICON 2 /////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <a
                href="https://github.com/mtisikli"
                title="GitHub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.iconGit}
                  src="https://www.bizzabo.com/hs-fs/hubfs/GitHub_Logo-1.png?width=1000&name=GitHub_Logo-1.png"
                  alt=""
                />
              </a>
            </div>

            <p id="text" className={classes.text}>
              Tansu is a full-stack developer based in Izmir, Turkey. He likes
              using React.js because of its modular, scalable, and flexible
              structure. He enjoys creating responsive and interactive user
              interfaces. Tansu studied and wrote his master thesis on
              twentieth-century electronic music, created Universa Localis and
              contributed to project Electrony's design and front-end
              development.
              <br />
              <br />
              <br />
              Personal Website:{" "}
              <a className={classes.linkTexts}
                href="http://tansuisikli.space"
                rel="noopener noreferrer"
                target="_blank"
              >
                tansuisikli.space
              </a>
            </p>
          </div>
          <div id="root" className={classes.root}>
            <img
              className={classes.image}
              src="https://avatars3.githubusercontent.com/u/42584148?s=460&v=4"
              alt="Alican"
            />
            <div className={classes.icons}>
              {/* ICON 1 /////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <a
                href="https://www.linkedin.com/in/alican-akyuz-80b67416b/"
                title="LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.iconLink}
                  src="https://www.mentoring.org/new-site/wp-content/uploads/2018/03/linkedin-white-logo-png-14.png"
                  alt=""
                />
              </a>

              {/* ICON 2 /////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <a
                href="https://github.com/AlicanAkyuz"
                title="GitHub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={classes.iconGit}
                  src="https://www.bizzabo.com/hs-fs/hubfs/GitHub_Logo-1.png?width=1000&name=GitHub_Logo-1.png"
                  alt=""
                />
              </a>
            </div>
            <p id="text" className={classes.text}>
              Alican is a full-stack developer currently based in Oregon, USA.
              He works primarily on front-end development with React.js and
              Material Design, and enjoys solving UX problems. He made
              contributions to the development of Electrony's philosophy,
              design, user interface, and RESTful API that works with Spotify
              Web API and also contributed to Universa Localis.
              <br />
              <br />
              <br />
              Personal Website:{" "}
              <a className={classes.linkTexts}
                href="http://alicanakyuz.tech"
                rel="noopener noreferrer"
                target="_blank"
              >
                alicanakyuz.tech
              </a>
            </p>
          </div>
        </div>

        {/* FOOTER /////////////////////////////////////////////////////////////////////////////////////////////// */}
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

export default withStyles(styles)(About);
