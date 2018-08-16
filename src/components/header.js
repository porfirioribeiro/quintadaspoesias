import React from 'react';

const Header = ({ siteTitle }) => (
  <div
    css={{
      background: 'white',
      boxShadow: '0 2px 2px rgba(0,0,0,0.3)',
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
      <h1 css={{ margin: 0 }}>{siteTitle}</h1>
    </div>
  </div>
);

export default Header;
