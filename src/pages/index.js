import React, { useState } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';
import { FaBoxOpen, FaAppleAlt } from 'react-icons/fa';

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
        title="Quinta das Poesias - Produção e comércio de doces e licores tradicionais."
        meta={[
          {
            name: 'description',
            content:
              'Fabricamos de diversos produtos tradicionais, desde doces, compotas e marmeladas a mel, frutos em cada e pêras bêbedas e Licor de Ginja: Wild Cherry',
          },
          {
            name: 'keywords',
            content:
              'Quinta das Poesias, Casa Pereira, Wild Cherry, Monte Azul, doces, compotas, mel, azeite, licor de ginja, ginja, ginjinha, marmelada, pêras bêbedas',
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
              <p className="spotlight_description">Qualidade e tradição juntos com imenso sabor.</p>
              <p className="spotlight_flavors">
                <FaAppleAlt />
                Maçã, Gila, Figo, Melão, Laranja, Pêssego, Ameixa, Abóbora, Abóbora com noz,
                Marmelo, Maçã Reineta, Pêra Rocha, Morango, Tomate
              </p>
              <p className="spotlight_sizes">
                <FaBoxOpen />
                30g, 100g, 240g, 400g
              </p>
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
              <p className="spotlight_description">Conjuntos com diversos sabores de doces.</p>
              <p className="spotlight_flavors">
                <FaAppleAlt />
                Diversos
              </p>
              <p className="spotlight_sizes">
                <FaBoxOpen />
                Caixa 6x30g, Caixa 4x100g, Caixa 2x240g, Galheteiro 2x100g
              </p>
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
              <p className="spotlight_description">
                Mel de nectar
                <br />
                Pêras em calda e Pêras Bêbedas
              </p>
              <p className="spotlight_flavors">
                <FaAppleAlt />
                Mel, Mel com Avelã, Pêras Bêbedas, Pêras em Calda
              </p>
              <p className="spotlight_sizes">
                <FaBoxOpen />
                400g
              </p>
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
              <p className="spotlight_description">Marmeladas...</p>
              <p className="spotlight_flavors">
                <FaAppleAlt />
                Marmelada de Marmelo, Marmelada de Maçã Reineta
              </p>
              <p className="spotlight_sizes">
                <FaBoxOpen />
                180g, 400g
              </p>
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
                <Link to="/generic" className="button special disabled" disabled>
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
              <p>Doces de diversos sabores</p>
            </li>
            <li>
              <span className="brand">
                <img src={LogoCasaPereira} alt="Logotipo Casa Pereira" />
              </span>
              <h3>Casa Pereira</h3>
              <p>Doces e marmeladas de diversos sabores</p>
            </li>
            <li>
              <span className="brand">
                <img src={LogoWildCherry} alt="Logotipo Wild Cherry" />
              </span>
              <h3>Wild Cherry</h3>
              <p>Licor de Ginja tradicional de Alcobaça</p>
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
