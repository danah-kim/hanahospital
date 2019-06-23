import React from "react";
import styled from "styled-components";
import Lazyload from "react-lazyload";
import { CSSTransition } from "react-transition-group";

const Container = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h3`
  padding: 76px 0 56px 0;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    padding: 55px 0 27px 0;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    padding: 47px 0 13px 0;
  }
`;

const Em = styled.em`
  width: 100%;
  display: inline-block;
  line-height: 96px;
  font-size: 50px;
  letter-spacing: -1px;
  font-weight: 400;
  color: #333;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 61px;
    font-size: 33px;
    letter-spacing: 0px;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 54px;
    font-size: 29px;
    letter-spacing: 0px;
  }
`;

const Span = styled.span`
  width: 100%;
  display: inline-block;
  line-height: 22px;
  font-size: 16px;
  color: #777;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    line-height: 22px;
    font-size: 16px;
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    line-height: 23px;
    font-size: 16px;
  }
`;

const Br = styled.br`
  display: none;

  @media only screen and (max-width: 1317px) and (min-width: 531px) {
    @media screen and (max-width: 667px) {
      display: inline-block;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    display: inline-block;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 667px) {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 300px;
  background-size: 100% 100%;

  :hover {
    opacity: 0.7;
    transition-duration: 0.5s;
  }

  @media only screen and (min-width: 531px) and (max-width: 1317px) {
    height: 300px;

    @media screen and (max-width: 667px) {
      height: 250px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 530px) {
    height: 250px;
  }
`;

const images = [
  "main.jpg",
  "treatment_room.jpeg",
  "manual_therapy_room.jpeg",
  "machine.jpg",
  "2f_ward.jpg",
  "3f_ward.jpg",
  "2f_hallway.jpg",
  "3f_hallway.jpg",
  "ward.jpeg",
  "waitingRoom.jpg",
  "care_room.jpg",
  "restroom.jpeg"
];

export default () => (
  <Container id="facilities">
    <Title>
      <Em>내부시설</Em>
      <Span>
        하나한방병원은 치료 받으시는 모든 환자분들의 <Br />
        빠른 건강 회복을 위해 최선을 다하고 있습니다.
      </Span>
    </Title>

    <Card>
      {images.map((image, index) => (
        <Lazyload throttle={200}>
          <Image key={index} bgUrl={require(`../../assets/images/${image}`)} />
        </Lazyload>
      ))}
    </Card>
  </Container>
);

/*ToDo
 - 이미지에 효과 주기
 */
