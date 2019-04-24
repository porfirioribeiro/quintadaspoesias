import React from 'react';
import GatsbyImage from 'gatsby-image';

const GatsbyImageMemo = React.memo(GatsbyImage);

// function Imgs({ fixed, alt, ...props }) {
//   return (
//     <div {...props}>
//       <GatsbyImageMemo fixed={fixed} alt={alt} />
//     </div>
//   );
// }

// // export const Img = React.memo(Imgs);
export const Img = GatsbyImageMemo;
