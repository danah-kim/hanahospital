import React from "react";
import styled from "styled-components";
import { Home, Intro, About, Info, Facilities, Contact } from "Aticle/Section";

const Aticle = styled.article`
  display: grid;
  grid-auto-rows: 200px;
`;

export default () => {
  return (
    <Aticle>
      <Home />
      <Intro />
      <About />
      <Info />
      <Facilities />
      <Contact />
    </Aticle>
  );
};
