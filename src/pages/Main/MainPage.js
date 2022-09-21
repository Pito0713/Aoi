import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const bottomTab = [
  {
    name: "home",
    component: require('../Home').default,
  },
  {
    name: "bag",
    component: require('../Bag').default,
  },
  {
    name: "sell",
    component: require('../Sell').default,
  },
  {
    name: "setting",
    component: require('../Setting').default,
  },
]

const MainPage = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
        }}
      >
        {bottomTab.map((item) => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
    </Tab.Navigator>
    </>
  );
};

export default MainPage ;