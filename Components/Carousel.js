import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselItem } from "./CarouselItem";
import projects from "../assets/projects.json";
import styled from "styled-components";
import { CustomArrow } from "./CustomArrow";

const CarouselContainer = styled.div`
  .carousel-headline {
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
  }
`;

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 4500,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomArrow />,
      prevArrow: <CustomArrow />
    };
    return (
      <CarouselContainer className="py-5 px-2">
        <h1 className="carousel-headline pb-3">
          Here are some of the projects I've worked on by myself or with a
          group.
        </h1>
        <Slider {...settings}>
          {projects.map(project => (
            <CarouselItem project={project} />
          ))}
        </Slider>
      </CarouselContainer>
    );
  }
}

export { Carousel };
