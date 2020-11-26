import React from 'react';

import { Logo } from '../images/Images';

import './Splash.scss';

const Splash = () => {
  return (
    <div className='splash'>
      <Logo height='120rem' width='100%' alt='Splash image' />
      <div className='splash__text'>
        <p className='splash__header'>GET READY FOR THE AUTUMN</p>
        <p className='splash__subheader'>
          WE HAVE PREPARED EVERYTHING FOR YOU!
        </p>
      </div>
    </div>
  );
};

export default Splash;
