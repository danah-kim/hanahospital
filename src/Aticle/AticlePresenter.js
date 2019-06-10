import React from "react";
import styled from "styled-components";
import {
  Home,
  Intro,
  About,
  Facilities,
  Departments,
  Info
} from "Aticle/Section";

const Aticle = styled.article`
  position: relative;
  overflow-x: hidden;
  overflow: hidden;
  min-width: 320px;
  padding-top: 90px;
`;

export default () => {
  return (
    <Aticle>
      <Home />
      <Intro />
      <About />
      <Facilities />
      <Departments />
      <Info />
    </Aticle>
  );
};
