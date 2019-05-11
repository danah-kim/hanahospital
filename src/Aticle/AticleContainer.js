import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AticlePresenter from "./AticlePresenter";

export default class extends Component {
  state = {
    sections: {
      home: 0,
      intro: 0,
      about: 0,
      info: 0,
      facilities: 0,
      contact: 0
    }
  };

  componentDidMount() {
    this.setTop();
  }

  componentDidUpdate(prevProps) {
    this.scroll();
  }

  setTop = () => {
    const { sections } = this.state;
    let newSections = sections;

    Object.keys(sections).forEach(section => {
      const element = document.getElementById(section);
      newSections[section] = element;
    });

    this.setState({
      sections: newSections
    });
  };

  scroll() {
    const { sections } = this.state;
    const {
      match: {
        params: { id }
      }
    } = this.props;

    /*
     * can controll restoring scroll positions
     */
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const y = id ? sections[id].offsetTop : 0;
    window.scrollTo(0, y);
  }

  render() {
    const {
      match: { url }
    } = this.props;
    let check = false;
    const routes = [
      "/",
      "/home",
      "/intro",
      "/about",
      "/info",
      "/facilities",
      "/contact"
    ];
    routes.map(route => {
      if (url === route) check = true;
    });

    if (check) {
      return <AticlePresenter />;
    } else {
      return <Redirect to="/" />;
    }
  }
}
