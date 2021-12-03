import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default (
  <Route>
    <Route exact path="/" />
    <Route exact path="/about-us" />
    <Route exact path="/contact-us" />
    <Route exact path="/products-accessories" />
    <Route exact path="/news" />
  </Route>
);
