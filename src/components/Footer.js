import React from 'react';
import { Link } from 'gatsby';

import logo from '../assets/images/logo.svg';

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Aliquam sed mauris</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contactos</h2>
      <dl className="alt">
        <dt>Morada</dt>
        <dd>
          Rua Vale da Rosa, nº 9 Ardido &bull; 2460-817 Turquel &bull; Alcobaça
          &bull; Portugal
        </dd>
        <dt>Telefone</dt>
        <dd>+351 918115638</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:quintadaspoesias@gmail.com">
            quintadaspoesias@gmail.com
          </a>
        </dd>
      </dl>
      <ul className="icons">
        {/* <li>
          <a href="#" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li> */}
        <li>
          <a
            href="https://facebook.com/quintadaspoesias"
            className="icon fa-facebook alt"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        {/* <li>
          <a href="#" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
    <p className="copyright">&copy; 2019 Quinta das Poesias</p>
  </footer>
);

export default Footer;
