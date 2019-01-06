import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";
import "./index.css";
import App from "./App";
import About from "./components/about";
import Contact from "./Contact/contact";
import ApodStatus from "./Apod/apodStatus";
import MrpStatus from "./Mrp/container/mrpStatus";
import IvlStatus from "./Ivl/container/ivlStatus";
import TechportStatus from "./Techport/techportStatus";
import SpacexStatus from "./SpaceX/spacexStatus";
import StarmapResult from "./Starmap/starmapResult";

const Index = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/apod" component={ApodStatus} />
        <Route path="/mrp" component={MrpStatus} />
        <Route path="/ivl" component={IvlStatus} />
        <Route path="/techport" component={TechportStatus} />
        <Route path="/spacex" component={SpacexStatus} />
        <Route path="/starmap" component={StarmapResult} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
