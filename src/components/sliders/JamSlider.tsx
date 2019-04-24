import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PicSlider from '../PicSlider';
import { Img } from '../Img';

export function JamHomeSlider() {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "doces-qp" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(height: 200) {
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
