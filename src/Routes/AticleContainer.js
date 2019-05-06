import React from "react";
import { Motion } from "react-motion";
import AticlePresenter from "./AticlePresenter";

export default class extends React.Component {
  state = {
    top: 0
  };

  componentDidMount() {
    const {
      location: { pathname }
    } = this.props;
    console.log(1, pathname);
    console.log(2, pathname.split("/")[1]);
    this.setState({ top: pathname.split("/")[1] });
    if (pathname.split("/")[1]) {
      this.scroll(pathname.split("/")[1]);
    } else {
      this.setTop();
    }
  }

  scroll = id => {
    console.log(2, id);
    console.log(4, document.getElementById(id).offsetTop);
    window.scrollTo(0, document.getElementById(id).offsetTop);
  };

  setTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    console.log("first", this.props.match.path.split("/")[1]);
    return <AticlePresenter id={this.props.match.path.split("/")[1]} />;
  }
}
