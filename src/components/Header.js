import React from 'react';

import logo from '../assets/images/logo.svg';

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="Logotipo Quinta das Poesias" />
    </span>
    <h1>Quinta das Poesias</h1>
    <p>Produção e comércio de doces e licores tradicionais.</p>
  </header>
);

export default Header;
