import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Aticle from "../Routes/AticleContainer";

const routes = ["/intro", "/about", "/info", "/facilities", "/contact"];

export default () => (
  <Switch>
    <Route path="/" exact={true} component={Aticle} />
    {routes.map((route, index) => (
      <Route key={index} path={route} component={Aticle} />
    ))}
    <Redirect from="*" to="/" />
  </Switch>
);
