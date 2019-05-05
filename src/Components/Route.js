import React from "react";
import { Route, Switch } from "react-router-dom";

const routes = [
  { path: "home", exact: true },
  { path: "intro" },
  { path: "about" },
  { path: "info" },
  { path: "facilities" },
  { path: "contact" }
];

export default () => (
  <Switch>
    <Route path="/:id" component={}/>
  </Switch>
);
