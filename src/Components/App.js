import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Aticle from "./Aticle";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router>
          <>
            <Header />
            <Route path="/:id" />
          </>
        </Router>
        <Aticle />
        <Footer />
      </>
    );
  }
}
