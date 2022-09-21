import * as React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, persistor } from '../src/store/index';
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { unauthedPages, authedPages } from './router/routes';
import { i18n } from "./i18n/i18n";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppProvider, AppContext } from './store/AppContent';

// import {Typography, Colors} from 'react-native-ui-lib';

// Colors.loadSchemes({
//   light: {
//     screenBG: 'transparent',
//     textColor: '#FF69B4',
//     moonOrSun: '#FF69B4',
//     mountainForeground: '#FF69B4',
//     mountainBackground: '#FF69B4',
//   },
//   dark: {
//     screenBG:'#FF69B4',
//     textColor: '#FF69B4',
//     moonOrSun:'#FF69B4',
//     mountainForeground: '#FF69B4',
//     mountainBackground: '#FF69B4',
//   }
// });

// Colors.loadColors({
//   pink: '#FF69B4',
//   gold: '#FFD700',
// });

// Typography.loadTypographies({
//   h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
//   h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
// });

const Stack = createNativeStackNavigator();

const UnauthedPage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signIn"
        screenOptions={{
          animationEnabled: true,
          headerShown: false,
          cardOverlayEnabled: true,
        }}
      >
        {unauthedPages.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AuthedPage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false, 
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerStyle:{
            backgroundColor: 'transparent'
          },
        }}
      >
        {authedPages.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LaunchPage = () => {
  const token = useSelector(state => state.token)
  const language = useSelector(state => state.language)
  console.log(language)
  React.useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return token ? (<AuthedPage />) : (<UnauthedPage />)
};

const App = () => { 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppProvider>
            <LaunchPage />
          </AppProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

  export { App };