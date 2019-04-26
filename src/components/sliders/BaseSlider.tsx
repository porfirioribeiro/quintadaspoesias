import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { graphql } from 'gatsby';

import Carousel, { CarouselProps } from 'nuka-carousel';
import { FaArrowCircleLeft as ArrowLeft, FaArrowCircleRight as ArrowRight } from 'react-icons/fa';

import t from './slideText.json';
import { listenToIntersections } from './io';

export const SliderImage = graphql`
  fragment SliderImage on FileConnection {
    edges {
      node {
        name
        childImageSharp {
          fixed(height: 250) {
            src
            base64
          }
          big: fixed {
            src
          }
        }
      }
    }
  }
`;

interface PicSliderProps extends CarouselProps {
  name: string;
  edges: any[];
}

interface Popup {
  src: string;
  title: string;
}

export default function PicSlider({ edges, name, ...props }: PropsWithChildren<PicSliderProps>) {
  const slideTexts = (t as any)[name] || {};
  const [isShown, setShown] = useState(false);
  const [popup, setPopUpSrc] = useState<Popup>();

  const ref = useRef<any>();
  useEffect(() => listenToIntersections(ref.current.frame, () => setShown(true)), []);

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    setPopUpSrc({ src: e.currentTarget.dataset.bigSrc!, title: e.currentTarget.title });
  }

  function handleClose() {
    setPopUpSrc(undefined);
  }

  return (
    <React.Fragment>
      <Carousel
        ref={ref}
        slidesToShow={2}
        // transitionMode="scroll3d"
        autoplay
        // disableAnimation
        // autoplayInterval={2000}
        // speed={1}
        pauseOnHover
        wrapAround
        renderBottomCenterControls={null as any}
        renderCenterRightControls={({ nextSlide }) => (
          <ArrowRight className="spotlight_slider_control" onClick={nextSlide} />
        )}
        renderCenterLeftControls={({ previousSlide }) => (
          <ArrowLeft className="spotlight_slider_control" onClick={previousSlide} />
        )}
        {...props}
      >
        {edges.map((e: any) => {
          return (
            <img
              key={e.node.name}
              alt={slideTexts[e.node.name]}
              title={slideTexts[e.node.name]}
              src={e.node.childImageSharp.fixed[isShown ? 'src' : 'base64']}
              onClick={handleClick}
              data-big-src={e.node.childImageSharp.big.src}
            />
          );
        })}
      </Carousel>
      <CSSTransition
        in={!!popup}
        timeout={300}
        classNames="spotlight_slider_popup"
        unmountOnExit
        mountOnEnter
      >
        <div className="spotlight_slider_popup" onClick={handleClose}>
          <div className="spotlight_slider_popup_in">
            <img {...popup} />
            <h4>{popup && popup.title}</h4>
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}
