import React from "react";
import styled from "styled-components";

const Container = styled.dl`
  line-height: 22px;
  font-size: 0;
  vertical-align: top;
  display: inline-flex;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 24px;
    font-size: 0;
    vertical-align: top;
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 24px;
    font-size: 0;
    vertical-align: top;
  }
`;

const Title = styled.dt`
  color: #fff;
  width: 120px;
  vertical-align: top;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 22px;
    font-size: 14px;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 23px;
    font-size: 15px;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  color: ${props => props.theme.mainColor};
`;

const Description = styled.dd`
  color: #fff;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  width: 390px;
  vertical-align: top;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 22px;
    font-size: 14px;
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 23px;
    font-size: 15px;
    width: 68.4%;
  }
`;

const P = styled.p`
  line-height: 22px;
  padding-top: 7px;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 24px;
    padding-top: 6px;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 24px;
    padding-top: 6px;
  }
`;

const Sub = styled.span`
  display: block;
`;

const SubTitle = styled.span`
  display: inline-block;
  min-width: 52px;
  margin-right: 20px;
  color: #999;
`;

const SubText = styled.span`
  :before {
    display: inline-block;
    width: 2px;
    height: 15px;
    margin: 4px 9px 0 -11px;
    background-color: #e0e0e0;
    vertical-align: top;
    content: "";
  }
`;

const SubEtc = styled.span`
  color: #f1802a;
  margin-left: 10px;

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    display: inline-block;
    padding-left: 50px;
  }
`;

const InfoList = ({ title, icon, description1, description2 }) => (
  <Container>
    <Title>
      <Icon>
        <i className={icon} />
      </Icon>
      {title}
    </Title>
    <Description>
      {description1 ? (
        <Sub style={{ fontsize: "27px" }}>
          {description1.map((item, index) =>
            description1.length - 1 === index
              ? item
              : [item, <br key={index} />]
          )}
        </Sub>
      ) : (
        ""
      )}
      {description2 ? (
        <P>
          {description2.map((item, index) => (
            <Sub key={index}>
              <SubTitle>{item.title}</SubTitle>
              <SubText>{item.text}</SubText>
              <SubEtc>{item.etc}</SubEtc>
            </Sub>
          ))}
        </P>
      ) : (
        ""
      )}
    </Description>
  </Container>
);

export default InfoList;
