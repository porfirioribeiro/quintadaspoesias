import React, { useState } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';

import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import slideJam01 from '../assets/images/doces-qp/slide-1.png';
import slideJam02 from '../assets/images/doces-qp/slide-2.png';
import slideJam03 from '../assets/images/doces-qp/slide-3.png';
import slideJam04 from '../assets/images/doces-qp/slide-4.png';
import slidePack01 from '../assets/images/pack-qp/slide01.png';
import slidePack02 from '../assets/images/pack-qp/slide02.png';
import slidePack03 from '../assets/images/pack-qp/slide03.png';
import slidePack04 from '../assets/images/pack-qp/slide04.png';
import slidePot01 from '../assets/images/pots-qp/slide01.png';
import slidePot02 from '../assets/images/pots-qp/slide02.png';
import slidePot03 from '../assets/images/pots-qp/slide03.png';
import slideMarm01 from '../assets/images/marm-qp/slide01.png';
import slideMarm02 from '../assets/images/marm-qp/slide02.png';
import slideMarm03 from '../assets/images/marm-qp/slide03.png';
import slideMarm04 from '../assets/images/marm-qp/slide04.png';

import LogoWildCherry from '../assets/images/LogoWildCherry.svg';
import LogoMonteAzul from '../assets/images/LogoMonteAzul.svg';
import LogoCasaPereira from '../assets/images/LogoCasaPereira.svg';
import PicSlider from '../components/PicSlider';

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

      <Waypoint
        onEnter={() => setStickyNav(false)}
        onLeave={() => setStickyNav(true)}
      />
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
            <PicSlider>
              <img src={slideJam01} />
              <img src={slideJam02} />
              <img src={slideJam03} />
              <img src={slideJam04} />
              <img src={slideJam01} />
              <img src={slideJam02} />
              <img src={slideJam03} />
              <img src={slideJam04} />
            </PicSlider>
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
            <PicSlider slidesToShow={1}>
              <img src={slidePack01} />
              <img src={slidePack02} />
              <img src={slidePack03} />
              <img src={slidePack04} />
              <img src={slidePack01} />
              <img src={slidePack02} />
              <img src={slidePack03} />
              <img src={slidePack04} />
            </PicSlider>
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
            <PicSlider slidesToShow={3}>
              <img src={slidePot01} />
              <img src={slidePot02} />
              <img src={slidePot03} />
              <img src={slidePot01} />
              <img src={slidePot02} />
              <img src={slidePot03} />
              <img src={slidePot01} />
              <img src={slidePot02} />
              <img src={slidePot03} />
            </PicSlider>
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
            <PicSlider slidesToShow={2}>
              <img src={slideMarm01} />
              <img src={slideMarm02} />
              <img src={slideMarm03} />
              <img src={slideMarm04} />
              <img src={slideMarm01} />
              <img src={slideMarm02} />
              <img src={slideMarm03} />
              <img src={slideMarm04} />
            </PicSlider>
          </div>
        </section>

        <section id="cta" className="main special">
          <header className="major">
            <h2>Onde comprar?</h2>
            <p>
              Os nossos produtos poderam ser encontrados em diversos
              supermercados e lojas
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
                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                consequat tempus veroeros sed consequat.
              </p>
            </li>
            <li>
              <span className="brand">
                <img src={LogoCasaPereira} alt="Logotipo Casa Pereira" />
              </span>
              <h3>Casa Pereira</h3>
              <p>
                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                consequat tempus veroeros sed consequat.
              </p>
            </li>
            <li>
              <Link to="/wildcherry" className="brand">
                <img src={LogoWildCherry} alt="Logotipo Wild Cherry" />
              </Link>
              <h3>Wild Cherry</h3>
              <p>
                Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                consequat tempus veroeros sed consequat.
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
