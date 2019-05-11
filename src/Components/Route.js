import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Aticle from "Aticle";

export default () => (
  <Switch>
    <Route path="/:id" component={Aticle} />
    <Route path="/" component={Aticle} />
    <Redirect from="*" to="/" />
  </Switch>
);
