import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 0;
  text-align: right;
  position: relative;
  z-index: 1;
`;

const Box = styled.div`
  *zoom: 1;
`;

const TextBox = styled.div`
  width: 50%;
  padding-bottom: 700px;
  text-align: left;
  vertical-align: top;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-align: right;
  background: ${props => props.theme.mainColor};

  .p_span + br {
    display: inline-block;
  }
  .p_span,
  .m_span,
  .m_span + br {
    display: none;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 50%;
    padding-bottom: 58.6%;

    .p_span + br {
      display: inline-block;
    }
    .p_span,
    .m_span,
    .m_span + br {
      display: none;
    }

    @media screen and (max-width: 640px) {
      width: 100%;
      padding-bottom: 104%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    padding-bottom: 104%;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    .m_span + br {
      display: inline-block;
    }

    .m_span,
    .p_span,
    .p_span + br {
      display: none;
    }
  }
`;

const TextWrap = styled.div`
  transform: translateY(-50%);
  padding: 0 0 0 10px;
  width: 650px;
  margin: 0;
  position: absolute;
  right: 0;
  top: 50%;
  text-align: left;
  box-sizing: border-box;
  display: inline-block;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 0 0 0 5.2%;
    width: 100%;

    @media screen and (max-width: 640px) {
      padding: 0 0 0 4%;
      width: 100%;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 0 0 0 4%;
    width: 100%;
  }
`;

const H3 = styled.h3`
  padding: 0 0 18px 0;
  position: relative;
  z-index: 1;

  :after {
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    position: absolute;
    background: #fff;
    content: "";
    display: inline-block;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 0 0 17px 0;

    :after {
      width: 40px;
      height: 2px;
    }

    @media screen and (max-width: 640px) {
      padding: 0 0 10px 0;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 0 0 10px 0;

    :after {
      width: 40px;
      height: 2px;
    }
  }
`;

const Strong = styled.strong`
  width: 100%;
  display: inline-block;
  line-height: 25px;
  font-size: 18px;
  letter-spacing: 8px;
  font-weight: 400;
  color: #cdecfb;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 6px;

    @media screen and (max-width: 640px) {
      line-height: 18px;
      font-size: 13px;
      letter-spacing: 7px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 18px;
    font-size: 13px;
    letter-spacing: 7px;
  }
`;

const Em = styled.em`
  width: 100%;
  display: inline-block;
  line-height: 114px;
  font-size: 50px;
  letter-spacing: -1px;
  font-weight: 400;
  color: #fff;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 60px;
    font-size: 33px;
    letter-spacing: -1px;

    @media screen and (max-width: 640px) {
      line-height: 73px;
      font-size: 29px;
      letter-spacing: 0px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 73px;
    font-size: 29px;
    letter-spacing: 0px;
  }
`;

const P = styled.p`
  line-height: 26px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 20px;
    font-size: 15px;

    @media screen and (max-width: 736px) {
      line-height: 19px;
      font-size: 13px;
    }
    @media screen and (max-width: 640px) {
      line-height: 19px;
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 19px;
    font-size: 14px;
  }
`;

const Pstrong = styled.strong`
  padding: 45px 0 19px 0;
  line-height: 33px;
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  display: inline-block;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 26px 0 15px 0;
    line-height: 23px;
    font-size: 18px;

    @media screen and (max-width: 640px) {
      padding: 25px 0 14px 0;
      line-height: 24px;
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 25px 0 14px 0;
    line-height: 24px;
    font-size: 18px;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  padding-bottom: 700px;
  text-align: left;
  vertical-align: top;
  display: inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: 50%;
    padding-bottom: 58.6%;

    @media screen and (max-width: 640px) {
      width: 100%;
      padding-bottom: 104%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    width: 100%;
    padding-bottom: 104%;
  }
`;

const Image = styled.img`
  width: auto;
  max-width: 960px;
  height: 700px;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: 0;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    width: auto;
    max-width: auto;
    height: 100%;
  }
`;

export default () => (
  <Container id="intro">
    병원소개
    <Box>
      <TextBox>
        <TextWrap>
          <H3>
            <Strong>HANA ORIENTAL HOSPITAL</Strong>
            <Em>하나한방병원</Em>
          </H3>
          <P>
            <Pstrong>
              환자를 먼저 생각하는 하나한방병원,
              <br />
              하나한방병원은 다릅니다.
            </Pstrong>
            프라이버시를 위한 가림막은 물론 <span className="m_span" />
            <br />
            공간을 더 넓게 하여 불편함 없이 치료를 받으실 수 있습니다. <br />
            환자분의 상태에 따라 <span className="m_span" />
            <br />
            뜸, 침치료를 포함한 다양한 치료를 받으실 수 있으며,
            <br />
            환자에게 알맞은 치료를 통해 <span className="m_span" />
            <br />
            환자의 건강한 내일을 함께 합니다.
          </P>
        </TextWrap>
      </TextBox>
      <ImageBox>
        <Image src={require("../../assets/images/intro.jpg")} />
      </ImageBox>
    </Box>
  </Container>
);
