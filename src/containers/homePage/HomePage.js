import React from 'react';

import FavouritesBlock from '../../components/favouritesBlock/FavouritesBlock';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
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
      <div className='content-width'>
        <FavouritesBlock />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
