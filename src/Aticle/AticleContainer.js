import React from "react";
import { Redirect } from "react-router-dom";
import AticlePresenter from "./AticlePresenter";
import scrollTo from "@danah/react-hook-scrollto";

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
    scrollTo({ id: id, smooth: true });
    return <AticlePresenter />;
  } else {
    return <Redirect to="/" />;
  }
};
