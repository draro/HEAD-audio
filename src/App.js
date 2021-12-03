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
// import products from "./references/prodotti.json";
import BackToTop from "./components/ScrollUp";
import News from "./components/News";
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
  constructor(props) {
    super(props);
    this.state = {
      // news: [],
    };
  }
  componentDidMount() {
    fetch("../assets/news/news.json")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        this.setState({ news: json });
      });
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {/* <Provider store={store}> */}
        <BackToTop />
        {/*<div style={{ position: "fixed", bottom: "5%", zIndex: 100 }}>
             <Bot /> 
          </div>*/}
        {this.state.news ? <Navbar news={this.state.news} /> : <Navbar />}
        {/* <Footer /> */}
        {/* </Provider> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
