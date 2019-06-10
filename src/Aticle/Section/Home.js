import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const HomeContainer = styled.div``;

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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../assets/images/${Carousels[1].image}`)}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require(`../../assets/images/${Carousels[2].image}`)}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </HomeContainer>
);

/*  
  export default () => (
    <HomeContainer id="home">
      <Carousel>
        {Carousels.map((Carousel, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/${Carousel.image}`)}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </HomeContainer>
  );
  */
