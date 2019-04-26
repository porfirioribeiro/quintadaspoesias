import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PicSlider from './BaseSlider';

export function MarmHomeSlider() {
  const q = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "marm-qp" } }
      ) {
        ...SliderImage
      }
    }
  `);

  return <PicSlider name="marm-qp" edges={q.allFile.edges} />;
}
