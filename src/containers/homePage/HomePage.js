import React from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Splash from '../../components/splash/Splash';
import WelcomeText from '../../components/welcomeText/WelcomeText';

import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='content-width splash-row'>
        <Splash />
        <WelcomeText />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
