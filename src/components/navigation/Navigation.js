import React from 'react';

import { menuCategoriesMock } from '../../assets/mock/MenuCategoriesMock';

import './Navigation.scss';

const Navigation = () => {
  const menuCategories = menuCategoriesMock.map(item => {
    return (
      <div className='navigation-menu'>
        <div key={item.id} className='navigation-menu__first-level'>
          <a href={item.link}>{item.name.toUpperCase()}</a>
        </div>
      </div>
    );
  });

  return <div>{menuCategories}</div>;
};

export default Navigation;
