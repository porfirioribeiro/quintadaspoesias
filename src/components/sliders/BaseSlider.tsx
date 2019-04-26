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
          original {
            src
            width
            height
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
  width: number;
  height: number;
}

export default function PicSlider({ edges, name, ...props }: PropsWithChildren<PicSliderProps>) {
  const slideTexts = (t as any)[name] || {};
  const [isShown, setShown] = useState(false);
  const [popup, setPopUp] = useState<Popup>();

  const ref = useRef<any>();
  useEffect(() => listenToIntersections(ref.current.frame, () => setShown(true)), []);

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
        {edges.map((edge: any) => {
          return (
            <img
              key={edge.node.name}
              alt={slideTexts[edge.node.name]}
              title={slideTexts[edge.node.name]}
              src={edge.node.childImageSharp.fixed[isShown ? 'src' : 'base64']}
              onClick={() => {
                const title = slideTexts[edge.node.name];
                const { src, width, height } = edge.node.childImageSharp.original;
                const img = new Image();
                img.src = edge.node.childImageSharp.original.src;
                if (!img.width) {
                  setPopUp({
                    src: edge.node.childImageSharp.fixed.src,
                    width,
                    height,
                    title,
                  });

                  img.onload = () => setPopUp({ src, width, height, title });
                } else {
                  setPopUp({ src, width, height, title });
                }
              }}
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
        <div className="spotlight_slider_popup" onClick={() => setPopUp(undefined)}>
          <div className="spotlight_slider_popup_in">
            <img {...popup} />
            <h4>{popup && popup.title}</h4>
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}
