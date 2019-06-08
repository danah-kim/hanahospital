import React from "react";
import { Redirect } from "react-router-dom";
import AticlePresenter from "./AticlePresenter";
import { scrollToId } from "Hooks";

export default ({
  match: {
    params: { id },
    url
  }
}) => {
  const checkUrl = url => {
    let check = false;

    [
      "/",
      "/home",
      "/intro",
      "/about",
      "/facilities",
      "/departments",
      "/info"
    ].map(route => {
      if (url === route) check = true;
      return null;
    });

    return check;
  };

  if (checkUrl(url)) {
    scrollToId(id);
    return <AticlePresenter />;
  } else {
    return <Redirect to="/" />;
  }
};
