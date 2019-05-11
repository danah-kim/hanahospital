import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header``;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  color: ${props => (props.current ? props.theme.mainColor : "")};
`;

const StyledLink = styled(Link)``;

const routes = [
  { to: "/", name: "홈" },
  { to: "/intro", name: "병원소개" },
  { to: "/about", name: "의료진소개" },
  { to: "/info", name: "진료안내" },
  { to: "/facilities", name: "내부시설" },
  { to: "/contact", name: "상담문의" }
];

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Ul>
      {routes.map((route, index) => (
        <Li key={index} current={pathname === route.to}>
          <StyledLink to={route.to}>{route.name}</StyledLink>
        </Li>
      ))}
    </Ul>
  </Header>
));
