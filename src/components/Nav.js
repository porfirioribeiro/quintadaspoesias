import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['jams', 'jampacks', 'pots', 'marmalades', 'cta', 'other-brands']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="jams">
          <span className="nav_link">Doces tradicionais</span>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="jampacks">
          <span className="nav_link">Conjuntos</span>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="pots">
          <span className="nav_link">Mel &amp; Frutos em calda</span>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="marmalades">
          <span className="nav_link">Marmeladas</span>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <span className="nav_link">Onde comprar?</span>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="other-brands">
          <span className="nav_link">Outras Marcas</span>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
);

export default Nav;
