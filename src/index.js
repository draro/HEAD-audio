import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-snapshot";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { withStyles } from "@material-ui/core";
import Products from "./components/Products";
// import AuthRoute from "./utils/AuthRoute";
// import Sigma from "./components/Sigma";
// import Pigreco from "./components/Pigreco";
// import Micro from "./components/Micro";
// import Tulip from "./components/Tulip";
// import Musica from "./components/Musica";
// import Cables from "./components/Cables";
// import products from "./references/prodotti.json";
import BackToTop from "./components/ScrollUp";
import News from "./components/News";
// import Bot from "./components/ChatBot";

// ReactDOM.render(

//
render(
  <Router>
    <App />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route
          exact
          path="/contact-us"
          component={Contacts}
          // props={(this.props, classes.first)}
        />
        <Route exact path="/products-accessories" component={Products} />
        <Route
          exact
          path="/news"
          // render={() => <News news={[this.state.news]} />}
          component={News}
          // props={this.state.news}
        />
        <Route path="*" exact={true} component={Home} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
