import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd.less";
import { Layout } from "antd";

//const Layout = styled.div``;

const { Header } = Layout;

const HeaderContainer = styled.div`
  left: 0;
  top: 0;
  border: 0;
  border-top: 3px ${props => props.theme.mainColor} solid;
  transition: 0.3s;
  text-align: center;
  z-index: 10;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
`;

const LogoContanier = styled.div`
  left: 30px;
  top: 23px;
  position: absolute;
  z-index: 1;
`;

const Logo = styled.img`
  height: 45px;
  width: auto;
`;
const MenuContainer = styled.div`
  width: inherit;
`;

const Ul = styled.ul`
  height: 100%;
`;

const Li = styled.li`
  height: 100%;
  padding: 0 2.8%;
  height: 49px;
  line-height: 49px;
  letter-spacing: -0.4px;
  font-size: 18px;
  font-weight: 700;
`;

const StyledLink = styled(Link)``;

const routes = [
  { to: "/intro", name: "병원소개" },
  { to: "/about", name: "의료진소개" },
  { to: "/info", name: "진료안내" },
  { to: "/facilities", name: "내부시설" },
  { to: "/contact", name: "상담문의" }
];

export default withRouter(({ location: { pathname } }) => (
  <Layout>
    <HeaderContainer
      style={{
        position: "fixed",
        width: "100%",
        background: "rgba(255,255,255,0.9)",
        padding: "24px 0",
        lineHeight: "49px",
        height: "100px"
      }}
    >
      <LogoContanier>
        <Link to="/">
          <Logo src={require("../assets/logo.png")} alt="하나한방병원" />
        </Link>
      </LogoContanier>
      <MenuContainer>
        <Ul mode="horizontal" style={{ borderBottom: "none" }}>
          {routes.map((route, index) => (
            <Li key={index}>
              <StyledLink
                to={route.to}
                style={{
                  color: pathname === route.to ? "#F1592A" : "#333"
                }}
              >
                {route.name}
              </StyledLink>
            </Li>
          ))}
        </Ul>
      </MenuContainer>
    </HeaderContainer>
  </Layout>
));
