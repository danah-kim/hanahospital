import React from "react";
import styled from "styled-components";
import InfoList from "Components/InfoList";
import dotenv from "dotenv";
import { kakaoMap } from "Hooks";

dotenv.config();

const Container = styled.div`
  padding: 100px 0;
  background: #333;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 50px 0;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 70px 0;

    @media screen and (max-width: 667px) {
      padding: 50px 0;
      box-sizing: border-box;
    }
  }
`;

const Div = styled.div`
  *zoom: 1;
  width: 100%;
  box-sizing: border-box;
  max-width: 1300px;
  padding: 0 10px;
  margin: 0 auto;

  :after {
    content: "";
    display: block;
    clear: both;
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    padding: 0 4%;
    box-sizing: border-box;
  }
  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 100%;
    padding: 0 2.6%;
    box-sizing: border-box;

    @media screen and (max-width: 667px) {
      padding: 50px 0;
      box-sizing: border-box;
    }
  }
`;

const InfoText = styled.div`
  text-align: left;
  width: 50%;
  float: left;
  box-sizing: border-box;

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
  }
  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 50%;
    padding-right: 20px;
    @media screen and (max-width: 667px) {
      width: 100%;
      padding-right: 0px;
      padding-bottom: 20px;
    }
  }
`;

const H3 = styled.h3`
  margin-top: -4px;
  padding: 0 0 26px 0;
  position: relative;
  z-index: 1;
  border-bottom: 2px ${props => props.theme.mainColor} solid;

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    margin-top: -4px;
    padding: 0 0 19px 0;
  }
  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    margin-top: -4px;
    padding: 0 0 22px 0;

    :after {
      width: 310px;
      height: 2px;
    }
  }
`;

const Span = styled.span`
  color: #999;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  width: 100%;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 22px;
    font-size: 14px;
    width: 100%;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    line-height: 19px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    line-height: 19px;
    font-size: 14px;
    width: 100%;
  }
`;

const Em = styled.em`
  color: ${props => props.theme.mainColor};
  width: 100%;
  display: inline-block;
  line-height: 78px;
  font-size: 50px;
  font-weight: 400;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 100%;
    line-height: 50px;
    font-size: 33px;
    letter-spacing: -0.6px;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    line-height: 54px;
    font-size: 29px;
    letter-spacing: -0.6px;
  }
  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    line-height: 50px;
    font-size: 33px;
    letter-spacing: -0.6px;
    width: 100%;
    :after {
      width: 40px;
      height: 2px;
    }
  }
`;

const Info = styled.div`
  width: 520px;
  box-sizing: border-box;
  padding: 23px 0;
  border-bottom: 1px #555 solid;
  padding-bottom: 20px;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 100%;
    padding: 23px 0;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    padding: 23px 0;
  }
`;

const InfoMap = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding-left: 10px;
  text-align: right;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    padding-left: 0px;
    padding-bottom: 73%;
  }
  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 50%;
    padding-left: 6px;
    padding-bottom: 52%;
  }
  @media screen and (max-width: 667px) {
    width: 100%;
    padding-left: 0px;
    padding-bottom: 73%;
  }
`;

const MapBox = styled.div`
  height: 460px;
  width: 630px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-size: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
`;

const information = [
  {
    title: "문의",
    icon: "fas fa-phone-alt",
    description1: ["031-315-5995"],
    description2: [
      {
        title: "스마트콜",
        text: "0507-1348-5995"
      },
      {
        title: "팩스",
        text: "032-312-8448"
      }
    ]
  },
  {
    title: "오시는길",
    icon: "fas fa-map-marker-alt",
    description1: [
      "성원아파트 버스정류장 하차",
      "엔제리너스 시흥은행점 건물 3층"
    ],
    description2: [
      {
        title: "주차정보",
        text: "건물뒷편 무료주차 및 성원아파트주차"
      }
    ]
  },
  {
    title: "진료시간",
    icon: "fas fa-clock",
    description2: [
      {
        title: "평일",
        text: "09:00 ~ 18:00",
        etc: "점심시간 12:30 ~ 14:00"
      },
      {
        title: "토요일",
        text: "09:00 ~ 14:00",
        etc: "점심시간 없이 진료"
      },
      { title: "일요일", text: "휴무" },
      { title: "공휴일", text: "휴무" }
    ]
  }
];

export default () => {
  return (
    <Container id="info">
      <Div>
        <InfoText>
          <H3>
            <Span>Medical Information</Span>
            <Em>하나한방병원 진료안내</Em>
          </H3>
          {information.map((item, index) => (
            <Info key={index}>
              <InfoList
                title={item.title}
                icon={item.icon}
                description1={item.description1}
                description2={item.description2}
              />
            </Info>
          ))}
        </InfoText>
        <InfoMap>
          <MapBox>
            {kakaoMap({
              apiKey: process.env.REACT_APP_DAUM_MAP_API_KEY,
              lng: 37.444756,
              lat: 126.799586
            })}
          </MapBox>
        </InfoMap>
      </Div>
    </Container>
  );
};

/* ToDo
 <InfoList title="이용안내" icon="fas fa-info-circle" />
 */
