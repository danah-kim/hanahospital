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
  padding-top: 100px;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding-top: 120px;

    @media screen and (max-width: 640px) {
      padding-top: 105px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
  }
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
