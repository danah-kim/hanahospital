import React from "react";
import { Redirect } from "react-router-dom";
import AticlePresenter from "./AticlePresenter";
import Scroll from "../Hooks/Scroll";
import PropTypes from "prop-types";

const AticleContainer = ({
  match: {
    params: { id }
  }
}) => {
  if (
    id &&
    !["home", "intro", "about", "facilities", "departments", "info"].includes(
      id
    )
  ) {
    window.alert("잘못된 접근입니다.");
    return <Redirect to="/" />;
  }

  const loading = Scroll({ id, y: -90, option: true });

  return <AticlePresenter loading={loading} />;
};

AticleContainer.propTypes = {
  loading: PropTypes.bool,
  id: PropTypes.string
};

export default AticleContainer;
