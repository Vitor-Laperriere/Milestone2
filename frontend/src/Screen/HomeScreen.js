import React from 'react';

import Colecoes from '../components/Components-HomeScreen/Colecoes';
import BannerHome from '../components/Components-HomeScreen/BannerHome';
import { Helmet } from 'react-helmet-async';

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BannerHome />
      <div id="titulo">
        <h3>COLLECTION LIST</h3>
      </div>
      <Colecoes />
    </>
  );
}
export default HomeScreen;
