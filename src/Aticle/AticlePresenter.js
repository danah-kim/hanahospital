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
import Footer from "../Components/Footer";

const Loading = styled.div`
  padding-top: 170px;
  text-align: center;
  height: 400px;
`;

const Aticle = styled.article`
  position: relative;
  overflow-x: hidden;
  overflow: hidden;
  min-width: 320px;
  padding-top: 90px;
`;

const AticlePresenter = ({ loading }) => {
  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
    <>
      <Aticle>
        <Home />
        <Intro />
        <About />
        <Facilities />
        <Info />
      </Aticle>
      <Footer />
    </>
  );
};

export default AticlePresenter;

/*ToDo
 - <Departments /> 임시막아둠
 */
