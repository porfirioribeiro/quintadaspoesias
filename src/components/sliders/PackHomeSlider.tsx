import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PicSlider from './BaseSlider';

export function PackHomeSlider() {
  const q = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "pack-qp" } }
      ) {
        ...SliderImage
      }
    }
  `);

  return <PicSlider name="pack-qp" edges={q.allFile.edges} />;
}
