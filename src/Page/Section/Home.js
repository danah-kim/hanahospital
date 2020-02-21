import { Grid, Paper } from "@material-ui/core";

import { Fade } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lazyload from "react-lazyload";
import React from "react";
import clinic1 from "assets/images/clinic1.png";
import clinic2 from "assets/images/clinic2.png";
import contact from "assets/images/contact.png";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import home from "assets/images/home.png";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media only screen and (min-width: 0px) and (max-width: 960px) {
    height: fit-content;
  }
`;

const TextBox = styled.div`
  width: 100%;
  padding: 170px 0 50px 0;
  text-align: center;
  color: #ffffff;
`;

const Name = styled.p`
  display: inline-block;
  white-space: nowrap;
  color: ${props => props.theme.mainColor};
  opacity: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-size: 4vh;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding-bottom: 15px;
`;

const Description = styled.p`
  opacity: 0.8;
  font-size: 1.7vh;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
`;

const ContantBox = styled(Grid)`
  padding: 0 10vw;
  @media only screen and (max-width: 1279px) {
    padding: 0;
  }
  @media only screen and (min-width: 0px) and (max-width: 960px) {
    padding-bottom: 50px;
  }
`;

const Img = styled(Paper)`
  background: url(${props => props.bgUrl}) center 0 no-repeat;
  background-size: cover;
  height: 420px;
  width: 100%;
  background-color: transparent !important;
  @media screen and (max-width: 640px) {
    height: 280px;
  }
`;

const MainTextBox = styled.div`
  padding-left: 35px;
  padding-top: 110px;
  width: 340px;
  @media screen and (max-width: 640px) {
    adding-left: 20px;
    padding-top: 70px;
  }
`;

const TextTitle = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
`;

const TextContant = styled.p`
  font-size: 33px;
  padding: 15px 0;
  line-height: 45px;
  letter-spacing: -2.5px;
  @media screen and (max-width: 640px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const TextEmphasize = styled.span`
  font-weight: bold;
  color: ${props => props.theme.mainColor};
  @media screen and (max-width: 640px) {
    display: block;
  }
`;

const TextDescription = styled.p`
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -1px;
  padding-bottom: 5px;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 14px;
    line-height: 19px;
    padding-right: 90px;
  }
`;

const ContactImg = styled(Paper)`
  background: url(${props => props.bgUrl}) center no-repeat;
  background-size: cover;
  background-color: transparent !important;
  height: 420px;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 25px;
  font-weight: 600;
  color: #000;
  padding: 40px 0 20px 0;
  letter-spacing: 1px;
  line-height: 45px;
  text-align: center;
`;

const Tell = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #c01f11;
  letter-spacing: 1px;
  padding: 25px 0;
  text-align: center;
`;

const Time = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  span {
    width: 65px;
    display: inline-block;
    letter-spacing: 0;
  }
`;

const IconBox = styled.div`
  text-align: center;
  opacity: 0.8;
  color: ${props => props.theme.mainColor};
  cursor: pointer;
  font-size: 4vh;
  font-weight: 400;
  animation: glow 4s infinite;
  position: absolute;
  left: 50%;
  bottom: 40px;
  @keyframes glow {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
      transform: translateY(5px);
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 960px) {
    display: none;
  }
`;

export default () => {
  const handleClick = () => {
    const element = document.getElementById("intro");
    window.scrollTo({
      top: element.offsetTop - 90,
      behavior: "smooth"
    });
  };

  return (
    <HomeContainer id="home" bgUrl={home}>
      <TextBox>
        <Name data-aos="zoom-in">하나한방병원</Name>
        <Description
          data-aos="zoom-out"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          양한방협진진료 | 척추·무릎·어깨·관절 클리닉 | 도수치료 |
          교통사고클리닉
        </Description>
      </TextBox>
      <ContantBox container spacing={2}>
        <Grid
          item
          xs={12}
          md={3}
          container
          direction="column"
          justify="center"
          alignItems="center"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <Fade
            duration={1500}
            transitionDuration={1000}
            infinite={true}
            indicators={true}
            arrows={false}
          >
            <Lazyload className="each-fade" throttle={100}>
              <ContactImg bgUrl={contact}>1</ContactImg>
            </Lazyload>
            <Lazyload className="each-fade" throttle={100}>
              <ContactImg bgUrl={contact}>2</ContactImg>
            </Lazyload>
            <Lazyload className="each-fade" throttle={100}>
              <ContactImg bgUrl={contact}>3</ContactImg>
            </Lazyload>
          </Fade>
          {/* <Grid item xs={8} wrap="nowrap">
            진료과목
          </Grid>
          <Grid item xs={4} wrap="nowrap">
            내용
          </Grid> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="slide-container"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <Fade
            duration={3000}
            transitionDuration={1000}
            infinite={true}
            indicators={true}
            arrows={false}
          >
            <Img className="each-fade" bgUrl={clinic1}>
              {/* <MainTextBox>
                  <TextTitle>근골격계 통증치료</TextTitle>
                  <TextContant>
                    전문 한의사가 직접 시술하는
                    <br />
                    <TextEmphasize>추나요법</TextEmphasize>
                  </TextContant>
                  <TextDescription>
                    근골격계 질환에 효과적인 추나요법의 시술의 건강보험 적용으로
                    환자의 부담이 확 줄어듭니다.
                  </TextDescription>
                </MainTextBox> */}
            </Img>
            <Lazyload className="each-fade" throttle={100}>
              <Img bgUrl={clinic2}>
                {/* <MainTextBox>
                  <TextTitle>교통사고 후유증치료</TextTitle>
                  <TextContant>
                    양한방협진시스템을 갖춘
                    <br />
                    <TextEmphasize>교통사고 입원치료</TextEmphasize>
                  </TextContant>
                  <TextDescription>
                    자동차보험 치료비는 환자 개인 비용 부담 없이 보험처리가
                    가능하여 치료에만 집중하시면 됩니다.
                  </TextDescription>
                </MainTextBox> */}
              </Img>
            </Lazyload>
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <Lazyload throttle={100}>
            <ContactImg bgUrl={contact}>
              <Title>상담안내</Title>
              <Tell>031-315-5995</Tell>
              <Time>
                <span>{"  "}평일</span>
                09:30 ~ 19:00
                <br />
                <span>토요일</span>
                09:00 ~ 14:00
                <br />
                <br />
                일요일/공휴일은 휴진입니다.
              </Time>
            </ContactImg>
          </Lazyload>
        </Grid>
      </ContantBox>
      <IconBox
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="1000"
        onClick={() => handleClick()}
      >
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </IconBox>
    </HomeContainer>
  );
};
