import React from 'react';
import { connect } from 'react-redux';

import './Navigation.scss';

const Navigation = ({ categories }) => {
  let menuCategories = [];
  if (categories && categories.length > 0) {
    menuCategories = categories.map(item => {
      return (
        <>
          <div key={item.id}>
            <a className='navigation-menu__first-level' href={item.link}>
              {item.name.toUpperCase()}
            </a>
          </div>
          {item.children
            ? item.children.map(childItem => {
                return (
                  <>
                    <div key={childItem.id}>
                      <a
                        className='navigation-menu__second-level'
                        href={childItem.link}
                      >
                        {childItem.name.toUpperCase()}
                      </a>
                    </div>
                    {childItem.children
                      ? childItem.children.map(subChildItem => {
                          return (
                            <div key={subChildItem.id}>
                              <a
                                className='navigation-menu__third-level'
                                href={subChildItem.link}
                              >
                                {subChildItem.name.toUpperCase()}
                              </a>
                            </div>
                          );
                        })
                      : null}
                  </>
                );
              })
            : null}
        </>
      );
    });
  }
  return <div className='navigation-menu'>{menuCategories}</div>;
};

const mapStateToProps = state => {
  return {
    categories: state.cat.categories,
  };
};

export default connect(mapStateToProps)(Navigation);
