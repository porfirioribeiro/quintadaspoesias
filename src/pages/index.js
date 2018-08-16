import React from 'react';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      <img src={require('../images/QuintaDasPoesias.png')} alt="QuintaDasPoesias" />
      <img src={require('../images/MonteAzul.png')} alt="MonteAzul" />
      <img src={require('../images/WildCherry.png')} alt="WildCherry" />
      <img src={require('../images/CasaPereira.png')} alt="CasaPereira" />
    </div>
    <p>Estamos a trabalhar para lhe trazer algo novo</p>
    <p>
      Entretanto poderá os contactar para o seguinte email:
      <a href="mailto:quintadaspoesias@gmail.com">quintadaspoesias@gmail.com</a>
    </p>
  </Layout>
);

export default IndexPage;
