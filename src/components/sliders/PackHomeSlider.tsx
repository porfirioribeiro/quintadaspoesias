import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PicSlider from '../PicSlider';
import { Img } from '../Img';

export function PackHomeSlider() {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "pack-qp" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <PicSlider>
      {allFile.edges.map((e: any) => (
        <Img key={e.node.id} alt={e.node.name} fixed={e.node.childImageSharp.fixed} />
      ))}
    </PicSlider>
  );
}
