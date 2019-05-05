import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header``;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li``;

const routes = [
  { path: "/", to: "/", name: "홈" },
  { path: "intro", to: "Intro", name: "병원소개" },
  { path: "about", to: "About", name: "의료진소개" },
  { path: "info", to: "Info", name: "진료안내" },
  { path: "facilities", to: "Facilities", name: "내부시설" },
  { path: "contact", to: "Contact", name: "상담문의" }
];

export default () => (
  <Header>
    <Ul>
      {routes.map((route, index) => (
        <Li key={index}>
          <Link to={route.to}>{route.name}</Link>
        </Li>
      ))}
    </Ul>
  </Header>
);
