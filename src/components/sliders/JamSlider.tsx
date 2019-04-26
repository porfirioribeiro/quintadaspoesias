import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PicSlider from './BaseSlider';

export function JamHomeSlider() {
  const q = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "doces-qp" } }
      ) {
        ...SliderImage
      }
    }
  `);

  return <PicSlider name="doces-qp" edges={q.allFile.edges} />;
}
