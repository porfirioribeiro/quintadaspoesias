import React, { useState } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';

import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';

import LogoWildCherry from '../assets/images/LogoWildCherry.svg';
import LogoMonteAzul from '../assets/images/LogoMonteAzul.svg';
import LogoCasaPereira from '../assets/images/LogoCasaPereira.svg';
import { JamHomeSlider } from '../components/sliders/JamSlider';
import { PackHomeSlider } from '../components/sliders/PackHomeSlider';
import { PotHomeSlider } from '../components/sliders/PotHomeSlider';
import { MarmHomeSlider } from '../components/sliders/MarmHomeSlider';

export default function Index() {
  const [stickyNav, setStickyNav] = useState(false);
  return (
    <Layout>
      <Helmet
        title="Quinta das Poesias"
        meta={[
          {
            name: 'description',
            content: 'Comercio de doces e licores tradicionais',
          },
        ]}
        htmlAttributes={{ lang: 'pt' }}
      />

      <Header />

      <Waypoint onEnter={() => setStickyNav(false)} onLeave={() => setStickyNav(true)} />
      <Nav sticky={stickyNav} />

      <div id="main">
        <section id="jams" className="main">
          <div className="spotlight">
            <div className="spotlight_content">
              <header className="major">
                <h2>Doces tradicionais</h2>
              </header>
              <p>Qualidade e tradição juntos com imenso sabor.</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </div>
            <JamHomeSlider />
          </div>
        </section>

        <section id="jampacks" className="main">
          <div className="spotlight">
            <div className="spotlight_content">
              <header className="major">
                <h2>Conjuntos</h2>
              </header>
              <p>Qualidade e tradição juntos com imenso sabor.</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </div>
            <PackHomeSlider />
          </div>
        </section>

        <section id="pots" className="main">
          <div className="spotlight">
            <div className="spotlight_content">
              <header className="major">
                <h2>Mel &amp; Frutos em calda</h2>
              </header>
              <p>Qualidade e tradição juntos com imenso sabor.</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </div>
            <PotHomeSlider />
          </div>
        </section>

        <section id="marmalades" className="main">
          <div className="spotlight">
            <div className="spotlight_content">
              <header className="major">
                <h2>Marmeladas</h2>
              </header>
              <p>Qualidade e tradição juntos com imenso sabor.</p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </div>
            <MarmHomeSlider />
          </div>
        </section>

        <section id="cta" className="main special">
          <header className="major">
            <h2>Onde comprar?</h2>
            <p>
              Os nossos produtos poderam ser encontrados em diversos supermercados e lojas
              <br />
              por todo o país.
            </p>
          </header>
          <footer className="major">
            <ul className="actions">
              <li>
                <Link to="/generic" className="button special">
                  Encontre um revendedor
                </Link>
              </li>
            </ul>
          </footer>
        </section>

        <section id="other-brands" className="main special">
          <header className="major">
            <h2>Outras marcas</h2>
          </header>
          <ul className="features">
            <li>
              <span className="brand">
                <img src={LogoMonteAzul} alt="Logotipo Monte Azul" />
              </span>
              <h3>Monte Azul</h3>
              <p>
                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                veroeros sed consequat.
              </p>
            </li>
            <li>
              <span className="brand">
                <img src={LogoCasaPereira} alt="Logotipo Casa Pereira" />
              </span>
              <h3>Casa Pereira</h3>
              <p>
                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                veroeros sed consequat.
              </p>
            </li>
            <li>
              <Link to="/wildcherry" className="brand">
                <img src={LogoWildCherry} alt="Logotipo Wild Cherry" />
              </Link>
              <h3>Wild Cherry</h3>
              <p>
                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus
                veroeros sed consequat.
              </p>
            </li>
          </ul>
          {/* <footer className="major">
            <ul className="actions">
              <li>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </footer> */}
        </section>
      </div>
    </Layout>
  );
}
