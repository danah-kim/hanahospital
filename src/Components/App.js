import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Route from "./Route";

export default class extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Route />
        </BrowserRouter>
      </>
    );
  }
}
