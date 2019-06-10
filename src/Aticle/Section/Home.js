import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const HomeContainer = styled.div`
  @media only screen and (min-width: 0px) and (max-width: 1317px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 60px;
  font-weight: 100;
  color: #fff;
  letter-spacing: -0.06em;
  margin-bottom: 20px;
  line-height: 70px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  text-align: left;
`;

const String = styled.strong`
  font-weight: 700;
`;

const Carousels = [
  { image: "carousel01.jpg" },
  { image: "carousel02.jpg" },
  { image: "carousel03.jpg" }
];

export default () => (
  <HomeContainer id="home">
    <Carousel interval="3000">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../assets/images/${Carousels[0].image}`)}
          alt="First slide"
        />
        <Carousel.Caption>
          <Text>
            <String>쾌적한 진료 환경</String>과
            <br />
            <String>최신 의료장비 제공</String>으로
            <br />
            <String>최상의 진료 서비스</String>를 약속 드립니다.
          </Text>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../assets/images/${Carousels[1].image}`)}
          alt="Third slide"
        />
        <Carousel.Caption>
          <Text>
            <String>
              자동차보험<em>·</em>산재보험<em>·</em>의료보험
            </String>
            <br />
            지정 병원
          </Text>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../assets/images/${Carousels[2].image}`)}
          alt="Third slide"
        />
        <Carousel.Caption>
          1
          <Text>
            <String>X-ray 검사</String>부터
            <String>입원 집중치료</String>까지
            <br />
            <String>자동차보험</String>적용
          </Text>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </HomeContainer>
);

/*ToDo
 - 사진 변경 필요
 - rexponisve 대응 적용 필요
 */
