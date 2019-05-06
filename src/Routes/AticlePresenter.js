import React from "react";
import styled from "styled-components";
import Home from "../Pages/Home";
import Intro from "../Pages/Intro";
import About from "../Pages/About";
import Info from "../Pages/Info";
import Facilities from "../Pages/Facilities";
import Contact from "../Pages/Contact";

const Aticle = styled.article`
  display: grid;
  grid-auto-rows: 200px;
`;

export default ({ id }) => (
  <Aticle>
    <div>{id}</div>
    <Home />
    <Intro />
    <About />
    <Info />
    <Facilities />
    <Contact />
  </Aticle>
);
