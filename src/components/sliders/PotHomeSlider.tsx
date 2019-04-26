import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PicSlider from './BaseSlider';

export function PotHomeSlider() {
  const q = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "pots-qp" } }
      ) {
        ...SliderImage
      }
    }
  `);

  return <PicSlider name="pots-qp" edges={q.allFile.edges} />;
}
