import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Sobre nós</h2>
      <p>
        A Quinta das Poesias dedica-se desde há muitos anos à produção de produtos tradicionais,
        seguindo receitas antigas deixadas pelos seus antepassados. Doces, compotas, mel e licores
        fazem parte do leque de produtos que produzimos e comercializamos.
      </p>
      {/* <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul> */}
    </section>
    <section>
      <h2>Contactos</h2>
      <dl className="alt">
        <dt>Morada</dt>
        <dd>
          Rua Vale da Rosa, nº 9 Ardido &bull; 2460-817 Turquel &bull; Alcobaça &bull; Portugal
        </dd>
        <dt>Telefone</dt>
        <dd>+351 918115638</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:quintadaspoesias@gmail.com">quintadaspoesias@gmail.com</a>
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
            className="icon alt"
            title="Facebook"
            aria-label="Facebook"
          >
            <FaFacebookF />
            {/* <span className="label">Facebook</span> */}
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
