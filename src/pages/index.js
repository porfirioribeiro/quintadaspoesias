import React, { useState } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Waypoint } from 'react-waypoint';
import Carousel from 'nuka-carousel';

import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import pic01 from '../assets/images/pic01.jpg';

import LogoWildCherry from '../assets/images/LogoWildCherry.svg';
import LogoMonteAzul from '../assets/images/LogoMonteAzul.svg';
import LogoCasaPereira from '../assets/images/LogoCasaPereira.svg';

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
        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Doces tradicionais</h2>
              </header>
              <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat
                consequat magna adipiscing magna etiam amet veroeros. Lorem
                ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum
                dolor sit amet aliquam.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </div>
            <span style={{ width: '50%', minWidth: '300px' }}>
              {/* <img src={pic01} alt="" /> */}
              <Carousel
                slidesToShow={2}
                // withoutControls
                autoplay
                wrapAround
                renderBottomCenterControls={null}
              >
                <img src="http://placehold.it/1000x400/ffff00/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffff00/c0392b/&text=slide2" />
                <img src="http://placehold.it/1000x400/ffff00/c0392b/&text=slide3" />
                <img src="http://placehold.it/1000x400/ffff00/c0392b/&text=slide4" />
                <img src="http://placehold.it/1000x400/ffff00/c0392b/&text=slide5" />
                <img src="http://placehold.it/1000x400/ffff00/c0392b/&text=slide6" />
              </Carousel>
            </span>
          </div>
        </section>

        <section id="first" className="main special">
          <header className="major">
            <h2>Primeiro conteudo</h2>
          </header>
        </section>

        <section id="second" className="main special">
          <header className="major">
            <h2>Ipsum consequat</h2>
            <p>
              Donec imperdiet consequat consequat. Suspendisse feugiat congue
              <br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.
            </p>
          </header>
          <ul className="statistics">
            <li className="style1">
              <span className="icon fa-code-fork" />
              <strong>5,120</strong> Etiam
            </li>
            <li className="style2">
              <span className="icon fa-folder-open-o" />
              <strong>8,192</strong> Magna
            </li>
            <li className="style3">
              <span className="icon fa-signal" />
              <strong>2,048</strong> Tempus
            </li>
            <li className="style4">
              <span className="icon fa-laptop" />
              <strong>4,096</strong> Aliquam
            </li>
            <li className="style5">
              <span className="icon fa-diamond" />
              <strong>1,024</strong> Nullam
            </li>
          </ul>
          <p className="content">
            Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu
            arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac
            arcu sit amet, fermentum pellentesque et purus. Integer maximus
            varius lorem, sed convallis diam accumsan sed. Etiam porttitor
            placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
            ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget
            purus nec nulla mattis et accumsan ut magna libero. Morbi auctor
            iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque.
            Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui
            curabitur lacinia.
          </p>
          <footer className="major">
            <ul className="actions">
              <li>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
            </ul>
          </footer>
        </section>

        <section id="cta" className="main special">
          <header className="major">
            <h2>Congue imperdiet</h2>
            <p>
              Donec imperdiet consequat consequat. Suspendisse feugiat congue
              <br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.
            </p>
          </header>
          <footer className="major">
            <ul className="actions">
              <li>
                <Link to="/generic" className="button special">
                  Get Started
                </Link>
              </li>
              <li>
                <Link to="/generic" className="button">
                  Learn More
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
