import React from "react";
import "./App.css";
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
import products from "./references/prodotti.json";
import BackToTop from "./components/ScrollUp";
// import Bot from "./components/ChatBot";
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
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {/* <Provider store={store}> */}
        <Router>
          <BackToTop />
          <div style={{ position: "fixed", bottom: "5%", zIndex: 100 }}>
            {/* <Bot /> */}
          </div>
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
              {products.map((product) => {
                return (
                  <Route
                    exact
                    path={product.link}
                    component={this.capitalizeFirstLetter(product.link)}
                    key={product.link}
                  />
                );
              })}
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
