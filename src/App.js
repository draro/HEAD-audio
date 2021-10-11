import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { withStyles } from "@material-ui/core";
import { sliderClasses } from "@mui/material";
import Products from "./components/Products";
// import AuthRoute from "./utils/AuthRoute";
// import
const styles = {
  first: {
    backgroundColor: "rgba(0,0,0,0.82)",
    // width: "98%",
    textAlign: "center",
    justifyContent: "center",
    padding: "30px",
    // height: "60%",
    marginTop: "0px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    zIndex: 1,
  },
};
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {/* <Provider store={store}> */}
        <Router>
          <Navbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={About} />
              <Route
                exact
                path="/contact-us"
                component={Contacts}
                props={(this.props, classes.first)}
              />
              <Route exact path="/products-accessories" component={Products} />
            </Switch>
          </div>
        </Router>
        {/* <Footer /> */}
        {/* </Provider> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
