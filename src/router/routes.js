const unauthedPages = [
  {
    name: 'signIn',
    component: require('../pages/Sign/SignInPage').default,
  },
];

const authedPages = [
  {
    name: "main",
    component: require('../pages/Main/MainPage').default,
  },
  {
    name: "itemComponent",
    component: require('../pages/Bag/ItemComponent').default,
  }
];


export { 
  unauthedPages,
  authedPages,
};
