import React, { PropsWithChildren } from 'react';
import Carousel, { CarouselProps } from 'nuka-carousel';
import {
  FaArrowCircleLeft as ArrowLeft,
  FaArrowCircleRight as ArrowRight,
} from 'react-icons/fa';

export default function PicSlider(props: PropsWithChildren<CarouselProps>) {
  return (
    <Carousel
      style={{ width: '50%', minWidth: '300px' }}
      slidesToShow={3}
      transitionMode="scroll3d"
      autoplay
      autoplayInterval={2000}
      pauseOnHover
      wrapAround
      renderBottomCenterControls={null}
      renderCenterRightControls={({ nextSlide }) => (
        <ArrowRight className="spotlight_slider_control" onClick={nextSlide} />
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <ArrowLeft
          className="spotlight_slider_control"
          onClick={previousSlide}
        />
      )}
      {...props}
    />
  );
}
