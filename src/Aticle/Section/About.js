import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f5f5f5;
  font-size: 0;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    @media screen and (max-width: 667px) {
      padding: 0 0 50px 0;
    }
  }
`;

const Div = styled.div`
  :first-child,
  :last-child {
    padding: 102px 0 100px 0;
  }

  width: 100%;
  box-sizing: border-box;
  max-width: 1300px;
  margin: 0 auto;
  *zoom: 1;

  :after {
    content: "";
    display: block;
    clear: both;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 100%;

    box-sizing: border-box;

    :first-child,
    :last-child {
      padding: 72px 0 70px 0;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    padding: 0 0 50px 0;
    box-sizing: border-box;
  }
`;

const ImgContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 630px;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 49.2%;

    @media screen and (max-width: 667px) {
      width: 100%;
    }
    @media screen and (max-width: 812px) {
      width: 48.2%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    @media screen and (max-width: 667px) {
      margin-top: -9.5%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    margin-top: -9.5%;
  }
`;

const TextContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-left: 58px;
  width: 630px;
  text-align: left;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding-left: 30px;
    width: 50.8%;

    @media screen and (max-width: 667px) {
      padding-left: 0px;
      width: 100%;
    }
    @media screen and (max-width: 812px) {
      padding-left: 20px;
      width: 51.8%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding-left: 0px;
    width: 100%;
  }
`;

const TextBox = styled.div``;

const Contents = styled.dl`
  padding: 0 0 61px 0;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 0 0 23px 0;

    @media screen and (max-width: 667px) {
      padding: 0 0 16px 0;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 0 0 16px 0;
  }
`;

const Name = styled.dt`
  padding: 10px 0 16px 0;
  line-height: 39px;
  font-size: 30px;
  font-weight: 400;
  color: #444;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 5px 0 9px 0;
    line-height: 29px;
    font-size: 18px;

    @media screen and (max-width: 667px) {
      padding: 5px 0 9px 0;
      line-height: 29px;
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 5px 0 9px 0;
    line-height: 29px;
    font-size: 18px;
  }
`;

const Profile = styled.dd``;

const List = styled.ul``;

const Text = styled.li`
  font-size: 16px;
  line-height: 30px;
  color: #777;
  vertical-align: top;

  :before {
    padding-right: 5px;
    font-size: 16px;
    line-height: 30px;
    color: #777;
    vertical-align: top;
    content: "- ";
    display: inline-block;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    font-size: 15px;
    line-height: 25px;

    :before {
      font-size: 15px;
      line-height: 25px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    font-size: 15px;
    line-height: 25px;

    :before {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

const abouts = [
  {
    image: "dr_kim.jpeg",
    name: "대표원장 김양은 병원장",
    major: "한방전문의",
    description: [
      "동국대학교 한의과대학 수석입학 및 졸업",
      "전)수원 지동한의원원장",
      "전)서울 노원하늘마음한의원 대표원장",
      "전)수원 고운결한의원 대표원장",
      "전)수원 로하셀한의원 대표원장",
      "현)하나한방병원대표원장",
      "대한사상맥진학회 임원",
      "관절척추교정학회 정회원",
      "혜산의학회 정회원",
      "대한한방피부과학회 정회원"
    ]
  },
  {
    image: "dr_choi.jpeg",
    name: "최계철 원장",
    major: "한방전문의",
    description: [
      "동국대학교 한의과대학 졸업",
      "전)당진군 공보의",
      "전)추나전문 맑은숲한의원 대표원장",
      "전)수원 고운결한의원 원장",
      "전)참조은한방병원 대표원장",
      "현)하나한방병원진료원장",
      "반룡학회 정회원",
      "사상16형학회 정회원",
      "한방피부과학회 정회원",
      "대한약침학회 정회원"
    ]
  },
  {
    image: "doctor.png",
    name: "박노익 원장",
    major: "양방진료",
    description: [
      "서울대학교 의과대학 졸업",
      "전)카톨릭의대 척추센터 외래교수",
      "전)서울정형외과 원장",
      "현)하나한방병원 양방진료원장",
      "미국 시카고대병원 연수",
      "세계정형외과학회 정회원",
      "국제척추학회 정회원",
      "국제슬관절학회 정회원"
    ]
  }
];

export default () => (
  <Container id="about">
    {abouts.map((about, index) => (
      <Div key={index}>
        <ImgContainer>
          <Img
            src={require(`../../assets/images/${about.image}`)}
            alt={about.name}
          />
        </ImgContainer>
        <TextContainer>
          <TextBox>
            <Contents>
              <Name>{about.name}</Name>
              <Profile>
                <List>
                  {about.description.map((item, index) => (
                    <Text key={index}>{item}</Text>
                  ))}
                </List>
              </Profile>
            </Contents>
          </TextBox>
        </TextContainer>
      </Div>
    ))}
  </Container>
);

/* ToDo 병원 소개로 위치 수정
const Title = styled.h3`
  padding: 0px 0 31px 0;
  position: relative;
  z-index: 1;

  :after {
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    position: absolute;
    background: #444;
    content: "";
    display: inline-block;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 0px 0 26px 0;

    :after {
      height: 2px;
    }

    @media screen and (max-width: 667px) {
      padding: 0px 0 28px 0;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 28px 0 28px 0;

    :after {
      height: 2px;
    }
  }
`;

const Em = styled.em`
  color: ${props => props.theme.mainColor};
  line-height: 69px;
  font-size: 54px;
  letter-spacing: -1px;
  font-weight: 400;
  width: 100%;
  display: inline-block;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 41px;
    font-size: 33px;
    letter-spacing: -0.6px;

    @media screen and (max-width: 812px) {
      line-height: 34px;
      font-size: 29px;
      letter-spacing: 0px;
    }
    @media screen and (max-width: 667px) {
      line-height: 34px;
      font-size: 29px;
      letter-spacing: -0.4px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 34px;
    font-size: 29px;
    letter-spacing: -0.4px;
  }
`;

const Span = styled.span`
  line-height: 69px;
  font-size: 34px;
  letter-spacing: -1px;
  font-weight: 400;
  width: 100%;
  display: inline-block;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 41px;
    font-size: 32px;
    letter-spacing: -0.6px;

    @media screen and (max-width: 812px) {
      line-height: 34px;
      font-size: 22px;
      letter-spacing: 0px;
    }
    @media screen and (max-width: 667px) {
      line-height: 34px;
      font-size: 22px;
      letter-spacing: -0.4px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 34px;
    font-size: 26px;
    letter-spacing: -0.4px;
  }
`;

<Title>
  <Em>하나한방병원</Em>
  <Span>양·한방 통합 비수술 개별 맞춤 진료합니다.</Span>
</Title>
*/
