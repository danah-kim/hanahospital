import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
  left: 0;
  top: 0;
  border-top: 3px ${props => props.theme.mainColor} solid;
  z-index: 100;
`;

const LogoContanier = styled.div``;

const Logo = styled(Link)`
  display: block;
  position: absolute;
  top: 22px;
  background-image: url(${props => props.bgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
  height: 40px;
  width: 220px;
  z-index: 1;
`;

const MenuContainer = styled.nav``;

const Ul = styled.ul`
  display: block;
  position: relative;
  top: 0;
  padding: 0px;
  margin: 0px;
  list-style: none;
  left: 240px;
`;

const Li = styled.li`
  float: left;
  width: 100px;
  height: 88px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  :hover {
    border-bottom: 4px solid ${props => props.theme.mainColor};
    transition-duration: 0.3s;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${props => (props.current ? props.theme.mainColor : "#333")};
  text-decoration: none !important;
  line-height: 88px;

  :hover {
    color: ${props => props.theme.mainColor};
    transition-duration: 0.3s;
  }
`;

const routes = [
  { to: "/intro", name: "병원소개" },
  { to: "/about", name: "의료진소개" },
  { to: "/facilities", name: "내부시설" },
  { to: "/departments", name: "진료과목" },
  { to: "/info", name: "진료안내" }
];

export default withRouter(({ location: { pathname } }) => (
  <Container>
    <LogoContanier>
      <Logo to="/" bgUrl={require("../assets/images/logo.png")} />
    </LogoContanier>
    <MenuContainer>
      <Ul>
        {routes.map((route, index) => (
          <Li key={index}>
            <StyledLink to={route.to} current={pathname === route.to}>
              {route.name}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </MenuContainer>
  </Container>
));
