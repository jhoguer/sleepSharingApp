import React from 'react';

import GlobalStyle from '../GlobalStyles';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Prom from '../components/Prom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Register from '../components/Register';
// import Sppiner from '../general/Sppiner'
// import PageNotFound from '../general/ PageNotFound'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Register />
      {/* <PageNotFound /> */}
      <Prom />
      <Contact />
      <Footer />
      {/* <Sppiner /> */}
    </>
  );
};

export default App;
