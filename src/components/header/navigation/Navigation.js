import React from 'react';
import { connect } from 'react-redux';

import './Navigation.scss';

const Navigation = ({ categories }) => {
  let menuCategories = [];
  if (categories && categories.length > 0) {
    menuCategories = categories.map(item => {
      return (
        <div key={item.backendId} className='navigation-menu__first-level'>
          <>
            <a href={item.link}>{item.name}</a>
          </>
          {item.children
            ? item.children.map(childItem => {
                return (
                  <div
                    key={childItem.backendId}
                    className='navigation-menu__second-level'
                  >
                    <a href={childItem.link}>{childItem.name}</a>
                    <span>{'>'}</span>
                    {childItem.children
                      ? childItem.children.map(subChildItem => {
                          return (
                            <div
                              key={subChildItem.backendId}
                              className='navigation-menu__third-level'
                            >
                              <a href={subChildItem.link}>
                                {subChildItem.name}
                              </a>
                            </div>
                          );
                        })
                      : null}
                  </div>
                );
              })
            : null}
        </div>
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
