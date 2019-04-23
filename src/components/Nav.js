import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['jams', 'jampacks', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="jams">
          <a href="#">Doces tradicionais</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="jampacks">
          <a href="#">Conjuntos</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Second Section</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <a href="#">Get Started</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="other-brands">
          <a href="#">Outras Marcas</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
);

export default Nav;
