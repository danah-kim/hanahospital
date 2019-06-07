import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 24px 0 22px 0;
  position: relative;
  font-size: 0;
  width: 100%;
  box-sizing: border-box;
  vertical-align: top;
  font-size: 12px;
  color: #888;

  /* iPads (landscape)  */
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    padding: 20px 0 23px 0;
  }
`;

const Div = styled.div`
  *zoom: 1;

  :after {
    content: "";
    display: block;
    clear: both;
  }

  width: 100%;
  max-width: 1300px;
  padding: 0 10px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0;

  /* iPads (landscape)  */
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Address = styled.p`
  display: inline-block;
  width: 55%;
  line-height: 22px;
  font-size: 12px;
  color: #888;

  /* iPads (landscape)  */
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    width: 55%;
    line-height: 24px;
    font-size: 14px;
  }

  @media screen and (max-width: 812px) {
    width: 100%;
  }
`;

const Line = styled.span`
  margin: 0 11px;
  width: 1px;
  height: 10px;
  background: #ccc;
  vertical-align: middle;
  display: inline-block;

  /* iPads (landscape)  */
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    margin: 0 11px;
  }
`;

const Copy = styled.p`
  display: inline-block;
  line-height: 22px;
  font-size: 12px;
  padding: 11px 0;
  color: #aaa;
  text-align: right;

  /* iPads (landscape)  */
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    float: none;
    line-height: 24px;
    font-size: 14px;
    padding: 8px 0 0 0;
  }

  @media screen and (max-width: 812px) {
    text-align: left;
  }
`;

export default () => (
  <Footer>
    <Div>
      <Address>
        하나한방병원
        <Line />
        대표병원장: 김양은
        <Line />
        소재지: 경기 시흥시 은행로 154, 2층~3층
        <br />
        사업자등록번호 : 748-91-00925
        <Line />
        전화번호 : 031-315-5995
        <Line />
        팩스번호: 031-312-8448
      </Address>
      <Copy>COPYRIGHT © BY Hana ALL RIGHTS RESERVED.</Copy>
    </Div>
  </Footer>
);
