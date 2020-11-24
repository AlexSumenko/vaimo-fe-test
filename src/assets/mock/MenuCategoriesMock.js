export const menuCategoriesMock = [
  { id: 1, name: 'Women', link: '#' },
  { id: 2, name: 'Men', link: '#' },
  { id: 3, name: 'Junior', link: '#' },
  { id: 4, name: 'Accessories', link: '#' },
  {
    id: 5,
    name: 'Collections',
    link: '#',
    children: [
      {
        id: 6,
        name: '2014',
        link: '#',
      },
      {
        id: 7,
        name: '2013',
        link: '#',
      },
      {
        id: 8,
        name: '2012',
        link: '#',
        children: [
          { id: 9, name: 'Summer', link: '#' },
          { id: 10, name: 'Autumn', link: '#' },
          { id: 11, name: 'Winter', link: '#' },
          { id: 12, name: 'Spring', link: '#' },
        ],
      },
      {
        id: 13,
        name: '2011',
        link: '#',
      },
    ],
  },
  { id: 14, name: 'Sale', link: '#' },
  { id: 15, name: 'My Account', link: '#' },
];
