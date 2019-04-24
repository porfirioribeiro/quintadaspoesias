import React, { PropsWithChildren, useState } from 'react';

import Carousel, { CarouselProps } from 'nuka-carousel';
import { FaArrowCircleLeft as ArrowLeft, FaArrowCircleRight as ArrowRight } from 'react-icons/fa';

export default function PicSlider(props: PropsWithChildren<CarouselProps>) {
  return (
    <Carousel
      style={{ width: '50%', minWidth: '300px' }}
      slidesToShow={3}
      // transitionMode="scroll3d"
      autoplay
      autoplayInterval={2000}
      pauseOnHover
      wrapAround
      renderBottomCenterControls={null}
      renderCenterRightControls={({ nextSlide }) => (
        <ArrowRight className="spotlight_slider_control" onClick={nextSlide} />
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <ArrowLeft className="spotlight_slider_control" onClick={previousSlide} />
      )}
      {...props}
    />
  );
}

// function SlideShow() {
//   const [index, setIndex] = useState(0);
//   const { allFile } = useStaticQuery(
//     graphql`
//       query {
//         allFile(
//           sort: { fields: name, order: DESC }
//           filter: { relativeDirectory: { eq: "slides" } }
//         ) {
//           edges {
//             node {
//               id
//               name
//               childImageSharp {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   );
//   //Minus 1 for array offset from 0
//   const length = allFile.edges.length - 1;
//   const handleNext = () =>
//     index === length ? setIndex(0) : setIndex(index + 1);
//   const handlePrevious = () =>
//     index === 0 ? setIndex(length) : setIndex(index - 1);
//   const { node } = allFile.edges[index];
//   return (
//     <div>
//       <div>
//         <Img
//           fluid={node.childImageSharp.fluid}
//           key={node.id}
//           alt={node.name.replace(/-/g, ' ').substring(2)}
//         />
//       </div>
//       <div>
//         <button onClick={() => handlePrevious()}>Previous</button>
//         <button onClick={() => handleNext()}>Next</button>
//       </div>
//     </div>
//   );
// }
