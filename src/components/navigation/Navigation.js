import React from 'react';

import { menuCategoriesMock } from '../../assets/mock/MenuCategoriesMock';

import './Navigation.scss';

const Navigation = () => {
  //   const categoryBuilder = (catObj, itemClass) =>
  //     catObj.map(item => {
  //       return (
  //         <div>
  //           <a key={item.id} className={itemClass} href={item.link}>
  //             {item.name.toUpperCase()}
  //           </a>
  //         </div>
  //       );
  //     });

  const menuCategories = menuCategoriesMock.map(item => {
    return (
      <>
        <div>
          <a
            key={item.id}
            className='navigation-menu__first-level'
            href={item.link}
          >
            {item.name.toUpperCase()}
          </a>
        </div>
        {item.children
          ? item.children.map(childItem => {
              return (
                <>
                  <div>
                    <a
                      key={childItem.id}
                      className='navigation-menu__second-level'
                      href={childItem.link}
                    >
                      {childItem.name.toUpperCase()}
                    </a>
                  </div>
                  {childItem.children
                    ? childItem.children.map(subChildItem => {
                        return (
                          <div>
                            <a
                              key={subChildItem.id}
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

  return <div class='navigation-menu'>{menuCategories}</div>;
};

export default Navigation;
