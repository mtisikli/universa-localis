import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* NAVIGATION /////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Toolbar>
          <Button id="buttons" href="about">
            About
          </Button>
          <Button id="buttons" href="contact">
            Contact
          </Button>
        </Toolbar>

        {/* SHOWCASE /////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="showCase">
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
          >
            <a href="/">
              <h1>Universa Localis</h1>
            </a>
          </Animated>
          <Animated animationIn="zoomIn" isVisible={true}>
            <p>The whole universe on your screen</p>
          </Animated>
        </div>
        <a
          href="https://www.nasa.gov"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="icons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2000px-NASA_logo.svg.png"
            alt="Nasa"
          />
        </a>
        <a
          href="https://www.spacex.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="icons"
            src="https://stotion.com/wp-content/uploads/2016/07/SpaceX-logo-vector-update.jpg"
            alt="SpaceX"
          />
        </a>

        <div className="body">
          {/* CARD 1 /////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card className="card">
            <CardActionArea className="action">
              <a href="/apod">
                <CardMedia
                  className="media"
                  component="img"
                  alt=""
                  image="https://apod.nasa.gov/apod/image/1812/GeminidAurora_Hansen1_960.jpg"
                  height="160"
                  title="Astronomy Picture"
                />
              </a>
              <CardContent className="action">
                <Typography id="text" gutterBottom variant="h5" component="h2">
                  APOD
                </Typography>
                <Typography id="text" component="p">
                  Get the astronomy picture of the day, every day!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* CARD 2 /////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card className="card">
            <CardActionArea className="action">
              <a href="/mrp">
                <CardMedia
                  className="media"
                  component="img"
                  alt=""
                  image="http://www.digitaltrends.com/wp-content/uploads/2012/08/curiosity-rover-lead.jpg"
                  height="160"
                  title="Mars Rover Photos"
                />
              </a>
              <CardContent className="action">
                <Typography id="text" gutterBottom variant="h5" component="h2">
                  Mars Rover Photos
                </Typography>
                <Typography id="text" component="p">
                  Get the images taken by the rovers on Mars!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* CARD 3 /////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card className="card">
            <CardActionArea className="action">
              <a href="ivl">
                <CardMedia
                  className="media"
                  component="img"
                  alt=""
                  image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  height="160"
                  title="NASA IVL"
                />
              </a>
              <CardContent className="action">
                <Typography id="text" gutterBottom variant="h5" component="h2">
                  NASA Image Library
                </Typography>
                <Typography id="text" component="p">
                  Search media on NASA's Image Library by keyword and year!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* CARD 4 /////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card className="card">
            <CardActionArea className="action">
              <a href="techport">
                <CardMedia
                  className="media"
                  component="img"
                  alt=""
                  image="https://www.nasa.gov/centers/dryden/images/content/284679main_tech_graphic_lg.jpg"
                  height="160"
                  title="Techport"
                />
              </a>
              <CardContent className="action">
                <Typography id="text" gutterBottom variant="h5" component="h2">
                  NASA Techport
                </Typography>
                <Typography id="text" component="p">
                  Discover the technologies NASA is currently working on!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* CARD 5 /////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card className="card">
            <CardActionArea className="action">
              <a href="spacex">
                <CardMedia
                  className="media"
                  component="img"
                  alt=""
                  image="https://www.nasaspaceflight.com/wp-content/uploads/2018/11/2018-11-15-23_29_22-Window-1170x854.jpg"
                  height="160"
                  width="auto"
                  title="SpaceX"
                />
              </a>
              <CardContent className="action">
                <Typography id="text" gutterBottom variant="h5" component="h2">
                  SpaceX Missions
                </Typography>
                <Typography id="text" component="p">
                  View all the details about SpaceX missions!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* CARD 6 /////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Card className="card">
            <CardActionArea>
              <a href="starmap">
                <CardMedia
                  className="media"
                  component="img"
                  alt=""
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1sBaT8QRQnSlxj_ihCGGM5ugwMaYRe78b_c3F4tthleRrIp7rA"
                  height="160"
                  title="Starmap"
                />
              </a>
              <CardContent className="action">
                <Typography id="text" gutterBottom variant="h5" component="h2">
                  The Sky Map
                </Typography>
                <Typography id="text" component="p">
                  Search for the stars and view them on a map!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        {/* FOOTER /////////////////////////////////////////////////////////////////////////////////////////////// */}
        <BottomNavigation showLabels id="footer">
          <BottomNavigationAction id="link" label="About" href="about" />
          <BottomNavigationAction id="link" label="Contact" href="contact" />
          <p id="copyright">© copyright Mehmet Tansu Işıklı</p>
        </BottomNavigation>
      </React.Fragment>
    );
  }
}

export default App;
