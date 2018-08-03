import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { rhythm } from '../utils/typography';

import styled, { css } from 'react-emotion';

const Link = styled(GatsbyLink)({
  color: 'white',
  textDecoration: 'none',
});

const Child = styled.span({
  color: 'red',
});

const Cont = styled.div({
  color: 'green',
  [Child]: {
    border: '1px solid red',
  },
});

const Header = ({ siteTitle }) => (
  <div
    css={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 css={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Cont>
        hei
        <Child>Hello</Child>
      </Cont>
      <Child>out</Child>
    </div>
  </div>
);

export default Header;
