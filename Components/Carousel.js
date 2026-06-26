import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselItem } from "./CarouselItem";
import projects from "../assets/projects.json";
import styled from "styled-components";
import { CustomArrow } from "./CustomArrow";

const CarouselContainer = styled.section`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem 1rem 3.5rem;

  .carousel-headline {
    font-family: ${props => props.theme.fontHeading};
    font-weight: 600;
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    line-height: 1.25;
    color: ${props => props.theme.foreground};
    text-align: center;
    margin-bottom: 2rem;
  }

  .slick-dots li button:before {
    color: ${props => props.theme.accent};
    opacity: 0.3;
    font-size: 9px;
  }
  .slick-dots li.slick-active button:before {
    color: ${props => props.theme.accent};
    opacity: 1;
  }
`;

class Carousel extends Component {
  state = { reducedMotion: false };

  componentDidMount() {
    if (typeof window !== "undefined" && window.matchMedia) {
      this.setState({
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
          .matches
      });
    }
  }

  render() {
    const { reducedMotion } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: reducedMotion ? 0 : 450,
      swipeToSlide: true,
      autoplay: !reducedMotion,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomArrow />,
      prevArrow: <CustomArrow />
    };
    return (
      <CarouselContainer>
        <h2 className="carousel-headline">
          Here are some of the projects I've worked on by myself or with a
          group.
        </h2>
        <Slider {...settings}>
          {projects.map((project, i) => (
            <CarouselItem project={project} key={project.name + i} />
          ))}
        </Slider>
      </CarouselContainer>
    );
  }
}

export { Carousel };
