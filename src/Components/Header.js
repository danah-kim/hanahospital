import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Link as Move } from "react-scroll";

const Header = styled.header``;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  color: ${props => (props.current ? props.theme.mainColor : "")};
`;

const A = styled(Link, Move)``;

const routes = [
  { path: "/", to: "/", name: "홈" },
  { path: "/intro", to: "intro", name: "병원소개" },
  { path: "/about", to: "about", name: "의료진소개" },
  { path: "/info", to: "info", name: "진료안내" },
  { path: "/facilities", to: "facilities", name: "내부시설" },
  { path: "/contact", to: "contact", name: "상담문의" }
];

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Ul>
      {routes.map((route, index) => (
        <Li key={index} current={pathname === route.path}>
          <A to={route.to}>{route.name}</A>
        </Li>
      ))}
    </Ul>
  </Header>
));
