import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import FavouritesBlock from '../../components/favouritesBlock/FavouritesBlock';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Splash from '../../components/splash/Splash';
import WelcomeText from '../../components/welcomeText/WelcomeText';

import './HomePage.scss';

const HomePage = props => {
  const { setProducts } = props;

  useEffect(() => {
    setProducts();
  }, [setProducts]);

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

const dispatchStateToProps = dispatch => {
  return {
    setProducts: () => dispatch(actions.getProducts()),
  };
};

export default connect(null, dispatchStateToProps)(HomePage);
