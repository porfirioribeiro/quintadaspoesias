import React from 'react';
import { graphql, Link } from 'gatsby';
import MainNav, { NavLink } from '../components/MainNav';
import { Section } from '../components/Section';
import { theme } from '../utils/theme';

const HomePage = ({ data }) => {
  const {
    language,
    brands,
    hero_title,
    hero_text,
    about,
    products,
    contact,
  } = data.page.frontmatter;

  return (
    <React.Fragment>
      <MainNav titleTo={`/${language}/`}>
        <NavLink to={`/${language}/#about`}>{about.title}</NavLink>
        <NavLink to={`/${language}/#products`}>{products.title}</NavLink>
        <NavLink to={`/${language}/#contact`}>{contact.title}</NavLink>
      </MainNav>
      <div
        css={{
          position: 'relative',
          width: '100%',
          height: 650,
          backgroundColor: '#C7E099',
          // backgroundImage: 'url(https://images.unsplash.com/photo-1536598671674-27bfb96e07ff)',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#4C4C4C',
        }}
      >
        <h1>{hero_title}</h1>
        <p>{hero_text}</p>
        <svg
          css={{
            fill: 'white',
            position: 'absolute',
            width: '100%',
            bottom: 0,
            right: 0,
          }}
          shapeRendering="geometric-precision"
          viewBox="0 0 1000 438"
        >
          <path d="M 1000,438.7832 V 0 l -35.30273,268.75976 c -14.697,98.023 -65.27391,99.90352 -109.87891,104.72852 C 810.21336,378.31428 0,438.7832 0,438.7832 Z" />
        </svg>
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          position: 'relative',
          maxWidth: theme.size.sectionMaxWidth,
          padding: `0px ${theme.size.sectionMargin}px`,
          margin: '-150px auto 36px auto',
        }}
      >
        {brands.map((brand, i) => (
          <div
            key={i}
            css={{
              background: '#FFFFFF',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
              borderRadius: 8,
              margin: '16px 8px',
              [theme.mq({ gt: 608, lt: 'md' })]: {
                margin: '16px 6%',
              },
            }}
          >
            <div
              css={{
                width: 193,
                height: 193,
                backgroundSize: 160,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '8px 8px 0 0',
              }}
              style={{ backgroundColor: brand.background, backgroundImage: `url(${brand.logo})` }}
            />
            <div
              css={{
                fontSize: '10px',
                fontFamily: theme.fonts.special,
                color: theme.colors.primary,
                lineHeight: '18px',
                margin: '8px 16px',
              }}
            >
              {brand.description}
            </div>
            <h4 css={{ margin: '8px 16px' }}>{brand.name}</h4>
          </div>
        ))}
      </div>
      <Section id="about">
        <h2>{about.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: about.body }} />
      </Section>
      <div css={{ backgroundColor: '#DEECC1', display: 'flex' }}>
        <Section id="products">
          <h2>{products.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: products.body }} />
        </Section>
      </div>
      <Section id="contact">
        <h2>{contact.title}</h2>
      </Section>
      <footer
        css={{
          height: 250,
        }}
      >
        {data.translations.edges.map(({ node }) => (
          <Link key={node.frontmatter.language} to={node.fields.path}>
            {' '}
            {node.frontmatter.language}{' '}
          </Link>
        ))}
      </footer>
    </React.Fragment>
  );
};

export default HomePage;

export const aboutPageQuery = graphql`
  query HomePage($id: String!, $templateKey: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        language
        hero_title
        hero_text
        brands {
          name
          description
          background
          logo
        }
        about {
          title
          body
        }
        products {
          title
          body
        }
        contact {
          title
        }
      }
    }
    translations: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: $templateKey } } }
    ) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            language
          }
        }
      }
    }
  }
`;
